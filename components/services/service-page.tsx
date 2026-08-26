"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Accessibility,
  ArrowRight,
  AudioLines,
  BookOpenCheck,
  Bot,
  Boxes,
  Captions,
  Check,
  ChevronRight,
  Clock,
  Cog,
  Database,
  FileCheck2,
  FileStack,
  FileText,
  Film,
  Filter,
  GraduationCap,
  Languages,
  LineChart,
  Mic,
  Monitor,
  Palette,
  PenTool,
  Scale,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  SpellCheck2,
  Tag,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CTASection } from "@/components/sections/cta-section";
import { AnimatedHeadline, Float, Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { IconBadge } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ServiceDetail } from "@/lib/services-data";

const iconMap: Record<string, LucideIcon> = {
  Accessibility,
  AudioLines,
  BookOpenCheck,
  Bot,
  Boxes,
  Captions,
  Clock,
  Cog,
  Database,
  FileCheck2,
  FileStack,
  FileText,
  Film,
  Filter,
  GraduationCap,
  Languages,
  LineChart,
  Mic,
  Monitor,
  Palette,
  PenTool,
  Scale,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  SpellCheck2,
  Tag,
  TrendingUp,
  Users,
  Workflow,
};

export function ServicePage({
  service,
  related,
}: {
  service: ServiceDetail;
  related: ServiceDetail[];
}) {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border bg-surface pt-24 lg:pt-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 grid-lines opacity-60"
          />
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="pointer-events-none absolute -right-24 -top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-20">
            <nav aria-label="Breadcrumb" className="mb-7">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <li>
                  <Link href="/" className="transition-colors hover:text-primary">
                    Home
                  </Link>
                </li>
                <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
                <li>
                  <Link
                    href={service.pillar.href}
                    className="transition-colors hover:text-primary"
                  >
                    {service.pillar.label}
                  </Link>
                </li>
                <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
                <li className="text-foreground">{service.eyebrow}</li>
              </ol>
            </nav>

            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-accent"
                  />
                  {service.pillar.label}
                </motion.span>

                <AnimatedHeadline
                  text={service.title}
                  highlight={service.highlight}
                  className="mt-6 font-display text-4xl font-extrabold leading-[1.06] text-foreground sm:text-5xl"
                  highlightClassName="text-primary"
                />

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-5 max-w-lg text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
                >
                  {service.tagline}
                </motion.p>

                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                  className="mt-7 flex flex-wrap gap-2"
                >
                  {service.chips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground"
                    >
                      {chip}
                    </li>
                  ))}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.65 }}
                  className="mt-9 flex flex-wrap gap-3"
                >
                  <Link
                    href="/contact"
                    className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-20px_rgba(11,79,158,0.8)] transition-colors hover:bg-primary-dark"
                  >
                    Request a scoping call
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    href="#capabilities"
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    What we deliver
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-border shadow-[0_40px_90px_-45px_rgba(11,79,158,0.55)]">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover"
                  />
                </div>

                <Float
                  className="absolute -left-4 bottom-8 hidden sm:block"
                  distance={12}
                  duration={7}
                >
                  <div className="rounded-2xl border border-border bg-card px-4 py-3 shadow-[0_18px_40px_-24px_rgba(11,18,32,0.35)]">
                    <p className="font-display text-2xl font-extrabold text-primary">
                      {service.stats[0].value}
                    </p>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {service.stats[0].label}
                    </p>
                  </div>
                </Float>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stat band */}
        <section className="border-b border-border bg-card">
          <dl className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-border sm:grid-cols-3">
            {service.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08} className="bg-card">
                <div className="px-6 py-8 sm:px-8">
                  <dd className="font-display text-3xl font-extrabold text-primary">
                    <CountUp value={stat.value} />
                  </dd>
                  <dt className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </section>

        {/* Capabilities */}
        <section
          id="capabilities"
          className="scroll-mt-24 border-b border-border bg-background py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="What we deliver"
                title={`${service.eyebrow} capabilities`}
              />
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {service.offerings.map((offering, index) => {
                const Icon = iconMap[offering.icon] ?? Sparkles;
                return (
                  <Reveal key={offering.name} delay={index * 0.06}>
                    <article className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_44px_-26px_rgba(11,79,158,0.45)]">
                      <IconBadge icon={Icon} />
                      <h3 className="font-display text-base font-bold text-foreground">
                        {offering.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                        {offering.detail}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-b border-border bg-surface py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="How we work"
                title="Four steps from brief to steady state"
              />
            </Reveal>

            <ol className="relative mt-14 grid gap-6 lg:grid-cols-4">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-border lg:block"
              />
              {service.process.map((step, index) => (
                <Reveal
                  key={step.title}
                  as="li"
                  delay={index * 0.1}
                  className="relative flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-base font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Outcomes */}
        <section className="border-b border-border bg-background py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <Reveal>
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] border border-border shadow-[0_36px_80px_-50px_rgba(11,79,158,0.55)]">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/2 image-scrim opacity-80"
                />
                <p className="absolute inset-x-6 bottom-6 font-display text-lg font-bold leading-snug text-primary-foreground">
                  {service.eyebrow} delivered by a named team
                </p>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <SectionHeading
                  align="left"
                  eyebrow="What you get"
                  title="Commitments we put in writing"
                />
              </Reveal>
              <ul className="mt-8 flex flex-col gap-4">
                {service.outcomes.map((outcome, index) => (
                  <Reveal
                    key={outcome}
                    as="li"
                    delay={index * 0.08}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15"
                    >
                      <Check className="h-3.5 w-3.5 text-accent" />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">
                      {outcome}
                    </span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Related services */}
        {related.length ? (
          <section className="border-b border-border bg-surface py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Reveal>
                <SectionHeading
                  eyebrow="Related"
                  title={`More ${service.pillar.label.toLowerCase()}`}
                />
              </Reveal>

              <div className="mt-12 grid gap-5 sm:grid-cols-3">
                {related.map((item, index) => (
                  <Reveal key={item.slug} delay={index * 0.08}>
                    <Link
                      href={`/services/${item.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_44px_-26px_rgba(11,79,158,0.45)]"
                    >
                      <div className="relative h-36 overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.imageAlt}
                          fill
                          sizes="(min-width: 640px) 33vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-2 p-5">
                        <h3 className="font-display text-base font-bold text-foreground">
                          {item.eyebrow}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.tagline}
                        </p>
                        <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-semibold text-primary">
                          Explore
                          <ArrowRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
