import { BadgeCheck, Mail, ShieldCheck, Wallet } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Floating outreach + contact mini-UIs (calm-premium signature).
 *  Verified-contact card, a personalized outreach draft, and an escrow handoff —
 *  all original Kolio surfaces, gently rotated with real depth. */
export default function OutreachUI() {
  return (
    <section className="canvas-warm pb-20 pt-4 md:pb-28">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Verified contact card */}
          <div className="card-kit shadow-float -rotate-1 rounded-2xl p-6 transition hover:rotate-0 md:translate-y-3">
            <div className="flex items-center justify-between">
              <span className="chip chip-brand">Verified contact</span>
              <ShieldCheck className="h-5 w-5 text-brand" />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-pill bg-gradient-brand text-body-sm font-bold text-white">CW</span>
              <div className="min-w-0">
                <div className="flex items-center gap-1 text-body font-semibold text-foreground">
                  @cryptowhale <BadgeCheck className="h-4 w-4 text-brand" />
                </div>
                <div className="text-eyebrow text-foreground/50">DeFi · 412K reach</div>
              </div>
            </div>
            <div className="mt-5 space-y-2 text-body-sm">
              <div className="flex items-center gap-2 rounded-lg border border-gray-100 p-2.5 font-mono-tnum text-foreground/70">
                <Mail className="h-4 w-4 text-brand" /> whale@signal.xyz
                <span className="ml-auto chip chip-onchain">Reachable</span>
              </div>
              <div className="flex justify-between rounded-lg border border-gray-100 p-2.5">
                <span className="text-foreground/55">Wallet-active followers</span>
                <span className="font-mono-tnum font-bold text-foreground">61%</span>
              </div>
            </div>
          </div>

          {/* Personalized outreach draft */}
          <div className="card-kit shadow-float rounded-2xl p-6 transition hover:-translate-y-1 md:-translate-y-2">
            <span className="chip chip-brand">Outreach draft</span>
            <div className="mt-5 rounded-xl bg-coral-bg/60 p-4 text-body-sm leading-relaxed text-foreground/80">
              Hi <span className="rounded bg-coral-bg px-1 font-semibold text-brand">{'{handle}'}</span>, we loved your
              thread on <span className="rounded bg-coral-bg px-1 font-semibold text-brand">{'{chain}'}</span> liquidity.
              Kolio runs a paid campaign for{' '}
              <span className="rounded bg-coral-bg px-1 font-semibold text-brand">{'{project}'}</span> — escrow-backed,
              proof-based payout.
            </div>
            <div className="mt-4 space-y-2 text-eyebrow">
              <div className="flex justify-between text-foreground/55">
                <span>Personalized sends</span><span className="font-mono-tnum font-bold text-foreground">240</span>
              </div>
              <div className="flex justify-between text-foreground/55">
                <span>Reply rate</span><span className="font-mono-tnum font-bold text-brand">34%</span>
              </div>
              <div className="h-1.5 rounded-pill bg-gray-100"><div className="h-full w-[34%] rounded-pill bg-gradient-brand" /></div>
            </div>
          </div>

          {/* Escrow handoff card */}
          <div className="surface-onchain shadow-float rotate-1 rounded-2xl p-6 text-white transition hover:rotate-0 md:translate-y-3">
            <div className="flex items-center justify-between">
              <span className="chip chip-onchain">Escrow handoff</span>
              <Wallet className="h-5 w-5 text-mint" />
            </div>
            <div className="mt-6">
              <div className="text-eyebrow text-white/50">Same thread as the contact</div>
              <div className="num-display mt-1 text-[2.75rem] leading-none text-white">8,500<span className="text-body-md text-white/50"> USDC</span></div>
            </div>
            <div className="mt-5 space-y-2 font-mono-tnum text-eyebrow">
              <div className="flex justify-between text-white/70"><span>reply received</span><span className="text-mint">✓</span></div>
              <div className="flex justify-between text-white/70"><span>terms agreed</span><span className="text-mint">✓</span></div>
              <div className="flex justify-between text-white"><span>funded to escrow</span><span className="text-mint">8,500.00</span></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
