export const siteConfig = {
  name: "Ara Koh",
  title: "Ara Koh | Concert Pianist & Piano Professor",
  description:
    "Official website of Ara Koh — concert pianist, piano professor at University of the Incarnate Word, and private piano instructor in San Antonio and Stone Oak, Texas.",
  url: "https://arakohpiano.com",
  email: "arakohpiano@gmail.com",
  phone: "814-954-2661",
  phoneDisplay: "(814) 954-2661",
  location: "San Antonio, Texas",
  studioArea: "San Antonio · Stone Oak",
  university: "University of the Incarnate Word",
  youtubeUrl: "https://www.youtube.com/watch?v=9E6b3swbnWg", // Temporary stock — replace with Ara Koh's channel/video
  social: {
    youtube: "https://www.youtube.com/watch?v=9E6b3swbnWg",
  },
  keywords: [
    "Ara Koh Piano",
    "Ara Koh Piano Lesson",
    "San Antonio Piano Lessons",
    "Stone Oak Piano Lessons",
    "Piano Professor San Antonio",
    "Private Piano Lessons San Antonio",
    "Piano Teacher San Antonio",
    "Concert Pianist San Antonio",
  ],
} as const;

export const navLinks = [
  { label: "Artist", href: "/" },
  { label: "Studio", href: "/studio" },
  { label: "Performances", href: "/#performances" },
  { label: "About", href: "/#about" },
] as const;

export const footerLinks = [
  { label: "Artist", href: "/" },
  { label: "Studio", href: "/studio" },
  { label: "Performances", href: "/#performances" },
  { label: "Contact", href: "/studio#inquire" },
  { label: "YouTube", href: "#youtube", external: false },
] as const;
