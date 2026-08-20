"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useMedia";

export function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[80] h-[1.5px] origin-left bg-brass"
      style={{ scaleX }}
    />
  );
}
