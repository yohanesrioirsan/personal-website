import { Clock3 } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';

export function BlogDate({ post }: { post: BlogPost }) {
  return (
    <time dateTime={post.date} className="text-xs text-muted">
      {post.dateLabel}
    </time>
  );
}

export function BlogReadTime({ post, className = '' }: { post: BlogPost; className?: string }) {
  return (
    <p className={`flex items-center gap-1.5 text-xs text-muted ${className}`}>
      <Clock3 size={13} aria-hidden="true" />
      {post.readingMinutes} min read
    </p>
  );
}
