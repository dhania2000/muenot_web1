import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { StatBand } from "@/components/ui/stat-band";
import { Reveal } from "@/components/ui/reveal";
import { getSection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies | Muenot Delivery Programmes",
  description:
    "How Muenot delivers AI data, e-learning, localization, technology and publishing programmes for enterprise teams — with measured outcomes and documented governance.",
};

export default async function CaseStudiesPage() {
  // Both the page chrome (hero, stats, intro, quote, closing) and the list of
  // case studies are DB-backed so the whole page is editable from the admin.
  const [page, caseStudies] = await Promise.all([
    getSection("case_studies_page"),
    getSection("case_studies"),
  ]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <PageHero
          eyebrow={page.hero.eyebrow}
          title={page.hero.title}
          description={page.hero.description}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
          image={page.hero.image}
          imageAlt={page.hero.imageAlt}
          primaryCta={{ label: page.hero.primaryLabel, href: page.hero.primaryHref }}
          secondaryCta={{ label: page.hero.secondaryLabel, href: page.hero.secondaryHref }}
          highlights={page.hero.highlights}
        />

        <section className="border-b border-border bg-navy-deep py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <StatBand stats={page.outcomeStats} tone="dark" />
          </div>
        </section>

        <section className="border-b border-border bg-background py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={page.intro.eyebrow}
              title={page.intro.title}
              description={page.intro.description}
            />
          </div>
        </section>

        {caseStudies.map((study, index) => {
          const isEven = index % 2 === 0;
          const number = String(index + 1).padStart(2, "0");

          return (
            <section
              key={study.slug}
              className={`border-b border-border py-16 lg:py-20 ${
                isEven ? "bg-background" : "bg-surface"
              }`}
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <Reveal
                    y={26}
                    className={`relative ${isEven ? "" : "lg:order-2"}`}
                  >
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-[0_30px_70px_-40px_rgba(11,79,158,0.5)]">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={study.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 48vw, 100vw"
                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />
                    </div>
                  </Reveal>

                  <Reveal
                    delay={0.1}
                    className={`flex flex-col gap-5 ${
                      isEven ? "" : "lg:order-1"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        aria-hidden="true"
                        className="font-display text-5xl font-bold leading-none text-primary/20 lg:text-6xl"
                      >
                        {number}
                      </span>
                      <span className="h-px flex-1 bg-border" aria-hidden="true" />
                      <Eyebrow className="w-fit">{study.industry}</Eyebrow>
                    </div>

                    <h2 className="font-display text-2xl font-bold leading-tight text-balance text-foreground sm:text-3xl lg:text-[2.1rem]">
                      {study.title}
                    </h2>

                    <p className="text-sm font-semibold text-primary">
                      {study.client}
                    </p>

                    <p className="text-base leading-relaxed text-pretty text-muted-foreground">
                      {study.summary}
                    </p>

                    <dl className="mt-2 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
                      {study.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="flex flex-col gap-1 bg-card p-5"
                        >
                          <dd className="order-1 font-display text-2xl font-bold text-primary">
                            {metric.value}
                          </dd>
                          <dt className="order-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                            {metric.label}
                          </dt>
                        </div>
                      ))}
                    </dl>

                    <Link
                      href="/contact"
                      className="group mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary"
                    >
                      {page.discussLinkLabel}
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}

        <section className="border-b border-border bg-surface py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Reveal className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-card p-8 text-center lg:p-12">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/15 bg-primary/8 text-primary">
                <Quote className="h-6 w-6" aria-hidden="true" />
              </span>
              <blockquote className="font-display text-xl font-semibold leading-relaxed text-balance text-foreground sm:text-2xl">
                {`\u201C${page.quote.text}\u201D`}
              </blockquote>
              <p className="text-sm text-muted-foreground">
                {page.quote.attribution}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-background px-4 pb-24 pt-8 sm:px-6 lg:px-8 lg:pb-28">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-navy-deep px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
              <SectionHeading
                tone="light"
                eyebrow={page.closing.eyebrow}
                title={page.closing.title}
                description={page.closing.description}
              />
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={page.closing.primaryHref}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  {page.closing.primaryLabel}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href={page.closing.secondaryHref}
                  className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  {page.closing.secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
