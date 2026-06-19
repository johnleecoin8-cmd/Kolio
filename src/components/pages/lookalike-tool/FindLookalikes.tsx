import { useState } from 'react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const TABS = [
  {
    key: 'similar',
    label: 'Find similar profiles',
    body: 'Type in an @handle, and instantly get a list of related profiles. Apply filters to narrow the list down further.',
    img: `${CDN}/66b1fe5bbbeeb6c3ee07d54e_img_lookalikes_find%20similar%20profiles.avif`,
  },
  {
    key: 'audience',
    label: 'Audience lookalikes',
    body: 'Find influencers who reach similar audience locations and demographics.',
    img: `${CDN}/66b1f40329c9d02439a8c6a5_img_lookalikes_audience%20lookalikes.avif`,
  },
  {
    key: 'influencer',
    label: 'Influencer lookalikes',
    body: 'Find influencers who create content on similar topics.',
    img: `${CDN}/66b1f403fa183c68a0af1aff_img_lookalikes_influencer%20lookalikes.avif`,
  },
];

/** "Find influencer lookalikes for any profile" — heading, body, big screenshot
 *  with a left card listing switchable lookalike tabs. */
export default function FindLookalikes() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[840px] text-center">
          <h2 className="font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.75rem]">
            Find influencer lookalikes for any profile
          </h2>
          <p className="mx-auto mt-8 max-w-[760px] text-body-md text-foreground/75">
            Modash's influencer database lists 250M+ creator profiles. Search the
            username of any profile, and get suggestions for influencers who post
            about similar topics, or have similar audience demographics. Try
            starting with your top performing ambassadors!
          </p>
        </div>
      </Container>

      {/* screenshot with overlay card */}
      <div className="relative mx-auto mt-12 w-full max-w-[1200px] px-4 sm:px-6 md:mt-16">
        <div className="relative">
          <img
            src={tab.img}
            alt="Modash lookalikes search results"
            className="w-full rounded-xl"
          />

          {/* tab card — bottom-left overlay on desktop, stacked below on mobile */}
          <div className="mt-6 w-full rounded-lg border border-black/5 bg-white p-6 shadow-nav md:absolute md:bottom-8 md:left-0 md:mt-0 md:w-[320px]">
            {TABS.map((t, i) => {
              const on = i === active;
              return (
                <button
                  key={t.key}
                  onClick={() => setActive(i)}
                  className={`block w-full text-left transition ${
                    i > 0 ? 'mt-5' : ''
                  }`}
                >
                  <span
                    className={`text-body-md font-semibold ${
                      on ? 'text-violet-dark' : 'text-foreground'
                    }`}
                  >
                    {t.label}
                  </span>
                  {on && (
                    <span className="mt-2 block text-body-sm text-foreground/70">
                      {t.body}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <Container>
        <div className="mt-12 flex flex-col items-center gap-4 md:mt-16">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <ButtonA
              href="https://marketer.modash.io/register/marketer"
              variant="accent"
            >
              Find creators for free
            </ButtonA>
            <ButtonA href="https://www.modash.io/book-demo" variant="secondary">
              Book a demo
            </ButtonA>
          </div>
          <p className="text-body-sm text-foreground/60">
            14-day free trial・No credit card required
          </p>
        </div>
      </Container>
    </section>
  );
}
