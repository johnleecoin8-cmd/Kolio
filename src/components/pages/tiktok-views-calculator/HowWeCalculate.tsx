import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** "How do we calculate average views?" — left-aligned editorial block. */
export default function HowWeCalculate() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="font-display text-[2.25rem] uppercase leading-[1.05] text-foreground md:text-[3.5rem]">
          How do we calculate average views?
        </h2>

        <div className="mt-8 max-w-[920px] space-y-5 text-body text-foreground/80 md:text-body-md">
          <p>
            To calculate a creator's average views, we look at a recent set of
            videos and compute the average number of views per video. This helps
            smooth out one-off viral posts and gives you a clearer baseline of
            typical performance.
          </p>
          <p className="font-semibold text-foreground">
            Average views = Total views across recent videos ÷ Number of videos
          </p>
          <p>Modash uses recent content to estimate average views.</p>
        </div>

        <div className="mt-8">
          <ButtonA href="https://www.modash.io/" variant="primary" size="md">
            Check Average Views
          </ButtonA>
        </div>
      </Container>
    </section>
  );
}
