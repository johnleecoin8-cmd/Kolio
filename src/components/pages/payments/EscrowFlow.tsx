import { ArrowDownToLine, CheckCircle2, Send, Wallet } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Focal on-chain escrow flow: a floating dark .surface-onchain panel that walks
 *  a real USDC payout through funded -> delivered -> released, with mono nums,
 *  mint chips, and a soft glow. The proof spine of Kolio payouts. */

const STEPS: {
  key: string;
  icon: typeof Wallet;
  label: string;
  detail: string;
  amount: string;
  state: 'done' | 'live';
}[] = [
  {
    key: 'funded',
    icon: ArrowDownToLine,
    label: 'Funded to escrow',
    detail: 'Brand wallet → Kolio escrow contract',
    amount: '8,500.00',
    state: 'done',
  },
  {
    key: 'delivered',
    icon: Send,
    label: 'Deliverables verified',
    detail: '3 posts live · on-chain reach confirmed',
    amount: '—',
    state: 'done',
  },
  {
    key: 'released',
    icon: CheckCircle2,
    label: 'Released to KOL',
    detail: 'Escrow → @CryptoWhale.eth',
    amount: '8,500.00',
    state: 'live',
  },
];

export default function EscrowFlow() {
  return (
    <section className="canvas-warm py-20 md:py-28">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow text-brand">On-chain escrow</span>
          <h2 className="display-light mt-3 text-[2.25rem] leading-[1.05] text-foreground md:text-[3.25rem]">
            Money that moves only when the work is{' '}
            <span className="text-gradient-brand">proven</span>
          </h2>
          <p className="mt-5 text-body-md text-foreground/60">
            Every campaign budget sits in a USDC escrow contract. Funds release the moment
            deliverables clear verification — no chasing invoices, no trust gaps, both sides settled.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* soft brand glow behind the focal panel */}
          <div
            className="pointer-events-none absolute -inset-6 -z-0 rounded-[2rem] opacity-60 blur-2xl"
            style={{
              background:
                'radial-gradient(60% 70% at 50% 0%, hsl(8 80% 60% / 0.30), transparent 70%), radial-gradient(50% 60% at 80% 100%, hsl(158 64% 52% / 0.22), transparent 70%)',
            }}
          />

          <div className="surface-onchain shadow-float relative z-10 rotate-[-0.6deg] rounded-2xl p-6 text-white transition hover:rotate-0 md:p-8">
            {/* header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-mint" />
                <span className="text-body-sm font-semibold text-white/90">Escrow #KX-4821</span>
              </div>
              <span className="chip chip-onchain">USDC · Base</span>
            </div>

            {/* headline amount */}
            <div className="mt-7 border-b border-white/10 pb-6">
              <div className="eyebrow text-white/45">Released on delivery</div>
              <div className="num-display mt-1 text-[3rem] leading-none text-white md:text-[3.75rem]">
                8,500
                <span className="text-body-md font-normal text-white/45"> USDC</span>
              </div>
            </div>

            {/* the flow */}
            <ol className="mt-6 space-y-3">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                const live = s.state === 'live';
                return (
                  <li
                    key={s.key}
                    className={`flex items-center gap-4 rounded-xl border p-3.5 md:p-4 ${
                      live
                        ? 'border-mint/30 bg-mint/[0.06]'
                        : 'border-white/8 bg-white/[0.03]'
                    }`}
                  >
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-pill ${
                        live ? 'bg-mint/15 text-mint' : 'bg-white/5 text-white/60'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 text-body-sm font-semibold text-white">
                        {s.label}
                        {live && (
                          <span className="inline-flex items-center gap-1 rounded-pill bg-mint/15 px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wide text-mint">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-pill bg-mint" />
                            now
                          </span>
                        )}
                      </div>
                      <div className="truncate text-eyebrow text-white/45">{s.detail}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono-tnum text-body-sm font-semibold text-white/90">
                        {s.amount === '—' ? (
                          <span className="text-white/30">—</span>
                        ) : (
                          <>
                            {s.amount}
                            <span className="text-white/40"> USDC</span>
                          </>
                        )}
                      </div>
                      <div className="mt-0.5 font-mono-tnum text-[0.625rem] text-mint">
                        {s.state === 'done' ? '✓ confirmed' : '✓ settling'}
                      </div>
                    </div>
                    {/* connector line */}
                    {i < STEPS.length - 1 && (
                      <span className="pointer-events-none absolute" />
                    )}
                  </li>
                );
              })}
            </ol>

            {/* footer ledger */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white/[0.03] px-4 py-3 font-mono-tnum text-eyebrow text-white/50">
              <span>tx 0x9f2a…c41e</span>
              <span>gas 0.0021 ETH</span>
              <span className="text-mint">finalized · 12 confirmations</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
