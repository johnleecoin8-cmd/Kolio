import { BadgeCheck, ShieldCheck, Wallet } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Floating product cards with real depth (calm-premium reference pattern),
 *  showing Kolio's own surfaces: Proof Score, discovery, on-chain payout. */
export default function FloatingCards() {
  return (
    <section className="canvas-warm pb-20 pt-4 md:pb-28">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Proof Score card */}
          <div className="card-kit shadow-float -rotate-1 rounded-2xl p-6 transition hover:rotate-0 md:translate-y-3">
            <div className="flex items-center justify-between">
              <span className="chip chip-onchain">Proof Score</span>
              <ShieldCheck className="h-5 w-5 text-brand" />
            </div>
            <div className="mt-6 flex items-end gap-3">
              <span className="num-display text-[3.5rem] leading-none text-foreground">92</span>
              <span className="mb-2 text-body-sm text-foreground/50">/ 100</span>
            </div>
            <div className="mt-4 space-y-2">
              {[['Real followers', '94%', 'bg-brand'], ['Engaged holders', '61%', 'bg-brand-coral'], ['Bots / fake', '4%', 'bg-gray-300']].map(([l, v, c]) => (
                <div key={l}>
                  <div className="mb-1 flex justify-between text-eyebrow text-foreground/55"><span>{l}</span><span className="font-mono-tnum">{v}</span></div>
                  <div className="h-1.5 rounded-pill bg-gray-100"><div className={`h-full rounded-pill ${c}`} style={{ width: v as string }} /></div>
                </div>
              ))}
            </div>
          </div>

          {/* Discovery card */}
          <div className="card-kit shadow-float rounded-2xl p-6 transition hover:-translate-y-1 md:-translate-y-2">
            <span className="chip chip-brand">Discover</span>
            <div className="mt-5 space-y-3">
              {[['CryptoWhale', 'DeFi', 92], ['L2Maxi', 'Layer2', 88], ['OnchainAna', 'Trading', 85]].map(([h, n, s]) => (
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
          </div>

          {/* On-chain payout card */}
          <div className="surface-onchain shadow-float rotate-1 rounded-2xl p-6 text-white transition hover:rotate-0 md:translate-y-3">
            <div className="flex items-center justify-between">
              <span className="chip chip-onchain">Escrow</span>
              <Wallet className="h-5 w-5 text-mint" />
            </div>
            <div className="mt-6">
              <div className="text-eyebrow text-white/50">Released on delivery</div>
              <div className="num-display mt-1 text-[2.75rem] leading-none text-white">8,500<span className="text-body-md text-white/50"> USDC</span></div>
            </div>
            <div className="mt-5 space-y-2 font-mono-tnum text-eyebrow">
              <div className="flex justify-between text-white/70"><span>funded to escrow</span><span className="text-mint">✓</span></div>
              <div className="flex justify-between text-white/70"><span>KOL delivered</span><span className="text-mint">✓</span></div>
              <div className="flex justify-between text-white"><span>released</span><span className="text-mint">8,500.00</span></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
