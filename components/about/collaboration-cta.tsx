import { Mail } from 'lucide-react';
import { CollabLink } from '@/components/ui/collab-link';
import { Reveal } from '@/components/ui/reveal';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { content } from '@/data/content';

export function CollaborationCta() {
  return (
    <Reveal className="mt-3">
      <section
        id="contact"
        className="grid scroll-mt-8 gap-8 rounded-3xl bg-ink p-8 text-ivory md:grid-cols-2 md:items-center md:gap-16 md:p-12"
      >
        <div>
          <SectionEyebrow icon={Mail} tone="inverted">
            Let’s work together
          </SectionEyebrow>
          <h2 className="mt-5 text-[clamp(1.9rem,3.2vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.04em]">
            Have an idea or project
            <br className="hidden md:block" /> in mind?
          </h2>
        </div>
        <div className="md:border-l md:border-ivory/10 md:pl-10">
          <p className="max-w-md text-base leading-7 text-ivory/80">
            I’m always open to new opportunities, collaborations, or just a casual chat about tech.
          </p>
          <div className="mt-6">
            {content.contactUrl ? (
              <CollabLink light size="sm" />
            ) : (
              <p className="text-sm text-ivory/70">Personal contact details will be added soon.</p>
            )}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
