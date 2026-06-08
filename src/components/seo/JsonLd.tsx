import { site } from "@/lib/site";

const SITE_URL = "https://www.cabuildingsupply.ca";

const businessAddress = {
  "@type": "PostalAddress",
  streetAddress: site.office.street,
  addressLocality: "Vaughan",
  addressRegion: "ON",
  postalCode: site.office.postal,
  addressCountry: "CA",
};

const areaServed = {
  "@type": "AdministrativeArea",
  name: "Ontario",
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
    areaServed,
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
    description: site.tagline,
    url: SITE_URL,
    email: site.email,
    telephone: "+14166971948",
    address: businessAddress,
    areaServed,
    image: `${SITE_URL}/images/hero-exterior.jpg`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
