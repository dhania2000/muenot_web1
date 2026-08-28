"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Accessibility,
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  ChevronRight,
  Cog,
  FileCode2,
  Palette,
  PenTool,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";

const capabilities: {
  icon: LucideIcon;
  name: string;
  detail: string;
  href: string;
}[] = [
  {
    icon: BookOpenCheck,
    name: "Editorial Services",
    detail: "Developmental, copy, and proof editing to house style.",
    href: "/services/editorial-services",
  },
  {
    icon: Accessibility,
    name: "Accessibility Services",
    detail: "WCAG and EPUB accessibility remediation and audits.",
    href: "/services/accessibility-services",
  },
  {
    icon: FileCode2,
    name: "Conversion Services",
    detail: "XML, EPUB3, and structured data conversion at scale.",
    href: "/services/conversion-services",
  },
  {
    icon: Cog,
    name: "Content Operations",
    detail: "Metadata, workflow, and catalogue management.",
    href: "/services/content-operations",
  },
  {
    icon: Palette,
    name: "Art Production",
    detail: "Figures, tables, and cover production for print and digital.",
    href: "/services/art-production",
  },
  {
    icon: PenTool,
    name: "Content Development",
    detail: "Commissioned writing and adaptation for new editions.",
    href: "/services/content-development",
  },
];

const flow: { step: string; title: string; detail: string }[] = [
  {
    step: "Intake",
    title: "Assess the backlist",
    detail:
      "We audit source files, formats, and accessibility gaps, then lock a house style sheet per imprint.",
  },
  {
    step: "Edit",
    title: "Editorial pass",
    detail:
      "Copy editors and proofreaders work to your style guide with tracked, sign-off-ready rounds.",
  },
  {
    step: "Convert",
    title: "Structure & tag",
    detail:
      "Content is composed and converted to XML and EPUB3 with correct semantic structure and reading order.",
  },
  {
    step: "Certify",
    title: "Accessible delivery",
    detail:
      "Titles ship WCAG-aligned and accessibility-checked, with publisher sign-off on every batch.",
  },
];

const metrics: { value: string; label: string }[] = [
  { value: "12,400", label: "Titles remediated" },
  { value: "40", label: "Imprints supported" },
  { value: "99", label: "First-pass QA %" },
  { value: "6", label: "Delivery languages" },
];

const standards = [
  "European Accessibility Act readiness assessments before deadlines bite",
  "Style-sheet driven consistency enforced across every imprint",
  "Backlist conversion throughput measured in thousands of titles",
  "Structural tagging, alt text, and reading-order fixes signed off per batch",
];

export default function PublishingServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 lg:pt-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.06] via-transparent to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-24 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-[120px]"
          />
          <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <li>
                  <Link href="/" className="transition-colors hover:text-primary">
                    Home
                  </Link>
                </li>
                <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
                <li className="text-foreground">Publishing Services</li>
              </ol>
            </nav>

            <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                >
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  Publishing Services
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-7 font-display text-4xl font-extrabold leading-[1.03] text-balance sm:text-5xl lg:text-[3.6rem]"
                >
                  Backlists reborn as{" "}
                  <span className="relative whitespace-nowrap text-primary">
                    accessible catalogues
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 300 12"
                      className="absolute -bottom-2 left-0 h-2.5 w-full text-primary/30"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 8 C 80 2, 220 2, 298 8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="mt-7 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
                >
                  Copy editing, composition, conversion, and accessibility
                  remediation for publishers moving large backlists into
                  compliant, standards-ready digital formats.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-9 flex flex-wrap items-center gap-4"
                >
                  <Link
                    href="/contact"
                    className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-[0_20px_45px_-20px_rgba(11,79,158,0.7)] transition-colors hover:bg-primary-dark"
                  >
                    Start a publishing project
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    href="#capabilities"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    See what we deliver
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </motion.div>
              </div>

              {/* Publishing hero visual */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative flex items-center justify-center"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 mx-auto h-3/4 w-3/4 self-center rounded-full bg-primary/10 blur-[90px]"
                />
                <motion.img
                  src="/images/publishing-hero.png"
                  alt="Printed book transforming into an accessible digital edition"
                  className="w-full max-w-md drop-shadow-[0_40px_60px_rgba(11,79,158,0.25)]"
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Publishing flow */}
        <section className="border-b border-border py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                How a title flows
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-balance sm:text-4xl">
                From legacy source to compliant digital edition
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-4 md:grid-cols-4 md:gap-0">
              {flow.map((stage, index) => (
                <Reveal
                  key={stage.step}
                  delay={index * 0.08}
                  className="relative md:px-4 md:first:pl-0 md:last:pr-0"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_60px_-40px_rgba(11,79,158,0.5)]">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                        {stage.step}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {stage.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="border-b border-border bg-surface py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                What we deliver
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-balance sm:text-4xl">
                A complete publishing production toolkit
              </h2>
            </Reveal>

            <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
              {capabilities.map((cap, index) => {
                const Icon = cap.icon;
                return (
                  <Reveal key={cap.name} delay={index * 0.05}>
                    <Link
                      href={cap.href}
                      className="group relative flex items-center gap-5 border-b border-border px-5 py-6 transition-colors last:border-b-0 hover:bg-primary/[0.04] sm:gap-7 sm:px-8"
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100"
                      />
                      <span className="hidden w-10 shrink-0 font-mono text-sm font-semibold tabular-nums text-muted-foreground/60 transition-colors group-hover:text-primary sm:block">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display text-base font-bold text-foreground sm:text-lg">
                          {cap.name}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {cap.detail}
                        </p>
                      </div>
                      <ArrowUpRight
                        className="h-5 w-5 shrink-0 text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                        aria-hidden="true"
                      />
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Metrics band */}
        <section className="bg-navy-deep py-16 text-white lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {metrics.map((metric, index) => (
                <Reveal key={metric.label} delay={index * 0.08} className="text-center">
                  <p className="font-display text-4xl font-extrabold text-accent sm:text-5xl">
                    <CountUp value={metric.value} />
                    <span aria-hidden="true">+</span>
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/70">
                    {metric.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Standards */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
            <Reveal>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-display text-3xl font-bold text-balance sm:text-4xl">
                Compliance built into every title
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                Accessibility and consistency are acceptance criteria, not
                afterthoughts — so your catalogue is ready for the standards
                that matter and the deadlines that come with them.
              </p>
            </Reveal>

            <div className="flex flex-col gap-4">
              {standards.map((item, index) => (
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
