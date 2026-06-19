import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Full pink CTA banner before footer. */
export default function FinalCta() {
  return (
    <section className="bg-background pb-8">
      <Container>
        <div className="rounded-xl bg-pink px-6 py-20 text-center md:py-28">
          <h2 className="mx-auto max-w-[900px] font-display text-h3 uppercase leading-[0.95] text-ink md:text-h2">
            The data layer for your creator platform and tools
          </h2>
          <div className="mt-8 flex justify-center">
            <ButtonA
              href="https://form.jotform.com/modash/intro-modash-api"
              variant="primary"
            >
              Request a demo
            </ButtonA>
          </div>
        </div>
      </Container>
    </section>
  );
}
