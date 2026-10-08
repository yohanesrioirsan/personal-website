import { AboutCard } from '@/components/home/about-card';
import { BasedInCard } from '@/components/home/based-in-card';
import { CurrentlyCard } from '@/components/home/currently-card';
import { TechStackCard } from '@/components/home/tech-stack-card';
import { Reveal } from '@/components/ui/reveal';

export function HomeOverview() {
  return (
    <section aria-label="Overview" className="grid gap-3 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.8fr]">
      <Reveal className="flex md:col-span-2 lg:col-span-1 [&>*]:w-full">
        <AboutCard />
      </Reveal>
      <Reveal delay={0.08} className="flex [&>*]:w-full">
        <TechStackCard />
      </Reveal>
      <Reveal delay={0.16} className="flex flex-col gap-3">
        <CurrentlyCard />
        <BasedInCard />
      </Reveal>
    </section>
  );
}
