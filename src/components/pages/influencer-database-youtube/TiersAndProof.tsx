import { Link } from 'react-router-dom';
import { BadgeCheck, Play, ShieldCheck, Wallet } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Calm-premium proof section for the YouTube KOL database: tier chips that
 *  segment the creator graph, plus signature floating mini-UIs (channel proof
 *  card, watch-time chart, on-chain USDC release). All original Kolio copy. */

const TIERS = [
  { label: 'Nano', range: '10K – 50K', note: 'High-trust niche channels' },
  { label: 'Micro', range: '50K – 250K', note: 'Best engagement-per-dollar' },
  { label: 'Mid', range: '250K – 1M', note: 'Category-defining voices' },
  { label: 'Macro', range: '1M – 5M', note: 'Reach plays, vetted holders' },
  { label: 'Mega', range: '5M+', note: 'Cycle-moving headliners' },
];

export default function TiersAndProof() {
  return (
    <section className="canvas-warm2 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-brand">Filter by reach, not by guesswork</span>
          <h2 className="display-light mt-4 text-[2.25rem] leading-[1.05] text-foreground md:text-[3.25rem]">
            Every YouTube tier, <span className="text-gradient-brand">scored the same way</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-body-md text-foreground/60">
            From nano niche channels to cycle headliners, each KOL carries a Proof
            Score built on real watch time and on-chain audience overlap — so a
            500K channel and a 5M channel are judged on the same evidence.
          </p>
        </div>

        {/* Tier chips */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          {TIERS.map((t) => (
            <div
              key={t.label}
              className="card-kit shadow-float-sm flex items-center gap-3 rounded-2xl px-4 py-3"
            >
              <span className="chip chip-brand">{t.label}</span>
              <div className="text-left">
                <div className="num-display text-body-sm font-semibold text-foreground">{t.range}</div>
                <div className="text-eyebrow text-foreground/50">{t.note}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Signature floating cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {/* Channel proof card */}
          <div className="card-kit shadow-float -rotate-1 rounded-2xl p-6 transition hover:rotate-0 md:translate-y-3">
            <div className="flex items-center justify-between">
              <span className="chip chip-onchain">Proof Score</span>
              <ShieldCheck className="h-5 w-5 text-brand" />
            </div>
            <div className="mt-5 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-pill bg-gradient-brand text-body-sm font-bold text-white">
                CB
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-1 text-body-sm font-semibold text-foreground">
                  @ChainBriefing <BadgeCheck className="h-3.5 w-3.5 text-brand" />
                </div>
                <div className="text-eyebrow text-foreground/50">DeFi research · 412K subs</div>
              </div>
            </div>
            <div className="mt-6 flex items-end gap-3">
              <span className="num-display text-[3.5rem] leading-none text-foreground">90</span>
              <span className="mb-2 text-body-sm text-foreground/50">/ 100</span>
            </div>
            <div className="mt-4 space-y-2">
              {[['Real watch time', '93%', 'bg-brand'], ['On-chain holders', '57%', 'bg-brand-coral'], ['Bot / inflated', '5%', 'bg-gray-300']].map(([l, v, c]) => (
                <div key={l}>
                  <div className="mb-1 flex justify-between text-eyebrow text-foreground/55"><span>{l}</span><span className="font-mono-tnum">{v}</span></div>
                  <div className="h-1.5 rounded-pill bg-gray-100"><div className={`h-full rounded-pill ${c}`} style={{ width: v as string }} /></div>
                </div>
              ))}
            </div>
          </div>

          {/* Watch-time chart card */}
          <div className="card-kit shadow-float rounded-2xl p-6 transition hover:-translate-y-1 md:-translate-y-2">
            <div className="flex items-center justify-between">
              <span className="chip chip-brand">Watch time</span>
              <Play className="h-5 w-5 text-brand" />
            </div>
            <div className="mt-5">
              <div className="text-eyebrow text-foreground/50">Avg. sustained views · last 12 videos</div>
              <div className="num-display mt-1 text-[2.5rem] leading-none text-foreground">
                184K<span className="text-body-sm text-foreground/50"> / video</span>
              </div>
            </div>
            <div className="mt-6 flex h-28 items-end gap-1.5">
              {[38, 52, 44, 61, 49, 73, 66, 81, 70, 88, 79, 96].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-md bg-gradient-brand" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="mt-2 flex justify-between font-mono-tnum text-eyebrow text-foreground/40">
              <span>Jan</span><span>baseline 35K</span><span>Jun</span>
            </div>
          </div>

          {/* On-chain release card */}
          <div className="surface-onchain shadow-float rotate-1 rounded-2xl p-6 text-white transition hover:rotate-0 md:translate-y-3">
            <div className="flex items-center justify-between">
              <span className="chip chip-onchain">Escrow</span>
              <Wallet className="h-5 w-5 text-mint" />
            </div>
            <div className="mt-6">
              <div className="text-eyebrow text-white/50">Released when the video goes live</div>
              <div className="num-display mt-1 text-[2.75rem] leading-none text-white">
                12,000<span className="text-body-md text-white/50"> USDC</span>
              </div>
            </div>
            <div className="mt-5 space-y-2 font-mono-tnum text-eyebrow">
              <div className="flex justify-between text-white/70"><span>funded to escrow</span><span className="text-mint">✓</span></div>
              <div className="flex justify-between text-white/70"><span>video published & verified</span><span className="text-mint">✓</span></div>
              <div className="flex justify-between text-white"><span>released to @ChainBriefing</span><span className="text-mint">12,000.00</span></div>
            </div>
            <Link to="/deal/demo" className="mt-6 inline-flex items-center gap-2 text-body-sm font-semibold text-mint hover:underline">
              See the settlement rail
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
