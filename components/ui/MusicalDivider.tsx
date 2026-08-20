"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useMedia";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  className?: string;
  tone?: "light" | "dark";
};

/** Thin horizontal divider that draws on scroll — sheet-music rhythm. */
export function MusicalDivider({ className, tone = "light" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      gsap.set(el, { scaleX: 1 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.1,
          ease: "power2.out",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <div
      ref={ref}
      className={cn(
        "h-px w-full origin-left",
        tone === "light" ? "bg-obsidian/15" : "bg-ivory/20",
        className,
      )}
      aria-hidden
    />
  );
}
