/**
 * ============================================================
 *  EDUGO · PORTAFOLIO DE PROYECTOS
 * ============================================================
 *  Para AGREGAR un proyecto:
 *   1. Crea una carpeta en /public/projects/<id-del-proyecto>/
 *   2. Copia ahí las capturas (jpg, png, webp o svg).
 *   3. Añade un objeto nuevo al arreglo `projects` de abajo.
 *
 *  Para REEMPLAZAR imágenes: sustituye los archivos de la carpeta
 *  y actualiza las rutas en `images`. La primera imagen se usa
 *  como imagen principal (portada) del proyecto.
 *
 *  Las imágenes "evidencia-0X.svg" actuales son MARCADORES
 *  provisionales: reemplázalas por evidencias reales.
 *
 *  ⚠️  No publiques nombres de clientes sin su autorización.
 *      Usa `clientAuthorized: false` para ocultar el nombre del
 *      cliente hasta confirmarla.
 * ============================================================
 */

export type ProjectStage =
  | "Proyecto desarrollado"
  | "En desarrollo"
  | "Prototipo"
  | "Concepto / demostración";

export type ProjectImage = {
  /** Ruta desde /public, p. ej. "/projects/inventario/panel.jpg" */
  src: string;
  /** Texto alternativo (accesibilidad y SEO). */
  alt: string;
  /** Pie de foto opcional que se muestra en la vista ampliada. */
  caption?: string;
};

export type Project = {
  /** Identificador único (también nombre de la carpeta de imágenes). */
  id: string;
  /** Orden de visualización (menor = primero). */
  order: number;
  /** Estado de publicación: false = no se muestra en la web. */
  published: boolean;
  name: string;
  category: string;
  /** Etapa real del proyecto. Los conceptos deben marcarse como tales. */
  stage: ProjectStage;
  /** Empresa o negocio relacionado (opcional). */
  client?: string;
  /** Solo se muestra el cliente si su publicación está autorizada. */
  clientAuthorized?: boolean;
  description: string;
  /** Título de la lista de funcionalidades. */
  featuresLabel?: string;
  features: string[];
  images: ProjectImage[];
};

/** Genera rutas de marcadores provisionales. Reemplazar por imágenes reales. */
const placeholders = (id: string, name: string, count = 4): ProjectImage[] =>
  Array.from({ length: count }, (_, i) => ({
    src: `/projects/${id}/evidencia-0${i + 1}.svg`,
    alt: `${name} — evidencia ${i + 1} (imagen pendiente)`,
    caption: "Imagen provisional · reemplazar por una evidencia real",
  }));

export const projects: Project[] = [
  {
    id: "inventario",
    order: 1,
    published: true,
    name: "Sistema de control de inventario",
    category: "Sistema empresarial",
    stage: "Proyecto desarrollado",
    // client: "Nombre de la empresa",   // PENDIENTE (requiere autorización)
    // clientAuthorized: false,
    description:
      "Sistema desarrollado para facilitar el control de inventario, gestionar existencias en diferentes sedes, registrar transferencias de materiales y generar reportes.",
    features: [
      "Control de inventario",
      "Gestión de dos sedes",
      "Transferencias de materiales",
      "Cargos de entrega",
      "Exportación de reportes Excel",
    ],
    images: placeholders("inventario", "Sistema de control de inventario"),
  },
  {
    id: "socio-negocio",
    order: 2,
    published: true,
    name: "Socio Negocio",
    category: "Gestión comercial",
    stage: "Proyecto desarrollado", // PENDIENTE: confirmar etapa real
    description:
      "Solución digital orientada a pequeños negocios para organizar y administrar sus operaciones comerciales.",
    features: [
      "Registro de ventas",
      "Control de productos",
      "Gestión de clientes",
      "Registro de gastos",
      "Consulta de ganancias",
    ],
    images: placeholders("socio-negocio", "Socio Negocio"),
  },
  {
    id: "cutside-barber",
    order: 3,
    published: true,
    name: "Cutside Barber",
    category: "Sitio web con reservas",
    // Cambiar a "Proyecto desarrollado" cuando el sitio esté instalado.
    stage: "En desarrollo",
    client: "Cutside Barber",
    clientAuthorized: true, // Autorización confirmada por el cliente.
    description:
      "Sitio web para la barbería Cutside Barber, que permitirá a sus clientes agendar citas en línea de forma rápida y sencilla.",
    featuresLabel: "Funcionalidades previstas",
    features: [
      "Agendamiento de citas online",
      "Gestión de solicitudes",
      "Administración de disponibilidad",
    ],
    images: placeholders("cutside-barber", "Cutside Barber"),
  },
  {
    id: "acabados-marbella",
    order: 4,
    published: true,
    name: "Acabados Marbella",
    category: "Desarrollo web",
    stage: "Proyecto desarrollado", // PENDIENTE: confirmar etapa real
    client: "Acabados Marbella",
    // PENDIENTE: cambiar a true solo con autorización del cliente.
    clientAuthorized: false,
    description:
      "Página web para presentar el trabajo y los servicios del negocio. (Descripción editable: reemplazar por el detalle real del proyecto.)",
    // PENDIENTE: añadir las funcionalidades reales del sitio.
    features: [],
    images: placeholders("acabados-marbella", "Acabados Marbella"),
  },
];

/** Proyectos publicados, ordenados para mostrar. */
export const publishedProjects = projects
  .filter((p) => p.published)
  .sort((a, b) => a.order - b.order);
