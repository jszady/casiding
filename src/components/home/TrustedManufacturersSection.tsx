import Link from "next/link";
import { ManufacturerPartnerCard } from "@/components/brands/ManufacturerPartnerCard";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { trustedManufacturers } from "@/lib/brands";

export function TrustedManufacturersSection() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="Manufacturers"
              title="Trusted Manufacturers & Product Partners"
              description="We stock and source lines from established producers you already specify—consistent quality, compatible accessories, and the documentation estimators and site teams expect."
            />
          </div>
          <Link
            href="/brands"
            className="shrink-0 text-sm font-semibold text-accent hover:text-accent-hover"
          >
            View brands →
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustedManufacturers.map((m, i) => (
            <MotionReveal key={m.id} delay={i * 0.04}>
              <ManufacturerPartnerCard partner={m} variant="inline" />
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
