import { ProjectsCarousel } from "@/components/projects/ProjectsCarousel";
import { WhatsAppButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { publishedProjects } from "@/config/projects";

export function Projects() {
  return (
    <section id="proyectos" aria-labelledby="projects-title" className="section">
      <div className="container-x">
        <SectionHeading
          id="projects-title"
          eyebrow="Proyectos destacados"
          title={
            <>
              Proyectos que convierten <span className="text-neutral-400">ideas en soluciones.</span>
            </>
          }
          subtitle="Conoce algunos de los proyectos y soluciones digitales en los que he trabajado."
        />

        <Reveal className="mt-12 sm:mt-14">
          <ProjectsCarousel projects={publishedProjects} />
        </Reveal>

        {/* CTA después de los proyectos */}
        <Reveal className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-neutral-950 p-8 text-white sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              ¿Quieres un proyecto como estos?
            </p>
            <p className="mt-2 text-neutral-400">
              Cuéntame tu idea y veamos cómo convertirla en una solución.
            </p>
          </div>
          <WhatsAppButton variant="light" size="lg" className="w-full shrink-0 sm:w-auto">
            Hablemos de tu proyecto
          </WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}
