import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { servicePillars } from "@/lib/site-data";

export function ServicesOverview() {
  return (
    <section
      id="services"
      className="border-b border-border bg-surface py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Five service lines, one accountable delivery organisation"
            description="Start with one engagement and expand under the same governance."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicePillars.map((pillar, index) => (
            <Reveal key={pillar.id} delay={index * 0.07} className="flex">
              <article className="group flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(11,18,32,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_22px_48px_-28px_rgba(11,79,158,0.45)]">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pillar.image || "/placeholder.svg"}
                    alt={pillar.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-primary-dark/75 via-primary-dark/15 to-transparent"
                  />
                  <h3 className="absolute inset-x-5 bottom-4 font-display text-lg font-bold leading-snug text-primary-foreground">
                    {pillar.eyebrow}
                  </h3>
                </div>

                <div className="flex flex-1 flex-col gap-5 p-6">
                  <ul className="flex flex-wrap gap-2">
                    {pillar.capabilities.slice(0, 4).map((capability) => (
                      <li
                        key={capability.name}
                        className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground transition-colors group-hover:border-primary/25 group-hover:bg-primary/5"
                      >
                        {capability.name}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={pillar.href}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    Explore {pillar.eyebrow}
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={servicePillars.length * 0.07} className="flex">
            <article className="relative flex w-full flex-col justify-between overflow-hidden rounded-2xl bg-primary p-7 text-primary-foreground">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-foreground/10 blur-2xl"
              />
              <div className="relative flex flex-col gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/15">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-bold leading-snug">
                  Not sure where to start?
                </h3>
                <p className="text-sm leading-relaxed text-primary-foreground/80">
                  Send your requirement and we&apos;ll scope a pilot batch.
                </p>
              </div>
              <Link
                href="/contact"
                className="group/cta relative mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary-foreground px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
              >
                Request a scoping call
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover/cta:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
