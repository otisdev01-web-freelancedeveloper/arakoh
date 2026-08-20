"use client";

import { studioContent } from "@/data/studio";
import { RevealText } from "@/components/ui/RevealText";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TeachingPhilosophy() {
  const { philosophy } = studioContent;

  return (
    <section className="section-pad bg-parchment/60">
      <div className="site-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <RevealText>
            <SectionHeading
              label={philosophy.label}
              heading={philosophy.heading}
            />
          </RevealText>
        </div>
        <div>
          <RevealText
            as="blockquote"
            className="display text-[clamp(1.6rem,3.2vw,2.55rem)] leading-[1.25] text-obsidian"
          >
            “{philosophy.pullQuote}”
          </RevealText>
          <div className="mt-10 space-y-5 body-lg max-w-xl">
            {philosophy.body.map((p) => (
              <RevealText key={p.slice(0, 28)} as="p">
                {p}
              </RevealText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
