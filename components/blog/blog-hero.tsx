import { NotebookPen } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export function BlogHero({ count }: { count: number }) {
  return (
    <Reveal className="grid gap-6 pb-10 pt-8 md:grid-cols-[1fr_auto] md:items-end md:pb-12 md:pt-14">
      <div>
        <SectionEyebrow pill>📝 Blog</SectionEyebrow>
        <h1 className="mt-6 text-[clamp(2.9rem,6.4vw,5.5rem)] font-extrabold leading-[0.98] tracking-[-0.06em]">
          Thoughts &amp; Writing
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted md:text-lg md:leading-8">
          Notes on things I’ve learned, projects I’ve built,
          <br className="hidden sm:block" /> and experiments along the way.
        </p>
      </div>
      {count > 0 && (
        <p className="text-sm text-muted md:pb-2">
          {count} {count === 1 ? "post" : "posts"}
        </p>
      )}
    </Reveal>
  );
}
