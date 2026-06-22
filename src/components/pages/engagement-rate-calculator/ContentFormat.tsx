import Container from '@/components/ui/Container';

const PLATFORMS = [
  { name: 'X (Twitter)', rate: '4.8%', w: '78%' },
  { name: 'YouTube', rate: '3.2%', w: '54%' },
  { name: 'Telegram', rate: '6.1%', w: '92%' },
  { name: 'TikTok', rate: '2.7%', w: '46%' },
];

/** "Compare engagement across every crypto channel" — mockup left, text right. */
export default function ContentFormat() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-16">
          <div className="flex flex-col items-start justify-start gap-4 lg:order-2 lg:flex-1">
            <span className="eyebrow">Per channel</span>
            <h2 className="display-lg mb-4 w-full break-words font-display text-5xl text-foreground lg:text-7xl">
              Compare engagement across every crypto channel
            </h2>
            <div className="w-full break-words text-lg font-normal leading-relaxed text-foreground">
              <p>
                A KOL who crushes it on X can be flat on YouTube or Telegram.
                When you&rsquo;re planning a launch, an airdrop, or a listing
                campaign, you need to know where their audience actually shows
                up. Kolio breaks engagement down per channel &mdash; X,
                YouTube, TikTok and Telegram &mdash; so you book the right voice
                for the right surface.
              </p>
            </div>
            <a
              href="/demo-confirmation"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-4 py-2 text-base font-semibold leading-6 text-white transition-colors hover:bg-[#333333]"
            >
              Try for free
            </a>
          </div>

          {/* brand-neutral per-channel mockup */}
          <div className="flex w-full justify-center lg:order-1 lg:flex-1">
            <div className="card-kit w-full max-w-[26rem] p-6">
              <div className="flex items-center justify-between">
                <span className="eyebrow">Engagement by channel</span>
                <span className="chip chip-onchain">Verified</span>
              </div>
              <div className="mt-5 flex flex-col gap-4">
                {PLATFORMS.map((p) => (
                  <div key={p.name}>
                    <div className="mb-1.5 flex items-center justify-between text-body-sm">
                      <span className="font-medium text-foreground">
                        {p.name}
                      </span>
                      <span className="num-display font-mono-tnum text-foreground/70">
                        {p.rate}
                      </span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-background-soft">
                      <div
                        className="bg-gradient-brand h-full rounded-full"
                        style={{ width: p.w }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
