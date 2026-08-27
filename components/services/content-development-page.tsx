"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Accessibility,
  ArrowRight,
  BookOpenCheck,
  Brush,
  Check,
  ChevronRight,
  Clapperboard,
  ClipboardCheck,
  Compass,
  GraduationCap,
  Megaphone,
  ScanText,
  Sparkles,
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
  "Tailored courseware mapped to individual learning needs",
  "Interactive, engaging concepts for active learning",
  "Evidence-based instructional design at every stage",
  "WCAG-compliant content that reaches all learners",
];

const highlights: { icon: LucideIcon; title: string; detail: string }[] = [
  {
    icon: GraduationCap,
    title: "Expert Instructional Designers",
    detail: "Certified professionals with deep educational expertise.",
  },
  {
    icon: BookOpenCheck,
    title: "Evidence-Based Approaches",
    detail: "Grounded in learning science and proven methodologies.",
  },
  {
    icon: Accessibility,
    title: "Accessible & Inclusive",
    detail: "WCAG compliant content that reaches all learners.",
  },
];

type ServiceType = {
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
};

const services: ServiceType[] = [
  {
    icon: Compass,
    name: "Instructional Design",
    tagline: "Strategic learning design that maximizes engagement and retention",
    description:
      "Our instructional designers create comprehensive learning experiences using proven pedagogical approaches. We analyze learning objectives, design curriculum frameworks, and develop assessment strategies that ensure measurable outcomes.",
    capabilities: [
      "Learning objectives mapping",
      "Curriculum architecture",
      "Assessment strategy design",
      "Learner engagement optimization",
      "Evidence-based pedagogy",
    ],
  },
  {
    icon: ClipboardCheck,
    name: "Assessment Writing",
    tagline: "Rigorous assessments that accurately measure learning outcomes",
    description:
      "Expert assessment creation aligned with Bloom's taxonomy and learning objectives. We develop multiple question types, rubrics, and evaluation frameworks that provide meaningful insights into learner progress.",
    capabilities: [
      "Multiple choice questions",
      "Essay prompts and rubrics",
      "Performance-based assessments",
      "Formative and summative evaluation",
      "Item analysis and validation",
    ],
  },
  {
    icon: Clapperboard,
    name: "Animation Design",
    tagline: "Visual storytelling that brings concepts to life",
    description:
      "Custom animations that explain complex concepts through engaging visual narratives. Our animators combine educational expertise with creative design to produce animations that enhance understanding and retention.",
    capabilities: [
      "2D and 3D animations",
      "Process visualizations",
      "Character-driven narratives",
      "Interactive animations",
      "Motion graphics",
    ],
  },
  {
    icon: ScanText,
    name: "Alt Text Creation",
    tagline: "Accessible descriptions that ensure inclusive learning",
    description:
      "Professional alt text writing that makes visual content accessible to all learners. We create descriptive, context-appropriate text that maintains educational value while meeting WCAG accessibility standards.",
    capabilities: [
      "WCAG 2.1 compliance",
      "Image descriptions",
      "Diagram explanations",
      "Chart and graph descriptions",
      "Context-aware content",
    ],
  },
  {
    icon: Brush,
    name: "Creative Art",
    tagline: "Original artwork that enhances learning materials",
    description:
      "Custom illustrations, graphics, and visual elements designed specifically for educational contexts. Our artists create engaging visuals that support learning objectives and maintain consistent brand identity.",
    capabilities: [
      "Custom illustrations",
      "Infographic design",
      "Icon creation",
      "Visual metaphors",
      "Style guide development",
    ],
  },
  {
    icon: Megaphone,
    name: "Digital Marketing Content",
    tagline: "Compelling content that promotes your educational offerings",
    description:
      "Strategic marketing content that communicates the value of your educational programs. From course descriptions to promotional campaigns, we create content that attracts and converts your target audience.",
    capabilities: [
      "Course descriptions",
      "Landing page copy",
      "Email campaigns",
      "Social media content",
      "SEO-optimized content",
    ],
  },
];

const process = [
  {
    title: "Discovery & Analysis",
    detail:
      "We begin by understanding your learning objectives, target audience, and content requirements through detailed consultation.",
  },
  {
    title: "Content Strategy",
    detail:
      "Develop a comprehensive content strategy aligned with pedagogical best practices and your specific educational goals.",
  },
  {
    title: "Creation & Development",
    detail:
      "Our expert team creates high-quality content using proven instructional design methodologies and creative excellence.",
  },
  {
    title: "Review & Refinement",
    detail:
      "Iterative review process with stakeholders to ensure content meets quality standards and learning objectives.",
  },
  {
    title: "Delivery & Support",
    detail:
      "Final delivery with comprehensive documentation and ongoing support for implementation and updates.",
  },
];

const stats = [
  { value: "310", label: "Learning modules produced" },
  { value: "91%", label: "Average course completion rate" },
  { value: "22", label: "Languages shipped" },
  { value: "100%", label: "WCAG 2.2 AA accessible" },
];

export function ContentDevelopmentPage({
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
                <li className="text-foreground">Content Development</li>
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
                  text="Content development"
                  highlight="that inspires learning."
                  className="mt-6 font-display text-4xl font-extrabold leading-[1.03] text-foreground sm:text-5xl lg:text-[3.5rem]"
                  highlightClassName="text-primary"
                />

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
                >
                  Transform educational concepts into engaging, effective
                  learning experiences. We combine pedagogical expertise with
                  creative excellence to create materials that resonate with
                  learners and achieve measurable results.
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
                    src={service.image || "/images/service-elearning.png"}
                    alt={service.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-lg sm:block">
                  <p className="font-display text-3xl font-extrabold text-primary">
                    <CountUp value="91%" />
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    Average completion rate
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
                  src="/images/service-elearning-overview.png"
                  alt="Instructional design team planning an e-learning course"
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
                  eyebrow="Engaging learning content"
                  title="Educational content built around measurable outcomes"
                  description="We specialise in creating tailored educational content for e-learning platforms across diverse industries and institutions — combining learning science, creative craft and accessibility from the very first draft."
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
                title="Our content development services"
                description="Comprehensive content creation solutions for every aspect of your e-learning program."
              />
            </Reveal>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((item, index) => (
                <Reveal
                  key={item.name}
                  delay={index * 0.05}
                  as="article"
                  className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_50px_-32px_rgba(11,79,158,0.45)]"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <item.icon
                        className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {item.name}
                    </h3>
                  </div>

                  <p className="mt-5 text-sm font-semibold text-primary">
                    {item.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-pretty text-muted-foreground">
                    {item.description}
                  </p>

                  <ul className="mt-6 flex flex-col gap-2.5 border-t border-border pt-6">
                    {item.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
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
                title="Our content development process"
                description="A systematic approach to creating exceptional educational content."
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
