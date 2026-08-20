"use client";

import { useReducedMotion } from "@/hooks/useMedia";
import { cn } from "@/lib/cn";

type Props = {
  youtubeId: string;
  className?: string;
  title?: string;
};

/**
 * Muted, looping YouTube ambient embed for cinematic sections.
 * Replace youtubeId in data when Ara’s footage is available.
 */
export function AmbientYouTube({
  youtubeId,
  className,
  title = "Ambient classical piano video",
}: Props) {
  const reduced = useReducedMotion();

  if (reduced || !youtubeId) return null;

  const src = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&playsinline=1&rel=0&modestbranding=1&showinfo=0`;

  return (
    <div className={cn("pointer-events-none relative overflow-hidden", className)}>
      <iframe
        title={title}
        src={src}
        className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        loading="lazy"
        tabIndex={-1}
        aria-hidden
      />
      <div className="absolute inset-0 bg-obsidian/45" />
    </div>
  );
}
