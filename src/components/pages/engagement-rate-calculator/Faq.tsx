import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS: { q: string; a: string }[] = [
  {
    q: 'What is Modash?',
    a: 'Modash is an influencer marketing platform that lets brands on Shopify manage and grow their influencer programs from one place. Find creators, manage relationships, track performance, and pay them in one connected workflow. Run paid partnerships, affiliate programs, and gifting campaigns without juggling multiple tools or spreadsheets.',
  },
  {
    q: 'How to check influencer engagement rate?',
    a: "Engagement rate shows how many people interact with an influencer's content relative to their follower count. A practical way to check it is to review recent posts, add up engagements (likes, comments, and other visible interactions), and compare that total to the follower count.<br/><br/>On this page, Modash calculates engagement rate using the last two months of content and uses the median engagement across posts to reduce the impact of outliers (for example, one unusually viral post).",
  },
  {
    q: 'What affects Instagram engagement rate?',
    a: 'Common factors include:<br/><br/><ul><li><strong>Content format:</strong> Reels, carousels, and single-image posts can perform differently.</li><li><strong>Content quality and relevance:</strong> How well the topic matches audience interests.</li><li><strong>Audience authenticity:</strong> Fake or inactive followers reduce engagement.</li><li><strong>Consistency and timing:</strong> Posting schedule and when followers are most active.</li><li><strong>Niche and audience expectations:</strong> Some industries naturally see higher or lower engagement.</li><li><strong>Call-to-action and community management:</strong> Encouraging comments and replying to followers.</li></ul>',
  },
  {
    q: 'How does engagement rate impact ROI?',
    a: 'Engagement rate is a proxy for how likely an audience is to notice and interact with sponsored content. Higher engagement rates often mean:<br/><br/><ul><li>More attention on branded posts</li><li>Better chances of clicks, saves, site visits, and conversions</li></ul><br/>That said, ROI depends on audience fit and purchase intent too. A slightly lower engagement rate can still drive strong ROI if the audience is well-matched and the content is persuasive.',
  },
  {
    q: "Why check an influencer's engagement rate?",
    a: 'You check engagement rate to:<br/><br/><ul><li><strong>Spot quality vs. vanity metrics:</strong> Follower count alone can be misleading.</li><li><strong>Compare creators fairly:</strong> Engagement rate normalizes performance across different audience sizes.</li><li><strong>Reduce risk:</strong> It can help flag inflated audiences or weak content resonance.</li><li><strong>Forecast performance:</strong> It helps set expectations for reach and response.</li></ul>',
  },
  {
    q: 'How do you calculate engagement rate per post on Instagram?',
    a: 'A simple per-post formula is:<br/><br/><strong>Engagement rate (per post) = (Engagements on that post ÷ Follower count) × 100</strong><br/><br/>On the Modash page, the calculation uses the median engagements across recent posts (rather than a single post), divided by followers and multiplied by 100.',
  },
  {
    q: 'Is engagement rate calculated per post or overall?',
    a: 'It can be calculated both ways:<br/><br/><ul><li><strong>Per post:</strong> For a single piece of content.</li><li><strong>Overall (profile-level):</strong> Based on a set of recent posts to represent typical performance.</li></ul><br/>This calculator provides an overall profile engagement rate based on recent content from the last two months.',
  },
  {
    q: 'Does this calculator work for Reels and carousel posts?',
    a: 'Yes. Reels and carousels are included because they are standard Instagram posts. The calculator evaluates recent content regardless of format.<br/><br/>The free calculator does not break down engagement rate by format, but format-level analysis is available inside Modash.',
  },
  {
    q: 'Can I calculate engagement rate for any public Instagram account?',
    a: 'Yes, as long as the Instagram profile is public. Engagement signals must be visible to calculate the rate accurately.<br/><br/>Private accounts cannot be evaluated reliably without access to their content.',
  },
  {
    q: 'How accurate is the Instagram engagement calculator?',
    a: 'The calculator is accurate for what it measures: visible engagement on recent posts relative to follower count. By using the median engagement across recent posts, the result is more stable and less skewed by a single viral outlier.<br/><br/>However, engagement rate is not a perfect predictor of sales outcomes, since engagement does not always equal purchase intent.',
  },
  {
    q: 'What is a high engagement rate on Instagram?',
    a: '"High" depends on follower size. Based on Modash benchmarks:<br/><br/><ul><li>1k–5k followers: Above 6.16%</li><li>10k–50k followers: Above 1.27%</li><li>100k–500k followers: Above 0.93%</li><li>1M+ followers: Above 1.08%</li></ul><br/>Smaller creators generally see higher engagement rates, while larger accounts tend to have lower — but still meaningful, percentages.',
  },
  {
    q: 'Can fake followers affect engagement rate results?',
    a: 'Yes. Fake or low-quality followers typically do not engage, which lowers engagement rate and can make a profile appear less effective than its follower count suggests.<br/><br/>This is one reason engagement rate is valuable, it helps reveal when an audience size may be inflated without real attention behind it.',
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
