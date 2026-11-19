import { Check } from "lucide-react";
import type { Project } from "@/config/projects";
import { cn } from "@/lib/utils";
import { ProjectGallery } from "./ProjectGallery";

const conceptual = new Set<Project["stage"]>(["Prototipo", "Concepto / demostración"]);

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isConcept = conceptual.has(project.stage);
  const showClient = project.client && project.clientAuthorized;

  return (
    <article
      aria-labelledby={`project-${project.id}`}
      className="grid items-center gap-6 rounded-[2rem] border border-neutral-200 bg-white p-4 sm:gap-8 sm:p-6 lg:grid-cols-12 lg:gap-12 lg:p-8"
    >
      <div className="min-w-0 lg:col-span-7">
        <ProjectGallery images={project.images} projectName={project.name} />
      </div>

      <div className="min-w-0 px-2 pb-4 sm:px-0 lg:col-span-5 lg:pb-0">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-mono text-neutral-400">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-4 bg-neutral-300" />
          <span className="font-medium uppercase tracking-[0.16em] text-neutral-500">
            {project.category}
          </span>
          <span
            className={cn(
              "ml-auto rounded-full px-2.5 py-1 font-medium",
              isConcept
                ? "border border-dashed border-neutral-400 text-neutral-600"
                : "bg-neutral-100 text-neutral-700",
            )}
          >
            {project.stage}
          </span>
        </div>

        <h3
          id={`project-${project.id}`}
          className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-[2.25rem] sm:leading-tight"
        >
          {project.name}
        </h3>
        {showClient && (
          <p className="mt-2 text-sm text-neutral-500">
            Cliente: <span className="text-neutral-800">{project.client}</span>
          </p>
        )}
        <p className="mt-4 leading-relaxed text-neutral-600">{project.description}</p>

        {project.features.length > 0 && (
          <div className="mt-7">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
              {project.featuresLabel ?? "Principales funcionalidades"}
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700"
                >
                  <Check aria-hidden className="size-3.5 text-neutral-950" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
