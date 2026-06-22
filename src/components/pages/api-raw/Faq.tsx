import { useState, ReactNode } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';

const FORM = '/demo-confirmation';

function Link({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="font-semibold text-foreground underline">
      {children}
    </a>
  );
}

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: 'Can I test the API?',
    a: (
      <>
        Yes! <Link href={FORM}>Book a demo</Link> with our team and we&apos;ll
        get you set up with testing credits so you can pull live KOL data before
        you commit. You can also{' '}
        <Link href="/demo-confirmation">read the API docs on testing</Link>.
      </>
    ),
  },
  {
    q: "What is the Raw API's primary purpose?",
    a: 'The Kolio Raw API delivers live, unfiltered data straight from crypto KOL channels. Its main use cases are real-time campaign monitoring, proof-based KOL vetting, enrichment, and web3 attribution — tracking posts, follower lists, cashtags, comments, and replies the moment they happen.',
  },
  {
    q: 'Which channels does the Raw API cover?',
    a: 'Kolio covers the channels where crypto KOLs actually operate: X (Twitter), YouTube, TikTok, and Telegram. You can query profiles, reach, content, and engagement across all four from a single API.',
  },
  {
    q: 'Is the data fetched in real-time?',
    a: 'Yes! Kolio Raw API data is fetched on-demand, live and unfiltered — so reach and engagement reflect what a KOL looks like right now, not a cached snapshot.',
  },
  {
    q: 'How do you handle payments and attribution for campaigns?',
    a: 'Kolio pairs the data layer with on-chain payments and escrow, plus attribution that ties a KOL’s posts back to wallet-level conversions. The Raw API surfaces the live signals — paid-partnership flags, cashtags, and engagement — that feed those attribution models.',
  },
  {
    q: 'How does the pricing work?',
    a: (
      <>
        Kolio Raw API pricing is a credit-based annual plan starting at $10,000
        per year, which gives you 40,000 requests per month across all channels.{' '}
        <Link href="/demo-confirmation">
          Book a demo for pricing details
        </Link>
        .
      </>
    ),
  },
  {
    q: 'How do credits work?',
    a: (
      <>
        The API runs on a monthly credit-based system, and different endpoints
        consume credits differently. A discovery search, for example, costs a
        small number of credits per KOL returned (e.g. 0.01 credits per KOL
        found).{' '}
        <Link href="/demo-confirmation">Book a demo for pricing details</Link>.
      </>
    ),
  },
];

/** FAQ accordion on sand block, left-aligned heading. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="card-kit p-8 md:p-14">
          <p className="eyebrow mb-3">FAQ</p>
          <h2 className="display-lg mb-8 font-display text-[1.75rem] text-foreground md:text-[2.1875rem]">
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
