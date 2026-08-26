"use client";

import React, { useId, useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SparklesCoreProps = {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
};

export const SparklesCore = (props: SparklesCoreProps) => {
  const {
    id,
    background,
    minSize,
    maxSize,
    particleDensity,
    className,
    particleColor,
  } = props;
  const generatedId = useId();
  const [mounted, setMounted] = useState(false);

  // Only render particles on client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo(() => {
    if (!mounted) return [];
    const particleCount = particleDensity || 50;
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * ((maxSize || 2) - (minSize || 0.5)) + (minSize || 0.5),
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
  }, [mounted, particleDensity, minSize, maxSize]);

  return (
    <div
      id={id || generatedId}
      className={cn(
        "absolute inset-0 overflow-hidden",
        className
      )}
      style={{ background: background || "transparent" }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particleColor || "#ffffff",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
