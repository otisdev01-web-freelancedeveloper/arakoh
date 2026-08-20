"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useIsDesktop, useReducedMotion } from "@/hooks/useMedia";

type Mode = "default" | "view" | "play";

export function CustomCursor() {
  const isDesktop = useIsDesktop(1024);
  const reduced = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<Mode>("default");

  useEffect(() => {
    if (!isDesktop || reduced) {
      document.documentElement.classList.remove("has-custom-cursor");
      return;
    }

    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      const target = (e.target as HTMLElement | null)?.closest(
        "[data-cursor]",
      ) as HTMLElement | null;
      const next = (target?.dataset.cursor as Mode | undefined) ?? "default";
      setMode(next);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [isDesktop, reduced]);

  if (!isDesktop || reduced) return null;

  const label = mode === "view" ? "View" : mode === "play" ? "Play" : "";

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] mix-blend-difference"
      animate={{
        x: pos.x,
        y: pos.y,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 35, mass: 0.35 }}
      style={{ translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-ivory/70 bg-ivory/10"
        animate={{
          width: mode === "default" ? 12 : 64,
          height: mode === "default" ? 12 : 64,
        }}
        transition={{ duration: 0.25 }}
      >
        <AnimatePresence>
          {label ? (
            <motion.span
              key={label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[0.625rem] uppercase tracking-[0.2em] text-ivory"
            >
              {label}
            </motion.span>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
