import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

/** Final coral CTA block. */
export default function CtaBlock() {
  return (
    <section className="bg-background pb-0">
      <Container>
        <div className="rounded-xl bg-coral px-6 py-20 text-center md:px-12 md:py-28">
          <h2 className="mx-auto max-w-[1000px] font-display uppercase text-[2.25rem] leading-[0.92] text-ink sm:text-[3.25rem] md:text-[4.75rem]">
            Run more KOL campaigns with less mess
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-body-md text-ink/70">
            Vet, manage, and pay your crypto KOLs from one place.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonLink to="/demo-confirmation" variant="primary">
                Start free
              </ButtonLink>
              <ButtonLink to="/demo-confirmation" variant="secondary">
                Book a demo
              </ButtonLink>
            </div>
            <p className="text-body-sm text-ink/60">
              Free to explore・No wallet connection required
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
