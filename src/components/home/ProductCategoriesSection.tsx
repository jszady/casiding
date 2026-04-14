import Link from "next/link";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { ProductCategoryIcon } from "@/components/icons/ProductCategoryIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { productCategories } from "@/lib/product-categories";

export function ProductCategoriesSection() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Product categories"
          title="Exterior cladding systems and accessories"
          description="A focused lineup of siding and exterior materials—organized for specification, ordering, and field coordination across residential and commercial builds."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((cat, i) => (
            <MotionReveal key={cat.slug} delay={i * 0.05}>
              <Link
                href={`/products#${cat.slug}`}
                className="group flex h-full flex-col border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm border border-border bg-zinc-50 transition-colors group-hover:border-accent/30 group-hover:bg-accent-muted">
                  <ProductCategoryIcon name={cat.icon} />
                </div>
                <h3 className="font-sans text-lg font-semibold tracking-tight text-foreground">
                  {cat.title}
                </h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">
                  {cat.shortDescription}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  View details
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
