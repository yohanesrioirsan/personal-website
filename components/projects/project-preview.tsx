import Image from 'next/image';
import { illustrativePreviews } from '@/components/home/project-previews';
import { ProjectLogo } from '@/components/projects/project-logo';
import type { ProjectSummary } from '@/components/projects/types';

/** 16:10 preview: first gallery screenshot, else an illustration, else a branded placeholder. */
export function ProjectPreview({ project, sizes }: { project: ProjectSummary; sizes: string }) {
  const dark = project.theme === 'dark';
  const cover = project.gallery[0];
  const Illustration = illustrativePreviews[project.slug];

  if (cover) {
    return (
      <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl border ${dark ? 'border-ivory/10' : 'border-line'}`}>
        <Image src={cover.src} alt="" fill sizes={sizes} className="object-cover object-center" />
      </div>
    );
  }
  if (Illustration) return <Illustration className="aspect-[16/10] h-auto" />;
  return (
    <div
      aria-hidden="true"
      className={`flex aspect-[16/10] flex-col items-center justify-center gap-3 rounded-2xl ${dark ? 'bg-ivory/5' : 'bg-sunken'}`}
    >
      <ProjectLogo project={project} size="lg" />
      <span className={`text-xs uppercase tracking-[0.14em] ${dark ? 'text-ivory/55' : 'text-muted'}`}>Preview coming soon</span>
    </div>
  );
}
