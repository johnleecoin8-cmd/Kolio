import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

type T = {
  logo: string;
  quote: string;
  avatar: string;
  name: string;
  role: string;
  bg: string;
};

const ITEMS: T[] = [
  {
    logo: `${CDN}/698c76c88ee7dd8dec1e36ef_logo_hype%20maven.avif`,
    quote:
      "I've tried a LOT of tools for influencer marketing but none come close to Modash. I've been using it to run client influencer programs for the last 18 months, and they keep releasing new improvements and implementing feedback at lightspeed! It has accurate creator insights, great tracking features, and it kills all the manual back-and-forth between tabs and inboxes.",
    avatar: `${CDN}/698c7769acfc5a4bf01b2fdf_img_andreea%20moise.avif`,
    name: 'Andreea Moise',
    role: 'Influencer Marketing Consultant',
    bg: 'bg-pink',
  },
  {
    logo: `${CDN}/68c7f2bc4026fdb7f21e4863_logo_wigiwama.avif`,
    quote:
      "Before, our influencer marketing work was split across too many tools. Excel, Notion, a separate affiliate platform, lots of manual emails for product orders and outreach... Now, all of that lives in one platform. Honestly, it's such a relief to have everything in one place. We're into our second year in a row using Modash!",
    avatar: `${CDN}/68c7ea4ddf9a2299a6b613a2_img_regina.avif`,
    name: 'Regina Kacajeva',
    role: 'Creator Partnerships Manager',
    bg: 'bg-coral',
  },
  {
    logo: `${CDN}/69930917bf7e07286d2202f2_logo_hungry_minds.avif`,
    quote:
      "I've been in influencer marketing for over 4 years and tried many different tools, but Modash is by far my number one. I use almost every feature in Modash and manage entire campaigns there. It's an all-in-one solution that has become absolutely essential for me and my team.",
    avatar: `${CDN}/68c7eb35fc99ad999340fe91_img_tatiana.avif`,
    name: 'Tatiana Zelen',
    role: 'Influencer Marketing Team Lead',
    bg: 'bg-violet',
  },
];

/** "From teams who used to live in spreadsheets" — testimonial carousel. */
export default function Testimonials() {
  const [active, setActive] = useState(0);
  const count = ITEMS.length;
  const prev = () => setActive((a) => (a - 1 + count) % count);
  const next = () => setActive((a) => (a + 1) % count);

  return (
    <section className="overflow-hidden bg-background py-16 md:py-24">
      <Container>
        <div className="text-center">
          <h2 className="font-display text-h4 leading-tight text-ink md:text-h3">
            From teams who used to live in spreadsheets
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
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
          className="flex gap-5 px-4 transition-transform duration-500 ease-out sm:px-6"
          style={{ transform: `translateX(calc(50% - ${active * 33.4 + 16.7}% ))` }}
        >
          {ITEMS.map((t) => (
            <div
              key={t.name}
              className={`flex w-[88vw] max-w-[760px] shrink-0 flex-col justify-between rounded-xl p-8 md:w-[760px] md:p-12 ${t.bg}`}
            >
              <div>
                <img src={t.logo} alt="" className="h-9 w-auto" />
                <p className="mt-6 text-body-md leading-relaxed text-ink">
                  {t.quote}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-body font-semibold text-ink">{t.name}</p>
                  <p className="text-body-sm text-ink/70">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* progress bars */}
      <Container>
        <div className="mt-8 grid grid-cols-3 gap-3">
          {ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1 rounded-pill transition ${
                i === active ? 'bg-ink' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
