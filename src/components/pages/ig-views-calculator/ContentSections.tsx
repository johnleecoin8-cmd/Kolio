import Container from '@/components/ui/Container';

/**
 * Two stacked text-led content sections:
 *  - "How do we calculate average views?"
 *  - "Check average views by content format"
 * Both are heading + rich body + a dark CTA button, single column on this page.
 */
export default function ContentSections() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-24 md:gap-40">
          {/* How do we calculate average views? */}
          <div className="flex flex-col items-start gap-4">
            <h2 className="font-display text-5xl xl:text-7xl font-bold leading-tight text-foreground">
              How do we calculate average views?
            </h2>
            <div className="text-lg leading-relaxed text-foreground">
              <p>
                To calculate a creator's average views, we look at a recent set
                of Reels and compute the average number of views per Reel. This
                helps smooth out one-off viral posts and gives you a clearer
                baseline of typical performance.
              </p>
              <p className="mt-4 font-semibold">
                Average views = Total views across recent Reels ÷ Number of Reels
              </p>
              <p className="mt-4">
                Modash uses recent content to estimate average views.
              </p>
            </div>
            <a
              href="https://www.modash.io/signup"
              className="mt-10 inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-ink px-6 text-body-md font-semibold text-white shadow-btn transition hover:opacity-90"
            >
              Check Average Views
            </a>
          </div>

          {/* Check average views by content format */}
          <div className="flex flex-col items-start gap-4">
            <h2 className="font-display text-5xl xl:text-7xl font-bold leading-tight text-foreground">
              Check average views by content format
            </h2>
            <div className="text-lg leading-relaxed text-foreground">
              <p>
                When you review an Instagram creator, it helps to understand what
                kinds of Reels drive the strongest views.
              </p>
              <p className="mt-4">Use this to:</p>
              <ul className="ml-6 mt-2 list-disc">
                <li>Identify repeatable formats that perform well</li>
                <li>See whether views are consistent across recent uploads</li>
                <li>Avoid creators who rely on a single viral spike</li>
              </ul>
            </div>
            <a
              href="https://www.modash.io/signup"
              className="mt-10 inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-ink px-6 text-body-md font-semibold text-white shadow-btn transition hover:opacity-90"
            >
              Try for free
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
