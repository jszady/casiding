import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact · Request a Quote",
  description: `Contact ${site.name} for siding and exterior product quotes, technical questions, and availability—serving builders, contractors, and developers across Ontario.`,
};

export default function ContactPage() {
  return (
    <main>
      <section className="border-b border-border bg-background py-20 sm:py-24 lg:py-28">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Contact</p>
          <h1 className="mt-5 max-w-3xl font-sans text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Let&apos;s scope your next exterior package
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
            Trade-focused quotes, takeoffs, and product guidance—tell us about the job and we&apos;ll
            respond with clear next steps.
          </p>
        </Container>
      </section>

      <section className="bg-card py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-20">
            <div className="flex flex-col gap-10 lg:col-span-5">
              <div>
                <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  Contact information
                </h2>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                  Call during business hours for order status and urgent questions, or send a quote
                  request—we typically reply within one business day.
                </p>
              </div>

              <div className="space-y-6">
                <div className="rounded-lg border border-border bg-background p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                    Phone
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-3 block font-sans text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
                  >
                    {site.phone}
                  </a>
                </div>

                <div className="rounded-lg border border-border bg-background p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                    Address
                  </p>
                  <address className="mt-3 not-italic font-sans text-[15px] leading-relaxed text-foreground">
                    <span className="block">{site.office.street}</span>
                    <span className="block">{site.office.cityLine}</span>
                    <span className="block">{site.office.postal}</span>
                  </address>
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                  >
                    Open in Maps →
                  </a>
                </div>

                <div className="rounded-lg border border-border bg-background p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                    Email
                  </p>
                  <a
                    href={site.emailHref}
                    className="mt-3 block break-all font-sans text-[15px] font-semibold text-foreground transition-colors hover:text-accent"
                  >
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="rounded-lg border border-dashed border-border bg-background/80 px-6 py-5 sm:px-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                  Business hours
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  Monday–Friday, 8:00 a.m.–5:00 p.m. ET
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  After-hours submissions are queued for the next business day.
                </p>
              </div>

              <p className="text-sm text-muted">
                <span className="font-medium text-foreground">Service area:</span> {site.coverage}
              </p>

              <Link
                href="/products"
                className="text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                Browse product categories →
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-xl border border-border bg-background p-8 shadow-[0_1px_3px_rgba(28,25,23,0.06)] sm:p-10 lg:p-12">
                <div className="border-b border-border pb-8">
                  <h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground">
                    Request a quote
                  </h2>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
                    Include quantities, profiles, and delivery expectations where you can—we can
                    align on documents and samples after first contact.
                  </p>
                </div>
                <div className="pt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
