export type CategoryIcon =
  | "vinyl"
  | "aluminum"
  | "fiber"
  | "soffit"
  | "trim"
  | "specialty";

export type ProductCategory = {
  slug: string;
  title: string;
  shortDescription: string;
  detail: string;
  icon: CategoryIcon;
};

export const productCategories: ProductCategory[] = [
  {
    slug: "vinyl-siding",
    title: "Vinyl Siding",
    shortDescription:
      "Broad colour and profile options for production and custom residential work.",
    detail:
      "Durable, low-maintenance cladding lines suited to high-volume schedules and varied architectural styles.",
    icon: "vinyl",
  },
  {
    slug: "aluminum-siding",
    title: "Aluminum Siding",
    shortDescription:
      "Crisp contemporary lines and strong performance in demanding exposures.",
    detail:
      "Ideal for modern elevations, tight reveals, and applications where metal cladding is specified.",
    icon: "aluminum",
  },
  {
    slug: "fiber-cement",
    title: "Fiber Cement",
    shortDescription:
      "Premium textures and profiles for architectural-grade exteriors.",
    detail:
      "Hardie-style and compatible systems for builds where rigidity, fire performance, and finish depth matter.",
    icon: "fiber",
  },
  {
    slug: "soffit-fascia",
    title: "Soffit & Fascia",
    shortDescription:
      "Ventilated soffit systems and straight fascia components for clean rooflines.",
    detail:
      "Coordinated colours and profiles that integrate with siding and trim packages.",
    icon: "soffit",
  },
  {
    slug: "trim-accessories",
    title: "Trim & Accessories",
    shortDescription:
      "Corners, channels, and transitions that complete the cladding system.",
    detail:
      "Matched accessories reduce field improvisation and keep details consistent across elevations.",
    icon: "trim",
  },
  {
    slug: "specialty-exterior",
    title: "Specialty Exterior Products",
    shortDescription:
      "Targeted solutions for unique details, transitions, and specification-driven facades.",
    detail:
      "Support for non-standard details, premium accents, and coordinated exterior packages.",
    icon: "specialty",
  },
];
