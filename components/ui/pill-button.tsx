import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type PillButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'dark' | 'light' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
};

const variants = {
  dark: 'bg-ink text-ivory',
  light: 'bg-ivory text-ink',
  outline: 'border border-line bg-surface/40 text-ink hover:border-ink',
};

const sizes = {
  sm: 'min-h-10 gap-3 px-5 py-2.5 text-sm',
  md: 'min-h-12 gap-5 px-7 py-3.5 text-base',
};

export function PillButton({ href, children, variant = 'dark', size = 'md', className = '' }: PillButtonProps) {
  const external = /^(https?:|mailto:)/.test(href);
  const classes = `group inline-flex items-center rounded-full font-medium transition-[transform,border-color] duration-300 hover:-translate-y-0.5 ${variants[variant]} ${sizes[size]} ${className}`;
  const inner = (
    <>
      {children}
      <ArrowUpRight
        size={size === 'sm' ? 16 : 19}
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </>
  );
  return external ? (
    <a href={href} className={classes} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
