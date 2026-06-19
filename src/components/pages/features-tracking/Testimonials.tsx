import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

type Slide = {
  bg: string;
  brand: string;
  quote: string;
  initials: string;
  name: string;
  role: string;
};

const SLIDES: Slide[] = [
  {
    bg: 'bg-pink',
    brand: 'Helix DEX',
    quote:
      'Before Kolio we ran KOL pushes on faith. People posted, we screenshotted, and half the threads were deleted before we could report. Now every post is captured automatically and tied to actual swaps on-chain, so we finally know which KOLs drive volume and which just farm impressions.',
    initials: 'MR',
    name: 'Mara Reyes',
    role: 'Head of Growth, Helix DEX',
  },
  {
    bg: 'bg-coral',
    brand: 'Aether L2',
    quote:
      'During mainnet launch we had 80+ KOLs posting across X, YouTube, and Telegram in three days. Kolio tracked all of it, verified the reach, and showed us audience quality per creator. We renewed the real ones and cut the bot-padded accounts in one afternoon.',
    initials: 'DK',
    name: 'Daniel Kwon',
    role: 'Marketing Lead, Aether L2',
  },
  {
    bg: 'bg-violet',
    brand: 'Lumen Wallet',
    quote:
      'The part our finance team loves is escrowed payouts recorded next to verified deliverables. No more arguing over what a KOL actually posted. Discovery plus tracking plus attribution in one dashboard has saved us an entire reporting workflow.',
    initials: 'SP',
    name: 'Sofia Pereira',
    role: 'Partnerships Manager, Lumen Wallet',
  },
];

/** Testimonial carousel — colored quote cards. */
export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const total = SLIDES.length;
  const go = (d: number) => setIdx((p) => (p + d + total) % total);

  return (
    <section className="overflow-hidden bg-background py-16 md:py-24">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-[1.75rem] font-bold leading-tight text-foreground md:text-[2rem]">
            From teams who used to chase Telegram screenshots
          </h3>
          <div className="mt-5 flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-white transition hover:opacity-90"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-white transition hover:opacity-90"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </Container>

      {/* slides */}
      <div className="mt-10">
        <div className="mx-auto w-full max-w-container px-4 sm:px-6">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(calc(-${idx} * (66% + 1.5rem)))` }}
            >
              {SLIDES.map((s) => (
                <div
                  key={s.name}
                  className={`${s.bg} flex w-[88%] shrink-0 flex-col rounded-xl p-7 text-ink sm:w-[66%] md:p-9`}
                >
                  <span className="self-start font-display text-[1.25rem] font-semibold tracking-tight text-ink/80">
                    {s.brand}
                  </span>
                  <p className="mt-6 text-body-md text-ink/90">{s.quote}</p>
                  <div className="mt-8 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/60 text-body-sm font-bold text-ink">
                      {s.initials}
                    </span>
                    <div className="text-left">
                      <p className="text-body-sm font-semibold text-ink">{s.name}</p>
                      <p className="text-body-sm text-ink/70">{s.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* progress bar */}
        <div className="mx-auto mt-8 flex w-full max-w-container gap-2 px-4 sm:px-6">
          {SLIDES.map((s, i) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-1 flex-1 rounded-full bg-black/10"
            >
              <span
                className={`block h-full rounded-full bg-ink transition-all ${
                  i === idx ? 'w-full' : 'w-0'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
