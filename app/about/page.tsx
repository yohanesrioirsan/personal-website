import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStats } from "@/components/about/about-stats";
import { CollaborationCta } from "@/components/about/collaboration-cta";
import { ExperienceSection } from "@/components/about/experience-section";
import { MyStory } from "@/components/about/my-story";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "I’m Yohanes, a software engineer from Indonesia. My story, my experience, and the things I enjoy building.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main" className="mx-auto max-w-7xl px-5 md:px-12 lg:px-16">
      <AboutHero />
      <AboutStats />
      <MyStory />
      <ExperienceSection />
      <CollaborationCta />
    </main>
  );
}
