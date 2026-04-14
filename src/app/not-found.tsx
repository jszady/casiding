import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center py-24">
      <Container className="text-center">
        <p className="text-sm font-semibold text-accent">404</p>
        <h1 className="mt-4 font-sans text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you requested does not exist or has moved. Continue from the home page or reach
          our supply team directly.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="secondary">
            Request a Quote
          </Button>
        </div>
        <p className="mt-10 text-sm text-muted">
          <Link href="/products" className="font-semibold text-accent hover:text-accent-hover">
            View products
          </Link>
          <span className="mx-2 text-border">·</span>
          <Link href="/brands" className="font-semibold text-accent hover:text-accent-hover">
            Brands
          </Link>
        </p>
      </Container>
    </main>
  );
}
