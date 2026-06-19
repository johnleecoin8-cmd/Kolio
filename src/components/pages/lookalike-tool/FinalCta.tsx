import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Closing CTA band on light violet bg. */
export default function FinalCta() {
  return (
    <section className="bg-[#d6daff] py-20 md:py-28">
      <Container>
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <h2 className="font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.75rem]">
            A simple but powerful influencer marketing tool
          </h2>
          <p className="mt-6 max-w-[640px] text-body-md text-foreground/80">
            Modash brings your influencer{' '}
            <a href="/influencer-search" className="text-foreground underline">
              discovery
            </a>
            ,{' '}
            <a href="/influencer-analytics" className="text-foreground underline">
              analytics
            </a>
            ,{' '}
            <a
              href="/influencer-campaign-monitoring"
              className="text-foreground underline"
            >
              monitoring
            </a>
            , and management together. Everything your team needs to scale
            profitable influencer marketing campaigns.
          </p>
          <div className="mt-8">
            <ButtonA
              href="https://marketer.modash.io/register/marketer"
              variant="primary"
              size="lg"
              className="!bg-blue !text-white hover:!opacity-90"
            >
              Get started
            </ButtonA>
          </div>
        </div>
      </Container>
    </section>
  );
}
