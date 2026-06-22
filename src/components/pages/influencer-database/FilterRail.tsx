import { useState } from 'react';
import { SlidersHorizontal, ShieldCheck, Wallet, Globe } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Influence tiers — original Kolio framing for crypto KOLs, by real reach band.
 *  Rendered as calm chips so brands can scope discovery to the layer they need. */
const TIERS = [
  { key: 'nano', label: 'Nano', range: '1K–10K', note: 'Tight degens, high trust' },
  { key: 'micro', label: 'Micro', range: '10K–50K', note: 'Niche conviction, best ER' },
  { key: 'mid', label: 'Mid', range: '50K–250K', note: 'Scalable, still credible' },
  { key: 'macro', label: 'Macro', range: '250K–1M', note: 'Listing & launch reach' },
  { key: 'mega', label: 'Mega', range: '1M+', note: 'Market-moving signal' },
];

/** A floating filter-rail card beside influence-tier chips. Left: the precise
 *  controls a crypto KOL buyer actually filters on (proof floor, chains, payout,
 *  niche). Right: explanation of why tiering matters in crypto. */
export default function FilterRail() {
  const [active, setActive] = useState('micro');
  const [proof, setProof] = useState(85);

  return (
    <section className="canvas-warm2 py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* copy + influence-tier chips */}
          <div>
            <span className="eyebrow text-foreground/55">Filter with intent</span>
            <h2 className="display-light mt-4 max-w-[16ch] text-[2.25rem] leading-[1.05] text-foreground md:text-[3.25rem]">
              Scope to the influence <span className="text-gradient-brand">tier</span> that fits the play
            </h2>
            <p className="mt-5 max-w-md text-body-md text-foreground/60">
              A nano degen with 6K loyal followers can out-convert a million-follower
              account. Kolio bands every KOL by real reach, then lets you stack a proof
              floor, chain focus, and payout terms on top.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {TIERS.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`rounded-pill border px-4 py-2 text-body-sm font-semibold transition ${
                    active === t.key
                      ? 'border-transparent bg-brand text-white shadow-float-sm'
                      : 'border-black/10 bg-white text-foreground/70 hover:border-black/20'
                  }`}
                >
                  {t.label}
                  <span className={`ml-2 font-mono-tnum text-eyebrow ${active === t.key ? 'text-white/70' : 'text-foreground/45'}`}>
                    {t.range}
                  </span>
                </button>
              ))}
            </div>
            <p className="mt-4 text-body-sm text-foreground/55">
              {TIERS.find((t) => t.key === active)?.note}
            </p>
          </div>

          {/* floating filter-rail card */}
          <div className="card-kit shadow-float rotate-1 rounded-2xl p-6 transition hover:rotate-0">
            <div className="flex items-center justify-between">
              <span className="chip chip-brand inline-flex items-center gap-1.5">
                <SlidersHorizontal className="h-3.5 w-3.5" /> Filter rail
              </span>
              <span className="font-mono-tnum text-eyebrow text-foreground/45">1,284 KOLs</span>
            </div>

            {/* proof floor slider */}
            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-eyebrow text-foreground/55">
                <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-brand" /> Min proof score</span>
                <span className="num-display text-body-sm text-foreground">{proof}</span>
              </div>
              <input
                type="range"
                min={50}
                max={99}
                value={proof}
                onChange={(e) => setProof(Number(e.target.value))}
                className="w-full accent-[hsl(var(--brand))]"
              />
              <div className="mt-1 flex justify-between font-mono-tnum text-eyebrow text-foreground/40">
                <span>50</span><span>99</span>
              </div>
            </div>

            {/* chain focus */}
            <div className="mt-6">
              <div className="mb-2 flex items-center gap-1.5 text-eyebrow text-foreground/55">
                <Globe className="h-3.5 w-3.5 text-brand" /> Chain focus
              </div>
              <div className="flex flex-wrap gap-2">
                {['Ethereum', 'Solana', 'Base', 'Arbitrum', 'TON'].map((c, i) => (
                  <span
                    key={c}
                    className={`rounded-pill px-3 py-1 text-eyebrow font-semibold ${
                      i < 2 ? 'bg-coral-bg text-brand' : 'bg-gray-100 text-foreground/55'
                    }`}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* payout terms */}
            <div className="mt-6 rounded-xl border border-black/5 bg-gray-50 p-4">
              <div className="mb-2 flex items-center gap-1.5 text-eyebrow text-foreground/55">
                <Wallet className="h-3.5 w-3.5 text-brand" /> Payout terms
              </div>
              <div className="space-y-1.5 font-mono-tnum text-eyebrow text-foreground/70">
                <div className="flex justify-between"><span>Escrow only</span><span className="text-brand">on</span></div>
                <div className="flex justify-between"><span>USDC settlement</span><span className="text-brand">on</span></div>
                <div className="flex justify-between"><span>Release on approval</span><span className="text-brand">on</span></div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-xl bg-gradient-brand p-4 text-white">
              <span className="text-body-sm font-semibold">Matching this rail</span>
              <span className="num-display text-[1.75rem] leading-none">37 KOLs</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
