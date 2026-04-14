import { Container } from "@/components/ui/Container";

const items = [
  "Trusted supply",
  "Quality products",
  "Builder focused",
  "Reliable sourcing",
];

export function TrustStrip() {
  return (
    <div className="border-b border-border bg-card">
      <Container className="py-7 sm:py-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-center sm:justify-between">
          {items.map((item) => (
            <li
              key={item}
              className="text-[12px] font-semibold uppercase tracking-[0.2em] text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
