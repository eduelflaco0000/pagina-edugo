/**
 * ============================================================
 *  EDUGO · TEXTOS EDITABLES
 *  Servicios, proceso de trabajo y preguntas frecuentes.
 * ============================================================
 *  Iconos disponibles para servicios y pasos: ver `iconMap`
 *  en src/components/ui/Icon.tsx (nombres de lucide.dev).
 */

import type { IconName } from "@/components/ui/Icon";

export type Service = {
  id: string;
  icon: IconName;
  title: string;
  description: string;
  includes: string[];
};

export const services: Service[] = [
  {
    id: "web",
    icon: "monitor",
    title: "Diseño y desarrollo web",
    description:
      "Desarrollo de páginas web profesionales para empresas, negocios y emprendedores.",
    includes: [
      "Páginas corporativas",
      "Sitios web comerciales",
      "Landing pages",
      "Páginas de presentación empresarial",
    ],
  },
  {
    id: "sistemas",
    icon: "dashboard",
    title: "Sistemas empresariales",
    description:
      "Desarrollo de sistemas personalizados para mejorar la gestión de los negocios.",
    includes: [
      "Control de inventarios",
      "Gestión de ventas",
      "Registro de clientes",
      "Reportes y estadísticas",
      "Control de movimientos y operaciones",
    ],
  },
  {
    id: "catalogos",
    icon: "catalog",
    title: "Catálogos digitales",
    description:
      "Creación de catálogos digitales para presentar productos y facilitar las ventas.",
    includes: [
      "Catálogos online",
      "Organización de productos",
      "Presentación de stock",
      "Experiencia de navegación para clientes",
    ],
  },
  {
    id: "automatizacion",
    icon: "workflow",
    title: "Automatización y soluciones personalizadas",
    description:
      "Desarrollo de herramientas tecnológicas para optimizar tareas y procesos empresariales.",
    includes: [
      "Automatización de tareas repetitivas",
      "Herramientas a medida",
      "Optimización de procesos",
    ],
  },
];

export type ProcessStep = {
  number: string;
  icon: IconName;
  title: string;
  description: string;
  note?: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: "calendar",
    title: "Agendamos una reunión",
    description:
      "Conversamos sobre tu negocio, identificamos tus necesidades y conocemos qué solución digital podemos desarrollar.",
    note: "La reunión inicial es sin compromiso.",
  },
  {
    number: "02",
    icon: "proposal",
    title: "Propuesta y aprobación",
    description:
      "Analizamos los requerimientos y presentamos una propuesta con el alcance, funcionalidades, presupuesto y tiempo estimado.",
    note: "Si estás de acuerdo con las condiciones, comenzamos.",
  },
  {
    number: "03",
    icon: "rocket",
    title: "Desarrollo y entrega",
    description:
      "Desarrollamos la solución, coordinamos los avances y realizamos la entrega del proyecto acordado.",
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "¿Qué servicios ofrece EDUGO?",
    answer:
      "EDUGO desarrolla páginas web profesionales, sistemas empresariales a medida (inventarios, ventas, clientes y reportes), catálogos digitales y herramientas de automatización adaptadas a cada negocio.",
  },
  {
    question: "¿Trabajas con pequeños negocios y empresas?",
    answer:
      "Sí. Trabajo con emprendedores, pequeños negocios y empresas. Cada solución se adapta al tamaño, la etapa y las necesidades reales de tu negocio.",
  },
  {
    question: "¿Cómo se cotiza un proyecto?",
    answer:
      "No manejo precios fijos: cada proyecto se cotiza según sus características, funcionalidades y necesidades. Después de una reunión inicial sin compromiso, recibes una propuesta con el alcance, el presupuesto y el tiempo estimado.",
  },
  {
    question: "¿Cómo puedo contratar tus servicios?",
    answer:
      "Escríbeme por WhatsApp para agendar una reunión. Conversamos sobre tu proyecto, te envío una propuesta y, si estás de acuerdo con las condiciones, comenzamos el desarrollo.",
  },
];
