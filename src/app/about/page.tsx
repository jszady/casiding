import type { Metadata } from "next";
import Link from "next/link";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}—a building materials supplier focused on siding and exterior products, manufacturer relationships, and dependable sourcing for professional buyers across Ontario.`,
};

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-border bg-background py-20 sm:py-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">About</p>
          <h1 className="mt-5 max-w-4xl font-sans text-5xl font-bold tracking-tight text-foreground sm:text-[3.45rem] sm:leading-[1.08]">
            A supply partner for modern exterior procurement
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
            {site.companySummary}
          </p>
        </Container>
      </section>

      <section className="border-b border-border bg-card py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <MotionReveal>
              <h2 className="font-sans text-3xl font-semibold tracking-tight text-foreground">
                What we focus on
              </h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
                <p>
                  Exterior materials only succeed when the system is coherent—cladding, trim,
                  ventilation, and transitions. {site.name} emphasizes manufacturer alignment,
                  compatible accessories, and documentation that estimators and site teams can
                  actually use.
                </p>
                <p>
                  We are not a generalist yard with endless unrelated SKUs. We concentrate on
                  siding and exterior categories where depth of knowledge and sourcing relationships
                  translate into fewer surprises during procurement and installation sequencing.
                </p>
              </div>
            </MotionReveal>
            <MotionReveal delay={0.06}>
              <h2 className="font-sans text-3xl font-semibold tracking-tight text-foreground">
                How we work with teams
              </h2>
              <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>Clear communication between purchasers, project managers, and suppliers.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Practical guidance on profiles, colours, and accessory packages for cohesive
                    elevations.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Reliable coordination for active schedules across {site.coverage.toLowerCase()}
                  </span>
                </li>
              </ul>
            </MotionReveal>
          </div>
        </Container>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <Container className="flex flex-col items-start justify-between gap-8 rounded-md border border-border bg-card p-9 shadow-[0_1px_2px_rgba(25,24,23,0.05)] sm:flex-row sm:items-center sm:p-11">
          <div>
            <h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground">
              Review materials for an upcoming bid?
            </h2>
            <p className="mt-2 max-w-xl text-[15px] text-muted">
              Connect with our team for product options, lead times, and documentation support.
            </p>
            <p className="mt-6 text-sm font-semibold">
              <Link href="/products" className="text-accent hover:text-accent-hover">
                Explore products →
              </Link>
              <span className="mx-3 text-border">|</span>
              <Link href="/brands" className="text-accent hover:text-accent-hover">
                View brands →
              </Link>
            </p>
          </div>
          <Button href="/contact">Request a Quote</Button>
        </Container>
      </section>
    </main>
  );
}
