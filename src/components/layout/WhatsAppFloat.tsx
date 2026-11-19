import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { getWhatsAppLink } from "@/lib/whatsapp";

/** Botón flotante de WhatsApp, visible durante toda la navegación. */
export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="wa-float group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex h-14 items-center gap-0 rounded-full bg-neutral-950 pl-4 pr-4 text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] ring-1 ring-white/10 transition-[transform,box-shadow,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.55)] active:scale-95 sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-6" />
      <span className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-300 ease-out group-hover:grid-cols-[1fr] group-focus-visible:grid-cols-[1fr]">
        <span className="overflow-hidden whitespace-nowrap text-sm font-medium">
          <span className="pl-2.5">Escríbenos</span>
        </span>
      </span>
    </a>
  );
}
