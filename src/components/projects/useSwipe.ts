"use client";

import { useRef } from "react";

type Options = {
  onLeft: () => void;
  onRight: () => void;
  onDown?: () => void;
  threshold?: number;
};

/**
 * Detección de gestos de deslizamiento (táctil y ratón) con Pointer Events.
 * Más ligero que cargar el módulo de arrastre de Motion.
 * Requiere `touch-action: pan-y` (o `none`) en el elemento.
 */
export function useSwipe({ onLeft, onRight, onDown, threshold = 45 }: Options) {
  const start = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);

  const handlers = {
    onPointerDown: (e: React.PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      start.current = { x: e.clientX, y: e.clientY };
      swiped.current = false;
    },
    onPointerUp: (e: React.PointerEvent) => {
      const s = start.current;
      start.current = null;
      if (!s) return;
      const dx = e.clientX - s.x;
      const dy = e.clientY - s.y;
      if (Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy)) {
        swiped.current = true;
        if (dx < 0) onLeft();
        else onRight();
      } else if (onDown && dy > 100 && Math.abs(dy) > Math.abs(dx)) {
        swiped.current = true;
        onDown();
      }
    },
    onPointerCancel: () => {
      start.current = null;
    },
  };

  /** true si el último gesto fue un deslizamiento (para ignorar el clic que le sigue). */
  const wasSwiped = () => swiped.current;

  return { handlers, wasSwiped };
}
