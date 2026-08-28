"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Accessibility,
  ArrowRight,
  BrainCircuit,
  Captions,
  ChevronLeft,
  ChevronRight,
  Database,
  GraduationCap,
  Languages,
  Mic2,
  PenTool,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import { Float, Reveal } from "@/components/ui/reveal";

type Banner = {
  id: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  imageAlt: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  stat: { value: string; label: string };
};

const banners: Banner[] = [
  {
    id: "ai-data",
    eyebrow: "AI Data Services",
    title: "Training data pipelines built",
    highlight: "for production models",
    description:
      "Managed annotation, curation, and evaluation pods with documented quality gates and audit trails on every batch.",
    image: "/images/service-ai-data-overview.png",
    imageAlt:
      "Data annotation specialist labelling street imagery for a computer vision model",
    primary: { label: "Explore AI data", href: "/services/data-annotation" },
    secondary: { label: "See client results", href: "/case-studies" },
    stat: { value: "98.2%", label: "Quality assurance rate" },
  },
  {
    id: "elearning",
    eyebrow: "E-Learning & Localization",
    title: "Course production and localization,",
    highlight: "delivered at scale",
    description:
      "Instructional designers, media teams, and native linguists turning objectives into accessible courses in 40+ languages.",
    image: "/images/service-elearning-overview.png",
    imageAlt:
      "Instructional designers reviewing an e-learning course storyboard on a monitor",
    primary: { label: "Explore e-learning", href: "/services/content-development" },
    secondary: { label: "Talk to our team", href: "/contact" },
    stat: { value: "40+", label: "Languages supported" },
  },
  {
    id: "publishing",
    eyebrow: "Publishing & Accessibility",
    title: "Editorial and accessibility services",
    highlight: "for digital catalogues",
    description:
      "Copy editing, conversion, and WCAG remediation for publishers moving large backlists into compliant digital formats.",
    image: "/images/service-publishing-overview.png",
    imageAlt: "Editor reviewing printed page proofs beside a book layout screen",
    primary: { label: "Explore publishing", href: "/services/editorial-services" },
    secondary: { label: "See client results", href: "/case-studies" },
    stat: { value: "300+", label: "Specialists on delivery" },
  },
];

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

const AUTOPLAY_MS = 6000;

const ease = [0.16, 1, 0.3, 1] as const;

const contentVariants = {
  enter: { opacity: 0, y: 24 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
};

const imageVariants = {
  enter: { opacity: 0, scale: 1.06 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02 },
};

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tickerRef = useRef<HTMLUListElement | null>(null);
  const tickerPaused = useRef(false);

  useEffect(() => {
    const track = tickerRef.current;
    if (!track) return;

    let raf = 0;
    let offset = 0;
    let last = performance.now();
    const speed = 40; // pixels per second

    const step = (now: number) => {
      const delta = (now - last) / 1000;
      last = now;

      if (!tickerPaused.current) {
        offset += speed * delta;
        // The list renders two identical copies; reset after the first copy.
        const half = track.scrollWidth / 2;
        if (half > 0 && offset >= half) offset -= half;
        track.style.transform = `translateX(${-offset}px)`;
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const goTo = useCallback((next: number) => {
    setIndex((next + banners.length) % banners.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (isPaused) return;
    timer.current = setTimeout(() => {
      setIndex((current) => (current + 1) % banners.length);
    }, AUTOPLAY_MS);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [index, isPaused]);

  const active = banners[index];

  return (
    <section className="relative overflow-hidden border-b border-border bg-background/70 pt-24 lg:pt-28">
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
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured services"
        >
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-10 lg:gap-y-9">
            {/* Copy: headline + description */}
            <div className="order-1 lg:col-span-6 lg:col-start-1 lg:row-start-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.55, ease }}
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    <Sparkles
                      className="h-3.5 w-3.5 text-accent"
                      aria-hidden="true"
                    />
                    {active.eyebrow}
                  </span>

                  <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-foreground text-balance sm:text-5xl lg:text-[3.4rem]">
                    {active.title}{" "}
                    <span className="animate-text-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,var(--primary),45%,var(--accent),55%,var(--primary))] bg-[length:250%_100%]">
                      {active.highlight}
                    </span>
                  </h1>

                  <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Actions */}
            <div className="order-3 lg:col-span-6 lg:col-start-1 lg:row-start-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${active.id}-actions`}
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.55, ease }}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href={active.primary.href}
                      className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-20px_rgba(11,79,158,0.8)] transition-colors hover:bg-primary-dark"
                    >
                      {active.primary.label}
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                    <Link
                      href={active.secondary.href}
                      className="group inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      <PlayCircle
                        className="h-4 w-4 text-primary transition-transform group-hover:scale-110"
                        aria-hidden="true"
                      />
                      {active.secondary.label}
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="order-4 lg:col-span-6 lg:col-start-1 lg:row-start-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous slide"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next slide"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>

                <div className="flex items-center gap-2.5">
                  {banners.map((banner, i) => (
                    <button
                      key={banner.id}
                      type="button"
                      onClick={() => goTo(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      aria-current={i === index}
                      className="group relative h-2.5 overflow-hidden rounded-full bg-border transition-all"
                      style={{ width: i === index ? "2.5rem" : "0.625rem" }}
                    >
                      {i === index && (
                        <motion.span
                          aria-hidden="true"
                          className="absolute inset-0 rounded-full bg-primary"
                          initial={{ x: "-100%" }}
                          animate={{ x: isPaused ? "-100%" : "0%" }}
                          transition={{
                            duration: isPaused ? 0 : AUTOPLAY_MS / 1000,
                            ease: "linear",
                          }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Image column — sits directly under the copy on mobile/tablet */}
            <div className="order-2 lg:col-span-6 lg:col-start-7 lg:row-span-3 lg:row-start-1">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-border shadow-[0_40px_90px_-45px_rgba(11,79,158,0.55)]">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={active.id}
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.7, ease }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={active.image || "/placeholder.svg"}
                        alt={active.imageAlt}
                        fill
                        priority
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1/3 image-scrim opacity-70"
                  />
                </div>

                <AnimatePresence mode="wait">
                  <Float
                    key={`${active.id}-stat`}
                    className="absolute right-4 top-1/2 hidden lg:block"
                    distance={14}
                    duration={8}
                  >
                    <motion.div
                      variants={contentVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.5, ease }}
                      className="rounded-2xl border border-border bg-primary px-4 py-3 text-primary-foreground shadow-[0_18px_40px_-20px_rgba(11,79,158,0.8)]"
                    >
                      <p className="font-display text-2xl font-extrabold">
                        {active.stat.value}
                      </p>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-primary-foreground/80">
                        {active.stat.label}
                      </p>
                    </motion.div>
                  </Float>
                </AnimatePresence>
              </div>
            </div>
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
          <ul
            ref={tickerRef}
            className="flex w-max items-center gap-8 px-4 will-change-transform"
            onMouseEnter={() => {
              tickerPaused.current = true;
            }}
            onMouseLeave={() => {
              tickerPaused.current = false;
            }}
          >
            {[...capabilityTicker, ...capabilityTicker].map((item, i) => {
              const Icon = item.icon;

              return (
                <li
                  key={`${item.label}-${i}`}
                  aria-hidden={i >= capabilityTicker.length}
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
