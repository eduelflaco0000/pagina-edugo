"use client";

import { useId, useState } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { Plus } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/config/content";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="preguntas" aria-labelledby="faq-title" className="section">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading id="faq-title" eyebrow="FAQ" title="Preguntas frecuentes." />
          <Reveal delay={0.1} className="mt-8 hidden lg:block">
            <p className="text-neutral-600">¿Tienes otra consulta? Escríbenos por WhatsApp.</p>
            <WhatsAppButton variant="secondary" className="mt-5">
              Escríbenos por WhatsApp
            </WhatsAppButton>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <ul className="border-t border-neutral-200">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              const btnId = `${baseId}-q${i}`;
              const panelId = `${baseId}-a${i}`;
              return (
                <Reveal as="li" key={f.question} delay={0.05 * i} className="border-b border-neutral-200">
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="text-lg font-medium tracking-[-0.02em] text-neutral-950 sm:text-xl">
                        {f.question}
                      </span>
                      <span
                        className={cn(
                          "inline-flex size-9 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color,color] duration-300",
                          isOpen
                            ? "rotate-45 border-neutral-950 bg-neutral-950 text-white"
                            : "border-neutral-200 text-neutral-950 group-hover:border-neutral-400",
                        )}
                      >
                        <Plus className="size-4" aria-hidden />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 pr-12 leading-relaxed text-neutral-600">
                          {f.answer}
                        </p>
                      </m.div>
                    )}
                  </AnimatePresence>
                </Reveal>
              );
            })}
          </ul>

          <Reveal className="mt-10 lg:hidden">
            <p className="text-neutral-600">¿Tienes otra consulta? Escríbenos por WhatsApp.</p>
            <WhatsAppButton variant="secondary" className="mt-5 w-full sm:w-auto">
              Escríbenos por WhatsApp
            </WhatsAppButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
