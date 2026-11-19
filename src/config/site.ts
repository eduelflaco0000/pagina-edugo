/**
 * ============================================================
 *  EDUGO · CONFIGURACIÓN CENTRAL
 * ============================================================
 *  Edita este archivo para cambiar los datos de contacto,
 *  redes sociales y metadatos SEO de toda la web.
 *
 *  ⚠️  Los valores vacíos ("") están PENDIENTES.
 *      Mientras estén vacíos:
 *        - WhatsApp abrirá la app sin un número de destino
 *          (el visitante elige el contacto).
 *        - Instagram, TikTok y correo NO se muestran.
 * ============================================================
 */

export const siteConfig = {
  /* ---------- Marca ---------- */
  name: "EDUGO",
  descriptor: "Soluciones digitales",
  slogan: "Tecnología que impulsa negocios.",
  founder: "Eduardo Rubio",

  /* ---------- SEO ---------- */
  seo: {
    title: "EDUGO · Soluciones digitales — Tecnología que impulsa negocios",
    description:
      "EDUGO desarrolla páginas web, sistemas empresariales, catálogos digitales y automatizaciones para empresas, emprendedores y pequeños negocios.",
    keywords: [
      "EDUGO",
      "soluciones digitales",
      "desarrollo web",
      "sistemas empresariales",
      "control de inventario",
      "catálogos digitales",
      "automatización",
      "Eduardo Rubio",
    ],
    locale: "es_PE",
  },

  /**
   * URL pública del sitio (sin "/" final).
   * Se recomienda definirla con la variable de entorno NEXT_PUBLIC_SITE_URL.
   * En Vercel se usa automáticamente el dominio de producción si no se define.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),

  /* ---------- Contacto ---------- */
  contact: {
    /**
     * PENDIENTE: número de WhatsApp en formato internacional,
     * solo dígitos, con código de país y sin "+".
     * Ejemplo de formato: "51900000000" (no es un número real).
     * También puede definirse con NEXT_PUBLIC_WHATSAPP_NUMBER.
     */
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "51912305473",

    /** Mensaje inicial que se precarga en WhatsApp. */
    whatsappMessage:
      "Hola, vi la página de EDUGO y quisiera información sobre sus servicios. Me gustaría conversar sobre un proyecto para mi negocio.",

    /** Correo de contacto. */
    email: "edurubio@outlook.es",
  },

  /* ---------- Redes sociales (URL completa) ---------- */
  social: {
    instagram: "https://www.instagram.com/eduardorubio__/",
    tiktok: "https://www.tiktok.com/@eduardorubioreyna",
  },

  /* ---------- Navegación ---------- */
  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Quién soy", href: "#quien-soy" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Proceso de trabajo", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ],

  copyrightYear: 2026,
} as const;

export type SiteConfig = typeof siteConfig;
