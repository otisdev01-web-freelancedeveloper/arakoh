"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { performances, performancesSection } from "@/data/performances";
import { RevealText } from "@/components/ui/RevealText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export function PerformanceList() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="performances" className="section-pad bg-ivory">
      <div className="site-shell">
        <RevealText>
          <SectionHeading
            label={`03 / ${performancesSection.label}`}
            heading={performancesSection.heading}
          />
        </RevealText>

        <ul className="mt-12 border-t border-obsidian/10">
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
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 pl-0 md:pl-[7rem]">
                        <p className="max-w-2xl text-sm leading-relaxed text-charcoal/80">
                          {event.details}
                        </p>
                        {event.url ? (
                          <a
                            href={event.url}
                            className="mt-4 inline-block text-[0.6875rem] tracking-[0.18em] uppercase underline decoration-brass/40 underline-offset-6 focus-ring"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Event Details
                          </a>
                        ) : null}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <span className="sr-only">Performance {index + 1}</span>
              </li>
            );
          })}
        </ul>

        <RevealText as="p" className="mt-8 max-w-2xl text-sm text-warm-gray">
          {performancesSection.emptyNote}
        </RevealText>
      </div>
    </section>
  );
}
