export const studioContent = {
  hero: {
    eyebrow: "Private Instruction",
    heading: "Private Piano Studio",
    supporting:
      "Thoughtful instruction for serious musicians and developing pianists.",
    location: "San Antonio · Stone Oak",
    ctaPrimary: { label: "Inquire About Lessons", href: "#inquire" },
    ctaSecondary: { label: "View Tuition", href: "#tuition" },
    image: {
      src: "/images/ara-koh-studio.jpg",
      alt: "Hands at the piano in a private studio setting — temporary stock photography",
    },
  },

  philosophy: {
    label: "01 / Philosophy",
    heading: "Teaching is part of the art",
    pullQuote:
      "The studio is a place where discipline meets imagination — where technical clarity serves musical meaning.",
    body: [
      "Ara Koh approaches private teaching with the same seriousness she brings to the concert stage and the university classroom. Lessons are personalized, musically rigorous, and shaped around each student’s goals — from foundational development to performance and competition preparation.",
      "Drawing on extensive university-level teaching experience and her work as a competition juror, she mentors students with precision, warmth, and clear artistic standards. Instruction is available with fluent communication in English and Korean.",
    ],
  },

  whyStudy: {
    label: "02 / Why Ara",
    heading: "Why study with Ara",
    features: [
      {
        number: "01",
        title: "University-level experience",
        body: "Teaching experience as a piano professor at the University of the Incarnate Word informs a rigorous, thoughtfully structured approach to private study.",
      },
      {
        number: "02",
        title: "Competition preparation",
        body: "Experience serving as a competition juror and mentoring students toward major awards supports informed, purposeful preparation.",
      },
      {
        number: "03",
        title: "Personalized mentorship",
        body: "Private instruction tailored to the individual student — technical development, musical growth, and performance readiness.",
      },
      {
        number: "04",
        title: "Bilingual communication",
        body: "Fluent in English and Korean, Ara communicates and mentors effectively across languages and cultural contexts.",
      },
    ],
  },

  achievement: {
    label: "03 / Students",
    heading: "Student achievement",
    body: "Ara has consistently guided students toward meaningful artistic progress and major competition recognition. Specific award listings and student highlights can be added here as the studio elects to share them.",
    placeholders: [
      {
        title: "Competition recognition",
        note: "[Client: add selected student achievements here]",
      },
      {
        title: "Performance preparation",
        note: "[Client: add recital or audition milestones here]",
      },
      {
        title: "Artistic development",
        note: "[Client: add studio highlights here]",
      },
    ],
  },

  lessons: {
    label: "04 / Lessons",
    heading: "Private lesson information",
    body: "Lessons are held at Ara’s private home piano studio in the San Antonio / Stone Oak area. Instruction is designed for students seeking serious musical study, with pathways for developing pianists as well as more advanced musicians preparing for performance and competition.",
    points: [
      "Private one-on-one instruction",
      "Home studio in San Antonio · Stone Oak",
      "Performance and competition preparation available",
      "Instruction in English and Korean",
    ],
  },

  whoFor: {
    label: "05 / Fit",
    heading: "Who the studio is for",
    body: "The studio welcomes students and families seeking refined, serious private piano study — from developing musicians building strong foundations to advanced pianists preparing for performance and competition.",
    audiences: [
      {
        title: "Developing pianists",
        body: "Students ready for thoughtful technical and musical guidance.",
      },
      {
        title: "Serious intermediate & advanced students",
        body: "Musicians seeking university-informed mentorship and artistic clarity.",
      },
      {
        title: "Competition & performance focus",
        body: "Students preparing for auditions, recitals, and competitions.",
      },
      {
        title: "Bilingual households",
        body: "Families who prefer communication in English, Korean, or both.",
      },
    ],
  },

  contact: {
    heading: "Begin your musical journey",
    supporting:
      "For private piano lesson inquiries, please get in touch. Ara will respond with current availability and next steps.",
    email: "arakohpiano@gmail.com",
  },
} as const;

export type TuitionOption = {
  id: string;
  duration: string;
  price: string;
  note?: string;
};

/** Replace price fields with actual rates when provided by the client. */
export const tuitionOptions: TuitionOption[] = [
  {
    id: "30",
    duration: "30 Minutes",
    price: "Contact for current rate",
    note: "Ideal for younger or focused technical sessions.",
  },
  {
    id: "45",
    duration: "45 Minutes",
    price: "Contact for current rate",
    note: "A balanced length for developing musicians.",
  },
  {
    id: "60",
    duration: "60 Minutes",
    price: "Contact for current rate",
    note: "Recommended for advanced study and repertoire work.",
  },
];

export type PolicyItem = {
  id: string;
  title: string;
  body: string;
};

/** Placeholder studio policies — replace with client-approved language. */
export const studioPolicies: PolicyItem[] = [
  {
    id: "scheduling",
    title: "Scheduling",
    body: "[Client: Studio policy details for lesson scheduling will be provided here.]",
  },
  {
    id: "cancellations",
    title: "Cancellations",
    body: "[Client: Studio policy details for cancellations and make-up lessons will be provided here.]",
  },
  {
    id: "payment",
    title: "Payment",
    body: "[Client: Studio policy details for tuition payment and billing will be provided here.]",
  },
  {
    id: "practice",
    title: "Practice expectations",
    body: "[Client: Studio policy details for practice expectations will be provided here.]",
  },
  {
    id: "recitals",
    title: "Recitals & performances",
    body: "[Client: Studio policy details for recitals and studio performances will be provided here.]",
  },
];
