import { ReactNode } from 'react';
import Container from './Container';

type Props = {
  children: ReactNode;
  /** background variant */
  bg?: 'white' | 'soft' | 'warm' | 'ink';
  className?: string;
  /** drop the inner Container if you need full-bleed children */
  bleed?: boolean;
  id?: string;
};

const BG: Record<NonNullable<Props['bg']>, string> = {
  white: 'bg-background text-foreground',
  soft: 'bg-background-soft text-foreground',
  warm: 'bg-background-warm text-foreground',
  ink: 'bg-ink text-white',
};

/** Vertical-rhythm section wrapper. modash sections run ~80px/120px padding. */
export default function Section({
  children,
  bg = 'white',
  className = '',
  bleed = false,
  id,
}: Props) {
  return (
    <section id={id} className={`py-16 md:py-24 ${BG[bg]} ${className}`}>
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}
