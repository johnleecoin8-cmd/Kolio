import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Final CTA — purple full-width panel with display heading and dual CTA. */
export default function FinalCta() {
  return (
    <section className="bg-background pb-4">
      <div className="rounded-[2rem] bg-purple py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="font-display text-[2.5rem] uppercase leading-[0.95] text-ink sm:text-[3.5rem] md:text-[4.5rem]">
              Pay one invoice, not hundreds
            </h2>
            <p className="mx-auto mt-5 max-w-[560px] text-body-md text-foreground/70">
              Handle invoicing, compliance, and fast payouts without the headaches.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4">
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
                  className="border-transparent bg-white/40 text-ink hover:bg-white/60"
                >
                  Request a demo
                </ButtonA>
              </div>
              <p className="text-body-sm text-foreground/60">
                14-day free trial・No credit card required
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
