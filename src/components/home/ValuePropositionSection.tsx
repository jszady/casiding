import { MotionReveal } from "@/components/motion/MotionReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  {
    title: "Strong manufacturer relationships",
    body: "Direct alignment with leading producers—so specifications, lead times, and substitutions are handled with clarity.",
  },
  {
    title: "Consistent product quality",
    body: "Materials sourced to meet professional expectations: colour control, profile integrity, and dependable packaging.",
  },
  {
    title: "Reliable supply for active projects",
    body: "Support for phased deliveries and fast-moving schedules across multi-unit and custom builds.",
  },
  {
    title: "Support for builders and contractors",
    body: "Responsive coordination with site teams, purchasers, and project managers—without the runaround.",
  },
  {
    title: "Commercial and residential applications",
    body: "Solutions spanning custom homes, new builds, multi-unit residential, and commercial exteriors.",
  },
  {
    title: "Knowledgeable product guidance",
    body: "Practical recommendations on compatibility, transitions, and accessory packages for cohesive facades.",
  },
];

export function ValuePropositionSection() {
  return (
    <section className="border-b border-border bg-card py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why CA Siding"
          title="Supply built around how projects actually move"
          description="We operate as a materials partner—focused on sourcing, availability, and technical clarity so your teams can keep production on track."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {points.map((item, i) => (
            <MotionReveal
              key={item.title}
              delay={i * 0.05}
              className="h-full rounded-md border border-border bg-background p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-20px_rgba(25,24,23,0.32)]"
            >
              <h3 className="font-sans text-xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.body}</p>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
