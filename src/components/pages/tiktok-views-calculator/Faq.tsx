import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS = [
  {
    q: 'What is Modash?',
    a: 'Modash is an influencer marketing platform that helps brands find, analyze, and manage creators. You can search 350M+ influencer profiles, view audience demographics and engagement data, send emails, and track campaign results — all in one place.',
  },
  {
    q: 'What are TikTok average views?',
    a: 'TikTok average views are the typical number of views a creator gets per video over a recent set of posts. It is a quick way to estimate reach and consistency.',
  },
  {
    q: 'How do you calculate TikTok average views?',
    a: 'A simple method is to take a set of recent videos, add up their views, and divide by the number of videos. A calculator helps you do this instantly and reduces the impact of one-off outliers.',
  },
  {
    q: 'What is a good average views count on TikTok?',
    a: 'There is no single "good" number. A good average views count depends on follower size, niche, and content format. The best approach is to compare a creator to benchmarks and to other creators with a similar audience size.',
  },
  {
    q: 'Why can a creator with many followers have low average views?',
    a: 'Common reasons include inconsistent posting, content that does not resonate, audience quality issues, or a follower base built from older viral moments. Average views help you spot this quickly.',
  },
  {
    q: 'Is this TikTok average views calculator free?',
    a: 'Yes. The page is designed to be free to use for a quick check with no sign-up. If you want deeper analytics, more history, and workflows to manage creators at scale, you can upgrade to Modash.',
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
