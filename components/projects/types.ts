import type { Project } from '@/lib/projects';

/** Project without the rendered body, safe and small enough to pass to client components. */
export type ProjectSummary = Omit<Project, 'html'>;

export function toSummary({ html: _html, ...summary }: Project): ProjectSummary {
  return summary;
}
