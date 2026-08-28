import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CountUp } from "@/components/ui/count-up";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { servicePillars, stats } from "@/lib/site-data";

type Pillar = (typeof servicePillars)[number];

function PillarCard({ pillar }: { pillar: Pillar }) {
  // Same-page hash targets need a native anchor: next/link resolves them with
  // history.pushState, which never fires the `hashchange` the tabs listen for.
  const Anchor = pillar.href.includes("#") ? "a" : Link;

  return (
    <Anchor
      href={pillar.href}
      className="group relative block h-[320px] overflow-hidden border-r border-primary-foreground/20 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring sm:h-[360px]"
      aria-label={`Explore ${pillar.eyebrow}`}
    >
      <Image
        src={pillar.image || "/placeholder.svg"}
        alt={pillar.imageAlt}
        fill
        sizes="(min-width: 1024px) 20vw, 300px"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/25 to-primary-dark/10 transition-colors duration-300 group-hover:from-primary"
      />
      <span className="absolute inset-x-0 bottom-0 flex min-h-32 flex-col justify-end gap-3 p-6 text-primary-foreground lg:p-7">
        <span className="font-display text-xl font-bold leading-tight text-balance lg:text-2xl">
          {pillar.eyebrow}
        </span>
        <span className="flex items-center gap-2 text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          Explore services
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </span>
    </Anchor>
  );
}

export function ServicesOverview() {
  return (
    <section id="services" className="border-b border-border bg-surface/60 pt-20 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Specialized services. Unified execution."
            description="Start with one engagement and expand under the same governance."
          />
        </Reveal>
      </div>

      {/* Mobile + tablet: continuously auto-scrolling strip */}
      <div
        className="mt-14 overflow-hidden lg:hidden"
        aria-label="Our service lines"
      >
        <div className="flex w-max animate-marquee-slow">
          {[...servicePillars, ...servicePillars].map((pillar, index) => (
            <div
              key={`${pillar.id}-${index}`}
              aria-hidden={index >= servicePillars.length}
              className="w-[240px] shrink-0 sm:w-[300px]"
            >
              <PillarCard pillar={pillar} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: full-width static strip */}
      <div className="mt-14 hidden lg:block" aria-label="Our service lines">
        <div className="flex">
          {servicePillars.map((pillar, index) => (
            <Reveal
              key={pillar.id}
              delay={index * 0.07}
              className="min-w-0 flex-1"
            >
              <PillarCard pillar={pillar} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="bg-primary-dark">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8 lg:py-16">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.08}
              className="flex flex-col items-center gap-2 border-primary-foreground/15 px-3 py-5 text-center even:border-l md:border-l md:first:border-l-0"
            >
              <dt className="order-2 max-w-40 text-sm font-medium leading-relaxed text-primary-foreground/75">
                {stat.label}
              </dt>
              <dd className="order-1 font-display text-3xl font-bold text-accent sm:text-4xl lg:text-5xl">
                <CountUp value={stat.value} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
