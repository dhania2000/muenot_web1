"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Tag,
  Database,
  Bot,
  Users,
  Sparkles,
  LineChart,
  PenTool,
  Film,
  GraduationCap,
  Palette,
  Cog,
  Mic,
  Code2,
  Cloud,
  Wrench,
  FileCheck2,
  Lightbulb,
  Languages,
  FileText,
  Captions,
  SpellCheck2,
  FileStack,
  BookOpenCheck,
  Accessibility,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { servicePillars } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const capabilityIcons: Record<string, LucideIcon> = {
  "Data Annotation": Tag,
  "Data Curation": Database,
  "Model Training": Bot,
  "Human in the Loop": Users,
  "LLM Services": Sparkles,
  "AI Analytics": LineChart,
  "Content Development": PenTool,
  "Content Production": Film,
  "Faculty Support": GraduationCap,
  "Art Production": Palette,
  "Content Operations": Cog,
  "Video & Audio": Mic,
  "Software Development": Code2,
  "Cloud & DevOps": Cloud,
  Automation: Wrench,
  "Data Platforms": Database,
  "QA Engineering": FileCheck2,
  "IT Consulting": Lightbulb,
  Translation: Languages,
  Transcription: FileText,
  Subtitling: Captions,
  "Linguistic QA": SpellCheck2,
  "Conversion Services": FileStack,
  "Editorial Services": BookOpenCheck,
  "Accessibility Services": Accessibility,
};

export function ServicesTabs() {
  const [active, setActive] = useState(0);
  const pillar = servicePillars[active];

  return (
    <section
      id="service-lines"
      className="scroll-mt-20 border-b border-border bg-background py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Five service lines, one accountable delivery organisation"
            description="Pick a service line to see how each pod is staffed, governed, and delivered."
          />
        </Reveal>

        {/* Tab bar */}
        <Reveal delay={0.08}>
          <div
            role="tablist"
            aria-label="Service lines"
            className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {servicePillars.map((item, index) => {
              const selected = index === active;
              return (
                <button
                  key={item.id}
                  role="tab"
                  type="button"
                  id={`service-tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls={`service-panel-${item.id}`}
                  onClick={() => setActive(index)}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring sm:px-6",
                    selected
                      ? "bg-primary text-primary-foreground shadow-[0_16px_36px_-20px_rgba(11,79,158,0.8)]"
                      : "bg-surface text-muted-foreground hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  {item.eyebrow}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Panel */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={pillar.id}
              id={`service-panel-${pillar.id}`}
              role="tabpanel"
              aria-labelledby={`service-tab-${pillar.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid items-stretch gap-6 lg:grid-cols-12">
                {/* Text card */}
                <div className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-border bg-card lg:col-span-5">
                  <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6 lg:p-7">
                    <SectionHeading
                      align="left"
                      eyebrow={pillar.eyebrow}
                      title={pillar.title}
                      description={pillar.description}
                    />

                    <ul className="flex flex-col gap-3 border-t border-border pt-4">
                      {pillar.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/12"
                          >
                            <Check className="h-3.5 w-3.5 text-accent" />
                          </span>
                          <span className="text-sm leading-relaxed text-foreground">
                            {outcome}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={pillar.href}
                      className="group mt-auto inline-flex w-full items-center justify-between rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
                    >
                      Explore {pillar.eyebrow}
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/15">
                        <ArrowRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-t border-border bg-surface px-6 py-4 sm:px-8">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Delivery model
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      One accountable team
                    </span>
                  </div>
                </div>

                {/* Media + capabilities */}
                <div className="min-w-0 overflow-hidden rounded-3xl border border-border bg-primary-dark lg:col-span-7">
                  <div className="group relative h-44 overflow-hidden sm:h-56 lg:h-52">
                    <Image
                      src={pillar.image || "/placeholder.svg"}
                      alt={pillar.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/10 to-transparent"
                    />
                    <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-dark/70 px-4 py-2 text-xs font-semibold text-primary-foreground backdrop-blur-md sm:left-6">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                      </span>
                      service areas
                    </span>
                  </div>

                  <div className="grid gap-3 rounded-b-3xl bg-primary-dark p-3 sm:grid-cols-2 sm:p-4">
                    {pillar.capabilities.map((capability, capabilityIndex) => {
                      const CapabilityIcon =
                        capabilityIcons[capability.name] ?? Sparkles;
                      return (
                        <motion.div
                          key={capability.name}
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.35,
                            delay: 0.05 * capabilityIndex,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="min-w-0"
                        >
                          <Link
                            href={capability.href}
                            className="group flex h-full min-h-20 flex-col gap-1.5 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary sm:p-4"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground">
                                <CapabilityIcon
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />
                              </span>
                              <ArrowRight
                                className="h-4 w-4 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1"
                                aria-hidden="true"
                              />
                            </div>
                            <span className="font-display text-sm font-semibold text-primary-foreground">
                              {capability.name}
                            </span>
                            <span className="text-xs leading-relaxed text-pretty text-primary-foreground/70">
                              {capability.detail}
                            </span>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
