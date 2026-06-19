import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Hero — display headline with one gradient-highlighted word, dual CTA, then a brand panel with the live product dashboard mockup. */
export default function Hero() {
  return (
    <section className="relative bg-background">
      <Container>
        <div className="flex flex-col items-center pt-12 text-center md:pt-16">
          <span className="mb-6 inline-flex items-center gap-2 rounded-pill border border-brand/20 bg-brand/5 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-gradient-brand" />
            <span className="text-body-sm font-semibold text-foreground">
              KOL Database・TikTok
            </span>
          </span>

          <h1 className="max-w-[1000px] font-display uppercase text-[2.75rem] leading-[0.92] text-foreground sm:text-[4rem] md:text-[5.5rem] lg:text-[6.5rem]">
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
          <p className="mt-4 text-body-sm text-foreground/50">
            Proof-based vetting・No vanity metrics・On-chain payments
          </p>
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
    { handle: '@defi.daily', niche: 'DeFi', reach: '412K', quality: 'A', er: '7.2%' },
    { handle: '@l2.alpha', niche: 'L1 / L2', reach: '286K', quality: 'A', er: '6.4%' },
    { handle: '@nft.curator', niche: 'NFTs', reach: '198K', quality: 'B+', er: '5.1%' },
    { handle: '@chart.degen', niche: 'Trading', reach: '521K', quality: 'A', er: '8.9%' },
    { handle: '@web3.gaming', niche: 'Gaming', reach: '147K', quality: 'B+', er: '4.7%' },
  ];
  return (
    <div className="text-left">
      <div className="flex flex-wrap items-center gap-2 border-b border-black/5 pb-4">
        <span className="rounded-pill bg-brand/10 px-3 py-1 text-body-sm font-semibold text-brand">
          Niche: DeFi, NFTs, Trading
        </span>
        <span className="rounded-pill bg-background-soft px-3 py-1 text-body-sm text-foreground/70">
          Audience quality ≥ B+
        </span>
        <span className="rounded-pill bg-background-soft px-3 py-1 text-body-sm text-foreground/70">
          Real reach &gt; 100K
        </span>
      </div>
      <div className="mt-4 grid grid-cols-[1.4fr_1fr_0.8fr_0.8fr_0.7fr] gap-2 text-body-sm font-semibold text-foreground/40">
        <span>KOL</span>
        <span>Niche</span>
        <span>Real reach</span>
        <span>Audience</span>
        <span>Eng.</span>
      </div>
      {rows.map((r) => (
        <div
          key={r.handle}
          className="grid grid-cols-[1.4fr_1fr_0.8fr_0.8fr_0.7fr] items-center gap-2 border-t border-black/5 py-3 text-body-sm"
        >
          <span className="font-semibold text-foreground">{r.handle}</span>
          <span className="text-foreground/70">{r.niche}</span>
          <span className="text-foreground/70">{r.reach}</span>
          <span>
            <span className="rounded-sm bg-brand/10 px-2 py-0.5 font-semibold text-brand">
              {r.quality}
            </span>
          </span>
          <span className="text-foreground/70">{r.er}</span>
        </div>
      ))}
    </div>
  );
}
