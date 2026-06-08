import type { Metadata } from "next";
import { TrustedManufacturersSection } from "@/components/home/TrustedManufacturersSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductCategoriesSection } from "@/components/home/ProductCategoriesSection";
import { ProjectsApplicationsSection } from "@/components/home/ProjectsApplicationsSection";
import { ResourcesSupportSection } from "@/components/home/ResourcesSupportSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ValuePropositionSection } from "@/components/home/ValuePropositionSection";
import { WhoWeServePreview } from "@/components/home/WhoWeServePreview";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";

const description = `${site.name} supplies premium siding and exterior materials to builders, contractors, and developers—trusted sourcing, manufacturer partnerships, and professional support across Ontario.`;

export const metadata: Metadata = {
  title: "Siding & Exterior Building Products Supply",
  description,
  alternates: {
    canonical: "https://www.cabuildingsupply.ca/",
  },
  openGraph: {
    title: `${site.name} | Siding & Exterior Building Products Supply`,
    description,
    url: "https://www.cabuildingsupply.ca/",
    images: [
      {
        url: "/images/hero-exterior.jpg",
        width: 1200,
        height: 900,
        alt: "Modern building exterior with premium siding and cladding panels",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Siding & Exterior Building Products Supply`,
    description,
  },
};

export default function HomePage() {
  return (
    <main>
      <LocalBusinessJsonLd />
      <HeroSection />
      <TrustStrip />
      <ProductCategoriesSection />
      <ValuePropositionSection />
      <TrustedManufacturersSection />
      <WhoWeServePreview />
      <ProjectsApplicationsSection />
      <ResourcesSupportSection />
      <FinalCTASection />
    </main>
  );
}
