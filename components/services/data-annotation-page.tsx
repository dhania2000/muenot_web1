"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  AudioLines,
  Boxes,
  Check,
  ChevronRight,
  Clock,
  Crosshair,
  Film,
  Layers,
  MapPin,
  Network,
  ScanLine,
  Shapes,
  Spline,
  Tag,
  Waypoints,
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
  { value: "99.5%", label: "Accuracy rate, quality guaranteed" },
  { value: "10M+", label: "Data points processed monthly" },
  { value: "24-48h", label: "Pilot turnaround, rush available" },
  { value: "Unlimited", label: "Revisions until you're satisfied" },
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
    icon: Tag,
    name: "Image labelling",
    description:
      "Professional image annotation for computer vision and machine learning models.",
    included: [
      "Bounding box annotation",
      "Polygon segmentation",
      "Semantic labelling",
      "Multi-format export",
    ],
    perfectFor: [
      "Object detection",
      "Image classification",
      "Autonomous vehicles",
      "Medical imaging",
    ],
    format: "All image formats",
    turnaround: "3-5 business days",
  },
  {
    icon: Crosshair,
    name: "Object detection",
    description:
      "Precise object identification and localisation for advanced AI applications.",
    included: [
      "Multi-object tracking",
      "Instance segmentation",
      "3D bounding boxes",
      "Keypoint annotation",
    ],
    perfectFor: [
      "Retail analytics",
      "Security systems",
      "Robotics",
      "Sports analysis",
    ],
    format: "Real-time processing",
    turnaround: "5-7 business days",
  },
  {
    icon: Layers,
    name: "Text tagging",
    description:
      "Natural language annotation for text understanding and language models.",
    included: [
      "Named entity tagging",
      "Sentiment annotation",
      "Intent classification",
      "Custom taxonomies",
    ],
    perfectFor: [
      "Chatbots",
      "Search engines",
      "Content moderation",
      "Document analysis",
    ],
    format: "50+ languages",
    turnaround: "3-5 business days",
  },
  {
    icon: Network,
    name: "Entity recognition",
    description:
      "Custom entity identification and knowledge graph construction services.",
    included: [
      "Entity extraction",
      "Coreference resolution",
      "Entity linking",
      "Knowledge graphs",
    ],
    perfectFor: [
      "Legal tech",
      "Healthcare NLP",
      "Financial analysis",
      "Research tools",
    ],
    format: "Domain expertise",
    turnaround: "5-7 business days",
  },
  {
    icon: AudioLines,
    name: "Audio annotation",
    description:
      "Speech and audio labelling for voice AI and sound recognition systems.",
    included: [
      "Speech transcription",
      "Speaker diarisation",
      "Emotion labelling",
      "Multi-speaker support",
    ],
    perfectFor: [
      "Voice assistants",
      "Call centres",
      "Podcast analysis",
      "Music AI",
    ],
    format: "50+ languages",
    turnaround: "5-7 business days",
  },
  {
    icon: Film,
    name: "Video tagging",
    description:
      "Frame-by-frame video annotation for action recognition and tracking.",
    included: [
      "Object tracking",
      "Action recognition",
      "Scene segmentation",
      "Event detection",
    ],
    perfectFor: [
      "Surveillance",
      "Sports analytics",
      "Autonomous driving",
      "Content creation",
    ],
    format: "All video formats",
    turnaround: "5-7 business days",
  },
];

const annotationTypes: { icon: LucideIcon; name: string; detail: string }[] = [
  {
    icon: Boxes,
    name: "Bounding box",
    detail: "Rectangular regions for object detection",
  },
  {
    icon: Shapes,
    name: "Polygon",
    detail: "Precise shape outlining for complex objects",
  },
  {
    icon: ScanLine,
    name: "Semantic",
    detail: "Pixel-level classification labelling",
  },
  {
    icon: MapPin,
    name: "Keypoint",
    detail: "Precise landmark annotation",
  },
  {
    icon: Waypoints,
    name: "Temporal",
    detail: "Time-based event marking",
  },
  {
    icon: Spline,
    name: "Hierarchical",
    detail: "Multi-level category structures",
  },
];

const process = [
  { title: "Guidelines", detail: "Edge cases agreed and documented." },
  { title: "Calibration", detail: "Pod scored against your gold set." },
  { title: "Production", detail: "Batched delivery with QA sampling." },
  { title: "Reporting", detail: "Weekly accuracy and throughput view." },
];

const outcomes = [
  "Named delivery manager accountable for SLA performance",
  "Secure floors with NDA-backed, access-controlled workstations",
  "Audit trail on every batch, annotator and review decision",
];

function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const service = serviceTypes[active];
  const ActiveIcon = service.icon;

  return (
    <div className="grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      {/* Selectable service list */}
      <div
        role="tablist"
        aria-label="Annotation services"
        className="flex flex-col border-b border-border lg:border-b-0 lg:border-r"
      >
        {serviceTypes.map((type, index) => {
          const isActive = index === active;
          const Icon = type.icon;
          return (
            <button
              key={type.name}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              className={cn(
                "group relative flex items-center gap-4 border-b border-border px-6 py-5 text-left transition-colors last:border-b-0 focus:outline-none focus-visible:bg-surface",
                isActive ? "bg-surface" : "hover:bg-surface/60",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-y-0 left-0 w-0.5 origin-top bg-accent transition-transform duration-300",
                  isActive ? "scale-y-100" : "scale-y-0",
                )}
              />
              <span
                className={cn(
                  "font-display text-xs font-bold tabular-nums transition-colors",
                  isActive ? "text-accent" : "text-muted-foreground/60",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <Icon
                className={cn(
                  "h-5 w-5 shrink-0 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span
                className={cn(
                  "flex-1 font-display text-base font-bold transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {type.name}
              </span>
              <ChevronRight
                className={cn(
                  "h-4 w-4 shrink-0 transition-all duration-300",
                  isActive
                    ? "translate-x-0 text-primary opacity-100"
                    : "-translate-x-1 text-muted-foreground opacity-0 group-hover:opacity-60",
                )}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div className="relative min-h-[26rem] overflow-hidden bg-surface p-8 sm:p-10 lg:p-12">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 -top-8 select-none font-display text-[10rem] font-extrabold leading-none text-border/50"
        >
          {String(active + 1).padStart(2, "0")}
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex h-full flex-col"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <ActiveIcon
                  className="h-6 w-6 text-primary"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
              <div>
                <h3 className="font-display text-2xl font-extrabold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  {service.format}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-base leading-relaxed text-pretty text-muted-foreground">
              {service.description}
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/80">
                  What&apos;s included
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {service.included.map((item) => (
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
                  {service.perfectFor.map((tag) => (
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
            </div>

            <div className="mt-auto flex items-center gap-2 border-t border-border pt-6 text-sm font-semibold text-foreground">
              <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="text-muted-foreground">Typical turnaround</span>
              <span className="ml-auto">{service.turnaround}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function DataAnnotationPage({
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
                  text="Expert annotation that powers"
                  highlight="the next generation of AI."
                  className="mt-8 font-display text-4xl font-extrabold leading-[1.03] text-foreground sm:text-5xl lg:text-6xl"
                  highlightClassName="text-primary"
                />

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-7 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
                >
                  From images to audio, our dedicated pods deliver precise,
                  high-quality training data for every machine learning model
                  — with a QA layer on every batch.
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
                    Request demo &amp; quote
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
                eyebrow="What we deliver"
                title="Expert annotation for every data type and AI application"
              />
            </Reveal>

            <Reveal className="mt-16">
              <ServiceExplorer />
            </Reveal>
          </div>
        </section>

        {/* Annotation types */}
        <section className="border-b border-border bg-surface py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Annotation types"
                title="Choose the perfect method for your model"
                description="Every project is matched to the annotation technique that fits your model requirements."
              />
            </Reveal>

            <div className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {annotationTypes.map((type, index) => (
                <Reveal
                  key={type.name}
                  delay={index * 0.05}
                  className="group flex items-start gap-4 border-t border-border pt-6"
                >
                  <type.icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground">
                      {type.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-pretty text-muted-foreground">
                      {type.detail}
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
                title="Four steps from brief to steady state"
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

        {/* Outcomes */}
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
                  Data annotation delivered by a named team
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
              <ul className="mt-10 flex flex-col">
                {outcomes.map((outcome, index) => (
                  <Reveal
                    key={outcome}
                    as="li"
                    delay={index * 0.08}
                    className="flex items-start gap-4 border-b border-border py-5 first:border-t"
                  >
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
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
