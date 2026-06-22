import {
  Search,
  BarChart3,
  ShieldCheck,
  Wallet,
  ListChecks,
  LineChart,
} from 'lucide-react';
import Container from '@/components/ui/Container';

const ITEMS = [
  {
    Icon: Search,
    title: 'Discover KOLs',
    body: 'Search and filter millions of crypto creator profiles across X, YouTube, TikTok, and Telegram — by niche, reach, and audience quality. Discovery at scale, in DeFi, L1/L2, NFTs, trading, or gaming.',
  },
  {
    Icon: BarChart3,
    title: 'Analyze audiences',
    body: 'See real audience demographics, geography, engagement, average views, and past sponsorships — without asking a KOL for screenshots that can be faked.',
  },
  {
    Icon: ShieldCheck,
    title: 'Vet with proof',
    body: 'Proof-based vetting surfaces real reach and bot share, so you back creators with genuine influence — not inflated follower counts or rented audiences.',
  },
  {
    Icon: Wallet,
    title: 'Pay on-chain',
    body: 'Fund campaigns into escrow and release payment on delivery. On-chain settlement means transparent, instant payouts — no more KOLs chasing invoices for weeks.',
  },
  {
    Icon: ListChecks,
    title: 'Manage campaigns',
    body: 'Build unlimited lists to track KOLs across campaigns. Add notes, store briefs and contracts, and keep your team aligned on every deal in one place.',
  },
  {
    Icon: LineChart,
    title: 'Measure on-chain ROI',
    body: 'Track views, engagements, referral clicks, wallet sign-ups, and on-chain conversions with attribution built for web3 — per campaign and per KOL.',
  },
];

/** "Plus, everything else..." — eyebrow + editorial heading, lead card + card-kit grid. */
export default function PlusGrid() {
  const [lead, ...rest] = ITEMS;
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <span className="eyebrow">Full stack</span>
          <h2 className="mt-3 display-lg font-display text-[1.75rem] leading-[1.15] text-foreground md:text-[2.1875rem]">
            Plus, everything else you need to run a profitable crypto KOL program
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {/* lead card — dark focal tile spanning two columns on large screens */}
          <div className="surface-onchain flex flex-col justify-between rounded-xl p-7 sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <div>
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand text-white">
                <lead.Icon className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <h3 className="mt-5 font-display text-h5 text-white">{lead.title}</h3>
              <p className="mt-3 text-body text-white/70">{lead.body}</p>
            </div>
            <span className="mt-6 chip chip-onchain w-fit">Discovery at scale</span>
          </div>

          {rest.map(({ Icon, title, body }) => (
            <div key={title} className="card-kit p-7">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-coral-bg text-brand">
                <Icon className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <h3 className="mt-4 text-body-md font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-body text-foreground/75">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
