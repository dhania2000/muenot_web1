import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Car,
  HeartPulse,
  GraduationCap,
  Landmark,
  ShoppingCart,
  Clapperboard,
  Search,
  FlaskConical,
  Rocket,
  BarChart3,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconBadge } from "@/components/ui/feature-card";
import { Reveal } from "@/components/ui/reveal";
import { industries, engagementSteps } from "@/lib/site-data";

const industryIcons: Record<string, typeof Car> = {
  "Automotive & Mobility": Car,
  "Healthcare & Life Sciences": HeartPulse,
  "Education & EdTech": GraduationCap,
  "Banking & Financial Services": Landmark,
  "Retail & E-commerce": ShoppingCart,
  "Media & Entertainment": Clapperboard,
};

const stepIcons = [Search, FlaskConical, Rocket, BarChart3];

const spotlights = [
  {
    image: "/images/industry-education.png",
    alt: "University students learning with laptops in a modern campus study space",
    label: "Education & EdTech",
  },
  {
    image: "/images/industry-healthcare.png",
    alt: "Clinicians reviewing patient data on a tablet in a modern hospital",
    label: "Healthcare & Life Sciences",
  },
];

export function IndustriesSection() {
  return (
    <>
      <section
        id="industries"
        className="scroll-mt-20 border-b border-border bg-background py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Industries"
              title="Domain context, not generic capacity"
              description="Delivery leads are assigned by sector, so compliance is understood before day one."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = industryIcons[industry.name] ?? Car;
              return (
                <Reveal key={industry.name} delay={index * 0.06} y={18}>
                  <article className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_40px_-24px_rgba(11,79,158,0.45)]">
                    <IconBadge icon={Icon} />
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {industry.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                      {industry.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {spotlights.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.1}>
                <div className="group relative h-56 overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-transparent"
                  />
                  <span className="absolute bottom-5 left-5 font-display text-base font-bold text-primary-foreground">
                    {item.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-primary-dark py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="How we engage"
              tone="light"
              title="From scoping call to steady-state delivery"
              description="A staged path that proves quality before you commit to volume."
            />
          </Reveal>

          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engagementSteps.map((step, index) => {
              const StepIcon = stepIcons[index % stepIcons.length];
              return (
                <Reveal
                  as="li"
                  key={step.title}
                  delay={index * 0.09}
                  className="flex h-full flex-col gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/8 p-6 transition-colors duration-300 hover:border-primary-foreground/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/15 text-primary-foreground">
                      <StepIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-2xl font-bold text-primary-foreground/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-primary-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-pretty text-primary-foreground/70">
                    {step.description}
                  </p>
                </Reveal>
              );
            })}
          </ol>

          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
            >
              Start with a scoping call
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
