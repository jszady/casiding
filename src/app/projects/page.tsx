import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { applications } from "@/lib/projects-applications";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects & Applications",
  description: `See how ${site.name} exterior and siding products apply to custom homes, new builds, multi-unit residential, commercial facades, and architectural projects across Ontario.`,
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="border-b border-border bg-background py-16 sm:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Applications
          </p>
          <h1 className="mt-4 max-w-3xl font-sans text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Exterior solutions across build types
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            From custom residential to commercial envelopes—{site.name} supplies materials suited
            to architectural intent, performance requirements, and production schedules. Imagery
            below is representative; replace with project photography and case studies as they
            become available.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Request a Quote</Button>
            <Link
              href="/products"
              className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover"
            >
              Product categories →
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-card py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {applications.map((app, i) => (
              <MotionReveal key={app.id} delay={i * 0.04}>
                <article className="overflow-hidden border border-border bg-background shadow-sm">
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-200">
                    <Image
                      src={app.image}
                      alt={app.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground">
                      {app.title}
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">{app.summary}</p>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-background py-16">
        <Container className="max-w-3xl text-center">
          <h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground">
            Planning your next envelope package?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Share drawings, performance targets, and procurement milestones—we will help structure
            material selections and deliveries for your workflow.
          </p>
          <div className="mt-8 flex justify-center gap-6 text-sm font-semibold">
            <Link href="/brands" className="text-accent hover:text-accent-hover">
              Brands & manufacturers →
            </Link>
            <Link href="/who-we-serve" className="text-accent hover:text-accent-hover">
              Who we serve →
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
