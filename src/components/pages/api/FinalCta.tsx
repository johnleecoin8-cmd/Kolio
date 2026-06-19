import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

/** Full-bleed gradient CTA banner before footer (later.com-inspired warm panel). */
export default function FinalCta() {
  return (
    <section className="bg-background pb-8">
      <Container>
        <div className="bg-gradient-brand rounded-xl px-6 py-24 text-center md:py-32">
          <h2 className="mx-auto max-w-[1040px] font-display text-[2.5rem] uppercase leading-[0.95] text-white md:text-[4.25rem]">
            The verified data layer for web3 KOL marketing
          </h2>
          <div className="mt-8 flex justify-center">
            <ButtonLink to="/demo-confirmation" variant="secondary">
              Request a demo
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
