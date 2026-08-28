"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    // Smoothed scroll progress so movement feels fluid, not jumpy.
    let current = 0;
    let target = 0;

    const readScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      target = window.scrollY / max; // 0 → 1 across the whole page
    };

    const tick = () => {
      // Ease current toward target for buttery motion.
      current += (target - current) * 0.08;

      // Continuous time-based drift so it also moves while idle.
      const t = performance.now() / 1000;
      const s = current; // 0..1 scroll progress

      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translate3d(${
          Math.sin(t * 0.3) * 40 + s * 220
        }px, ${Math.cos(t * 0.25) * 32 - s * 260}px, 0) scale(${
          1 + s * 0.3
        })`;
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translate3d(${
          Math.cos(t * 0.22) * 46 - s * 240
        }px, ${Math.sin(t * 0.3) * 34 + s * 200
        }px, 0) scale(${1 + s * 0.4})`;
      }
      if (blob3Ref.current) {
        blob3Ref.current.style.transform = `translate3d(${
          Math.sin(t * 0.18) * 52 + s * 160
        }px, ${Math.cos(t * 0.2) * 40 - s * 180}px, 0) scale(${
          1.05 + s * 0.25
        })`;
      }
      if (sheenRef.current) {
        // Slow rotating conic sheen for a living, premium feel.
        sheenRef.current.style.transform = `rotate(${t * 6 + s * 90}deg)`;
      }
      if (gridRef.current) {
        gridRef.current.style.transform = `translate3d(0, ${-s * 140}px, 0)`;
        gridRef.current.style.opacity = String(0.35 - s * 0.18);
      }

      raf = requestAnimationFrame(tick);
    };

    readScroll();
    window.addEventListener("scroll", readScroll, { passive: true });
    window.addEventListener("resize", readScroll);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", readScroll);
      window.removeEventListener("resize", readScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Rotating conic sheen for a living gradient field */}
      <div
        ref={sheenRef}
        className="absolute left-1/2 top-1/2 h-[160vmax] w-[160vmax] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          background:
            "conic-gradient(from 0deg, color-mix(in oklab, var(--primary) 10%, transparent), transparent 25%, color-mix(in oklab, var(--accent) 8%, transparent) 50%, transparent 75%, color-mix(in oklab, var(--primary) 10%, transparent))",
          opacity: 0.6,
        }}
      />

      {/* Drifting brand-colored aurora blobs — driven by scroll + time via JS */}
      <div
        ref={blob1Ref}
        className="absolute -left-[10%] -top-[15%] h-[55vw] w-[55vw] rounded-full blur-3xl will-change-transform"
        style={{
          background:
            "radial-gradient(circle at center, color-mix(in oklab, var(--primary) 45%, transparent), transparent 70%)",
        }}
      />
      <div
        ref={blob2Ref}
        className="absolute -right-[12%] top-[10%] h-[50vw] w-[50vw] rounded-full blur-3xl will-change-transform"
        style={{
          background:
            "radial-gradient(circle at center, color-mix(in oklab, var(--accent) 35%, transparent), transparent 70%)",
        }}
      />
      <div
        ref={blob3Ref}
        className="absolute bottom-[-20%] left-[20%] h-[60vw] w-[60vw] rounded-full blur-3xl will-change-transform"
        style={{
          background:
            "radial-gradient(circle at center, color-mix(in oklab, var(--primary-dark) 40%, transparent), transparent 70%)",
        }}
      />

      {/* Faint editorial grid for depth — parallaxes with scroll */}
      <div
        ref={gridRef}
        className="grid-lines absolute inset-0 opacity-30 will-change-transform"
      />
    </div>
  );
}
