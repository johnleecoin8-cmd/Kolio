import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import { cn } from '@/lib/cn';

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

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-[760px] text-center">
          <p className="text-body-sm font-bold text-foreground/50">
            Testimonials
          </p>
          <h2 className="mt-3 font-sans text-[2rem] font-extrabold leading-[1.1] text-foreground md:text-[2.5rem]">
            From teams who used to do a lot of unnecessary manual work
          </h2>

          {/* square arrow controls */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-sm bg-ink text-white transition hover:opacity-90"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-sm bg-ink text-white transition hover:opacity-90"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* two visible cards (alternating warm tints) */}
        <div className="grid gap-6 md:grid-cols-2">
          {[0, 1].map((off) => {
            const item = ITEMS[(i + off) % ITEMS.length];
            const tint = off === 0 ? 'bg-orange-light' : 'bg-pink-light';
            return (
              <div key={off} className={cn('flex flex-col rounded-xl p-8 md:p-10', tint)}>
                <img src={item.logo} alt="" className="h-7 w-auto self-start object-contain" />
                <p className="mt-6 text-body-md text-foreground">{item.quote}</p>
                <div className="mt-auto flex items-center gap-4 pt-10">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    width={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-body font-semibold text-foreground">{item.name}</div>
                    <div className="text-body-sm text-foreground/60">{item.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
