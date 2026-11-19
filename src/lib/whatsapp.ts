import { siteConfig } from "@/config/site";

/**
 * Construye el enlace de WhatsApp con el mensaje predefinido.
 * Todos los botones de contacto de la web usan esta función,
 * por lo que basta con cambiar el número en src/config/site.ts.
 */
export function getWhatsAppLink(message: string = siteConfig.contact.whatsappMessage) {
  const number = siteConfig.contact.whatsappNumber.replace(/\D/g, "");
  const text = encodeURIComponent(message);
  // Sin número configurado, wa.me abre WhatsApp para elegir el contacto.
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
}

export const isWhatsAppConfigured = () =>
  siteConfig.contact.whatsappNumber.replace(/\D/g, "").length > 0;
