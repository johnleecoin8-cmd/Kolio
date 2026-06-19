import { useState } from 'react';
import Container from '@/components/ui/Container';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ITEMS = [
  {
    company: 'Helix Exchange',
    bg: 'bg-pink',
    quote:
      'The Kolio API lets us surface vetted crypto KOLs that already create for our niche — and prove their audience is real before we ever fund a campaign.',
    name: 'Ronak Trivedi',
    role: 'Head of Growth at Helix Exchange',
  },
  {
    company: 'Northwind Protocol',
    bg: 'bg-purple-light',
    quote:
      "Giving our team programmatic access to this depth of KOL and on-chain attribution data is a game-changer. In crypto, distribution is everything — and Kolio turned it into a measurable channel we can actually trust.",
    name: 'Stefan Kollenberg',
    role: 'BD & Partnerships at Northwind Protocol',
  },
  {
    company: 'Mesa Labs',
    bg: 'bg-violet-light',
    quote:
      "Kolio is our essential partner for proof-based web3 influencer marketing. Without it, building our own KOL vetting and attribution stack would be impossible with the team we have.",
    name: 'Aleksander Kopyt',
    role: 'Head of Affiliate Marketing, Mesa Labs',
  },
];

/** "Why they love Kolio" — horizontal scrolling testimonial cards + arrows. */
export default function Testimonials() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(ITEMS.length - 1, a + 1));

  return (
    <section className="overflow-hidden bg-background py-16 md:py-24">
      <Container>
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
              Testimonials
            </p>
            <h3 className="mt-2 text-[1.75rem] font-semibold leading-[1.15] text-foreground">
              Why web3 teams build on Kolio
            </h3>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-pill border border-gray-300 bg-white text-ink transition hover:bg-gray-50"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-pill border border-gray-300 bg-white text-ink transition hover:bg-gray-50"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>

      <Container>
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(-${active} * (50% + 0.75rem)))` }}
          >
            {ITEMS.map((t) => (
              <div
                key={t.company}
                className={`${t.bg} flex w-[85%] shrink-0 flex-col justify-between rounded-xl p-8 md:w-[calc(50%-0.75rem)] md:p-10`}
              >
                <div>
                  <span className="text-body-lg font-display font-bold tracking-tight text-ink">
                    {t.company}
                  </span>
                  <p className="mt-4 text-body-md font-medium text-ink">{t.quote}</p>
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-pill bg-white text-body-md font-bold text-ink shadow-btn">
                    {t.name
                      .split(' ')
                      .map((w) => w[0])
                      .join('')}
                  </span>
                  <div>
                    <p className="text-body font-semibold text-ink">{t.name}</p>
                    <p className="text-body-sm text-ink/60">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* progress bars */}
        <div className="mt-8 flex gap-3">
          {ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1 flex-1 rounded-pill transition-colors ${
                i === active ? 'bg-ink' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
