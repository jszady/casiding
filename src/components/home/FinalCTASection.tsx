import { MotionReveal } from "@/components/motion/MotionReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function FinalCTASection() {
  return (
    <section className="border-b border-border bg-accent py-24 text-white sm:py-28">
      <Container>
        <MotionReveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
            Trade buyers
          </p>
          <h2 className="mt-4 font-sans text-4xl font-bold tracking-tight sm:text-[2.75rem] sm:leading-[1.12]">
            Source the right siding products for upcoming builds
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/85">
            Share your scope, schedule, and performance requirements—we will align product options,
            availability, and documentation so your team can move forward with confidence.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <Button
              href="/contact"
              variant="secondary"
              className="border-white/25 bg-white text-accent hover:bg-zinc-100"
            >
              Request a Quote
            </Button>
            <div className="text-sm">
              <p className="font-semibold text-white">Direct line</p>
              <a href={site.phoneHref} className="mt-1 block text-lg font-semibold text-white/95">
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="mt-2 block text-sm font-semibold text-white/90 hover:text-white"
              >
                {site.email}
              </a>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
