"use client";

import { tuitionOptions } from "@/data/studio";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/ui/RevealText";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TuitionSection() {
  return (
    <section id="tuition" className="section-pad bg-ivory">
      <div className="site-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <RevealText>
            <SectionHeading label="06 / Tuition" heading="Lesson tuition" />
          </RevealText>
          <RevealText as="p" className="max-w-sm text-sm text-warm-gray md:text-right">
            Rates are provided upon inquiry. Replace placeholder pricing in{" "}
            <code className="text-obsidian/80">data/studio.ts</code> when ready.
          </RevealText>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {tuitionOptions.map((option, i) => (
            <RevealText
              key={option.id}
              delay={i * 0.08}
              className="flex flex-col border border-obsidian/10 p-7 transition-colors duration-300 hover:border-obsidian/30 md:p-8"
            >
              <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-warm-gray">
                {option.duration}
              </p>
              <p className="mt-6 font-serif text-[clamp(1.5rem,2.4vw,2rem)] leading-snug text-obsidian">
                {option.price}
              </p>
              {option.note ? (
                <p className="mt-4 text-sm text-charcoal/70">{option.note}</p>
              ) : null}
            </RevealText>
          ))}
        </div>

        <div className="mt-10">
          <Button href="#inquire" variant="brass">
            Request Current Rates
          </Button>
        </div>
      </div>
    </section>
  );
}
