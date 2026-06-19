import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const TESTIMONIALS = [
  {
    logo: `${CDN}/6835b37a2bcf770c96efc606_logo_burga.avif`,
    quote:
      'I’ve worked with Modash for 3+ years across two companies. I can honestly say that it is one of the best tools for influencer discovery and analytics.',
    avatar: `${CDN}/6835b5043bd7736424b5dc9b_img_rugile.avif`,
    name: 'Rugile Paleviciute',
    role: 'Head of Global Partnerships',
    bg: 'bg-pink-bg',
  },
  {
    logo: `${CDN}/6835b80c4ae314b5e9e00e79_logo_regalrose.avif`,
    quote:
      'Before Modash, I tested platforms for months, none quite worked. Modash was a game changer, reliable discovery and live content tracking.',
    avatar: `${CDN}/6835b72de87970a6c16b6a89_img_ayme.avif`,
    name: 'Ayme Mendes Da Costa',
    role: 'Influencer Marketing Manager',
    bg: 'bg-orange-bg',
  },
  {
    logo: `${CDN}/6835b7bed20fc3d0c262fc0f_logo_nordvpn.png`,
    quote:
      'I’ve been working with Modash for over 3 years. Previously, I was at a beauty brand and when I started at NordVPN I told my team lead, "I\'m going to need Modash”.',
    avatar: `${CDN}/6835b7f328e78abe2cbdde7a_img_laura.avif`,
    name: 'Laura Garsdal',
    role: 'Influencer Marketing Manager',
    bg: 'bg-violet-bg',
  },
  {
    logo: `${CDN}/6835bda2f56382ae4bd7812f_logo_trendhim.png`,
    quote:
      'For large-scale micro-influencer campaigns, Modash is unmatched. Its huge data pool let us quickly find thousands of creators with the right audience.',
    avatar: `${CDN}/6835bdd8e07dcabf9d72ddf0_img_maris.avif`,
    name: 'Maris Niilus',
    role: 'Influencer Campaign Specialist',
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
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/40">
              Testimonials
            </p>
            <h2 className="mt-3 text-[2.1875rem] font-semibold leading-[1.15] text-foreground">
              What Modash customers say
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
              <img src={t.logo} alt="" className="h-7 w-auto self-start" loading="lazy" />
              <p className="mt-8 text-body-md leading-relaxed text-foreground">
                {t.quote}
              </p>
              <div className="mt-auto flex items-center gap-3 pt-12">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
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
