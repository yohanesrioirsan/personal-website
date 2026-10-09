import type { Metadata } from "next";
import { AvatarCard } from "@/components/avatar-card";
import { PillButton } from "@/components/ui/pill-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-7xl px-5 md:px-12 lg:px-16">
      <section className="grid items-center gap-4 pb-16 pt-8 md:grid-cols-[1.15fr_1fr] md:gap-10 md:pb-24 md:pt-12">
        <Reveal>
          <SectionEyebrow pill>🧭 404 · Not found</SectionEyebrow>
          <h1 className="mt-6 text-[clamp(3rem,7vw,6.25rem)] font-extrabold leading-[0.95] tracking-[-0.06em]">
            Oops,
            <br />
            you’re lost.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
            The page you’re looking for doesn’t exist, got moved, or maybe I
            haven’t built it yet. Let’s get you back somewhere useful.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PillButton href="/">Back to home</PillButton>
            <PillButton href="/projects" variant="outline">
              See my projects
            </PillButton>
          </div>
        </Reveal>
        <div className="mx-auto w-full max-w-[400px]">
          <AvatarCard words={["Lost", "Search", "Wander", "Return"]} />
        </div>
      </section>
    </main>
  );
}
