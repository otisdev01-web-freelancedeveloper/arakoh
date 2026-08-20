"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useMedia";
import { DURATION, EASE_CINEMATIC } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  parallax?: boolean;
};

export function RevealImage({
  src,
  alt,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  parallax = false,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    if (reduced) {
      gsap.set(wrap, { clipPath: "inset(0% 0% 0% 0%)" });
      gsap.set(img, { scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrap,
        { clipPath: "inset(12% 12% 12% 12%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: DURATION.slow,
          ease: EASE_CINEMATIC,
          scrollTrigger: {
            trigger: wrap,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        img,
        { scale: 1.08 },
        {
          scale: 1,
          duration: DURATION.slow,
          ease: EASE_CINEMATIC,
          scrollTrigger: {
            trigger: wrap,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      if (parallax) {
        gsap.to(img, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, wrap);

    return () => ctx.revert();
  }, [parallax, reduced]);

  return (
    <div
      ref={wrapRef}
      className={cn("relative overflow-hidden bg-parchment", className)}
      data-cursor="view"
    >
      <div ref={imgRef} className="relative h-full w-full will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]",
            imageClassName,
          )}
        />
      </div>
    </div>
  );
}
