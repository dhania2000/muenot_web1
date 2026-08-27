import Link from "next/link";
import {
  ArrowRight,
  Search,
  FlaskConical,
  Rocket,
  BarChart3,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { IndustriesCarousel } from "@/components/ui/industries-carousel";
import { industries, engagementSteps } from "@/lib/site-data";

const stepIcons = [Search, FlaskConical, Rocket, BarChart3];

const industryImages: Record<string, { image: string; alt: string }> = {
  "Automotive & Mobility": {
    image: "/images/case-autonomous.png",
    alt: "Autonomous vehicle perception data being labelled for ADAS programmes",
  },
  "Healthcare & Life Sciences": {
    image: "/images/industry-healthcare.png",
    alt: "Clinicians reviewing patient data on a tablet in a modern hospital",
  },
  "Education & EdTech": {
    image: "/images/industry-education.png",
    alt: "University students learning with laptops in a modern campus study space",
  },
  "Banking & Financial Services": {
    image: "/images/case-enterprise.png",
    alt: "Enterprise team reviewing compliance documents in a corporate office",
  },
  "Retail & E-commerce": {
    image: "/images/service-localization-overview.png",
    alt: "Multilingual product catalogue and storefront localisation workspace",
  },
  "Media & Entertainment": {
    image: "/images/service-subtitling.png",
    alt: "Subtitling and content moderation workflow for media production",
  },
  "Technology & SaaS": {
    image: "/images/industry-technology.png",
    alt: "Software engineering team collaborating on dashboards in a modern tech office",
  },
  "Government & Public Sector": {
    image: "/images/industry-government.png",
    alt: "Public sector professionals reviewing data on secure workstations",
  },
};

const industryItems = industries.map((industry) => ({
  name: industry.name,
  description: industry.description,
  image: industryImages[industry.name]?.image ?? "/placeholder.svg",
  alt: industryImages[industry.name]?.alt ?? industry.name,
}));

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

          <Reveal>
            <IndustriesCarousel items={industryItems} />
          </Reveal>
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
