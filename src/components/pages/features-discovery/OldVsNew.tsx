import { X, Check } from 'lucide-react';
import Container from '@/components/ui/Container';

const OLD = [
  'Hashtag scrolling',
  'Updating spreadsheets',
  'So slooow',
  'Unknown demographics',
  'Not enough options',
  'Waiting for screenshots',
];
const NEW = [
  'Search with AI',
  'One-click save',
  'Accurate data',
  'Instant metrics',
  'Lookalike matching',
  'Immediate outreach',
];

function Pill({ children, ok }: { children: string; ok?: boolean }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-pill bg-white px-3.5 py-2 text-body-sm font-medium text-foreground shadow-btn">
      {ok ? (
        <Check className="h-[18px] w-[18px] shrink-0 text-positive" strokeWidth={3} />
      ) : (
        <X className="h-[18px] w-[18px] shrink-0 text-negative" strokeWidth={3} />
      )}
      {children}
    </div>
  );
}

/** Section heading + old-way (gray) vs modash-way (pink) comparison blocks. */
export default function OldVsNew() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="max-w-[720px]">
          <h2 className="font-display text-h4 md:text-[2.5rem] leading-tight text-foreground">
            A faster way to shortlist creators you’re confident to reach out to
          </h2>
          <p className="mt-4 max-w-[640px] text-body md:text-body-md text-foreground/75">
            Because time spent on searching and waiting for the wrong creators, is time you don’t
            spend building relationships with the right ones.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-background-soft p-6 md:p-8">
            <h3 className="font-display uppercase text-[1.75rem] md:text-[2rem] text-foreground">
              old way
            </h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {OLD.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-pink p-6 md:p-8">
            <h3 className="font-display uppercase text-[1.75rem] md:text-[2rem] text-ink">
              Modash way
            </h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {NEW.map((t) => (
                <Pill key={t} ok>
                  {t}
                </Pill>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
