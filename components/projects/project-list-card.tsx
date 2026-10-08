import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectLogo } from "@/components/projects/project-logo";
import { ProjectPreview } from "@/components/projects/project-preview";
import type { ProjectSummary } from "@/components/projects/types";

export function ProjectListCard({ project }: { project: ProjectSummary }) {
  const dark = project.theme === "dark";

  console.log(project);
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group flex h-full flex-col rounded-3xl p-4 transition-transform duration-300 hover:-translate-y-1 md:p-5 ${
        dark
          ? "bg-ink/90 text-ivory"
          : "border border-line bg-surface/50 text-ink"
      }`}
    >
      <ProjectPreview
        project={project}
        sizes="(max-width: 768px) 90vw, 600px"
      />
      <div className="flex flex-1 flex-col px-2 pb-2 pt-6 md:px-3">
        <div className="flex items-start gap-4">
          <ProjectLogo project={project} />
          <div className="min-w-0 flex-1">
            <h2 className="text-xl font-bold tracking-tight">{project.name}</h2>
            <p
              className={`mt-1.5 max-w-md text-sm leading-6 ${dark ? "text-[#C9C6BE]" : "text-muted"}`}
            >
              {project.description}
            </p>
          </div>
          <ArrowUpRight
            size={20}
            aria-hidden="true"
            className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
        {project.tags.length > 0 && (
          <ul
            className="mt-auto flex flex-wrap gap-2 pt-5 md:pl-16"
            aria-label="Tags"
          >
            {project.tags.map((tag) => (
              <li
                key={tag}
                className={`rounded-full px-3 py-1.5 text-xs ${dark ? "bg-white/10 text-[#E4E1D9]" : "border border-line text-muted"}`}
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
