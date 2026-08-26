"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "article" | "section" | "span";
};

/**
 * Scroll-triggered fade + rise.
 * Reduced motion is handled globally by MotionConfig in the root layout,
 * so markup stays identical between server and client.
 */
export function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/** Soft floating loop for decorative cards and badges. */
export function Float({
  children,
  className,
  distance = 10,
  duration = 6,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Word-by-word entrance for headlines. */
export function AnimatedHeadline({
  text,
  highlight,
  className,
  highlightClassName,
}: {
  text: string;
  highlight?: string;
  className?: string;
  highlightClassName?: string;
}) {
  const words = text.split(" ");
  const highlightWords = highlight ? highlight.split(" ") : [];

  return (
    <h1 className={cn("flex flex-wrap", className)}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, delay: index * 0.06, ease }}
          className="mr-[0.28em]"
        >
          {word}
        </motion.span>
      ))}
      {highlightWords.map((word, index) => (
        <motion.span
          key={`hl-${word}-${index}`}
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.55,
            delay: (words.length + index) * 0.06,
            ease,
          }}
          className={cn("mr-[0.28em]", highlightClassName)}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}
