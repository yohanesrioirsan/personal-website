import Link from 'next/link';
import { BlogCover } from '@/components/blog/blog-cover';
import { BlogDate, BlogReadTime } from '@/components/blog/blog-meta';
import type { BlogPost } from '@/lib/blog';

export function BlogCompactCard({ post, headingLevel = 'h2' }: { post: BlogPost; headingLevel?: 'h2' | 'h3' }) {
  const Heading = headingLevel;
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group flex h-full items-start gap-4 rounded-3xl border border-line bg-surface/50 p-3 transition-colors hover:border-muted/50 sm:gap-5 sm:p-4"
    >
      <div className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-2xl border border-line sm:w-40">
        <BlogCover post={post} sizes="160px" />
      </div>
      <div className="min-w-0 flex-1 py-1 pr-1">
        <BlogDate post={post} />
        <Heading className="mt-1.5 text-base font-bold leading-snug tracking-[-0.02em] sm:text-lg">{post.title}</Heading>
        <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-muted">{post.description}</p>
        <BlogReadTime post={post} className="mt-2.5" />
      </div>
    </Link>
  );
}
