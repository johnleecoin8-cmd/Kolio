import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const ITEMS = [
  {
    icon: `${CDN}/6837096d4faddb80cd0aec3f_ic_find%20influencers.avif`,
    text: 'Search over 350 million profiles to find creators globally in any niche.',
  },
  {
    icon: `${CDN}/688b29d08ce52f8b63b911ee_ic_filter.png`,
    text: 'Filter by demographics, location, minimum engagement rate & another 20 parameters to reach your target audience.',
  },
  {
    icon: `${CDN}/688b29d047d224c3d89fcf9c_ic_details.avif`,
    text: 'Get contact details for the creators you want to outreach.',
  },
  {
    icon: `${CDN}/688b29d07197795808b0bb2d_ic_Engagement%20Rate.avif`,
    text: 'Check engagement rate, fake follower rate & audience demographics to make smarter decisions about your partners.',
  },
  {
    icon: `${CDN}/6842ca952d91864160ff1a1c_Fistbump.avif`,
    text: 'Compare insights across shortlisted creators to only work with the best for your brand.',
  },
  {
    icon: `${CDN}/6842caa03aef8b676a0fbbf3_AI.avif`,
    text: 'Chill while Modash auto-collects all campaign content for you.',
  },
];

/** 350M+ searchable — heading + 3x2 icon/text grid + CTA. */
export default function Searchable() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="mb-12 text-center font-display text-[2rem] leading-tight text-foreground md:text-[2.5rem]">
          350M+ creators all searchable
        </h2>

        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <div key={item.text} className="flex items-start gap-3">
              <img
                src={item.icon}
                alt=""
                width={24}
                height={24}
                loading="lazy"
                className="mt-0.5 h-6 w-6 shrink-0"
              />
              <p className="text-body-sm text-foreground/75">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3">
          <ButtonA
            href="https://marketer.modash.io/register/marketer"
            variant="primary"
          >
            Find creators for free
          </ButtonA>
          <p className="text-body-sm text-foreground/60">
            14-day free trial・No credit card required
          </p>
        </div>
      </Container>
    </section>
  );
}
