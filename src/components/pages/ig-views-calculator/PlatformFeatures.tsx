import {
  Search,
  BarChart3,
  ShieldCheck,
  Users,
  Wallet,
  Megaphone,
} from 'lucide-react';
import WideContainer from './WideContainer';

const TRUSTED_BY = [
  'Ledger',
  'Phantom',
  'Arbitrum',
  'OKX',
  'zkSync',
  'Polygon',
];

const FEATURES = [
  {
    icon: Search,
    title: 'Discover KOLs',
    description:
      'Search & filter crypto KOLs across X, YouTube, TikTok, and Telegram — by niche (DeFi, NFTs, L1/L2, trading, gaming), region, and language. Solve KOL discovery at scale, in any corner of web3.',
  },
  {
    icon: BarChart3,
    title: 'Analyze audiences',
    description:
      'Get real reach, engagement rate, audience demographics, regional split, and past project work — without DMing for screenshots or trusting a media kit.',
  },
  {
    icon: ShieldCheck,
    title: 'Proof-based vetting',
    description:
      'Separate genuine reach from bot-padded follower counts and airdrop-farmed engagement. Kolio scores audience quality so you book KOLs who actually move on-chain behavior.',
  },
  {
    icon: Users,
    title: 'Manage relationships',
    description:
      'Build unlimited lists to track your KOLs. Add notes for personalization (or your team), organize briefs and contracts, and keep every conversation in one place.',
  },
  {
    icon: Wallet,
    title: 'Pay on-chain via escrow',
    description:
      'Fund a campaign into escrow and release on delivery. KOLs get paid in stablecoins on-chain — no month-long wait, no off-platform trust required.',
  },
  {
    icon: Megaphone,
    title: 'Attribute results',
    description:
      'Track impressions, engagements, link clicks, referral signups, and on-chain conversions — per campaign and per KOL — so you know what every dollar of budget returned.',
  },
];

/** Dark heading + intro + 6-up feature grid, with a web3 brand trust row. */
export default function PlatformFeatures() {
  return (
    <section className="bg-background py-16 md:py-24">
      <WideContainer>
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="font-display text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight text-foreground">
            The web3 influencer marketing platform built to scale with you
          </h2>
          <p className="max-w-lg text-body text-foreground">
            When spreadsheets and Telegram DMs stop cutting it, Kolio gives
            crypto brands, exchanges, and protocols everything they need to run
            KOL programs with web2-grade rigor. Here&apos;s what Kolio helps
            with:
          </p>
        </div>

        {/* trusted-by — text-based web3 brand row (no third-party logos) */}
        <div className="mx-auto mt-10 flex w-full max-w-3xl flex-col items-center gap-4">
          <span className="text-body-sm font-semibold uppercase tracking-wide text-foreground/50">
            Trusted by web3 teams
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {TRUSTED_BY.map((name) => (
              <span
                key={name}
                className="font-display text-xl font-semibold tracking-tight text-foreground/40"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="flex flex-col items-start gap-3">
                <Icon className="h-6 w-6 text-foreground" strokeWidth={2} />
                <h3 className="mt-1 text-body font-semibold leading-normal text-foreground">
                  {f.title}
                </h3>
                <p className="text-body-sm leading-relaxed text-foreground/60">
                  {f.description}
                </p>
                <a
                  href="/demo-confirmation"
                  className="mt-1 text-body-sm font-semibold text-foreground underline underline-offset-2"
                >
                  Learn more
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="/demo-confirmation"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-ink px-6 text-body-md font-semibold text-white shadow-btn transition hover:opacity-90"
          >
            Try Kolio free
          </a>
        </div>
      </WideContainer>
    </section>
  );
}
