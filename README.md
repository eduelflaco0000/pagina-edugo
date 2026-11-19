# EDUGO. — Soluciones digitales

> Tecnología que impulsa negocios.

**📌 ¿Dónde está la web y cómo modificarla? → [GUIA-RAPIDA.md](./GUIA-RAPIDA.md)**

Web oficial de **EDUGO**, la marca de soluciones digitales de Eduardo Rubio.
Es una landing de una sola página con animación de bienvenida, servicios, portafolio con galerías interactivas, proceso de trabajo, preguntas frecuentes y varios accesos a WhatsApp.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Motion · Lucide Icons.
No usa base de datos ni panel administrativo: todo el contenido se edita en `src/config/`.

---

## 1. Requisitos

- Node.js 18.18 o superior (se recomienda la versión 20 o la 22)
- npm

## 2. Instalación y ejecución local

```bash
npm install
npm run dev          # entorno de desarrollo → http://localhost:3000
```

Para probar la versión de producción:

```bash
npm run build
npm start
```

Otros comandos: `npm run lint` (revisión del código).

> La animación de bienvenida se muestra **una vez por sesión**. Para verla de nuevo, abre una pestaña de incógnito o borra `sessionStorage` (clave `edugo-intro`).

---

## 3. Qué editar (archivos de configuración)

| Qué quieres cambiar | Archivo |
| --- | --- |
| WhatsApp, mensaje inicial, correo, Instagram, TikTok, SEO, menú | `src/config/site.ts` |
| Servicios, pasos del proceso, preguntas frecuentes | `src/config/content.ts` |
| Proyectos del portafolio y sus imágenes | `src/config/projects.ts` |
| Imágenes de los proyectos | `public/projects/<id-del-proyecto>/` |

### Datos de contacto

En `src/config/site.ts`:

- `whatsappNumber`: `51912305473` (Perú, +51). Se escribe solo con dígitos, con el código de país y sin `+`.
- `social.instagram` y `social.tiktok`: ya están configurados.
- `email`: `edurubio@outlook.es`.

Todos los botones de WhatsApp (encabezado, portada, botón flotante, proyectos, proceso, FAQ, contacto y footer) usan el mismo enlace, generado en `src/lib/whatsapp.ts`.

### Agregar o editar un proyecto

1. Crea la carpeta `public/projects/mi-proyecto/` y copia ahí las capturas (`.jpg`, `.png`, `.webp`).
2. En `src/config/projects.ts`, añade un objeto al arreglo `projects`:

```ts
{
  id: "mi-proyecto",
  order: 5,                       // orden de visualización
  published: true,                // false = oculto
  name: "Nombre del proyecto",
  category: "Sistema empresarial",
  stage: "Proyecto desarrollado", // o "En desarrollo" | "Prototipo" | "Concepto / demostración"
  client: "Empresa",              // opcional
  clientAuthorized: false,        // true solo con autorización del cliente
  description: "Descripción breve.",
  features: ["Funcionalidad 1", "Funcionalidad 2"],
  images: [
    { src: "/projects/mi-proyecto/portada.jpg", alt: "Panel principal", caption: "Opcional" },
    { src: "/projects/mi-proyecto/reportes.jpg", alt: "Módulo de reportes" },
  ],
}
```

La **primera imagen** es la portada. La galería (flechas, contador, miniaturas, deslizamiento táctil y vista ampliada) se crea automáticamente.
Las fotos se optimizan solas (AVIF/WebP y tamaño adaptado). Se recomiendan capturas en formato 16:10, por ejemplo de 1600×1000 px.

Las imágenes actuales `evidencia-0X.svg` son **marcadores provisionales**. Reemplázalas por evidencias reales.
Si necesitas regenerarlas: `node scripts/generate-placeholders.mjs`.

---

## 4. Estructura del proyecto

```
src/
  app/
    layout.tsx            Metadatos SEO, fuentes y script de la intro
    page.tsx              Composición de la página y datos estructurados (schema.org)
    globals.css           Estilos globales, animación de intro y de portada
    icon.svg              Favicon (símbolo E)
    apple-icon.tsx        Icono para iOS
    opengraph-image.tsx   Imagen para compartir en redes
    sitemap.ts · robots.ts · manifest.ts
  config/                 ← CONTENIDO EDITABLE
  lib/                    whatsapp.ts, contact-links.ts, utils.ts
  components/
    brand/                LogoMark (símbolo E), Logo
    layout/               Header, Footer, WhatsAppFloat, IntroAnimation, MotionProvider
    sections/             Hero, HeroBackground, About, Services, Projects, Process, FAQ, Contact
    projects/             ProjectCard, ProjectGallery, Lightbox, useSwipe
    ui/                   Button, Reveal, SectionHeading, Icon, SocialIcons
public/
  projects/<id>/          Imágenes de cada proyecto
  edugo-symbol.svg        Símbolo E para usar en redes sociales
```

### Rendimiento y accesibilidad

- La página se genera de forma estática. La carga inicial de JavaScript es de unos 145 kB.
- La intro y la entrada de la portada usan solo CSS: no retrasan la carga y se pueden omitir con un botón, Escape, clic o scroll.
- Con "reducir movimiento" activado en el dispositivo, no se muestra la intro y se desactivan las animaciones.
- El fondo de partículas se pausa cuando no está visible y usa menos partículas en móviles.
- Motion se carga con `LazyMotion` para reducir el peso del JavaScript.
- Incluye HTML semántico, enlace "Saltar al contenido", foco visible, atributos ARIA en el menú, el acordeón y la galería, y navegación con teclado en la galería y el lightbox.

---

## 5. Publicar en Vercel

1. Sube el proyecto a un repositorio de GitHub, GitLab o Bitbucket.
2. En [vercel.com](https://vercel.com) elige **Add New → Project** e importa el repositorio. Vercel detecta Next.js automáticamente y no hace falta configurar nada más.
3. (Opcional) En **Settings → Environment Variables** puedes definir:

| Variable | Descripción |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública sin `/` final (p. ej. `https://www.tudominio.com`). Se usa en SEO, sitemap y Open Graph. Si no se define, se usa el dominio de producción de Vercel. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp. Alternativa a editar `site.ts`. |

4. Pulsa **Deploy**. Cada `git push` a la rama principal publica una nueva versión automáticamente.
5. Para usar un dominio propio, ve a **Settings → Domains**.

También puedes publicar desde la terminal con la CLI de Vercel: `npx vercel` (vista previa) y `npx vercel --prod` (producción).

Consulta `.env.example` para ver la plantilla de variables.

---

© 2026 EDUGO. Todos los derechos reservados.
