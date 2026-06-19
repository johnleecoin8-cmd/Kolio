import { Search, BarChart3, Mail, Users, TrendingUp, Megaphone } from 'lucide-react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const FEATURES = [
  {
    icon: Search,
    title: 'Discover crypto KOLs',
    body: 'Search and filter KOLs across X, YouTube, TikTok and Telegram by niche — DeFi, NFTs, L1/L2, trading, gaming — and by the regions where your token actually has holders.',
  },
  {
    icon: BarChart3,
    title: 'Vet on proof, not vanity',
    body: 'See verified reach, real engagement, audience quality, fake-follower scores and past project sponsorships — so you fund the KOLs who move on-chain demand, not the ones who look big.',
  },
  {
    icon: Mail,
    title: 'Pay through on-chain escrow',
    body: 'Fund a deal into escrow, release on delivery, settle in stablecoins. No month-late wire chasing, no trust gap between project and KOL.',
  },
  {
    icon: Users,
    title: 'Manage your KOL roster',
    body: 'Build lists, attach briefs and contracts, and keep every conversation and deliverable for each KOL in one place across your whole campaign team.',
  },
  {
    icon: TrendingUp,
    title: 'Collect content automatically',
    body: 'Track sponsored posts as they go live across platforms and save them to a campaign dashboard — without asking KOLs to send screenshots.',
  },
  {
    icon: Megaphone,
    title: 'Attribute every campaign',
    body: 'Tie views and engagement to on-chain outcomes: referral links, wallet sign-ups, swaps and promo codes — measured per campaign and per KOL.',
  },
];

/** "The web3 influencer marketing platform" — 3-col feature grid. */
export default function FeatureGrid() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="mx-auto max-w-[20ch] text-center font-display text-[2.5rem] uppercase leading-[1.02] text-foreground md:text-[4rem]">
          The <span className="text-gradient-brand">web3</span> influencer marketing platform
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-center text-body text-foreground/75 md:text-body-md">
          When Telegram DMs and spreadsheets stop scaling, Kolio gives crypto
          brands, exchanges and protocols everything they need to run KOL
          campaigns end-to-end. Here's what Kolio helps with:
        </p>

        <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-3">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title}>
                <Icon size={26} className="text-foreground" />
                <h3 className="mt-4 text-body font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-3 text-body-sm text-foreground/70">{f.body}</p>
                <a
                  href="/demo-confirmation"
                  className="mt-4 inline-block text-body-sm font-semibold text-foreground underline underline-offset-4"
                >
                  Learn more
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <ButtonA href="/demo-confirmation" variant="primary" size="md">
            Try for free
          </ButtonA>
        </div>
      </Container>
    </section>
  );
}
