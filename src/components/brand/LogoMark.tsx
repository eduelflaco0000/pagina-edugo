import { cn } from "@/lib/utils";

/**
 * Símbolo de EDUGO: letra E blanca dentro de un cuadrado negro.
 * Es la misma geometría que el favicon (src/app/icon.svg).
 */
export function LogoMark({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("shrink-0", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <rect width="64" height="64" rx="12" fill="#0a0a0a" />
      <g fill="#ffffff">
        <rect x="21" y="16" width="7" height="32" />
        <rect x="21" y="16" width="23" height="7" />
        <rect x="21" y="28.5" width="18" height="7" />
        <rect x="21" y="41" width="23" height="7" />
      </g>
    </svg>
  );
}
