"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { artistContent } from "@/data/artist";
import { RevealText } from "@/components/ui/RevealText";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function VideoFeature() {
  const { video } = artistContent;
  const [open, setOpen] = useState(false);
  const hasVideo = Boolean(video.youtubeId);
  const posterSrc = video.poster.src;

  return (
    <section id="watch" className="section-pad bg-parchment/50">
      <div className="site-shell">
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <RevealText>
            <SectionHeading label={video.label} heading={video.heading} />
          </RevealText>
          <RevealText as="p" className="max-w-md text-sm text-warm-gray md:text-right">
            {video.body}
          </RevealText>
        </div>

        <motion.button
          type="button"
          data-cursor="play"
          className="group relative aspect-video w-full overflow-hidden bg-obsidian text-left focus-ring"
          onClick={() => (hasVideo ? setOpen(true) : undefined)}
          whileHover="hover"
          aria-label={
            hasVideo
              ? "Play featured classical piano video"
              : "Video placeholder — YouTube URL pending"
          }
        >
          <motion.div
            className="absolute inset-0"
            variants={{ hover: { scale: 1.03 } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={posterSrc}
              alt={video.poster.alt}
              fill
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-70"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-obsidian/20 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="flex h-20 w-20 items-center justify-center rounded-full border border-ivory/50 bg-ivory/10 text-ivory backdrop-blur-sm"
              variants={{ hover: { scale: 1.06, x: 2 } }}
              transition={{ duration: 0.35 }}
            >
              <Play className="ml-1 h-6 w-6 fill-current" />
            </motion.span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
            <p className="text-[0.6875rem] tracking-[0.22em] uppercase text-ivory/80">
              Featured Performance · Stock Preview
            </p>
            <p className="max-w-xs text-right text-[0.75rem] text-ivory/55">
              Temporary video — replace with Ara’s YouTube link
            </p>
          </div>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && hasVideo ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-obsidian/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Video player"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              className="focus-ring absolute right-5 top-5 text-ivory"
              aria-label="Close video"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <div
              className="aspect-video w-full max-w-5xl overflow-hidden bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                title="Classical piano performance"
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
