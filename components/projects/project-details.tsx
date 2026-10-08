import { CircleCheck } from 'lucide-react';
import type { Project } from '@/lib/projects';
import { Reveal } from '@/components/ui/reveal';

export function ProjectDetails({ project }: { project: Project }) {
  return (
    <section className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr] lg:gap-20 lg:py-20">
      <Reveal>
        {/* Markdown from content/projects/<slug>.md, authored in this repo. */}
        <div className="project-prose" dangerouslySetInnerHTML={{ __html: project.html }} />
      </Reveal>
      {project.features.length > 0 && (
        <Reveal delay={0.08}>
          <aside aria-labelledby="key-features" className="rounded-3xl border border-line p-7 lg:sticky lg:top-8">
            <h2 id="key-features" className="text-lg font-bold tracking-tight">
              Key Features
            </h2>
            <ul className="mt-5 space-y-3.5">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm leading-6">
                  <CircleCheck size={18} strokeWidth={1.75} className="mt-0.5 shrink-0" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      )}
    </section>
  );
}
