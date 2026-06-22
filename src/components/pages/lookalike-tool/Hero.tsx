import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

/** Hero — centered display headline with one gradient-highlighted word, single CTA. */
export default function Hero() {
  return (
    <section className="bg-white pb-16 pt-16 md:pb-24 md:pt-24">
      <Container>
        <div className="mx-auto flex max-w-[880px] flex-col items-center text-center">
          <span className="eyebrow">Lookalike Tool</span>
          <h1 className="mt-4 display-xl font-display text-[2.75rem] leading-[1.05] text-foreground sm:text-[3.5rem] md:text-[4.5rem]">
            Find more crypto KOLs{' '}
            <span className="text-gradient-brand">just like</span> the ones
            that work
          </h1>
          <p className="mt-6 max-w-[640px] text-body-md text-foreground/70">
            Found a KOL who actually moved your numbers? Kolio's Lookalike Tool
            surfaces the next ten with the same audience, the same niche, and the
            same on-chain credibility.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink to="/demo-confirmation" variant="primary" size="lg">
              Start finding KOLs
            </ButtonLink>
            <ButtonLink to="/demo-confirmation" variant="secondary" size="lg">
              Book a demo
            </ButtonLink>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="chip chip-onchain">On-chain verified reach</span>
            <span className="chip chip-ink">No wallet connection</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
