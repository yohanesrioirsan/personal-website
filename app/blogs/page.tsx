import type { Metadata } from "next";
import { CollaborationCta } from "@/components/about/collaboration-cta";
import { BlogCompactCard } from "@/components/blog/blog-compact-card";
import { BlogFeaturedCard } from "@/components/blog/blog-featured-card";
import { BlogHero } from "@/components/blog/blog-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { getBlogPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Thoughts & Writing",
  description:
    "Notes on things I’ve learned, projects I’ve built, and experiments along the way.",
  path: "/blogs",
});

/** Posts shown beside the featured one; the rest go to "More writing". */
const SIDE_COUNT = 2;

export default async function BlogsPage() {
  const posts = await getBlogPosts(); // newest first
  const [featured, ...rest] = posts;
  const side = rest.slice(0, SIDE_COUNT);
  const more = rest.slice(SIDE_COUNT);

  return (
    <main id="main" className="mx-auto max-w-7xl px-5 md:px-12 lg:px-16">
      <BlogHero count={posts.length} />

      {featured ? (
        <>
          <section
            aria-label="Latest posts"
            className={`grid gap-3 ${side.length ? "lg:grid-cols-[1.25fr_1fr]" : ""}`}
          >
            <Reveal className="flex [&>*]:w-full">
              <BlogFeaturedCard post={featured} />
            </Reveal>
            {side.length > 0 && (
              <ul className="grid gap-3 lg:grid-rows-2">
                {side.map((post, index) => (
                  <li key={post.slug} className="flex [&>*]:w-full">
                    <Reveal
                      delay={0.06 * (index + 1)}
                      className="flex [&>*]:w-full"
                    >
                      <BlogCompactCard post={post} />
                    </Reveal>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {more.length > 0 && (
            <section aria-labelledby="more-writing" className="pt-16 md:pt-20">
              <Reveal>
                <SectionEyebrow as="h2" className="px-1">
                  <span id="more-writing">More writing</span>
                </SectionEyebrow>
              </Reveal>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {more.map((post, index) => (
                  <li key={post.slug} className="flex [&>*]:w-full">
                    <Reveal
                      delay={0.04 * (index % 2)}
                      className="flex [&>*]:w-full"
                    >
                      <BlogCompactCard post={post} headingLevel="h3" />
                    </Reveal>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      ) : (
        <p className="border-t border-line py-12 text-muted">
          No posts yet. Check back for my first write-up.
        </p>
      )}

      <div className="pt-16 md:pt-20">
        <CollaborationCta />
      </div>
    </main>
  );
}
