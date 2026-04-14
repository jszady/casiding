export const site = {
  name: "CA Siding",
  tagline:
    "Premium siding and exterior building products for builders, contractors, and developers—sourced with consistency and backed by knowledgeable support.",
  phone: "416-697-1948",
  phoneHref: "tel:+14166971948",
  email: "jonathan@cabuildingsupply.ca",
  emailHref: "mailto:jonathan@cabuildingsupply.ca",
  hq: "Vaughan, Ontario",
  office: {
    street: "60 Caster Avenue",
    cityLine: "Vaughan, Ontario",
    postal: "L4L 5Y9",
  } as const,
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=60+Caster+Avenue%2C+Vaughan+ON+L4L+5Y9",
  coverage:
    "Supply and coordination across Ontario, with focused service throughout the Greater Toronto Area and surrounding markets.",
  companySummary:
    "CA Siding is a building materials supplier focused on siding and exterior products—connecting manufacturers with professional buyers through reliable sourcing, responsive service, and product expertise.",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/brands", label: "Brands" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerExploreLinks = [
  { href: "/projects", label: "Projects & Applications" },
  { href: "/products", label: "Products" },
  { href: "/brands", label: "Brands & Manufacturers" },
  { href: "/who-we-serve", label: "Who We Serve" },
] as const;
