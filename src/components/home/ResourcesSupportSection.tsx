import { MotionReveal } from "@/components/motion/MotionReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    title: "Product information",
    body: "Datasheets, colour lines, and profile summaries to support estimating and specification.",
  },
  {
    title: "Material guidance",
    body: "Compatibility notes and system thinking—so transitions, trim, and ventilation read as one package.",
  },
  {
    title: "Quote assistance",
    body: "Structured takeoff support and alternatives when lead times or allocations shift mid-project.",
  },
  {
    title: "Project support",
    body: "Coordination that respects site realities: deliveries, phased releases, and field questions.",
  },
  {
    title: "Technical help",
    body: "Practical answers on fastening, clearances, and detailing for common assemblies and code contexts.",
  },
];

export function ResourcesSupportSection() {
  return (
    <section className="border-b border-border bg-card py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Resources"
          title="Support that keeps procurement moving"
          description="Beyond supply—CA Siding helps teams make informed decisions quickly, with documentation and guidance aligned to professional workflows."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
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
