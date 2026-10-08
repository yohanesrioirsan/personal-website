import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { BrandIcon } from "@/components/ui/brand-icon";
import { content } from "@/data/content";

export function Footer() {
  const socials = content.socials.filter((social) => social.href);
  return (
    <footer className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-10 md:px-12 lg:px-16">
      <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-[-0.07em]"
          aria-label="Yohanes home"
        >
          yohanesrioirsan
        </Link>
        <p className="text-xs text-muted">
          © 2026 Yohanes Rio Irsan · All rights reserved.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {socials.length > 0 && (
          <ul className="flex items-center gap-2" aria-label="Social profiles">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} (opens in a new tab)`}
                  className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-ink hover:text-ivory"
                >
                  <BrandIcon name={social.icon} className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        )}
        <a
          href="#main"
          className="inline-flex min-h-10 items-center gap-2 text-xs text-muted hover:text-ink"
        >
          Back to top <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
