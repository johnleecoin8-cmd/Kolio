import { motion } from 'framer-motion';
import { BadgeCheck, ShieldCheck, Wallet } from 'lucide-react';
import Container from '@/components/ui/Container';

const float = (i: number) => ({
  animate: { y: [0, -10, 0] },
  transition: { duration: 5 + i, repeat: Infinity, ease: 'easeInOut' as const, delay: i * 0.4 },
});

export default function FloatingCards() {
  return (
    <section className="canvas pb-24 pt-2 md:pb-32">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Proof Score */}
          <motion.div {...float(0)} className="card float -rotate-1 p-6 md:translate-y-4">
            <div className="flex items-center justify-between">
              <span className="chip chip-mint"><ShieldCheck className="h-3.5 w-3.5" /> Proof Score</span>
            </div>
            <div className="mt-6 flex items-end gap-2">
              <span className="num font-display text-[3.75rem] font-medium leading-none">92</span>
              <span className="mb-2 text-body-sm text-ink/40">/ 100</span>
            </div>
            <div className="mt-5 space-y-2.5">
              {[['Real followers', 94, 'bg-brand'], ['Engaged holders', 61, 'bg-brand-2'], ['Bots / fake', 4, 'bg-ink/15']].map(([l, v, c]) => (
                <div key={l as string}>
                  <div className="mb-1 flex justify-between text-eyebrow text-ink/55"><span>{l}</span><span className="num">{v}%</span></div>
                  <div className="h-1.5 rounded-pill bg-canvas-2"><div className={`h-full rounded-pill ${c}`} style={{ width: `${v}%` }} /></div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Discovery */}
          <motion.div {...float(1)} className="card float p-6">
            <span className="chip chip-brand">Discover</span>
            <div className="mt-5 space-y-2.5">
              {[['cryptowhale', 'DeFi', 92], ['l2maxi', 'Layer2', 88], ['onchain_ana', 'Trading', 85]].map(([h, n, s]) => (
                <div key={h as string} className="flex items-center gap-3 rounded-lg border border-hairline p-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-pill bg-gradient-to-br from-brand to-brand-2 text-eyebrow font-semibold text-white">{(h as string).slice(0, 2).toUpperCase()}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1 text-body-sm font-medium">@{h}<BadgeCheck className="h-3.5 w-3.5 text-brand" /></div>
                    <div className="text-eyebrow text-ink/45">{n} KOL</div>
                  </div>
                  <span className="num chip chip-brand">{s as number}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Escrow */}
          <motion.div {...float(2)} className="panel grain relative overflow-hidden rounded-lg p-6 text-on-dark float rotate-1 md:translate-y-4">
            <div className="flex items-center justify-between">
              <span className="chip chip-dark"><Wallet className="h-3.5 w-3.5" /> Escrow</span>
            </div>
            <div className="mt-6">
              <div className="text-eyebrow text-on-dark/45">Released on delivery</div>
              <div className="num font-display mt-1 text-[2.6rem] font-medium leading-none">8,500<span className="text-body-lg text-on-dark/45"> USDC</span></div>
            </div>
            <div className="mono mt-5 space-y-2 text-eyebrow">
              <div className="flex justify-between text-on-dark/65"><span>funded to escrow</span><span className="text-mint">done</span></div>
              <div className="flex justify-between text-on-dark/65"><span>KOL delivered</span><span className="text-mint">done</span></div>
              <div className="flex justify-between"><span>released</span><span className="text-mint">8,500.00</span></div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
