"use client";

import { studioContent } from "@/data/studio";
import { RevealText } from "@/components/ui/RevealText";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StudentAchievement() {
  const { achievement } = studioContent;

  return (
    <section className="section-pad bg-obsidian text-ivory">
      <div className="site-shell">
        <RevealText>
          <SectionHeading
            label={achievement.label}
            heading={achievement.heading}
            tone="dark"
          />
        </RevealText>
        <RevealText as="p" className="mt-8 max-w-2xl text-ivory/70 body-lg">
          {achievement.body}
        </RevealText>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {achievement.placeholders.map((item) => (
            <RevealText
              key={item.title}
              className="border border-ivory/15 p-6 md:p-8"
            >
              <h3 className="font-serif text-xl text-ivory">{item.title}</h3>
              <p className="mt-4 text-sm text-warm-gray">{item.note}</p>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
