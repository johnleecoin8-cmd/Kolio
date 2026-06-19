import { ButtonA } from '@/components/ui/Button';

/** Final full-bleed brand-gradient CTA band with huge display heading. */
export default function EndCta() {
  return (
    <section className="bg-background py-8 md:py-12">
      <div className="mx-auto w-full max-w-container px-4 sm:px-6">
        <div className="rounded-xl bg-gradient-brand px-6 py-20 text-center md:py-32">
          <h2 className="mx-auto max-w-[1000px] font-display uppercase text-[2.5rem] leading-[0.95] text-white sm:text-[4rem] md:text-[5.5rem] lg:text-[6rem]">
            End-to-end KOL marketing for web3
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <ButtonA
              href="/demo-confirmation"
              variant="primary"
              className="bg-white text-ink hover:opacity-90"
            >
              Start free
            </ButtonA>
            <ButtonA
              href="/demo-confirmation"
              variant="primary"
              className="bg-white/15 text-white shadow-none hover:bg-white/25"
            >
              Book a demo
            </ButtonA>
          </div>
          <p className="mt-4 text-body-sm text-white/70">
            Proof-based vetting・On-chain escrow・No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
