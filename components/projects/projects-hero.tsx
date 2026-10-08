import { FolderOpen } from "lucide-react";
import { AvatarCard } from "@/components/avatar-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export function ProjectsHero() {
  return (
    <section className="grid items-center gap-4 pb-8 pt-8 md:grid-cols-[1.15fr_1fr] md:gap-10 md:pt-12">
      <Reveal>
        <SectionEyebrow pill>📂 Projects</SectionEyebrow>
        <h1 className="mt-6 text-[clamp(3rem,7vw,6.25rem)] font-extrabold leading-[0.95] tracking-[-0.06em]">
          Things I’ve
          <br />
          Built.
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
          A collection of projects, tools, and random ideas I’ve built. Some are
          useful, some are just for fun, but all of them taught me something.
        </p>
      </Reveal>
      <div className="mx-auto w-full max-w-[400px]">
        <AvatarCard words={["Build", "Explore", "Learn", "Repeat"]} />
      </div>
    </section>
  );
}
