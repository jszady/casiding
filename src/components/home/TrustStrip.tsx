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
      <Container className="py-6 sm:py-7">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center sm:justify-between">
          {items.map((item) => (
            <li
              key={item}
              className="text-[13px] font-semibold uppercase tracking-[0.16em] text-stone-600"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
