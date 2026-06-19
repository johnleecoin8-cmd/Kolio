import Container from '@/components/ui/Container';

/** Hero — brand wash, big display headline with gradient highlight, CTA, stat panel right. */
export default function Hero() {
  return (
    <section className="bg-violet/55">
      <Container>
        <div className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          {/* copy */}
          <div className="max-w-xl">
            <h1 className="font-display text-[2.75rem] leading-[1.05] text-violet-dark md:text-[3.5rem]">
              The KOL discovery engine for{' '}
              <span className="text-gradient-brand">web3</span> brands
            </h1>
            <p className="mt-6 text-body-md leading-relaxed text-violet-dark/90">
              Search and vet crypto key opinion leaders across X, YouTube,
              TikTok, and Telegram. Filter by real reach and audience quality,
              not vanity metrics &mdash; then launch campaigns with on-chain
              attribution built in.
            </p>
            <a
              href="/demo-confirmation"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-violet-dark px-6 text-body font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
            >
              Find your crypto KOLs &mdash; start free
            </a>
          </div>

          {/* stat panel — later.com inspired warm gradient callout */}
          <div className="flex justify-center md:justify-end">
            <div className="grid w-full max-w-[480px] grid-cols-2 gap-px overflow-hidden rounded-lg bg-gradient-brand p-px">
              <Stat value="120K+" label="Vetted crypto KOLs" />
              <Stat value="4" label="Platforms: X, YouTube, TikTok, Telegram" />
              <Stat value="8" label="Niches: DeFi, NFTs, L1/L2, trading, gaming & more" />
              <Stat value="100%" label="Proof-based audience verification" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-2 bg-background/95 p-6 backdrop-blur">
      <span className="font-display text-[2rem] leading-none text-violet-dark">
        {value}
      </span>
      <span className="text-body text-foreground/70">{label}</span>
    </div>
  );
}
