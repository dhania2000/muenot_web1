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
import { Reveal, Float } from "@/components/ui/reveal";
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
  MapPin,
  Clock,
  ClipboardCheck,
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

const operations = [
  {
    title: "Regional delivery centres",
    description:
      "Capacity across three regions with native-language specialists, so work follows the timezone it is needed in.",
    tag: "3 regions",
    icon: MapPin,
  },
  {
    title: "Defined coverage windows",
    description:
      "extended weekday coverage with agreed escalation paths and a named delivery manager accountable for SLA performance.",
    tag: "extended weekday coverage",
    icon: Clock,
  },
  {
    title: "Documented governance",
    description:
      "ISO-aligned handling, NDA-backed secure floors, and written acceptance criteria on every deliverable.",
    tag: "ISO-aligned",
    icon: ClipboardCheck,
  },
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
          highlights={["6+ years", "300+ specialists", "10+ countries"]}
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
                    "Delivery centres across three regions, extended weekday coverage",
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

              <Reveal delay={0.12} y={26} className="relative">
                <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-[0_30px_70px_-40px_rgba(11,79,158,0.5)]">
                  <Image
                    src="/images/about-office.png"
                    alt="Muenot delivery centre floor with specialists at production workstations"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>

                <Float
                  distance={12}
                  duration={7}
                  className="pointer-events-none absolute -bottom-6 -left-4 hidden sm:block lg:-left-10"
                >
                  <div className="flex items-center gap-5 rounded-2xl border border-border bg-card/95 px-6 py-4 shadow-[0_24px_50px_-28px_rgba(11,79,158,0.55)] backdrop-blur">
                    <div className="flex flex-col">
                      <span className="font-display text-2xl font-bold text-primary">
                        6+
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
                        years delivering
                      </span>
                    </div>
                    <span
                      className="h-10 w-px bg-border"
                      aria-hidden="true"
                    />
                    <div className="flex flex-col">
                      <span className="font-display text-2xl font-bold text-primary">
                        10+
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
                        countries served
                      </span>
                    </div>
                  </div>
                </Float>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal
                as="article"
                className="relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-border bg-card p-8 lg:p-10"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-6 right-4 font-display text-[7rem] font-bold leading-none text-primary/10 lg:text-[9rem]"
                >
                  01
                </span>
                <IconBadge icon={Eye} size="lg" />
                <h2 className="relative font-display text-2xl font-bold text-foreground lg:text-3xl">
                  Our vision
                </h2>
                <p className="relative text-base leading-relaxed text-pretty text-muted-foreground">
                  To be the delivery partner enterprises trust with the work
                  that cannot fail — measured, audited, and repeatable.
                </p>
                <CheckList items={visionPoints} className="relative mt-auto" />
              </Reveal>

              <Reveal
                as="article"
                delay={0.12}
                className="relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-border bg-card p-8 lg:p-10"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-6 right-4 font-display text-[7rem] font-bold leading-none text-primary/10 lg:text-[9rem]"
                >
                  02
                </span>
                <IconBadge icon={Target} size="lg" />
                <h2 className="relative font-display text-2xl font-bold text-foreground lg:text-3xl">
                  Our mission
                </h2>
                <p className="relative text-base leading-relaxed text-pretty text-muted-foreground">
                  To deliver operational programmes that hold their quality bar
                  as volumes scale.
                </p>
                <CheckList
                  items={missionPoints}
                  columns={2}
                  className="relative mt-auto"
                />
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
              {values.map((value, index) => (
                <Reveal
                  as="article"
                  key={value.title}
                  delay={index * 0.06}
                  className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_40px_-24px_rgba(11,79,158,0.45)]"
                >
                  <IconBadge icon={value.icon} />
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                    {value.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="How we operate"
              title="The delivery model behind the work"
              description="Every engagement runs on the same operating spine — regional capacity, defined coverage windows, and documented governance."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {operations.map((item, index) => (
                <Reveal
                  as="article"
                  key={item.title}
                  delay={index * 0.08}
                  className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-8"
                >
                  <IconBadge icon={item.icon} size="lg" />
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                    {item.description}
                  </p>
                  <span className="mt-2 inline-flex w-fit rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {item.tag}
                  </span>
                </Reveal>
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
