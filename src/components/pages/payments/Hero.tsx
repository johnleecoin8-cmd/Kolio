import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';
import PaymentsDashboard from './PaymentsDashboard';

/** Payments hero — purple bg, big display headline, dual CTA, product mockup. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-b-[2rem] bg-purple pt-28 md:pt-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* eyebrow: Pay · On-chain */}
          <div className="mb-5 flex items-center gap-2 text-eyebrow font-semibold text-foreground/60">
            <span>Pay</span>
            <span className="text-foreground/30">·</span>
            <span className="inline-flex items-center gap-1">On-chain &amp; stablecoin</span>
          </div>

          <h1 className="font-display text-[2.75rem] uppercase leading-[0.95] text-ink sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem]">
            Pay crypto KOLs
            <br className="hidden md:block" />{' '}
            <span className="text-gradient-brand">fast, on-chain</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[620px] text-body-md text-foreground/70">
            Fund a campaign once. Kolio escrows the budget, releases payouts in
            stablecoins or fiat the moment deliverables are verified, and keeps
            every transaction auditable on-chain.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonA href="/demo-confirmation" variant="primary">
                Start free
              </ButtonA>
              <ButtonA href="/demo-confirmation" variant="secondary">
                Request a demo
              </ButtonA>
            </div>
            <p className="text-body-sm text-foreground/60">
              14-day free trial・No credit card required
            </p>
          </div>
        </div>
      </Container>

      {/* product mockup (brand-neutral) */}
      <div className="mx-auto mt-12 w-full max-w-[1200px] px-4 sm:px-6 md:mt-16">
        <div className="h-[560px] w-full overflow-hidden rounded-t-[20px] bg-background-soft p-2 shadow-nav md:p-3">
          <PaymentsDashboard />
        </div>
      </div>
    </section>
  );
}
