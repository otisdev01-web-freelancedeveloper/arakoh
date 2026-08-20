"use client";

import { motion } from "framer-motion";
import { usePianoAudio } from "@/components/audio/PianoAudioProvider";
import { cn } from "@/lib/cn";

type Props = {
  tone?: "light" | "dark" | "auto";
  className?: string;
};

export function SoundToggle({ tone = "auto", className }: Props) {
  const { enabled, pulse, toggle } = usePianoAudio();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? "Turn piano sound off" : "Turn piano sound on"}
      className={cn(
        "focus-ring relative inline-flex items-center gap-2 px-2 py-1.5 text-[0.625rem] font-medium tracking-[0.22em] uppercase transition-opacity hover:opacity-100",
        tone === "light" && "text-obsidian/75",
        tone === "dark" && "text-ivory/80",
        tone === "auto" && "text-current opacity-80",
        className,
      )}
    >
      <span className="relative inline-flex h-3.5 w-3.5 items-center justify-center" aria-hidden>
        <span className="text-[0.75rem] leading-none">♪</span>
        <motion.span
          key={pulse}
          className="pointer-events-none absolute inset-0 rounded-full border border-current"
          initial={{ opacity: 0.55, scale: 0.6 }}
          animate={{ opacity: 0, scale: 2.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      </span>
      <span className="hidden sm:inline">Sound</span>
      <span className={cn(enabled ? "text-brass" : "opacity-70")}>
        {enabled ? "On" : "Off"}
      </span>
    </button>
  );
}
