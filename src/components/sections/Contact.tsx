import { ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/brand/LogoMark";
import { WhatsAppButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { getContactLinks } from "@/lib/contact-links";

export function Contact() {
  const secondary = getContactLinks().filter((l) => l.id !== "whatsapp");

  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden bg-neutral-950 py-28 text-white sm:py-36"
    >
      <div aria-hidden className="contact-grid absolute inset-0 -z-10" />

      <div className="container-x text-center">
        <Reveal>
          <LogoMark className="mx-auto size-14 rounded-[22%] ring-1 ring-white/15" />
          <h2
            id="contact-title"
            className="mx-auto mt-10 max-w-4xl text-balance text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
          >
            ¿Tienes un proyecto <span className="text-neutral-500">en mente?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-neutral-400">
            Conversemos sobre las necesidades de tu negocio y encontremos una solución digital que
            te ayude a crecer.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <WhatsAppButton
            variant="light"
            className="h-16 w-full px-9 text-base sm:w-auto sm:text-lg"
          >
            Hablemos por WhatsApp
          </WhatsAppButton>
        </Reveal>

        {secondary.length > 0 && (
          <Reveal delay={0.2}>
            <ul className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {secondary.map(({ id, label, href, Icon, external }) => (
                <li key={id}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-neutral-300 ring-1 ring-white/15 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <Icon className="size-4" />
                    {label}
                    <ArrowUpRight className="size-3.5 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
