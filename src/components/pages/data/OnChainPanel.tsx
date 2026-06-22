import { ShieldCheck, Wallet, Activity, Link2 } from 'lucide-react';
import Container from '@/components/ui/Container';

type Ledger = {
  kol: string;
  handle: string;
  chain: string;
  wallet: string;
  volume: string;
  score: number;
};

/** A single resolved KOL row, presented as on-chain ledger output. */
const ROWS: Ledger[] = [
  { kol: 'defiwhale.eth', handle: '@defiwhale', chain: 'Base', wallet: '0x7a3f…4eC1', volume: '1,284,500', score: 94 },
  { kol: 'solana_sage', handle: '@sol_sage', chain: 'Solana', wallet: 'Hf9k…Qm2v', volume: '742,100', score: 88 },
  { kol: 'arbitrum_anna', handle: '@arb_anna', chain: 'Arbitrum', wallet: '0x19b2…Aa07', volume: '610,930', score: 81 },
  { kol: 'gmx_degen', handle: '@gmxdegen', chain: 'Avalanche', wallet: '0xc4e8…91Df', volume: '398,440', score: 76 },
];

/** Dark on-chain terminal panel — the page's single focal dark surface.
 *  Renders attributed campaign volume as a verifiable ledger (mono numbers,
 *  mint verified chips), making "proof-based data" tangible. */
export default function OnChainPanel() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="surface-onchain glow-brand overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[440px]">
              <span className="eyebrow">On-chain truth</span>
              <h2 className="mt-3 display-lg text-h3 text-white">
                Every metric resolves to a wallet
              </h2>
              <p className="mt-4 text-body-md text-white/65">
                Reach can be faked. On-chain conversions can’t. Kolio ties each
                KOL’s campaign attribution to a verifiable wallet and settles
                payouts in USDC — so the data you vet is the data the chain
                already proves.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="chip chip-onchain">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden /> Mint verified
                </span>
                <span className="chip chip-onchain">
                  <Wallet className="h-3.5 w-3.5" aria-hidden /> USDC settled
                </span>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                <div>
                  <div className="num-display font-mono-tnum text-h3 text-mint">3,036,420</div>
                  <div className="mt-1 text-eyebrow text-white/45">USDC attributed</div>
                </div>
                <div>
                  <div className="num-display font-mono-tnum text-h3 text-white">12,847</div>
                  <div className="mt-1 text-eyebrow text-white/45">wallets resolved</div>
                </div>
                <div>
                  <div className="num-display font-mono-tnum text-h3 text-white">100%</div>
                  <div className="mt-1 text-eyebrow text-white/45">on-chain auditable</div>
                </div>
              </div>
            </div>

            {/* Ledger terminal */}
            <div className="w-full max-w-[560px] rounded-2xl border border-white/10 bg-black/30 backdrop-blur">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                <Activity className="h-4 w-4 text-mint" aria-hidden />
                <span className="font-mono-tnum text-body-sm text-white/70">
                  attribution_ledger.live
                </span>
                <span className="ml-auto flex items-center gap-1.5 text-eyebrow text-mint">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" />
                  syncing
                </span>
              </div>

              <div className="divide-y divide-white/8">
                {ROWS.map((r) => (
                  <div key={r.handle} className="flex items-center gap-4 px-5 py-4">
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-body-sm font-semibold text-white">
                        {r.handle}
                      </div>
                      <div className="mt-0.5 flex items-center gap-1.5 font-mono-tnum text-eyebrow text-white/45">
                        <Link2 className="h-3 w-3" aria-hidden />
                        {r.chain} · {r.wallet}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="num-display font-mono-tnum text-body-md text-mint">
                        ${r.volume}
                      </div>
                      <div className="text-eyebrow text-white/40">attributed</div>
                    </div>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-pill border border-mint/30 bg-mint/10 font-mono-tnum text-body-sm font-bold text-mint">
                      {r.score}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 px-5 py-3 text-center font-mono-tnum text-eyebrow text-white/35">
                Proof Score · authenticity + on-chain volume + engagement
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
