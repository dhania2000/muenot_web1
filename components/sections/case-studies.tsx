import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { caseStudies } from "@/lib/site-data";

export function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="scroll-mt-20 border-b border-border bg-surface py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Client results"
              title="Programmes we run, and what they produced"
              className="max-w-2xl"
            />
            <Link
              href="/case-studies"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              All case studies
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.09} className="flex">
              <article className="group flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_22px_48px_-28px_rgba(11,79,158,0.45)]">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-card/95 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                    {study.industry}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {study.client}
                  </p>
                  <h3 className="flex-1 font-display text-base font-semibold leading-snug text-foreground">
                    {study.title}
                  </h3>

                  <dl className="mt-3 grid grid-cols-3 gap-3 rounded-xl border border-border bg-surface p-4">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="flex flex-col gap-1">
                        <dd className="font-display text-lg font-bold text-primary">
                          <CountUp value={metric.value} />
                        </dd>
                        <dt className="text-[11px] leading-tight text-muted-foreground">
                          {metric.label}
                        </dt>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
