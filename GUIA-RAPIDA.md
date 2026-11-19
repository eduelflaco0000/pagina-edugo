# 📌 Guía rápida — Web de EDUGO

## Dónde está mi web

| Qué | Dónde |
| --- | --- |
| **Código (el original)** | https://github.com/eduelflaco0000/pagina-edugo |
| **Web publicada** | https://pagina-edugo.vercel.app |
| **Panel de publicación** | https://vercel.com → proyecto `pagina-edugo` |

- El código vive en **GitHub**. Cada cambio que se sube a la rama `main` se publica **automáticamente** en Vercel en ~1 minuto.
- Si una publicación sale mal: Vercel → proyecto → **Deployments** → elige la versión anterior → **Instant Rollback**.
- Dominio propio (opcional): Vercel → **Settings → Domains**.

---

## Cómo modificarla

### Opción A — Con Claude (la más fácil)
1. Entra en https://claude.ai/code
2. Inicia una sesión nueva y elige el repositorio **eduelflaco0000/pagina-edugo**.
3. Pide el cambio. Ej.: *"cambia las fotos del proyecto Cutside Barber y súbelo a GitHub"*.

### Opción B — Desde el navegador (GitHub)
1. Abre el repositorio, entra al archivo y pulsa el lápiz ✏️.
2. Edita y pulsa **Commit changes**. Vercel publica solo.
3. Para fotos: entra a la carpeta del proyecto → **Add file → Upload files** → luego actualiza las rutas en `src/config/projects.ts`.

### Opción C — En tu computadora (requiere Node.js y Git)
```bash
git clone https://github.com/eduelflaco0000/pagina-edugo
cd pagina-edugo
npm install
npm run dev        # ver en http://localhost:3000
```
Para publicar: `git add -A`, `git commit -m "mensaje"` y `git push`.

---

## Qué archivo tocar

| Quiero cambiar… | Archivo |
| --- | --- |
| WhatsApp, correo, Instagram, TikTok, SEO | `src/config/site.ts` |
| Servicios, proceso, preguntas frecuentes | `src/config/content.ts` |
| Proyectos (textos, orden, ocultar/mostrar) | `src/config/projects.ts` |
| Fotos de los proyectos | `public/projects/<proyecto>/` |

Carpetas de fotos: `inventario`, `socio-negocio`, `cutside-barber`, `acabados-marbella`.
Las imágenes `evidencia-0X.svg` son **provisionales**: reemplázalas por capturas reales (recomendado 16:10, p. ej. 1600×1000 px).

## Datos actuales

- WhatsApp: 51912305473 (Perú)
- Instagram: @eduardorubio__
- TikTok: @eduardorubioreyna
- Correo: edurubio@outlook.es

Más detalles técnicos en el [README](./README.md).
