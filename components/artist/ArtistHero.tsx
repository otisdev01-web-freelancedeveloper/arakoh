"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { artistContent } from "@/data/artist";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useReducedMotion } from "@/hooks/useMedia";
import { DURATION, EASE_CINEMATIC, STAGGER } from "@/lib/motion";

export function ArtistHero() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { heroImage, eyebrow, name, role, location } = artistContent;

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    if (reduced) {
      gsap.set(el.querySelectorAll("[data-hero]"), { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: EASE_CINEMATIC } });
      tl.fromTo(
        "[data-hero-image]",
        { opacity: 0, scale: 1.08 },
        { opacity: 1, scale: 1, duration: DURATION.slow },
      )
        .fromTo(
          "[data-hero-eyebrow]",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: DURATION.reveal },
          "-=0.7",
        )
        .fromTo(
          "[data-hero-title] span",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: DURATION.reveal,
            stagger: STAGGER.tight,
          },
          "-=0.55",
        )
        .fromTo(
          "[data-hero-copy]",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: DURATION.reveal },
          "-=0.4",
        )
        .fromTo(
          "[data-hero-cta]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: DURATION.fast },
          "-=0.25",
        )
        .fromTo(
          "[data-hero-scroll]",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.1",
        );

      gsap.to("[data-hero-scroll-line]", {
        y: 10,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, el);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={root}
      className="relative min-h-[100svh] overflow-hidden bg-obsidian text-ivory"
      aria-label="Ara Koh — Concert pianist hero"
    >
      <div className="absolute inset-0 grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)]">
        <div className="relative z-10 flex flex-col justify-end px-[var(--page-pad)] pb-16 pt-[calc(var(--nav-h)+2rem)] lg:justify-center lg:pb-24 lg:pt-28">
          <p data-hero data-hero-eyebrow className="eyebrow text-brass-soft">
            {eyebrow}
          </p>
          <h1
            data-hero
            data-hero-title
            className="display mt-5 text-[clamp(3.6rem,11vw,7.5rem)]"
          >
            {name.split(" ").map((part) => (
              <span key={part} className="mr-[0.22em] inline-block">
                {part}
              </span>
            ))}
          </h1>
          <div data-hero data-hero-copy className="mt-6 max-w-md space-y-2">
            <p className="text-[clamp(1rem,1.5vw,1.2rem)] text-ivory/85">
              {role}
            </p>
            <p className="text-[0.8125rem] tracking-[0.18em] uppercase text-warm-gray">
              {location}
            </p>
          </div>
          <div
            data-hero
            data-hero-cta
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <MagneticButton>
              <Button href={artistContent.heroCtaPrimary.href} variant="brass">
                {artistContent.heroCtaPrimary.label}
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button href={artistContent.heroCtaSecondary.href} variant="dark">
                {artistContent.heroCtaSecondary.label}
              </Button>
            </MagneticButton>
          </div>
        </div>

        <div
          data-hero
          data-hero-image
          className="relative min-h-[52vh] lg:min-h-full"
          data-cursor="view"
        >
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            style={{ objectPosition: heroImage.objectPosition }}
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-obsidian/10 lg:bg-gradient-to-r lg:from-obsidian lg:via-obsidian/45 lg:to-transparent" />
        </div>
      </div>

      <div
        data-hero
        data-hero-scroll
        className="absolute bottom-6 left-[var(--page-pad)] hidden items-center gap-3 text-[0.625rem] tracking-[0.22em] uppercase text-ivory/60 md:flex"
      >
        <span>Scroll</span>
        <span className="relative h-8 w-px overflow-hidden bg-ivory/25">
          <span
            data-hero-scroll-line
            className="absolute left-0 top-0 h-3 w-px bg-brass"
          />
        </span>
      </div>
    </section>
  );
}
