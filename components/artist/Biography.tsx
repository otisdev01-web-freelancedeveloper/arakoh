"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { artistContent } from "@/data/artist";
import { RevealImage } from "@/components/ui/RevealImage";
import { RevealText } from "@/components/ui/RevealText";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Biography() {
  const { about } = artistContent;
  const [expanded, setExpanded] = useState(false);
  const preview = about.paragraphs.slice(0, 2);
  const rest = about.paragraphs.slice(2);

  return (
    <section id="about" className="section-pad bg-parchment/60">
      <div className="site-shell grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <RevealImage
          src={about.image.src}
          alt={about.image.alt}
          className="aspect-[4/5] w-full"
          sizes="(max-width: 1024px) 100vw, 42vw"
          parallax
        />

        <div>
          <RevealText>
            <SectionHeading label={about.label} heading={about.heading} />
          </RevealText>

          <div className="mt-8 space-y-5 body-lg max-w-xl">
            {preview.map((p) => (
              <RevealText key={p.slice(0, 24)} as="p">
                {p}
              </RevealText>
            ))}

            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.div
                  key="more"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-5 overflow-hidden"
                >
                  {rest.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {rest.length > 0 ? (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="focus-ring mt-8 text-[0.6875rem] font-medium tracking-[0.2em] uppercase text-obsidian underline decoration-brass/50 underline-offset-8 transition hover:decoration-brass"
              aria-expanded={expanded}
            >
              {expanded ? "Show Less" : "Read More"}
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
