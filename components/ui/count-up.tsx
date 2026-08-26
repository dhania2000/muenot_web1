"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Animates the numeric part of a value string ("1,400+", "99.2%", "4.2M")
 * while keeping its prefix/suffix intact.
 */
export function CountUp({
  value,
  className,
  duration = 1400,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  // Always render the final value first so server and client markup match;
  // the effect below replays it from zero once the element scrolls into view.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || reduced) return;

    // Derived inside the effect so the dependency list stays primitive —
    // otherwise a fresh regex match on every render would restart the frame
    // loop and the number would never reach its final value.
    const match = value.match(/[\d.,]+/);
    if (!match) return;

    const raw = match[0];
    const target = Number(raw.replace(/,/g, ""));
    if (!Number.isFinite(target)) return;

    const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
    const start = performance.now();
    let frame = requestAnimationFrame(function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = (target * eased).toFixed(decimals);
      const formatted = decimals
        ? current
        : Number(current).toLocaleString("en-US");
      setDisplay(value.replace(raw, formatted));
      if (progress < 1) frame = requestAnimationFrame(tick);
    });

    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
