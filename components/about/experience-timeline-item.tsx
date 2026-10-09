import { ScatteredPhotoCollage } from "@/components/about/scattered-photo-collage";
import { PillButton } from "@/components/ui/pill-button";
import { Reveal } from "@/components/ui/reveal";
import type { Experience } from "@/data/experiences";

export function ExperienceTimelineItem({
  experience,
}: {
  experience: Experience;
}) {
  const hasPhotos = experience.photos.length > 0;
  return (
    <li
      className={`relative grid gap-12 pb-16 pl-10 last:pb-0 lg:gap-16 lg:pl-14 ${hasPhotos ? "lg:grid-cols-[1fr_1.1fr]" : ""}`}
    >
      {/* Milestone on the timeline line. */}
      <Reveal className="absolute left-0 top-1.5">
        <span className="block h-[11px] w-[11px] rounded-full bg-ink ring-4 ring-ivory" />
      </Reveal>
      <Reveal>
        <article>
          <p className="text-sm text-muted">
            {experience.period}
            {experience.location && <> · {experience.location}</>}
          </p>
          <h3 className="mt-3 text-[clamp(2rem,3.4vw,2.75rem)] font-extrabold tracking-[-0.045em]">
            {experience.company}
          </h3>
          <p className="mt-1.5 text-base font-medium">{experience.role}</p>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted">
            {experience.description}
          </p>
          {experience.technologies.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
              {experience.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line px-3.5 py-1.5 text-xs"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}
          {experience.url && (
            <PillButton
              href={experience.url}
              variant="outline"
              size="sm"
              className="mt-8"
            >
              Visit Company Website
              <span className="sr-only"> about {experience.company}</span>
            </PillButton>
          )}
        </article>
      </Reveal>
      {hasPhotos && (
        <ScatteredPhotoCollage
          photos={experience.photos}
          notes={experience.annotation ? [experience.annotation] : []}
          className="aspect-[10/9]"
        />
      )}
    </li>
  );
}
