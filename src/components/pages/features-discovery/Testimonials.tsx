import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '@/components/ui/Container';

const SLIDES = [
  {
    color: 'bg-purple',
    logo: 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/6994372c86903c2d65de0af0_logo_biotech_testimonial.avif',
    quote:
      "Using Modash, we've contracted 70+ influencers and 500+ nano influencers—and we're scaling internationally. We start every campaign with Discovery, and it makes it so quick to see the metrics we care about and how their content performs",
    avatar: 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/67d2b59322d368637ebdbcb2_img_Aliz%20Sipkai.avif',
    name: 'Alíz Sipkai',
    role: 'Influencer Marketing Manager',
  },
  {
    color: 'bg-pink',
    logo: 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/6835b37a2bcf770c96efc606_logo_burga.avif',
    quote:
      "I've worked with Modash for 3+ years across two companies. It's genuinely one of the best tools for influencer discovery and analytics. We ran a poll in our team—17 out of 23 voted Modash as their #1.",
    avatar: 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/674d80b31792e87970c0a70b_img_Rugile%20Paleviciute.avif',
    name: 'Rugile Paleviciute',
    role: 'Head of Global Partnerships',
  },
  {
    color: 'bg-sand',
    logo: 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/699438738d459b765567601e_logo_blast_testimonial.avif',
    quote:
      "I tested every influencer discovery tool I could find before buying Modash at FARFETCH to find fashion influencers. Compared to alternatives, it finds more creators, with better audience data, and it's easier to use. When I started at BLAST, the first thing I did was bring Modash across!",
    avatar: 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/66962f866ee62b779aac71be_img_ben%20williams.avif',
    name: 'Ben Williams',
    role: 'Senior Influencer Manager',
  },
];

/** Testimonial slider with colored cards. */
export default function Testimonials() {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setI((v) => (v + 1) % SLIDES.length);

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mb-6 flex flex-col items-center gap-4">
          <h2 className="text-center font-display text-h4 md:text-[2.5rem] leading-tight text-foreground">
            From folks who used to scroll for hours
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-foreground transition hover:bg-gray-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-foreground transition hover:bg-gray-50"
            >
              <ChevronRight className="h-4 w-4" />
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
                  <img src={s.logo} alt="" className="h-7 w-auto object-contain" />
                  <p className="mt-5 text-body-md md:text-body-lg text-ink">{s.quote}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <img src={s.avatar} alt="" className="h-12 w-12 rounded-full object-cover" />
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
