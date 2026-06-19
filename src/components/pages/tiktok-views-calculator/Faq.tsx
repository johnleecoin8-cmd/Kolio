import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS = [
  {
    q: 'What is Kolio?',
    a: 'Kolio is the web3 influencer marketing platform. It brings the rigor of mature web2 creator tooling to crypto KOLs — helping brands, exchanges and protocols discover KOLs across X, YouTube, TikTok and Telegram, vet them on verified reach instead of vanity metrics, pay through on-chain escrow, and attribute every campaign.',
  },
  {
    q: 'What are TikTok average views?',
    a: 'TikTok average views are the typical number of views a KOL gets per video over a recent set of posts. For a crypto campaign it is a fast way to gauge real reach and consistency before you commit budget.',
  },
  {
    q: 'How do you calculate TikTok average views?',
    a: 'Take a set of recent videos, add up their views, and divide by the number of videos. This calculator does it instantly and reduces the impact of one-off outliers. Kolio also cross-checks the result against verified reach so inflated or botted accounts can’t game the number.',
  },
  {
    q: 'What is a good average views count for a crypto KOL?',
    a: 'There is no single "good" number. It depends on follower size, niche (DeFi, NFTs, L1/L2, trading, gaming) and content format. The right move is to benchmark a KOL against others with a similar audience — and weigh engagement quality, not just raw views.',
  },
  {
    q: 'Why can a KOL with a huge following have low average views?',
    a: 'Usually it means inconsistent posting, content that does not land, poor audience quality, or a follower base inflated by bots or an old viral moment. Average views surface that gap quickly — which is exactly why proof-based vetting matters in crypto.',
  },
  {
    q: 'Is this calculator free?',
    a: 'Yes. It is free for a quick check with no sign-up. When you’re ready to discover KOLs at scale, vet them on verified data, pay through on-chain escrow and attribute results, you can move the whole workflow into Kolio.',
  },
];

/** FAQ accordion on a soft card. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="rounded-xl bg-background-soft p-8 md:p-16">
          <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/40">
            FAQ
          </p>
          <h2 className="mb-10 mt-3 font-display text-[2.25rem] uppercase leading-[1.02] text-foreground md:text-[3.5rem]">
            Frequently asked questions
          </h2>

          <div className="divide-y divide-black/10">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="py-6">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 text-left"
                  >
                    <span className="text-body-md font-semibold text-foreground">
                      {f.q}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-foreground">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-4 max-w-[820px] text-body text-foreground/75">
                      {f.a}
                    </p>
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
