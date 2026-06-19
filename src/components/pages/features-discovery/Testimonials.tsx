import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from './SectionHeading';

const SLIDES = [
  {
    color: 'bg-purple',
    company: 'Layer-2 Protocol',
    quote:
      "With Kolio we've run campaigns with 70+ crypto KOLs and 500+ nano voices across regions, and we're scaling into new markets. We start every launch in Discover — it makes it instant to see real reach and audience quality before we commit budget.",
    name: 'Alíz S.',
    role: 'Head of Growth',
  },
  {
    color: 'bg-pink',
    company: 'Exchange',
    quote:
      "I've used Kolio across two crypto projects. It's genuinely the best tool for finding and vetting KOLs. We polled the team on KOL discovery tools — 17 of 23 voted Kolio #1. The audience-quality data alone saved us from funding bot-heavy accounts.",
    name: 'Rugile P.',
    role: 'Head of Global Partnerships',
  },
  {
    color: 'bg-sand',
    company: 'DeFi App',
    quote:
      'I tested every KOL discovery tool I could find before standardizing on Kolio. Compared to the alternatives it surfaces more relevant crypto creators, with far better audience data, and it’s easier to use. First thing I did at my new project was bring Kolio across.',
    name: 'Ben W.',
    role: 'Senior KOL Manager',
  },
];

/** Testimonial slider with colored cards (brand-neutral, text-based). */
export default function Testimonials() {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setI((v) => (v + 1) % SLIDES.length);

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mb-6 flex flex-col items-center gap-4">
          <SectionHeading className="text-center">
            From teams who used to scroll Crypto Twitter for hours
          </SectionHeading>
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-sm bg-ink text-white transition hover:opacity-90"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-sm bg-ink text-white transition hover:opacity-90"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${i * 100}%)` }}
          >
            {SLIDES.map((s) => (
              <div key={s.name} className="w-full shrink-0 px-2">
                <div className={`mx-auto max-w-[800px] rounded-xl ${s.color} p-8 md:p-10 text-ink`}>
                  <span className="inline-flex rounded-pill bg-ink/10 px-3 py-1 text-body-sm font-semibold uppercase tracking-wide text-ink">
                    {s.company}
                  </span>
                  <p className="mt-5 text-body-md md:text-body-lg text-ink">{s.quote}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink/15 font-display text-[1.1rem] text-ink">
                      {s.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-body font-semibold text-ink">{s.name}</p>
                      <p className="text-body-sm text-ink/70">{s.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
