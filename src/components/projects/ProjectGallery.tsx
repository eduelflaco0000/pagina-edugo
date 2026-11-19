"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import type { ProjectImage } from "@/config/projects";
import { cn } from "@/lib/utils";
import { GalleryImage } from "./GalleryImage";
import { Lightbox } from "./Lightbox";
import { slideTransition, slideVariants } from "./motion";
import { useSwipe } from "./useSwipe";

type Props = { images: ProjectImage[]; projectName: string };

/** Galería independiente por proyecto: flechas, contador, miniaturas, swipe y lightbox. */
export function ProjectGallery({ images, projectName }: Props) {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const [lightbox, setLightbox] = useState(false);
  const thumbs = useRef<HTMLDivElement>(null);
  const total = images.length;

  const go = useCallback(
    (next: number, d?: number) => {
      const i = (next + total) % total;
      setState(([cur]) => [i, d ?? (i > cur ? 1 : -1)]);
    },
    [total],
  );
  const prev = () => go(index - 1, -1);
  const next = () => go(index + 1, 1);

  // Mantiene visible la miniatura activa sin desplazar la página.
  useEffect(() => {
    const row = thumbs.current;
    const el = row?.children[index] as HTMLElement | undefined;
    if (!row || !el) return;
    const left = el.offsetLeft - row.clientWidth / 2 + el.clientWidth / 2;
    row.scrollTo({ left, behavior: "smooth" });
  }, [index]);

  const swipe = useSwipe({ onLeft: next, onRight: prev });

  if (total === 0) return null;
  const img = images[index];

  return (
    <div
      className="w-full"
      role="region"
      aria-roledescription="carrusel"
      aria-label={`Galería de ${projectName}`}
      onKeyDown={(e) => {
        // Ignora teclas que llegan desde el lightbox (los portales propagan eventos de React).
        if (!e.currentTarget.contains(e.target as Node)) return;
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
    >
      <div
        className="group/g relative aspect-[16/10] w-full touch-pan-y select-none overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-neutral-200"
        {...(total > 1 ? swipe.handlers : {})}
      >
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <m.button
            key={index}
            type="button"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
            onClick={() => {
              // El clic que sigue a un deslizamiento no abre el lightbox.
              if (!swipe.wasSwiped()) setLightbox(true);
            }}
            className="absolute inset-0 cursor-zoom-in"
            aria-label={`Ampliar imagen ${index + 1} de ${total}: ${img.alt}`}
          >
            <GalleryImage
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
              priority={false}
            />
          </m.button>
        </AnimatePresence>

        {/* Contador */}
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-neutral-950/80 px-2.5 py-1 font-mono text-[0.7rem] text-white backdrop-blur">
          <span aria-live="polite">{index + 1}</span>/{total}
        </span>
        <span className="pointer-events-none absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-full bg-white/85 text-neutral-950 opacity-100 backdrop-blur transition-opacity duration-300 sm:opacity-0 sm:group-hover/g:opacity-100">
          <Expand className="size-3.5" aria-hidden />
        </span>

        {total > 1 && (
          <>
            <NavButton side="left" onClick={prev} label="Imagen anterior" />
            <NavButton side="right" onClick={next} label="Imagen siguiente" />
          </>
        )}
      </div>

      {/* Miniaturas */}
      {total > 1 && (
        <div
          ref={thumbs}
          className="no-scrollbar mt-3 flex gap-2 overflow-x-auto scroll-smooth p-0.5"
          aria-label="Miniaturas"
        >
          {images.map((t, i) => (
            <button
              key={t.src + i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Ver imagen ${i + 1} de ${total}`}
              aria-current={i === index ? "true" : undefined}
              className={cn(
                "relative aspect-[16/10] w-20 shrink-0 overflow-hidden rounded-lg ring-1 transition-[opacity,box-shadow] duration-300 sm:w-24",
                i === index
                  ? "opacity-100 ring-2 ring-neutral-950"
                  : "opacity-50 ring-neutral-200 hover:opacity-90",
              )}
            >
              <GalleryImage src={t.src} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      <Lightbox
        open={lightbox}
        images={images}
        index={index}
        onIndexChange={(i, d) => setState([i, d])}
        onClose={() => setLightbox(false)}
        projectName={projectName}
      />
    </div>
  );
}

function NavButton({
  side,
  onClick,
  label,
}: {
  side: "left" | "right";
  onClick: () => void;
  label: string;
}) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "absolute top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-950 shadow-sm ring-1 ring-black/5 backdrop-blur transition-[opacity,transform,background-color] duration-300 hover:bg-white active:scale-90",
        "sm:opacity-0 sm:group-hover/g:opacity-100 sm:focus-visible:opacity-100",
        side === "left" ? "left-3" : "right-3",
      )}
    >
      <Icon className="size-5" aria-hidden />
    </button>
  );
}
