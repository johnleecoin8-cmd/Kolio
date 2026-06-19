import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'tertiary' | 'accent' | 'lime';
type Size = 'sm' | 'md' | 'lg';

const VARIANTS: Record<Variant, string> = {
  // black fill, white text — main CTA ("Try for free")
  primary:
    'bg-ink text-white border border-transparent shadow-btn hover:opacity-90',
  // white fill, gray border ("Get a demo")
  secondary:
    'bg-white text-gray-700 border border-gray-300 shadow-btn hover:bg-gray-50',
  // transparent, gray text ("Log in")
  tertiary:
    'bg-transparent text-gray-600 border border-transparent hover:bg-gray-50',
  // pink fill, ink text — brand accent CTA
  accent: 'bg-pink text-ink border border-transparent hover:bg-pink-hot',
  // lime fill, dark text — tool/calculator CTA
  lime: 'bg-lime text-ink border border-lime hover:opacity-90',
};

const SIZES: Record<Size, string> = {
  sm: 'h-9 px-3 text-body-sm',
  md: 'h-10 px-[1.125rem] text-body',
  lg: 'h-12 px-6 text-body-md',
};

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

function classes(variant: Variant, size: Size, extra: string) {
  return `inline-flex items-center justify-center gap-2 rounded-sm font-semibold leading-none whitespace-nowrap transition-all duration-300 no-underline ${VARIANTS[variant]} ${SIZES[size]} ${extra}`;
}

/** Internal link button (react-router). */
export function ButtonLink({
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}: BaseProps & { to: string }) {
  return (
    <Link to={to} className={classes(variant, size, className)}>
      {children}
    </Link>
  );
}

/** External / anchor button. */
export function ButtonA({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}: BaseProps & { href: string }) {
  return (
    <a href={href} className={classes(variant, size, className)}>
      {children}
    </a>
  );
}

/** Native <button>. */
export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
