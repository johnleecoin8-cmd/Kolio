import { useState, ReactNode } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: 'Can I test the API?',
    a: (
      <>
        Yes!{' '}
        <a href="/demo-confirmation" className="font-semibold text-ink underline">
          Book a call
        </a>{' '}
        with our team and we will set you up with sandbox credits, so you can run live
        KOL searches before committing.
      </>
    ),
  },
  {
    q: 'How does the pricing work?',
    a: (
      <>
        The Discovery API and the Raw API are priced separately, each on an annual
        plan with a monthly credit allowance sized to your campaign volume. Tell us
        your use-case and we will scope a plan that fits.{' '}
        <a href="/demo-confirmation" className="font-semibold text-ink underline">
          Talk to us about pricing
        </a>
        .
      </>
    ),
  },
  {
    q: 'How do the credits work?',
    a: (
      <>
        The API runs on a monthly credit-based system. Different endpoints consume
        credits differently — for example, a search request costs a small number of
        credits for each vetted KOL it returns.{' '}
        <a href="/demo-confirmation" className="font-semibold text-ink underline">
          Talk to us about pricing
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
        built for finding new crypto KOLs and understanding their audience and
        performance (engagement rate, audience demographics, audience-quality and
        fake-follower scores). The Raw API provides live, unfiltered data — most
        recent posts, token mentions, and on-chain attribution events — and is best
        for real-time campaign monitoring.
      </>
    ),
  },
  {
    q: 'Can I access the API with a Kolio platform plan?',
    a: (
      <>
        No — the Kolio platform and the API are priced separately. The platform is the
        self-serve product for running campaigns; the API is for teams building their
        own tooling on top of our KOL data. You can{' '}
        <a href="/demo-confirmation" className="font-semibold text-ink underline">
          see platform plans here
        </a>
        .
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
          <h2 className="mb-8 text-[1.75rem] font-semibold leading-[1.15] text-foreground">
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
