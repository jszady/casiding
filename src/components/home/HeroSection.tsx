"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const heroImage = "/images/hero-exterior.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <Container className="relative z-10 py-24 sm:py-28 lg:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-2xl space-y-9">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-accent"
            >
              Siding & exterior supply
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-5xl font-bold leading-[1.04] tracking-tight text-foreground sm:text-[3.45rem] lg:text-[3.9rem]"
            >
              Premium exterior products. Built for professional schedules.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl text-lg leading-relaxed text-muted sm:text-[1.25rem]"
            >
              CA Siding supplies siding and exterior building products to builders, contractors,
              and developers—pairing manufacturer relationships with dependable sourcing, material
              expertise, and responsive support for active projects.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button href="/contact">Request a Quote</Button>
              <Button href="/products" variant="secondary">
                View Products
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border bg-zinc-200 shadow-[0_1px_2px_rgba(25,24,23,0.08)] lg:aspect-[5/4]"
          >
            <Image
              src={heroImage}
              alt="Modern commercial and architectural building exterior with glass and cladding"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
