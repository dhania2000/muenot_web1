"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Accessibility,
  ArrowRight,
  BrainCircuit,
  Captions,
  Database,
  Globe2,
  GraduationCap,
  Languages,
  Mic2,
  PenTool,
  PlayCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AnimatedHeadline, Float, Reveal } from "@/components/ui/reveal";

const capabilityTicker = [
  { label: "Data annotation", icon: Database },
  { label: "RLHF & evaluation", icon: BrainCircuit },
  { label: "Course production", icon: GraduationCap },
  { label: "Translation", icon: Languages },
  { label: "Subtitling", icon: Captions },
  { label: "Accessibility", icon: Accessibility },
  { label: "Editorial", icon: PenTool },
  { label: "Voiceover", icon: Mic2 },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background pt-24 lg:pt-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] grid-lines opacity-70"
      />
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-14 px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
            >
              <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              Enterprise delivery partner
            </motion.span>

            <AnimatedHeadline
              text="AI data, learning and localization, delivered"
              highlight="at scale."
              className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-[3.6rem]"
              highlightClassName="text-primary"
            />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Managed delivery pods across 10+ countries, working to contractual
              SLAs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-20px_rgba(11,79,158,0.8)] transition-colors hover:bg-primary-dark"
              >
                Talk to our team
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/case-studies"
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <PlayCircle
                  className="h-4 w-4 text-primary transition-transform group-hover:scale-110"
                  aria-hidden="true"
                />
                See client results
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex items-center gap-3 text-xs font-medium text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                ISO-aligned & NDA-backed
              </span>
              <span aria-hidden="true" className="h-3 w-px bg-border" />
              <span className="inline-flex items-center gap-1.5">
                <Globe2 className="h-4 w-4 text-primary" aria-hidden="true" />
                40+ languages
              </span>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border shadow-[0_40px_90px_-45px_rgba(11,79,158,0.55)]">
                <Image
                  src="/images/hero-team.png"
                  alt="Delivery team collaborating on AI data and localization work in a modern office"
                  width={1200}
                  height={900}
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/3 image-scrim opacity-70"
                />
                <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-card/95 px-4 py-3 backdrop-blur">
                  <span className="relative inline-flex h-2.5 w-2.5 shrink-0">
                    <motion.span
                      aria-hidden="true"
                      animate={{ scale: [1, 2.2, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-accent"
                    />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                  </span>
                  <p className="font-display text-sm font-bold text-foreground">
                    Dedicated delivery teams, extended weekday coverage
                  </p>
                </div>
              </div>

              <Float
                className="absolute left-4 top-8 hidden lg:block"
                distance={12}
                duration={7}
              >
                <div className="rounded-2xl border border-border bg-card px-4 py-3 shadow-[0_18px_40px_-24px_rgba(11,18,32,0.35)]">
                  <p className="font-display text-2xl font-extrabold text-primary">
                    98.2%
                  </p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Quality Assurance Rate
                  </p>
                </div>
              </Float>

              <Float
                className="absolute right-4 top-1/2 hidden lg:block"
                distance={14}
                duration={8}
                delay={0.6}
              >
                <div className="rounded-2xl border border-border bg-primary px-4 py-3 text-primary-foreground shadow-[0_18px_40px_-20px_rgba(11,79,158,0.8)]">
                  <p className="font-display text-2xl font-extrabold">300+</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary-foreground/80">
                    Specialists
                  </p>
                </div>
              </Float>
            </motion.div>
          </div>
        </div>

        <Reveal
          delay={0.1}
          className="relative overflow-hidden rounded-2xl border border-border bg-surface py-3"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent"
          />
          <ul className="flex w-max animate-marquee items-center gap-8 px-4">
            {[...capabilityTicker, ...capabilityTicker].map((item, index) => {
              const Icon = item.icon;

              return (
                <li
                  key={`${item.label}-${index}`}
                  aria-hidden={index >= capabilityTicker.length}
                  className="flex items-center gap-2.5 whitespace-nowrap text-sm font-semibold text-foreground/70"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/15 bg-background text-primary shadow-sm">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {item.label}
                </li>
              );
            })}
          </ul>
        </Reveal>

      </div>
    </section>
  );
}
