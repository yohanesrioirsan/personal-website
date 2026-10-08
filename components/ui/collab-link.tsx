import { PillButton } from '@/components/ui/pill-button';
import { content } from '@/data/content';

export function CollabLink({ light = false, size = 'md', className = '' }: { light?: boolean; size?: 'sm' | 'md'; className?: string }) {
  return (
    <PillButton href={content.contactUrl || '#contact'} variant={light ? 'light' : 'dark'} size={size} className={className}>
      {content.contactUrl ? 'Let’s Collab' : 'Get in touch'}
    </PillButton>
  );
}
