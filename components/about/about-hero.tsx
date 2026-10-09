import { Smile } from "lucide-react";
import { AvatarCard } from "@/components/avatar-card";
import { CollabLink } from "@/components/ui/collab-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export function AboutHero() {
  return (
    <section className="grid items-center gap-6 pb-12 pt-8 md:grid-cols-[1.1fr_1fr] md:gap-10 md:pb-16 md:pt-14">
      <Reveal>
        <SectionEyebrow pill>😁 About me</SectionEyebrow>
        <h1 className="mt-6 text-[clamp(2.9rem,6.6vw,6rem)] font-extrabold leading-[0.98] tracking-[-0.06em]">
          Just a guy
          <br />
          who loves
          <br />
          building things.
        </h1>
        <p className="mt-7 max-w-lg text-lg leading-8 text-muted">
          I’m Yohanes, a software engineer from Indonesia. I enjoy turning ideas
          into real products, working on web apps, tools, and random projects
          that solve real problems.
        </p>
        <p className="mt-4 max-w-lg text-base leading-7 text-muted">
          I’m always open to new opportunities, collaborations, or just a casual
          chat about tech.
        </p>
        <div className="mt-8">
          <CollabLink />
        </div>
      </Reveal>
      <AvatarCard words={["Build", "Explore", "Learn", "Repeat"]} lanyard />
    </section>
  );
}
