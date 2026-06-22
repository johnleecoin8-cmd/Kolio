import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Hero — eyebrow + editorial display headline, dual CTA, then a brand panel with the live KOL discovery mockup. */
export default function Hero() {
  return (
    <section className="relative bg-background">
      <Container>
        <div className="flex flex-col items-center pt-12 text-center md:pt-16">
          <span className="eyebrow mb-5 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            KOL Database · TikTok
          </span>

          <h1 className="display-xl max-w-[1000px] font-display text-[2.75rem] text-foreground sm:text-[4rem] md:text-[5.25rem] lg:text-[6rem]">
            Find the crypto TikTok KOLs worth{' '}
            <span className="text-gradient-brand">paying</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[640px] text-body-md text-foreground/70">
            Search every crypto and web3 creator on TikTok with AI and filters.
            Get verified reach, real audience quality, wallet-ready contacts, and
            a full history of past project collaborations — before you spend a
            dollar.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonA href="/demo-confirmation" variant="primary">
              Start free
            </ButtonA>
            <ButtonA href="/demo-confirmation" variant="secondary">
              Book a demo
            </ButtonA>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="chip chip-brand">Proof-based vetting</span>
            <span className="chip chip-ink">No vanity metrics</span>
            <span className="chip chip-onchain">On-chain payments</span>
          </div>
        </div>
      </Container>

      {/* brand full-bleed band with overlapping product mockup */}
      <div className="relative mt-12 md:mt-16">
        <div className="absolute inset-x-0 top-0 h-[70%] bg-gradient-brand opacity-90" />
        <div className="relative mx-auto w-full max-w-container px-4 sm:px-6">
          <div className="mx-auto w-full max-w-[1185px] rounded-xl bg-white p-4 shadow-nav sm:p-6 md:p-8">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Brand-neutral product mockup: a KOL discovery result table built with divs. */
function DashboardMockup() {
  const rows = [
    { handle: '@defi.daily', niche: 'DeFi', reach: '412K', tier: 'Elite', er: '7.2%' },
    { handle: '@l2.alpha', niche: 'L1 / L2', reach: '286K', tier: 'Elite', er: '6.4%' },
    { handle: '@nft.curator', niche: 'NFTs', reach: '198K', tier: 'Strong', er: '5.1%' },
    { handle: '@chart.degen', niche: 'Trading', reach: '521K', tier: 'Elite', er: '8.9%' },
    { handle: '@web3.gaming', niche: 'Gaming', reach: '147K', tier: 'Strong', er: '4.7%' },
  ];
  return (
    <div className="text-left">
      <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 pb-4">
        <span className="chip chip-brand">Niche: DeFi · NFTs · Trading</span>
        <span className="chip chip-ink">Audience quality ≥ Strong</span>
        <span className="chip chip-onchain">Real reach &gt; 100K</span>
      </div>
      <div className="mt-4 grid grid-cols-[1.4fr_1fr_0.8fr_0.9fr_0.7fr] gap-2 text-eyebrow font-semibold uppercase tracking-wide text-foreground/40">
        <span>KOL</span>
        <span>Niche</span>
        <span>Real reach</span>
        <span>Tier</span>
        <span>Eng.</span>
      </div>
      {rows.map((r) => (
        <div
          key={r.handle}
          className="grid grid-cols-[1.4fr_1fr_0.8fr_0.9fr_0.7fr] items-center gap-2 border-t border-gray-200 py-3 text-body-sm"
        >
          <span className="font-semibold text-foreground">{r.handle}</span>
          <span className="text-foreground/70">{r.niche}</span>
          <span className="font-mono-tnum text-foreground/80">{r.reach}</span>
          <span>
            <span className={r.tier === 'Elite' ? 'chip chip-brand' : 'chip chip-ink'}>
              {r.tier}
            </span>
          </span>
          <span className="font-mono-tnum text-foreground/80">{r.er}</span>
        </div>
      ))}
    </div>
  );
}
