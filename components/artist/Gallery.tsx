"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { artistContent } from "@/data/artist";
import { RevealText } from "@/components/ui/RevealText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReducedMotion } from "@/hooks/useMedia";
import { cn } from "@/lib/cn";
import { DURATION, EASE_CINEMATIC, STAGGER } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const spanClass = {
  tall: "md:row-span-2 aspect-[3/4] md:aspect-auto md:min-h-[28rem]",
  wide: "md:col-span-2 aspect-[16/10]",
  square: "aspect-square",
} as const;

export function Gallery() {
  const { gallery } = artistContent;
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-gallery-item]");

    if (reduced) {
      gsap.set(items, { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 40, clipPath: "inset(8% 8% 8% 8%)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: DURATION.reveal,
          stagger: STAGGER.tight,
          ease: EASE_CINEMATIC,
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={root}
      className="section-pad bg-ivory"
      aria-label="Photography gallery"
    >
      <div className="site-shell">
        <RevealText>
          <SectionHeading label={gallery.label} heading={gallery.heading} />
        </RevealText>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {gallery.images.map((image) => (
            <figure
              key={image.src + image.alt}
              data-gallery-item
              data-cursor="view"
              className={cn(
                "group relative overflow-hidden bg-parchment",
                spanClass[image.span],
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectPosition: image.objectPosition }}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
