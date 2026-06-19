import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

type Card = {
  bg: string;
  brand: string;
  quote: string;
  author: string;
  role: string;
};

const CARDS: Card[] = [
  {
    bg: 'bg-pink-bg',
    brand: 'Ledger',
    quote:
      'Kolio cut our KOL vetting from weeks to an afternoon. Seeing real reach and bot share upfront meant we stopped paying for inflated follower counts and started backing KOLs who actually convert.',
    author: 'Rugile Paleviciute',
    role: 'Head of Growth',
  },
  {
    bg: 'bg-violet-bg',
    brand: 'Arbitrum',
    quote:
      'We tested every crypto marketing tool out there; none gave us trustworthy data. Kolio was the turning point — reliable KOL discovery plus live content tracking across X and Telegram.',
    author: 'Ayme Mendes Da Costa',
    role: 'KOL Marketing Manager',
  },
  {
    bg: 'bg-orange-bg',
    brand: 'Phantom',
    quote:
      'On-chain escrow changed how we work with KOLs. Budget only releases once the content ships and performs, so both sides are protected. I won’t run a campaign without Kolio now.',
    author: 'Laura Garsdal',
    role: 'Campaign Lead',
  },
  {
    bg: 'bg-coral-bg',
    brand: 'OKX',
    quote:
      'For large micro-KOL pushes around a listing, Kolio is unmatched. We found hundreds of DeFi and trading KOLs with the right audience in days, and attribution showed us exactly who drove volume.',
    author: 'Maris Niilus',
    role: 'KOL Campaign Specialist',
  },
];

function Slide({ card }: { card: Card }) {
  return (
    <div className={`flex h-full flex-col rounded-xl ${card.bg} p-8 md:p-10`}>
      <span className="self-start text-body-md font-display font-semibold uppercase tracking-tight text-foreground/80">
        {card.brand}
      </span>
      <p className="mt-6 flex-1 text-body-md leading-snug text-foreground">
        {card.quote}
      </p>
      <div className="mt-8 flex items-center gap-3">
        <span
          aria-hidden
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-body-md font-semibold text-white"
        >
          {card.author.charAt(0)}
        </span>
        <div>
          <div className="text-body font-semibold text-foreground">
            {card.author}
          </div>
          <div className="text-eyebrow text-foreground/60">{card.role}</div>
        </div>
      </div>
    </div>
  );
}

/** Testimonials carousel — two cards visible, arrow navigation. */
export default function Testimonials() {
  const [start, setStart] = useState(0);
  const canPrev = start > 0;
  const canNext = start < CARDS.length - 2;

  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="text-body-sm font-semibold uppercase tracking-wide text-foreground/50">
              Testimonials
            </div>
            <h3 className="mt-3 text-[1.75rem] font-semibold leading-[1.15] text-foreground md:text-[2.1875rem]">
              What crypto teams say about Kolio
            </h3>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => canPrev && setStart((s) => s - 1)}
              disabled={!canPrev}
              className="flex h-11 w-11 items-center justify-center rounded-md bg-ink text-background transition disabled:opacity-30"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => canNext && setStart((s) => s + 1)}
              disabled={!canNext}
              className="flex h-11 w-11 items-center justify-center rounded-md bg-ink text-background transition disabled:opacity-30"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(${start} * -50% - ${start} * 0.75rem))` }}
          >
            {CARDS.map((card) => (
              <div key={card.author} className="w-full shrink-0 md:w-[calc(50%-0.75rem)]">
                <Slide card={card} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 md:hidden">
          {CARDS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show slide ${i + 1} of ${CARDS.length}`}
              onClick={() => setStart(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === start ? 'bg-foreground' : 'bg-foreground/20'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
