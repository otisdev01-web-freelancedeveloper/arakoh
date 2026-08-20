"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { studioContent } from "@/data/studio";
import { RevealText } from "@/components/ui/RevealText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReducedMotion } from "@/hooks/useMedia";
import { DURATION, EASE_CINEMATIC, STAGGER } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

export function WhyStudy() {
  const { whyStudy } = studioContent;
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-feature]");

    if (reduced) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: DURATION.reveal,
          stagger: STAGGER.normal,
          ease: EASE_CINEMATIC,
          scrollTrigger: {
            trigger: el,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={root} className="section-pad bg-ivory">
      <div className="site-shell">
        <RevealText>
          <SectionHeading label={whyStudy.label} heading={whyStudy.heading} />
        </RevealText>

        <div className="mt-14 grid gap-0 border-t border-obsidian/10 md:grid-cols-2">
          {whyStudy.features.map((feature) => (
            <article
              key={feature.number}
              data-feature
              className="border-b border-obsidian/10 py-10 md:odd:border-r md:odd:pr-10 md:even:pl-10"
            >
              <p className="text-[0.6875rem] tracking-[0.22em] text-brass">
                {feature.number}
              </p>
              <h3 className="mt-4 font-serif text-[clamp(1.5rem,2.4vw,2rem)] text-obsidian">
                {feature.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal/80">
                {feature.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
