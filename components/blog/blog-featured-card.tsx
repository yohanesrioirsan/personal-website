import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BlogCover } from '@/components/blog/blog-cover';
import { BlogDate, BlogReadTime } from '@/components/blog/blog-meta';
import type { BlogPost } from '@/lib/blog';

export function BlogFeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/50 transition-colors hover:border-[#BDBAB2]"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-line lg:aspect-auto lg:min-h-[280px] lg:flex-1">
        <BlogCover post={post} sizes="(max-width: 1024px) 95vw, 640px" priority />
      </div>
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-ivory">Latest</span>
          <BlogDate post={post} />
        </div>
        <div className="mt-4 flex items-start justify-between gap-5">
          <h2 className="max-w-lg text-[clamp(1.6rem,2.6vw,2.1rem)] font-bold leading-[1.1] tracking-[-0.04em]">{post.title}</h2>
          <ArrowUpRight
            size={22}
            aria-hidden="true"
            className="mt-1 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
        <p className="mt-3 line-clamp-3 max-w-xl text-sm leading-6 text-muted md:text-base md:leading-7">{post.description}</p>
        <BlogReadTime post={post} className="mt-5" />
      </div>
    </Link>
  );
}
