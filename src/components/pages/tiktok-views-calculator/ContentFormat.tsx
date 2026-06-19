import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const POINTS = [
  'Spot repeatable formats that consistently land with a crypto audience',
  'See whether views hold steady across recent uploads — or only spike on hype',
  'Avoid KOLs whose numbers ride one viral moment instead of real reach',
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
            Before you brief a crypto KOL on TikTok, it pays to understand which
            formats — explainers, market takes, project breakdowns — actually
            drive views for their audience.
          </p>
          <p>Use this to:</p>
          <ul className="list-disc space-y-2 pl-6">
            {POINTS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <ButtonA href="/demo-confirmation" variant="primary" size="md">
            Try for free
          </ButtonA>
        </div>
      </Container>
    </section>
  );
}
