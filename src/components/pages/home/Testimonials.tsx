import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const ITEMS = [
  {
    logo: `${CDN}/68c7f2bc4026fdb7f21e4863_logo_wigiwama.avif`,
    quote:
      'Before, our influencer marketing work was split across too many tools. Excel, Notion, a separate affiliate platform, lots of manual emails for product orders and outreach... Now, all of that lives in one platform.',
    avatar: `${CDN}/68c7f201a35bb17feff13c40_img_regina_orange.avif`,
    name: 'Regina Kacajeva',
    role: 'Creator Partnerships Manager',
  },
  {
    logo: `${CDN}/6835b37a2bcf770c96efc606_logo_burga.avif`,
    quote:
      'I’ve worked with Modash for 3+ years across two companies. I can honestly say that it is one of the best tools for influencer discovery and analytics.',
    avatar: `${CDN}/6835b5043bd7736424b5dc9b_img_rugile.avif`,
    name: 'Rugile Paleviciute',
    role: 'Head of Global Partnerships',
  },
  {
    logo: `${CDN}/6835b80c4ae314b5e9e00e79_logo_regalrose.avif`,
    quote:
      'Before Modash, I tested platforms for months, none quite worked. Modash was a game changer, reliable discovery and live content tracking.',
    avatar: `${CDN}/6835b72de87970a6c16b6a89_img_ayme.avif`,
    name: 'Ayme Mendes Da Costa',
    role: 'Influencer Marketing Manager',
  },
  {
    logo: `${CDN}/6835b7bed20fc3d0c262fc0f_logo_nordvpn.png`,
    quote:
      'I’ve been working with Modash for over 3 years. Previously, I was at a beauty brand and when I started at NordVPN I told my team lead, "I\'m going to need Modash”.',
    avatar: `${CDN}/6835b7f328e78abe2cbdde7a_img_laura.avif`,
    name: 'Laura Garsdal',
    role: 'Influencer Marketing Manager',
  },
  {
    logo: `${CDN}/6835bda2f56382ae4bd7812f_logo_trendhim.png`,
    quote:
      'For large-scale micro-influencer campaigns, Modash is unmatched. Its huge data pool let us quickly find thousands of creators with the right audience.',
    avatar: `${CDN}/6835bdd8e07dcabf9d72ddf0_img_maris.avif`,
    name: 'Maris Niilus',
    role: 'Influencer Campaign Specialist',
  },
];

/** "From teams who used to..." — testimonial slider. */
export default function Testimonials() {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + ITEMS.length) % ITEMS.length);
  const next = () => setI((v) => (v + 1) % ITEMS.length);
  const t = ITEMS[i];

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-[760px] text-center">
          <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.75rem]">
            From teams who used to do a lot of unnecessary manual work
          </h2>
        </div>

        <div className="mx-auto max-w-[656px]">
          <div className="rounded-xl bg-pink-bg p-8 md:p-12">
            <img src={t.logo} alt="" className="h-8 w-auto object-contain" />
            <p className="mt-6 text-body-lg text-foreground">{t.quote}</p>
            <div className="mt-8 flex items-center gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                width={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <div className="text-body font-semibold text-foreground">{t.name}</div>
                <div className="text-eyebrow text-foreground/60">{t.role}</div>
              </div>
            </div>
          </div>

          {/* controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-foreground transition hover:bg-gray-50"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {ITEMS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    idx === i ? 'w-6 bg-ink' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-foreground transition hover:bg-gray-50"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
