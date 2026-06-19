import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Full pink CTA banner before footer. */
export default function FinalCta() {
  return (
    <section className="bg-background pb-8">
      <Container>
        <div className="rounded-xl bg-pink px-6 py-24 text-center md:py-32">
          <h2 className="mx-auto max-w-[1040px] font-display text-[2.5rem] uppercase leading-[0.95] text-ink md:text-[4.25rem]">
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
