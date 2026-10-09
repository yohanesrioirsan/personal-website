import type { Metadata } from "next";
import { EyeTrackingAvatar } from "@/components/eye-tracking-avatar";
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
      <section className="flex flex-col items-center pb-16 pt-8 text-center md:pb-24 md:pt-12">
        <Reveal className="flex flex-col items-center">
          <SectionEyebrow pill>🧭 404 · Not found</SectionEyebrow>
          <div className="relative mt-6">
            {/* Peeks over the heading's top-left corner, sticker-style. */}
            <div className="absolute -left-10 -top-14 z-10 w-28 -rotate-12 md:-left-28 md:-top-20 md:w-44">
              <EyeTrackingAvatar />
            </div>
            <h1 className="text-[clamp(3rem,7vw,6.25rem)] font-extrabold leading-[0.95] tracking-[-0.06em]">
              Oops,
              <br />
              you’re lost.
            </h1>
          </div>
          <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
            The page you’re looking for doesn’t exist, got moved, or maybe I
            haven’t built it yet. Let’s get you back somewhere useful.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PillButton href="/">Back to home</PillButton>
            <PillButton href="/projects" variant="outline">
              See my projects
            </PillButton>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
