"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePianoAudio } from "@/components/audio/PianoAudioProvider";
import { useReducedMotion } from "@/hooks/useMedia";

gsap.registerPlugin(ScrollTrigger);

/**
 * Triggers restrained piano cues once per major section entry.
 * Completely silent unless SOUND ON is enabled by the visitor.
 */
export function ScrollSoundConductor() {
  const { enabled, playSection, resetSessionSections } = usePianoAudio();
  const reduced = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    resetSessionSections();
  }, [pathname, resetSessionSections]);

  useEffect(() => {
    if (!enabled || reduced) return;

    const triggers: ScrollTrigger[] = [];
    const sectionEls = document.querySelectorAll<HTMLElement>(
      "[data-piano-section]",
    );

    sectionEls.forEach((el) => {
      const id = el.dataset.pianoSection;
      if (!id) return;
      // Hero/studio opening is handled by delayed cue below
      if (id === "hero" || id === "studio") return;
      const st = ScrollTrigger.create({
        trigger: el,
        start: "top 68%",
        once: true,
        onEnter: () => playSection(id),
      });
      triggers.push(st);
    });

    const heroTimer = window.setTimeout(() => {
      if (pathname === "/" || pathname === "") {
        playSection("hero");
      } else if (pathname?.startsWith("/studio")) {
        playSection("studio");
      }
    }, 1100);

    return () => {
      window.clearTimeout(heroTimer);
      triggers.forEach((t) => t.kill());
    };
  }, [enabled, pathname, playSection, reduced]);

  return null;
}
