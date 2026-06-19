import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

const TRUSTED_BY = ['Ledger', 'Phantom', 'Arbitrum', 'OKX', 'Polygon', 'dYdX'];

const TESTIMONIALS = [
  {
    brand: 'Ledger',
    quote:
      'We used to vet crypto KOLs off screenshots and gut feel. Kolio gave us real reach and bot data on every creator — our campaign ROI doubled in a quarter.',
    initials: 'RP',
    name: 'Rugile Paleviciute',
    role: 'Head of Growth',
    bg: 'bg-pink-bg',
  },
  {
    brand: 'Phantom',
    quote:
      'I tested every KOL tool out there; none understood crypto. Kolio is the first that filters by niche and audience quality, with on-chain payments built in.',
    initials: 'AC',
    name: 'Ayme Mendes Da Costa',
    role: 'KOL Marketing Manager',
    bg: 'bg-orange-bg',
  },
  {
    brand: 'Arbitrum',
    quote:
      'Escrow and attribution changed everything. We finally know which KOLs drove actual deposits — not just impressions. Kolio is now core to our launch playbook.',
    initials: 'LG',
    name: 'Laura Garsdal',
    role: 'Ecosystem Lead',
    bg: 'bg-violet-bg',
  },
  {
    brand: 'OKX',
    quote:
      'For large micro-KOL campaigns across regions, Kolio is unmatched. The data pool let us shortlist hundreds of verified creators with the right audience in days.',
    initials: 'MN',
    name: 'Maris Niilus',
    role: 'Campaign Specialist',
    bg: 'bg-purple-bg',
  },
];

/** Testimonials — eyebrow + heading + arrows, 2-up pastel card carousel with progress bar. */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  // show two cards starting at index (wraps)
  const visible = [TESTIMONIALS[index], TESTIMONIALS[(index + 1) % total]];

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        {/* trusted-by text row */}
        <p className="text-center text-eyebrow font-semibold uppercase tracking-wide text-foreground/40">
          Trusted by web3 brands, exchanges &amp; protocols
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {TRUSTED_BY.map((b) => (
            <span
              key={b}
              className="font-display text-[1.5rem] font-semibold text-foreground/30"
            >
              {b}
            </span>
          ))}
        </div>

        <div className="mt-16 flex items-end justify-between gap-6">
          <div>
            <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/40">
              Testimonials
            </p>
            <h2 className="mt-3 text-[2.1875rem] font-semibold leading-[1.15] text-foreground">
              What Kolio customers say
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              onClick={prev}
              aria-label="Previous"
              className="grid h-12 w-12 place-items-center rounded-sm bg-ink text-white transition hover:opacity-90"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="grid h-12 w-12 place-items-center rounded-sm bg-ink text-white transition hover:opacity-90"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {visible.map((t, i) => (
            <article
              key={`${t.name}-${i}`}
              className={`flex flex-col rounded-xl p-8 md:p-10 ${t.bg}`}
            >
              <span className="self-start font-display text-[1.25rem] font-semibold text-foreground/70">
                {t.brand}
              </span>
              <p className="mt-8 text-body-md leading-relaxed text-foreground">
                {t.quote}
              </p>
              <div className="mt-auto flex items-center gap-3 pt-12">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-body-sm font-bold text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="text-body font-bold text-foreground">{t.name}</p>
                  <p className="text-body-sm text-foreground/60">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* progress bar */}
        <div className="mt-10 flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 flex-1 rounded-pill transition-colors ${
                i === index ? 'bg-ink' : 'bg-black/10'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
