"use client";

import { artistContent } from "@/data/artist";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealImage } from "@/components/ui/RevealImage";
import { RevealText } from "@/components/ui/RevealText";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TeachingTeaser() {
  const { teachingTeaser } = artistContent;

  return (
    <section className="section-pad bg-parchment/70">
      <div className="site-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <RevealText>
            <SectionHeading
              label={teachingTeaser.label}
              heading={teachingTeaser.heading}
            />
          </RevealText>
          <RevealText as="p" className="mt-8 max-w-lg body-lg">
            {teachingTeaser.body}
          </RevealText>
          <div className="mt-10">
            <MagneticButton>
              <Button href={teachingTeaser.cta.href} variant="brass">
                {teachingTeaser.cta.label}
              </Button>
            </MagneticButton>
          </div>
        </div>
        <RevealImage
          src={teachingTeaser.image.src}
          alt={teachingTeaser.image.alt}
          objectPosition={teachingTeaser.image.objectPosition}
          className="aspect-[5/4] w-full"
          sizes="(max-width: 1024px) 100vw, 48vw"
        />
      </div>
    </section>
  );
}
