import { site } from "@/lib/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    description: site.tagline,
    url: "https://www.casiding.ca",
    email: site.email,
    telephone: "+14166971948",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.office.street,
      addressLocality: "Vaughan",
      addressRegion: "ON",
      postalCode: site.office.postal,
      addressCountry: "CA",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Ontario",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
