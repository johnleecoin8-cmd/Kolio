import Container from '@/components/ui/Container';
import TableOfContents from './TableOfContents';
import PlatformSection from './PlatformSection';
import MidCta from './MidCta';
import { PLATFORMS } from './platforms';

/** Editorial reading layout on warm canvas: sticky TOC rail + a single comfortable
 *  measure column. Light, minimal, premium — no loud bands. */
export default function ArticleBody() {
  return (
    <div className="canvas-warm pb-8 pt-10 md:pb-12 md:pt-14">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          {/* TOC rail */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <TableOfContents />
          </aside>

          {/* Article content */}
          <article className="max-w-[680px]">
            <p className="text-body leading-[1.8] text-foreground/80">
              To save you weeks of trial and error, we rounded up the platforms marketers
              reach for when working with KOLs and compared them on the things that decide
              whether a crypto campaign lands: real KOL coverage on X and Telegram,
              proof-based vetting instead of follower counts, on-chain escrow, and
              attribution you can actually trace to wallets.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip chip-ink">Pricing</span>
              <span className="chip chip-brand">Proof-based vetting</span>
              <span className="chip chip-onchain">On-chain escrow</span>
              <span className="chip chip-onchain">Attribution</span>
              <span className="chip chip-ink">Strengths &amp; weaknesses</span>
            </div>

            <p className="mt-6 text-body leading-[1.8] text-foreground/80">
              Let’s get into it.
            </p>

            {/* platform sections */}
            <div className="mt-2 divide-y divide-hairline">
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
