import { useState, ReactNode } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: 'Can I test the API?',
    a: (
      <>
        Yes!{' '}
        <a
          href="https://form.jotform.com/modash/intro-modash-api"
          className="font-semibold text-ink underline"
        >
          Book a call
        </a>{' '}
        with our team and we can get you set up with testing credits. You can also
        learn more by{' '}
        <a
          href="https://docs.modash.io/products/discovery_api/openapi_doc/discovery/section/testing-the-api"
          className="font-semibold text-ink underline"
        >
          reading our documentation on testing
        </a>
        .
      </>
    ),
  },
  {
    q: 'How does the pricing work?',
    a: (
      <>
        The pricing for Discovery API starts at $16,200 per year (3000 credits per
        month), with an annual commitment. The Raw API pricing starts at $10,000 per
        year, which gives you 40,000 requests per month.{' '}
        <a
          href="https://modash.io/influencer-marketing-api/pricing"
          className="font-semibold text-ink underline"
        >
          Check the pricing page for details
        </a>
        .
      </>
    ),
  },
  {
    q: 'How does the credits work?',
    a: (
      <>
        The API operates on a monthly credit-based system. Different endpoints consume
        credits differently. For example, a search request costs a small number of
        credits for each result it returns (e.g., 0.01 credits per influencer found).{' '}
        <a
          href="https://modash.io/influencer-marketing-api/pricing"
          className="font-semibold text-ink underline"
        >
          Check the pricing page for details
        </a>
        .
      </>
    ),
  },
  {
    q: "What's the difference between the Discovery API and the Raw API?",
    a: (
      <>
        The Discovery API provides analyzed, aggregated, and searchable data. It's
        built for finding new creators and understanding their audience and
        performance (e.g., engagement rate, audience demographics, fake follower
        scores). The Raw API provides live, unfiltered data, such as their most recent
        posts or live follower list, and is best for real-time monitoring or tracking.
      </>
    ),
  },
  {
    q: 'Can I access the API with a platform plan?',
    a: (
      <>
        No, the Modash platform &amp; API are priced separately. You can find{' '}
        <a
          href="https://www.modash.io/pricing"
          className="font-semibold text-ink underline"
        >
          platform pricing here
        </a>
        , which has monthly plans available starting at $299/month.
      </>
    ),
  },
];

/** Frequently asked questions — accordion on soft panel. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background pb-16 md:pb-24">
      <Container>
        <div className="rounded-xl bg-background-soft p-8 md:p-14">
          <h2 className="mb-8 font-display text-h4 leading-tight text-foreground md:text-h3">
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
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-gray-200 text-foreground">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
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
