import Container from '@/components/ui/Container';
import SectionHeading from './SectionHeading';

type Item = { title: string; body: string };
type Mock = 'search' | 'audience' | 'lookalike';
type Block = { mock: Mock; heading: string; items: Item[] };

const BLOCKS: Block[] = [
  {
    mock: 'search',
    heading: 'Match with the right KOLs, instantly',
    items: [
      {
        title: 'Search every crypto KOL by niche and chain',
        body: 'Describe what you need in plain words. Kolio reads bios, threads, and on-chain context to surface DeFi, L1/L2, NFT, trading, and gaming KOLs in seconds.',
      },
      {
        title: 'Filter the way web3 actually works',
        body: 'Narrow by audience geography, language, follower band, and the chains a KOL’s community actually transacts on — not just a follower count.',
      },
      {
        title: 'Cross-platform in one search',
        body: 'X, YouTube, TikTok, and Telegram side by side, so you build a full shortlist without tab-hopping.',
      },
    ],
  },
  {
    mock: 'audience',
    heading: 'Vet a KOL’s reach before you fund anything',
    items: [
      {
        title: 'Audience quality, not vanity metrics',
        body: 'See real reach, engagement, and the share of an audience that is genuine — before a single token leaves escrow.',
      },
      {
        title: 'Bot and bought-engagement detection',
        body: 'Spot inflated follower counts and farmed engagement so your campaign budget backs creators with real influence.',
      },
      {
        title: 'On-chain campaign history',
        body: 'Review which projects a KOL has promoted, how those campaigns performed, and whether disclosures were made.',
      },
    ],
  },
  {
    mock: 'lookalike',
    heading: 'Turn one breakout KOL into a roster',
    items: [
      {
        title: 'Lookalike search from top performers',
        body: 'Found a KOL who drove real wallets and volume? Find 20 more with similar audiences and content across the same niche.',
      },
      {
        title: 'Already in your community',
        body: 'Surface KOLs who already hold your token or engage with your project — warm partners instead of cold DMs.',
      },
      {
        title: 'Attribution that proves it worked',
        body: 'Tie discovery to on-chain attribution so you know which KOLs actually drove sign-ups, swaps, and holders.',
      },
    ],
  },
];

function Mockup({ kind }: { kind: Mock }) {
  if (kind === 'search') {
    return (
      <div className="rounded-lg border border-black/5 bg-white p-5">
        <div className="h-9 rounded-pill bg-background-soft px-3">
          <span className="text-body-sm leading-9 text-foreground/50">“DeFi educators with KR + EN audience”</span>
        </div>
        <div className="mt-4 space-y-2.5">
          {['CryptoMaria', 'onchain.eth', 'DeFiDad_kr', 'rollup_rin'].map((h, n) => (
            <div key={h} className="flex items-center justify-between rounded-md bg-background-soft px-3 py-2.5">
              <span className="text-body-sm font-medium text-foreground">@{h}</span>
              <span className="text-body-sm font-semibold text-positive">{[96, 91, 94, 89][n]}% real</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (kind === 'audience') {
    return (
      <div className="rounded-lg border border-black/5 bg-white p-5">
        <p className="text-body-sm font-semibold text-foreground/60">Audience quality</p>
        <div className="mt-3 space-y-3">
          {[
            ['Real followers', 92, 'bg-positive'],
            ['Suspicious', 6, 'bg-brand/50'],
            ['Bots', 2, 'bg-foreground/30'],
          ].map(([label, pct, color]) => (
            <div key={label as string}>
              <div className="flex justify-between text-body-sm text-foreground/70">
                <span>{label}</span>
                <span className="font-semibold text-foreground">{pct}%</span>
              </div>
              <div className="mt-1 h-2 rounded-pill bg-background-soft">
                <div className={`h-2 rounded-pill ${color}`} style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex gap-2">
          {['🇰🇷 38%', '🇺🇸 24%', '🇸🇬 11%', '🇧🇷 9%'].map((g) => (
            <span key={g} className="rounded-pill bg-pink px-2.5 py-1 text-body-sm text-ink">{g}</span>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-lg border border-black/5 bg-white p-5">
      <p className="text-body-sm font-semibold text-foreground/60">Lookalikes of @onchain.eth</p>
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        {['blockbuilder', 'l2_liz', 'yield.sensei', 'gm_protocol', 'stake_sam', 'nft_nadia'].map((h) => (
          <div key={h} className="rounded-md bg-background-soft px-3 py-2.5">
            <span className="text-body-sm font-medium text-foreground">@{h}</span>
            <span className="ml-1 text-body-sm text-foreground/50">match</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Intro heading + three large gray feature blocks (mockup + bullet list). */
export default function FeatureBlocks() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <SectionHeading>
            Find KOLs worth your treasury, without the guesswork
          </SectionHeading>
          <p className="mt-4 mx-auto max-w-[640px] text-body md:text-body-md text-foreground/75">
            Search the crypto creator landscape and build shortlists you’d actually stake budget
            on, whenever a launch or campaign needs them.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          {BLOCKS.map((b) => (
            <div
              key={b.heading}
              className="grid items-center gap-6 rounded-xl bg-background-soft p-5 md:grid-cols-2 md:gap-10 md:p-8"
            >
              <Mockup kind={b.mock} />
              <div>
                <h3 className="text-body-lg font-semibold text-foreground">{b.heading}</h3>
                <ul className="mt-5 space-y-4">
                  {b.items.map((it) => (
                    <li key={it.title}>
                      <p className="text-body font-semibold text-foreground">{it.title}</p>
                      <p className="mt-1 text-body-sm text-foreground/75">{it.body}</p>
                    </li>
                  ))}
                </ul>
                <a
                  href="/demo-confirmation"
                  className="mt-6 inline-flex items-center justify-center h-10 px-[1.125rem] rounded-sm bg-ink text-white text-body font-semibold transition hover:opacity-90"
                >
                  Start free
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
