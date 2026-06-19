import { useState } from 'react';
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

/** Testimonials carousel — one card visible, dot navigation. */
export default function Testimonials() {
  const [active, setActive] = useState(0);
  const card = CARDS[active];

  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <div className="mb-8">
          <div className="text-body-sm font-semibold uppercase tracking-wide text-foreground/50">
            Testimonials
          </div>
          <h3 className="mt-3 font-display text-h4 leading-tight text-foreground">
            What Modash customers say
          </h3>
        </div>

        <div
          className={`max-w-[656px] rounded-xl ${card.bg} p-8 md:p-10`}
        >
          <img
            src={card.logo}
            width={112}
            alt=""
            className="h-7 w-auto object-contain"
          />
          <p className="mt-6 text-body-md leading-snug text-foreground">
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

        <div className="mt-6 flex items-center gap-2">
          {CARDS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show slide ${i + 1} of ${CARDS.length}`}
              onClick={() => setActive(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === active ? 'bg-foreground' : 'bg-foreground/20'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
