"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { caseStudies } from "@/lib/site-data";

const SPEED_PX_PER_FRAME = 0.6;

export function CaseStudiesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  const scrollCarousel = (direction: -1 | 1) => {
    carouselRef.current?.scrollBy({
      left: direction * Math.min(carouselRef.current.clientWidth * 0.85, 620),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const step = () => {
      if (!pausedRef.current) {
        // The track renders the list twice, so looping back by half the
        // scroll width makes the reset invisible.
        const half = el.scrollWidth / 2;
        if (half > 0 && el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
        el.scrollLeft += SPEED_PX_PER_FRAME;
      }
      frame = window.requestAnimationFrame(step);
    };

    frame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const track = [...caseStudies, ...caseStudies];

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

        <div
          className="relative mt-14"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
          onFocusCapture={() => {
            pausedRef.current = true;
          }}
          onBlurCapture={() => {
            pausedRef.current = false;
          }}
        >
          <button
            type="button"
            onClick={() => scrollCarousel(-1)}
            aria-label="Previous case studies"
            className="absolute left-2 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-primary shadow-lg transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowLeft className="size-5" aria-hidden="true" />
          </button>

          <div
            ref={carouselRef}
            className="overflow-x-auto px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex min-w-max gap-4 px-12">
              {track.map((study, index) => (
                <div
                  key={`${study.slug}-${index}`}
                  className="flex w-64 shrink-0 lg:w-72"
                  aria-hidden={index >= caseStudies.length}
                >
                  <article className="group flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_22px_48px_-28px_rgba(11,79,158,0.45)]">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={study.imageAlt}
                        fill
                        sizes="288px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-card/95 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                        {study.industry}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col gap-3 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        {study.client}
                      </p>
                      <h3 className="flex-1 font-display text-sm font-semibold leading-snug text-foreground">
                        {study.title}
                      </h3>

                      <dl className="mt-2 grid grid-cols-3 gap-2 rounded-xl border border-border bg-surface p-3">
                        {study.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="flex min-w-0 flex-col gap-1"
                          >
                            <dd className="font-display text-base font-bold text-primary">
                              <CountUp value={metric.value} />
                            </dd>
                            <dt className="text-[10px] leading-tight text-muted-foreground">
                              {metric.label}
                            </dt>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => scrollCarousel(1)}
            aria-label="Next case studies"
            className="absolute right-2 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-primary shadow-lg transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
