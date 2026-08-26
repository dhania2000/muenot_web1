"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface GlowingEffectProps {
  children: React.ReactNode;
  className?: string;
  blur?: number;
  spread?: number;
  borderRadius?: string;
  inactiveZone?: number;
  proximity?: number;
  glow?: boolean;
  variant?: "default" | "white";
  disabled?: boolean;
}

export function GlowingEffect({
  children,
  className,
  blur = 20,
  borderRadius = "1rem",
  glow = true,
  disabled = false,
}: GlowingEffectProps) {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || disabled) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ borderRadius }}
    >
      {glow && !disabled && (
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0"
          style={{
            borderRadius,
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
            filter: `blur(${blur}px)`,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      )}
      {children}
    </div>
  );
}
