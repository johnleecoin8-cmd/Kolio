import WideContainer from './WideContainer';

/**
 * Two stacked text-led content sections:
 *  - "How do we measure real reach?"
 *  - "Read reach by content format"
 * Both are heading + rich body + a dark CTA button, single column on this page.
 */
export default function ContentSections() {
  return (
    <section className="bg-background py-16 md:py-24">
      <WideContainer>
        <div className="flex flex-col gap-24 md:gap-40">
          {/* How do we measure real reach? */}
          <div className="flex flex-col items-start gap-4">
            <h2 className="font-display text-5xl xl:text-7xl font-bold leading-tight text-foreground">
              How do we measure real reach?
            </h2>
            <div className="text-lg leading-relaxed text-foreground">
              <p>
                To estimate a KOL&apos;s real reach, we look at a recent set of
                posts on X and compute the average impressions and engaged
                accounts per post. This smooths out one viral thread and gives
                you a clearer baseline of the audience a KOL actually moves —
                not the follower count on their bio.
              </p>
              <p className="mt-4 font-semibold">
                Real reach = Total impressions across recent posts ÷ Number of
                posts
              </p>
              <p className="mt-4">
                Kolio cross-checks this against audience quality so inflated
                follower counts and bot-padded engagement don&apos;t pass as
                reach.
              </p>
            </div>
            <a
              href="/demo-confirmation"
              className="mt-10 inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-ink px-6 text-body-md font-semibold text-white shadow-btn transition hover:opacity-90"
            >
              Check a KOL&apos;s reach
            </a>
          </div>

          {/* Read reach by content format */}
          <div className="flex flex-col items-start gap-4">
            <h2 className="font-display text-5xl xl:text-7xl font-bold leading-tight text-foreground">
              Read reach by content format
            </h2>
            <div className="text-lg leading-relaxed text-foreground">
              <p>
                When you vet a crypto KOL, it helps to understand which formats
                actually land — long-form threads, quote posts, Spaces, or a
                YouTube breakdown — and which audience each one reaches.
              </p>
              <p className="mt-4">Use this to:</p>
              <ul className="ml-6 mt-2 list-disc">
                <li>Identify repeatable formats that drive real engagement</li>
                <li>See whether reach is consistent across recent posts</li>
                <li>
                  Avoid KOLs who lean on one airdrop-season spike to look big
                </li>
              </ul>
            </div>
            <a
              href="/demo-confirmation"
              className="mt-10 inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-ink px-6 text-body-md font-semibold text-white shadow-btn transition hover:opacity-90"
            >
              Try Kolio free
            </a>
          </div>
        </div>
      </WideContainer>
    </section>
  );
}
