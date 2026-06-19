import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

type T = {
  company: string;
  quote: string;
  initials: string;
  name: string;
  role: string;
  bg: string;
};

const ITEMS: T[] = [
  {
    company: 'L2 Protocol',
    quote:
      "I've tried a lot of tools for influencer marketing, but nothing came close once we moved to crypto. Kolio is where our whole KOL program lives now: verified reach, deal terms, and on-chain payouts in one view. It killed the endless back-and-forth across Telegram, Notion, and spreadsheets.",
    initials: 'AM',
    name: 'Andreea Moise',
    role: 'Growth Lead, L2 Protocol',
    bg: 'bg-pink',
  },
  {
    company: 'DeFi Exchange',
    quote:
      'Before Kolio, our KOL work was split across five tools and a dozen DMs. Product briefs in one place, wallet addresses in another, payouts chased by hand. Now it all lives in one platform with proof of reach attached to every creator. Honestly, it is such a relief, and we are into our second campaign cycle.',
    initials: 'RK',
    name: 'Regina Kacajeva',
    role: 'KOL Partnerships Manager, DeFi Exchange',
    bg: 'bg-coral',
  },
  {
    company: 'NFT Studio',
    quote:
      "I've run crypto campaigns for over four years and tried many tools, but Kolio is by far my number one. I vet KOLs on real audience quality, lock terms, and settle payouts on-chain without leaving the platform. It has become absolutely essential for me and my team.",
    initials: 'TZ',
    name: 'Tatiana Zelen',
    role: 'Marketing Lead, NFT Studio',
    bg: 'bg-violet',
  },
];

/** "From teams who used to live in Telegram threads" — testimonial carousel. */
export default function Testimonials() {
  const [active, setActive] = useState(0);
  const count = ITEMS.length;
  const prev = () => setActive((a) => (a - 1 + count) % count);
  const next = () => setActive((a) => (a + 1) % count);

  return (
    <section className="overflow-hidden bg-background py-16 md:py-24">
      <Container>
        <div className="text-center">
          <h2 className="font-sans text-h4 font-bold leading-tight text-ink">
            From teams who used to live in Telegram threads
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
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
          className="flex gap-5 px-4 transition-transform duration-500 ease-out sm:px-6"
          style={{ transform: `translateX(calc(50% - ${active * 33.4 + 16.7}% ))` }}
        >
          {ITEMS.map((t) => (
            <div
              key={t.name}
              className={`flex w-[88vw] max-w-[760px] shrink-0 flex-col justify-between rounded-xl p-8 md:w-[760px] md:p-12 ${t.bg}`}
            >
              <div>
                <span className="font-display text-body-lg font-semibold uppercase tracking-tight text-ink">
                  {t.company}
                </span>
                <p className="mt-6 text-body-md leading-relaxed text-ink">
                  {t.quote}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-body-sm font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-body font-semibold text-ink">{t.name}</p>
                  <p className="text-body-sm text-ink/70">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* progress bars */}
      <Container>
        <div className="mt-8 grid grid-cols-3 gap-3">
          {ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1 rounded-pill transition ${
                i === active ? 'bg-ink' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
