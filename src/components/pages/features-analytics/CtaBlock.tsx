import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Closing CTA — warm gradient-brand panel (later.com-style) with dual CTA. */
export default function CtaBlock() {
  return (
    <section className="px-3 py-4">
      <Container>
        <div className="rounded-xl bg-gradient-brand px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center">
            <h2 className="max-w-[18ch] font-display text-[2.5rem] uppercase leading-[0.98] text-white sm:text-[3.5rem] md:text-[4.5rem]">
              Run web3 campaigns with KOLs you can trust
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <ButtonA href="/demo-confirmation" variant="secondary">
                Start vetting KOLs
              </ButtonA>
              <ButtonA href="/demo-confirmation" variant="secondary">
                Book a demo
              </ButtonA>
            </div>
            <p className="mt-5 text-body-sm text-white/80">
              Built for web3 brands・No setup fees
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
