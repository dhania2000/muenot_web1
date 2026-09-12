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
  Database,
  Cookie,
  Share2,
  Lock,
  UserCog,
  ArrowRight,
} from "lucide-react";

const PRIVACY_EMAIL = "privacy@muenot.co.in";
const LAST_UPDATED = "September 12, 2026";

const dataWeCollect = [
  "Contact details you share through forms (name, email, phone, company).",
  "Project enquiry, estimate, and lead information you submit.",
  "Correspondence and support messages exchanged with our team.",
  "Basic usage, device, and analytics data collected to improve our services.",
];

const howWeUse = [
  "Respond to your enquiries and provide the services you request.",
  "Prepare estimates, proposals, and project communications.",
  "Improve our website, offerings, and customer experience.",
  "Send important updates and, where permitted, relevant marketing.",
  "Meet our legal, tax, and contractual obligations.",
];

const yourRights = [
  "Access the personal data we hold about you.",
  "Ask us to correct inaccurate or incomplete information.",
  "Request deletion of your personal data.",
  "Object to or restrict certain processing of your data.",
  "Withdraw consent for marketing at any time.",
];

const highlights = [
  {
    icon: Database,
    title: "Data we collect",
    description:
      "We only collect the information we need to respond to you and deliver our services, nothing more.",
  },
  {
    icon: Lock,
    title: "How we protect it",
    description:
      "We use appropriate technical and organisational measures to keep your personal data secure.",
  },
  {
    icon: Share2,
    title: "Who we share with",
    description:
      "We never sell your data. We share it only with trusted processors who help us operate, under strict agreements.",
  },
  {
    icon: Cookie,
    title: "Cookies & analytics",
    description:
      "We use essential and analytics cookies to keep the site working and understand how it is used.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <PageHero
          eyebrow="Privacy"
          title="Privacy Policy"
          description="This policy explains what personal data Muenot collects, how we use and protect it, who we share it with, and the choices and rights you have over your information."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy" },
          ]}
          highlights={["Your data stays private", "We never sell data", `Updated ${LAST_UPDATED}`]}
        />

        <section className="border-b border-border bg-surface py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="At a glance"
              title="Our privacy commitments"
              description="Here is a quick summary of how we handle your personal data across everything we do."
            />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item, index) => (
                <Reveal
                  as="article"
                  key={item.title}
                  delay={index * 0.08}
                  className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
                >
                  <IconBadge icon={item.icon} />
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Reveal className="flex flex-col gap-6">
              <SectionHeading
                align="left"
                eyebrow="What we collect"
                title="Personal data we may collect"
                description="Depending on how you interact with us, the personal data we collect may include the following."
              />
              <CheckList items={dataWeCollect} />
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border bg-surface py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Reveal className="flex flex-col gap-6">
              <SectionHeading
                align="left"
                eyebrow="How we use it"
                title="How we use your data"
                description="We use your personal data only for clear, legitimate purposes, including the following."
              />
              <CheckList items={howWeUse} />
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border bg-background py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal
                as="article"
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8"
              >
                <IconBadge icon={Share2} size="lg" />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Sharing &amp; disclosure
                </h3>
                <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                  We do not sell your personal data. We may share it with trusted
                  service providers who help us operate our business, and with
                  authorities where the law requires us to do so.
                </p>
              </Reveal>

              <Reveal
                as="article"
                delay={0.1}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8"
              >
                <IconBadge icon={ShieldCheck} size="lg" />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Data retention
                </h3>
                <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                  We keep your personal data only for as long as necessary to
                  fulfil the purposes above, or as required for legal, tax, or
                  contractual obligations, after which we securely delete it.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Reveal className="flex flex-col gap-6">
              <SectionHeading
                align="left"
                eyebrow="Your rights"
                title="The rights you have"
                description="You are in control of your personal data. At any time you can exercise the following rights."
              />
              <CheckList items={yourRights} />
              <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                To exercise any of these rights, or to permanently remove your
                data, see our{" "}
                <Link
                  href="/user-data-deletion"
                  className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                  User Data Deletion
                </Link>{" "}
                page.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-primary-dark py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/15 text-primary-foreground">
                <UserCog className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="font-display text-3xl font-bold text-balance text-primary-foreground sm:text-4xl">
                Questions about your privacy?
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-pretty text-primary-foreground/75">
                If you have any questions about this policy or how we handle your
                personal data, our privacy team is happy to help.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${PRIVACY_EMAIL}?subject=Privacy%20Policy%20Enquiry`}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
                >
                  Email {PRIVACY_EMAIL}
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
