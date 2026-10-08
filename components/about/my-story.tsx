import {
  ScatteredPhotoCollage,
  type CollageNote,
  type CollagePhoto,
} from "@/components/about/scattered-photo-collage";
import { CollabLink } from "@/components/ui/collab-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

// Replace these files in /public/images/about/ with real photos; placeholders render until then.
const photos: CollagePhoto[] = [
  {
    src: "/images/about/workspace.webp",
    alt: "Yohanes’s current workspace and coding desk",
    label: "Workspace",
    className: "left-[20%] top-0 w-[56%] aspect-[3/4]",
    rotate: "rotate-1 md:rotate-3",
  },
  {
    src: "/images/about/indonesia.webp",
    alt: "A city view in Indonesia",
    label: "Indonesia",
    className: "left-0 bottom-[3%] w-[40%] aspect-[4/3]",
    rotate: "-rotate-2 md:-rotate-6",
  },
  {
    src: "/images/about/desk-detail.webp",
    alt: "Close-up of a laptop keyboard",
    label: "Desk detail",
    className: "right-0 bottom-[10%] w-[34%] aspect-square",
    rotate: "rotate-2 md:rotate-6",
  },
];

const notes: CollageNote[] = [
  {
    text: "My current workspace",
    className: "right-0 top-[6%] w-[20%]",
    arrow: "left",
  },
  {
    text: "Indonesia, always home",
    className: "left-0 top-[46%] w-[19%]",
    arrow: "down",
  },
];

export function MyStory() {
  return (
    <section
      id="story"
      className="grid scroll-mt-8 items-center gap-14 py-24 lg:grid-cols-[45fr_55fr] lg:gap-16 lg:py-32"
    >
      <Reveal>
        <SectionEyebrow>01. My story</SectionEyebrow>
        <h2 className="mt-5 text-[clamp(2.6rem,5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.055em]">
          From curiosity
          <br />
          to building
          <br />
          real stuff.
        </h2>
        <p className="mt-7 max-w-md text-base leading-7 text-muted">
          I started my journey with simple curiosity, just exploring how things
          work. Over time, it turned into a passion for building useful
          products, learning new tech, and solving real problems.
        </p>
        <p className="mt-5 max-w-md text-base leading-7 text-muted">
          Now, I spend most of my time working on web apps, tools, and side
          projects. I enjoy the process of turning ideas into something people
          can actually use.
        </p>
        <div className="mt-8">
          <CollabLink />
        </div>
      </Reveal>
      <ScatteredPhotoCollage photos={photos} notes={notes} />
    </section>
  );
}
