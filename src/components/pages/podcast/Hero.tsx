import Container from '@/components/ui/Container';

/** Podcast hero — editorial title on soft neutral, with a dark on-chain stat panel adjacent. */
export default function Hero() {
  return (
    <section className="bg-gray-50 pt-14 pb-16 md:pt-20 md:pb-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Left: editorial title */}
          <div>
            <span className="eyebrow">Kolio Podcast</span>
            <h1 className="mt-4 display-xl font-display text-h3 md:text-h1 text-foreground">
              The Web3 KOL Marketing Podcast
            </h1>
            <p className="mt-5 max-w-[560px] text-body text-foreground/70">
              Real playbooks from the teams running crypto KOL campaigns that
              actually convert. Kolio sits down with growth leads at exchanges,
              protocols, and projects to unpack how they find, vet, and pay
              KOLs across X, YouTube, Telegram, and TikTok — and how they
              prove ROI.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#episodes"
                className="inline-flex h-11 items-center justify-center rounded-sm bg-brand px-6 text-body-sm font-semibold text-white transition hover:opacity-90"
              >
                See all episodes
              </a>
              <a
                href="#guest"
                className="inline-flex h-11 items-center justify-center rounded-sm border border-hairline bg-white px-6 text-body-sm font-semibold text-foreground transition hover:bg-gray-50"
              >
                Become a guest
              </a>
            </div>
          </div>

          {/* Right: dark on-chain terminal panel as punctuation */}
          <div className="surface-onchain glow-brand rounded-lg p-7 md:p-8">
            <div className="flex items-center justify-between">
              <span className="chip chip-onchain">On air</span>
              <span className="font-mono-tnum text-eyebrow text-white/45">
                kolio.fm/feed
              </span>
            </div>
            <div className="mt-7 grid grid-cols-3 gap-5">
              {[
                { v: '42', l: 'Episodes' },
                { v: '6.4K', l: 'KOLs covered' },
                { v: '1.2K+', l: 'Brands listening' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="num-display text-h4 leading-none text-white">
                    {s.v}
                  </div>
                  <div className="mt-1 text-eyebrow text-white/45">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-7 space-y-2 border-t border-white/10 pt-5">
              {[
                ['LATEST', 'George Hu · Arbitrum'],
                ['NEXT', 'Rugile Petraitis · Polygon'],
              ].map(([tag, who]) => (
                <div
                  key={tag}
                  className="flex items-center justify-between font-mono-tnum text-body-sm"
                >
                  <span className="text-mint">{tag}</span>
                  <span className="text-white/80">{who}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
