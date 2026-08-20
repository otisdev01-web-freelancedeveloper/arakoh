export const artistContent = {
  eyebrow: "Concert Pianist · Professor",
  name: "Ara Koh",
  role: "Concert Pianist & Piano Professor",
  location: "San Antonio, Texas",
  heroCtaPrimary: { label: "Explore the Artist", href: "#intro" },
  heroCtaSecondary: { label: "Private Studio", href: "/studio" },

  intro: {
    label: "01 / Artist",
    statement:
      "An artist, educator, and mentor, Ara Koh brings the discipline of concert performance into the studio — guiding students with the clarity of a professor and the sensitivity of a performing musician.",
  },

  about: {
    label: "02 / About",
    heading: "An artist. An educator. A mentor.",
    paragraphs: [
      "Ara Koh is a concert pianist and piano professor based in San Antonio, Texas. She teaches at the University of the Incarnate Word and maintains a private home piano studio, offering personalized instruction for students seeking serious musical development.",
      "With extensive experience in university-level teaching and service as a competition juror, Ara has consistently guided students toward meaningful artistic growth and major competition recognition. Fluent in both English and Korean, she mentors across languages with clarity, care, and high musical standards.",
      "Her work as a performer, educator, and juror forms a single artistic practice — one rooted in refinement, discipline, and a deep commitment to the piano.",
    ],
    image: {
      src: "/images/ara-koh-portrait.jpg",
      alt: "Editorial piano keys in warm light — temporary stock photography",
    },
  },

  performance: {
    label: "03 / On Stage",
    heading: "On Stage",
    body: "Performance is at the center of Ara Koh’s artistic identity. As a concert pianist, she approaches the stage with clarity, musical intelligence, and a refined sense of presence — qualities she also cultivates in her students.",
    meta: [
      { label: "Discipline", value: "Concert Piano" },
      { label: "Base", value: "San Antonio, TX" },
      { label: "Also", value: "Educator · Juror" },
    ],
    image: {
      src: "/images/ara-koh-performance-01.jpg",
      alt: "Grand piano on a concert hall stage — temporary stock photography",
    },
  },

  video: {
    label: "04 / Media",
    heading: "Watch & Listen",
    body: "A temporary classical piano performance is featured here for atmosphere. Replace with Ara Koh’s preferred YouTube performance when available.",
    // Temporary stock: classical piano performance (replace with Ara's video)
    youtubeId: "9E6b3swbnWg",
    poster: {
      src: "/images/ara-koh-video-poster.jpg",
      alt: "Classical piano performance video poster — temporary stock",
    },
  },

  gallery: {
    label: "05 / Gallery",
    heading: "Selected Moments",
    images: [
      {
        src: "/images/ara-koh-gallery-01.jpg",
        alt: "Piano keys in soft editorial light — stock",
        span: "tall" as const,
      },
      {
        src: "/images/ara-koh-gallery-02.jpg",
        alt: "Sheet music and musical detail — stock",
        span: "wide" as const,
      },
      {
        src: "/images/ara-koh-hero.jpg",
        alt: "Grand piano keyboard close-up — stock",
        span: "square" as const,
      },
      {
        src: "/images/ara-koh-studio.jpg",
        alt: "Hands at the piano in a practice setting — stock",
        span: "tall" as const,
      },
      {
        src: "/images/ara-koh-performance-01.jpg",
        alt: "Concert hall with grand piano — stock",
        span: "wide" as const,
      },
      {
        src: "/images/ara-koh-gallery-03.jpg",
        alt: "Piano and musical atmosphere — stock",
        span: "square" as const,
      },
      {
        src: "/images/ara-koh-performance-02.jpg",
        alt: "Pianist on stage from the wings — stock",
        span: "wide" as const,
      },
      {
        src: "/images/ara-koh-gallery-04.jpg",
        alt: "Stage and piano under concert lighting — stock",
        span: "square" as const,
      },
    ],
  },

  teachingTeaser: {
    label: "06 / Studio",
    heading: "Private Piano Studio",
    body: "In her San Antonio home studio near Stone Oak, Ara offers thoughtful private instruction shaped by university teaching experience, performance insight, and bilingual mentorship in English and Korean.",
    cta: { label: "Explore the Studio", href: "/studio" },
    image: {
      src: "/images/ara-koh-studio.jpg",
      alt: "Private piano practice atmosphere — temporary stock photography",
    },
  },

  contactCta: {
    label: "07 / Contact",
    heading: "Begin a conversation",
    body: "For private piano lesson inquiries in San Antonio and Stone Oak, get in touch.",
    cta: { label: "Inquire About Lessons", href: "/studio#inquire" },
    emailLabel: "Email",
  },

  heroImage: {
    src: "/images/ara-koh-hero.jpg",
    alt: "Editorial grand piano keyboard — temporary stock photography for Ara Koh",
  },
} as const;
