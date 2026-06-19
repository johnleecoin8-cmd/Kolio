import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS = [
  {
    q: 'How many influencers are in the Modash database?',
    a: 'Modash simply lists every creator on Earth with 1k+ followers across Instagram, YouTube, and TikTok. That’s over 200M+ profiles; the largest database on the market, and it grows every day.',
  },
  {
    q: 'Which influencer search filters are available?',
    a: 'There are filters available for the influencer, and for their audience – and they vary slightly per platform. Influencer filter examples: location, follower range, engagement rate, language, bio keywords, hashtags used, and more. Audience filter examples: location (city/country), gender, interests, fake followers, and more. See all available filters by signing up for a free trial.',
  },
  {
    q: 'Can you use Modash to discover micro influencers?',
    a: 'Yes! A ‘micro influencer’ would typically be defined by their number of followers. In Modash, you can simply apply a filter to only see influencers with a follower range between X and Y (e.g. 10k-25k). Combine those with other filters like interests, keywords, and audience locations to find the perfect fit.',
  },
  {
    q: 'Can Modash help with vetting influencers too?',
    a: 'Yes. Every influencer you discover can be analyzed inside Modash. You can check quantitative factors like engagement rate & fake followers, see audience breakdown by locations & gender, check their recent posts, lookalikes, and more.',
  },
];

/** Search engine FAQs — accordion. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="text-center font-display text-[1.75rem] leading-tight text-violet-dark md:text-[2rem]">
          Modash influencer search engine FAQs
        </h2>

        <div className="mx-auto mt-10 max-w-[1040px]">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-foreground/15">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-body-md font-semibold text-violet-dark">
                    {f.q}
                  </span>
                  <ChevronDown
                    size={22}
                    className={`shrink-0 text-violet-dark transition-transform ${
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
