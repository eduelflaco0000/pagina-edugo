"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Desplazamiento vertical inicial en px. */
  y?: number;
  as?: "div" | "li" | "article" | "header";
};

const ease = [0.22, 1, 0.36, 1] as const;

/** Aparición progresiva al entrar en pantalla (una sola vez). */
export function Reveal({ children, className, delay = 0, y = 24, as = "div" }: Props) {
  const Cmp = m[as];
  return (
    <Cmp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </Cmp>
  );
}
