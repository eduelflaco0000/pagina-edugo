"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ProjectImage } from "@/config/projects";
import { GalleryImage } from "./GalleryImage";
import { slideTransition, slideVariants } from "./motion";
import { useSwipe } from "./useSwipe";

type Props = {
  open: boolean;
  images: ProjectImage[];
  index: number;
  onIndexChange: (i: number, dir: number) => void;
  onClose: () => void;
  projectName: string;
};

/** Vista ampliada a pantalla completa (sin salir de la página). */
export function Lightbox({ open, images, index, onIndexChange, onClose, projectName }: Props) {
  const [mounted, setMounted] = useState(false);
  const [dir, setDir] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const total = images.length;

  useEffect(() => setMounted(true), []);

  const go = (d: number) => {
    setDir(d);
    onIndexChange((index + d + total) % total, d);
  };

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      prevFocus?.focus({ preventScroll: true });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, index]);

  const swipe = useSwipe({ onLeft: () => go(1), onRight: () => go(-1), onDown: onClose });

  if (!mounted) return null;
  const img = images[index];

  return createPortal(
    <AnimatePresence>
      {open && (
        <m.div
          role="dialog"
          aria-modal="true"
          aria-label={`${projectName}: imagen ampliada`}
          className="fixed inset-0 z-[100] flex flex-col bg-neutral-950/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <div className="flex items-center justify-between px-4 py-3 text-white sm:px-6">
            <p className="min-w-0 truncate text-sm">
              <span className="font-medium">{projectName}</span>
              <span className="ml-3 font-mono text-xs text-neutral-400">
                {index + 1}/{total}
              </span>
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Cerrar imagen ampliada"
              className="inline-flex size-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
            >
              <X className="size-6" aria-hidden />
            </button>
          </div>

          <div
            className="relative min-h-0 flex-1 touch-none select-none"
            onClick={(e) => e.stopPropagation()}
            {...swipe.handlers}
          >
            <AnimatePresence initial={false} custom={dir} mode="popLayout">
              <m.div
                key={index}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                className="absolute inset-0 px-2 sm:px-20"
              >
                <div className="relative size-full">
                  <GalleryImage
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
              </m.div>
            </AnimatePresence>

            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Imagen anterior"
                  className="absolute left-3 top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:inline-flex"
                >
                  <ChevronLeft className="size-6" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Imagen siguiente"
                  className="absolute right-3 top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:inline-flex"
                >
                  <ChevronRight className="size-6" aria-hidden />
                </button>
              </>
            )}
          </div>

          <div
            className="px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 text-center text-sm text-neutral-400"
            onClick={(e) => e.stopPropagation()}
          >
            {img.caption ?? img.alt}
            {total > 1 && (
              <p className="mt-1 text-xs text-neutral-600 sm:hidden">Desliza para navegar</p>
            )}
          </div>
        </m.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
