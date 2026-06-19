import { ReactNode } from 'react';
import Container from '@/components/ui/Container';
import { cn } from '@/lib/cn';

const FACTS = [
  { label: 'Industry', value: 'Web3 infrastructure' },
  { label: 'KOL collabs', value: '100 per month' },
  { label: 'Team size', value: '14 marketers' },
  { label: 'Channels', value: 'X, YouTube, Telegram' },
];

/** Brand-neutral mockup of Kolio's KOL vetting panel — built with divs, no external imagery. */
function VettingMockup() {
  const rows = [
    { handle: '@defi_degenomics', reach: '412K', real: '94%', niche: 'DeFi' },
    { handle: '@l2_alpha', reach: '188K', real: '91%', niche: 'L1/L2' },
    { handle: '@onchain_sara', reach: '76K', real: '97%', niche: 'Trading' },
  ];
  return (
    <div className="w-full overflow-hidden rounded-xl border border-black/5 bg-white shadow-nav">
      <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
        <span className="font-semibold text-foreground">
          KOL discovery &middot; audience match
        </span>
        <span className="rounded-full bg-violet-bg px-3 py-1 text-body-sm text-foreground/70">
          Filter: EN &middot; crypto-native &middot; verified reach
        </span>
      </div>
      <div className="grid grid-cols-[1.4fr_repeat(3,1fr)] gap-px bg-black/5 text-body-sm">
        {['Creator', 'Real reach', 'Real audience', 'Niche'].map((h) => (
          <div
            key={h}
            className="bg-violet-bg px-5 py-3 font-semibold text-foreground/70"
          >
            {h}
          </div>
        ))}
        {rows.map((r) => (
          <Fragmentish key={r.handle} {...r} />
        ))}
      </div>
    </div>
  );
}

function Fragmentish({
  handle,
  reach,
  real,
  niche,
}: {
  handle: string;
  reach: string;
  real: string;
  niche: string;
}) {
  return (
    <>
      <div className="bg-white px-5 py-4 font-medium text-foreground">
        {handle}
      </div>
      <div className="bg-white px-5 py-4 text-foreground/80">{reach}</div>
      <div className="bg-white px-5 py-4">
        <span className="font-semibold text-pink-hot">{real}</span>
      </div>
      <div className="bg-white px-5 py-4 text-foreground/80">{niche}</div>
    </>
  );
}

function Eyebrow({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) {
  return (
    <p
      className={cn(
        'text-eyebrow font-semibold uppercase tracking-wide',
        color,
      )}
    >
      {children}
    </p>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-3 font-display text-h4 leading-tight text-violet-dark md:text-h3">
      {children}
    </h2>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="text-body text-foreground/80">{children}</p>;
}

function Pullquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="border-l-4 border-violet py-1 pl-5 text-body-md font-bold italic text-violet-dark">
      {children}
    </blockquote>
  );
}

/** Two-column case study body: sticky facts sidebar + article (Challenge / Solution / Impact). */
export default function Article() {
  return (
    <section className="bg-background">
      <Container className="pb-16 md:pb-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] md:gap-16">
          {/* Sidebar */}
          <aside className="md:sticky md:top-28 md:self-start">
            <div className="space-y-6 rounded-xl bg-violet-bg p-6">
              {FACTS.map((f) => (
                <div key={f.label}>
                  <p className="font-semibold text-foreground">{f.label}</p>
                  <p className="mt-1 text-body text-foreground/75">{f.value}</p>
                </div>
              ))}
            </div>
          </aside>

          {/* Article body */}
          <div className="max-w-2xl space-y-12">
            {/* CHALLENGE */}
            <div className="space-y-5">
              <Eyebrow color="text-purple-dark">Challenge</Eyebrow>
              <Heading>
                Filtering signal from noise across a sea of crypto KOLs
              </Heading>
              <P>
                Arbiscan is no stranger to KOL marketing. They&rsquo;ve worked
                with crypto creators to drive awareness, on-chain trust, and
                product adoption since their token launch.
              </P>
              <P>
                After testing every major channel, they found that X and
                YouTube are where their L2 audience actually pays attention
                &mdash; and where the strongest crypto KOLs build credibility.
              </P>
              <P>
                But web3 creator marketing has a trust problem. Bought
                followers, recycled engagement, and screenshots that can&rsquo;t
                be verified make it hard to know who&rsquo;s real. How does
                Arbiscan find KOLs whose reach &mdash; and audience &mdash;
                actually hold up?
              </P>
              <P>
                Growth Lead Laura Garsdal keeps it simple &ndash; verify before
                you ever reach out.
              </P>
              <Pullquote>
                &ldquo;I&rsquo;ve run campaigns on Kolio for over 3 years. When
                I joined Arbiscan, the first thing I told my lead was,
                &lsquo;I&rsquo;m going to need Kolio.&rsquo;&rdquo;
              </Pullquote>
            </div>

            {/* SOLUTION */}
            <div className="space-y-5">
              <Eyebrow color="text-coral-dark">Solution</Eyebrow>
              <Heading>
                Using Kolio to surface crypto KOLs with proven reach &amp; the
                right audience
              </Heading>
              <P>
                With Kolio and a sharp understanding of who they want to reach,
                Arbiscan runs an audience-led KOL strategy. Before looking at
                any vanity metric, they run an audience search filtered to
                crypto-native viewers in the niches that matter &mdash; DeFi,
                L1/L2, and on-chain trading.
              </P>
              <Pullquote>
                &ldquo;Kolio helps us find the creators whose audience matches
                our target &mdash; faster, and with proof behind every
                number.&rdquo;
              </Pullquote>
              <P>
                Instead of trusting a creator&rsquo;s screenshot, the team sees
                proof-based vetting: real reach, real-audience percentage, and
                fake-follower rate, side by side. They can narrow KOLs by
                audience language, region, and crypto interest in seconds.
              </P>
              <VettingMockup />
              <P>
                Once they&rsquo;ve shortlisted the creators with the right
                audiences, they focus on the qualitative call &mdash; tone,
                track record, and whether the creator actually understands the
                product.
              </P>
              <Pullquote>
                &ldquo;We look at what they post. Do they cover the topics that
                convert for us &mdash; explorers, gas, on-chain analytics,
                security? A KOL who gets the product is worth ten who
                don&rsquo;t.&rdquo;
              </Pullquote>
              <P>
                Arbiscan also runs payments through Kolio. When a deal is
                agreed, funds sit in on-chain escrow and release on delivery
                &mdash; no chasing invoices, no wallet-address roulette.
              </P>
              <Pullquote>
                &ldquo;I once had to build a list of 200 KOLs. I screened around
                800 profiles to find the real ones. Before Kolio, that was
                manual and full of guesswork. With Kolio I find creators who
                genuinely match our targets, and I pay them safely in the same
                place.&rdquo;
              </Pullquote>
            </div>

            {/* IMPACT */}
            <div className="space-y-5">
              <Eyebrow color="text-pink-hot">Impact</Eyebrow>
              <Heading>2 hours saved a day by killing manual vetting</Heading>
              <P>
                Today, KOL marketing at Arbiscan supports every other growth
                channel &mdash; paid, ecosystem, and developer relations. Thread
                campaigns and YouTube explainers raise awareness and feed
                directly into on-chain activity goals.
              </P>
              <P>
                As any growth team knows, once a channel gains traction the next
                step is to streamline and scale it.
              </P>
              <P>
                Laura credits Kolio not only for streamlining discovery, but for
                erasing the painful back-and-forth of asking creators to prove
                their own numbers.
              </P>
              <Pullquote>
                &ldquo;Getting audience metrics out of a KOL used to be a
                negotiation. With Kolio I have every number I need, verified,
                before I even open a DM.&rdquo;
              </Pullquote>
              <P>How much time does Laura think Kolio saves her?</P>
              <Pullquote>
                &ldquo;Kolio saves me about 1&ndash;2 hours a day on profile
                research and list building alone.&rdquo;
              </Pullquote>
              <P>
                When you&rsquo;re running 100 collabs a month across X, YouTube,
                and Telegram, every minute saved compounds.
              </P>
              <P>
                Arbiscan doesn&rsquo;t rest on its current wins. They&rsquo;re
                always testing new niches and channels &mdash; Telegram alpha
                groups are next on the block, with Kolio handling discovery,
                vetting, and attribution end to end.
              </P>
              <Pullquote>
                &ldquo;I lean on the audience-interest filters constantly for our
                campaigns, and the fake-follower rate is the first thing I check
                before any KOL goes on our list.&rdquo;
              </Pullquote>
              <P>
                As Arbiscan dials in its web3 KOL playbook, Kolio is proud to
                bring web2-grade rigor to every campaign they run on-chain.
              </P>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
