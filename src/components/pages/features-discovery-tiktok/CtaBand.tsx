import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Closing CTA band on soft background. */
export default function CtaBand() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="rounded-xl bg-background-soft px-6 py-16 text-center md:px-12 md:py-20">
          <h2 className="mx-auto max-w-[760px] font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.5rem]">
            Modash makes your business grow faster
          </h2>
          <p className="mx-auto mt-6 max-w-[640px] text-body-md text-foreground/75">
            Quickly find influencers, analyze their audiences, export data and
            build world-class influencer programs.
          </p>
          <p className="mx-auto mt-4 max-w-[640px] text-body-md text-foreground/75">
            Recruit 2 influencers into monthly programs per month and have
            thousands of monthly conversions in 1 year.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonA
              href="https://marketer.modash.io/register/marketer"
              variant="accent"
            >
              Get started
            </ButtonA>
          </div>
        </div>
      </Container>
    </section>
  );
}
