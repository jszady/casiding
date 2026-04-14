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
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Siding & Exterior Building Products Supply",
  description: `${site.name} supplies premium siding and exterior materials to builders, contractors, and developers—trusted sourcing, manufacturer partnerships, and professional support across Ontario.`,
};

export default function HomePage() {
  return (
    <main>
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
