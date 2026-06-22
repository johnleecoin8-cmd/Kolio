import { useState } from 'react';
import Container from '@/components/ui/Container';

/** Crypto-KOL TikTok creator tiers — calm chip selector with a floating sample card.
 *  Original Kolio copy; mini product UI built from divs (no external assets). */

type Tier = {
  id: string;
  label: string;
  range: string;
  cpm: string;
  note: string;
  sample: { handle: string; niche: string; followers: string; score: number };
};

const TIERS: Tier[] = [
  {
    id: 'nano',
    label: 'Nano',
    range: '1K – 10K',
    cpm: '$8 – 20',
    note: 'Tight degen pockets. Highest comment-to-view, best for early-token whisper campaigns.',
    sample: { handle: 'gasfee.gremlin', niche: 'L2 / airdrops', followers: '6.4K', score: 89 },
  },
  {
    id: 'micro',
    label: 'Micro',
    range: '10K – 100K',
    cpm: '$15 – 45',
    note: 'The TikTok crypto sweet spot — explainer creators with engaged, holder-leaning audiences.',
    sample: { handle: 'onchain.ana', niche: 'DeFi explainers', followers: '74K', score: 92 },
  },
  {
    id: 'mid',
    label: 'Mid',
    range: '100K – 1M',
    cpm: '$25 – 70',
    note: 'Reach plus credibility. Wallet-verified KOLs who can move a launch in one slot.',
    sample: { handle: 'L2maxi', niche: 'Trading / TA', followers: '430K', score: 86 },
  },
  {
    id: 'mega',
    label: 'Mega',
    range: '1M+',
    cpm: '$40 – 120',
    note: 'Top-of-funnel awareness. Booked through escrow with on-chain attribution on every slot.',
    sample: { handle: 'cryptowhale', niche: 'Market commentary', followers: '2.1M', score: 81 },
  },
];

export default function TierChips() {
  const [active, setActive] = useState('micro');
  const tier = TIERS.find((t) => t.id === active) ?? TIERS[1];

  return (
    <section className="canvas-warm py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-brand">Creator tiers</span>
          <h2 className="display-light mt-3 text-[2.25rem] leading-[1.05] text-foreground md:text-[3.25rem]">
            Match the slot to the <span className="accent text-gradient-brand">moment</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
            Every TikTok KOL in the index is graded by reach and proven on-chain audience quality. Pick a tier to see live pricing and a representative creator.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {TIERS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(t.id)}
              className={
                active === t.id
                  ? 'rounded-pill bg-brand px-5 py-2.5 text-body-sm font-semibold text-white shadow-float-sm transition'
                  : 'rounded-pill border border-black/10 bg-white px-5 py-2.5 text-body-sm font-semibold text-foreground/70 transition hover:border-black/20'
              }
            >
              {t.label}
              <span className="ml-2 font-mono-tnum text-eyebrow text-current/60">{t.range}</span>
            </button>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
          {/* Tier detail */}
          <div className="mx-auto w-full max-w-md md:mx-0">
            <div className="flex items-baseline gap-3">
              <span className="num-display text-[2.5rem] leading-none text-foreground">{tier.cpm}</span>
              <span className="text-body-sm text-foreground/50">est. CPM</span>
            </div>
            <p className="mt-4 max-w-sm text-body-md text-foreground/70">{tier.note}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip chip-brand">{tier.label} tier</span>
              <span className="chip chip-ink">{tier.range} followers</span>
              <span className="chip chip-onchain">Escrow-booked</span>
            </div>
          </div>

          {/* Floating sample creator card */}
          <div className="card-kit shadow-float -rotate-1 mx-auto w-full max-w-sm rounded-2xl p-6 transition hover:rotate-0 md:translate-y-2">
            <div className="flex items-center justify-between">
              <span className="chip chip-onchain">TikTok KOL</span>
              <span className="num-display rounded-pill bg-coral-bg px-2.5 py-1 text-eyebrow font-bold text-brand">
                Proof {tier.sample.score}
              </span>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-pill bg-gradient-brand text-body-sm font-bold text-white">
                {tier.sample.handle.slice(0, 2).toUpperCase()}
              </span>
              <div className="min-w-0">
                <div className="truncate text-body font-semibold text-foreground">@{tier.sample.handle}</div>
                <div className="text-eyebrow text-foreground/50">{tier.sample.niche}</div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <div className="num-display text-h4 leading-none text-foreground">{tier.sample.followers}</div>
                <div className="mt-1 text-eyebrow text-foreground/50">followers</div>
              </div>
              <div>
                <div className="num-display text-h4 leading-none text-foreground">{tier.cpm}</div>
                <div className="mt-1 text-eyebrow text-foreground/50">CPM range</div>
              </div>
            </div>
            <div className="mt-5 space-y-2">
              {[
                ['Real audience', '93%', 'bg-brand'],
                ['Holder overlap', '58%', 'bg-brand-coral'],
                ['Bots / fake', '5%', 'bg-gray-300'],
              ].map(([l, v, c]) => (
                <div key={l}>
                  <div className="mb-1 flex justify-between text-eyebrow text-foreground/55">
                    <span>{l}</span>
                    <span className="font-mono-tnum">{v}</span>
                  </div>
                  <div className="h-1.5 rounded-pill bg-gray-100">
                    <div className={`h-full rounded-pill ${c}`} style={{ width: v as string }} />
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
