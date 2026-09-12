import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconBadge, CheckList } from "@/components/ui/feature-card";
import { Reveal } from "@/components/ui/reveal";
import {
  Mail,
  ShieldCheck,
  FileText,
  Trash2,
  Clock,
  UserCog,
  ArrowRight,
} from "lucide-react";

const DELETION_EMAIL = "privacy@muenot.co.in";

const dataWeStore = [
  "Contact details you share through forms (name, email, phone, company).",
  "Project enquiry, estimate, and lead information you submit.",
  "Correspondence and support messages exchanged with our team.",
  "Basic usage and analytics data collected to improve our services.",
];

const steps = [
  {
    icon: Mail,
    title: "Send a request",
    description:
      "Email us from the address associated with your data with the subject line \"User Data Deletion Request\".",
  },
  {
    icon: UserCog,
    title: "We verify your identity",
    description:
      "To protect your account we confirm that the request genuinely comes from you before any data is removed.",
  },
  {
    icon: Trash2,
    title: "We delete your data",
    description:
      "Once verified, we permanently remove your personal data from our active systems and instruct processors to do the same.",
  },
  {
    icon: Clock,
    title: "Confirmation",
    description:
      "We confirm completion within 30 days. Some records may be retained only where the law requires it.",
  },
];

export default function UserDataDeletionPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <PageHero
          eyebrow="Privacy"
          title="User Data Deletion"
          description="You have the right to request the deletion of the personal data Muenot holds about you. This page explains what we store and how to ask us to erase it."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "User Data Deletion" },
          ]}
          highlights={["Right to erasure", "Processed within 30 days", "No cost to you"]}
        />

        <section className="border-b border-border bg-background py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Reveal className="flex flex-col gap-6">
              <SectionHeading
                align="left"
                eyebrow="What we store"
                title="Personal data Muenot may hold"
                description="Depending on how you have interacted with us, the personal data we hold about you may include the following."
              />
              <CheckList items={dataWeStore} />
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border bg-surface py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="How it works"
              title="How to request deletion"
              description="Follow these steps to have your personal data permanently removed from our systems."
            />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <Reveal
                  as="article"
                  key={step.title}
                  delay={index * 0.08}
                  className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-4 right-3 font-display text-6xl font-bold leading-none text-primary/10"
                  >
                    {index + 1}
                  </span>
                  <IconBadge icon={step.icon} />
                  <h3 className="relative font-display text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="relative text-sm leading-relaxed text-pretty text-muted-foreground">
                    {step.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal
                as="article"
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8"
              >
                <IconBadge icon={FileText} size="lg" />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  What to include
                </h3>
                <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                  Please include your full name, the email address and phone
                  number you used with us, and a short description of the data
                  you want deleted so we can locate your records quickly.
                </p>
              </Reveal>

              <Reveal
                as="article"
                delay={0.1}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8"
              >
                <IconBadge icon={ShieldCheck} size="lg" />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Legal retention
                </h3>
                <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                  We honour every valid request. In limited cases we may retain
                  specific records where required for legal, tax, or contractual
                  obligations, and we will tell you if this applies.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-primary-dark py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/15 text-primary-foreground">
                <Trash2 className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="font-display text-3xl font-bold text-balance text-primary-foreground sm:text-4xl">
                Ready to delete your data?
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-pretty text-primary-foreground/75">
                Send your request to our privacy team and we will take it from
                there. You can also reach out through our contact page if you
                have any questions.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${DELETION_EMAIL}?subject=User%20Data%20Deletion%20Request`}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
                >
                  Email {DELETION_EMAIL}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Contact us
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
