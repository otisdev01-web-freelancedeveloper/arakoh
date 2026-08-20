"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useMedia";

type Props = {
  src: string;
  className?: string;
  poster?: string;
};

/** Muted looping ambient video for cinematic sections (desktop-friendly). */
export function AmbientVideo({ src, className, poster }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    const play = async () => {
      try {
        await el.play();
        setReady(true);
      } catch {
        setReady(false);
      }
    };
    void play();
  }, [reduced, src]);

  if (reduced) return null;

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      aria-hidden
      onLoadedData={() => setReady(true)}
      style={{ opacity: ready ? 1 : 0 }}
    />
  );
}
