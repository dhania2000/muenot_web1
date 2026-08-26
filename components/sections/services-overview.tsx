import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CountUp } from "@/components/ui/count-up";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { servicePillars, stats } from "@/lib/site-data";

export function ServicesOverview() {
  return (
    <section id="services" className="border-b border-border bg-surface pt-20 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Five service lines, one accountable delivery organisation"
            description="Start with one engagement and expand under the same governance."
          />
        </Reveal>
      </div>

      <div className="mt-14 overflow-x-auto" aria-label="Our service lines">
        <div className="flex min-w-[900px] lg:min-w-0">
          {servicePillars.map((pillar, index) => (
            <Reveal
              key={pillar.id}
              delay={index * 0.07}
              className="min-w-0 flex-1"
            >
              <Link
                href={pillar.href}
                className="group relative block h-[360px] overflow-hidden border-r border-primary-foreground/20 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
                aria-label={`Explore ${pillar.eyebrow}`}
              >
                <Image
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 20vw, 240px"
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
              </Link>
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
