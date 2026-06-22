import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Closing CTA — the single reserved red-gradient moment on the page. */
export default function CtaBand() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[1136px] rounded-2xl bg-gradient-brand px-6 py-14 text-center text-white md:px-12 md:py-20">
          <h2 className="mx-auto max-w-[760px] display-lg font-display text-[2rem] md:text-[2.5rem]">
            Run KOL campaigns web3 can finally trust
          </h2>
          <p className="mx-auto mt-6 max-w-[640px] text-body-md text-white/90">
            Find crypto KOLs, verify their real reach and audience, pay on-chain
            through escrow, and attribute results — all in one platform.
          </p>
          <p className="mx-auto mt-4 max-w-[640px] text-body-md text-white/90">
            Bring web2-grade rigor to your crypto creator marketing, from first
            search to final payout.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonA
              href="/demo-confirmation"
              variant="secondary"
              className="border-transparent bg-white text-brand hover:bg-white/90"
            >
              Get started
            </ButtonA>
          </div>
        </div>
      </Container>
    </section>
  );
}
