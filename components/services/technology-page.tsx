"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock,
  Cloud,
  Code2,
  Database,
  Gauge,
  Lightbulb,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
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

const heroPoints = [
  "Senior squads embedded into your backlog and release cadence",
  "Cloud-native architecture built for scale and cost control",
  "Automation that removes manual, error-prone workflows",
  "SLA-backed support with documentation on every handover",
];

const highlights: { icon: LucideIcon; title: string; detail: string }[] = [
  {
    icon: Users,
    title: "Senior Engineering Squads",
    detail: "Experienced developers who integrate with your team from week one.",
  },
  {
    icon: ShieldCheck,
    title: "Production-Grade Delivery",
    detail: "Reviewed, tested, and documented code shipped to your standards.",
  },
  {
    icon: Gauge,
    title: "Built to Scale",
    detail: "Architecture and pipelines designed for growth, not just launch.",
  },
];

type ServiceType = {
  icon: LucideIcon;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  capabilities: string[];
  perfectFor: string[];
  turnaround: string;
};

const services: ServiceType[] = [
  {
    icon: Code2,
    name: "Software Development",
    subtitle: "Web & mobile product delivery",
    tagline: "Full-stack product engineering with senior squads",
    description:
      "We design, build, and ship web and mobile products with senior engineers who own delivery end to end. From greenfield builds to modernising legacy systems, we integrate with your backlog, review process, and release cadence.",
    capabilities: [
      "React, Next.js & TypeScript",
      "Native and cross-platform mobile",
      "API and microservice design",
      "Legacy modernisation",
      "Code review and documentation",
    ],
    perfectFor: [
      "SaaS platforms",
      "Customer portals",
      "Internal tools",
      "MVP to scale",
    ],
    turnaround: "2-week onboarding",
  },
  {
    icon: Cloud,
    name: "Cloud & DevOps",
    subtitle: "Infrastructure that stays up",
    tagline: "Migration, IaC, CI/CD, and cost optimisation",
    description:
      "We move workloads to the cloud, codify infrastructure, and automate the path from commit to production. Observability, security, and cost control are built in — so releases are boring and the bill is predictable.",
    capabilities: [
      "Cloud migration (AWS, Azure, GCP)",
      "Infrastructure as Code",
      "CI/CD pipeline automation",
      "Observability and alerting",
      "Cost optimisation reviews",
    ],
    perfectFor: [
      "Cloud migrations",
      "Platform teams",
      "Scaling startups",
      "Compliance workloads",
    ],
    turnaround: "3-6 weeks",
  },
  {
    icon: Wrench,
    name: "Automation",
    subtitle: "Workflow and internal tooling",
    tagline: "Automate the manual work slowing your team down",
    description:
      "We identify repetitive, error-prone processes and replace them with reliable automation and internal tools. From data syncs to approval workflows, we free your team to focus on work that needs a human.",
    capabilities: [
      "Workflow automation",
      "Internal tools and dashboards",
      "Data integration and syncs",
      "Scheduled jobs and pipelines",
      "Third-party API orchestration",
    ],
    perfectFor: [
      "Operations teams",
      "Back-office processes",
      "Reporting automation",
      "System integrations",
    ],
    turnaround: "2-4 weeks",
  },
  {
    icon: Database,
    name: "Data Platforms",
    subtitle: "Warehouses & reporting layers",
    tagline: "A governed data model your whole team can trust",
    description:
      "We build the warehouses, pipelines, and reporting layers that turn scattered data into a single source of truth. Governed models, tested transformations, and dashboards built for the people who actually use them.",
    capabilities: [
      "Warehouse design and modelling",
      "ETL / ELT pipelines",
      "Reporting and BI dashboards",
      "Data quality and testing",
      "Governance and documentation",
    ],
    perfectFor: [
      "Analytics teams",
      "Reporting consolidation",
      "Data governance",
      "Self-serve BI",
    ],
    turnaround: "4-8 weeks",
  },
  {
    icon: ScanSearch,
    name: "QA Engineering",
    subtitle: "Test automation & release validation",
    tagline: "Ship faster with confidence, not crossed fingers",
    description:
      "We build test automation and release validation that catches regressions before your users do. Coverage where it counts, fast feedback in CI, and clear reporting so every release decision is an informed one.",
    capabilities: [
      "Automated test suites",
      "End-to-end and integration testing",
      "Performance and load testing",
      "CI-integrated validation",
      "Release readiness reporting",
    ],
    perfectFor: [
      "Frequent releases",
      "Regression-prone products",
      "Quality-critical systems",
      "Scaling teams",
    ],
    turnaround: "3-5 weeks",
  },
  {
    icon: Lightbulb,
    name: "IT Consulting",
    subtitle: "Architecture & technology roadmaps",
    tagline: "Independent advice on where to invest next",
    description:
      "We review your architecture, delivery practices, and technology choices, then produce a defensible roadmap. Practical recommendations prioritised by impact and effort — with the tradeoffs made explicit.",
    capabilities: [
      "Architecture reviews",
      "Technology roadmaps",
      "Delivery process audits",
      "Vendor and stack selection",
      "Security and risk assessment",
    ],
    perfectFor: [
      "Technical due diligence",
      "Modernisation planning",
      "Scaling decisions",
      "Leadership advisory",
    ],
    turnaround: "1-3 weeks",
  },
];

const process = [
  {
    title: "Discovery & Scoping",
    detail:
      "We map your backlog, stack, and delivery cadence, then agree on measurable goals and acceptance criteria.",
  },
  {
    title: "Team Integration",
    detail:
      "A senior squad is embedded into your workflow, tooling, and review process within a two-week onboarding.",
  },
  {
    title: "Build & Ship",
    detail:
      "We deliver against your release schedule with reviewed, tested code and transparent progress reporting.",
  },
  {
    title: "Operate & Support",
    detail:
      "SLA-backed support with defined escalation paths keeps what we build running in production.",
  },
  {
    title: "Handover & Docs",
    detail:
      "Documentation and knowledge transfer are treated as delivery requirements, not afterthoughts.",
  },
];

const stats = [
  { value: "300+", label: "Specialists across delivery centres" },
  { value: "2 wks", label: "Onboarding to first pull request" },
  { value: "99.9%", label: "Uptime on managed platforms" },
  { value: "24/5", label: "Support coverage across regions" },
];

function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const current = services[active];
  const ActiveIcon = current.icon;
  const activeIndex = String(active + 1).padStart(2, "0");

  return (
    <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_70px_-50px_rgba(11,79,158,0.5)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
      {/* Left rail */}
      <div
        role="tablist"
        aria-label="Technology services"
        className="flex flex-col border-b border-border bg-surface/60 lg:border-b-0 lg:border-r"
      >
        {services.map((item, index) => {
          const isActive = index === active;
          const ItemIcon = item.icon;
          return (
            <button
              key={item.name}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActive(index)}
              className={`group relative flex items-center gap-4 border-b border-border px-6 py-5 text-left transition-colors last:border-b-0 ${
                isActive ? "bg-background" : "hover:bg-background/60"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute inset-y-0 left-0 w-1 transition-colors ${
                  isActive ? "bg-accent" : "bg-transparent"
                }`}
              />
              <span
                className={`font-mono text-sm font-semibold tabular-nums transition-colors ${
                  isActive ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "bg-muted text-muted-foreground group-hover:text-foreground"
                }`}
              >
                <ItemIcon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span
                className={`flex-1 font-display text-base font-bold transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                }`}
              >
                {item.name}
              </span>
              <ChevronRight
                className={`h-4 w-4 shrink-0 transition-all ${
                  isActive
                    ? "translate-x-0 text-primary opacity-100"
                    : "-translate-x-1 text-muted-foreground opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                }`}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div className="relative overflow-hidden bg-background px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[9rem] font-extrabold leading-none text-primary/[0.06] sm:text-[12rem]"
        >
          {activeIndex}
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ActiveIcon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-extrabold text-foreground">
                  {current.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {current.subtitle}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground">
              {current.description}
            </p>

            <div className="mt-8 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  What&apos;s included
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {current.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5 text-sm text-foreground">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Perfect for
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {current.perfectFor.map((use) => (
                    <li key={use} className="flex items-start gap-2.5 text-sm text-foreground">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      />
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                Typical turnaround
              </span>
              <span className="font-display text-sm font-bold text-foreground">
                {current.turnaround}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function TechnologyPage({
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
        <section className="relative overflow-hidden border-b border-border bg-surface pt-28 lg:pt-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
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
                <li>
                  <Link
                    href={service.pillar.href}
                    className="transition-colors hover:text-primary"
                  >
                    {service.pillar.label}
                  </Link>
                </li>
                <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
                <li className="text-foreground">Technology</li>
              </ol>
            </nav>

            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
                >
                  <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  {service.pillar.label}
                </motion.span>

                <AnimatedHeadline
                  text="Technology built"
                  highlight="to ship and scale."
                  className="mt-6 font-display text-4xl font-extrabold leading-[1.03] text-foreground sm:text-5xl lg:text-[3.5rem]"
                  highlightClassName="text-primary"
                />

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
                >
                  Product engineering, cloud, and automation delivered by senior
                  squads that integrate with your backlog, your review process,
                  and your release cadence — then keep it running in production.
                </motion.p>

                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-8 grid gap-3 sm:grid-cols-2"
                >
                  {heroPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10"
                      >
                        <Check className="h-3 w-3 text-primary" />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground">
                        {point}
                      </span>
                    </li>
                  ))}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.65 }}
                  className="mt-9 flex flex-wrap items-center gap-4"
                >
                  <Link
                    href="/contact"
                    className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
                  >
                    Start your project
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    href="#services"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    Explore services
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
                className="relative"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-[0_30px_70px_-45px_rgba(11,79,158,0.5)]">
                  <Image
                    src={service.image || "/images/service-technology-overview.png"}
                    alt={service.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-lg sm:block">
                  <p className="font-display text-3xl font-extrabold text-primary">
                    <CountUp value="99.9%" />
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    Uptime on managed platforms
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-7xl gap-px overflow-hidden bg-border px-4 sm:px-6 md:grid-cols-3 lg:px-8">
            {highlights.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.08}
                className="flex items-start gap-4 bg-background p-8"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon
                    className="h-6 w-6 text-primary"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Intro feature band */}
        <section className="border-b border-border bg-surface py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
            <Reveal>
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-border">
                <Image
                  src="/images/service-technology-overview.png"
                  alt="Software engineers collaborating on a product build"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <SectionHeading
                  align="left"
                  eyebrow="Digital engineering"
                  title="An engineering partner that acts like part of your team"
                  description="We embed senior squads into your delivery organisation — matching your tooling, cadence, and standards — so the software we build is maintainable long after handover, not just shipped once."
                />
              </Reveal>
              <ul className="mt-10 flex flex-col">
                {service.outcomes.map((outcome, index) => (
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

        {/* Services */}
        <section
          id="services"
          className="scroll-mt-24 border-b border-border bg-background py-24 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="What we deliver"
                title="Our technology services"
                description="End-to-end engineering capability, from product delivery to the platforms and processes that keep it running."
              />
            </Reveal>

            <Reveal className="mt-16">
              <ServiceExplorer />
            </Reveal>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border bg-primary text-primary-foreground">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
            {stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 0.08}
                className="border-b border-primary-foreground/15 px-2 py-10 sm:px-6 lg:border-b-0 lg:border-l lg:first:border-l-0 lg:py-14"
              >
                <dd className="font-display text-4xl font-extrabold tracking-tight lg:text-5xl">
                  <CountUp value={stat.value} />
                </dd>
                <dt className="mt-3 flex items-start gap-2 text-xs font-medium leading-relaxed text-primary-foreground/75">
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

        {/* Process */}
        <section className="border-b border-border bg-surface py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="How we work"
                title="Our delivery process"
                description="A predictable path from first conversation to production support."
              />
            </Reveal>

            <ol className="relative mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
              {process.map((step, index) => (
                <Reveal
                  key={step.title}
                  as="li"
                  delay={index * 0.1}
                  className="relative flex flex-col gap-4"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/20 bg-card font-display text-base font-extrabold text-primary">
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

        {/* Related services */}
        {related.length ? (
          <section className="border-b border-border bg-background py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Reveal>
                <SectionHeading
                  align="left"
                  eyebrow="Related"
                  title="More of what we do"
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
