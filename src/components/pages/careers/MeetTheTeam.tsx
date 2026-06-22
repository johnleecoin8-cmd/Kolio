import Container from '@/components/ui/Container';
import LogoMarquee from '@/components/kit/LogoMarquee';

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

/** Senior team, by discipline — branded initials tiles (no invented headshots). */
const PODS = [
  { initials: 'GR', name: 'Growth & Partnerships', note: 'Ex-exchange / protocol growth leads' },
  { initials: 'DA', name: 'Data & Social Graph', note: 'Cross-chain indexing pipelines' },
  { initials: 'AU', name: 'Audience Authenticity', note: 'Bot & fraud detection' },
  { initials: 'ON', name: 'On-chain Engineering', note: 'Escrow, payouts, attribution' },
];

/** Meet the Team — heading, 2-col copy, branded discipline tiles, and a "trusted by" marquee. */
export default function MeetTheTeam() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="text-center">
          <p className="eyebrow mb-3 justify-center">Who you&rsquo;ll work with</p>
          <h2 className="display-lg font-display text-h3 uppercase leading-tight text-foreground md:text-h2">
            Meet the Team
          </h2>
        </div>

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

        {/* Discipline tiles — branded initials, not invented headshots */}
        <div className="mx-auto mt-14 grid max-w-[1136px] grid-cols-2 gap-4 md:mt-20 md:grid-cols-4 md:gap-6">
          {PODS.map((pod) => (
            <div key={pod.initials} className="card-kit flex flex-col p-6 text-left">
              <div className="bg-gradient-brand flex h-12 w-12 items-center justify-center rounded-lg font-display text-body-lg font-bold tracking-tight text-white">
                {pod.initials}
              </div>
              <h3 className="mt-4 text-body font-semibold leading-tight text-foreground">
                {pod.name}
              </h3>
              <p className="mt-1 text-body-sm leading-snug text-foreground/55">
                {pod.note}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* Trusted by — web3 brands that run campaigns on Kolio */}
      <div className="mt-14 md:mt-20">
        <LogoMarquee label="Trusted by teams across web3" names={TRUSTED_BY} />
      </div>
    </section>
  );
}
