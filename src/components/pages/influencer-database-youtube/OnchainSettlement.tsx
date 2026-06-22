import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

const DEALS = [
  { name: 'DeFi Daily', amt: '5,000', status: 'Released', released: true },
  { name: 'L2 Signal', amt: '3,200', status: 'In escrow', released: false },
  { name: 'Chain Trader', amt: '4,100', status: 'In escrow', released: false },
];

/** Dark on-chain settlement section — the page's single dark punctuation moment.
 *  Terminal-style escrow panel with a restrained red glow on the focal card. */
export default function OnchainSettlement() {
  return (
    <section className="surface-onchain py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* copy */}
          <div>
            <span className="eyebrow">Pay on-chain</span>
            <h2 className="mt-3 display-lg font-display text-h3 leading-[1.1] text-white">
              Run campaigns and pay KOLs on-chain
            </h2>
            <div className="mt-6 space-y-4 text-body-md text-white/70">
              <p>
                When a KOL has a public contact or wallet, Kolio surfaces it — so
                you go from discovery to deal without the back-and-forth.
              </p>
              <p>
                Fund campaigns into escrow and release payment automatically on
                delivery. On-chain settlement means transparent, instant payouts.
              </p>
            </div>
            <a
              href="/demo-confirmation"
              className="mt-8 inline-flex items-center gap-2 text-body font-semibold text-white underline-offset-4 hover:underline"
            >
              See settlement in action
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* escrow terminal panel */}
          <div className="w-full rounded-xl border border-white/10 bg-surface-ink p-5 shadow-2xl glow-brand">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-body-sm font-semibold text-white">
                Campaign escrow
              </span>
              <span className="chip chip-onchain">Funded</span>
            </div>
            <div className="mt-4 space-y-3">
              {DEALS.map((d) => (
                <div
                  key={d.name}
                  className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.03] px-3 py-2.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-7 w-7 rounded-full bg-gradient-brand" />
                    <span className="text-body-sm font-semibold text-white">
                      {d.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="font-mono-tnum text-body-sm text-white">
                      {d.amt} <span className="text-white/50">USDC</span>
                    </p>
                    <p
                      className={`text-body-sm ${
                        d.released ? 'text-mint' : 'text-white/45'
                      }`}
                    >
                      {d.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-body-sm">
              <span className="text-white/50">Settled this campaign</span>
              <span className="font-mono-tnum text-mint">12,300 USDC</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
