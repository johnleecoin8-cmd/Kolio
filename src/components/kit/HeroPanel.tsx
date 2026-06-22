import { ReactNode } from 'react';
import Container from '@/components/ui/Container';
import FlowingArt from './FlowingArt';

/** Reusable calm-premium hero: soft warm canvas + big rounded dark panel with
 *  flowing art, eyebrow, light-weight large display title, optional CTAs/extra.
 *  Shared so every page speaks the same design language. */
export default function HeroPanel({
  eyebrow,
  title,
  subtitle,
  children,
  art = true,
}: {
  eyebrow?: string;
  title: ReactNode;       // pass JSX so a single word can carry .text-gradient-brand
  subtitle?: string;
  children?: ReactNode;   // CTAs or extra content
  art?: boolean;
}) {
  return (
    <section className="canvas-warm px-3 pb-6 pt-3 md:px-5 md:pb-10 md:pt-4">
      <div className="hero-panel mx-auto min-h-[460px] max-w-[1320px] md:min-h-[540px]">
        {art && <FlowingArt />}
        <div className="absolute inset-0 bg-gradient-to-b from-hero-ink/30 via-hero-ink/10 to-hero-ink/60" />
        <Container>
          <div className="relative flex min-h-[460px] flex-col items-center justify-center px-4 py-20 text-center md:min-h-[540px]">
            {eyebrow && (
              <span className="mb-6 inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-4 py-1.5 text-body-sm font-medium text-white/80 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-pill bg-brand-coral" /> {eyebrow}
              </span>
            )}
            <h1 className="display-light max-w-[20ch] text-[2.5rem] leading-[1.03] text-hero-text sm:text-5xl md:text-[4.25rem]">
              {title}
            </h1>
            {subtitle && <p className="mt-6 max-w-xl text-body-md text-white/70">{subtitle}</p>}
            {children && <div className="mt-9 flex flex-wrap items-center justify-center gap-3">{children}</div>}
          </div>
        </Container>
      </div>
    </section>
  );
}
