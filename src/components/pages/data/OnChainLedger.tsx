import { BadgeCheck, Link2 } from 'lucide-react';
import Container from '@/components/ui/Container';

const LEDGER: { sig: string; kol: string; metric: string; value: string; block: string }[] = [
  { sig: '0x7af3…c19d', kol: '@defi_mara', metric: 'wallets driven', value: '1,284', block: '#20,481,902' },
  { sig: '0x1b08…9e41', kol: '@l2_onchain', metric: 'escrow released', value: '8,500 USDC', block: '#20,481,873' },
  { sig: '0xae52…44f0', kol: '@chartsdaily', metric: 'verified holders', value: '6,910', block: '#20,481,640' },
  { sig: '0x33cd…b7a2', kol: '@aptos_anya', metric: 'wallets driven', value: '942', block: '#20,481,517' },
];

/** Dark on-chain focal: a mono settlement ledger with mint verified chips,
 *  flanked by two floating proof cards. Original Kolio crypto-KOL data. */
export default function OnChainLedger() {
  return (
    <section className="canvas-warm py-20 md:py-28">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="chip chip-onchain">On-chain proof</span>
          <h2 className="display-light mt-5 text-[2.25rem] leading-[1.05] text-foreground md:text-[3.25rem]">
            Where the numbers come from
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-body-md text-foreground/60">
            Reach and payouts settle to wallets. Kolio reads that ledger directly,
            so every figure in a report is reconstructable from public blocks.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-12">
          {/* floating left card */}
          <div className="lg:col-span-3">
            <div className="card-kit shadow-float -rotate-1 rounded-2xl p-6 transition hover:rotate-0 lg:translate-y-6">
              <span className="chip chip-brand">Signal coverage</span>
              <div className="mt-6 flex items-end gap-2">
                <span className="num-display text-[3rem] leading-none text-foreground">30</span>
                <span className="mb-2 text-body-sm text-foreground/50">+ per KOL</span>
              </div>
              <div className="mt-5 space-y-2.5">
                {[
                  ['Real-follower rate', 'bg-brand'],
                  ['Holder overlap', 'bg-brand-coral'],
                  ['Volume attribution', 'bg-brand'],
                  ['Bot / fake share', 'bg-gray-300'],
                ].map(([l, c]) => (
                  <div key={l} className="flex items-center gap-2.5 text-body-sm text-foreground/70">
                    <span className={`h-2 w-2 rounded-pill ${c}`} />
                    {l}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* dark ledger focal */}
          <div className="lg:col-span-6">
            <div className="surface-onchain shadow-float rounded-2xl p-6 text-white md:p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Link2 className="h-5 w-5 text-mint" />
                  <span className="font-mono-tnum text-eyebrow text-white/60">kolio · settlement ledger</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-pill bg-mint/10 px-2.5 py-1 text-eyebrow font-semibold text-mint">
                  <span className="h-1.5 w-1.5 rounded-pill bg-mint" /> live
                </span>
              </div>

              <div className="mt-6 grid grid-cols-12 gap-2 border-b border-white/10 pb-2 font-mono-tnum text-eyebrow uppercase tracking-wide text-white/40">
                <span className="col-span-4">tx · kol</span>
                <span className="col-span-5">measured</span>
                <span className="col-span-3 text-right">block</span>
              </div>

              <div className="divide-y divide-white/5">
                {LEDGER.map((row) => (
                  <div key={row.sig} className="grid grid-cols-12 items-center gap-2 py-3.5">
                    <div className="col-span-4 min-w-0">
                      <div className="flex items-center gap-1.5 text-body-sm font-semibold text-white">
                        {row.kol}
                        <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-mint" />
                      </div>
                      <div className="font-mono-tnum text-eyebrow text-white/45">{row.sig}</div>
                    </div>
                    <div className="col-span-5">
                      <span className="num-display font-mono-tnum text-body-md text-white">{row.value}</span>
                      <span className="ml-2 text-eyebrow text-white/45">{row.metric}</span>
                    </div>
                    <div className="col-span-3 text-right font-mono-tnum text-eyebrow text-white/55">{row.block}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                <span className="text-body-sm text-white/60">All rows reconstructable from public chain data</span>
                <span className="inline-flex items-center gap-1.5 text-eyebrow font-semibold text-mint">
                  <BadgeCheck className="h-3.5 w-3.5" /> verified
                </span>
              </div>
            </div>
          </div>

          {/* floating right card */}
          <div className="lg:col-span-3">
            <div className="card-kit shadow-float rotate-1 rounded-2xl p-6 transition hover:rotate-0 lg:translate-y-6">
              <span className="chip chip-onchain">Attribution</span>
              <div className="mt-6">
                <div className="text-eyebrow text-foreground/50">Last 30 days, this index slice</div>
                <div className="num-display mt-1 text-[2.5rem] leading-none text-foreground">
                  24.6<span className="text-body-md text-foreground/45">k wallets</span>
                </div>
              </div>
              <div className="mt-5 space-y-2 font-mono-tnum text-eyebrow">
                <div className="flex justify-between text-foreground/60">
                  <span>tagged to a KOL link</span>
                  <span className="text-brand">71%</span>
                </div>
                <div className="flex justify-between text-foreground/60">
                  <span>made a first swap</span>
                  <span className="text-brand">38%</span>
                </div>
                <div className="flex justify-between text-foreground/60">
                  <span>repeat within 14d</span>
                  <span className="text-brand">22%</span>
                </div>
              </div>
              <div className="mt-5 inline-flex items-center gap-1.5 rounded-pill bg-coral-bg px-3 py-1.5 text-eyebrow font-semibold text-brand">
                <BadgeCheck className="h-3.5 w-3.5" /> on-chain matched
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
