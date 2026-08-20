import type { Metadata } from "next";
import { ContactForm } from "@/components/studio/ContactForm";
import { FAQ } from "@/components/studio/FAQ";
import { LessonInfo } from "@/components/studio/LessonInfo";
import { PolicyAccordion } from "@/components/studio/PolicyAccordion";
import { StudentAchievement } from "@/components/studio/StudentAchievement";
import { StudioHero } from "@/components/studio/StudioHero";
import { TeachingPhilosophy } from "@/components/studio/TeachingPhilosophy";
import { TuitionSection } from "@/components/studio/TuitionSection";
import { WhoFor } from "@/components/studio/WhoFor";
import { WhyStudy } from "@/components/studio/WhyStudy";
import { PageTransition } from "@/components/layout/PageTransition";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Private Piano Studio in San Antonio & Stone Oak",
  description:
    "Private piano lessons with Ara Koh in San Antonio and Stone Oak. University-level instruction, competition preparation, and bilingual mentorship in English and Korean.",
  keywords: [
    "San Antonio Piano Lessons",
    "Stone Oak Piano Lessons",
    "Ara Koh Piano Lesson",
    "Private Piano Lessons San Antonio",
    "Piano Teacher San Antonio",
  ],
  alternates: { canonical: "/studio" },
  openGraph: {
    title: "Ara Koh Private Piano Studio | San Antonio & Stone Oak",
    description:
      "Thoughtful private piano instruction with concert pianist and professor Ara Koh.",
    url: `${siteConfig.url}/studio`,
  },
};

export default function StudioPage() {
  return (
    <PageTransition>
      <StudioHero />
      <TeachingPhilosophy />
      <WhyStudy />
      <StudentAchievement />
      <LessonInfo />
      <TuitionSection />
      <PolicyAccordion />
      <WhoFor />
      <FAQ />
      <ContactForm />
    </PageTransition>
  );
}
