import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Brand-neutral TikTok KOL board mockup — replaces the stock illustration. */
function DiscoveryBoard() {
  const rows = [
    { tag: 'DeFi', reach: '184K', real: '94%', eng: '6.2%' },
    { tag: 'L2 / Rollups', reach: '92K', real: '91%', eng: '4.8%' },
    { tag: 'Trading', reach: '311K', real: '88%', eng: '3.1%' },
    { tag: 'NFTs', reach: '47K', real: '96%', eng: '8.4%' },
  ];
  return (
    <div className="card-kit w-full max-w-[560px] p-4 md:p-5">
      <div className="flex items-center gap-2 border-b border-gray-200 pb-4">
        <span className="h-2.5 w-2.5 rounded-full bg-brand/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand/10" />
        <div className="ml-2 flex-1 rounded-pill bg-gray-50 px-3 py-1.5 text-left">
          <span className="text-body-sm text-foreground/50">
            TikTok · DeFi · 50K–250K · audience EN/KR
          </span>
        </div>
      </div>
      <div className="mt-4 space-y-3">
        {rows.map((r) => (
          <div
            key={r.tag}
            className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-3"
          >
            <span className="chip chip-brand shrink-0">{r.tag}</span>
            <div className="ml-auto flex items-center gap-5 text-right">
              <div>
                <div className="font-mono-tnum text-body font-semibold text-foreground">
                  {r.reach}
                </div>
                <div className="text-eyebrow text-foreground/50">reach</div>
              </div>
              <div>
                <div className="font-mono-tnum text-body font-semibold text-mint">
                  {r.real}
                </div>
                <div className="text-eyebrow text-foreground/50">real</div>
              </div>
              <div>
                <div className="font-mono-tnum text-body font-semibold text-foreground">
                  {r.eng}
                </div>
                <div className="text-eyebrow text-foreground/50">eng</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Hero — white surface, editorial display headline, chips, neutral board mockup. */
export default function Hero() {
  return (
    <section className="bg-white pt-16 md:pt-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <span className="eyebrow">Discover · TikTok</span>
            <h1 className="mt-4 display-xl font-display text-[2.5rem] text-foreground sm:text-[3rem] lg:text-[3.5rem]">
              Find <span className="text-gradient-brand">verified</span> TikTok
              KOLs for crypto
            </h1>
            <p className="mt-6 max-w-[520px] text-body-md text-foreground/70">
              Kolio indexes the crypto creators who actually move markets on
              TikTok. Search and filter by real reach, audience quality, and
              niche — DeFi, L1/L2, trading, NFTs, gaming — to find KOLs your
              project can trust, not just follower counts.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip chip-onchain">On-chain payouts</span>
              <span className="chip chip-ink">Real-follower vetting</span>
              <span className="chip chip-brand">Attribution built in</span>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonA href="/demo-confirmation" variant="primary">
                Start vetting KOLs
              </ButtonA>
              <ButtonA href="/demo-confirmation" variant="secondary">
                Book a demo
              </ButtonA>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <DiscoveryBoard />
          </div>
        </div>
      </Container>
    </section>
  );
}
