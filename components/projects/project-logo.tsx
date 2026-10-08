import Image from 'next/image';
import type { ProjectSummary } from '@/components/projects/types';

const sizes = { sm: 'h-10 w-10 rounded-xl text-lg', md: 'h-12 w-12 rounded-2xl text-xl', lg: 'h-14 w-14 rounded-2xl text-2xl' };

/** Decorative: the project name is always shown next to it. */
export function ProjectLogo({ project, size = 'md' }: { project: Pick<ProjectSummary, 'name' | 'logo' | 'accent'>; size?: keyof typeof sizes }) {
  if (project.logo) {
    return (
      <span className={`relative block shrink-0 overflow-hidden ${sizes[size]}`}>
        <Image src={project.logo} alt="" fill sizes="56px" className="object-cover" />
      </span>
    );
  }
  // Pick readable text on the accent color.
  const hex = project.accent.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) || 0);
  const light = (r * 299 + g * 587 + b * 114) / 1000 > 150;
  return (
    <span
      aria-hidden="true"
      style={{ backgroundColor: project.accent }}
      className={`flex shrink-0 items-center justify-center font-extrabold ${light ? 'text-ink' : 'text-white'} ${sizes[size]}`}
    >
      {project.name.charAt(0).toUpperCase()}
    </span>
  );
}
