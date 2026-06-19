import { useState, ReactNode } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';

const FORM =
  'https://form.jotform.com/modash/intro-modash-api?utm_source=api_raw&utm_campaign=web';

function Link({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-semibold text-foreground underline"
    >
      {children}
    </a>
  );
}

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: 'Can I test the API?',
    a: (
      <>
        Yes! <Link href={FORM}>Book a call</Link> with our team and we can get
        you set up with testing credits. You can also learn more by{' '}
        <Link href="https://docs.modash.io/products/discovery_api/openapi_doc/discovery/section/testing-the-api">
          reading our documentation on testing
        </Link>
        .
      </>
    ),
  },
  {
    q: "What is the Raw API's primary purpose?",
    a: 'The Raw API is designed to provide live, unfiltered data directly from the social channels. Its main use cases are for real-time monitoring, data enrichment, and tracking unfiltered content, such as recent posts, follower lists, hashtags, comments, comment replies etc.',
  },
  {
    q: 'Is the data fetched in real-time?',
    a: 'Yes! Our Raw API data is fetched on-demand live and unfiltered.',
  },
  {
    q: 'Can I also fetch thumbnails, images, and videos with Raw API?',
    a: 'Yes! Raw API can retrieve asset URLs for recent content including images, videos, etc.',
  },
  {
    q: 'How does the pricing work?',
    a: (
      <>
        The pricing for Discovery API starts at $16,200 per year (3000 credits
        per month), with an annual commitment. The Raw API pricing starts at
        $10,000 per year, which gives you 40,000 requests per month.{' '}
        <Link href="https://modash.io/influencer-marketing-api/pricing">
          Check the pricing page for details
        </Link>
        .
      </>
    ),
  },
  {
    q: 'How does the credit work?',
    a: (
      <>
        The API operates on a monthly credit-based system. Different endpoints
        consume credits differently. For example, a search request costs a small
        number of credits for each result it returns (e.g., 0.01 credits per
        influencer found).{' '}
        <Link href="https://modash.io/influencer-marketing-api/pricing">
          Check the pricing page for details
        </Link>
        .
      </>
    ),
  },
];

/** FAQ accordion on sand block, left-aligned heading. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background py-12 md:py-20">
      <Container>
        <div className="rounded-xl bg-background-soft p-8 md:p-14">
          <h2 className="mb-8 text-[1.75rem] font-semibold leading-[1.15] text-foreground md:text-[2.1875rem]">
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
                    <span className="shrink-0 text-foreground">
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
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
