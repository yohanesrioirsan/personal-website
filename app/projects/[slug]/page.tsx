import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollaborationCta } from "@/components/about/collaboration-cta";
import { ProjectDetails } from "@/components/projects/project-details";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { ProjectHeader } from "@/components/projects/project-header";
import { ProjectPreview } from "@/components/projects/project-preview";
import { toSummary } from "@/components/projects/types";
import { Reveal } from "@/components/ui/reveal";
import { getProject, getProjects } from "@/lib/projects";
import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl, pageMetadata, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

// One static page per markdown file; unknown slugs 404 (required for `output: 'export'`).
export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  const cover = project.gallery[0];
  return pageMetadata({
    title: project.name,
    description: project.description,
    path: `/projects/${project.slug}`,
    image: cover ? { url: cover.src, alt: cover.alt } : null,
    tags: project.tags,
  });
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const summary = toSummary(project);
  const url = absoluteUrl(`/projects/${project.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    url,
    ...(project.url ? { sameAs: project.url } : {}),
    ...(project.gallery[0] ? { image: absoluteUrl(project.gallery[0].src) } : {}),
    ...(project.year ? { dateCreated: project.year } : {}),
    keywords: [...project.tags, ...project.stack].join(", "),
    creator: { "@type": "Person", name: site.name, url: site.url },
  };

  return (
    <main id="main" className="mx-auto max-w-7xl px-5 pt-4 md:px-12 lg:px-16">
      <JsonLd data={jsonLd} />
      <ProjectHeader project={summary} />
      <Reveal className="mt-12">
        {project.gallery.length > 0 ? (
          <ProjectGallery images={project.gallery} name={project.name} />
        ) : (
          <ProjectPreview
            project={summary}
            sizes="(max-width: 1280px) 95vw, 1150px"
          />
        )}
      </Reveal>
      <ProjectDetails project={project} />
      <CollaborationCta />
    </main>
  );
}
