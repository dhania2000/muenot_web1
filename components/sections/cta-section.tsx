"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentModal } from "@/components/ui/appointment-modal";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { homeCtaContent, type HomeCtaContent } from "@/lib/site-content-data";

export function CTASection({ content = homeCtaContent }: { content?: HomeCtaContent }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="cta-section" className="bg-background/65 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_70px_-45px_rgba(11,79,158,0.5)]">
          <div className="grid lg:grid-cols-2">
            <div className="group relative min-h-72 overflow-hidden lg:min-h-full">
              <Image
                src={content.image || "/images/cta-consultation.png"}
                alt={content.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </div>

            <div className="relative overflow-hidden bg-primary p-8 text-primary-foreground sm:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary-foreground/10 blur-3xl"
              />

              <div className="relative flex flex-col gap-5">
                <Eyebrow tone="light" className="w-fit">
                  {content.eyebrow}
                </Eyebrow>

                <h2 className="font-display text-2xl font-bold leading-tight text-balance sm:text-3xl lg:text-4xl">
                  {content.title}
                </h2>

                <p className="text-sm leading-relaxed text-pretty text-primary-foreground/80">
                  {content.description}
                </p>

                <ul className="flex flex-col gap-3 border-t border-primary-foreground/20 pt-6">
                  {content.assurances.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15"
                      >
                        <Check className="h-3 w-3 text-accent" />
                      </span>
                      <span className="text-sm leading-relaxed text-primary-foreground/90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="group h-12 rounded-full bg-primary-foreground px-6 text-primary hover:bg-primary-foreground/90"
                  >
                    <Link href={content.primaryHref}>
                      {content.primaryLabel}
                      <ArrowRight
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setIsModalOpen(true)}
                    className="h-12 rounded-full border-primary-foreground/40 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
                    {content.secondaryLabel}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        appointmentUrl={content.appointmentUrl}
      />
    </section>
  );
}
