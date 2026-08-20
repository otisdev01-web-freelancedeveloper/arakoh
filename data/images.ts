/**
 * Central image registry for Ara Koh website.
 *
 * IMPORTANT:
 * - Paths under /public/images are preferred.
 * - When Ara Koh's real photography is available, replace the files in
 *   /public/images using the same filenames — no component changes needed.
 * - Current files are temporary editorial stock (Unsplash / Pexels license).
 *   They are NOT photographs of Ara Koh.
 */

export const images = {
  /** Artist page hero — temporary editorial image — replace with Ara Koh photography */
  hero: {
    src: "/images/ara-koh-hero-v2.jpg",
    alt: "Temporary editorial image of a classical pianist at a grand piano — replace with Ara Koh photography",
    objectPosition: "center 18%",
  },

  /** Biography portrait — temporary editorial image — replace with Ara Koh photography */
  portrait: {
    src: "/images/ara-koh-portrait-v2.jpg",
    alt: "Temporary editorial pianist portrait — replace with Ara Koh photography",
    objectPosition: "center 12%",
  },

  /** On Stage / performance — temporary concert imagery */
  performance: {
    src: "/images/ara-koh-performance-01-v2.jpg",
    alt: "Temporary concert-hall imagery with grand piano — replace with Ara Koh performance photography",
    objectPosition: "center center",
  },

  /** Secondary performance / event hover */
  performanceAlt: {
    src: "/images/ara-koh-performance-02-v2.jpg",
    alt: "Temporary stage performance atmosphere — replace with Ara Koh concert photography",
    objectPosition: "center 40%",
  },

  /** Watch & Listen poster */
  videoPoster: {
    src: "/images/ara-koh-video-poster-v2.jpg",
    alt: "Temporary cinematic piano performance thumbnail — replace with Ara Koh video artwork",
    objectPosition: "center center",
  },

  /** Private studio hero — different from artist hero */
  studio: {
    src: "/images/ara-koh-studio-v2.jpg",
    alt: "Temporary elegant piano studio atmosphere — replace with Ara Koh studio photography",
    objectPosition: "center 25%",
  },

  /** Teaching philosophy supporting image */
  teaching: {
    src: "/images/ara-koh-teaching-v2.jpg",
    alt: "Temporary intimate piano-lesson atmosphere — replace with Ara Koh studio photography",
    objectPosition: "center center",
  },

  /** Subtle contact background */
  contact: {
    src: "/images/ara-koh-contact-v2.jpg",
    alt: "",
    objectPosition: "center center",
  },

  /** Editorial gallery — temporary visual archive; replace individually */
  gallery: [
    {
      src: "/images/ara-koh-gallery-01-v2.jpg",
      alt: "Temporary classical pianist portrait at grand piano",
      span: "tall" as const,
      objectPosition: "center 15%",
    },
    {
      src: "/images/ara-koh-gallery-02-v2.jpg",
      alt: "Temporary close-up of hands playing piano",
      span: "tall" as const,
      objectPosition: "center center",
    },
    {
      src: "/images/ara-koh-gallery-03-v2.jpg",
      alt: "Temporary grand piano keyboard detail",
      span: "square" as const,
      objectPosition: "center center",
    },
    {
      src: "/images/ara-koh-gallery-04-v2.jpg",
      alt: "Temporary concert hall with grand piano",
      span: "wide" as const,
      objectPosition: "center center",
    },
    {
      src: "/images/ara-koh-gallery-05-v2.jpg",
      alt: "Temporary sheet music editorial detail",
      span: "wide" as const,
      objectPosition: "center center",
    },
    {
      src: "/images/ara-koh-gallery-06-v2.jpg",
      alt: "Temporary Steinway piano performance detail",
      span: "square" as const,
      objectPosition: "center center",
    },
    {
      src: "/images/ara-koh-gallery-07-v2.jpg",
      alt: "Temporary piano studio hands detail",
      span: "wide" as const,
      objectPosition: "center center",
    },
    {
      src: "/images/ara-koh-gallery-08-v2.jpg",
      alt: "Temporary behind-the-scenes performance atmosphere",
      span: "wide" as const,
      objectPosition: "center 45%",
    },
  ],
} as const;

export type GalleryImage = (typeof images.gallery)[number];
