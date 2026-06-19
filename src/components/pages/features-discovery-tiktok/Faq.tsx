import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS = [
  {
    q: 'What is influencer discovery?',
    a: 'Influencer discovery is the process of finding influencers that are the right fit to promote your brand or product.',
  },
  {
    q: 'How many TikTok influencers are in the Modash database?',
    a: "Modash simply lists every creator on Earth with 1k+ followers across Instagram, YouTube, and TikTok. For TikTok specifically, that's over 96M+ accounts; the largest database on the market, and it grows every day.",
  },
  {
    q: 'Which discovery filters are available?',
    a: 'There are filters available for the influencer, and for their audience – and they vary slightly per platform. For TikTok, here are some of the filters available. For audiences: location (city/country), gender, age, and language. And for influencers: location, follower range, engagement rate, language, keywords mentioned in bios/posts, contact information availability, and more. See all available filters by signing up for a free trial.',
  },
  {
    q: 'Can you use Modash to discover micro TikTok influencers?',
    a: "Yes! A 'micro influencer' would typically be defined by their number of subscribers. In Modash, you can simply apply a filter to only see TikTok profiles with a subscribers range between X and Y (e.g. 10k-25k). Combine those with other filters like interests, keywords, and audience locations to find the perfect fit.",
  },
  {
    q: 'Can Modash help with vetting TikTok influencers too?',
    a: 'Yes. Every influencer you discover can be analyzed inside Modash. You can check quantitative factors like engagement rate & follower growth rate, and audience breakdown by locations & gender. Qualitatively, you can also check their recent posts, popular posts, sponsored posts, and more.',
  },
];

/** Discovery tool FAQs — accordion. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[820px]">
          <h3 className="mb-8 text-center font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.5rem]">
            Modash TikTok discovery tool FAQs
          </h3>

          <div className="divide-y divide-black/10 border-y border-black/10">
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
                    <span className="shrink-0 text-foreground">
                      {isOpen ? <Minus size={24} /> : <Plus size={24} />}
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
