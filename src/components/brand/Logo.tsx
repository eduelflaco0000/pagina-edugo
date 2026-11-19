import { cn } from "@/lib/utils";
import { LogoMark } from "./LogoMark";

type Props = {
  className?: string;
  /** Muestra "SOLUCIONES DIGITALES" bajo el nombre. */
  withDescriptor?: boolean;
  /** Variante de color para fondos oscuros. */
  inverted?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { mark: "size-8", name: "text-[1.05rem]", desc: "text-[0.5rem]" },
  md: { mark: "size-10", name: "text-xl", desc: "text-[0.58rem]" },
  lg: { mark: "size-14", name: "text-3xl", desc: "text-[0.7rem]" },
};

/** Logotipo completo: símbolo E + EDUGO. + descriptor. */
export function Logo({ className, withDescriptor = true, inverted, size = "sm" }: Props) {
  const s = sizes[size];
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={cn(s.mark, inverted && "ring-1 ring-white/20 rounded-[22%]")} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-semibold tracking-[-0.04em]",
            s.name,
            inverted ? "text-white" : "text-neutral-950",
          )}
        >
          EDUGO<span className="text-neutral-400">.</span>
        </span>
        {withDescriptor && (
          <span
            className={cn(
              "mt-1 whitespace-nowrap font-medium uppercase tracking-[0.28em]",
              s.desc,
              inverted ? "text-neutral-400" : "text-neutral-500",
            )}
          >
            Soluciones digitales
          </span>
        )}
      </span>
    </span>
  );
}
