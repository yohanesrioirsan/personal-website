import Link from 'next/link';
import { UserRound } from 'lucide-react';
import { CurvedArrow } from '@/components/ui/doodles';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';

export function AboutCard() {
  return (
    <article className="relative flex flex-col rounded-3xl bg-ink p-8 text-ivory md:p-9">
      <SectionEyebrow as="h2" icon={UserRound} tone="inverted">
        About me
      </SectionEyebrow>
      <p className="mt-8 text-[clamp(1.85rem,3vw,2.4rem)] font-bold leading-[1.08] tracking-[-0.04em]">
        I build digital things that people actually use.
      </p>
      <p className="mt-6 max-w-sm text-[15px] leading-7 text-ivory/75">
        I’m a software engineer from Indonesia who enjoys turning ideas into real products. I work on web apps, tools, and
        random projects that solve real problems.
      </p>
      <div className="mt-auto flex items-end justify-between gap-4 pt-8">
        <Link href="/about" className="text-sm underline decoration-ivory/30 underline-offset-4 hover:decoration-ivory">
          More about me
        </Link>
        <p aria-hidden="true" className="flex items-end gap-1 font-hand text-xl text-ivory/90">
          Always learning, always building.
          <CurvedArrow direction="right" className="h-7 w-7" />
        </p>
      </div>
    </article>
  );
}
