import { Reveal } from '@/components/ui/reveal';
import { content } from '@/data/content';

export function AboutStats() {
  return (
    <Reveal>
      <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        {content.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse rounded-2xl border border-line px-5 py-6 md:px-7">
            <dt className="mt-1.5 text-xs text-muted">{stat.label}</dt>
            <dd className="text-2xl font-bold tracking-tight md:text-3xl">
              {stat.value}
              {stat.flag && <span className="emoji ml-2 text-xl">{stat.flag}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
