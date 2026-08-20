"use client";

import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  tone?: "light" | "dark";
};

/** Architectural piano-key accent — extremely low contrast, non-gimmicky. */
export function PianoKeyMotif({ className, tone = "light" }: Props) {
  const keys = Array.from({ length: 28 }, (_, i) => i);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 flex h-3 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      {keys.map((i) => {
        const isBlack = [1, 3, 6, 8, 10].includes(i % 12);
        return (
          <div
            key={i}
            className={cn(
              "relative h-full flex-1 border-r",
              tone === "light"
                ? "border-obsidian/[0.04]"
                : "border-ivory/[0.06]",
              isBlack &&
                (tone === "light"
                  ? "bg-obsidian/[0.035]"
                  : "bg-ivory/[0.045]"),
            )}
          />
        );
      })}
    </div>
  );
}
