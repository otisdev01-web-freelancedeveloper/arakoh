"use client";

import { artistContent } from "@/data/artist";
import { AmbientYouTube } from "@/components/ui/AmbientYouTube";
import { RevealImage } from "@/components/ui/RevealImage";
import { RevealText } from "@/components/ui/RevealText";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PerformanceSection() {
  const { performance, video } = artistContent;

  return (
    <section className="bg-obsidian text-ivory">
      <div className="section-pad">
        <div className="site-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <RevealText>
              <SectionHeading
                label={performance.label}
                heading={performance.heading}
                tone="dark"
              />
            </RevealText>
            <RevealText as="p" className="mt-8 max-w-lg text-ivory/75 body-lg">
              {performance.body}
            </RevealText>

            <hr className="editorial-divider--light mt-10 max-w-md" />

            <dl className="mt-8 grid gap-6 sm:grid-cols-3">
              {performance.meta.map((item) => (
                <RevealText key={item.label} className="space-y-2">
                  <dt className="text-[0.625rem] tracking-[0.2em] uppercase text-brass-soft/80">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-ivory/90">{item.value}</dd>
                </RevealText>
              ))}
            </dl>
          </div>

          <div className="order-1 lg:order-2">
            <RevealImage
              src={performance.image.src}
              alt={performance.image.alt}
              className="aspect-[4/5] w-full md:aspect-[5/6]"
              sizes="(max-width: 1024px) 100vw, 46vw"
              parallax
            />
          </div>
        </div>
      </div>

      <div className="relative h-[42vh] min-h-[16rem] w-full overflow-hidden border-t border-ivory/10 md:h-[52vh]">
        <AmbientYouTube
          youtubeId={video.youtubeId}
          className="absolute inset-0 h-full w-full"
          title="Ambient classical piano performance"
        />
        <div className="site-shell absolute inset-x-0 bottom-0 z-10 pb-8">
          <p className="text-[0.6875rem] tracking-[0.22em] uppercase text-ivory/70">
            Atmosphere · Temporary stock footage
          </p>
        </div>
      </div>
    </section>
  );
}
