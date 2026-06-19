import Container from '@/components/ui/Container';
import { XCircle, CheckCircle2 } from 'lucide-react';

const MANUAL = [
  'Chasing KOLs for screenshots',
  'Deleted posts you can never prove',
  'Reach numbers you can’t verify',
  'Hours stitching together exports',
  'Off-platform payouts with no paper trail',
];

const AUTO = [
  '100% post coverage across X, YT, TikTok & Telegram',
  'On-chain attribution wired to each KOL',
  'Live verified-reach dashboard',
  'Setup in minutes',
  'Escrowed payouts, recorded automatically',
];

/** Manual vs Automatic tracking comparison columns. */
export default function Comparison() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[1.75rem] font-bold leading-[1.15] text-foreground md:text-[2rem]">
            See every KOL post and on-chain result in one place
          </h2>
          <p className="mx-auto mt-4 max-w-[580px] text-body-md text-foreground/70">
            Stop archiving Telegram screenshots and start spending time on the KOLs
            and campaigns that actually move volume.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Manual */}
          <div className="rounded-xl bg-background-soft p-6 md:p-8">
            <h3 className="mb-6 font-display text-[1.5rem] uppercase leading-tight text-foreground md:text-[1.875rem]">
              manual tracking
            </h3>
            {/* manual column */}
            <ul className="grid gap-3 sm:grid-cols-2">
              {MANUAL.map((m) => (
                <li
                  key={m}
                  className="flex items-center gap-2.5 text-body-sm text-foreground/80"
                >
                  <XCircle className="h-5 w-5 shrink-0 text-foreground/40" />
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {/* Automatic */}
          <div className="rounded-xl bg-violet-light p-6 md:p-8">
            <h3 className="mb-6 font-display text-[1.5rem] uppercase leading-tight text-foreground md:text-[1.875rem]">
              automatic tracking
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {AUTO.map((a) => (
                <li
                  key={a}
                  className="flex items-center gap-2.5 text-body-sm text-foreground/80"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
