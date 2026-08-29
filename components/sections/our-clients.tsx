"use client";

import { useEffect, useRef } from "react";
import { Building2 } from "lucide-react";
import { clientLogos } from "@/lib/site-data";

export function OurClients({
  logos = clientLogos,
}: {
  logos?: string[];
} = {}) {
  const track = [...logos, ...logos];
  const trackRef = useRef<HTMLUListElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let raf = 0;
    let last = performance.now();
    let offset = 0;
    const speed = 40; // px per second

    const step = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;

      if (!pausedRef.current) {
        offset += speed * dt;
        const half = el.scrollWidth / 2;
        if (half > 0 && offset >= half) {
          offset -= half;
        }
        el.style.transform = `translateX(-${offset}px)`;
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

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

          <ul
            ref={trackRef}
            className="flex w-max items-center gap-4 will-change-transform"
            onMouseEnter={() => {
              pausedRef.current = true;
            }}
            onMouseLeave={() => {
              pausedRef.current = false;
            }}
          >
            {track.map((name, index) => (
              <li
                key={`${name}-${index}`}
                aria-hidden={index >= logos.length}
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
