import { ArrowUpRight, BadgeCheck, ShieldCheck, Wallet } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Outcome-titled floating case cards: each headline IS the result number.
 *  Built as rounded mini product-UIs (on-chain escrow, Proof Score, discovery
 *  roster) with gentle rotate/translate depth — the calm-premium signature. */
export default function OutcomeCases() {
  return (
    <section className="canvas-warm py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <span className="eyebrow">Case files</span>
          <h2 className="display-light mt-3 text-[2.25rem] leading-[1.05] text-foreground md:text-[3.25rem]">
            The number is the headline
          </h2>
          <p className="mt-5 max-w-lg text-body-md text-foreground/60">
            Every Kolio campaign closes with a settled, on-chain record. These are
            real outcomes — measured the same way for every team, never pitched.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Lead dark case — verified holder reach, escrow mini UI */}
          <article className="surface-onchain shadow-float -rotate-1 rounded-2xl p-7 text-white transition hover:rotate-0 md:translate-y-2">
            <div className="flex items-center justify-between">
              <span className="chip chip-onchain">Helix DEX · launch</span>
              <Wallet className="h-5 w-5 text-mint" />
            </div>
            <div className="mt-7">
              <div className="num-display text-[3.75rem] leading-none text-white">+412%</div>
              <div className="mt-2 text-body-md text-white/65">
                verified holder reach vs. their prior agency run
              </div>
            </div>
            <div className="mt-7 space-y-2 font-mono-tnum text-eyebrow">
              <div className="flex justify-between text-white/70"><span>escrow funded</span><span className="text-mint">42,000 USDC</span></div>
              <div className="flex justify-between text-white/70"><span>KOLs settled</span><span className="text-mint">17 / 17</span></div>
              <div className="flex justify-between text-white"><span>disputed payouts</span><span className="text-mint">0</span></div>
            </div>
            <div className="mt-7 flex items-center gap-1.5 text-body-sm font-semibold text-mint">
              Read the full record <ArrowUpRight className="h-4 w-4" />
            </div>
          </article>

          {/* Cost per verified action — Proof Score mini UI */}
          <article className="card-kit shadow-float rounded-2xl p-7 transition hover:-translate-y-1 md:-translate-y-2">
            <div className="flex items-center justify-between">
              <span className="chip chip-brand">Parity Protocol · awareness</span>
              <ShieldCheck className="h-5 w-5 text-brand" />
            </div>
            <div className="mt-7">
              <div className="num-display text-[3.75rem] leading-none text-foreground">$0.38</div>
              <div className="mt-2 text-body-md text-foreground/60">
                cost per verified on-chain action — down from $2.10
              </div>
            </div>
            <div className="mt-7 space-y-2.5">
              {[['Avg. KOL Proof Score', '89%', 'bg-brand'], ['Holders engaged', '74%', 'bg-brand-coral'], ['Bots filtered out', '31%', 'bg-gray-300']].map(([l, v, c]) => (
                <div key={l}>
                  <div className="mb-1 flex justify-between text-eyebrow text-foreground/55"><span>{l}</span><span className="font-mono-tnum">{v}</span></div>
                  <div className="h-1.5 rounded-pill bg-gray-100">
                    <div className={`h-full rounded-pill ${c}`} style={{ width: v as string }} />
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Attributed wallets — discovery roster mini UI */}
          <article className="card-kit shadow-float rotate-1 rounded-2xl p-7 transition hover:rotate-0 md:translate-y-2">
            <div className="flex items-center justify-between">
              <span className="chip chip-onchain">Lumen Wallet · growth</span>
              <BadgeCheck className="h-5 w-5 text-brand" />
            </div>
            <div className="mt-7">
              <div className="num-display text-[3.75rem] leading-none text-foreground">9,140</div>
              <div className="mt-2 text-body-md text-foreground/60">
                wallets attributed to KOL links in 21 days
              </div>
            </div>
            <div className="mt-7 space-y-2.5">
              {[['CryptoWhale', 'DeFi', 94], ['L2Maxi', 'Layer2', 90], ['OnchainAna', 'Trading', 87]].map(([h, n, s]) => (
                <div key={h as string} className="flex items-center gap-3 rounded-lg border border-gray-100 p-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-pill bg-gradient-brand text-eyebrow font-bold text-white">{(h as string).slice(0, 2).toUpperCase()}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1 text-body-sm font-semibold text-foreground">@{h}<BadgeCheck className="h-3.5 w-3.5 text-brand" /></div>
                    <div className="text-eyebrow text-foreground/50">{n} KOL</div>
                  </div>
                  <span className="num-display rounded-pill bg-coral-bg px-2 py-1 text-eyebrow font-bold text-brand">{s as number}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
