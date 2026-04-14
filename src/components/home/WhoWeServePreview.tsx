import Link from "next/link";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { audiences } from "@/lib/who-we-serve";

export function WhoWeServePreview() {
  return (
    <section className="border-b border-border bg-card py-20 sm:py-24">
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

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <MotionReveal key={a.title} delay={i * 0.05}>
              <article className="h-full border border-border bg-background p-6">
                <h3 className="font-sans text-lg font-semibold tracking-tight text-foreground">
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
