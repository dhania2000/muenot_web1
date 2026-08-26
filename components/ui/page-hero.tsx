import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal, Float } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
  highlights,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
  image?: string;
  imageAlt?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  highlights?: string[];
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border bg-surface",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/8 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div
          className={cn(
            "grid items-center gap-10",
            image ? "lg:grid-cols-[1.05fr_0.95fr] lg:gap-14" : "max-w-3xl",
          )}
        >
          <div className="flex flex-col gap-6">
            {breadcrumbs?.length ? (
              <nav aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  {breadcrumbs.map((crumb, index) => (
                    <li key={crumb.label} className="flex items-center gap-1.5">
                      {index > 0 ? (
                        <ChevronRight
                          className="h-3.5 w-3.5 text-muted-foreground/60"
                          aria-hidden="true"
                        />
                      ) : null}
                      {crumb.href ? (
                        <Link
                          href={crumb.href}
                          className="transition-colors hover:text-primary"
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="text-foreground">{crumb.label}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}

            {eyebrow ? (
              <Reveal y={10}>
                <Eyebrow className="w-fit">{eyebrow}</Eyebrow>
              </Reveal>
            ) : null}

            <Reveal delay={0.08}>
              <h1 className="font-display text-4xl font-bold leading-[1.08] text-balance text-foreground sm:text-5xl lg:text-[3.4rem]">
                {title}
              </h1>
            </Reveal>

            {description ? (
              <Reveal delay={0.16}>
                <p className="max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
                  {description}
                </p>
              </Reveal>
            ) : null}

            {highlights?.length ? (
              <ul className="flex flex-wrap gap-2">
                {highlights.map((item, index) => (
                  <Reveal
                    as="li"
                    key={item}
                    delay={0.22 + index * 0.06}
                    y={12}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground"
                  >
                    {item}
                  </Reveal>
                ))}
              </ul>
            ) : null}

            {primaryCta || secondaryCta ? (
              <Reveal delay={0.3} className="flex flex-wrap gap-3 pt-1">
                {primaryCta ? (
                  <Link
                    href={primaryCta.href}
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
                  >
                    {primaryCta.label}
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                ) : null}
                {secondaryCta ? (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {secondaryCta.label}
                  </Link>
                ) : null}
              </Reveal>
            ) : null}
          </div>

          {image ? (
            <Reveal delay={0.12} y={28} className="relative">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_70px_-40px_rgba(11,79,158,0.5)]">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={imageAlt || ""}
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  priority
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-primary-dark/45 via-transparent to-transparent"
                />
              </div>
              <Float
                distance={10}
                duration={6.5}
                className="pointer-events-none absolute -bottom-4 left-6 hidden lg:block"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground shadow-[0_18px_40px_-24px_rgba(11,18,32,0.35)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Managed delivery pods
                </span>
              </Float>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
