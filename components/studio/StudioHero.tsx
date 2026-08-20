"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { studioContent } from "@/data/studio";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useReducedMotion } from "@/hooks/useMedia";
import { DURATION, EASE_CINEMATIC, STAGGER } from "@/lib/motion";

export function StudioHero() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { hero } = studioContent;

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    if (reduced) {
      gsap.set(el.querySelectorAll("[data-studio-hero]"), {
        opacity: 1,
        y: 0,
        scale: 1,
      });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: EASE_CINEMATIC } });
      tl.fromTo(
        "[data-studio-image]",
        { opacity: 0, scale: 1.06 },
        { opacity: 1, scale: 1, duration: DURATION.slow },
      )
        .fromTo(
          "[data-studio-hero]",
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: DURATION.reveal,
            stagger: STAGGER.normal,
          },
          "-=0.9",
        );
    }, el);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={root}
      data-piano-section="studio"
      className="relative overflow-hidden bg-ivory pt-[calc(var(--nav-h)+2.5rem)]"
      aria-label="Private piano studio"
    >
      <div className="site-shell grid items-end gap-10 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24">
        <div className="pb-2">
          <p data-studio-hero className="eyebrow">
            {hero.eyebrow}
          </p>
          <h1
            data-studio-hero
            className="display mt-5 text-[clamp(3rem,8vw,5.8rem)] text-obsidian"
          >
            {hero.heading}
          </h1>
          <p
            data-studio-hero
            className="mt-6 max-w-md text-[clamp(1.05rem,1.4vw,1.2rem)] text-charcoal/80"
          >
            {hero.supporting}
          </p>
          <p
            data-studio-hero
            className="mt-4 text-[0.75rem] tracking-[0.2em] uppercase text-warm-gray"
          >
            {hero.location}
          </p>
          <div
            data-studio-hero
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <MagneticButton>
              <Button href={hero.ctaPrimary.href} variant="brass">
                {hero.ctaPrimary.label}
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button href={hero.ctaSecondary.href} variant="ghost">
                {hero.ctaSecondary.label}
              </Button>
            </MagneticButton>
          </div>
        </div>

        <div
          data-studio-image
          className="relative aspect-[4/5] w-full overflow-hidden bg-parchment sm:aspect-[5/4] lg:aspect-[4/5]"
          data-cursor="view"
        >
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 46vw"
            style={{ objectPosition: hero.image.objectPosition }}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
