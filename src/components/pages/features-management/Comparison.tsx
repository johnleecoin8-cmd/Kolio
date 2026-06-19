import { Check, X } from 'lucide-react';
import Container from '@/components/ui/Container';

const BAD = [
  '5 DM threads per KOL',
  'Wallet addresses lost in chat',
  'Duplicate outreach',
  'Deal terms in someone’s head',
  'No proof of reach',
];
const GOOD = [
  'One vetted KOL roster',
  'Wallets & escrow on file',
  'Aligned team',
  'Deal terms locked in',
  'Verified audience data',
];

function Chip({ good, label }: { good: boolean; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-pill bg-white px-4 py-2.5 text-body-sm font-medium text-ink shadow-btn">
      {good ? (
        <Check className="h-4 w-4 text-brand" />
      ) : (
        <X className="h-4 w-4 text-ink/40" />
      )}
      {label}
    </div>
  );
}

/** "Run more KOL campaigns with less mess" — gray vs coral comparison cards. */
export default function Comparison() {
  return (
    <section className="bg-background pb-16 md:pb-24">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-sans text-h4 font-bold leading-tight text-ink">
            Run more KOL campaigns with less mess
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-body-md text-foreground/70">
            When every relationship, term, and payout is organized and on the
            record, you get to focus on the work that actually moves your token.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {/* all over the place */}
          <div className="rounded-xl bg-background-soft p-7 md:p-10">
            <h3 className="font-display uppercase text-[2rem] leading-none text-ink md:text-[2.75rem]">
              Scattered across chats
            </h3>
            <div className="mt-10 flex flex-wrap gap-3">
              {BAD.map((t) => (
                <Chip key={t} good={false} label={t} />
              ))}
            </div>
          </div>

          {/* all in one place */}
          <div className="rounded-xl bg-coral p-7 md:p-10">
            <h3 className="font-display uppercase text-[2rem] leading-none text-ink md:text-[2.75rem]">
              All in one place
            </h3>
            <div className="mt-10 flex flex-wrap gap-3">
              {GOOD.map((t) => (
                <Chip key={t} good label={t} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
