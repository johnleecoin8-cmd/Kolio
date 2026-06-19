import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const SLIDES = [
  {
    bg: 'bg-pink',
    logo: `${CDN}/699d5911d23e750070d51f7c_logo_regalrose_testimonials.avif`,
    logoAlt: 'Regalrose',
    quote:
      'Before finding Modash, I spent months extensively testing platforms, and they all had issues. Finding Modash was brilliant because it not only covers influencer discovery, but it can collect & track our influencers’ live content reliably. Without having to ask them all to sign up to anything.',
    avatar: `${CDN}/699d5953ad7d63e1ee7e1543_img_ayme.avif`,
    name: 'Ayme Mendes Da Costa',
    role: 'Influencer Marketing Manager',
  },
  {
    bg: 'bg-coral',
    logo: `${CDN}/699d591131facabf16f7d857_logo_deeper_testimonials.avif`,
    logoAlt: 'Deeper',
    quote:
      'Modash helps us track all videos, posts, and Stories from hundreds of ambassadors worldwide, saving us a ton of time and effort. Modash also gives us campaign Reach, Impressions, and Engagement that we couldn’t easily access before (without reaching out to ask every time).',
    avatar: `${CDN}/65ddf90d9cf1c9efcde3b5bb_img_Valeriia%20Chemerys.avif`,
    name: 'Valeriia Chemerys',
    role: 'Head of Media Partnerships',
  },
  {
    bg: 'bg-violet',
    logo: `${CDN}/699d59114138e44b222db2da_logo_loomwell_testimonials.avif`,
    logoAlt: 'Loomwell',
    quote:
      'I love the organization of Modash; it has resolved a lot of our issues. We use Modash for our collaborations department, and it provides us with more insight into the projects we take on. The Creator search feature gives us more insight, and having all of the content in one location with the content tracking feature has been really useful.',
    avatar: `${CDN}/699d5953ad7d63e1ee7e1543_img_ayme.avif`,
    name: 'Brinkley Gibson',
    role: 'Social Media Manager',
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
            From teams who used to chase screenshots
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
                  <img
                    src={s.logo}
                    alt={s.logoAlt}
                    loading="eager"
                    className="h-7 w-auto self-start object-contain"
                  />
                  <p className="mt-6 text-body-md text-ink/90">{s.quote}</p>
                  <div className="mt-8 flex items-center gap-3">
                    <img
                      src={s.avatar}
                      alt={s.name}
                      loading="eager"
                      className="h-11 w-11 rounded-full object-cover"
                    />
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
