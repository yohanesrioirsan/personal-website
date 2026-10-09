import type { LucideIcon } from 'lucide-react';

type SectionEyebrowProps = {
  children: React.ReactNode;
  icon?: LucideIcon;
  /** Small outlined pill (hero) vs. plain label (sections, cards). */
  pill?: boolean;
  tone?: 'default' | 'inverted';
  as?: 'p' | 'h2';
  className?: string;
};

export function SectionEyebrow({ children, icon: Icon, pill = false, tone = 'default', as: Tag = 'p', className = '' }: SectionEyebrowProps) {
  const color = tone === 'inverted' ? 'text-ivory/75' : pill ? 'text-ink' : 'text-muted';
  const shape = pill ? `rounded-full border px-3 py-1.5 ${tone === 'inverted' ? 'border-ivory/15' : 'border-line'}` : '';
  return (
    <Tag className={`inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] ${color} ${shape} ${className}`}>
      {Icon && <Icon size={14} strokeWidth={1.75} aria-hidden="true" />}
      {children}
    </Tag>
  );
}
