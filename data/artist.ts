/**
 * Artist page content.
 * Image paths come from data/images.ts so client photography can replace
 * temporary stock files without touching components.
 */
import { images } from "@/data/images";

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
    // Temporary editorial image — replace with Ara Koh photography
    image: images.portrait,
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
    // Temporary editorial image — replace with Ara Koh photography
    image: images.performance,
  },

  video: {
    label: "04 / Media",
    heading: "Watch & Listen",
    body: "A temporary classical piano performance is featured here for atmosphere. Replace with Ara Koh’s preferred YouTube performance when available.",
    youtubeId: "9E6b3swbnWg",
    // Temporary editorial image — replace with Ara Koh photography / YouTube artwork
    poster: images.videoPoster,
  },

  gallery: {
    label: "05 / Gallery",
    heading: "Selected Moments",
    // Temporary editorial archive — replace with Ara Koh photography
    images: images.gallery,
  },

  teachingTeaser: {
    label: "06 / Studio",
    heading: "Private Piano Studio",
    body: "In her San Antonio home studio near Stone Oak, Ara offers thoughtful private instruction shaped by university teaching experience, performance insight, and bilingual mentorship in English and Korean.",
    cta: { label: "Explore the Studio", href: "/studio" },
    // Temporary editorial image — replace with Ara Koh photography
    image: images.studio,
  },

  contactCta: {
    label: "07 / Contact",
    heading: "Begin a conversation",
    body: "For private piano lesson inquiries in San Antonio and Stone Oak, get in touch.",
    cta: { label: "Inquire About Lessons", href: "/studio#inquire" },
    emailLabel: "Email",
    background: images.contact,
  },

  // Temporary editorial image — replace with Ara Koh photography
  heroImage: images.hero,
} as const;
