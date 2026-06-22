import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS = [
  {
    q: 'What is crypto KOL discovery?',
    a: 'KOL discovery is the process of finding crypto key opinion leaders who are the right fit to promote your token, exchange, or protocol — and verifying their reach and audience before you run a campaign.',
  },
  {
    q: 'Which crypto KOLs does Kolio cover on TikTok?',
    a: "Kolio indexes crypto-native TikTok creators — from micro creators with a few thousand followers to the accounts moving markets — and enriches each profile with proof-based metrics. Coverage grows every day and spans the niches that matter in web3: DeFi, L1/L2, trading, NFTs, and gaming.",
  },
  {
    q: 'Which discovery filters are available?',
    a: 'Filters apply to both the KOL and their audience. For audiences: location, age, language, and crypto-awareness. For KOLs: follower range, engagement rate, real-follower rate, language, niche, keywords in bios and posts, channel (TikTok, X, YouTube, Telegram), and contact availability. See every filter by starting a free trial.',
  },
  {
    q: 'Can you use Kolio to find micro crypto KOLs?',
    a: "Yes. Apply a follower-range filter to only see profiles between X and Y followers (e.g. 10k–25k), then combine it with niche, keyword, and audience-location filters to find the right micro-KOL fit — often the highest-converting tier for early-stage projects.",
  },
  {
    q: 'Does Kolio handle vetting and payments too?',
    a: 'Yes. Every KOL can be analyzed inside Kolio with proof-based metrics — engagement rate, real-follower rate, audience breakdown, and recent or sponsored posts. When you are ready to run a deal, fund it into on-chain escrow, release on delivery, and track attribution for the campaign.',
  },
];

/** Discovery tool FAQs — accordion. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[820px]">
          <div className="mb-8 text-center">
            <span className="eyebrow">FAQ</span>
            <h3 className="mt-3 display-lg font-display text-[2rem] text-foreground md:text-[2.5rem]">
              Kolio crypto KOL discovery FAQs
            </h3>
          </div>

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="py-5">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 text-left"
                  >
                    <span className="text-body-md font-semibold text-foreground">
                      {f.q}
                    </span>
                    <span className="shrink-0 text-brand">
                      {isOpen ? (
                        <ChevronUp size={24} />
                      ) : (
                        <ChevronDown size={24} />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-4 text-body text-foreground/75">{f.a}</p>
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
