import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconBadge } from "@/components/ui/feature-card";
import { Reveal } from "@/components/ui/reveal";
import {
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
  Users,
  GraduationCap,
  HeartHandshake,
  Globe,
  ShieldCheck,
  Mail,
  Briefcase,
} from "lucide-react";

/** External applicant tracking / careers portal. */
const CAREERS_PORTAL_URL = "https://erp.muenot.co.in/careers";

const benefits = [
  {
    icon: TrendingUp,
    title: "Real growth paths",
    description:
      "Clear progression across delivery, quality and leadership tracks — with named managers accountable for your development.",
  },
  {
    icon: GraduationCap,
    title: "Learn on the job",
    description:
      "Structured onboarding and continuous upskilling on production tooling, quality processes and new service lines.",
  },
  {
    icon: Users,
    title: "Work in strong pods",
    description:
      "Join managed teams with documented governance, where ownership of outcomes is valued over ticking off tasks.",
  },
  {
    icon: Globe,
    title: "Global exposure",
    description:
      "Contribute to programmes for clients across 10+ countries, spanning AI data, learning, localization and publishing.",
  },
  {
    icon: HeartHandshake,
    title: "People-first culture",
    description:
      "Transparent communication, honest timelines and a customer-first mindset that starts with how we treat each other.",
  },
  {
    icon: ShieldCheck,
    title: "Stable & secure",
    description:
      "ISO-aligned, NDA-backed secure floors and 6+ years of steady delivery mean a workplace you can build a career on.",
  },
];

const teams = [
  "AI Data Services",
  "E-Learning & Content",
  "Localization & Language",
  "Technology & Engineering",
  "Publishing & Editorial",
  "Quality & Operations",
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <PageHero
          eyebrow="Careers"
          title="Build your career with Muenot"
          description="We hire specialists who care about doing the work well. Join managed delivery pods behind enterprise AI data, learning, localization, technology and publishing programmes."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
          image="/images/careers-team.png"
          imageAlt="Muenot team collaborating in a bright modern office"
          highlights={["300+ specialists", "10+ countries served", "6+ years growing"]}
        />

        {/* Primary CTA to external portal */}
        <section className="border-b border-border bg-card py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex items-start gap-4">
              <IconBadge icon={Briefcase} size="lg" />
              <div>
                <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                  See every open role on our careers portal
                </h2>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Current openings, job descriptions and applications are all managed on our
                  dedicated portal at erp.muenot.co.in.
                </p>
              </div>
            </div>
            <a
              href={CAREERS_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              View open positions
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </section>

        {/* Why work here */}
        <section className="border-b border-border bg-background py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Why Muenot"
              title="A place to do meaningful work"
              description="We combine the stability of an established delivery partner with the pace of a growing company — and we invest in the people who make it run."
            />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <Reveal
                  as="article"
                  key={benefit.title}
                  delay={index * 0.06}
                  className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_40px_-24px_rgba(11,79,158,0.45)]"
                >
                  <IconBadge icon={benefit.icon} />
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                    {benefit.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Teams */}
        <section className="border-b border-border bg-surface py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Teams we hire for"
              title="Find where you fit"
              description="We recruit across every service line and the operations that support them. Roles open regularly as programmes scale."
            />

            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {teams.map((team) => (
                <span
                  key={team}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-accent"
                  />
                  {team}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-primary-dark py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/15 text-primary-foreground">
                <Briefcase className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="font-display text-3xl font-bold text-balance text-primary-foreground sm:text-4xl">
                Ready to apply?
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-pretty text-primary-foreground/75">
                Browse current openings and submit your application on our careers portal. Have a
                question first? Reach our talent team directly.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={CAREERS_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
                >
                  View open positions
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="mailto:career@muenot.co.in"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  career@muenot.co.in
                </a>
              </div>
              <Link
                href="/about"
                className="group mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Learn more about Muenot
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
