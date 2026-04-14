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
      className={`mb-12 max-w-2xl space-y-4 sm:mb-16 ${align === "center" ? "mx-auto" : ""}`}
    >
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] text-accent ${alignClass}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-sans text-3xl font-semibold tracking-tight text-foreground sm:text-4xl ${alignClass}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`text-lg leading-relaxed text-muted ${alignClass} ${align === "center" ? "max-w-2xl" : ""}`}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
