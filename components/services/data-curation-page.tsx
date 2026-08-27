"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Check,
  ChevronRight,
  Clock,
  Copy,
  Gauge,
  Lock,
  Ruler,
  ScanSearch,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  SplitSquareHorizontal,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CTASection } from "@/components/sections/cta-section";
import { AnimatedHeadline, Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { IconBadge } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ServiceDetail } from "@/lib/services-data";

const stats = [
  { value: "18M+", label: "Assets curated to date" },
  { value: "99.9%", label: "Quality assured, QC-checked" },
  { value: "24-48h", label: "Typical turnaround, rush available" },
  { value: "100%", label: "Encrypted, confidential handling" },
];

type ServiceType = {
  icon: LucideIcon;
  name: string;
  description: string;
  included: string[];
  perfectFor: string[];
  format: string;
  turnaround: string;
};

const serviceTypes: ServiceType[] = [
  {
    icon: SlidersHorizontal,
    name: "Data cleaning",
    description:
      "Systematically identify and resolve quality issues that can compromise model performance.",
    included: [
      "Duplicate detection & removal",
      "Missing value imputation",
      "Outlier detection & correction",
      "Error correction",
    ],
    perfectFor: [
      "Training dataset optimisation",
      "Legacy data prep",
      "Multi-source merges",
      "Model retraining",
    ],
    format: "99.8% accuracy",
    turnaround: "2-5 days",
  },
  {
    icon: Copy,
    name: "Deduplication",
    description:
      "Catch exact, near and fuzzy duplicates before they pollute your training data.",
    included: [
      "Fuzzy matching",
      "Exact duplicate removal",
      "Near-duplicate detection",
      "Cross-dataset dedup",
    ],
    perfectFor: [
      "Web-scraped corpora",
      "Crowd-sourced data",
      "Multi-source merges",
      "Pre-training checks",
    ],
    format: "Batch or streaming",
    turnaround: "1-3 days",
  },
  {
    icon: ScanSearch,
    name: "Missing value handling",
    description:
      "Fill gaps in incomplete datasets using statistically sound, ML-assisted techniques.",
    included: [
      "Mean / median replacement",
      "Forward filling",
      "Interpolation",
      "ML-based prediction",
    ],
    perfectFor: [
      "Sensor & IoT data",
      "Survey datasets",
      "Financial records",
      "Longitudinal studies",
    ],
    format: "Structured & tabular",
    turnaround: "2-4 days",
  },
  {
    icon: Gauge,
    name: "Outlier detection",
    description:
      "Flag and correct anomalies that skew model training and downstream analytics.",
    included: [
      "Statistical analysis",
      "ML-based anomaly detection",
      "Custom thresholds",
      "Flagging & removal",
    ],
    perfectFor: [
      "Fraud detection models",
      "Sensor data QA",
      "Financial datasets",
      "Predictive maintenance",
    ],
    format: "Numeric & time series",
    turnaround: "2-5 days",
  },
  {
    icon: Ruler,
    name: "Format standardisation",
    description:
      "Normalise dates, currencies, units and text so every record speaks the same language.",
    included: [
      "Date normalisation",
      "Currency formatting",
      "Unit conversion",
      "Text standardisation",
    ],
    perfectFor: [
      "Multi-source integration",
      "Global datasets",
      "Legacy migrations",
      "API harmonisation",
    ],
    format: "Any structured format",
    turnaround: "1-3 days",
  },
  {
    icon: SplitSquareHorizontal,
    name: "Sampling & enrichment",
    description:
      "Build representative subsets and enrich records with the metadata your model needs.",
    included: [
      "Stratified sampling",
      "Class balancing",
      "Metadata enrichment",
      "Synthetic augmentation",
    ],
    perfectFor: [
      "Model benchmarking",
      "Rare-class boosting",
      "Feature engineering",
      "A/B test cohorts",
    ],
    format: "Any volume",
    turnaround: "3-5 days",
  },
];

const whyChooseUs: { icon: LucideIcon; title: string; detail: string }[] = [
  {
    icon: Lock,
    title: "Secure processing",
    detail: "Files encrypted in transit and at rest, deleted after curation.",
  },
  {
    icon: ShieldCheck,
    title: "Quality guaranteed",
    detail: "Multiple QC checkpoints ensure statistical and human-verified accuracy.",
  },
  {
    icon: Zap,
    title: "Fast turnaround",
    detail: "Rush processing available without compromising on quality gates.",
  },
  {
    icon: Boxes,
    title: "Batch processing",
    detail: "Handle large volumes efficiently across parallel delivery pods.",
  },
];

const process = [
  { title: "Audit", detail: "Existing corpus profiled for gaps and risk." },
  { title: "Curate", detail: "Cleaning, dedup and filtering to target mix." },
  { title: "Validate", detail: "Statistical checks plus human spot review." },
  { title: "Handover", detail: "Documented dataset card delivered." },
];

const useCases = [
  "Cleaning training datasets for model optimisation",
  "Removing duplicates before model training",
  "Standardising data formats across multiple sources",
  "Preparing legacy data for modern ML pipelines",
];

export function DataCurationPage({
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
                  text="Turn any raw dataset into"
                  highlight="clean, trustworthy training data."
                  className="mt-6 font-display text-4xl font-extrabold leading-[1.06] text-foreground sm:text-5xl"
                  highlightClassName="text-primary"
                />

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-5 max-w-lg text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
                >
                  We transform raw, messy data into clean, structured and
                  validated datasets — preserving quality and maximising
                  model performance at every step.
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
                    Get started
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    href="#capabilities"
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    View services
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stat band */}
        <section className="border-b border-border bg-background py-8 lg:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-primary-foreground/12 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.08} className="bg-navy-deep">
                  <div className="px-6 py-8 sm:px-8">
                    <dd className="font-display text-3xl font-extrabold text-accent">
                      <CountUp value={stat.value} />
                    </dd>
                    <dt className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground/65">
                      {stat.label}
                    </dt>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* Service types */}
        <section
          id="capabilities"
          className="scroll-mt-24 border-b border-border bg-background py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Our curation services"
                title="Professional curation for every data type and format"
                description="From cleaning to enrichment, every technique is matched to what your model actually needs."
              />
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {serviceTypes.map((type, index) => (
                <Reveal key={type.name} delay={index * 0.06}>
                  <article className="group flex h-full flex-col gap-5 rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_50px_-28px_rgba(11,79,158,0.45)]">
                    <div className="flex items-start justify-between gap-4">
                      <IconBadge icon={type.icon} size="lg" />
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {type.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground">
                        {type.description}
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                        Capabilities
                      </p>
                      <ul className="mt-3 flex flex-col gap-2">
                        {type.included.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-foreground"
                          >
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                        Perfect for
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {type.perfectFor.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-4 text-xs font-semibold text-muted-foreground">
                      <span>{type.format}</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {type.turnaround}
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="border-b border-border bg-surface py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Why choose us"
                title="Built for teams who can't afford bad data"
              />
            </Reveal>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_40px_-26px_rgba(11,79,158,0.45)]">
                    <IconBadge icon={item.icon} size="md" />
                    <div>
                      <h3 className="font-display text-sm font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-pretty text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-b border-border bg-background py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="How we work"
                title="Four steps from raw data to steady state"
              />
            </Reveal>

            <ol className="relative mt-14 grid gap-6 lg:grid-cols-4">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-border lg:block"
              />
              {process.map((step, index) => (
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

        {/* Use cases */}
        <section className="border-b border-border bg-surface py-20 lg:py-24">
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
                  Curated datasets, ready for your next training run
                </p>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <SectionHeading
                  align="left"
                  eyebrow="Common use cases"
                  title="Where teams put our curation to work"
                />
              </Reveal>
              <ul className="mt-8 flex flex-col gap-4">
                {useCases.map((useCase, index) => (
                  <Reveal
                    key={useCase}
                    as="li"
                    delay={index * 0.08}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-accent" />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">
                      {useCase}
                    </span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Related services */}
        {related.length ? (
          <section className="border-b border-border bg-background py-20">
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
