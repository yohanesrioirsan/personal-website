import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ProjectLogo } from '@/components/projects/project-logo';
import type { ProjectSummary } from '@/components/projects/types';
import { BrandIcon } from '@/components/ui/brand-icon';
import { PillButton } from '@/components/ui/pill-button';
import { Reveal } from '@/components/ui/reveal';

export function ProjectHeader({ project }: { project: ProjectSummary }) {
  const live = project.status.toLowerCase() === 'live';
  const meta = [
    ['Type', project.type],
    ['Year', project.year],
    ['Tech Stack', project.stack.join(', ')],
  ].filter((row): row is [string, string] => !!row[1]);

  return (
    <Reveal>
      <Link href="/projects" className="inline-flex items-center gap-2 py-2 text-sm text-muted hover:text-ink">
        <ArrowLeft size={16} aria-hidden="true" /> Back to Projects
      </Link>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div>
          <div className="flex items-start gap-5">
            <ProjectLogo project={project} size="lg" />
            <div>
              <h1 className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.05em]">{project.name}</h1>
              <p className="mt-3 max-w-xl text-base leading-7 text-muted md:text-lg">{project.description}</p>
            </div>
          </div>
          {(project.url || project.sourceUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.url && (
                <PillButton href={project.url} size="sm">
                  Visit Site
                </PillButton>
              )}
              {project.sourceUrl && (
                <PillButton href={project.sourceUrl} size="sm" variant="outline">
                  <BrandIcon name="github" className="h-4 w-4" />
                  View Source
                </PillButton>
              )}
            </div>
          )}
        </div>
        <dl className="grid min-w-[260px] grid-cols-[auto_1fr] content-start gap-x-10 gap-y-4 border-line text-sm lg:border-l lg:pl-10">
          {meta.map(([label, value]) => (
            <div key={label} className="contents">
              <dt className="text-muted">{label}</dt>
              <dd className="max-w-[14rem]">{value}</dd>
            </div>
          ))}
          <dt className="text-muted">Status</dt>
          <dd className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${live ? 'bg-[#22A55B]' : 'bg-muted'}`} aria-hidden="true" />
            {project.status}
          </dd>
        </dl>
      </div>
    </Reveal>
  );
}
