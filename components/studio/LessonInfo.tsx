"use client";

import { studioContent } from "@/data/studio";
import { RevealText } from "@/components/ui/RevealText";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LessonInfo() {
  const { lessons } = studioContent;

  return (
    <section className="section-pad bg-parchment/55">
      <div className="site-shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <RevealText>
            <SectionHeading label={lessons.label} heading={lessons.heading} />
          </RevealText>
          <RevealText as="p" className="mt-8 max-w-xl body-lg">
            {lessons.body}
          </RevealText>
        </div>
        <ul className="space-y-0 border-t border-obsidian/10">
          {lessons.points.map((point, i) => (
            <RevealText key={point} as="li" delay={i * 0.05}>
              <div className="flex items-start gap-5 border-b border-obsidian/10 py-5">
                <span className="mt-1 text-[0.625rem] tracking-[0.18em] text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.95rem] text-obsidian">{point}</span>
              </div>
            </RevealText>
          ))}
        </ul>
      </div>
    </section>
  );
}
