"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type IndustryItem = {
  name: string;
  description: string;
  image: string;
  alt: string;
};

const AUTO_SCROLL_MS = 5000;

function chunk<T>(items: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }
  return result;
}

export function IndustriesCarousel({ items }: { items: IndustryItem[] }) {
  const slides = chunk(items, 4);
  const slideCount = slides.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => setActive(((index % slideCount) + slideCount) % slideCount),
    [slideCount],
  );

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || slideCount <= 1) return;
    timer.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slideCount);
    }, AUTO_SCROLL_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, slideCount]);

  return (
    <div
      className="mt-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Industries we serve"
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="grid w-full shrink-0 gap-x-12 gap-y-14 px-1 py-2 lg:grid-cols-2"
              aria-hidden={slideIndex !== active}
            >
              {slide.map((item, pairIndex) => {
                const imageFirst = pairIndex % 2 === 0;
                return (
                  <article
                    key={item.name}
                    className="group flex flex-col items-center gap-6 sm:flex-row sm:items-center"
                  >
                    <div
                      className={`relative aspect-[4/3] w-full max-w-[15rem] shrink-0 overflow-hidden rounded-2xl shadow-[0_24px_48px_-24px_rgba(11,79,158,0.5)] ring-1 ring-border transition-transform duration-500 ${
                        imageFirst
                          ? "-rotate-2 group-hover:rotate-0 sm:order-1"
                          : "rotate-2 group-hover:rotate-0 sm:order-2"
                      }`}
                    >
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 640px) 240px, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div
                      className={`flex flex-col gap-3 ${
                        imageFirst ? "sm:order-2" : "sm:order-1"
                      }`}
                    >
                      <h3 className="font-display text-xl font-bold leading-tight text-foreground">
                        {item.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                        {item.description}
                      </p>
                      <Link
                        href="/industries"
                        className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                      >
                        Learn more
                        <ArrowRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center gap-2.5">
        {slides.map((_, index) => {
          const isActive = index === active;
          return (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={isActive}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-primary/25 hover:bg-primary/45"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
