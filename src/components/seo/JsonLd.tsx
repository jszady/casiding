import { site } from "@/lib/site";

const SITE_URL = "https://www.cabuildingsupply.ca";

const businessAddress = {
  "@type": "PostalAddress",
  streetAddress: "60 Caster Avenue, Suite 201",
  addressLocality: "Vaughan",
  addressRegion: "ON",
  postalCode: site.office.postal,
  addressCountry: "CA",
};

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CA Building Supply",
    description: site.tagline,
    url: SITE_URL,
    email: site.email,
    telephone: "+14166971948",
    address: businessAddress,
    areaServed: "Ontario",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CA Building Supply",
    url: SITE_URL,
    telephone: "416-697-1948",
    email: site.email,
    address: businessAddress,
    openingHours: "Mo-Fr 08:00-17:00",
    areaServed: "Ontario",
    description:
      "Exterior building materials supplier specializing in siding, soffit, fascia, and trim products for builders and contractors across Ontario.",
    image: `${SITE_URL}/images/hero-exterior.jpg`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
