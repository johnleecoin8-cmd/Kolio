import Container from '@/components/ui/Container';
import TableOfContents from './TableOfContents';
import PlatformSection from './PlatformSection';
import MidCta from './MidCta';
import { PLATFORMS } from './platforms';

/** Two-column article: sticky TOC rail + main content column with intro, 19 platforms, mid CTA. */
export default function ArticleBody() {
  return (
    <div className="bg-background py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
          {/* TOC rail */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <TableOfContents />
          </aside>

          {/* Article content */}
          <article className="max-w-[680px]">
            {/* intro — first paragraph gets a slightly larger lede */}
            <p className="text-[1.1875rem] leading-[1.7] text-foreground/85">
              Most influencer marketing tools were built for web2 — lifestyle creators,
              ecommerce shipping, PayPal payouts. Run a token launch or a protocol
              campaign through one of them and you quickly hit the wall: no real coverage
              of crypto KOLs on X and Telegram, no on-chain settlement, and no way to
              attribute the conversions that actually matter.
            </p>
            <p className="mt-5 text-body leading-[1.75] text-foreground/80">
              To save you weeks of trial and error, we rounded up 19 platforms marketers
              reach for when working with KOLs and compared them on what matters for web3:
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="chip chip-ink">Pricing</span>
              <span className="chip chip-brand">Proof-based vetting</span>
              <span className="chip chip-onchain">On-chain escrow</span>
              <span className="chip chip-onchain">Attribution</span>
              <span className="chip chip-ink">Strengths &amp; weaknesses</span>
            </div>
            <p className="mt-5 text-body leading-[1.75] text-foreground/80">
              Let’s get into it.
            </p>

            {/* platform sections */}
            <div className="divide-y divide-gray-200">
              {PLATFORMS.map((p) => (
                <PlatformSection key={p.num} platform={p} />
              ))}
            </div>

            <MidCta />
          </article>
        </div>
      </Container>
    </div>
  );
}
