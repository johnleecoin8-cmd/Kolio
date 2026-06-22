import { Link } from 'react-router-dom';
import { ArrowRight, Wallet, Link2 } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Dark on-chain console focal: the one dark surface for rhythm. Shows campaign
 *  attribution down to wallet connects and escrow releases — Kolio's edge over
 *  vibes-based reporting. Original mini-UI built from divs + a small SVG sparkline. */

const ATTRIBUTION = [
  { handle: 'cryptowhale', reach: '412k', connects: 1840, conv: '0.45%' },
  { handle: 'l2maxi', reach: '288k', connects: 1210, conv: '0.42%' },
  { handle: 'onchain.ana', reach: '196k', connects: 980, conv: '0.50%' },
  { handle: 'defi.degen', reach: '154k', connects: 610, conv: '0.40%' },
];

const FLOW = [28, 34, 30, 42, 48, 45, 58, 66, 62, 74, 81, 92];

function Sparkline() {
  const w = 200;
  const h = 40;
  const max = Math.max(...FLOW);
  const min = Math.min(...FLOW);
  const span = max - min || 1;
  const step = w / (FLOW.length - 1);
  const line = FLOW.map((v, i) => {
    const x = i * step;
    const y = h - ((v - min) / span) * (h - 6) - 3;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-10 w-full" preserveAspectRatio="none" role="img" aria-label="Wallet connects this week">
      <line x1="0" y1={h - 1} x2={w} y2={h - 1} stroke="#fff" strokeOpacity="0.1" strokeWidth="1" />
      <path d={line} fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function OnchainConsole() {
  return (
    <section className="canvas-warm px-3 py-20 md:px-5 md:py-28">
      <Container>
        <div className="surface-onchain shadow-float mx-auto max-w-[1320px] overflow-hidden rounded-2xl p-7 text-white md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left: narrative */}
            <div>
              <span className="chip chip-onchain">On-chain attribution</span>
              <h2 className="display-light mt-5 text-[2rem] leading-[1.05] text-white md:text-[3rem]">
                Track each KOL to the wallet — and pay only on{' '}
                <span className="text-mint">delivery</span>
              </h2>
              <p className="mt-5 max-w-md text-body-md text-white/65">
                Every campaign link carries an attribution tag. Reach maps to clicks, clicks map to wallet connects, and escrow releases the moment delivery is verified. No spreadsheets, no he-said-she-said.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-5">
                {[
                  ['4,640', 'wallet connects'],
                  ['$48.5k', 'in escrow'],
                  ['0', 'disputes'],
                ].map(([v, l]) => (
                  <div key={l}>
                    <div className="num-display text-[1.6rem] leading-none text-white">{v}</div>
                    <div className="mt-1.5 text-eyebrow text-white/50">{l}</div>
                  </div>
                ))}
              </div>
              <Link
                to="/demo-confirmation"
                className="pill-light mt-9 inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
              >
                See attribution live <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right: console mini-UI */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur md:p-6">
              {/* console header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-body-sm font-semibold">
                  <Link2 className="h-4 w-4 text-mint" /> Launch · Token TGE
                </div>
                <span className="flex items-center gap-1.5 font-mono-tnum text-eyebrow text-mint">
                  <span className="h-1.5 w-1.5 rounded-pill bg-mint" /> live
                </span>
              </div>

              {/* wallet-connect sparkline */}
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <div className="text-eyebrow text-white/50">Wallet connects · 7d</div>
                  <div className="num-display mt-1 text-[1.9rem] leading-none text-white">4,640</div>
                </div>
                <span className="mb-1 inline-flex items-center gap-0.5 font-mono-tnum text-body-sm font-semibold text-mint">
                  +31%
                </span>
              </div>
              <div className="mt-3">
                <Sparkline />
              </div>

              {/* attribution table */}
              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="grid grid-cols-[1.4fr_0.8fr_0.9fr_0.7fr] gap-2 pb-2 text-[0.6rem] uppercase tracking-wider text-white/40">
                  <span>KOL</span>
                  <span className="text-right">Reach</span>
                  <span className="text-right">Connects</span>
                  <span className="text-right">Conv</span>
                </div>
                <div className="space-y-1.5">
                  {ATTRIBUTION.map((r) => (
                    <div key={r.handle} className="grid grid-cols-[1.4fr_0.8fr_0.9fr_0.7fr] items-center gap-2 rounded-lg bg-white/[0.04] px-3 py-2.5">
                      <span className="truncate text-body-sm font-semibold text-white">@{r.handle}</span>
                      <span className="text-right font-mono-tnum text-body-sm text-white/70">{r.reach}</span>
                      <span className="text-right font-mono-tnum text-body-sm text-white/90">{r.connects.toLocaleString()}</span>
                      <span className="text-right font-mono-tnum text-body-sm text-mint">{r.conv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* escrow release row */}
              <div className="mt-4 flex items-center justify-between rounded-lg border border-mint/20 bg-mint/[0.06] px-4 py-3">
                <span className="flex items-center gap-2 text-body-sm text-white/80">
                  <Wallet className="h-4 w-4 text-mint" /> Escrow released on delivery
                </span>
                <span className="num-display text-body-md text-mint">48,500.00 USDC</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
