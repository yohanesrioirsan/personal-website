import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { getProjects } from "@/lib/projects";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static"; // required for `output: 'export'`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();
  const latestPost = posts[0]?.date;

  return [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/about"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/projects"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/blogs"), changeFrequency: "weekly", priority: 0.8, ...(latestPost ? { lastModified: latestPost } : {}) },
    ...getProjects().map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blogs/${post.slug}`),
      lastModified: post.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
