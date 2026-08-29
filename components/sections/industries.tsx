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
import { industries, engagementSteps, type Industry } from "@/lib/site-data";
import { homeSectionsContent, type HomeSectionsContent } from "@/lib/ui-content-data";

const stepIcons = [Search, FlaskConical, Rocket, BarChart3];

type EngagementStep = (typeof engagementSteps)[number];

type IndustriesContent = {
  industries: HomeSectionsContent["industries"];
  engagement: HomeSectionsContent["engagement"];
};

export function IndustriesSection({
  industries: industriesData = industries,
  engagementSteps: engagementStepsData = engagementSteps,
  content = {
    industries: homeSectionsContent.industries,
    engagement: homeSectionsContent.engagement,
  },
}: {
  industries?: Industry[];
  engagementSteps?: EngagementStep[];
  content?: IndustriesContent;
} = {}) {
  const industryItems = industriesData.map((industry) => ({
    name: industry.name,
    description: industry.description,
    image: industry.image || "/placeholder.svg",
    alt: industry.alt || industry.name,
  }));

  return (
    <>
      <section
        id="industries"
        className="scroll-mt-20 border-b border-border bg-background/65 py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={content.industries.eyebrow}
              title={content.industries.title}
              description={content.industries.description}
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
              eyebrow={content.engagement.eyebrow}
              tone="light"
              title={content.engagement.title}
              description={content.engagement.description}
            />
          </Reveal>

          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engagementStepsData.map((step, index) => {
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
              href={content.engagement.ctaHref}
              className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
            >
              {content.engagement.ctaLabel}
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
