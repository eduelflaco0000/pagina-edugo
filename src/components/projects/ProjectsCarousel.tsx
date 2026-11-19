"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/config/projects";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";

/**
 * Carrusel de proyectos: muestra un proyecto a la vez para no alargar la página.
 * - Deslizamiento nativo con scroll-snap (táctil, trackpad).
 * - Flechas, pestañas con el nombre de cada proyecto y contador.
 * - Cada proyecto mantiene su propia galería de imágenes.
 */
export function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const track = useRef<HTMLDivElement>(null);
  const tabs = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [height, setHeight] = useState<number>();
  const total = projects.length;

  // La pista toma la altura del proyecto visible (evita huecos con proyectos más cortos).
  useEffect(() => {
    const slide = track.current?.children[active] as HTMLElement | undefined;
    if (!slide) return;
    const update = () => setHeight(slide.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(slide);
    return () => ro.disconnect();
  }, [active]);

  // Detecta el proyecto visible mientras se desliza.
  useEffect(() => {
    const root = track.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        });
      },
      { root, threshold: 0.6 },
    );
    Array.from(root.children).forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  // Mantiene visible la pestaña activa (sin mover la página).
  useEffect(() => {
    const row = tabs.current;
    const el = row?.children[active] as HTMLElement | undefined;
    if (!row || !el) return;
    row.scrollTo({ left: el.offsetLeft - row.clientWidth / 2 + el.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  const goTo = useCallback(
    (i: number) => {
      const root = track.current;
      const idx = Math.max(0, Math.min(total - 1, i));
      const slide = root?.children[idx] as HTMLElement | undefined;
      if (!root || !slide) return;
      root.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
      setActive(idx);
    },
    [total],
  );

  if (total === 0) return null;

  return (
    <div role="region" aria-roledescription="carrusel" aria-label="Proyectos destacados">
      {/* Controles */}
      <div className="flex items-center gap-4">
        <div
          ref={tabs}
          role="tablist"
          aria-label="Elegir proyecto"
          className="no-scrollbar -mx-1 flex min-w-0 flex-1 gap-2 overflow-x-auto px-1 py-1"
        >
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls={`slide-${p.id}`}
              onClick={() => goTo(i)}
              className={cn(
                "shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm transition-[background-color,color,box-shadow] duration-300",
                i === active
                  ? "bg-neutral-950 text-white"
                  : "text-neutral-500 ring-1 ring-inset ring-neutral-200 hover:text-neutral-950 hover:ring-neutral-400",
              )}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          <span className="font-mono text-xs text-neutral-400" aria-live="polite">
            <span className="text-neutral-950">{String(active + 1).padStart(2, "0")}</span> /{" "}
            {String(total).padStart(2, "0")}
          </span>
          <ArrowButton dir="prev" disabled={active === 0} onClick={() => goTo(active - 1)} />
          <ArrowButton dir="next" disabled={active === total - 1} onClick={() => goTo(active + 1)} />
        </div>
      </div>

      {/* Pista deslizable */}
      <div
        ref={track}
        style={{ height }}
        className="no-scrollbar relative mt-6 flex items-start snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:gap-6"
      >
        {projects.map((p, i) => (
          <div
            key={p.id}
            id={`slide-${p.id}`}
            data-index={i}
            role="tabpanel"
            aria-roledescription="proyecto"
            aria-label={`${i + 1} de ${total}: ${p.name}`}
            className="w-[88%] shrink-0 snap-start sm:w-full"
          >
            <ProjectCard project={p} index={i} />
          </div>
        ))}
      </div>

      {/* Indicadores (móvil) */}
      <div className="mt-5 flex items-center justify-between sm:hidden">
        <div className="flex gap-1.5">
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir al proyecto ${i + 1}: ${p.name}`}
              className="flex h-6 items-center"
            >
              <span
                className={cn(
                  "block h-1.5 rounded-full transition-all duration-300",
                  i === active ? "w-6 bg-neutral-950" : "w-1.5 bg-neutral-300",
                )}
              />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ArrowButton dir="prev" disabled={active === 0} onClick={() => goTo(active - 1)} />
          <ArrowButton dir="next" disabled={active === total - 1} onClick={() => goTo(active + 1)} />
        </div>
      </div>
    </div>
  );
}

function ArrowButton({
  dir,
  disabled,
  onClick,
}: {
  dir: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  const Icon = dir === "prev" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Proyecto anterior" : "Proyecto siguiente"}
      className="inline-flex size-11 items-center justify-center rounded-full text-neutral-950 ring-1 ring-inset ring-neutral-200 transition-[background-color,color,opacity,transform] duration-300 hover:bg-neutral-950 hover:text-white hover:ring-neutral-950 active:scale-95 disabled:pointer-events-none disabled:opacity-30"
    >
      <Icon className="size-4" aria-hidden />
    </button>
  );
}
