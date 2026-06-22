import Container from '@/components/ui/Container';
import { Mail, ShieldCheck, Wallet, ArrowUpRight } from 'lucide-react';

/** Dark on-chain punctuation panel — a focal mock of a single KOL contact card
 *  that flows straight into an on-chain escrow deal. One dark surface per page. */
export default function OutreachPanel() {
  return (
    <section className="bg-surface-ink py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* copy */}
          <div>
            <span className="eyebrow">Contact → escrow</span>
            <h2 className="mt-3 display-lg text-h3 text-white">
              From a verified contact to a funded deal — without leaving Kolio
            </h2>
            <p className="mt-5 max-w-[460px] text-body-md text-white/65">
              Every KOL profile carries the proof you need and a real way to
              reach them. Open a conversation, agree terms, and lock USDC in
              escrow — the contact, the chat, and the on-chain payout live on one
              record.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="chip chip-onchain">On-chain escrow</span>
              <span className="chip chip-onchain">USDC settlement</span>
              <span className="chip chip-onchain">Verified handles</span>
            </div>
          </div>

          {/* focal contact + deal mock */}
          <div className="surface-onchain glow-brand rounded-xl p-6 md:p-7">
            {/* contact header */}
            <div className="flex items-center gap-4 border-b border-white/10 pb-5">
              <span className="h-12 w-12 shrink-0 rounded-full bg-gradient-brand" />
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-body-md font-semibold text-white">
                    @defi_signal
                  </span>
                  <ShieldCheck className="h-4 w-4 text-mint" strokeWidth={2.5} />
                </div>
                <div className="font-mono-tnum text-body-sm text-white/55">
                  0x7f… · DeFi / L2 research
                </div>
              </div>
              <span className="ml-auto inline-flex items-center gap-1 rounded-pill bg-white/10 px-3 py-1 text-body-sm font-semibold text-white">
                <Mail className="h-3.5 w-3.5" /> Reachable
              </span>
            </div>

            {/* metric strip */}
            <div className="grid grid-cols-3 gap-3 py-5">
              {[
                { v: '184K', l: 'Reach' },
                { v: '6.2%', l: 'Engagement' },
                { v: '2.1%', l: 'Fake' },
              ].map((m) => (
                <div
                  key={m.l}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-3 text-center"
                >
                  <div className="num-display text-2xl text-white">{m.v}</div>
                  <div className="mt-1 text-eyebrow text-white/45">{m.l}</div>
                </div>
              ))}
            </div>

            {/* escrow deal line */}
            <div className="rounded-lg border border-mint/25 bg-mint/[0.06] p-4">
              <div className="flex items-center gap-2">
                <Wallet className="h-4 w-4 text-mint" strokeWidth={2.5} />
                <span className="text-body-sm font-semibold text-white">
                  Escrow funded
                </span>
                <span className="ml-auto font-mono-tnum text-body-md font-bold text-mint">
                  3,200.00 USDC
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between font-mono-tnum text-body-sm text-white/55">
                <span>Deliverables go live</span>
                <span className="inline-flex items-center gap-1 text-white/80">
                  Release on proof <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
