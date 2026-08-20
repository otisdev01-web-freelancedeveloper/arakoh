"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { studioFaq } from "@/data/faq";
import { RevealText } from "@/components/ui/RevealText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(studioFaq[0]?.id ?? null);

  return (
    <section className="section-pad bg-parchment/40">
      <div className="site-shell max-w-3xl">
        <RevealText>
          <SectionHeading label="08 / FAQ" heading="Frequently asked questions" />
        </RevealText>

        <div className="mt-12 border-t border-obsidian/10">
          {studioFaq.map((item) => {
            const open = openId === item.id;
            return (
              <div key={item.id} className="border-b border-obsidian/10">
                <button
                  type="button"
                  className="focus-ring flex w-full items-start justify-between gap-6 py-5 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : item.id)}
                >
                  <span className="text-[1.05rem] text-obsidian">{item.question}</span>
                  <Plus
                    className={cn(
                      "mt-1 h-4 w-4 shrink-0 text-brass transition-transform duration-300",
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
                      <p className="pb-6 text-sm leading-relaxed text-charcoal/80">
                        {item.answer}
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
