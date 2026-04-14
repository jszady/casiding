import Image from "next/image";
import Link from "next/link";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Container } from "@/components/ui/Container";
import { applications } from "@/lib/projects-applications";

export function ProjectsApplicationsSection() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24">
      <Container>
        <div className="mb-12 flex flex-col gap-8 sm:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Projects & applications
            </p>
            <h2 className="font-sans text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Where our products show up
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              Exterior materials in context—supporting architectural intent, schedule pressure, and
              performance requirements across build types.
            </p>
          </div>
          <Link
            href="/projects"
            className="shrink-0 text-sm font-semibold text-accent hover:text-accent-hover"
          >
            Explore applications →
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {applications.map((app, i) => (
            <MotionReveal key={app.id} delay={i * 0.05}>
              <article className="group overflow-hidden border border-border bg-card shadow-sm">
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-200">
                  <Image
                    src={app.image}
                    alt={app.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="space-y-2 p-6">
                  <h3 className="font-sans text-xl font-semibold tracking-tight text-foreground">
                    {app.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted">{app.summary}</p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
