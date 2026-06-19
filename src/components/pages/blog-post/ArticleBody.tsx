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
          <article className="max-w-[720px]">
            {/* intro */}
            <p className="text-body leading-relaxed text-foreground/80">
              Most influencer marketing tools were built for web2 — lifestyle creators,
              ecommerce shipping, PayPal payouts. Run a token launch or a protocol
              campaign through one of them and you quickly hit the wall: no real coverage
              of crypto KOLs on X and Telegram, no on-chain settlement, and no way to
              attribute the conversions that actually matter 🤦
            </p>
            <p className="mt-4 text-body leading-relaxed text-foreground/80">
              To save you weeks of trial and error, we rounded up 19 platforms marketers
              reach for when working with KOLs and compared them on what matters for web3:
            </p>
            <ul className="mt-4 space-y-2 pl-5 text-body leading-relaxed text-foreground/80">
              <li className="list-disc">Pricing (where available)</li>
              <li className="list-disc">Crypto KOL coverage and proof-based vetting</li>
              <li className="list-disc">On-chain payments, escrow, and attribution</li>
              <li className="list-disc">Strengths and weaknesses</li>
            </ul>
            <p className="mt-4 text-body leading-relaxed text-foreground/80">
              Let’s get into it…
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
