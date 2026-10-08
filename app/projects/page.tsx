import type { Metadata } from "next";
import { CollaborationCta } from "@/components/about/collaboration-cta";
import { ProjectsFilter } from "@/components/projects/projects-filter";
import { ProjectsHero } from "@/components/projects/projects-hero";
import { toSummary } from "@/components/projects/types";
import { PROJECT_CATEGORIES, getProjects } from "@/lib/projects";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description:
    "Projects, tools, and random ideas built by Yohanes, a software engineer from Indonesia.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main id="main" className="mx-auto max-w-7xl px-5 md:px-12 lg:px-16">
      <ProjectsHero />
      <section aria-label="Project list" className="pb-3">
        <ProjectsFilter
          projects={getProjects().map(toSummary)}
          categories={PROJECT_CATEGORIES}
        />
      </section>
      <CollaborationCta />
    </main>
  );
}
