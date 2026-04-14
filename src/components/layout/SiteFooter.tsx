import Link from "next/link";
import { footerExploreLinks, navLinks, site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="space-y-4">
            <p className="font-sans text-lg font-semibold tracking-tight text-foreground">
              {site.name}
            </p>
            <p className="text-sm leading-relaxed text-muted">{site.companySummary}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-stone-700 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {footerExploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-stone-700 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              Contact
            </p>
            <p className="text-sm text-muted">
              {site.office.street}
              <br />
              {site.office.cityLine} {site.office.postal}
            </p>
            <p className="text-sm text-muted">{site.coverage}</p>
            <a
              href={site.phoneHref}
              className="block text-sm font-semibold text-foreground hover:text-accent"
            >
              {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="block text-sm font-semibold text-foreground hover:text-accent"
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Building materials supplier · Siding & exterior products</p>
          <p>© {year} {site.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
