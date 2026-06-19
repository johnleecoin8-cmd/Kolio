import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Pink closing CTA band. */
export default function CtaBlock() {
  return (
    <section className="bg-pink py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-[2.25rem] uppercase leading-[1.02] text-ink sm:text-[3rem] md:text-[4rem]">
            Recruit influencers
            <br />
            faster, with more
            <br />
            confidence
          </h2>
          <div className="mt-8">
            <ButtonA
              href="https://marketer.modash.io/register/marketer"
              variant="primary"
              size="lg"
            >
              Try for free
            </ButtonA>
          </div>
        </div>
      </Container>
    </section>
  );
}
