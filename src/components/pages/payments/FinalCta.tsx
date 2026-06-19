import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Final CTA — warm gradient full-width panel (later.com-inspired) with dual CTA. */
export default function FinalCta() {
  return (
    <section className="bg-background pb-4">
      <div className="rounded-[2rem] bg-gradient-brand py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="font-display text-[2.5rem] uppercase leading-[0.95] text-white sm:text-[3.5rem] md:text-[4.5rem]">
              Fund one campaign, pay every KOL
            </h2>
            <p className="mx-auto mt-5 max-w-[560px] text-body-md text-white/80">
              Escrow, multi-chain payouts, and on-chain proof — without the
              manual transfers.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <ButtonA
                  href="/demo-confirmation"
                  variant="primary"
                  className="border-transparent bg-white text-ink hover:bg-white/90"
                >
                  Start free
                </ButtonA>
                <ButtonA
                  href="/demo-confirmation"
                  variant="secondary"
                  className="border-transparent bg-white/20 text-white hover:bg-white/30"
                >
                  Request a demo
                </ButtonA>
              </div>
              <p className="text-body-sm text-white/70">
                14-day free trial・No credit card required
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
