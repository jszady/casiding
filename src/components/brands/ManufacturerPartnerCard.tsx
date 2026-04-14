import Image from "next/image";
import type { TrustedManufacturer } from "@/lib/brands";

type ManufacturerPartnerCardProps = {
  partner: TrustedManufacturer;
  variant?: "inline" | "featured";
};

export function ManufacturerPartnerCard({
  partner,
  variant = "inline",
}: ManufacturerPartnerCardProps) {
  const { mark, name, focus, brandColor, logoPath } = partner;

  if (variant === "featured") {
    return (
      <div className="group flex h-full flex-col rounded-md border border-border bg-background p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-20px_rgba(25,24,23,0.32)]">
        <div>
          {logoPath ? (
            <div className="relative h-16 w-16 overflow-hidden rounded-md border border-border bg-white p-2">
              <Image
                src={logoPath}
                alt={`${name} logo`}
                fill
                sizes="64px"
                className="object-contain p-2"
              />
            </div>
          ) : (
            <div
              className="flex h-16 w-16 items-center justify-center rounded-md border border-border bg-zinc-50 font-sans text-lg font-semibold"
              style={{ color: brandColor }}
              aria-hidden
            >
              {mark}
            </div>
          )}
        </div>
        <div className="mt-5">
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
    <div className="group flex h-full items-center gap-4 rounded-md border border-border bg-card px-6 py-6 shadow-[0_1px_2px_rgba(25,24,23,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-20px_rgba(25,24,23,0.32)]">
      <div className="shrink-0">
        {logoPath ? (
          <div className="relative h-14 w-14 overflow-hidden rounded-md border border-border bg-white p-2">
            <Image
              src={logoPath}
              alt={`${name} logo`}
              fill
              sizes="56px"
              className="object-contain p-2"
            />
          </div>
        ) : (
          <div
            className="flex h-14 w-14 items-center justify-center rounded-md border border-border bg-zinc-50 font-sans text-sm font-semibold"
            style={{ color: brandColor }}
            aria-hidden
          >
            {mark}
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div>
          <p className="font-sans text-base font-semibold" style={{ color: brandColor }}>
            {name}
          </p>
        </div>
        <p className="mt-1 text-sm text-muted">{focus}</p>
      </div>
    </div>
  );
}
