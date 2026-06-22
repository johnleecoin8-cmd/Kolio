import { Search, ShieldCheck, GitBranch } from 'lucide-react';
import Container from '@/components/ui/Container';

type Item = { title: string; body: string };
type Mock = 'search' | 'audience' | 'lookalike';
type Block = { mock: Mock; eyebrow: string; Icon: typeof Search; heading: string; items: Item[] };

const BLOCKS: Block[] = [
  {
    mock: 'search',
    eyebrow: 'Discover',
    Icon: Search,
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
    eyebrow: 'Vet',
    Icon: ShieldCheck,
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
    eyebrow: 'Scale',
    Icon: GitBranch,
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

const FILTERS = ['DeFi', 'L1 / L2', 'Trading', 'NFTs', 'Gaming', 'Korea', 'EN + KR', '50K–250K'];

/** Dense, intentional filter rail — the discovery-engine lead visual. */
function FilterVisual() {
  return (
    <div className="rounded-lg border border-hairline bg-white p-5">
      <div className="h-9 rounded-pill bg-gray-100 px-3">
        <span className="font-mono-tnum text-body-sm leading-9 text-foreground/55">
          “DeFi educators with KR + EN audience”
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {FILTERS.map((f, n) => (
          <span
            key={f}
            className={n < 3 ? 'chip chip-brand' : 'chip chip-ink'}
          >
            {f}
          </span>
        ))}
      </div>
      <div className="mt-5 space-y-2.5">
        {[
          ['CryptoMaria', 96, '184K'],
          ['onchain.eth', 91, '92K'],
          ['DeFiDad_kr', 94, '47K'],
          ['rollup_rin', 89, '120K'],
        ].map(([h, score, reach]) => (
          <div key={h as string} className="flex items-center justify-between rounded-md border border-hairline bg-gray-50 px-3 py-2.5">
            <span className="text-body-sm font-medium text-foreground">@{h}</span>
            <span className="flex items-center gap-4">
              <span className="font-mono-tnum text-body-sm text-foreground/55">{reach as string}</span>
              <span className="chip chip-onchain font-mono-tnum">{score as number} score</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Mockup({ kind }: { kind: Mock }) {
  if (kind === 'search') return <FilterVisual />;
  if (kind === 'audience') {
    return (
      <div className="rounded-lg border border-hairline bg-white p-5">
        <p className="eyebrow">Audience quality</p>
        <div className="mt-3 space-y-3">
          {[
            ['Real followers', 92, 'bg-brand'],
            ['Suspicious', 6, 'bg-brand/40'],
            ['Bots', 2, 'bg-gray-300'],
          ].map(([label, pct, color]) => (
            <div key={label as string}>
              <div className="flex justify-between text-body-sm text-foreground/65">
                <span>{label}</span>
                <span className="num-display font-mono-tnum text-foreground">{pct}%</span>
              </div>
              <div className="mt-1 h-2 rounded-pill bg-gray-100">
                <div className={`h-2 rounded-pill ${color}`} style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {['🇰🇷 38%', '🇺🇸 24%', '🇸🇬 11%', '🇧🇷 9%'].map((g) => (
            <span key={g} className="chip chip-ink font-mono-tnum">{g}</span>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-lg border border-hairline bg-white p-5">
      <p className="eyebrow">Lookalikes of @onchain.eth</p>
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        {['blockbuilder', 'l2_liz', 'yield.sensei', 'gm_protocol', 'stake_sam', 'nft_nadia'].map((h, n) => (
          <div key={h} className="flex items-center justify-between rounded-md border border-hairline bg-gray-50 px-3 py-2.5">
            <span className="text-body-sm font-medium text-foreground">@{h}</span>
            <span className="font-mono-tnum text-body-sm text-brand">{[97, 95, 93, 92, 90, 88][n]}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Intro + three card-kit feature blocks (mockup + bullets), discovery-engine spine. */
export default function FeatureBlocks() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <span className="eyebrow">The discovery engine</span>
          <h2 className="mt-4 display-lg font-display text-[2rem] leading-[1.1] md:text-[2.75rem] text-foreground">
            Find KOLs worth your treasury, without the guesswork
          </h2>
          <p className="mt-4 mx-auto max-w-[640px] text-body md:text-body-md text-foreground/70">
            Search the crypto creator landscape and build shortlists you’d actually stake budget
            on, whenever a launch or campaign needs them.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-5">
          {BLOCKS.map((b, idx) => (
            <div
              key={b.heading}
              className={`card-kit grid items-center gap-6 p-5 md:gap-10 md:p-8 ${idx % 2 === 1 ? 'md:grid-cols-2' : 'md:grid-cols-2'}`}
            >
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <Mockup kind={b.mock} />
              </div>
              <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                <div className="flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-coral-bg text-brand">
                    <b.Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="eyebrow">{b.eyebrow}</span>
                </div>
                <h3 className="mt-4 font-display text-[1.5rem] leading-tight tracking-tight text-foreground">{b.heading}</h3>
                <ul className="mt-5 space-y-4">
                  {b.items.map((it) => (
                    <li key={it.title}>
                      <p className="text-body font-semibold text-foreground">{it.title}</p>
                      <p className="mt-1 text-body-sm text-foreground/70">{it.body}</p>
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
