"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Accessibility,
  ArrowRight,
  Brush,
  Check,
  ChevronRight,
  Clapperboard,
  Compass,
  GraduationCap,
  Layers,
  PenLine,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/ui/reveal";

const journey: { title: string; detail: string }[] = [
  {
    title: "Curriculum design",
    detail:
      "We map learning objectives, sequence modules, and design assessment strategies grounded in learning science.",
  },
  {
    title: "Storyboarding",
    detail:
      "Concepts become interactive storyboards with clear pacing, on-screen text, and media direction.",
  },
  {
    title: "Production",
    detail:
      "SCORM and xAPI builds, animation, narration, and QA come together into polished, accessible modules.",
  },
  {
    title: "Localization",
    detail:
      "Native linguists adapt every course into 40+ languages while preserving pedagogy and tone.",
  },
  {
    title: "LMS launch",
    detail:
      "We package, test, and deploy into Moodle, Canvas, Blackboard, or your custom LMS with handover docs.",
  },
];

const formats: {
  icon: LucideIcon;
  name: string;
  detail: string;
}[] = [
  {
    icon: Compass,
    name: "Instructional Design",
    detail: "Curriculum mapping, learning journeys, and assessment design.",
  },
  {
    icon: Layers,
    name: "Content Production",
    detail: "SCORM and xAPI builds, interactive modules, and QA.",
  },
  {
    icon: GraduationCap,
    name: "Faculty Support",
    detail: "Author onboarding, review cycles, and course upkeep.",
  },
  {
    icon: Brush,
    name: "Art Production",
    detail: "Illustration, diagrams, and animation made for learning.",
  },
  {
    icon: Clapperboard,
    name: "Video & Audio",
    detail: "Studio recording, editing, and narration production.",
  },
  {
    icon: PenLine,
    name: "Content Operations",
    detail: "Versioning, localisation readiness, and release management.",
  },
];

const outcomes = [
  "WCAG 2.2 AA conformance built into the production workflow",
  "Reusable component libraries that cut revision cycles",
  "Delivery into Moodle, Canvas, Blackboard, and custom LMS",
  "91% average course completion across delivered programmes",
];

export default function ELearningServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        {/* Hero — warm editorial */}
        <section className="relative overflow-hidden border-b border-border bg-surface pt-28 lg:pt-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <li>
                  <Link href="/" className="transition-colors hover:text-primary">
                    Home
                  </Link>
                </li>
                <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
                <li className="text-foreground">E-Learning Services</li>
              </ol>
            </nav>

            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 rounded-full bg-accent/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent"
                >
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  E-Learning Services
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-balance sm:text-5xl lg:text-[3.4rem]"
                >
                  Courses that hold attention{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">and pass review</span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-1 z-0 h-3 rounded-sm bg-accent/30"
                    />
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
                >
                  Instructional designers, subject-matter experts, and media
                  teams working as one unit — turning learning objectives into
                  accessible courses, from curriculum design to LMS launch.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-9 flex flex-wrap items-center gap-4"
                >
                  <Link
                    href="/contact"
                    className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
                  >
                    Start a course project
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    href="#journey"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    How we build courses
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
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-border shadow-[0_40px_90px_-45px_rgba(11,79,158,0.5)]">
                  <Image
                    src="/images/service-elearning-overview.png"
                    alt="Instructional designers reviewing an e-learning course storyboard on a monitor"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-[0_18px_40px_-24px_rgba(11,18,32,0.35)]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Accessibility className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-foreground">
                      WCAG 2.2 AA
                    </p>
                    <p className="text-xs text-muted-foreground">
                      accessible by design
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Learning journey — vertical numbered timeline */}
        <section id="journey" className="border-b border-border py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                The learning journey
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-balance sm:text-4xl">
                From a learning objective to a live course
              </h2>
            </Reveal>

            <ol className="mt-14 flex flex-col">
              {journey.map((phase, index) => (
                <Reveal
                  as="li"
                  key={phase.title}
                  delay={index * 0.06}
                  className="group grid gap-4 border-t border-border py-8 sm:grid-cols-[auto_1fr] sm:gap-10"
                >
                  <span className="font-display text-5xl font-extrabold text-muted-foreground/25 transition-colors group-hover:text-accent sm:text-6xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                      {phase.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">
                      {phase.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Formats — soft rounded cards */}
        <section className="border-b border-border bg-surface py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                What we produce
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-balance sm:text-4xl">
                Every discipline a great course needs
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {formats.map((format, index) => {
                const Icon = format.icon;
                return (
                  <Reveal
                    key={format.name}
                    delay={index * 0.06}
                    className="group rounded-[1.5rem] border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgba(11,79,158,0.45)]"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-accent/15 group-hover:text-accent">
                      <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 font-display text-lg font-bold text-foreground">
                      {format.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {format.detail}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Outcomes — image + checklist */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <Reveal className="relative order-2 lg:order-1">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-border shadow-[0_40px_90px_-50px_rgba(11,79,158,0.5)]">
                <Image
                  src="/images/service-elearning.png"
                  alt="Learners engaging with an accessible e-learning module"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  Why teams choose us
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold text-balance sm:text-4xl">
                  Accessible, measurable, and built to reuse
                </h2>
              </Reveal>
              <ul className="mt-8 flex flex-col gap-4">
                {outcomes.map((item, index) => (
                  <Reveal
                    as="li"
                    key={item}
                    delay={index * 0.07}
                    className="flex items-start gap-3"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15"
                    >
                      <Check className="h-3.5 w-3.5 text-accent" />
                    </span>
                    <span className="text-base leading-relaxed text-foreground">
                      {item}
                    </span>
                  </Reveal>
                ))}
              </ul>
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
