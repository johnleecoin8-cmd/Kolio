import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Hero — centered headline on light violet bg, single CTA. */
export default function Hero() {
  return (
    <section className="bg-violet-bg pb-20 pt-16 md:pb-28 md:pt-24">
      <Container>
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
          <h1 className="font-display text-[2.75rem] leading-[1.05] text-foreground sm:text-[3.5rem] md:text-[4.5rem]">
            Influencer Lookalike Tool
          </h1>
          <p className="mt-6 max-w-[640px] text-body-md text-foreground/80">
            Ever wished you could clone your top performing influencers? Now you
            can (<span className="italic">kind of</span>).
          </p>
          <div className="mt-8">
            <ButtonA
              href="https://marketer.modash.io/register/marketer"
              variant="accent"
              size="lg"
            >
              Try for free
            </ButtonA>
          </div>
        </div>
      </Container>
    </section>
  );
}
