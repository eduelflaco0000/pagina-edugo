import { Check } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/config/content";

export function Services() {
  return (
    <section id="servicios" aria-labelledby="services-title" className="section bg-neutral-50">
      <div className="container-x">
        <SectionHeading
          id="services-title"
          eyebrow="Servicios"
          title={
            <>
              Soluciones digitales para{" "}
              <span className="text-neutral-400">hacer crecer tu negocio.</span>
            </>
          }
        />

        <ul className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal as="li" key={s.id} delay={0.06 * i}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-neutral-200 bg-white p-7 transition-[border-color,box-shadow,transform] duration-500 ease-out hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)] sm:p-9">
                <div className="flex items-start justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-neutral-950 text-white transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-rotate-3">
                    <Icon name={s.icon} className="size-[1.35rem]" />
                  </span>
                  <span className="font-mono text-xs text-neutral-300">0{i + 1}</span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-neutral-950">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-neutral-600">{s.description}</p>
                <ul className="mt-6 grid gap-2 border-t border-neutral-100 pt-6 sm:grid-cols-2">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-600">
                      <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-neutral-950" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
