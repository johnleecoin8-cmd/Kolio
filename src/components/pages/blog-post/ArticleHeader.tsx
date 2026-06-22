import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Calm-premium editorial masthead on soft warm canvas: back link, chip tags,
 *  light-weight display title, comfortable lede, clean author/meta row. */
export default function ArticleHeader() {
  return (
    <header className="canvas-warm pt-12 md:pt-20">
      <Container>
        <div className="mx-auto max-w-[720px]">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-body-sm font-medium text-foreground/55 transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to the blog
          </Link>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            <span className="chip chip-brand">Tools</span>
            <span className="chip chip-onchain">Proof-based vetting</span>
            <span className="chip chip-ink">19 platforms</span>
          </div>

          <h1 className="display-light mt-5 text-[2.25rem] leading-[1.06] text-foreground sm:text-[3rem] md:text-[3.75rem]">
            The best Web3 KOL marketing platforms, honestly{' '}
            <span className="text-gradient-brand">compared</span>
          </h1>

          <p className="mt-6 max-w-[58ch] text-[1.1875rem] leading-[1.7] text-foreground/65">
            Most influencer tools were built for web2 — lifestyle creators, ecommerce
            shipping, PayPal payouts. Run a token launch through one and you hit the wall
            fast. We compared 19 platforms on what actually matters for crypto.
          </p>

          {/* meta row */}
          <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-hairline pt-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-brand text-body font-bold text-white">
                K
              </div>
              <div className="leading-tight">
                <p className="text-body-sm font-semibold text-foreground">The Kolio Team</p>
                <p className="text-body-sm text-foreground/55">Crypto KOL marketing</p>
              </div>
            </div>
            <span className="hidden h-8 w-px bg-hairline sm:block" />
            <p className="font-mono-tnum text-body-sm text-foreground/55">
              February 19, 2026 <span className="mx-1.5 text-foreground/30">•</span> 40 min read
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
}
