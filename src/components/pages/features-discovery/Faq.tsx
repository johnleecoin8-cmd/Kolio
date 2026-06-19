import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from './SectionHeading';

const FAQS = [
  {
    q: 'What does Kolio Discover replace?',
    a: 'Kolio Discover replaces hours of scrolling Crypto Twitter, scattered handle spreadsheets, and juggling several half-built KOL tools. Instead of manually hunting across X, YouTube, TikTok, and Telegram and pasting metrics into a sheet, you get one search engine built for crypto — niche and chain filters, proof-based reach, and audience-quality scoring — all connected to your workflow for managing, tracking, and paying KOLs on-chain.',
  },
  {
    q: 'Will I be able to find KOLs that fit my project?',
    a: 'Yes. Kolio indexes public crypto creator profiles across X, YouTube, TikTok, and Telegram. Filter by niche (DeFi, NFTs, L1/L2, trading, gaming), region, language, audience demographics, engagement, and lookalikes to find exactly who you need. Our community-match feature surfaces KOLs who already hold your token or engage with your project.',
  },
  {
    q: 'What types of KOLs can I discover (nano, niche, regional, global)?',
    a: 'From nano voices to mega accounts, across every crypto niche. Using Kolio’s filters you can discover KOLs in any vertical — DeFi, NFTs, L1/L2, infra, trading, gaming — in any region and at any size, so your shortlist matches your launch instead of whoever has the biggest follower number.',
  },
  {
    q: 'Can I reliably find KOLs whose audience matches my market?',
    a: 'Yes. Filter by audience geography, language, and interests so you’re not just picking creators who look influential, but creators whose followers are the holders and users you’re trying to reach. Combine and adjust filters as you go — start broad and refine without dead ends.',
  },
  {
    q: 'How accurate is your KOL data?',
    a: 'Kolio analyzes large volumes of public content and refreshes regularly, so reach, engagement, and audience-quality figures reflect a KOL’s current standing — not a year-old media kit. The whole point of Kolio is bringing web2-grade rigor to crypto KOL data.',
  },
  {
    q: 'How does Kolio vet KOLs and detect fake followers?',
    a: 'To make funding decisions you can defend, Kolio surfaces engagement rates, audience-quality scores, follower demographics, past campaign history, and content history — so you only fund KOLs with real influence. The fake-follower signal covers both suspicious mass followers and obvious bots, plus farmed engagement.',
  },
  {
    q: 'Can I search by describing the content I want?',
    a: 'Yes. Describe the angle in plain words — “threads explaining restaking,” “live trading streams,” “NFT mint coverage” — and Kolio surfaces KOLs producing exactly that kind of content.',
  },
  {
    q: 'Can I see a KOL’s past campaign history?',
    a: 'Yes. View a timeline of past project collaborations and sponsored content, so you can see who a KOL has promoted, how it performed, and whether they disclosed the partnership.',
  },
  {
    q: 'Can I find KOLs similar to ones I already work with?',
    a: 'Yes. Use lookalike search to find KOLs with similar audiences or content to your top performers. It’s the fastest way to scale a roster around what’s already driving holders and volume.',
  },
  {
    q: 'How do payments and attribution work?',
    a: 'Kolio supports on-chain payments and escrow, so funds release on delivery instead of trust. Campaign attribution ties KOL activity to real outcomes — sign-ups, swaps, and new holders — so you know which creators actually moved the needle.',
  },
];

/** Accordion FAQ on a soft background. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background-soft py-16 md:py-24">
      <Container>
        <SectionHeading as="h3">Frequently asked questions</SectionHeading>
        <div className="mt-8">
          {FAQS.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <div key={f.q} className="border-b border-black/10">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-body md:text-body-md font-semibold text-foreground">
                    {f.q}
                  </span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center text-foreground/60">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 pr-12 text-body-sm md:text-body text-foreground/75">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
