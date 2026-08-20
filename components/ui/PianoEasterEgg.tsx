"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { usePianoAudio } from "@/components/audio/PianoAudioProvider";
import { cn } from "@/lib/cn";

const KEYS = [
  { id: "c", label: "C", black: false },
  { id: "d", label: "D", black: false },
  { id: "e", label: "E", black: false },
  { id: "f", label: "F", black: false },
  { id: "g", label: "G", black: false },
] as const;

/** Subtle footer discovery — soft piano keys, only audible when SOUND ON. */
export function PianoEasterEgg() {
  const { enabled, playCue } = usePianoAudio();
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="mt-10 border-t border-ivory/10 pt-8">
      <p className="mb-4 text-[0.625rem] tracking-[0.2em] uppercase text-warm-gray">
        A quiet instrument
      </p>
      <div
        className="relative flex h-14 max-w-md overflow-hidden border border-ivory/15 bg-ivory/[0.03]"
        role="group"
        aria-label="Soft piano keys — play when sound is on"
      >
        {KEYS.map((key) => (
          <motion.button
            key={key.id}
            type="button"
            className={cn(
              "focus-ring relative flex-1 border-r border-ivory/10 transition-colors",
              "hover:bg-ivory/[0.06]",
              active === key.id && "bg-ivory/[0.1]",
            )}
            aria-label={`Play soft piano ${key.label}`}
            onMouseEnter={() => {
              setActive(key.id);
              if (enabled) {
                void playCue(
                  `key-${key.id}` as
                    | "key-c"
                    | "key-d"
                    | "key-e"
                    | "key-f"
                    | "key-g",
                );
              }
            }}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(key.id)}
            onBlur={() => setActive(null)}
            onClick={() => {
              if (enabled) {
                void playCue(
                  `key-${key.id}` as
                    | "key-c"
                    | "key-d"
                    | "key-e"
                    | "key-f"
                    | "key-g",
                );
              }
            }}
            whileTap={{ y: 1 }}
          >
            <span className="sr-only">{key.label}</span>
            <span
              className="absolute bottom-2 left-1/2 h-px w-3 -translate-x-1/2 bg-ivory/20"
              aria-hidden
            />
          </motion.button>
        ))}
      </div>
      {!enabled ? (
        <p className="mt-3 text-[0.6875rem] text-warm-gray/80">
          Enable Sound in the navigation to hear these keys.
        </p>
      ) : null}
    </div>
  );
}
