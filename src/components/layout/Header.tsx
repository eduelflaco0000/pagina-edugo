"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { WhatsAppButton } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  // Fondo del encabezado al desplazarse.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Resalta la sección visible en la navegación.
  useEffect(() => {
    const sections = siteConfig.nav
      .map((n) => document.querySelector<HTMLElement>(n.href))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Bloquea el scroll y permite cerrar con Escape cuando el menú móvil está abierto.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500",
        scrolled || open
          ? "bg-white/80 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] backdrop-blur-xl backdrop-saturate-150"
          : "bg-transparent",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <a href="#inicio" aria-label="EDUGO — Ir al inicio" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? "true" : undefined}
                  className={cn(
                    "relative rounded-full px-3 py-2 text-[0.84rem] transition-colors duration-300",
                    active === item.href
                      ? "text-neutral-950"
                      : "text-neutral-500 hover:text-neutral-950",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-3 bottom-0.5 h-px origin-left bg-neutral-950 transition-transform duration-500 ease-out",
                      active === item.href ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppButton className="h-10 px-4 text-[0.82rem] max-sm:hidden">
            Hablemos de tu proyecto
          </WhatsAppButton>
          <button
            type="button"
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-neutral-950 transition-colors hover:bg-neutral-100 lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
    </header>

      {/* Fuera del <header>: su backdrop-filter crearía un contenedor para "fixed". */}
      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-16 z-[45] overflow-y-auto bg-white lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Móvil" className="container-x flex min-h-full flex-col pb-10 pt-6">
              <ul className="flex flex-col">
                {siteConfig.nav.map((item, i) => (
                  <m.li
                    key={item.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i + 0.05, duration: 0.4 }}
                    className="border-b border-neutral-100"
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between py-4 text-2xl font-medium tracking-[-0.03em]",
                        active === item.href ? "text-neutral-950" : "text-neutral-500",
                      )}
                    >
                      {item.label}
                      <span className="font-mono text-xs text-neutral-300">0{i + 1}</span>
                    </a>
                  </m.li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <WhatsAppButton size="lg" className="w-full" onClick={() => setOpen(false)}>
                  Hablemos de tu proyecto
                </WhatsAppButton>
              </div>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
