import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

type Card = {
  brand: string;
  quote: string;
  initials: string;
  name: string;
  role: string;
  bg: string;
};

const CARDS: Card[] = [
  {
    brand: 'Ledger',
    quote:
      'We used to vet crypto YouTubers by eye and hope for the best. With Kolio we see real reach and audience quality before we ever reach out — our campaign ROI is finally measurable.',
    initials: 'NK',
    name: 'Nadia Keller',
    role: 'Head of Growth Marketing',
    bg: 'bg-pink-light',
  },
  {
    brand: 'Arbitrum',
    quote:
      'Kolio is the first platform that treats crypto KOL marketing with web2-grade rigor. Proof-based vetting plus on-chain attribution means no more paying for inflated follower counts.',
    initials: 'TO',
    name: 'Tomas Oduya',
    role: 'Ecosystem Lead',
    bg: 'bg-orange-light',
  },
  {
    brand: 'Phantom',
    quote:
      'I tested every KOL tool in crypto for months — nothing was reliable. Kolio changed that: trustworthy discovery, live content tracking, and escrowed payments in one flow.',
    initials: 'LM',
    name: 'Lena Mwangi',
    role: 'KOL Marketing Manager',
    bg: 'bg-violet-light',
  },
  {
    brand: 'OKX',
    quote:
      'For large-scale micro-KOL campaigns across DeFi and trading, Kolio is unmatched. The data pool let us find thousands of creators with the right audience in minutes.',
    initials: 'RP',
    name: 'Rafael Pinto',
    role: 'Influencer Campaign Specialist',
    bg: 'bg-lime/40',
  },
];

/** Testimonials carousel — eyebrow + heading + arrows, scrolling cards, progress bar. */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(CARDS.length - 2, i + 1));

  return (
    <section className="overflow-hidden bg-background py-16 md:py-24">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
              Testimonials
            </p>
            <h2 className="mt-3 text-[1.75rem] font-semibold leading-[1.15] text-foreground md:text-[2.1875rem]">
              What web3 teams say about Kolio
            </h2>
          </div>
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink text-white transition hover:opacity-90"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink text-white transition hover:opacity-90"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>

      {/* track */}
      <div className="mt-10 overflow-hidden">
        <div
          className="mx-auto flex max-w-container gap-6 px-4 transition-transform duration-500 ease-out sm:px-6"
          style={{ transform: `translateX(calc(${-index} * (50% + 0.75rem)))` }}
        >
          {CARDS.map((c) => (
            <div
              key={c.name}
              className={`flex min-h-[440px] w-[88%] shrink-0 flex-col rounded-xl p-10 sm:w-[calc(50%-0.75rem)] lg:w-[calc(50%-0.75rem)] ${c.bg}`}
            >
              <span className="self-start text-body-md font-bold uppercase tracking-tight text-foreground">
                {c.brand}
              </span>
              <p className="mt-8 text-body-md text-foreground">{c.quote}</p>
              <div className="mt-auto flex items-center gap-3 pt-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-body-sm font-semibold text-white">
                  {c.initials}
                </span>
                <div>
                  <p className="text-body font-semibold text-foreground">{c.name}</p>
                  <p className="text-body-sm text-foreground/60">{c.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* progress bar */}
      <Container>
        <div className="mt-10 flex gap-2">
          {CARDS.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1 flex-1 rounded-full transition ${
                i === index ? 'bg-ink' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
