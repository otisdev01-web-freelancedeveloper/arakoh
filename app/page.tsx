import type { Metadata } from "next";
import { ArtistHero } from "@/components/artist/ArtistHero";
import { ArtistIntro } from "@/components/artist/ArtistIntro";
import { Biography } from "@/components/artist/Biography";
import { ContactCTA } from "@/components/artist/ContactCTA";
import { Gallery } from "@/components/artist/Gallery";
import { PerformanceList } from "@/components/artist/PerformanceList";
import { PerformanceSection } from "@/components/artist/PerformanceSection";
import { TeachingTeaser } from "@/components/artist/TeachingTeaser";
import { VideoFeature } from "@/components/artist/VideoFeature";
import { PageTransition } from "@/components/layout/PageTransition";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function ArtistPage() {
  return (
    <PageTransition>
      <ArtistHero />
      <ArtistIntro />
      <Biography />
      <PerformanceSection />
      <PerformanceList />
      <VideoFeature />
      <Gallery />
      <TeachingTeaser />
      <ContactCTA />
    </PageTransition>
  );
}
