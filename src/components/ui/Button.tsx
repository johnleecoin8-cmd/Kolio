import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

type Variant = 'brand' | 'light' | 'ghost' | 'dark';

const styles: Record<Variant, string> = {
  brand: 'bg-brand text-white hover:opacity-90',
  light: 'bg-on-dark text-ink hover:opacity-90',
  ghost: 'border border-ink/15 text-ink hover:bg-ink/5',
  dark: 'border border-white/20 text-white hover:bg-white/10',
};

export function Button({ to, href, variant = 'brand', children, className = '' }: {
  to?: string; href?: string; variant?: Variant; children: ReactNode; className?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3.5 text-body font-medium transition ${styles[variant]} ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <a href={href ?? '#'} className={cls}>{children}</a>;
}
