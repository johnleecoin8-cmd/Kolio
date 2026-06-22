import { BadgeCheck, Layers } from 'lucide-react';
import Container from '@/components/ui/Container';

type Status = 'live' | 'review' | 'escrow' | 'paid' | 'draft';

const STATUS: Record<Status, { label: string; cls: string }> = {
  live: { label: 'Live', cls: 'bg-coral-bg text-brand' },
  review: { label: 'In review', cls: 'bg-amber-50 text-amber-700' },
  escrow: { label: 'Escrow funded', cls: 'bg-emerald-50 text-emerald-700' },
  paid: { label: 'Paid out', cls: 'bg-gray-100 text-foreground/60' },
  draft: { label: 'Draft', cls: 'bg-gray-50 text-foreground/45' },
};

type Row = {
  handle: string;
  niche: string;
  score: number;
  stage: string;
  value: string;
  status: Status;
};

const ROWS: Row[] = [
  { handle: 'CryptoWhale', niche: 'DeFi', score: 92, stage: 'Posted · day 2', value: '8,500', status: 'live' },
  { handle: 'L2Maxi', niche: 'Layer2', score: 88, stage: 'Draft submitted', value: '5,200', status: 'review' },
  { handle: 'OnchainAna', niche: 'Trading', score: 85, stage: 'Awaiting delivery', value: '6,000', status: 'escrow' },
  { handle: 'ZkSavant', niche: 'Infra', score: 90, stage: 'Settled · day 9', value: '7,400', status: 'paid' },
  { handle: 'MemeOracle', niche: 'Culture', score: 79, stage: 'Brief sent', value: '3,100', status: 'draft' },
];

/** Signature floating board: a single rounded card-kit table showing every
 *  collaboration with status chips, scores and on-chain value. */
export default function CollabBoard() {
  return (
    <section className="canvas-warm py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-brand">One rail, end to end</span>
          <h2 className="display-light mt-3 text-[2.25rem] leading-[1.05] text-foreground md:text-[3.25rem]">
            A single view of every{' '}
            <span className="accent text-gradient-brand">collaboration</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-md text-foreground/60">
            From first brief to settled payout, each creator deal lives on one
            board with its stage, value and proof in plain sight.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-[1040px]">
          {/* floating summary chip, top-left */}
          <div className="card-kit shadow-float-sm absolute -left-2 -top-7 z-10 hidden -rotate-2 rounded-2xl px-4 py-3 md:block">
            <div className="text-eyebrow text-foreground/50">Active value in escrow</div>
            <div className="num-display mt-1 text-2xl leading-none text-foreground">
              19,700<span className="text-body-sm text-foreground/45"> USDC</span>
            </div>
          </div>

          {/* floating proof chip, top-right */}
          <div className="card-kit shadow-float-sm absolute -right-2 -top-6 z-10 hidden rotate-2 items-center gap-2 rounded-2xl px-4 py-3 md:flex">
            <BadgeCheck className="h-5 w-5 text-brand" />
            <div>
              <div className="text-eyebrow text-foreground/50">Avg Proof Score</div>
              <div className="num-display text-lg leading-none text-foreground">86.8</div>
            </div>
          </div>

          {/* the board */}
          <div className="card-kit shadow-float overflow-hidden rounded-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-white">
                  <Layers className="h-4.5 w-4.5" />
                </span>
                <div>
                  <div className="text-body-sm font-semibold text-foreground">Collaborations</div>
                  <div className="text-eyebrow text-foreground/45">Q2 campaign · 5 active</div>
                </div>
              </div>
              <span className="chip chip-brand hidden sm:inline-flex">Updated live</span>
            </div>

            {/* column header */}
            <div className="hidden grid-cols-[1.6fr_1fr_0.7fr_1fr] gap-4 border-b border-gray-100 px-6 py-3 text-eyebrow uppercase tracking-wide text-foreground/40 md:grid">
              <span>Creator</span>
              <span>Stage</span>
              <span>Score</span>
              <span className="text-right">Value · Status</span>
            </div>

            <div className="divide-y divide-gray-100">
              {ROWS.map((r) => (
                <div
                  key={r.handle}
                  className="grid grid-cols-1 gap-3 px-6 py-4 transition hover:bg-canvas-warm/60 md:grid-cols-[1.6fr_1fr_0.7fr_1fr] md:items-center md:gap-4"
                >
                  {/* creator */}
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-pill bg-gradient-brand text-eyebrow font-bold text-white">
                      {r.handle.slice(0, 2).toUpperCase()}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1 text-body-sm font-semibold text-foreground">
                        @{r.handle}
                        <BadgeCheck className="h-3.5 w-3.5 text-brand" />
                      </div>
                      <div className="text-eyebrow text-foreground/45">{r.niche} KOL</div>
                    </div>
                  </div>

                  {/* stage */}
                  <div className="text-body-sm text-foreground/65">{r.stage}</div>

                  {/* score */}
                  <div>
                    <span className="num-display rounded-pill bg-coral-bg px-2 py-1 text-eyebrow font-bold text-brand">
                      {r.score}
                    </span>
                  </div>

                  {/* value + status */}
                  <div className="flex items-center justify-between gap-3 md:justify-end">
                    <span className="num-display font-mono-tnum text-body-sm text-foreground">
                      {r.value} <span className="text-foreground/40">USDC</span>
                    </span>
                    <span className={`chip rounded-pill px-2.5 py-1 text-eyebrow font-semibold ${STATUS[r.status].cls}`}>
                      {STATUS[r.status].label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
