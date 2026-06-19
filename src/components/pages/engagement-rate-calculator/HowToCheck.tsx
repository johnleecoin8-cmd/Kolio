import Container from '@/components/ui/Container';

/** "How to check a crypto KOL's engagement rate" — text left, brand-neutral mockup right. */
export default function HowToCheck() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-16">
          <div className="flex flex-col items-start justify-start gap-4 lg:flex-1">
            <h2 className="mb-4 w-full break-words font-display text-5xl font-normal leading-tight text-foreground lg:text-7xl">
              How to check a crypto KOL&rsquo;s engagement rate
            </h2>
            <div className="w-full break-words text-lg font-normal leading-relaxed text-foreground">
              <p>
                To find a KOL&rsquo;s engagement rate, take the median number of
                engagements (likes + replies + reposts) across their recent
                posts, divide by their follower count, then multiply by 100.
                That single number tells you how much of an audience is
                actually paying attention &mdash; not just following.
              </p>
              <p className="mt-4">
                Kolio uses the last two months of content to calculate
                engagement rate, then layers on audience-authenticity checks so
                bought followers and bot replies can&rsquo;t inflate the score.
              </p>
            </div>
          </div>

          {/* brand-neutral metric mockup */}
          <div className="flex w-full justify-center lg:flex-1">
            <div className="w-full max-w-[26rem] rounded-2xl border border-black/10 bg-white p-6 shadow-nav">
              <div className="flex items-center justify-between">
                <span className="text-body-sm font-semibold text-foreground/60">
                  @defi_kol
                </span>
                <span className="rounded-full bg-positive/10 px-2.5 py-1 text-eyebrow font-semibold uppercase tracking-wide text-positive">
                  Verified reach
                </span>
              </div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-gradient-brand font-display text-5xl font-semibold leading-none">
                  4.82%
                </span>
                <span className="text-body-sm text-foreground/50">
                  engagement rate
                </span>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  { k: 'Likes', v: '3.1K' },
                  { k: 'Replies', v: '412' },
                  { k: 'Reposts', v: '688' },
                ].map((m) => (
                  <div
                    key={m.k}
                    className="rounded-lg bg-background-soft px-3 py-3"
                  >
                    <div className="font-display text-lg font-semibold text-foreground">
                      {m.v}
                    </div>
                    <div className="text-eyebrow uppercase tracking-wide text-foreground/50">
                      {m.k}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-end gap-1.5">
                {[40, 62, 35, 78, 52, 90, 48, 70, 58].map((h, i) => (
                  <div
                    key={i}
                    className="bg-gradient-brand flex-1 rounded-t"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
