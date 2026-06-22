import Container from '@/components/ui/Container';

const TRUSTED = ['Ledger', 'Arbitrum', 'OKX', 'Phantom', 'Polygon', 'Base'];

// signals Kolio checks before you fund a single token (real on-chain framing)
const SIGNALS = [
  { k: 'Audience authenticity', v: '96%', sub: 'real, non-bot followers' },
  { k: 'Bought-follower flag', v: '4%', sub: 'inflation detected' },
  { k: 'On-chain escrow', v: 'USDC', sub: 'released on delivery' },
];

/** Dark on-chain punctuation band: "Use Kolio to vet KOLs & their audiences" + signal terminal + trusted marquee. */
export default function AnalyzeBlock() {
  return (
    <section className="bg-background py-8">
      <Container>
        <div className="surface-onchain box-border w-full overflow-hidden rounded-xl px-6 py-12 md:px-12 md:py-16">
          <div className="mx-auto flex w-full max-w-[64rem] flex-col items-center gap-6 text-center">
            <span className="text-eyebrow font-bold uppercase tracking-[0.08em] text-mint">Inside Kolio</span>
            <h2 className="display-lg text-center font-display text-[2.5rem] text-white lg:text-[4rem]">
              Vet crypto KOLs &amp; their audiences
            </h2>
            <p className="w-full max-w-[38rem] text-body-md leading-snug text-white/70">
              Proof-based analysis of any crypto KOL: real engagement, audience
              authenticity, bot-and-bought-follower detection, niche fit across
              DeFi, NFTs, L1/L2, trading and gaming — plus on-chain payment and
              escrow when you book them.
            </p>

            {/* Signal terminal */}
            <div className="mt-2 grid w-full max-w-[46rem] grid-cols-1 gap-3 sm:grid-cols-3">
              {SIGNALS.map((s) => (
                <div
                  key={s.k}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-5 py-5 text-left"
                >
                  <div className="num-display font-mono-tnum text-h4 leading-none text-white">
                    {s.v}
                  </div>
                  <div className="mt-2 text-body-sm font-semibold text-white">{s.k}</div>
                  <div className="text-eyebrow text-white/45">{s.sub}</div>
                </div>
              ))}
            </div>

            <a
              href="/demo-confirmation"
              className="glow-brand mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-brand px-5 py-2.5 text-base font-semibold leading-6 text-white transition-opacity hover:opacity-90"
            >
              Book a demo
            </a>

            {/* Trusted-by web3 brand wordmark row */}
            <div className="mt-6 w-full border-t border-white/10 pt-6">
              <p className="mb-4 text-center text-eyebrow font-bold uppercase tracking-[0.08em] text-mint">Trusted by teams across web3</p>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {TRUSTED.map((name) => (
                  <span key={name} className="font-display text-lg font-semibold tracking-tight text-white/45">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
