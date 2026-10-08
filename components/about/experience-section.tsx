import { ExperienceTimelineItem } from '@/components/about/experience-timeline-item';
import { Reveal } from '@/components/ui/reveal';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { experiences } from '@/data/experiences';

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-8 border-t border-line pb-24 pt-20 lg:pb-32">
      <Reveal className="grid gap-6 md:grid-cols-2 md:items-end">
        <div>
          <SectionEyebrow>02. Experience</SectionEyebrow>
          <h2 className="mt-5 text-[clamp(2.6rem,5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.055em]">
            The journey
            <br />
            so far.
          </h2>
        </div>
        <p className="max-w-md text-base leading-7 text-muted md:justify-self-end">
          Companies and experiences that have shaped my journey as a software engineer. Each place taught me something
          valuable, from technical skills to how real-world teams work.
        </p>
      </Reveal>
      <ol className="relative mt-16 before:absolute before:bottom-0 before:left-[5px] before:top-2 before:w-px before:bg-line">
        {experiences.map((experience) => (
          <ExperienceTimelineItem key={experience.slug} experience={experience} />
        ))}
      </ol>
    </section>
  );
}
