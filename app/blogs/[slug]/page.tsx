import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3 } from "lucide-react";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl, pageMetadata, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getBlogPosts()).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost((await params).slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blogs/${post.slug}`,
    image: post.cover ? { url: post.cover, alt: post.coverAlt } : null,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost((await params).slug);
  if (!post) notFound();
  const url = absoluteUrl(`/blogs/${post.slug}`);
  const author = { "@type": "Person", name: site.name, url: site.url };
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: absoluteUrl(post.cover ?? site.ogImage.url),
    author,
    publisher: author,
    inLanguage: "en",
  };
  return (
    <main
      id="main"
      className="mx-auto max-w-7xl px-5 pb-24 pt-9 md:px-12 md:pt-12 lg:px-16"
    >
      <JsonLd data={jsonLd} />
      <Link
        href="/blogs"
        className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to Blog
      </Link>
      <div
        className={`mt-7 ${post.headings.length ? "grid gap-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-16 xl:gap-24" : "max-w-3xl"}`}
      >
        <article className="min-w-0">
          <header className="mb-12 border-b border-line pb-9">
            <h1 className="max-w-3xl text-[clamp(2.3rem,4.2vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.055em]">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">
              {post.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted">
              <time dateTime={post.date}>{post.dateLabel}</time>
              <span className="inline-flex items-center gap-2">
                <Clock3 size={13} aria-hidden="true" />
                {post.readingMinutes} min read
              </span>
            </div>
          </header>
          {post.headings.length > 0 && (
            <details className="mb-10 rounded-2xl border border-line p-5 lg:hidden">
              <summary className="cursor-pointer text-sm font-medium">
                On this page
              </summary>
              <nav aria-label="Article sections" className="mt-4">
                <ul className="space-y-2">
                  {post.headings.map((heading) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className="flex min-h-11 items-center py-1 text-sm text-muted hover:text-ink"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </details>
          )}
          <div
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div className="mt-16 border-t border-line pt-7">
            <Link
              href="/blogs"
              className="inline-flex min-h-11 items-center gap-2 text-sm"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              All writing
            </Link>
          </div>
        </article>
        {post.headings.length > 0 && (
          <aside className="hidden lg:block">
            <nav
              aria-label="On this page"
              className="sticky top-28 border-l border-line pl-5"
            >
              <p className="mb-5 text-[10px] font-medium uppercase tracking-wider text-muted">
                On this page
              </p>
              <ul className="space-y-4">
                {post.headings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className="block text-xs leading-5 text-muted transition-colors hover:text-ink"
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}
      </div>
    </main>
  );
}
