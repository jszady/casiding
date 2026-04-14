import type { TrustedManufacturer } from "@/lib/brands";

type ManufacturerPartnerCardProps = {
  partner: TrustedManufacturer;
  variant?: "inline" | "featured";
};

export function ManufacturerPartnerCard({
  partner,
  variant = "inline",
}: ManufacturerPartnerCardProps) {
  const { mark, name, focus, brandColor } = partner;

  if (variant === "featured") {
    return (
      <div className="group flex h-full flex-col border border-border bg-background p-6">
        <div className="transition-[filter,opacity] duration-300 ease-out grayscale opacity-[0.72] group-hover:grayscale-0 group-hover:opacity-100">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-sm border border-border bg-zinc-50 font-sans text-lg font-semibold"
            style={{ color: brandColor }}
            aria-hidden
          >
            {mark}
          </div>
        </div>
        <div className="mt-5 transition-[filter,opacity] duration-300 ease-out grayscale opacity-[0.72] group-hover:grayscale-0 group-hover:opacity-100">
          <h3 className="font-sans text-xl font-semibold" style={{ color: brandColor }}>
            {name}
          </h3>
        </div>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{focus}</p>
        <p className="mt-4 text-sm text-muted">
          Product lines, certifications, and regional availability available upon request.
        </p>
      </div>
    );
  }

  return (
    <div className="group flex h-full items-center gap-4 border border-border bg-card px-5 py-5 shadow-sm">
      <div className="shrink-0 transition-[filter,opacity] duration-300 ease-out grayscale opacity-[0.72] group-hover:grayscale-0 group-hover:opacity-100">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-sm border border-border bg-zinc-50 font-sans text-sm font-semibold"
          style={{ color: brandColor }}
          aria-hidden
        >
          {mark}
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <div className="transition-[filter,opacity] duration-300 ease-out grayscale opacity-[0.72] group-hover:grayscale-0 group-hover:opacity-100">
          <p className="font-sans text-base font-semibold" style={{ color: brandColor }}>
            {name}
          </p>
        </div>
        <p className="mt-1 text-sm text-muted">{focus}</p>
      </div>
    </div>
  );
}
