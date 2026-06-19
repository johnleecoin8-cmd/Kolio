import { useState } from 'react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const TABS = [
  {
    title: 'Influencer performance',
    copy: "Don't get duped by the shine of social. Check influencers' performance with metrics like engagement rate, fake follower rate, and paid post performance.",
    img: `${CDN}/668fbcff033ec771fc04c218_img_influencer%20discovery_tiktok%20(influencer%20performance).avif`,
  },
  {
    title: 'Influencer audience breakdown',
    copy: "No more guessing if influencers will reach your audience, know with certainty. Get demographic data like audience age, gender, location & reachability, so you're sure you'll reach potential customers.",
    img: `${CDN}/668fbd0c2d887504a5fba99f_img_influencer%20discovery_tiktok%20(influencer%20audience).avif`,
  },
];

/** Purple section: heading + tabbed product screenshot with selectable tab cards. */
export default function PerformanceTabs() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-violet-bg py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.5rem]">
            Check the performance, audience demographics &amp; posts of any
            creator
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-body-md text-foreground/75">
            Forget working in the dark. Instead, see what's happening
            behind-the-profile and make smart, confident decisions about your
            influencer partnerships.
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          <img
            src={TABS[active].img}
            alt={TABS[active].title}
            loading="lazy"
            className="mx-auto w-full max-w-[1136px] rounded-xl shadow-nav"
          />
        </div>

        <div className="mx-auto mt-8 grid max-w-[760px] grid-cols-1 gap-4 sm:grid-cols-2">
          {TABS.map((t, i) => {
            const isActive = active === i;
            return (
              <button
                key={t.title}
                onClick={() => setActive(i)}
                className={`rounded-lg border p-5 text-left transition ${
                  isActive
                    ? 'border-violet bg-white shadow-nav'
                    : 'border-transparent bg-white/40 hover:bg-white/70'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block h-2.5 w-2.5 rounded-full ${
                      isActive ? 'bg-violet' : 'bg-transparent'
                    }`}
                  />
                  <span className="text-body font-semibold text-foreground">
                    {t.title}
                  </span>
                </div>
                {isActive && (
                  <p className="mt-3 text-body-sm text-foreground/75">{t.copy}</p>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <ButtonA
              href="https://marketer.modash.io/register/marketer"
              variant="accent"
            >
              Find TikTok influencers
            </ButtonA>
            <ButtonA href="https://www.modash.io/book-demo" variant="secondary">
              Book a demo
            </ButtonA>
          </div>
        </div>
        <p className="mt-4 text-center text-body-sm text-foreground/60">
          14-day free trial・No credit card required
        </p>
      </Container>
    </section>
  );
}
