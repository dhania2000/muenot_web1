import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Quote,
  ShieldCheck,
  Users,
  ClipboardCheck,
  Lock,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconBadge } from "@/components/ui/feature-card";
import { Reveal, Float } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { stats } from "@/lib/site-data";

const differentiators = [
  {
    title: "Managed delivery, not staffing",
    description: "A named manager, defined SLAs, and weekly reporting.",
    icon: Users,
  },
  {
    title: "Quality is measured, not claimed",
    description: "Written acceptance criteria and reviewer agreement scoring.",
    icon: ClipboardCheck,
  },
  {
    title: "Security in the floor plan",
    description: "Restricted access, device controls, ISO-aligned handling.",
    icon: Lock,
  },
  {
    title: "Scale without renegotiating",
    description: "Ramp pods up or down against agreed rate cards.",
    icon: TrendingUp,
  },
];

const testimonials = [
  {
    quote:
      "The pilot told us exactly what accuracy to expect. Twelve months in, our release cadence has not slipped once.",
    name: "Head of Machine Learning",
    company: "Mobility technology company",
    avatar: "/images/testimonial-1.png",
  },
  {
    quote:
      "They rebuilt our compliance curriculum for 10 markets. Completion rates went up and audit findings went to zero.",
    name: "Director, Learning & Development",
    company: "Global enterprise",
    avatar: "/images/testimonial-2.png",
  },
  {
    quote:
      "Terminology consistency across 22 languages was the thing we could never solve in-house. Their review layer fixed it.",
    name: "VP, International",
    company: "Enterprise software vendor",
    avatar: "/images/testimonial-3.png",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 overflow-hidden border-b border-border bg-background py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-[0_30px_70px_-40px_rgba(11,79,158,0.5)]">
                <Image
                  src="/images/about-team.png"
                  alt="Muenot delivery team collaborating around a table in a modern office"
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent"
                />
                <Float
                  distance={8}
                  duration={6}
                  className="absolute bottom-5 left-5 right-5"
                >
                  <dl className="grid grid-cols-2 gap-3 rounded-2xl border border-primary-foreground/20 bg-primary-dark/55 p-4 backdrop-blur-md sm:grid-cols-4">
                    {stats.map((stat) => (
                      <div key={stat.label} className="flex flex-col gap-0.5">
                        <dd className="font-display text-lg font-bold text-primary-foreground">
                          <CountUp value={stat.value} />
                        </dd>
                        <dt className="text-[10px] leading-tight text-primary-foreground/70">
                          {stat.label}
                        </dt>
                      </div>
                    ))}
                  </dl>
                </Float>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="font-display text-sm font-semibold text-foreground">
                    ISO-aligned processes and NDA-backed secure delivery
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Access control reviewed against enterprise vendor
                    requirements.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-8">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Why Muenot"
                title="A delivery partner your procurement team can sign off on"
                description="We take on the operational work enterprise teams can't staff internally — and make it measurable."
              />
            </Reveal>

            <ul className="grid gap-4 sm:grid-cols-2">
              {differentiators.map((item, index) => (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={index * 0.07}
                  y={16}
                  className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_40px_-24px_rgba(11,79,158,0.45)]"
                >
                  <IconBadge icon={item.icon} size="sm" />
                  <h3 className="font-display text-sm font-semibold leading-snug text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-pretty text-muted-foreground">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.1}>
              <Link
                href="/about"
                className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary"
              >
                More about the company
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-10">
          <Reveal>
            <SectionHeading eyebrow="Testimonials" title="What clients say" />
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal
                key={testimonial.name}
                delay={index * 0.09}
                className="flex"
              >
                <figure className="flex w-full flex-col gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_40px_-24px_rgba(11,79,158,0.45)]">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/12 text-accent">
                    <Quote className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <blockquote className="flex-1 text-sm leading-relaxed text-pretty text-foreground">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="flex items-center gap-3 border-t border-border pt-5">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={`Portrait of ${testimonial.name}`}
                      width={44}
                      height={44}
                      className="h-11 w-11 shrink-0 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <p className="font-display text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
