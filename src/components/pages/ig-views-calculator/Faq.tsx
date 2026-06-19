import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import WideContainer from './WideContainer';

const FAQS = [
  {
    title: 'What is Kolio?',
    content:
      'Kolio is the web3 influencer marketing platform. It brings the rigor of mature web2 creator platforms to crypto, letting brands, exchanges, and protocols discover crypto KOLs, vet their real reach and audience quality, pay them on-chain through escrow, and attribute every campaign — all in one connected workflow, without juggling spreadsheets and Telegram DMs.',
  },
  {
    title: 'What counts as a crypto KOL?',
    content:
      'A crypto KOL (key opinion leader) is a creator with an engaged web3 audience on X, YouTube, TikTok, or Telegram — think DeFi analysts, NFT voices, L1/L2 commentators, trading educators, and gaming creators. Kolio focuses on these proven, audience-backed accounts rather than scoring people on looks or follower vanity.',
  },
  {
    title: 'How do you measure a KOL’s real reach?',
    content:
      'A simple method is to take a recent set of posts, add up their impressions, and divide by the number of posts. Kolio does this instantly and cross-checks it against audience quality, so one viral airdrop-season thread does not inflate the baseline.',
  },
  {
    title: 'What is a good reach number for a crypto KOL?',
    content:
      'There is no single "good" number. Real reach depends on niche, region, and format — a focused DeFi analyst can outperform a larger generalist account. The best approach is to compare a KOL to benchmarks and to other KOLs with a similar audience size and niche.',
  },
  {
    title: 'Why can a KOL with many followers have low real reach?',
    content:
      'Common reasons include bought followers, bot-padded engagement, airdrop farmers in the audience, inconsistent posting, or a following built from one old market cycle. Proof-based reach and audience-quality scoring help you spot this before budget leaves escrow.',
  },
  {
    title: 'Is this crypto KOL reach checker free?',
    content:
      'Yes. The page is free to use for a quick check with no sign-up. If you want deeper analytics, full audience-quality scoring, on-chain escrow payments, and attribution to run KOL programs at scale, you can upgrade to Kolio.',
  },
];

/** FAQ accordion on soft card background. */
export default function Faq() {
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <section className="bg-background pb-8 md:pb-12">
      <WideContainer>
        <div className="rounded-xl bg-background-soft p-4 md:p-8 lg:py-24">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 lg:gap-16">
            <div className="flex flex-col gap-2 lg:gap-4">
              <div className="text-body-sm font-semibold text-foreground/50">
                FAQ
              </div>
              <h2 className="font-display text-5xl lg:text-7xl font-normal leading-tight text-foreground">
                Frequently asked questions
              </h2>
            </div>

            <div className="flex flex-col">
              {FAQS.map((faq, i) => {
                const isOpen = open.has(i);
                return (
                  <div key={faq.title} className="border-t border-black/10">
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      className="flex w-full items-start justify-between gap-4 py-5 text-left transition-opacity hover:opacity-75"
                    >
                      <span className="flex-1 text-body lg:text-xl font-semibold leading-7 text-foreground">
                        {faq.title}
                      </span>
                      <span
                        className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                          isOpen
                            ? 'bg-pink text-ink'
                            : 'bg-gray-100 text-foreground'
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="max-w-3xl pb-5 text-body-sm lg:text-base font-normal leading-6 text-foreground/70">
                        {faq.content}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </WideContainer>
    </section>
  );
}
