"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronRight, ShieldCheck, Terminal } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { pillarIcon } from "@/components/services/pillar-icons";
import type { PillarContent } from "@/lib/pillar-data";

export function AiDataView({ content }: { content: PillarContent }) {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border pt-28 lg:pt-32">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-[0.06]" />
          <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-40 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs text-muted-foreground">
                <li>
                  <Link href="/" className="transition-colors hover:text-accent-foreground">
                    home
                  </Link>
                </li>
                <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
                <li className="text-foreground/80">{content.slug}</li>
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
                  {"// "}
                  {content.eyebrow}
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-6 font-display text-4xl font-extrabold leading-[1.04] text-balance sm:text-5xl lg:text-[3.5rem]"
                >
                  {content.titleLead}
                  <span className="text-primary">{content.titleHighlight}</span>
                  {content.titleTrail}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
                >
                  {content.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-9 flex flex-wrap items-center gap-4"
                >
                  <Link
                    href={content.primaryCta.href}
                    className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    {content.primaryCta.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                  <Link
                    href={content.secondaryCta.href}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
                  >
                    {content.secondaryCta.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </Link>
                </motion.div>
              </div>

              {content.heroImage.src ? (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative flex items-center justify-center"
                >
                  <motion.img
                    src={content.heroImage.src || "/placeholder.svg"}
                    alt={content.heroImage.alt}
                    className="w-full max-w-md drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              ) : null}
            </div>
          </div>
        </section>

        {/* Pipeline stepper */}
        <section className="border-b border-border bg-muted/40 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {content.stepsEyebrow}
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-balance sm:text-4xl">
                {content.stepsTitle}
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {content.steps.map((stage, index) => (
                <Reveal
                  key={stage.step}
                  delay={index * 0.08}
                  className="group relative bg-background p-7 transition-colors hover:bg-muted/60"
                >
                  <span className="font-mono text-4xl font-extrabold text-foreground/10 transition-colors group-hover:text-primary/40">
                    {stage.step}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.detail}</p>
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
                {content.capabilitiesEyebrow}
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-balance sm:text-4xl">
                {content.capabilitiesTitle}
              </h2>
            </Reveal>

            <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
              {content.capabilities.map((cap, index) => {
                const Icon = pillarIcon(cap.icon);
                return (
                  <Reveal key={cap.name} delay={index * 0.05}>
                    <Link
                      href={cap.href}
                      className="group relative flex items-center gap-5 border-b border-border px-5 py-6 transition-colors last:border-b-0 hover:bg-primary/[0.04] sm:gap-7 sm:px-8"
                    >
                      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />
                      <span className="hidden w-10 shrink-0 font-mono text-sm font-semibold tabular-nums text-muted-foreground/60 transition-colors group-hover:text-primary sm:block">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display text-base font-bold text-foreground sm:text-lg">{cap.name}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{cap.detail}</p>
                      </div>
                      {cap.tag ? (
                        <span className="hidden shrink-0 font-mono text-[11px] uppercase tracking-wider text-muted-foreground/60 transition-colors group-hover:text-primary sm:block">
                          {cap.tag}
                        </span>
                      ) : null}
                      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" aria-hidden="true" />
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Metrics band */}
        {content.metrics.length ? (
          <section className="border-b border-border bg-primary py-16 lg:py-20">
            <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
              {content.metrics.map((metric, index) => (
                <Reveal key={metric.label} delay={index * 0.08} className="flex flex-col items-center gap-2 text-center">
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
        ) : null}

        {/* Quality guarantees */}
        {content.listItems.length ? (
          <section className="py-20 lg:py-24">
            <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
              <Reveal>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-display text-3xl font-bold text-balance sm:text-4xl">{content.listTitle}</h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">{content.listDescription}</p>
              </Reveal>

              <div className="flex flex-col gap-4">
                {content.listItems.map((item, index) => (
                  <Reveal key={item} delay={index * 0.07} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-xs font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground/85">{item}</span>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <CTASection />
      <Footer />
      <ScrollToTop />
    </>
  );
}
