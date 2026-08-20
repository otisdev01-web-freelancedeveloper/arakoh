"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useMedia";
import { DURATION, EASE_CINEMATIC, STAGGER } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "h1" | "h2" | "h3" | "div" | "span" | "li" | "blockquote";
  delay?: number;
  y?: number;
};

export function RevealText({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  y = 36,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduced) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: DURATION.reveal,
          delay,
          ease: EASE_CINEMATIC,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [delay, reduced, y]);

  return (
    <Tag ref={ref as never} className={cn("will-change-transform", className)}>
      {children}
    </Tag>
  );
}

type LinesProps = {
  text: string;
  className?: string;
  as?: "p" | "h2" | "h3" | "div";
};

export function RevealLines({ text, className, as: Tag = "p" }: LinesProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const lines = el.querySelectorAll("[data-line]");

    if (reduced) {
      gsap.set(lines, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: DURATION.reveal,
          stagger: STAGGER.normal,
          ease: EASE_CINEMATIC,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [reduced, text]);

  const parts = text.split(/(?<=\.)\s+/).filter(Boolean);

  return (
    <Tag ref={ref as never} className={cn("space-y-4", className)}>
      {parts.map((part) => (
        <span key={part} data-line className="block will-change-transform">
          {part}
        </span>
      ))}
    </Tag>
  );
}
