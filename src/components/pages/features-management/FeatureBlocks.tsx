import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

type Sub = { title: string; body: string };
type Block = {
  mock: 'profile' | 'pipeline' | 'team';
  heading: string;
  subs: Sub[];
};

const BLOCKS: Block[] = [
  {
    mock: 'profile',
    heading: 'See every KOL detail in one verified profile',
    subs: [
      {
        title: 'Full deal history',
        body: 'Every DM, brief, and past campaign on one timeline, so you can pick up a relationship months later without scrolling Telegram.',
      },
      {
        title: 'Proof-based reach, not vanity metrics',
        body: 'Real audience quality, geography, and engagement attached to each profile, so you know a KOL is a fit before you fund a deal.',
      },
      {
        title: 'Custom fields for your workflow',
        body: 'Store wallet addresses, rate cards, preferred chains, and anything else your team needs to close.',
      },
    ],
  },
  {
    mock: 'pipeline',
    heading: 'Keep every deal moving forward',
    subs: [
      {
        title: 'Work faster with bulk actions',
        body: 'Assign campaigns, attach briefs, or update terms for dozens of KOLs in a single click.',
      },
      {
        title: 'Organize by niche, tier, and stage',
        body: 'Group KOLs by DeFi, NFTs, L1/L2, trading, or gaming, and by where each deal sits in your pipeline.',
      },
      {
        title: 'Set KOLs up to perform',
        body: 'With on-chain payments connected, generate escrow, referral links, and payout terms in a few clicks, no invoicing back-and-forth.',
      },
    ],
  },
  {
    mock: 'team',
    heading: 'Scale relationships as a team',
    subs: [
      {
        title: 'Shared roster visibility',
        body: 'Everyone on your team sees the same KOL data and exactly where each deal stands.',
      },
      {
        title: 'Clear ownership',
        body: 'Assign KOLs to specific teammates so no relationship falls through the cracks and no one double-books a creator.',
      },
      {
        title: 'Team notes and context',
        body: 'Leave notes that stay visible forever: “Prefers X threads over YouTube” or “Pays out in USDC on Base” keeps context from getting lost.',
      },
    ],
  },
];

function Mock({ kind }: { kind: Block['mock'] }) {
  if (kind === 'profile') {
    return (
      <div className="rounded-xl bg-white p-6 shadow-btn">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gradient-brand" />
          <div>
            <p className="text-body font-bold text-ink">@defi_degen</p>
            <p className="text-body-sm text-foreground/60">DeFi · 412K reach</p>
          </div>
          <span className="ml-auto rounded-pill bg-brand/10 px-2.5 py-1 text-[0.7rem] font-semibold text-brand">
            Verified
          </span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3 text-center">
          {[
            ['Real reach', '388K'],
            ['Eng. rate', '6.2%'],
            ['Audience', 'A+'],
          ].map(([l, v]) => (
            <div key={l} className="rounded-lg bg-background-soft py-3">
              <p className="text-body font-bold text-ink">{v}</p>
              <p className="text-[0.7rem] text-foreground/60">{l}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (kind === 'pipeline') {
    const stages = [
      ['Sourced', 18, 'bg-ink/10'],
      ['Negotiating', 9, 'bg-coral/50'],
      ['Escrowed', 6, 'bg-brand/30'],
      ['Live', 4, 'bg-brand/60'],
    ] as const;
    return (
      <div className="rounded-xl bg-white p-6 shadow-btn">
        <p className="text-body font-bold text-ink">Q2 token campaign</p>
        <div className="mt-5 space-y-3">
          {stages.map(([label, n, color]) => (
            <div key={label} className="flex items-center gap-3">
              <span className="w-28 text-body-sm text-foreground/70">{label}</span>
              <div className="h-6 flex-1 overflow-hidden rounded-pill bg-background-soft">
                <div className={`h-full ${color}`} style={{ width: `${n * 5}%` }} />
              </div>
              <span className="w-6 text-right text-body-sm font-semibold text-ink">{n}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-xl bg-white p-6 shadow-btn">
      <p className="text-body font-bold text-ink">Team activity</p>
      <div className="mt-5 space-y-4">
        {[
          ['A', 'Alex assigned @l2maxi to the L2 launch list'],
          ['M', 'Mara left a note: “Pays out in USDC on Base”'],
          ['J', 'Jin moved 3 KOLs to Escrowed'],
        ].map(([i, text]) => (
          <div key={text} className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-body-sm font-bold text-white">
              {i}
            </div>
            <p className="text-body-sm text-foreground/70">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureRow({ block }: { block: Block }) {
  return (
    <div className="grid items-center gap-8 rounded-xl bg-background-soft p-6 md:grid-cols-2 md:gap-12 md:p-10">
      <div className="order-2 md:order-1">
        <Mock kind={block.mock} />
      </div>
      <div className="order-1 md:order-2">
        <h3 className="text-body-lg font-bold leading-tight text-ink">
          {block.heading}
        </h3>
        <div className="mt-6 space-y-5">
          {block.subs.map((s) => (
            <div key={s.title}>
              <p className="text-body font-semibold text-ink">{s.title}</p>
              <p className="mt-1 text-body-sm text-foreground/70">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-7">
          <ButtonLink to="/demo-confirmation" variant="primary">
            Start free
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

/** "Get organized" — three mock + feature-list blocks. */
export default function FeatureBlocks() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-sans text-h4 font-bold leading-tight text-ink">
            Run dozens of KOL deals from one place, with control
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-body-md text-foreground/70">
            Everything you need to manage crypto KOLs from first DM to on-chain
            payout, in a few clicks.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {BLOCKS.map((b) => (
            <FeatureRow key={b.heading} block={b} />
          ))}
        </div>
      </Container>
    </section>
  );
}
