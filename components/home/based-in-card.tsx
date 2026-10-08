import { MapPin } from 'lucide-react';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';

export function BasedInCard() {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-line bg-surface/50 p-6">
      {/* Faint dotted texture standing in for the map in the mockup. */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-1/2 opacity-60 [background-image:radial-gradient(#D9D6CE_1px,transparent_1.5px)] [background-size:9px_9px] [mask-image:linear-gradient(to_left,black,transparent)]"
      />
      <SectionEyebrow as="h2" icon={MapPin} className="relative">
        Based in
      </SectionEyebrow>
      <p className="relative mt-5 text-xl font-bold tracking-tight">
        Indonesia <span className="emoji">🇮🇩</span>
      </p>
    </article>
  );
}
