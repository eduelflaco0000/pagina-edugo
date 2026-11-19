import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";

const pillars = [
  { k: "Prácticas", v: "Soluciones que resuelven problemas reales del día a día." },
  { k: "Modernas", v: "Tecnología actual, rápida y fácil de usar." },
  { k: "A medida", v: "Adaptadas a las necesidades de cada cliente." },
];

export function About() {
  return (
    <section id="quien-soy" aria-labelledby="about-title" className="section">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-4">
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            <span className="h-px w-6 bg-neutral-300" />
            Quién soy
          </p>
          <div className="mt-8 hidden lg:block">
            <p className="font-mono text-xs text-neutral-400">Fundador</p>
            <p className="mt-1 text-lg font-medium tracking-tight text-neutral-950">
              {siteConfig.founder}
            </p>
          </div>
        </Reveal>

        <div className="lg:col-span-8">
          <Reveal>
            <h2
              id="about-title"
              className="text-balance text-[2.1rem] font-semibold leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-[3.5rem]"
            >
              Detrás de EDUGO está <span className="text-neutral-400">Eduardo Rubio.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-neutral-600">
              <p>
                Soy Eduardo Rubio, desarrollador de soluciones digitales enfocado en crear
                herramientas tecnológicas que ayuden a empresas y negocios a mejorar su
                funcionamiento.
              </p>
              <p>
                A través de EDUGO, busco ofrecer soluciones prácticas, modernas y adaptadas a las
                necesidades de cada cliente.
              </p>
            </div>
          </Reveal>

          <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.k} delay={0.08 * i} className="bg-white p-6">
                <p className="font-mono text-xs text-neutral-400">0{i + 1}</p>
                <p className="mt-3 text-base font-semibold tracking-tight text-neutral-950">{p.k}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">{p.v}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
