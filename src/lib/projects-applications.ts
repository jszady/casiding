export type Application = {
  id: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
};

export const applications: Application[] = [
  {
    id: "custom-homes",
    title: "Custom homes",
    summary:
      "Tailored cladding packages with premium textures, trim depth, and coordinated accessories.",
    image: "/images/application-custom-homes.jpg",
    alt: "Custom home exterior with board-and-batten siding and architectural trim detail",
  },
  {
    id: "new-builds",
    title: "New builds",
    summary:
      "Reliable material flow for active sites—profiles and colours aligned to community standards.",
    image: "/images/application-new-builds.jpg",
    alt: "New residential home under construction with vinyl siding and exterior cladding installed",
  },
  {
    id: "multi-unit",
    title: "Multi-unit residential",
    summary:
      "Repeatable elevations, efficient ordering, and consistent colour control across phases.",
    image: "/images/application-multi-unit.jpg",
    alt: "Multi-unit residential building exterior with repeating siding and cladding elevation",
  },
  {
    id: "commercial",
    title: "Commercial exteriors",
    summary:
      "Systems suited to storefront lines, parapets, and higher-exposure facades where detailing matters.",
    image: "/images/application-commercial.jpg",
    alt: "Commercial building exterior facade with metal panel cladding and glass storefront",
  },
  {
    id: "architectural",
    title: "Architectural applications",
    summary:
      "Material guidance for complex transitions, mixed cladding, and specification-driven assemblies.",
    image: "/images/application-architectural.jpg",
    alt: "Architectural exterior application featuring mixed cladding materials and detail transitions",
  },
];
