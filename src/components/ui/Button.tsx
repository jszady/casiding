import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-[15px] font-semibold tracking-tight transition-[background-color,transform,box-shadow,color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_1px_2px_rgba(25,24,23,0.1)] hover:-translate-y-px hover:bg-accent-hover hover:shadow-[0_8px_20px_-16px_rgba(25,24,23,0.4)] focus-visible:outline-accent",
  secondary:
    "border border-border bg-card text-foreground shadow-[0_1px_2px_rgba(25,24,23,0.06)] hover:-translate-y-px hover:bg-stone-50 hover:shadow-[0_8px_20px_-16px_rgba(25,24,23,0.3)]",
  ghost: "text-foreground hover:bg-stone-100/80 hover:-translate-y-px",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className} ${disabled ? "pointer-events-none opacity-60" : ""}`;

  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
