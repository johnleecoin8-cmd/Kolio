import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, FileCheck2, Globe2 } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';
import StatTrio from '@/components/kit/StatTrio';
import Container from '@/components/ui/Container';
import EscrowFlow from '@/components/pages/payments/EscrowFlow';

/** Kolio /payments — calm-premium rebuild. On-chain USDC escrow for crypto KOL
 *  payouts: a light hero, a floating dark escrow-flow focal, cited proof stats,
 *  a quiet how-it-settles rhythm, and a calm get-started close. */
export default function Payments() {
  return (
    <main className="canvas-warm">
      <HeroPanel
        eyebrow="On-chain payouts for crypto KOLs"
        title={
          <>
            Pay your KOLs the moment the work is{' '}
            <span className="accent text-gradient-brand">proven</span>
          </>
        }
        subtitle="Budget sits in USDC escrow. Deliverables clear verification, funds release on-chain. No invoices, no trust gaps — one settled rail from brief to payout."
      >
        <Link
          to="/influencer-database"
          className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
        >
          Start a campaign <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/demo-confirmation"
          className="inline-flex items-center gap-2 rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
        >
          Book a demo
        </Link>
      </HeroPanel>

      {/* Focal: floating dark on-chain escrow flow */}
      <EscrowFlow />

      {/* Cited proof stats */}
      <StatTrio
        stats={[
          { value: 12, prefix: '$', suffix: 'M+', label: 'USDC settled through Kolio escrow' },
          { value: 0, suffix: '', label: 'disputes lost to non-delivery, all funds returnable' },
          { value: 24, suffix: 'h', label: 'median release time after deliverables clear' },
        ]}
        source="Source: Kolio settlement ledger, rolling 12-month window (internal). USDC on Base."
      />

      {/* Calm how-it-settles rhythm — white surface, floating mini-UIs */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="eyebrow text-brand">How settlement works</span>
            <h2 className="display-light mt-3 text-[2.25rem] leading-[1.05] text-foreground md:text-[3.25rem]">
              Three states, zero awkward emails
            </h2>
            <p className="mt-5 text-body-md text-foreground/60">
              The same escrow contract protects both sides. Brands stop pre-paying into the void;
              KOLs stop waiting 60 days to get paid for work that already shipped.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Fund card */}
            <div className="card-kit shadow-float -rotate-1 rounded-2xl p-6 transition hover:rotate-0 md:translate-y-3">
              <div className="flex items-center justify-between">
                <span className="chip chip-brand">Step 1 · Fund</span>
                <ShieldCheck className="h-5 w-5 text-brand" />
              </div>
              <div className="mt-6 text-eyebrow text-foreground/50">Locked in escrow</div>
              <div className="num-display mt-1 text-[2.5rem] leading-none text-foreground">
                8,500
                <span className="text-body-md font-normal text-foreground/40"> USDC</span>
              </div>
              <p className="mt-4 text-body-sm text-foreground/60">
                Budget leaves the brand wallet into a neutral contract. The KOL sees it is funded
                before posting a single word.
              </p>
            </div>

            {/* Verify card */}
            <div className="card-kit shadow-float rounded-2xl p-6 transition hover:-translate-y-1 md:-translate-y-2">
              <div className="flex items-center justify-between">
                <span className="chip chip-ink">Step 2 · Verify</span>
                <FileCheck2 className="h-5 w-5 text-foreground/70" />
              </div>
              <div className="mt-6 space-y-2.5">
                {[
                  ['3 posts live', '100%'],
                  ['On-chain reach matched', '98%'],
                  ['Real holder engagement', '74%'],
                ].map(([l, v]) => (
                  <div key={l}>
                    <div className="mb-1 flex justify-between text-eyebrow text-foreground/55">
                      <span>{l}</span>
                      <span className="font-mono-tnum">{v}</span>
                    </div>
                    <div className="h-1.5 rounded-pill bg-gray-100">
                      <div className="h-full rounded-pill bg-brand" style={{ width: v }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Release card */}
            <div className="surface-onchain shadow-float rotate-1 rounded-2xl p-6 text-white transition hover:rotate-0 md:translate-y-3">
              <div className="flex items-center justify-between">
                <span className="chip chip-onchain">Step 3 · Release</span>
                <Globe2 className="h-5 w-5 text-mint" />
              </div>
              <div className="mt-6 text-eyebrow text-white/50">Paid to KOL</div>
              <div className="num-display mt-1 text-[2.5rem] leading-none text-white">
                8,500
                <span className="text-body-md font-normal text-white/45"> USDC</span>
              </div>
              <div className="mt-5 space-y-2 font-mono-tnum text-eyebrow">
                <div className="flex justify-between text-white/70">
                  <span>settled to @CryptoWhale.eth</span>
                  <span className="text-mint">✓</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>no FX, no 60-day net</span>
                  <span className="text-mint">✓</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>released</span>
                  <span className="text-mint">8,500.00</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Calm close — get-started style CTA on a deeper warm surface */}
      <section className="canvas-warm2 py-24 md:py-36">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="display-light text-[2.5rem] leading-[1.02] text-foreground md:text-[4.5rem]">
              Settle your next campaign with{' '}
              <span className="accent text-gradient-brand">Kolio</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
              Fund in USDC, release on proof. Free to explore the escrow flow — no wallet connect
              required to see how it settles.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/influencer-database"
                className="inline-flex items-center gap-2 rounded-pill bg-brand px-6 py-3.5 font-semibold text-white shadow-float-sm transition hover:opacity-90"
              >
                Start a campaign <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/demo-confirmation"
                className="inline-flex items-center gap-2 rounded-pill border border-black/10 bg-white px-6 py-3.5 font-semibold text-foreground transition hover:bg-gray-50"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
