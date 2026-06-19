import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Closing CTA block: warm gradient panel + headline + Try free / Book a call. */
export default function EndToEndCta() {
  return (
    <section className="bg-gradient-brand py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-[1000px] font-display text-[2.75rem] uppercase leading-[0.95] text-white md:text-[5rem]">
            End-to-end KOL marketing for web3
          </h2>
          <p className="mt-6 max-w-[560px] text-body-md text-white/80">
            Discover proven crypto KOLs, vet their real reach, pay through on-chain
            escrow, and track every campaign to the wallet — all in one platform.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonA
              href="/demo-confirmation"
              variant="primary"
              className="bg-white text-brand hover:bg-white/90"
            >
              Try for Free
            </ButtonA>
            <ButtonA
              href="/demo-confirmation"
              variant="secondary"
              className="border-transparent bg-white/15 text-white hover:bg-white/25"
            >
              Book a call
            </ButtonA>
          </div>
          <p className="mt-4 text-body-sm text-white/70">
            Free to explore · No card required
          </p>
        </div>
      </Container>
    </section>
  );
}
