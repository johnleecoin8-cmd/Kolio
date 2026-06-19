import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

type Card = {
  bg: string;
  logo: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

const CARDS: Card[] = [
  {
    bg: 'bg-pink-bg',
    logo: `${CDN}/6835b37a2bcf770c96efc606_logo_burga.avif`,
    quote:
      'I’ve worked with Modash for 3+ years across two companies. I can honestly say that it is one of the best tools for influencer discovery and analytics.',
    author: 'Rugile Paleviciute',
    role: 'Head of Global Partnerships',
    avatar: `${CDN}/6835b5043bd7736424b5dc9b_img_rugile.avif`,
  },
  {
    bg: 'bg-violet-bg',
    logo: `${CDN}/6835b80c4ae314b5e9e00e79_logo_regalrose.avif`,
    quote:
      'Before Modash, I tested platforms for months, none quite worked. Modash was a game changer, reliable discovery and live content tracking.',
    author: 'Ayme Mendes Da Costa',
    role: 'Influencer Marketing Manager',
    avatar: `${CDN}/6835b72de87970a6c16b6a89_img_ayme.avif`,
  },
  {
    bg: 'bg-orange-bg',
    logo: `${CDN}/6835b7bed20fc3d0c262fc0f_logo_nordvpn.png`,
    quote:
      'I’ve been working with Modash for over 3 years. Previously, I was at a beauty brand and when I started at NordVPN I told my team lead, "I\'m going to need Modash”.',
    author: 'Laura Garsdal',
    role: 'Influencer Marketing Manager',
    avatar: `${CDN}/6835b7f328e78abe2cbdde7a_img_laura.avif`,
  },
  {
    bg: 'bg-coral-bg',
    logo: `${CDN}/6835bda2f56382ae4bd7812f_logo_trendhim.png`,
    quote:
      'For large-scale micro-influencer campaigns, Modash is unmatched. Its huge data pool let us quickly find thousands of creators with the right audience.',
    author: 'Maris Niilus',
    role: 'Influencer Campaign Specialist',
    avatar: `${CDN}/6835bdd8e07dcabf9d72ddf0_img_maris.avif`,
  },
];

function Slide({ card }: { card: Card }) {
  return (
    <div className={`flex h-full flex-col rounded-xl ${card.bg} p-8 md:p-10`}>
      <img
        src={card.logo}
        width={112}
        alt=""
        className="h-7 w-auto self-start object-contain"
      />
      <p className="mt-6 flex-1 text-body-md leading-snug text-foreground">
        {card.quote}
      </p>
      <div className="mt-8 flex items-center gap-3">
        <img
          src={card.avatar}
          width={56}
          alt={card.author}
          className="h-14 w-14 rounded-full object-cover"
        />
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
              What Modash customers say
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
