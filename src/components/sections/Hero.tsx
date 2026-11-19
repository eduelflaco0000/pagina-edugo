import { ArrowDown } from "lucide-react";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { HeroBackground } from "./HeroBackground";

/**
 * Portada. Las animaciones de entrada son CSS (clase .hero-rise)
 * para que el texto principal se pinte sin esperar a JavaScript
 * y se sincronice con la intro (ver globals.css).
 */
export function Hero() {
  const rise = (i: number) => ({ className: "hero-rise", style: { "--i": i } as React.CSSProperties });

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-20"
    >
      <HeroBackground />

      <div className="container-x relative">
        <div className="max-w-5xl">
          <p {...rise(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-neutral-600 backdrop-blur">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-neutral-950 opacity-30 motion-reduce:hidden" />
                <span className="relative inline-flex size-1.5 rounded-full bg-neutral-950" />
              </span>
              EDUGO · Soluciones digitales
            </span>
          </p>

          <h1
            id="hero-title"
            className="mt-8 text-balance text-[3.1rem] font-semibold leading-[0.95] tracking-[-0.055em] text-neutral-950 sm:text-7xl lg:text-[6.5rem]"
          >
            <span {...rise(1)} className="hero-rise block">
              Tecnología que
            </span>
            <span {...rise(2)} className="hero-rise block text-neutral-400">
              impulsa negocios.
            </span>
          </h1>

          <p
            {...rise(3)}
            className="hero-rise mt-8 max-w-xl text-pretty text-lg leading-relaxed text-neutral-600 sm:text-xl"
          >
            Creamos soluciones digitales que ayudan a empresas y negocios a optimizar sus procesos,
            mejorar su gestión y crecer.
          </p>

          <div {...rise(4)} className="hero-rise mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#servicios" size="lg" arrow>
              Conoce nuestros servicios
            </Button>
            <WhatsAppButton variant="secondary" size="lg">
              Hablemos de tu proyecto
            </WhatsAppButton>
          </div>
        </div>
      </div>

      <a
        href="#quien-soy"
        aria-label="Desplazarse a la siguiente sección"
        {...rise(6)}
        className="hero-rise absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-neutral-400 transition-colors hover:text-neutral-950 md:flex"
      >
        Descubre
        <ArrowDown className="size-4 animate-bounce motion-reduce:animate-none" />
      </a>
    </section>
  );
}
