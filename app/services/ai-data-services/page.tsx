"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  ChartBar,
  ChevronRight,
  Database,
  FileStack,
  ShieldCheck,
  Terminal,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";

const pipeline: { step: string; title: string; detail: string }[] = [
  {
    step: "01",
    title: "Ingest",
    detail: "Secure intake, schema mapping, and gold-standard set creation.",
  },
  {
    step: "02",
    title: "Annotate",
    detail: "Trained pods label to your guidelines across every modality.",
  },
  {
    step: "03",
    title: "Review",
    detail: "Two-stage QA with inter-annotator agreement scoring.",
  },
  {
    step: "04",
    title: "Deliver",
    detail: "Versioned batches with audit trails and quality reports.",
  },
];

const capabilities: {
  icon: LucideIcon;
  name: string;
  detail: string;
  tag: string;
}[] = [
  {
    icon: Database,
    name: "Data Annotation",
    detail: "Image, video, text, audio, and 3D point cloud labelling at volume.",
    tag: "multimodal",
  },
  {
    icon: FileStack,
    name: "Data Curation",
    detail: "Sourcing, deduplication, and dataset balancing for clean corpora.",
    tag: "datasets",
  },
  {
    icon: BrainCircuit,
    name: "Model Training",
    detail: "Fine-tuning support, benchmarking, and structured error analysis.",
    tag: "fine-tune",
  },
  {
    icon: Workflow,
    name: "Human in the Loop",
    detail: "Live review queues and escalation workflows for production systems.",
    tag: "hitl",
  },
  {
    icon: Users,
    name: "LLM Services",
    detail: "RLHF, preference ranking, red teaming, and rubric-based evaluation.",
    tag: "rlhf",
  },
  {
    icon: ChartBar,
    name: "AI Analytics",
    detail: "Quality dashboards and model performance reporting per batch.",
    tag: "reporting",
  },
];

const metrics = [
  { value: "98.2%", label: "Average annotation accuracy" },
  { value: "4.2M", label: "Frames labelled per cycle" },
  { value: "300+", label: "Specialists on delivery" },
  { value: "24/7", label: "Coverage across regions" },
];

const guarantees = [
  "Dedicated QA layer with inter-annotator agreement scoring on every batch",
  "ISO-aligned data handling inside NDA-backed secure delivery facilities",
  "Documented quality gates and acceptance criteria agreed before ramp-up",
  "Named delivery manager accountable for SLA performance and reporting",
];

export default function AiDataServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        {/* Hero — light technical layout with dark terminal accent */}
        <section className="relative overflow-hidden border-b border-border pt-28 lg:pt-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 grid-lines opacity-[0.06]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-40 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs text-muted-foreground">
                <li>
                  <Link href="/" className="transition-colors hover:text-accent-foreground">
                    home
                  </Link>
                </li>
                <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
                <li className="text-foreground/80">ai-data-services</li>
              </ol>
            </nav>

            <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary"
                >
                  <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
                  // AI Data Services
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-6 font-display text-4xl font-extrabold leading-[1.04] text-balance sm:text-5xl lg:text-[3.5rem]"
                >
                  Training data pipelines built for{" "}
                  <span className="text-primary">production models</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
                >
                  We build and operate the annotation, curation, and evaluation
                  pipelines that keep machine learning teams shipping —
                  dedicated pods, documented quality gates, and audit trails on
                  every batch.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-9 flex flex-wrap items-center gap-4"
                >
                  <Link
                    href="/contact"
                    className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Scope a pilot batch
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    href="/case-studies"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
                  >
                    See client results
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </motion.div>
              </div>

              {/* Terminal-style schematic panel — kept dark as a signature accent */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative rounded-2xl border border-navy-deep/20 bg-navy-deep p-5 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-center gap-2 border-b border-primary-foreground/10 pb-4">
                  <span className="h-3 w-3 rounded-full bg-destructive/80" />
                  <span className="h-3 w-3 rounded-full bg-accent/80" />
                  <span className="h-3 w-3 rounded-full bg-primary-foreground/30" />
                  <span className="ml-3 font-mono text-xs text-primary-foreground/50">
                    pipeline.log
                  </span>
                </div>
                <div className="mt-4 space-y-2.5 font-mono text-[13px] leading-relaxed">
                  <p className="text-primary-foreground/50">
                    <span className="text-accent">$</span> batch --ingest 12,480 items
                  </p>
                  <p className="text-primary-foreground/80">
                    &gt; schema validated · gold set locked
                  </p>
                  <p className="text-primary-foreground/50">
                    <span className="text-accent">$</span> annotate --modality multi
                  </p>
                  <p className="text-primary-foreground/80">
                    &gt; 6 pods active · 98.2% agreement
                  </p>
                  <p className="text-primary-foreground/50">
                    <span className="text-accent">$</span> qa --review two-stage
                  </p>
                  <p className="text-primary-foreground/80">
                    &gt; 99.4% accepted on first pass
                  </p>
                  <p className="text-accent">
                    &gt; delivered ✓ audit trail attached
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pipeline stepper */}
        <section className="border-b border-border bg-muted/40 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                How it runs
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-balance sm:text-4xl">
                A pipeline you can audit, end to end
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {pipeline.map((stage, index) => (
                <Reveal
                  key={stage.step}
                  delay={index * 0.08}
                  className="group relative bg-background p-7 transition-colors hover:bg-muted/60"
                >
                  <span className="font-mono text-4xl font-extrabold text-foreground/10 transition-colors group-hover:text-primary/40">
                    {stage.step}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {stage.detail}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities grid */}
        <section className="border-b border-border py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Capabilities
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-balance sm:text-4xl">
                Six services, one governed delivery layer
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((cap, index) => {
                const Icon = cap.icon;
                return (
                  <Reveal
                    key={cap.name}
                    delay={index * 0.06}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                    />
                    <div className="relative flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        {cap.tag}
                      </span>
                    </div>
                    <h3 className="relative mt-6 font-display text-lg font-bold">
                      {cap.name}
                    </h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                      {cap.detail}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Metrics band */}
        <section className="border-b border-border bg-primary py-16 lg:py-20">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
            {metrics.map((metric, index) => (
              <Reveal
                key={metric.label}
                delay={index * 0.08}
                className="flex flex-col items-center gap-2 text-center"
              >
                <dd className="font-display text-4xl font-extrabold text-accent sm:text-5xl">
                  <CountUp value={metric.value} />
                </dd>
                <dt className="max-w-40 text-sm font-medium leading-relaxed text-primary-foreground/80">
                  {metric.label}
                </dt>
              </Reveal>
            ))}
          </dl>
        </section>

        {/* Quality guarantees */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
            <Reveal>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-display text-3xl font-bold text-balance sm:text-4xl">
                Quality is a contract, not a promise
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                Every engagement runs against acceptance criteria we agree
                before a single item is labelled — so quality is measurable from
                the first batch.
              </p>
            </Reveal>

            <div className="flex flex-col gap-4">
              {guarantees.map((item, index) => (
                <Reveal
                  key={item}
                  delay={index * 0.07}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-xs font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/85">
                    {item}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CTASection />
      <Footer />
      <ScrollToTop />
    </>
  );
}
