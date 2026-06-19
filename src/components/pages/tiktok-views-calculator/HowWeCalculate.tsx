import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** "How do we calculate average views?" — left-aligned editorial block. */
export default function HowWeCalculate() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="max-w-[20ch] font-display text-[2.5rem] uppercase leading-[1.0] text-foreground md:text-[4.25rem]">
          How do we calculate a KOL's average views?
        </h2>

        <div className="mt-8 max-w-[920px] space-y-5 text-body text-foreground/80 md:text-body-md">
          <p>
            To calculate a crypto KOL's average views, we take a recent set of
            videos and compute the average number of views per video. This
            smooths out one-off viral posts and gives you an honest baseline of
            what a typical sponsored slot is actually worth.
          </p>
          <p className="font-semibold text-foreground">
            Average views = Total views across recent videos ÷ Number of videos
          </p>
          <p>
            Kolio cross-checks recent content against verified reach, so a KOL
            who bought followers or relies on bots can't inflate the number.
          </p>
        </div>

        <div className="mt-8">
          <ButtonA href="/demo-confirmation" variant="primary" size="md">
            Vet a KOL
          </ButtonA>
        </div>
      </Container>
    </section>
  );
}
