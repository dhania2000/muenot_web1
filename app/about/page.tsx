import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconBadge, CheckList } from "@/components/ui/feature-card";
import { StatBand } from "@/components/ui/stat-band";
import {
  ArrowRight,
  Target,
  Eye,
  Award,
  Users,
  Heart,
  Shield,
  Lightbulb,
  Globe,
  CheckCircle,
} from "lucide-react";
import { stats } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Muenot | Enterprise Delivery Partner",
  description:
    "Muenot is a global delivery partner for AI data, e-learning, localization, technology and publishing services — managed teams, measured quality, ISO-aligned security.",
};

const values = [
  {
    title: "Quality and excellence",
    description:
      "Rigorous QA processes and written acceptance criteria on every deliverable.",
    icon: Award,
  },
  {
    title: "Customer first",
    description:
      "We start from your definition of done, not a generic service catalogue.",
    icon: Heart,
  },
  {
    title: "Integrity",
    description:
      "Transparent reporting, honest timelines, and no surprises at invoice time.",
    icon: Shield,
  },
  {
    title: "Ownership",
    description:
      "A named delivery manager accountable for SLA performance end to end.",
    icon: CheckCircle,
  },
  {
    title: "Learning and innovation",
    description:
      "Tooling and process improvements fed back into every active engagement.",
    icon: Lightbulb,
  },
  {
    title: "Global, local",
    description:
      "Delivery centres across three regions with native-language capability.",
    icon: Globe,
  },
];

const visionPoints = [
  "Leading our categories on measured quality, not marketing claims",
  "Expanding delivery capacity without diluting governance",
  "Creating durable partnerships that survive procurement cycles",
];

const missionPoints = [
  "Provide scalable, reliable delivery under contractual SLAs",
  "Build long-term partnerships based on audited performance",
  "Foster continuous learning across every delivery pod",
  "Empower teams to own outcomes, not just tasks",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <PageHero
          eyebrow="About Muenot"
          title="A delivery partner built for enterprise accountability"
          description="Muenot runs the operational work enterprise teams can't staff internally — AI data, courseware, localization, technology and publishing — with managed pods and measurable quality."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
          image="/images/about-team.png"
          imageAlt="Muenot leadership and delivery team collaborating in a modern office"
          primaryCta={{ label: "Talk to our team", href: "/contact" }}
          secondaryCta={{ label: "Explore services", href: "/#services" }}
          highlights={["12+ years", "1,400+ specialists", "40+ countries"]}
        />

        <section className="border-b border-border bg-card py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <StatBand stats={stats} />
          </div>
        </section>

        <section className="border-b border-border bg-background py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal className="flex flex-col gap-6">
                <SectionHeading
                  align="left"
                  eyebrow="Who we are"
                  title="Infinite learning, endless possibilities"
                  description="Domain specialists, production tooling, and documented governance — so complex programmes land on schedule."
                />
                <CheckList
                  items={[
                    "Five service lines under one delivery organisation",
                    "Delivery centres across three regions, 24/5 coverage",
                    "ISO-aligned handling with NDA-backed secure floors",
                    "Sector-assigned delivery leads on every account",
                  ]}
                />
                <Link
                  href="/case-studies"
                  className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary"
                >
                  See how we work with clients
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>

              <Reveal
                delay={0.12}
                y={26}
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-[0_30px_70px_-40px_rgba(11,79,158,0.5)]"
              >
                <Image
                  src="/images/about-office.png"
                  alt="Muenot delivery centre floor with specialists at production workstations"
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Reveal
                as="article"
                className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-8"
              >
                <IconBadge icon={Eye} size="lg" />
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Our vision
                </h2>
                <p className="text-base leading-relaxed text-pretty text-muted-foreground">
                  To be the delivery partner enterprises trust with the work
                  that cannot fail — measured, audited, and repeatable.
                </p>
                <CheckList items={visionPoints} />
              </Reveal>

              <Reveal
                as="article"
                delay={0.12}
                className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-8"
              >
                <IconBadge icon={Target} size="lg" />
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Our mission
                </h2>
                <p className="text-base leading-relaxed text-pretty text-muted-foreground">
                  To deliver operational programmes that hold their quality bar
                  as volumes scale.
                </p>
                <CheckList items={missionPoints} />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Core values"
              title="The principles behind every engagement"
              description="These shape how pods are staffed, how quality is measured, and how we report."
            />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <article
                  key={value.title}
                  className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_40px_-24px_rgba(11,79,158,0.45)]"
                >
                  <IconBadge icon={value.icon} />
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary-dark py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/15 text-primary-foreground">
                <Users className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="font-display text-3xl font-bold text-balance text-primary-foreground sm:text-4xl">
                Join us on our journey
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-pretty text-primary-foreground/75">
                Partner with Muenot and get a documented pilot before you
                commit to scale.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
                >
                  Get in touch
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Explore services
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
