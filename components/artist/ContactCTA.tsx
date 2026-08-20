"use client";

import Image from "next/image";
import { artistContent } from "@/data/artist";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealText } from "@/components/ui/RevealText";

export function ContactCTA() {
  const { contactCta } = artistContent;

  return (
    <section className="relative overflow-hidden section-pad bg-obsidian text-ivory">
      {contactCta.background ? (
        <div className="absolute inset-0" aria-hidden>
          <Image
            src={contactCta.background.src}
            alt=""
            fill
            sizes="100vw"
            style={{ objectPosition: contactCta.background.objectPosition }}
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-obsidian/75" />
        </div>
      ) : null}

      <div className="site-shell relative z-10 max-w-4xl text-center md:mx-auto">
        <RevealText>
          <p className="eyebrow text-brass-soft">{contactCta.label}</p>
        </RevealText>
        <RevealText
          as="h2"
          className="display mt-5 text-[clamp(2.6rem,6vw,5rem)]"
        >
          {contactCta.heading}
        </RevealText>
        <RevealText as="p" className="mx-auto mt-6 max-w-xl text-ivory/70">
          {contactCta.body}
        </RevealText>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton>
            <Button href={contactCta.cta.href} variant="brass">
              {contactCta.cta.label}
            </Button>
          </MagneticButton>
          <a
            href={`mailto:${siteConfig.email}`}
            className="focus-ring text-[0.6875rem] tracking-[0.2em] uppercase text-ivory/70 underline decoration-brass/40 underline-offset-8 transition hover:text-ivory hover:decoration-brass"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
