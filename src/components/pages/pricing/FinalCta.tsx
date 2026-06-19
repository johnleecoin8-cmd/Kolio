import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

/** Closing CTA block — warm gradient-brand panel (later.com-inspired). */
export default function FinalCta() {
  return (
    <section className="bg-gradient-brand py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-[900px] font-display text-[2.75rem] uppercase leading-[0.95] text-white sm:text-[4rem] md:text-[5.25rem]">
            Web3 KOL marketing, without the guesswork
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink to="/demo-confirmation" variant="primary">
              Start free
            </ButtonLink>
            <a
              href="/demo-confirmation"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-sm bg-white/15 px-[1.125rem] text-body font-semibold text-white transition hover:bg-white/25"
            >
              Request a demo
            </a>
          </div>
          <p className="mt-4 text-body-sm text-white/80">
            14-day free trial・No credit card required
          </p>
        </div>
      </Container>
    </section>
  );
}
