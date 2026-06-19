import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

const SLIDES = [
  {
    bg: 'bg-pink',
    brand: 'Layer Labs',
    quote:
      "We used to wire KOLs manually across four chains and pray the tx landed. With Kolio the budget sits in escrow, payouts release the moment posts are verified, and finance finally has an on-chain record instead of a folder of screenshots.",
    initials: 'AM',
    name: 'Andrei Marin',
    role: 'Growth Lead, Layer Labs',
  },
  {
    bg: 'bg-coral',
    brand: 'Nova Exchange',
    quote:
      "Before Kolio, KOL payouts were spread across spreadsheets, Telegram, and three wallets. Now everything — escrow, multi-chain settlement, referral attribution — lives in one place. Our KOLs trust the campaign because they can see the budget is locked before they post.",
    initials: 'RK',
    name: 'Rina Kovacs',
    role: 'Head of Partnerships, Nova Exchange',
  },
  {
    bg: 'bg-purple',
    brand: 'Mesh Protocol',
    quote:
      "I've run crypto KOL campaigns for years and payouts were always the messy part. Kolio is the first platform that treats it like real infrastructure: escrow, verified delivery, and a tx hash for every payment. It's become essential for my team.",
    initials: 'TZ',
    name: 'Tomas Zeller',
    role: 'KOL Campaign Lead, Mesh Protocol',
  },
];

/** Testimonials carousel — colored quote cards, arrows + progress bars. */
export default function Testimonials() {
  const [active, setActive] = useState(0);
  const total = SLIDES.length;
  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  return (
    <section className="overflow-hidden bg-background py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h3 className="font-sans text-h4 font-bold text-ink">
            From teams who used to wire KOLs one wallet at a time
          </h3>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-white transition hover:opacity-90"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-white transition hover:opacity-90"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>

      <div className="mx-auto mt-10 max-w-container px-4 sm:px-6">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {SLIDES.map((s) => (
              <div key={s.name} className="w-full shrink-0 px-1">
                <div
                  className={`flex min-h-[360px] flex-col rounded-xl ${s.bg} p-8 text-ink md:p-12`}
                >
                  <span className="self-start font-display text-lg font-bold tracking-tight text-ink/80">
                    {s.brand}
                  </span>
                  <p className="mt-6 flex-1 text-body-md leading-relaxed text-ink">
                    {s.quote}
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/60 text-sm font-semibold text-ink">
                      {s.initials}
                    </span>
                    <div>
                      <p className="text-body font-bold text-ink">{s.name}</p>
                      <p className="text-body-sm text-ink/70">{s.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* progress bars */}
        <div className="mt-8 grid grid-cols-3 gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1 rounded-full transition-colors ${
                i === active ? 'bg-ink' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
