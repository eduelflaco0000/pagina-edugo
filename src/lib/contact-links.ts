import { Mail } from "lucide-react";
import type { ComponentType } from "react";
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/config/site";
import { getWhatsAppLink } from "./whatsapp";

export type ContactLink = {
  id: "whatsapp" | "instagram" | "tiktok" | "email";
  label: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
  external: boolean;
};

/** Enlaces de contacto configurados. Los valores pendientes ("") se omiten. */
export function getContactLinks(): ContactLink[] {
  const { social, contact } = siteConfig;
  const links: ContactLink[] = [
    { id: "whatsapp", label: "WhatsApp", href: getWhatsAppLink(), Icon: WhatsAppIcon, external: true },
  ];
  if (social.instagram)
    links.push({ id: "instagram", label: "Instagram", href: social.instagram, Icon: InstagramIcon, external: true });
  if (social.tiktok)
    links.push({ id: "tiktok", label: "TikTok", href: social.tiktok, Icon: TikTokIcon, external: true });
  if (contact.email)
    links.push({ id: "email", label: contact.email, href: `mailto:${contact.email}`, Icon: Mail, external: false });
  return links;
}
