import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

/** Hero — centered display headline with one gradient-highlighted word, single CTA. */
export default function Hero() {
  return (
    <section className="bg-[#d6daff] pb-20 pt-16 md:pb-28 md:pt-24">
      <Container>
        <div className="mx-auto flex max-w-[860px] flex-col items-center text-center">
          <h1 className="font-display text-[2.75rem] leading-[1.05] text-foreground sm:text-[3.5rem] md:text-[4.5rem]">
            Find more crypto KOLs{' '}
            <span className="text-gradient-brand">just like</span> the ones
            that work
          </h1>
          <p className="mt-6 max-w-[640px] text-body-md text-foreground/80">
            Found a KOL who actually moved your numbers? Kolio's Lookalike Tool
            surfaces the next ten with the same audience, the same niche, and the
            same on-chain credibility.
          </p>
          <div className="mt-8">
            <ButtonLink
              to="/demo-confirmation"
              variant="primary"
              size="lg"
              className="!bg-blue !text-white hover:!opacity-90"
            >
              Start finding KOLs
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
