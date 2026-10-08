import { Briefcase, Compass, Gamepad2, Hammer, Sparkles } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { content } from "@/data/content";

const icons = [Hammer, Briefcase, Compass, Gamepad2];

export function CurrentlyCard() {
  return (
    <article className="relative rounded-3xl border border-line bg-surface/50 p-6">
      <SectionEyebrow as="h2" icon={Sparkles}>
        Currently
      </SectionEyebrow>
      <ul className="mt-5 space-y-3.5">
        {content.currently.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <li key={item} className="flex items-center gap-3 text-sm">
              <Icon
                size={15}
                strokeWidth={1.6}
                className="text-muted"
                aria-hidden="true"
              />
              {item}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
