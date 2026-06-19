import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Closing violet CTA band. */
export default function FinalCta() {
  return (
    <section className="bg-violet py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-[820px] font-display text-[2rem] uppercase leading-[1.05] text-ink md:text-[3rem]">
            See every KOL result in one place
          </h2>
          <p className="mx-auto mt-5 max-w-[580px] text-body-md text-ink/75">
            Capture every post, verify every reach number, wire on-chain results to
            each KOL, automatically. No more screenshots required.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonA href="/demo-confirmation" variant="primary">
              Start free
            </ButtonA>
            <ButtonA href="/demo-confirmation" variant="secondary">
              Request a demo
            </ButtonA>
          </div>
          <p className="mt-4 text-body-sm text-ink/60">
            Free to start・No card required
          </p>
        </div>
      </Container>
    </section>
  );
}
