import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const SLIDES = [
  {
    bg: 'bg-pink',
    logo: `${CDN}/698c76c88ee7dd8dec1e36ef_logo_hype%20maven.avif`,
    quote:
      "I've tried a LOT of tools for influencer marketing but none come close to Modash. I've been using it to run client influencer programs for the last 18 months, and they keep releasing new improvements and implementing feedback at lightspeed! It has accurate creator insights, great tracking features, and it kills all the manual back-and-forth between tabs and inboxes.",
    avatar: `${CDN}/698c7769acfc5a4bf01b2fdf_img_andreea%20moise.avif`,
    name: 'Andreea Moise',
    role: 'Influencer Marketing Consultant',
  },
  {
    bg: 'bg-coral',
    logo: `${CDN}/68c7f2bc4026fdb7f21e4863_logo_wigiwama.avif`,
    quote:
      "Before, our influencer marketing work was split across too many tools. Excel, Notion, a separate affiliate platform, lots of manual emails for product orders and outreach... Now, all of that lives in one platform. Honestly, it's such a relief to have everything in one place. We're into our second year in a row using Modash! We ran a poll in our team—17 out of 23 voted Modash as their #1.",
    avatar: `${CDN}/68c7ea4ddf9a2299a6b613a2_img_regina.avif`,
    name: 'Regina Kacajeva',
    role: 'Creator Partnerships Manager',
  },
  {
    bg: 'bg-purple',
    logo: `${CDN}/69930917bf7e07286d2202f2_logo_hungry_minds.avif`,
    quote:
      "I've been in influencer marketing for over 4 years and tried many different tools, but Modash is by far my number one. I use almost every feature in Modash and manage entire campaigns there. It's an all-in-one solution that has become absolutely essential for me and my team.",
    avatar: `${CDN}/68c7eb35fc99ad999340fe91_img_tatiana.avif`,
    name: 'Tatiana Zelen',
    role: 'Influencer Marketing Team Lead',
  },
];

/** Testimonials carousel — colored quote cards, arrows + progress bars. */
export default function Testimonials() {
  const [active, setActive] = useState(0);
  const total = SLIDES.length;
  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  return (
    <section className="overflow-hidden bg-background py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h3 className="font-sans text-h4 font-bold text-ink">
            From teams who used to struggle with 100s of invoices
          </h3>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-white transition hover:opacity-90"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-white transition hover:opacity-90"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>

      <div className="mx-auto mt-10 max-w-container px-4 sm:px-6">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {SLIDES.map((s) => (
              <div key={s.name} className="w-full shrink-0 px-1">
                <div
                  className={`flex min-h-[360px] flex-col rounded-xl ${s.bg} p-8 text-ink md:p-12`}
                >
                  <img
                    src={s.logo}
                    alt=""
                    className="h-8 w-auto self-start object-contain"
                  />
                  <p className="mt-6 flex-1 text-body-md leading-relaxed text-ink">
                    {s.quote}
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <img
                      src={s.avatar}
                      alt={s.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-body font-bold text-ink">{s.name}</p>
                      <p className="text-body-sm text-ink/70">{s.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* progress bars */}
        <div className="mt-8 grid grid-cols-3 gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1 rounded-full transition-colors ${
                i === active ? 'bg-ink' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
