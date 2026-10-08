import { Layers } from 'lucide-react';
import { BrandIcon } from '@/components/ui/brand-icon';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { content } from '@/data/content';

export function TechStackCard() {
  return (
    <article className="rounded-3xl border border-line bg-surface/50 p-5 md:p-6">
      <SectionEyebrow as="h2" icon={Layers} className="px-2 pt-2">
        Tech stack
      </SectionEyebrow>
      <ul className="mt-5 grid grid-cols-3 gap-2.5">
        {content.techStack.map((tech) => (
          <li
            key={tech.name}
            className="flex aspect-[1/1.05] flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-ivory/60 px-1 text-center"
          >
            <BrandIcon name={tech.icon} colored className="h-8 w-8" />
            <span className="text-xs">{tech.name}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
