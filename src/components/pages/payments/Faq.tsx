import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS = [
  {
    q: 'How does Kolio Payments work?',
    a: 'Kolio Payments centralizes every crypto KOL payout into one workflow. You fund a campaign wallet, Kolio escrows the budget, and funds release to each KOL the moment their deliverables are verified. Payouts settle in stablecoins, native tokens, or fiat, and every release is written on-chain with a tx hash. The result is one payment flow for your entire KOL program — no manual transfers, no chasing wallets, no scattered tooling.',
  },
  {
    q: 'Who is Kolio Payments ideally suited for?',
    a: 'Kolio Payments is built for crypto and web3 brands, exchanges, protocols, and projects running KOL campaigns at scale — especially if you pay creators across multiple chains, want escrow before committing budget, or need an auditable on-chain record of every payout.',
  },
  {
    q: 'Which chains and currencies can I pay in?',
    a: 'You can pay KOLs in stablecoins (USDC, USDT) and native tokens (ETH and more) across Ethereum, Solana, Base, Arbitrum, and other major chains — or settle to a bank account in fiat across 180+ countries. Each KOL chooses how they want to receive funds.',
  },
  {
    q: 'How do KOLs get paid?',
    a: 'Once you fund the campaign and a KOL’s deliverables are verified, Kolio releases the escrowed amount directly to their wallet on-chain — typically in minutes — or settles to their bank account in 1-3 days. Every release maps to a tx hash so both sides have proof.',
  },
  {
    q: 'How does escrow protect both sides?',
    a: 'When you fund a campaign, the budget is locked in escrow before any work begins. KOLs can see the money is real before they post, and you only release funds once deliverables are confirmed — so neither side has to front cash or trust a promise.',
  },
  {
    q: 'Do KOLs need to sign up to Kolio to get paid?',
    a: "Yes. KOLs complete a one-time onboarding the first time they're paid through Kolio, verifying their wallet, identity, and tax details. If a KOL has already onboarded for another brand, they don’t need to do it again — for all future campaigns they simply confirm their payout wallet.",
  },
  {
    q: 'How does Kolio handle attribution and the on-chain record?',
    a: 'Every payout maps to a deliverable and a tx hash, and KOL wallets and referral links can be tied to on-chain conversions. This gives you a verifiable audit trail across all chains and currencies, so finance and partners can reconcile a whole campaign on-chain.',
  },
  {
    q: "What happens if there's a payout issue?",
    a: 'Kolio handles payout issues on your behalf. Our team manages the resolution process — wallet errors, disputed deliverables, or refunds for unverified posts — so you can focus on the campaign, not the admin.',
  },
  {
    q: 'Can I see my current campaign balance?',
    a: 'Always. Your Payments dashboard shows escrowed balance, funds in flight, and total spent in real time. Full transparency, fully on-chain, at all times.',
  },
];

/** FAQ accordion on a soft section background. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <div className="rounded-xl bg-background-soft px-6 py-12 md:px-16 md:py-16">
          <h3 className="font-sans text-h4 font-bold text-ink">
            Frequently asked questions
          </h3>

          <div className="mt-8">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-black/10">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-body font-bold text-ink">{f.q}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gray-200 text-ink">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-6 pr-10 text-body text-foreground/70">{f.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
