import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Closing CTA — warm gradient panel (later.com-inspired) with web3 framing. */
export default function BottomCta() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="bg-gradient-brand mx-auto flex max-w-[1080px] flex-col items-center rounded-3xl px-6 py-16 text-center md:py-20">
          <h2 className="font-display font-normal uppercase text-[2rem] leading-[0.95] text-white sm:text-[2.5rem] md:text-[3rem]">
            End-to-end KOL marketing for web3 brands
          </h2>
          <p className="mt-5 max-w-[560px] text-body-md text-white/85">
            Discover, vet, and pay crypto KOLs in one place — with proof-based data,
            on-chain escrow, and attribution that ties results back to revenue.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonA href="/demo-confirmation" variant="secondary">
                Start free
              </ButtonA>
              <ButtonA href="/demo-confirmation" variant="primary">
                Book a demo
              </ButtonA>
            </div>
            <p className="text-body-sm text-white/75">
              Free to explore・On-chain payments・No credit card required
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
