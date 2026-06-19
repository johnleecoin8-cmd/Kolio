import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Hero — pink full-width band, dark display headline, dual CTA. */
export default function Hero() {
  return (
    <section className="bg-pink">
      <Container className="py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-display text-[2.5rem] uppercase leading-[1.02] text-ink sm:text-[3.25rem] md:text-[4rem] lg:text-[4.5rem]">
            Vet &amp; research
            <br className="hidden sm:block" /> influencers,
            <br />
            Before you Reach out
          </h1>

          <p className="mx-auto mt-6 max-w-[620px] text-body-md text-ink/75">
            Find influencers, then get all the profile information you need — all in
            the same place. Check audience demographics, performance data, and past
            collabs - without having to reach out.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonA
                href="https://marketer.modash.io/register/marketer"
                variant="primary"
              >
                Try for Free
              </ButtonA>
              <ButtonA href="https://www.modash.io/book-demo" variant="secondary">
                Book a call
              </ButtonA>
            </div>
            <p className="text-body-sm text-ink/60">
              14-day free trial・No credit card required
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
