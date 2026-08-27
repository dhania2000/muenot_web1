"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Boxes,
  Check,
  ChevronRight,
  Clock,
  Copy,
  Gauge,
  Lock,
  Minus,
  Plus,
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

function CurationAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      {serviceTypes.map((type, index) => {
        const isOpen = index === open;
        const Icon = type.icon;
        return (
          <div
            key={type.name}
            className={cn(
              "border-b border-border last:border-b-0 transition-colors",
              isOpen && "bg-surface",
            )}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : index)}
                className="group flex w-full items-center gap-5 px-6 py-6 text-left transition-colors hover:bg-surface focus:outline-none focus-visible:bg-surface sm:px-8"
              >
                <span
                  className={cn(
                    "font-display text-sm font-bold tabular-nums transition-colors",
                    isOpen ? "text-accent" : "text-muted-foreground/50",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors",
                    isOpen
                      ? "bg-primary/10"
                      : "bg-surface group-hover:bg-primary/10",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-5 w-5 transition-colors",
                      isOpen ? "text-primary" : "text-muted-foreground",
                    )}
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>

                <span className="flex-1">
                  <span className="block font-display text-lg font-bold text-foreground">
                    {type.name}
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 block max-w-md text-sm leading-relaxed text-muted-foreground transition-opacity",
                      isOpen ? "opacity-100" : "opacity-0 hidden sm:block sm:opacity-70",
                    )}
                  >
                    {type.description}
                  </span>
                </span>

                <span className="hidden items-center gap-1.5 text-xs font-semibold text-muted-foreground md:inline-flex">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {type.turnaround}
                </span>

                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors",
                    isOpen
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground group-hover:border-primary group-hover:text-primary",
                  )}
                >
                  {isOpen ? (
                    <Minus className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  )}
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-8 px-6 pb-8 sm:grid-cols-[auto_1fr_1fr] sm:gap-10 sm:px-8 sm:pl-[6.5rem]">
                    <div className="sm:hidden">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {type.turnaround}
                      </div>
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/80">
                        Capabilities
                      </p>
                      <ul className="mt-4 flex flex-col gap-2.5">
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
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/80">
                        Perfect for
                      </p>
                      <ul className="mt-4 flex flex-col gap-2.5">
                        {type.perfectFor.map((tag) => (
                          <li
                            key={tag}
                            className="flex items-start gap-2.5 text-sm text-foreground"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary"
                            />
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="sm:col-span-3 sm:mt-2">
                      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-muted-foreground">
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-accent"
                        />
                        {type.format}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

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
        <section className="border-b border-border bg-background pt-28 lg:pt-32">
          <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <li>
                  <Link href="/" className="transition-colors hover:text-primary">
                    Home
                  </Link>
                </li>
                <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
                <li>
                  <Link
                    href={service.pillar.href}
                    className="transition-colors hover:text-primary"
                  >
                    {service.pillar.label}
                  </Link>
                </li>
                <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
                <li className="text-foreground">{service.eyebrow}</li>
              </ol>
            </nav>

            <div className="grid items-end gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                >
                  <span aria-hidden="true" className="h-px w-8 bg-accent" />
                  {service.pillar.label}
                </motion.span>

                <AnimatedHeadline
                  text="Turn any raw dataset into"
                  highlight="clean, trustworthy training data."
                  className="mt-8 font-display text-4xl font-extrabold leading-[1.03] text-foreground sm:text-5xl lg:text-6xl"
                  highlightClassName="text-primary"
                />

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-7 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
                >
                  We transform raw, messy data into clean, structured and
                  validated datasets — preserving quality and maximising
                  model performance at every step.
                </motion.p>

                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                  className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
                >
                  {service.chips.map((chip) => (
                    <li
                      key={chip}
                      className="flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-accent"
                      />
                      {chip}
                    </li>
                  ))}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.65 }}
                  className="mt-10 flex flex-wrap items-center gap-6"
                >
                  <Link
                    href="/contact"
                    className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
                  >
                    Get started
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    href="#capabilities"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    View services
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border"
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stat band */}
        <section className="border-b border-border bg-surface">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
            {stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 0.08}
                className="border-b border-border px-2 py-10 sm:px-6 lg:border-b-0 lg:border-l lg:first:border-l-0 lg:py-14"
              >
                <dd className="font-display text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">
                  <CountUp value={stat.value} />
                </dd>
                <dt className="mt-3 flex items-start gap-2 text-xs font-medium leading-relaxed text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  {stat.label}
                </dt>
              </Reveal>
            ))}
          </dl>
        </section>

        {/* Service types */}
        <section
          id="capabilities"
          className="scroll-mt-24 border-b border-border bg-background py-24 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Our curation services"
                title="Professional curation for every data type and format"
                description="From cleaning to enrichment, every technique is matched to what your model actually needs."
              />
            </Reveal>

            <Reveal className="mt-16">
              <CurationAccordion />
            </Reveal>
          </div>
        </section>

        {/* Why choose us */}
        <section className="border-b border-border bg-surface py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Why choose us"
                title="Built for teams who can't afford bad data"
              />
            </Reveal>

            <div className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 0.05}
                  className="flex flex-col gap-4 border-t border-border pt-6"
                >
                  <item.icon
                    className="h-5 w-5 text-primary"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-pretty text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-b border-border bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="How we work"
                title="Four steps from raw data to steady state"
              />
            </Reveal>

            <ol className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step, index) => (
                <Reveal
                  key={step.title}
                  as="li"
                  delay={index * 0.1}
                  className="flex flex-col gap-4 border-t border-border pt-6"
                >
                  <span className="font-display text-sm font-bold tabular-nums text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground">
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
        <section className="border-b border-border bg-surface py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
            <Reveal>
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-border">
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
              <ul className="mt-10 flex flex-col">
                {useCases.map((useCase, index) => (
                  <Reveal
                    key={useCase}
                    as="li"
                    delay={index * 0.08}
                    className="flex items-start gap-4 border-b border-border py-5 first:border-t"
                  >
                    <Sparkles
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
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
          <section className="border-b border-border bg-background py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Reveal>
                <SectionHeading
                  align="left"
                  eyebrow="Related"
                  title={`More ${service.pillar.label.toLowerCase()}`}
                />
              </Reveal>

              <div className="mt-14 grid gap-8 sm:grid-cols-3">
                {related.map((item, index) => (
                  <Reveal key={item.slug} delay={index * 0.08}>
                    <Link
                      href={`/services/${item.slug}`}
                      className="group flex h-full flex-col"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.imageAlt}
                          fill
                          sizes="(min-width: 640px) 33vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-2 pt-5">
                        <h3 className="font-display text-base font-bold text-foreground transition-colors group-hover:text-primary">
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
