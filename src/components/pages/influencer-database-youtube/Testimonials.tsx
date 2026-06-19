import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

type Card = {
  logo: string;
  quote: string;
  avatar: string;
  name: string;
  role: string;
  bg: string;
};

const CARDS: Card[] = [
  {
    logo: `${CDN}/6835b37a2bcf770c96efc606_logo_burga.avif`,
    quote:
      'I’ve worked with Modash for 3+ years across two companies. I can honestly say that it is one of the best tools for influencer discovery and analytics.',
    avatar: `${CDN}/6835b5043bd7736424b5dc9b_img_rugile.avif`,
    name: 'Rugile Paleviciute',
    role: 'Head of Global Partnerships',
    bg: 'bg-pink-light',
  },
  {
    logo: `${CDN}/6835b80c4ae314b5e9e00e79_logo_regalrose.avif`,
    quote:
      'Before Modash, I tested platforms for months, none quite worked. Modash was a game changer, reliable discovery and live content tracking.',
    avatar: `${CDN}/6835b72de87970a6c16b6a89_img_ayme.avif`,
    name: 'Ayme Mendes Da Costa',
    role: 'Influencer Marketing Manager',
    bg: 'bg-orange-light',
  },
  {
    logo: `${CDN}/6835b7bed20fc3d0c262fc0f_logo_nordvpn.png`,
    quote:
      'I’ve been working with Modash for over 3 years. Previously, I was at a beauty brand and when I started at NordVPN I told my team lead, "I\'m going to need Modash”.',
    avatar: `${CDN}/6835b7f328e78abe2cbdde7a_img_laura.avif`,
    name: 'Laura Garsdal',
    role: 'Influencer Marketing Manager',
    bg: 'bg-violet-light',
  },
  {
    logo: `${CDN}/6835bda2f56382ae4bd7812f_logo_trendhim.png`,
    quote:
      'For large-scale micro-influencer campaigns, Modash is unmatched. Its huge data pool let us quickly find thousands of creators with the right audience.',
    avatar: `${CDN}/6835bdd8e07dcabf9d72ddf0_img_maris.avif`,
    name: 'Maris Niilus',
    role: 'Influencer Campaign Specialist',
    bg: 'bg-lime/40',
  },
];

/** Testimonials carousel — eyebrow + heading + arrows, scrolling cards, progress bar. */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(CARDS.length - 1, i + 1));

  return (
    <section className="overflow-hidden bg-background py-16 md:py-24">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
              Testimonials
            </p>
            <h2 className="mt-3 font-display text-h4 leading-tight text-foreground md:text-[2.5rem]">
              What Modash customers say
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
          style={{ transform: `translateX(calc(${-index} * (33.333% + 1.5rem)))` }}
        >
          {CARDS.map((c) => (
            <div
              key={c.name}
              className={`flex min-h-[400px] w-[85%] shrink-0 flex-col rounded-xl p-8 sm:w-[calc(50%-0.75rem)] lg:w-[calc(50%-0.75rem)] ${c.bg}`}
            >
              <img src={c.logo} alt="" className="h-6 w-auto self-start object-contain" />
              <p className="mt-8 text-body-md text-foreground">{c.quote}</p>
              <div className="mt-auto flex items-center gap-3 pt-8">
                <img
                  src={c.avatar}
                  alt={c.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
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
