'use client';

import { useState } from 'react';
import { ProjectListCard } from '@/components/projects/project-list-card';
import type { ProjectSummary } from '@/components/projects/types';

export function ProjectsFilter({ projects, categories }: { projects: ProjectSummary[]; categories: readonly string[] }) {
  const [active, setActive] = useState<string>('All');
  // Only offer categories that at least one project uses.
  const options = ['All', ...categories.filter((c) => projects.some((p) => (p.categories as string[]).includes(c)))];
  const visible = active === 'All' ? projects : projects.filter((p) => (p.categories as string[]).includes(active));

  return (
    <>
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={active === option}
            onClick={() => setActive(option)}
            className={`min-h-11 rounded-full px-6 text-sm transition-colors ${
              active === option ? 'bg-ink text-ivory' : 'border border-line bg-surface/40 hover:border-ink'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length} {visible.length === 1 ? 'project' : 'projects'} shown
      </p>
      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {visible.map((project) => (
          <li key={project.slug} className="flex [&>*]:w-full">
            <ProjectListCard project={project} />
          </li>
        ))}
      </ul>
    </>
  );
}
