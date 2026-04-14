import { type ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div
      className={`mb-14 max-w-3xl space-y-5 sm:mb-20 ${align === "center" ? "mx-auto" : ""}`}
    >
      {eyebrow ? (
        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.22em] text-accent ${alignClass}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-sans text-4xl font-bold tracking-tight text-foreground sm:text-[2.75rem] sm:leading-[1.1] ${alignClass}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-2xl text-[1.05rem] leading-relaxed text-muted ${alignClass} ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
