import Image from "next/image";
import { AvatarCard } from "@/components/avatar-card";
import { PillButton } from "@/components/ui/pill-button";
import { Reveal } from "@/components/ui/reveal";
import { WelcomeBubble } from "@/components/home/welcome-bubble";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export function HomeHero() {
  return (
    <section className="grid items-center gap-6 pb-10 pt-8 md:grid-cols-[1.1fr_1fr] md:gap-10 md:pb-14 md:pt-14">
      <Reveal>
        <SectionEyebrow pill>👋 You are @Home</SectionEyebrow>
        {/*
          Below md the hero is a single column, so the type scales with the viewport (vw) and
          "Yohanes" spans roughly the full width instead of leaving a gap on the right.
          Measured in Inter 800: "Yohanes!" is 4.26em wide, so 20vw ≈ 85vw of text inside ~90vw of content.
        */}
        <h1 className="mt-6 text-[min(20vw,9.5rem)] font-extrabold leading-[0.95] tracking-[-0.06em] md:text-[clamp(3rem,7vw,6.25rem)] md:leading-[0.98]">
          <span className="flex items-center gap-[0.12em] md:gap-4">
            Hi, I’m
            <span className="relative block shrink-0">
              <Image
                src="/assets/emoji2.webp"
                alt=""
                width={744}
                height={440}
                className="block h-[0.75em] w-auto rounded-[0.18em] object-cover md:rounded-2xl"
                priority
              />
              <WelcomeBubble />
            </span>
          </span>
          <span className="mt-1 block">Yohanes</span>
        </h1>
        <p className="mt-5 text-[min(6.8vw,2.1rem)] leading-[1.25] tracking-[-0.03em] text-muted md:mt-6 md:text-[clamp(1.4rem,2.6vw,2.1rem)]">
          I’m a Software Engineer
          <br />
          From Indonesia <span className="emoji">🇮🇩</span>
        </p>
        <div className="mt-8 md:mt-9">
          {/* Full-width, thumb-friendly button on phones; normal pill from sm up. */}
          <PillButton href="https://path.cv/yohanesrioirsan" className="w-full justify-between sm:w-auto sm:justify-start">
            View Resume
          </PillButton>
        </div>
      </Reveal>
      <AvatarCard words={["Build", "Deploy", "Repeat"]} />
    </section>
  );
}
