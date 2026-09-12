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
  FileText,
  ScrollText,
  Copyright,
  CreditCard,
  ShieldAlert,
  Scale,
  ArrowRight,
} from "lucide-react";

const LEGAL_EMAIL = "legal@muenot.co.in";
const LAST_UPDATED = "September 12, 2026";

const acceptableUse = [
  "Use the website and services only for lawful purposes.",
  "Provide accurate, current, and complete information when you contact us.",
  "Do not attempt to disrupt, damage, or gain unauthorised access to our systems.",
  "Do not copy, resell, or misuse our content without written permission.",
];

const yourResponsibilities = [
  "Keep any account or access credentials confidential and secure.",
  "Ensure the information you submit does not infringe the rights of others.",
  "Comply with all applicable laws and regulations while using our services.",
  "Notify us promptly of any unauthorised use or security concern.",
];

const highlights = [
  {
    icon: ScrollText,
    title: "Using our services",
    description:
      "By accessing our website or engaging our services, you agree to be bound by these terms.",
  },
  {
    icon: Copyright,
    title: "Intellectual property",
    description:
      "All content, branding, and materials on this site remain the property of Muenot unless stated otherwise.",
  },
  {
    icon: CreditCard,
    title: "Payments & scope",
    description:
      "Project scope, fees, and timelines are agreed in writing before work begins on any engagement.",
  },
  {
    icon: ShieldAlert,
    title: "Limitation of liability",
    description:
      "Our services are provided in good faith, with liability limited to the extent permitted by law.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <PageHero
          eyebrow="Legal"
          title="Terms & Conditions"
          description="These terms govern your use of the Muenot website and services. Please read them carefully, as they set out the rights and responsibilities of both you and Muenot."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Terms & Conditions" },
          ]}
          highlights={["Clear & fair terms", "Agreed in writing", `Updated ${LAST_UPDATED}`]}
        />

        <section className="border-b border-border bg-surface py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="At a glance"
              title="Key terms of using Muenot"
              description="Here is a quick summary of the terms that apply when you use our website and services."
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
                eyebrow="Acceptable use"
                title="How you may use our services"
                description="When you access our website or work with us, you agree to the following conditions of use."
              />
              <CheckList items={acceptableUse} />
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border bg-surface py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Reveal className="flex flex-col gap-6">
              <SectionHeading
                align="left"
                eyebrow="Your responsibilities"
                title="What we ask of you"
                description="To keep everything running smoothly and securely, we ask that you meet the following responsibilities."
              />
              <CheckList items={yourResponsibilities} />
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
                <IconBadge icon={Copyright} size="lg" />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Intellectual property
                </h3>
                <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                  All content, designs, logos, and materials on this website are
                  owned by Muenot or our licensors. You may not reproduce,
                  distribute, or use them without our prior written consent.
                </p>
              </Reveal>

              <Reveal
                as="article"
                delay={0.1}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8"
              >
                <IconBadge icon={CreditCard} size="lg" />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Payments &amp; project scope
                </h3>
                <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                  The scope, fees, and timelines for any engagement are agreed in
                  writing before work begins. Any changes to scope may affect the
                  agreed cost and delivery schedule.
                </p>
              </Reveal>

              <Reveal
                as="article"
                delay={0.15}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8"
              >
                <IconBadge icon={ShieldAlert} size="lg" />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Limitation of liability
                </h3>
                <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                  Our services are provided in good faith. To the fullest extent
                  permitted by law, Muenot is not liable for indirect or
                  consequential losses arising from the use of our website or
                  services.
                </p>
              </Reveal>

              <Reveal
                as="article"
                delay={0.2}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8"
              >
                <IconBadge icon={Scale} size="lg" />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Governing law &amp; changes
                </h3>
                <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                  These terms are governed by the applicable laws of India. We may
                  update these terms from time to time, and continued use of our
                  services means you accept the revised terms.
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
                eyebrow="Related"
                title="Privacy &amp; your data"
                description="These terms work alongside our privacy commitments and data deletion process."
              />
              <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                To understand how we handle your personal data, please read our{" "}
                <Link
                  href="/privacy-policy"
                  className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Privacy Policy
                </Link>
                . To request removal of your data, see our{" "}
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
                <FileText className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="font-display text-3xl font-bold text-balance text-primary-foreground sm:text-4xl">
                Questions about these terms?
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-pretty text-primary-foreground/75">
                If anything in these Terms &amp; Conditions is unclear, or you would
                like clarification before starting a project, our team is happy to
                help.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${LEGAL_EMAIL}?subject=Terms%20%26%20Conditions%20Enquiry`}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
                >
                  Email {LEGAL_EMAIL}
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
