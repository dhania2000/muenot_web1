"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Captions,
  ChevronRight,
  FileText,
  Globe,
  Languages,
  MicVocal,
  ScanSearch,
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
import { WorldMap } from "@/components/ui/world-map";

const regions: { name: string; count: string; note: string }[] = [
  { name: "Europe", count: "18", note: "Western, Nordic & Eastern locales" },
  { name: "Asia Pacific", count: "12", note: "CJK, South & Southeast Asia" },
  { name: "Middle East & Africa", count: "6", note: "RTL scripts & regional Arabic" },
  { name: "Americas", count: "5", note: "LatAm Spanish & Brazilian Portuguese" },
];

const capabilities: {
  icon: LucideIcon;
  name: string;
  detail: string;
  href: string;
}[] = [
  {
    icon: Languages,
    name: "Translation",
    detail: "40+ language pairs with domain-matched native linguists.",
    href: "/services/translation",
  },
  {
    icon: FileText,
    name: "Transcription",
    detail: "Verbatim and clean-read transcription with accurate timecodes.",
    href: "/services/transcription",
  },
  {
    icon: Captions,
    name: "Subtitling",
    detail: "Subtitles, captions, and SDH across every delivery spec.",
    href: "/services/subtitling",
  },
  {
    icon: ScanSearch,
    name: "Linguistic QA",
    detail: "In-context review, terminology, and style-guide enforcement.",
    href: "/services/linguistic-qa",
  },
  {
    icon: MicVocal,
    name: "Voiceover & Dubbing",
    detail: "Studio narration and dubbing matched to each locale.",
    href: "/services/voiceover",
  },
  {
    icon: Globe,
    name: "Media Localization",
    detail: "Video, audio, and on-screen text adapted for local markets.",
    href: "/services/video-audio",
  },
];

const flow: { step: string; title: string; detail: string }[] = [
  {
    step: "Source",
    title: "Prepare & scope",
    detail:
      "We ingest your source, lock terminology in a glossary, and set the style guide per locale.",
  },
  {
    step: "Translate",
    title: "Native linguists",
    detail:
      "In-country translators adapt meaning, tone, and cultural context — not just words.",
  },
  {
    step: "Review",
    title: "Linguistic QA",
    detail:
      "A second linguist runs in-context review, terminology checks, and style enforcement.",
  },
  {
    step: "Deliver",
    title: "Every market out",
    detail:
      "Locale-ready files return in your format, tested and signed off for release.",
  },
];

const metrics: { value: string; label: string }[] = [
  { value: "40", label: "Language pairs" },
  { value: "300", label: "Native linguists" },
  { value: "99", label: "QA pass rate %" },
  { value: "24", label: "Hour turnaround" },
];

export default function LocalizationServicesPage() {
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
                <li className="text-foreground">Localization Services</li>
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
                  Localization Services
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-7 font-display text-4xl font-extrabold leading-[1.03] text-balance sm:text-5xl lg:text-[3.6rem]"
                >
                  Speak to every market{" "}
                  <span className="relative whitespace-nowrap text-primary">
                    in its own voice
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
                  Native linguists, reviewers, and engineers handling translation,
                  media localisation, and linguistic QA so your product reads as
                  though it was written locally.
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
                    Start a localization project
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    href="#coverage"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    See global coverage
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </motion.div>
              </div>

              {/* Transparent world map */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  <Globe className="h-4 w-4 text-primary" aria-hidden="true" />
                  Global reach
                </div>
                <WorldMap />
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  <span className="font-display text-lg font-bold text-primary">
                    <CountUp value="40" />
                    <span aria-hidden="true">+</span>
                  </span>{" "}
                  languages across every major market
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Coverage band */}
        <section id="coverage" className="border-y border-border bg-navy-deep py-20 text-white lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Language coverage
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-balance text-white sm:text-4xl">
                In-country experts, wherever you&apos;re launching
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Our linguists live in the markets they translate for — so tone,
                idiom, and cultural nuance land right the first time.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {regions.map((region, index) => (
                <Reveal
                  key={region.name}
                  delay={index * 0.08}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-accent/40 hover:bg-white/[0.06]"
                >
                  <p className="font-display text-5xl font-extrabold text-accent">
                    {region.count}
                  </p>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">
                    {region.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                    {region.note}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Localization flow — source to market */}
        <section className="border-b border-border py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                How localization flows
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-balance sm:text-4xl">
                From one source file to release-ready locales
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
        <section className="border-b border-border bg-surface py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                What we deliver
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-balance sm:text-4xl">
                A complete localization toolkit
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((cap, index) => {
                const Icon = cap.icon;
                return (
                  <Reveal key={cap.name} delay={index * 0.06}>
                    <Link
                      href={cap.href}
                      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_60px_-40px_rgba(11,79,158,0.5)]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                        </span>
                        <ArrowUpRight
                          className="h-5 w-5 text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="mt-6 font-display text-lg font-bold text-foreground">
                        {cap.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {cap.detail}
                      </p>
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
            <Reveal className="mt-12 flex items-center justify-center gap-3 text-center text-sm text-white/60">
              <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>
                ISO-aligned processes, NDA-backed teams, and secure file handling
                on every engagement.
              </span>
            </Reveal>
          </div>
        </section>
      </main>
      <CTASection />
      <Footer />
      <ScrollToTop />
    </>
  );
}
