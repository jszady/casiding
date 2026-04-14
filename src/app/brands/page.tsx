import type { Metadata } from "next";
import Link from "next/link";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ManufacturerPartnerCard } from "@/components/brands/ManufacturerPartnerCard";
import { trustedManufacturers } from "@/lib/brands";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Brands & Manufacturers",
  description: `Manufacturer partnerships and trusted siding suppliers through ${site.name}—quality exterior materials and dependable sourcing for builders and contractors in Ontario.`,
};

export default function BrandsPage() {
  return (
    <main>
      <section className="border-b border-border bg-background py-20 sm:py-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Brands</p>
          <h1 className="mt-5 max-w-4xl font-sans text-5xl font-bold tracking-tight text-foreground sm:text-[3.45rem] sm:leading-[1.08]">
            Manufacturers we stand behind
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
            {site.name} works with manufacturers who invest in product quality, documentation, and
            supply reliability—the partners below represent the lines we regularly stock and source
            for builders and contractors across Ontario.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Request a Quote</Button>
            <Link
              href="/products"
              className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover"
            >
              Browse product categories →
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-card py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trustedManufacturers.map((m, i) => (
              <MotionReveal key={m.id} delay={i * 0.04}>
                <ManufacturerPartnerCard partner={m} variant="featured" />
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-background py-20">
        <Container className="max-w-3xl">
          <h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground">
            Sourcing that supports specifications
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Our team helps align manufacturer systems with project requirements—colour stability,
            accessory compatibility, and documentation for estimators and site teams. For mixed
            vendor packages or alternate approvals, we coordinate substitutions with clear
            communication to avoid surprises in the field.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold">
            <Link href="/who-we-serve" className="text-accent hover:text-accent-hover">
              Who we serve →
            </Link>
            <Link href="/projects" className="text-accent hover:text-accent-hover">
              Projects & applications →
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
