import type { Metadata } from "next";
import Link from "next/link";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { ProductCategoryIcon } from "@/components/icons/ProductCategoryIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { productCategories } from "@/lib/product-categories";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Siding & Exterior Products",
  description: `Browse siding and exterior building products from ${site.name}—vinyl, aluminum, fiber cement, soffit & fascia, trim, and specialty materials for builders and contractors.`,
};

export default function ProductsPage() {
  return (
    <main>
      <section className="border-b border-border bg-background py-16 sm:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Products</p>
          <h1 className="mt-4 max-w-3xl font-sans text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Exterior cladding systems for professional builds
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {site.name} supplies a focused range of siding and exterior materials—organized for
            specification, procurement, and field coordination. Explore categories below, then
            connect with our team for availability, documentation, and project-specific options.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Request a Quote</Button>
            <Link
              href="/brands"
              className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover"
            >
              View manufacturer partners →
            </Link>
            <Link
              href="/who-we-serve"
              className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover"
            >
              Who we serve →
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-card py-16 sm:py-20">
        <Container className="space-y-20">
          {productCategories.map((cat, i) => (
            <MotionReveal key={cat.slug} delay={Math.min(i * 0.04, 0.2)}>
              <article
                id={cat.slug}
                className="scroll-mt-28 border border-border bg-background p-8 sm:p-10"
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-border bg-card">
                    <ProductCategoryIcon name={cat.icon} />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground">
                      {cat.title}
                    </h2>
                    <p className="text-lg text-stone-800">{cat.shortDescription}</p>
                    <p className="text-[15px] leading-relaxed text-muted">{cat.detail}</p>
                    <p className="text-[15px] leading-relaxed text-muted">
                      For datasheets, colour lines, compatible accessories, and lead-time guidance,
                      contact our team with your project parameters—we will align options to your
                      specification and schedule.
                    </p>
                  </div>
                </div>
              </article>
            </MotionReveal>
          ))}
        </Container>
      </section>

      <section className="border-t border-border bg-background py-16">
        <Container className="flex flex-col items-start justify-between gap-8 border border-border bg-card p-8 shadow-sm sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground">
              Need a package price or phased release schedule?
            </h2>
            <p className="mt-2 max-w-xl text-[15px] text-muted">
              Share drawings, quantities, and delivery windows—we will help structure supply to
              match how your project is built.
            </p>
          </div>
          <Button href="/contact">Request a Quote</Button>
        </Container>
      </section>
    </main>
  );
}
