import type { Metadata } from "next";
import Link from "next/link";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { audiences } from "@/lib/who-we-serve";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who We Serve",
  description: `${site.name} supports builders, contractors, developers, and exterior trades with siding supply, manufacturer access, and project-aligned service across Ontario.`,
};

export default function WhoWeServePage() {
  return (
    <main>
      <section className="border-b border-border bg-background py-16 sm:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Who we serve</p>
          <h1 className="mt-4 max-w-3xl font-sans text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Materials support for professional project teams
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {site.name} is structured for trade buyers—clear communication, documentation, and
            supply coordination that respects how bids, schedules, and site work actually unfold.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Request a Quote</Button>
            <Link
              href="/products"
              className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover"
            >
              View products →
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-card py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {audiences.map((a, i) => (
              <MotionReveal key={a.title} delay={i * 0.04}>
                <article className="h-full border border-border bg-background p-8">
                  <h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground">
                    {a.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">{a.description}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-background py-16">
        <Container className="max-w-3xl">
          <h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground">
            How we collaborate
          </h2>
          <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                Early alignment on profiles, colours, and accessory packages to reduce rework and
                substitutions.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                Documentation support for estimating teams—clear scope language and compatible
                system notes.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                Delivery coordination for phased sites and tight staging constraints common across
                the GTA and broader Ontario markets.
              </span>
            </li>
          </ul>
          <div className="mt-10">
            <Link href="/brands" className="text-sm font-semibold text-accent hover:text-accent-hover">
              Meet our manufacturing partners →
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
