"use client";

import { cn } from "@/lib/cn";

type Props = {
  label?: string;
  heading: string;
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  headingClassName?: string;
};

export function SectionHeading({
  label,
  heading,
  as: Tag = "h2",
  align = "left",
  tone = "light",
  className,
  headingClassName,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {label ? (
        <p
          className={cn(
            "eyebrow",
            tone === "dark" ? "text-brass-soft/80" : "text-warm-gray",
          )}
        >
          {label}
        </p>
      ) : null}
      <Tag
        className={cn(
          "display text-[clamp(2.4rem,5.5vw,4.75rem)]",
          tone === "dark" ? "text-ivory" : "text-obsidian",
          headingClassName,
        )}
      >
        {heading}
      </Tag>
    </div>
  );
}
