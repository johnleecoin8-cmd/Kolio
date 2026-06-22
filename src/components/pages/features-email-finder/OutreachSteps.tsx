import Container from '@/components/ui/Container';
import { Search, ShieldCheck, Send, Wallet } from 'lucide-react';
import { ReactNode } from 'react';

type Step = {
  icon: ReactNode;
  title: string;
  body: string;
  lead?: boolean;
};

const STEPS: Step[] = [
  {
    icon: <Search className="h-5 w-5" strokeWidth={2} />,
    title: 'Find the right contacts',
    body: 'Filter 12M+ crypto KOL profiles down to the handful with public contacts, real reach, and recent on-chain activity in your niche.',
    lead: true,
  },
  {
    icon: <ShieldCheck className="h-5 w-5" strokeWidth={2} />,
    title: 'Vet before you reach',
    body: 'Open the proof — engagement, fake-follower share, wallet-active audience — so you only spend outreach on KOLs who convert.',
  },
  {
    icon: <Send className="h-5 w-5" strokeWidth={2} />,
    title: 'Reach out at scale, 1:1',
    body: 'Queue personalized sequences with variables for handle, project, and chain. Every message lands like it was written for one person.',
  },
  {
    icon: <Wallet className="h-5 w-5" strokeWidth={2} />,
    title: 'Close on-chain',
    body: 'Agree terms in the same thread and lock USDC in escrow. The contact, the deal, and the payout stay on one record.',
  },
];

/** Four-step outreach spine as premium .card-kit tiles with one dark lead card. */
export default function OutreachSteps() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <span className="eyebrow">How outreach works</span>
          <h2 className="mt-3 display-lg text-h3 text-foreground">
            One workflow from cold contact to funded campaign
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => {
            const lead = s.lead;
            return (
              <div
                key={s.title}
                className={
                  lead
                    ? 'card-kit glow-brand flex flex-col border-brand/20 bg-coral-bg/40 p-6'
                    : 'card-kit flex flex-col p-6'
                }
              >
                <div className="flex items-center justify-between">
                  <span
                    className={
                      lead
                        ? 'grid h-11 w-11 place-items-center rounded-lg bg-gradient-brand text-white'
                        : 'grid h-11 w-11 place-items-center rounded-lg bg-coral-bg text-brand'
                    }
                  >
                    {s.icon}
                  </span>
                  <span className="num-display text-2xl text-foreground/20">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-body-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-body-sm leading-snug text-foreground/65">
                  {s.body}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
