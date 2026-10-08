import { FolderOpen } from 'lucide-react';
import { ProjectCard } from '@/components/home/project-card';
import { PillButton } from '@/components/ui/pill-button';
import { Reveal } from '@/components/ui/reveal';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { content } from '@/data/content';
import { getProjects } from '@/lib/projects';
import { toSummary } from '@/components/projects/types';

export function ProjectsSection() {
  // `featured: true` in content/projects/<slug>.md marks home candidates; only the first two (by `order`) show,
  // since "View all projects" links to the full list.
  const projects = getProjects().filter((project) => project.featured).slice(0, 2).map(toSummary);
  return (
    <section id="projects" className="scroll-mt-8 pb-3 pt-20 md:pt-24">
      <Reveal className="grid gap-6 px-1 md:grid-cols-2 md:items-end md:px-8">
        <div>
          <SectionEyebrow icon={FolderOpen}>Projects</SectionEyebrow>
          <h2 className="mt-4 text-[clamp(2.3rem,4.2vw,3.25rem)] font-extrabold leading-[1.02] tracking-[-0.05em]">
            Some things
            <br />
            I’ve built.
          </h2>
        </div>
        <div className="md:justify-self-end">
          <p className="max-w-xs text-sm leading-6 text-muted">A few projects I’ve worked on. From useful tools to just for fun stuff.</p>
          {content.projectsUrl && (
            <PillButton href={content.projectsUrl} variant="outline" size="sm" className="mt-4">
              View all projects
            </PillButton>
          )}
        </div>
      </Reveal>
      <div className="mt-8 grid gap-3 md:grid-cols-[1.1fr_1fr]">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.08} className="flex [&>*]:w-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
