/** Transición de deslizamiento compartida por la galería y el lightbox. */
export const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "12%" : "-12%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-12%" : "12%", opacity: 0 }),
};

export const slideTransition = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };
