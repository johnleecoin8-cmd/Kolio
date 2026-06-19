import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const POINTS = [
  'Identify repeatable formats that perform well',
  'See whether views are consistent across recent uploads',
  'Avoid creators who rely on a single viral spike',
];

/** "Check average views by content format" — left-aligned editorial + bullets. */
export default function ContentFormat() {
  return (
    <section className="bg-background pb-16 md:pb-24">
      <Container>
        <h2 className="max-w-[22ch] font-display text-[2.5rem] uppercase leading-[1.0] text-foreground md:text-[4.25rem]">
          Check average views by content format
        </h2>

        <div className="mt-8 max-w-[920px] space-y-5 text-body text-foreground/80 md:text-body-md">
          <p>
            When you review a TikTok creator, it helps to understand what kinds
            of videos drive the strongest views.
          </p>
          <p>Use this to:</p>
          <ul className="list-disc space-y-2 pl-6">
            {POINTS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <ButtonA href="https://www.modash.io/" variant="primary" size="md">
            Try for free
          </ButtonA>
        </div>
      </Container>
    </section>
  );
}
