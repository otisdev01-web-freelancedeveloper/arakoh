"use client";

import { studioContent } from "@/data/studio";
import { RevealText } from "@/components/ui/RevealText";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhoFor() {
  const { whoFor } = studioContent;

  return (
    <section className="section-pad bg-ivory">
      <div className="site-shell">
        <RevealText>
          <SectionHeading label={whoFor.label} heading={whoFor.heading} />
        </RevealText>
        <RevealText as="p" className="mt-8 max-w-2xl body-lg">
          {whoFor.body}
        </RevealText>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {whoFor.audiences.map((item, i) => (
            <RevealText
              key={item.title}
              delay={i * 0.06}
              className="border-t border-obsidian/10 pt-6"
            >
              <h3 className="font-serif text-2xl text-obsidian">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                {item.body}
              </p>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
