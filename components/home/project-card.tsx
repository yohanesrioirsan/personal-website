import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { illustrativePreviews } from '@/components/home/project-previews';
import { ProjectLogo } from '@/components/projects/project-logo';
import { ProjectPreview } from '@/components/projects/project-preview';
import type { ProjectSummary } from '@/components/projects/types';

export function ProjectCard({ project }: { project: ProjectSummary }) {
  const dark = project.theme === 'dark';
  const Illustration = illustrativePreviews[project.slug];
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group flex h-full flex-col rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1 md:p-8 ${
        dark ? 'bg-ink text-ivory' : 'border border-line bg-surface/50 text-ink'
      }`}
    >
      <div className="flex items-start gap-4">
        <ProjectLogo project={project} size="sm" />
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-bold tracking-tight">{project.name}</h3>
          <p className={`mt-1.5 max-w-xs text-sm leading-6 ${dark ? 'text-ivory/75' : 'text-muted'}`}>{project.description}</p>
        </div>
        <ArrowUpRight
          size={20}
          aria-hidden="true"
          className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
      {/* Home keeps the compact illustrations from the mockup; other projects fall back to their preview. */}
      <div className="mt-auto pt-8">
        {Illustration ? <Illustration className="h-44" /> : <ProjectPreview project={project} sizes="(max-width: 768px) 90vw, 560px" />}
      </div>
    </Link>
  );
}
