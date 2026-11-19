import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  inverted?: boolean;
  id?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  inverted,
  id,
  className,
}: Props) {
  return (
    <Reveal
      as="header"
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "mb-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em]",
          inverted ? "text-neutral-400" : "text-neutral-500",
        )}
      >
        <span className={cn("h-px w-6", inverted ? "bg-neutral-600" : "bg-neutral-300")} />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "text-balance text-[2.1rem] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem]",
          inverted ? "text-white" : "text-neutral-950",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-pretty text-lg leading-relaxed",
            inverted ? "text-neutral-400" : "text-neutral-600",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
