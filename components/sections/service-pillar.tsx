import Image from "next/image";
import Link from "next/link";
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
import { SectionHeading } from "@/components/ui/section-heading";
import { IconBadge } from "@/components/ui/feature-card";
import { Reveal, Float } from "@/components/ui/reveal";
import type { ServicePillar } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const capabilityIcons: Record<string, typeof Tag> = {
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

type ServicePillarSectionProps = {
  pillar: ServicePillar;
  index: number;
};

export function ServicePillarSection({
  pillar,
  index,
}: ServicePillarSectionProps) {
  const mediaFirst = index % 2 === 1;
  const tinted = index % 2 === 1;

  return (
    <section
      id={pillar.id}
      className={cn(
        "scroll-mt-20 overflow-hidden border-b border-border py-20",
        tinted ? "bg-surface" : "bg-background",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div
            className={cn(
              "flex flex-col gap-6 lg:col-span-5",
              mediaFirst ? "lg:order-2" : "lg:order-1",
            )}
          >
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow={pillar.eyebrow}
                title={pillar.title}
                description={pillar.description}
              />
            </Reveal>

            <Reveal delay={0.08}>
              <ul className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5">
                {pillar.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/12"
                    >
                      <Check className="h-3 w-3 text-accent" />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.14}>
              <Link
                href={pillar.href}
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
              >
                Explore {pillar.eyebrow}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>

          <div
            className={cn(
              "flex flex-col gap-6 lg:col-span-7",
              mediaFirst ? "lg:order-1" : "lg:order-2",
            )}
          >
            <Reveal delay={0.06}>
              <div className="group relative h-60 overflow-hidden rounded-3xl border border-border shadow-[0_30px_70px_-45px_rgba(11,79,158,0.5)] sm:h-80">
                <Image
                  src={pillar.image || "/placeholder.svg"}
                  alt={pillar.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-primary-dark/55 via-transparent to-transparent"
                />
                <Float
                  distance={7}
                  duration={5.5}
                  className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-dark/55 px-4 py-2 text-xs font-semibold text-primary-foreground backdrop-blur-md">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    {pillar.capabilities.length} capabilities
                  </span>
                </Float>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {pillar.capabilities.map((capability, capabilityIndex) => {
                const CapabilityIcon =
                  capabilityIcons[capability.name] ?? Sparkles;
                return (
                  <Reveal
                    key={capability.name}
                    delay={0.05 * capabilityIndex}
                    y={16}
                  >
                    <Link
                      href={capability.href}
                      className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_40px_-24px_rgba(11,79,158,0.45)]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <IconBadge icon={CapabilityIcon} size="sm" />
                        <ArrowRight
                          className="h-4 w-4 shrink-0 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </div>
                      <span className="font-display text-sm font-semibold text-foreground">
                        {capability.name}
                      </span>
                      <span className="text-xs leading-relaxed text-pretty text-muted-foreground">
                        {capability.detail}
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
