"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { studioPolicies } from "@/data/studio";
import { RevealText } from "@/components/ui/RevealText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export function PolicyAccordion() {
  const [openId, setOpenId] = useState<string | null>(studioPolicies[0]?.id ?? null);

  return (
    <section className="section-pad bg-parchment/50">
      <div className="site-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <RevealText>
          <SectionHeading label="07 / Policy" heading="Studio policy" />
          <p className="mt-6 max-w-sm text-sm text-warm-gray">
            Policy language below is placeholder copy for client replacement.
            Do not treat these as final studio rules.
          </p>
        </RevealText>

        <div className="border-t border-obsidian/10">
          {studioPolicies.map((item) => {
            const open = openId === item.id;
            return (
              <div key={item.id} className="border-b border-obsidian/10">
                <button
                  type="button"
                  className="focus-ring flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : item.id)}
                >
                  <span className="font-serif text-[clamp(1.25rem,2vw,1.6rem)] text-obsidian">
                    {item.title}
                  </span>
                  <Plus
                    className={cn(
                      "h-4 w-4 shrink-0 text-brass transition-transform duration-300",
                      open && "rotate-45",
                    )}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 max-w-2xl text-sm leading-relaxed text-charcoal/80">
                        {item.body}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
