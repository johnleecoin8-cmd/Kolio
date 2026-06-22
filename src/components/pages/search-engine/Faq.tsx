import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS = [
  {
    q: 'Which KOLs are indexed in Kolio?',
    a: 'Kolio indexes crypto key opinion leaders across X, YouTube, TikTok, and Telegram — spanning niches like DeFi, NFTs, L1/L2, trading, and gaming. Every profile is scored on proof: real reach and audience quality, not raw follower counts. The index grows and re-scores continuously.',
  },
  {
    q: 'Which KOL search filters are available?',
    a: 'You can filter on the KOL and on their audience, and filters vary slightly per platform. KOL filter examples: crypto niche, platform, follower range and real reach, engagement rate, cashtags and bio keywords, posting cadence, and more. Audience filter examples: geography, languages, wallet-active share, chain affinity, and bot/fake-follower screening. Sign up for a free trial to see every filter.',
  },
  {
    q: 'Can you use Kolio to discover micro KOLs?',
    a: 'Yes. Micro KOLs are typically defined by follower count, and in Kolio you can apply a follower-range filter (e.g. 10k–25k) to surface only them. Combine that with niche, chain affinity, and audience-geography filters to find smaller, high-trust voices that punch above their reach.',
  },
  {
    q: 'Does Kolio help with vetting and payments too?',
    a: 'Yes. Every KOL can be analyzed inside Kolio — check engagement rate, bot and fake-follower share, audience geography, and recent posts before you reach out. When you are ready to run a campaign, lock budget in on-chain escrow, release on delivery, and track results with web3 attribution.',
  },
];

/** Search engine FAQs — accordion. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="text-center">
          <span className="eyebrow">Questions</span>
          <h2 className="mt-3 display-lg font-display text-[1.75rem] leading-tight text-foreground md:text-[2rem]">
            Kolio KOL search engine FAQs
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-[1040px]">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-gray-200">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-body-md font-semibold text-foreground">
                    {f.q}
                  </span>
                  <ChevronDown
                    size={22}
                    className={`shrink-0 text-brand transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="-mt-2 max-w-[860px] pb-6 text-body text-foreground/75">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
