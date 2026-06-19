import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Final coral CTA block. */
export default function CtaBlock() {
  return (
    <section className="bg-background pb-0">
      <Container>
        <div className="rounded-xl bg-coral px-6 py-20 text-center md:px-12 md:py-28">
          <h2 className="mx-auto max-w-[1000px] font-display uppercase text-[2.25rem] leading-[0.92] text-ink sm:text-[3.25rem] md:text-[4.75rem]">
            Manage more relationships with less mess
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-body-md text-ink/70">
            Keep things organized and under control from one place.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonA
                href="https://marketer.modash.io/register/marketer"
                variant="primary"
              >
                Try for free
              </ButtonA>
              <ButtonA
                href="https://www.modash.io/book-demo"
                variant="secondary"
              >
                Request a demo
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
