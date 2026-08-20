"use client";

import { artistContent } from "@/data/artist";
import { RevealText } from "@/components/ui/RevealText";

export function ArtistIntro() {
  const { intro } = artistContent;

  return (
    <section id="intro" className="section-pad bg-ivory">
      <div className="site-shell grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
        <RevealText>
          <p className="eyebrow">{intro.label}</p>
        </RevealText>
        <RevealText
          as="p"
          className="display text-[clamp(1.85rem,4.2vw,3.35rem)] leading-[1.2] text-obsidian"
          y={48}
        >
          {intro.statement}
        </RevealText>
      </div>
    </section>
  );
}
