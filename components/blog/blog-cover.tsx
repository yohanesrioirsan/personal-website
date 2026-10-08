import Image from 'next/image';
import { NotebookPen } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';

/** Fills its parent (give the parent a size/aspect ratio). Falls back to a quiet tile when a post has no cover. */
export function BlogCover({ post, sizes, priority = false }: { post: BlogPost; sizes: string; priority?: boolean }) {
  if (!post.cover) {
    return (
      <div aria-hidden="true" className="flex h-full w-full items-center justify-center bg-[#EFEDE7] text-muted">
        <NotebookPen size={26} strokeWidth={1.4} />
      </div>
    );
  }
  return (
    <Image
      src={post.cover}
      alt=""
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
    />
  );
}
