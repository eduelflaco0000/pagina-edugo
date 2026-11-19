import { WhatsAppButton } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/config/content";

export function Process() {
  return (
    <section id="proceso" aria-labelledby="process-title" className="section bg-neutral-50">
      <div className="container-x">
        <SectionHeading
          id="process-title"
          eyebrow="Proceso de trabajo"
          title={
            <>
              De la idea <span className="text-neutral-400">a la solución.</span>
            </>
          }
          subtitle="Un proceso sencillo, transparente y enfocado en las necesidades de tu negocio."
        />

        <ol className="relative mt-14 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:gap-6">
          {/* Línea conectora */}
          <span
            aria-hidden
            className="absolute left-[2.15rem] top-10 bottom-10 w-px bg-neutral-300 lg:inset-x-[16%] lg:top-[2.6rem] lg:bottom-auto lg:h-px lg:w-auto"
          />
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={0.12 * i} className="relative">
              <div className="group h-full rounded-3xl border border-neutral-200 bg-white p-6 transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)] sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="relative z-10 inline-flex size-[2.6rem] items-center justify-center rounded-full bg-neutral-950 text-white ring-8 ring-neutral-50 lg:ring-white">
                    <Icon name={step.icon} className="size-5" />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
                    Paso {step.number}
                  </span>
                </div>
                <h3 className="mt-7 text-2xl font-semibold tracking-[-0.03em] text-neutral-950">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-neutral-600">{step.description}</p>
                {step.note && (
                  <p className="mt-5 border-t border-neutral-100 pt-4 text-sm font-medium text-neutral-950">
                    {step.note}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12 flex justify-center">
          <WhatsAppButton size="lg" className="w-full sm:w-auto">
            Agendar una reunión por WhatsApp
          </WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}
