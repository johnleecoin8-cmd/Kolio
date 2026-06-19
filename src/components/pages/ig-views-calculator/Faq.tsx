import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import WideContainer from './WideContainer';

const FAQS = [
  {
    title: 'What is Modash?',
    content:
      'Modash is an influencer marketing platform that lets brands on Shopify manage and grow their influencer programs from one place. Find creators, manage relationships, track performance, and pay them in one connected workflow. Run paid partnerships, affiliate programs, and gifting campaigns without juggling multiple tools or spreadsheets.',
  },
  {
    title: 'What are Instagram average views?',
    content:
      'Instagram average views are the typical number of views a creator gets per Reel over a recent set of posts. It is a quick way to estimate reach and consistency.',
  },
  {
    title: 'How do you calculate Instagram average views?',
    content:
      'A simple method is to take a set of recent Reels, add up their views, and divide by the number of Reels. A calculator helps you do this instantly and reduces the impact of one-off outliers.',
  },
  {
    title: 'What is a good average views count on Instagram?',
    content:
      'There is no single "good" number. A good average views count depends on follower size, niche, and content format. The best approach is to compare a creator to benchmarks and to other creators with a similar audience size.',
  },
  {
    title: 'Why can a creator with many followers have low average views?',
    content:
      'Common reasons include inconsistent posting, content that does not resonate, audience quality issues, or a follower base built from older viral moments. Average views help you spot this quickly.',
  },
  {
    title: 'Is this Instagram average views calculator free?',
    content:
      'Yes. The page is designed to be free to use for a quick check with no sign-up. If you want deeper analytics, more history, and workflows to manage creators at scale, you can upgrade to Modash.',
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
