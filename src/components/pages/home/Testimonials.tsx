import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import { cn } from '@/lib/cn';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const ITEMS = [
  {
    brand: 'Helix Protocol',
    quote:
      'Before Kolio, our KOL spend was split across DMs, spreadsheets, and a dozen group chats. Half the accounts we paid turned out to be bots. Now vetting, payouts, and attribution all live in one place.',
    avatar: `${CDN}/68c7f201a35bb17feff13c40_img_regina_orange.avif`,
    name: 'Regina Kacajeva',
    role: 'Head of Growth',
  },
  {
    brand: 'Aster Exchange',
    quote:
      "I've run KOL campaigns at two exchanges now. Kolio is the first tool that shows me real audience quality before I commit budget — it's easily the best for crypto KOL discovery and analytics.",
    avatar: `${CDN}/6835b5043bd7736424b5dc9b_img_rugile.avif`,
    name: 'Rugile Paleviciute',
    role: 'Head of Partnerships',
  },
  {
    brand: 'Lumen L2',
    quote:
      'We tested platforms for months ahead of our TGE; none quite worked for web3. Kolio was a game changer — reliable KOL discovery and live, on-chain campaign tracking.',
    avatar: `${CDN}/6835b72de87970a6c16b6a89_img_ayme.avif`,
    name: 'Ayme Mendes Da Costa',
    role: 'KOL Marketing Manager',
  },
  {
    brand: 'NovaSwap',
    quote:
      'The escrow alone paid for itself. Funds release on delivery, KOLs trust the process, and I finally have attribution I can take to the team without hand-waving.',
    avatar: `${CDN}/6835b7f328e78abe2cbdde7a_img_laura.avif`,
    name: 'Laura Garsdal',
    role: 'KOL Marketing Manager',
  },
  {
    brand: 'Orbit Wallet',
    quote:
      'For large-scale micro-KOL pushes around a listing, Kolio is unmatched. The data pool let us quickly find dozens of crypto voices with genuinely the right audience.',
    avatar: `${CDN}/6835bdd8e07dcabf9d72ddf0_img_maris.avif`,
    name: 'Maris Niilus',
    role: 'Campaign Specialist',
  },
];

/** "From teams who used to..." — testimonial slider. */
export default function Testimonials() {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + ITEMS.length) % ITEMS.length);
  const next = () => setI((v) => (v + 1) % ITEMS.length);

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-[760px] text-center">
          <p className="text-body-sm font-bold text-foreground/50">
            Testimonials
          </p>
          <h2 className="mt-3 font-sans text-[2rem] font-extrabold leading-[1.1] text-foreground md:text-[2.5rem]">
            From web3 teams who were tired of flying blind on KOL spend
          </h2>

          {/* square arrow controls */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-sm bg-ink text-white transition hover:opacity-90"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-sm bg-ink text-white transition hover:opacity-90"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* two visible cards (alternating warm tints) */}
        <div className="grid gap-6 md:grid-cols-2">
          {[0, 1].map((off) => {
            const item = ITEMS[(i + off) % ITEMS.length];
            const tint = off === 0 ? 'bg-orange-light' : 'bg-pink-light';
            return (
              <div key={off} className={cn('flex flex-col rounded-xl p-8 md:p-10', tint)}>
                <span className="self-start font-display text-body-lg font-bold tracking-tight text-foreground/70">
                  {item.brand}
                </span>
                <p className="mt-6 text-body-md text-foreground">{item.quote}</p>
                <div className="mt-auto flex items-center gap-4 pt-10">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    width={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-body font-semibold text-foreground">{item.name}</div>
                    <div className="text-body-sm text-foreground/60">{item.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
