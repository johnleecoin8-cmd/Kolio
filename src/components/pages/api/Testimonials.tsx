import { useState } from 'react';
import Container from '@/components/ui/Container';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const ITEMS = [
  {
    company: 'Pietra',
    logo: `${CDN}/691457b863728c257bb812c0_logo_pietra.avif`,
    bg: 'bg-pink',
    quote:
      'The Modash API allows us to deliver actionable social insights and empowers our users to hire and manage creators that are already creating content within their niche.',
    name: 'Ronak Trivedi',
    role: 'Co-Founder & CEO at Pietra',
    avatar: `${CDN}/6842bde7a4d4bb9d928497a0_img_ronak.avif`,
  },
  {
    company: 'Clay',
    logo: `${CDN}/691457c3a8651e34ea72823a_logo_clay.avif`,
    bg: 'bg-purple-light',
    quote:
      "We're very excited to give our users access to such deep and detailed creator data through the Modash API. The creator economy is a vital part of going to market and partnering with Modash means our users can add yet another distribution channel to their own growth strategies.",
    name: 'Stefan Kollenberg',
    role: 'Technology Partnerships at Clay',
    avatar: `${CDN}/6842bdf4a923a68d024b721d_img_stefan.avif`,
  },
  {
    company: 'Health Labs Care',
    logo: `${CDN}/691457d0b38465599295903e_logo_health%20labs.avif`,
    bg: 'bg-violet-light',
    quote:
      "Modash is our essential partner in very modern, data-driven influencer marketing. Without Modash, it'd be impossible for us to build our CRM with the resources we have.",
    name: 'Aleksander Kopyt',
    role: 'Head of Affiliate Marketing, Health Labs Care',
    avatar: `${CDN}/6842be1c6db6bb365e340943_img_aleksander.avif`,
  },
];

/** "Why they love Modash" — horizontal scrolling testimonial cards + arrows. */
export default function Testimonials() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(ITEMS.length - 1, a + 1));

  return (
    <section className="overflow-hidden bg-background py-16 md:py-24">
      <Container>
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
              Testimonials
            </p>
            <h3 className="mt-2 text-[1.75rem] font-semibold leading-[1.15] text-foreground">
              Why they love Modash
            </h3>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-pill border border-gray-300 bg-white text-ink transition hover:bg-gray-50"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-pill border border-gray-300 bg-white text-ink transition hover:bg-gray-50"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>

      <Container>
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(-${active} * (50% + 0.75rem)))` }}
          >
            {ITEMS.map((t) => (
              <div
                key={t.company}
                className={`${t.bg} flex w-[85%] shrink-0 flex-col justify-between rounded-xl p-8 md:w-[calc(50%-0.75rem)] md:p-10`}
              >
                <div>
                  <img
                    src={t.logo}
                    alt={t.company}
                    loading="lazy"
                    className="h-6 w-auto object-contain"
                  />
                  <p className="mt-4 text-body-md font-medium text-ink">{t.quote}</p>
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-pill object-cover"
                  />
                  <div>
                    <p className="text-body font-semibold text-ink">{t.name}</p>
                    <p className="text-body-sm text-ink/60">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* progress bars */}
        <div className="mt-8 flex gap-3">
          {ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1 flex-1 rounded-pill transition-colors ${
                i === active ? 'bg-ink' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
