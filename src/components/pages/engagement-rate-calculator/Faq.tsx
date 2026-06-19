import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS: { q: string; a: string }[] = [
  {
    q: 'What is Kolio?',
    a: 'Kolio is the web3 influencer marketing platform. It brings the rigor of mature web2 creator tools to crypto, so brands, exchanges, protocols and projects can discover, vet, book and pay crypto KOLs (key opinion leaders) from one place. Run launch, listing, airdrop and growth campaigns with proof-based vetting, on-chain escrow, and end-to-end attribution &mdash; without juggling DMs, spreadsheets and trust.',
  },
  {
    q: 'How do I check a crypto KOL&rsquo;s engagement rate?',
    a: "Engagement rate shows how many people actually interact with a KOL's posts relative to their follower count. A practical way to check it is to review recent posts, add up engagements (likes, replies, reposts), and compare that total to the follower count.<br/><br/>On this page, Kolio calculates engagement rate using the last two months of content and uses the median engagement across posts to reduce the impact of one unusually viral thread.",
  },
  {
    q: 'What affects a crypto KOL&rsquo;s engagement rate?',
    a: 'Common factors include:<br/><br/><ul><li><strong>Content format:</strong> Threads, quote-posts, videos and Spaces all perform differently.</li><li><strong>Topic relevance:</strong> How well the niche (DeFi, NFTs, L1/L2, trading, gaming) matches the audience.</li><li><strong>Audience authenticity:</strong> Bought followers and bot accounts drag engagement down.</li><li><strong>Consistency and timing:</strong> Posting cadence and whether the audience is active during market hours.</li><li><strong>Market conditions:</strong> Bull and bear cycles shift how much an audience engages.</li><li><strong>Community management:</strong> Replying and driving conversation lifts engagement.</li></ul>',
  },
  {
    q: 'How does engagement rate impact campaign ROI?',
    a: 'Engagement rate is a proxy for how likely an audience is to notice and act on a sponsored post. Higher engagement rates often mean:<br/><br/><ul><li>More attention on launch, listing and airdrop posts</li><li>Better odds of clicks, sign-ups, wallet connects and on-chain conversions</li></ul><br/>That said, ROI also depends on audience fit and intent. A slightly lower engagement rate can still drive strong results if the KOL&rsquo;s audience matches your chain or category &mdash; which is exactly what Kolio attribution measures.',
  },
  {
    q: 'Why check a crypto KOL&rsquo;s engagement rate?',
    a: 'You check engagement rate to:<br/><br/><ul><li><strong>Spot proof vs. vanity metrics:</strong> Follower count alone is easy to buy and easy to fake.</li><li><strong>Compare KOLs fairly:</strong> Engagement rate normalizes performance across different audience sizes.</li><li><strong>Reduce spend risk:</strong> It helps flag inflated audiences before you pay.</li><li><strong>Forecast reach:</strong> It sets realistic expectations for how a post will land.</li></ul>',
  },
  {
    q: 'How do you calculate engagement rate per post?',
    a: 'A simple per-post formula is:<br/><br/><strong>Engagement rate (per post) = (Engagements on that post &divide; Follower count) &times; 100</strong><br/><br/>On Kolio, the calculation uses the median engagements across recent posts (rather than a single post), divided by followers and multiplied by 100, so a single viral thread doesn&rsquo;t skew the number.',
  },
  {
    q: 'Is engagement rate calculated per post or overall?',
    a: 'It can be calculated both ways:<br/><br/><ul><li><strong>Per post:</strong> For a single piece of content.</li><li><strong>Overall (profile-level):</strong> Based on a set of recent posts to represent typical performance.</li></ul><br/>This calculator provides an overall profile engagement rate based on recent content from the last two months.',
  },
  {
    q: 'Does this work for threads, videos and Spaces?',
    a: 'Yes. Threads, quote-posts and videos are standard content, and the calculator evaluates recent posts regardless of format.<br/><br/>The free calculator does not break engagement down by format, but per-channel and format-level analysis is available inside Kolio.',
  },
  {
    q: 'Can I calculate engagement for any public crypto KOL?',
    a: 'Yes, as long as the account is public. Engagement signals must be visible to calculate the rate accurately.<br/><br/>Private or protected accounts cannot be evaluated reliably without access to their content.',
  },
  {
    q: 'How accurate is the engagement calculator?',
    a: 'The calculator is accurate for what it measures: visible engagement on recent posts relative to follower count. By using the median engagement across recent posts, the result is stable and not skewed by a single viral outlier.<br/><br/>Engagement rate is not a perfect predictor of on-chain conversions, since attention does not always equal action &mdash; which is why Kolio pairs it with audience-authenticity and attribution data.',
  },
  {
    q: 'What is a high engagement rate for a crypto KOL?',
    a: '"High" depends on audience size. Based on Kolio benchmarks:<br/><br/><ul><li>1k&ndash;5k followers: Above 6.16%</li><li>10k&ndash;50k followers: Above 1.27%</li><li>100k&ndash;500k followers: Above 0.93%</li><li>1M+ followers: Above 1.08%</li></ul><br/>Smaller KOLs generally see higher engagement rates, while larger accounts trend lower &mdash; but still meaningful &mdash; percentages.',
  },
  {
    q: 'Can bought followers affect engagement results?',
    a: 'Yes. Bought or bot followers typically do not engage, which lowers engagement rate and can make a profile look weaker than its follower count suggests.<br/><br/>This is exactly why engagement rate matters in crypto: it helps reveal when an audience has been inflated without real attention behind it. Inside Kolio, proof-based vetting goes further and flags bought-follower and bot patterns directly.',
  },
];

/** FAQ accordion on a soft card. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background py-8">
      <Container>
        <div className="rounded-xl bg-background-soft px-6 py-16 md:px-16 md:py-24">
          <div className="mx-auto max-w-[820px]">
            <p className="mb-2 text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
              FAQ
            </p>
            <h2 className="mb-8 font-display text-4xl leading-[1.05] text-foreground md:text-6xl">
              Frequently asked questions
            </h2>

            <div className="divide-y divide-black/10">
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
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center text-foreground transition-colors">
                    {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="faq-answer mt-4 text-body leading-relaxed text-foreground/75 [&_li]:ml-5 [&_li]:list-disc [&_ul]:mt-1"
                    dangerouslySetInnerHTML={{ __html: f.a }}
                  />
                )}
              </div>
            );
          })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
