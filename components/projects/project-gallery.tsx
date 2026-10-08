'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { ProjectImage } from '@/lib/projects';

const MAX_THUMBS = 4;

/** Large screenshot with selectable thumbnails. The last thumbnail shows "+N" when there are more images. */
export function ProjectGallery({ images, name }: { images: ProjectImage[]; name: string }) {
  const [index, setIndex] = useState(0);
  const current = images[index];
  if (!current) return null;
  const thumbs = images.slice(0, MAX_THUMBS);
  const hidden = images.length - thumbs.length;

  return (
    <section aria-label={`${name} screenshots`}>
      <figure className="rounded-3xl bg-ink p-2 md:p-3">
        <div className="relative aspect-[1920/951] overflow-hidden rounded-2xl">
          <Image key={current.src} src={current.src} alt={current.alt} fill priority={index === 0} sizes="(max-width: 1280px) 95vw, 1150px" className="object-cover object-top" />
        </div>
        <figcaption className="sr-only" aria-live="polite">
          Screenshot {index + 1} of {images.length}
        </figcaption>
      </figure>
      {images.length > 1 && (
        <ul className="mt-3 grid grid-cols-4 gap-2 md:gap-3">
          {thumbs.map((image, i) => {
            const overflow = i === thumbs.length - 1 && hidden > 0;
            // The "+N" tile opens the first image that is not shown as a thumbnail.
            const target = overflow ? MAX_THUMBS : i;
            const selected = overflow ? index >= MAX_THUMBS - 1 : index === i;
            return (
              <li key={image.src}>
                <button
                  type="button"
                  onClick={() => setIndex(target)}
                  aria-pressed={selected}
                  aria-label={overflow ? `Show ${hidden} more screenshots` : `Show screenshot ${i + 1}: ${image.alt}`}
                  className={`relative block aspect-[16/9] w-full overflow-hidden rounded-xl bg-ink ring-offset-2 ring-offset-ivory transition ${
                    selected ? 'ring-2 ring-ink' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image src={image.src} alt="" fill sizes="(max-width: 768px) 25vw, 280px" className="object-cover object-top" />
                  {overflow && (
                    <span className="absolute inset-0 flex items-center justify-center bg-ink/70 text-lg font-semibold text-ivory">+{hidden}</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
