import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./SocialIcons";
import { getWhatsAppLink } from "@/lib/whatsapp";

type Variant = "primary" | "secondary" | "light" | "ghost-light";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-neutral-950 text-white hover:bg-neutral-800 shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset]",
  secondary:
    "bg-white text-neutral-950 ring-1 ring-inset ring-neutral-200 hover:ring-neutral-400 hover:bg-neutral-50",
  light: "bg-white text-neutral-950 hover:bg-neutral-200",
  "ghost-light": "text-white ring-1 ring-inset ring-white/20 hover:ring-white/50 hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[0.95rem]",
};

type ButtonProps = ComponentProps<"a"> & {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  /** Muestra una flecha que se desplaza al pasar el cursor. */
  arrow?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  arrow,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "group/btn relative inline-flex select-none items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em]",
        "transition-[background-color,box-shadow,transform,color] duration-300 ease-out active:scale-[0.97]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {icon}
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5"
        />
      )}
    </a>
  );
}

/** Botón que abre WhatsApp con el mensaje predefinido. */
export function WhatsAppButton({
  children = "Hablemos por WhatsApp",
  ...props
}: Omit<ButtonProps, "href">) {
  return (
    <Button
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      icon={<WhatsAppIcon className="size-[1.15em]" />}
      {...props}
    >
      {children}
    </Button>
  );
}
