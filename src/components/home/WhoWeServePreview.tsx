import Link from "next/link";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { audiences } from "@/lib/who-we-serve";

export function WhoWeServePreview() {
  return (
    <section className="border-b border-border bg-card py-24 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="Who we serve"
              title="Built for professional buyers and project teams"
              description="From custom builders to commercial coordinators—CA Siding supports the people responsible for specifications, procurement, and on-site execution."
            />
          </div>
          <Link
            href="/who-we-serve"
            className="shrink-0 text-sm font-semibold text-accent hover:text-accent-hover"
          >
            Learn more →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <MotionReveal key={a.title} delay={i * 0.05}>
              <article className="h-full rounded-md border border-border bg-background p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-20px_rgba(25,24,23,0.32)]">
                <h3 className="font-sans text-xl font-semibold tracking-tight text-foreground">
                  {a.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{a.description}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
