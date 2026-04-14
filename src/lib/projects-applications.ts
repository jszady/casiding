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
    alt: "Modern custom residential facade with large windows",
  },
  {
    id: "new-builds",
    title: "New builds",
    summary:
      "Reliable material flow for active sites—profiles and colours aligned to community standards.",
    image: "/images/application-new-builds.jpg",
    alt: "New residential construction exterior cladding",
  },
  {
    id: "multi-unit",
    title: "Multi-unit residential",
    summary:
      "Repeatable elevations, efficient ordering, and consistent colour control across phases.",
    image: "/images/application-multi-unit.jpg",
    alt: "Urban multi-storey residential buildings",
  },
  {
    id: "commercial",
    title: "Commercial exteriors",
    summary:
      "Systems suited to storefront lines, parapets, and higher-exposure facades where detailing matters.",
    image: "/images/application-commercial.jpg",
    alt: "Commercial building facade with glass and cladding",
  },
  {
    id: "architectural",
    title: "Architectural applications",
    summary:
      "Material guidance for complex transitions, mixed cladding, and specification-driven assemblies.",
    image: "/images/application-architectural.jpg",
    alt: "Contemporary architecture building exterior",
  },
];
