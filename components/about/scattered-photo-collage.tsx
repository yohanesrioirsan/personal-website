import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { CurvedArrow } from "@/components/ui/doodles";
import { Reveal } from "@/components/ui/reveal";

export type CollagePhoto = {
  /** Path under /public, e.g. /images/about/workspace.webp */
  src: string;
  alt: string;
  /** Short label shown on the placeholder while the file is missing. */
  label: string;
  /** Absolute position + width + aspect ratio inside the collage, in % so it scales. */
  className: string;
  /** Tailwind rotation classes (use smaller angles below md). */
  rotate?: string;
  hideOnMobile?: boolean;
};

export type CollageNote = {
  text: string;
  className: string;
  arrow?: "up" | "down" | "left" | "right";
};

// Build-time check (this is a server component and the site is statically exported):
// drop a file into /public and it replaces the placeholder on the next build.
const hasFile = (src: string) =>
  existsSync(path.join(process.cwd(), "public", src));

function PhotoFrame({ photo, sizes }: { photo: CollagePhoto; sizes: string }) {
  return (
    // On hover the photo lifts, straightens, and grows slightly; the image inside zooms a touch.
    // `motion-safe:` keeps it static for reduced-motion users. Rotation lives here (not on Reveal) because
    // Motion writes `transform` on the Reveal wrapper.
    <div
      className={`group h-full w-full rounded-2xl border border-line bg-surface p-1.5 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_22px_45px_-24px_rgba(17,17,17,0.4)] motion-safe:hover:-translate-y-1.5 motion-safe:hover:rotate-0 motion-safe:hover:scale-[1.04] ${photo.rotate ?? ""}`}
    >
      {hasFile(photo.src) ? (
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.06]"
          />
        </div>
      ) : (
        <div
          role="img"
          aria-label={`Photo placeholder: ${photo.alt}`}
          className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#D6D3CA] bg-[#EFEDE7] p-3 text-center text-muted"
        >
          <ImageIcon size={20} strokeWidth={1.4} aria-hidden="true" />
          <span className="text-[11px] font-medium uppercase tracking-[0.12em]">
            {photo.label}
          </span>
          <span className="hidden text-[10px] sm:block">{photo.src}</span>
        </div>
      )}
    </div>
  );
}

export function ScatteredPhotoCollage({
  photos,
  notes = [],
  className = "aspect-[10/11]",
}: {
  photos: CollagePhoto[];
  notes?: CollageNote[];
  /** Sets the collage's own aspect ratio so it never causes layout shift. */
  className?: string;
}) {
  return (
    <div className={`relative mx-auto w-full max-w-xl ${className}`}>
      {photos.map((photo, index) => (
        <Reveal
          key={photo.src}
          delay={index * 0.08}
          className={`absolute hover:z-20 ${photo.className} ${photo.hideOnMobile ? "hidden sm:block" : ""}`}
        >
          <PhotoFrame photo={photo} sizes="(max-width: 768px) 60vw, 360px" />
        </Reveal>
      ))}
      {notes.map((note) => (
        <p
          key={note.text}
          aria-hidden="true"
          className={`absolute z-10 hidden font-hand text-xl leading-tight text-ink sm:block md:text-2xl ${note.className}`}
        >
          {note.arrow === "down" || note.arrow === "right" ? (
            <>
              {note.text}
              <CurvedArrow direction={note.arrow} className="mt-1 h-8 w-8" />
            </>
          ) : (
            <>
              {note.arrow && (
                <CurvedArrow direction={note.arrow} className="mb-1 h-8 w-8" />
              )}
              {note.text}
            </>
          )}
        </p>
      ))}
    </div>
  );
}
