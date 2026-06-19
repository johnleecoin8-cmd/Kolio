import Container from '@/components/ui/Container';
import { CheckCircle2 } from 'lucide-react';

const ITEMS = [
  '10-100+ crypto KOLs posting monthly',
  'Multiple posts per KOL across X, YT & Telegram',
  'Running multiple campaigns at the same time',
  'Working overtime to screenshot posts before they vanish',
  'Juggling multiple tools for reach and on-chain data',
  'You need verifiable proof of what each KOL delivered',
];

/** "Is Kolio Track right for you?" qualification card. */
export default function RightForYou() {
  return (
    <section className="bg-background py-8 md:py-12">
      <Container>
        <div className="rounded-xl bg-background-soft p-8 md:p-14">
          <div className="mx-auto max-w-[680px] text-center">
            <h2 className="text-[1.5rem] font-bold leading-[1.15] text-foreground md:text-[1.875rem]">
              Is Kolio Track right for you?
            </h2>
            <p className="mx-auto mt-4 max-w-[580px] text-body-md text-foreground/70">
              Perfect if you&apos;re running multiple KOL campaigns and need verified
              reach and on-chain results in one place, without spending hours chasing
              posts and managing screenshots.
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-[920px] flex-wrap justify-center gap-3">
            {ITEMS.map((it) => (
              <span
                key={it}
                className="inline-flex items-center gap-2 rounded-pill bg-white px-4 py-2.5 text-body-sm font-medium text-foreground shadow-btn"
              >
                <CheckCircle2 className="shrink-0 text-positive" size={18} />
                {it}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
