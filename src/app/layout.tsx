import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cabuildingsupply.ca"),
  title: {
    default: `${site.name} | Siding & Exterior Building Products Supplier`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: `${site.name} | Siding & Exterior Building Products Supplier`,
    description: site.tagline,
    url: "https://www.cabuildingsupply.ca",
    siteName: "CA Building Supply",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/images/hero-exterior.jpg",
        width: 1200,
        height: 900,
        alt: "Modern building exterior with premium siding and cladding panels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Siding & Exterior Building Products Supplier`,
    description: site.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-sans text-foreground">
        <OrganizationJsonLd />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
