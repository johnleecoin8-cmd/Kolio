import {
  Search,
  ShieldCheck,
  Send,
  Wallet,
  PlaySquare,
  LineChart,
} from 'lucide-react';
import Container from '@/components/ui/Container';

const FEATURES = [
  {
    Icon: Search,
    title: 'Discover KOLs',
    body:
      'Search & filter crypto creators across every niche — DeFi, NFTs, L1/L2, trading, and gaming — or surface the KOLs already engaging with your project. Discovery at scale, on-chain or off.',
  },
  {
    Icon: ShieldCheck,
    title: 'Vet on proof',
    body:
      'See real reach, bot share, audience quality, engagement, and locations. No vanity follower counts, no looks-based picks, no unverifiable screenshots.',
  },
  {
    Icon: Send,
    title: 'Reach out',
    body:
      'Find public emails and Telegram handles, then run personalized outreach in bulk. Reach the creators who actually move crypto audiences.',
  },
  {
    Icon: Wallet,
    title: 'Pay on-chain',
    body:
      'Lock budgets in escrow and release payment on delivery. KOLs get paid on time, in stablecoins — no chasing invoices a month after the campaign.',
  },
  {
    Icon: PlaySquare,
    title: 'Collect content',
    body:
      'Automatically track live posts and save them to a dashboard — including Stories — without asking KOLs to sign up or send links manually.',
  },
  {
    Icon: LineChart,
    title: 'Attribute results',
    body:
      'Tie views, clicks, sign-ups, and on-chain conversions back to each KOL and campaign. Know which creators actually drove deposits and trades.',
  },
];

/** "Plus, everything else you need..." — centered heading + 3x2 feature grid. */
export default function EverythingElse() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <span className="eyebrow">The full loop</span>
          <h2 className="display-lg mx-auto mt-3 font-display text-[2.1875rem] text-foreground">
            Plus, everything else you need to run a profitable web3 KOL program
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {FEATURES.map(({ Icon, title, body }, i) => {
            const lead = i === 0;
            return (
              <div
                key={title}
                className={
                  lead
                    ? 'surface-onchain rounded-xl p-7 sm:col-span-2 lg:col-span-1 lg:row-span-2'
                    : 'card-kit p-7'
                }
              >
                <span
                  className={
                    lead
                      ? 'inline-flex h-11 w-11 items-center justify-center rounded-sm bg-white/10 text-white'
                      : 'inline-flex h-11 w-11 items-center justify-center rounded-sm bg-coral-bg text-brand'
                  }
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className={`mt-4 text-body font-bold ${lead ? 'text-white' : 'text-foreground'}`}>
                  {title}
                </h3>
                <p className={`mt-2 text-body-sm leading-relaxed ${lead ? 'text-white/65' : 'text-foreground/70'}`}>
                  {body}
                </p>
                {lead && (
                  <span className="chip chip-onchain mt-5">Start here</span>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
