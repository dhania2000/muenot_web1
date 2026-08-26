import { Building2 } from "lucide-react";
import { clientLogos } from "@/lib/site-data";

export function OurClients() {
  const track = [...clientLogos, ...clientLogos];

  return (
    <section className="border-b border-border bg-card py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Trusted by teams in automotive, healthcare, education, finance, retail
          and media
        </p>

        <div className="relative mt-9 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-card to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-card to-transparent"
            aria-hidden="true"
          />

          <ul className="flex w-max animate-marquee items-center gap-4">
            {track.map((name, index) => (
              <li
                key={`${name}-${index}`}
                aria-hidden={index >= clientLogos.length}
                className="group flex h-16 items-center gap-2.5 whitespace-nowrap rounded-2xl border border-border bg-surface px-6 transition-colors duration-300 hover:border-primary/30 hover:bg-primary/5"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Building2 className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="font-display text-sm font-semibold text-foreground/75">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
