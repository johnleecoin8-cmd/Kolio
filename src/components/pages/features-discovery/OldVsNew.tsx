import { X, Check } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from './SectionHeading';

const OLD = [
  'Scrolling Crypto Twitter',
  'Manual handle spreadsheets',
  'Trusting follower counts',
  'Bots & bought engagement',
  'No audience proof',
  'Screenshot-only metrics',
];
const NEW = [
  'Search by niche & chain',
  'One-click shortlist',
  'Proof-based reach',
  'Audience quality scores',
  'Lookalike KOL matching',
  'On-chain track records',
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

/** Section heading + old-way (gray) vs Kolio-way (pink) comparison blocks. */
export default function OldVsNew() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <SectionHeading>
            A faster way to shortlist KOLs you’re confident to fund
          </SectionHeading>
          <p className="mt-4 mx-auto max-w-[640px] text-body md:text-body-md text-foreground/75">
            Because budget spent on KOLs with inflated reach is budget you don’t spend on the
            creators who actually move your community.
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
              Kolio way
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
