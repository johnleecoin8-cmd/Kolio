import Container from '@/components/ui/Container';
import { cn } from '@/lib/cn';

/** Web3 brands/exchanges that run campaigns on Kolio — rendered as styled text,
 *  not logos (the original Modash customer images are intentionally removed). */
const TRUSTED_BY = [
  'OKX',
  'Ledger',
  'Phantom',
  'Arbitrum',
  'Kaito',
  'Optimism',
  'Base',
  'MetaMask',
  'dYdX',
  'Polygon',
  'Uniswap',
  'Magic Eden',
];

/** Meet the Team — heading, 2-col copy, and a "trusted by" wall of web3 brand names. */
export default function MeetTheTeam() {
  return (
    <section className="bg-background pb-16 md:pb-24">
      <Container>
        <h2 className="text-center font-display text-h3 uppercase leading-tight text-foreground md:text-h2">
          Meet the Team
        </h2>

        <div className="mx-auto mt-8 grid max-w-[940px] gap-6 text-body-sm leading-relaxed text-foreground/70 md:mt-10 md:grid-cols-2 md:gap-10 md:text-body">
          <div className="space-y-4">
            <p>
              We&rsquo;re a small, senior team of operators who&rsquo;ve lived on
              both sides of the table &mdash; running growth at exchanges and
              protocols, and building the data infrastructure that powers
              creator marketing at scale. Kolio is where those two worlds meet.
            </p>
            <p>
              Web3 brands, exchanges, and protocols use Kolio to discover crypto
              KOLs, vet their real reach and audience quality, and run campaigns
              with on-chain escrow and attribution &mdash; no more paying for
              vanity metrics.
            </p>
            <p>
              Some of our customers are blue-chip names. Many are protocols just
              finding their first thousand users. For both, Kolio is the channel
              they trust to turn influence into measurable growth.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              We move fast and ship in the open. You&rsquo;ll work alongside
              people who have built indexing pipelines across multiple chains,
              shipped consumer products to millions, and gone deep on the
              messy reality of social data &mdash; bot detection, audience
              authenticity, cross-platform identity.
            </p>
            <p>
              Remote-first across Europe, with deliberate in-person time. We care
              about craft, judgment, and ownership far more than about where you
              sit. If you want to define a category instead of joining one, this
              is the place.
            </p>
            <p>
              Come build the verification layer for crypto influence. Do great
              work, with great people, on a problem that actually matters.
            </p>
          </div>
        </div>

        {/* Trusted by — web3 brands that run campaigns on Kolio */}
        <div className="mx-auto mt-14 max-w-[1000px] text-center md:mt-20">
          <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/40">
            Trusted by teams across web3
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
            {TRUSTED_BY.map((name, i) => (
              <span
                key={name}
                className={cn(
                  'font-display text-h4 uppercase tracking-tight text-foreground/35 transition hover:text-foreground/70',
                  i % 3 === 0 && 'text-foreground/45',
                )}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
