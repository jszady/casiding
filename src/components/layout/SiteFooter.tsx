import Link from "next/link";
import { footerExploreLinks, navLinks, site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <Container className="py-20 sm:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="space-y-5">
            <p className="font-sans text-xl font-semibold tracking-tight text-foreground">
              {site.name}
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-muted">{site.companySummary}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-muted hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {footerExploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-muted hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
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

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-9 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Building materials supplier · Siding & exterior products</p>
          <p>© {year} {site.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
