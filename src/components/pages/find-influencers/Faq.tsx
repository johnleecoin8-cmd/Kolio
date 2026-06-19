import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: 'How do I find Fitness influencers in United States?',
    a: (
      <>
        <p className="mb-3">You can find Fitness influencers in United States by:</p>
        <ul className="mb-3 list-disc space-y-1 pl-5">
          <li>
            Simply searching Fitness-related keywords/hashtags manually on social
            media
          </li>
          <li>
            Using location and niche filters in influencer search tools like
            Modash
          </li>
          <li>
            Inviting influencers to reach out to you (via your website/social
            media)
          </li>
        </ul>
        <p>
          There are 20 Fitness influencers with audiences in United States on
          this page. For example, @sabrinacesta, @wissamnabulsii, and
          @talithaajane. You can see a preview of their average views, engagement
          rates, and audience locations. More data is available inside Modash too
          (there is a free trial).
        </p>
      </>
    ),
  },
  {
    q: 'Who are the top Fitness influencers in United States?',
    a: (
      <>
        <p className="mb-3">
          It depends on your definition of "top", but some influential Fitness
          creators in United States include @taliyah.joelle, @nuryskmateo,
          @tamaraaarevalo, @richard_soon, and @steven.vuu.
        </p>
        <p>
          You can find 20 Fitness influencers with audiences in United States on
          this page. This list comes from Modash, an influencer marketing
          platform. You can run a custom search and see more data by starting a
          free trial.
        </p>
      </>
    ),
  },
  {
    q: 'How can I see more detailed data about these influencers?',
    a: (
      <>
        <p className="mb-3">
          The profiles shown here are a snapshot of each creator's key metrics. To
          access full influencer data including detailed audience demographics,
          growth trends over time, content performance history, contact
          information, and real-time engagement metrics, start a free trial of
          Modash.
        </p>
        <p>
          You'll be able to filter through 350M+ creators worldwide using over 20
          different criteria, export lists, and track campaign performance.
        </p>
      </>
    ),
  },
];

/** Page-specific FAQ: eyebrow + big display heading + accordion, on soft bg. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background-soft py-16 md:py-24">
      <div className="mx-auto w-full max-w-container px-4 sm:px-6">
        <p className="mb-3 text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
          FAQ
        </p>
        <h2 className="mb-10 font-display text-[2rem] uppercase leading-[1.05] text-foreground md:text-[3rem]">
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
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/5 text-foreground">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-4 max-w-[820px] text-body text-foreground/75">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
