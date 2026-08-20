"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { performances, performancesSection } from "@/data/performances";
import { images } from "@/data/images";
import { RevealText } from "@/components/ui/RevealText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export function PerformanceList() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <section id="performances" data-piano-section="performances" className="section-pad bg-ivory">
      <div className="site-shell">
        <RevealText>
          <SectionHeading
            label={`03 / ${performancesSection.label}`}
            heading={performancesSection.heading}
          />
        </RevealText>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.42fr] lg:items-start">
          <ul
            className="border-t border-obsidian/10"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {performances.map((event, index) => {
              const open = openId === event.id;
              return (
                <li key={event.id} className="border-b border-obsidian/10">
                  <button
                    type="button"
                    className="focus-ring group grid w-full grid-cols-1 gap-3 py-6 text-left transition-colors md:grid-cols-[7rem_1fr_1fr_auto] md:items-center md:gap-8 md:py-7"
                    onClick={() => setOpenId(open ? null : event.id)}
                    aria-expanded={open}
                  >
                    <span className="text-[0.75rem] tracking-[0.16em] text-warm-gray">
                      {event.date}
                    </span>
                    <span className="font-serif text-[clamp(1.35rem,2.2vw,1.85rem)] leading-tight text-obsidian transition-colors group-hover:text-charcoal">
                      {event.title}
                    </span>
                    <span className="text-sm text-warm-gray md:text-right lg:text-left">
                      {event.venue}
                      <span className="mt-1 block text-[0.75rem] tracking-[0.08em] uppercase">
                        {event.location}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "hidden text-[0.625rem] tracking-[0.2em] uppercase text-brass transition-transform md:inline",
                        open && "rotate-45",
                      )}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && event.details ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 pl-0 md:pl-[7rem]">
                          <p className="max-w-2xl text-sm leading-relaxed text-charcoal/80">
                            {event.details}
                          </p>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>

                  <span className="sr-only">Performance {index + 1}</span>
                </li>
              );
            })}
          </ul>

          <motion.div
            className="relative hidden aspect-[4/5] overflow-hidden bg-parchment lg:block"
            animate={{ opacity: hovered ? 1 : 0.55, scale: hovered ? 1 : 0.985 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          >
            <Image
              src={images.performanceAlt.src}
              alt=""
              fill
              sizes="30vw"
              style={{ objectPosition: images.performanceAlt.objectPosition }}
              className="object-cover"
            />
          </motion.div>
        </div>

        <RevealText as="p" className="mt-8 max-w-2xl text-sm text-warm-gray">
          {performancesSection.emptyNote}
        </RevealText>
      </div>
    </section>
  );
}
