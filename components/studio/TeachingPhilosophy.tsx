"use client";

import { studioContent } from "@/data/studio";
import { RevealImage } from "@/components/ui/RevealImage";
import { RevealText } from "@/components/ui/RevealText";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TeachingPhilosophy() {
  const { philosophy } = studioContent;

  return (
    <section data-piano-section="philosophy" className="section-pad bg-parchment/60">
      <div className="site-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <RevealText>
            <SectionHeading
              label={philosophy.label}
              heading={philosophy.heading}
            />
          </RevealText>
          {"image" in philosophy && philosophy.image ? (
            <RevealImage
              src={philosophy.image.src}
              alt={philosophy.image.alt}
              objectPosition={philosophy.image.objectPosition}
              className="mt-10 aspect-[4/3] w-full"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          ) : null}
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
