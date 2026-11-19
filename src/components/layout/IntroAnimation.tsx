"use client";

import { useCallback, useEffect, useState } from "react";
import { LogoMark } from "@/components/brand/LogoMark";

/** Duración total de la intro (debe coincidir con globals.css). */
const INTRO_MS = 2700;
const LETTERS = ["E", "D", "U", "G", "O", "."];

/**
 * Animación de bienvenida.
 *
 * - Se anima solo con CSS: arranca antes de que cargue JavaScript
 *   y no bloquea la carga de la página.
 * - Un script en <head> (ver layout.tsx) decide antes del primer
 *   pintado si se muestra: una vez por sesión y nunca con
 *   "reducir movimiento" activado.
 * - Se puede omitir con el botón, Escape, clic, scroll o tocando.
 */
export function IntroAnimation() {
  const [mounted, setMounted] = useState(true);

  const finish = useCallback(() => {
    document.documentElement.setAttribute("data-intro", "done");
    setMounted(false);
  }, []);

  useEffect(() => {
    if (document.documentElement.getAttribute("data-intro") !== "on") {
      setMounted(false);
      return;
    }
    const t = window.setTimeout(finish, INTRO_MS);
    const skip = () => finish();
    const onKey = (e: KeyboardEvent) => {
      if (["Escape", "Enter", " ", "ArrowDown", "PageDown"].includes(e.key)) finish();
    };
    window.addEventListener("wheel", skip, { passive: true, once: true });
    window.addEventListener("touchmove", skip, { passive: true, once: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("wheel", skip);
      window.removeEventListener("touchmove", skip);
      window.removeEventListener("keydown", onKey);
    };
  }, [finish]);

  if (!mounted) return null;

  return (
    <div className="intro" role="presentation" onClick={finish}>
      <div className="intro__inner">
        <div className="intro__mark">
          <LogoMark className="size-16 sm:size-20" />
        </div>
        <div className="intro__word" aria-label="EDUGO.">
          {LETTERS.map((l, i) => (
            <span
              key={i}
              className="intro__letter"
              style={{ "--i": i } as React.CSSProperties}
              aria-hidden
            >
              {l}
            </span>
          ))}
        </div>
        <p className="intro__desc">Soluciones digitales</p>
      </div>
      <button
        type="button"
        className="intro__skip"
        onClick={(e) => {
          e.stopPropagation();
          finish();
        }}
      >
        Omitir
      </button>
    </div>
  );
}
