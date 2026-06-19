import { useState } from 'react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

type Tab = {
  nav: string;
  heading: string;
  body: string;
  cta: string;
  href: string;
  video: string;
};

const TABS: Tab[] = [
  {
    nav: 'Manage',
    heading: 'stay in control',
    body: 'Keep creators, conversations, and contracts tidy in one home. Save hours with templates, automations, and syncing your Inbox. Solo or in a team, you always know what’s happening.',
    cta: 'Explore Manage',
    href: '/features/influencer-management',
    video:
      'https://dl.dropboxusercontent.com/scl/fi/tipu3bolv3humqsmzvrcq/WP-Modash-RTG-WP-GIF-4-1000x1000-Internal-3-1.mp4?rlkey=s1c7mirx0hpditxvk80ywj5uu&e=1&st=8hid4g39&dl=0',
  },
  {
    nav: 'Discover',
    heading: 'Find creators',
    body: 'Access 350M+ public profiles across Instagram, TikTok & YouTube. AI Search and smart filters surface your perfect matches with insights, so you only reach out to the right people.',
    cta: 'Explore Discover',
    href: '/features/influencer-discovery',
    video:
      'https://dl.dropboxusercontent.com/scl/fi/6uchxkwd01c4iew9uw7wz/Modash-AISearch-GIF.mp4?rlkey=q63u8gzwisy0tnrdwkx3w04hg&st=9shbj510&dl=0',
  },
  {
    nav: 'Track',
    heading: 'Track campaigns',
    body: 'Get automatic content collection without creators signing up. Measure performance from post to purchase, powered by our Shopify integration. All metrics (EMV, ROAS, CPM) in one dashboard.',
    cta: 'Explore Track',
    href: '/features/influencer-tracking',
    video:
      'https://dl.dropboxusercontent.com/scl/fi/fz9sybf7btl228djian83/WP-Modash-RTG-WP-GIF-3-1000x1000-Internal-4-1.mp4?rlkey=29diktyplgco2bdelem498ers&e=1&st=mws4md1o&dl=0',
  },
  {
    nav: 'Pay',
    heading: 'Pay Partners',
    body: 'Modash bundles all creator payouts into a single invoice. Pay out across 180+ countries and set your own commissions. Creators get paid fast, and they actually enjoy the experience.',
    cta: 'Explore Pay',
    href: '/influencer-payments',
    video:
      'https://dl.dropboxusercontent.com/scl/fi/31l27t4yem9mu4crm1970/WP-Modash-RTG-WP-GIF-5-1000x1000-Internal-2-1-1.mp4?rlkey=jn8apb70asvv6wczaekits6v1&e=1&st=525kabtw&dl=0',
  },
];

/** "Your whole influencer program" — tabbed feature carousel with looping product videos. */
export default function WorkflowTabs() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-[760px] text-center">
          <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
            Paid partnerships. Gifting. Affiliates.
          </p>
          <h2 className="mt-3 font-display text-[2rem] leading-[1.1] text-foreground md:text-[3rem]">
            Your whole influencer program, finally connected in one workflow
          </h2>
        </div>

        {/* tab nav */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {TABS.map((t, i) => (
            <button
              key={t.nav}
              onClick={() => setActive(i)}
              className={`h-11 rounded-pill px-5 text-body font-semibold transition ${
                i === active
                  ? 'bg-ink text-white'
                  : 'bg-ink/5 text-foreground/70 hover:bg-ink/10'
              }`}
            >
              {t.nav}
            </button>
          ))}
        </div>

        {/* tab panel */}
        <div className="overflow-hidden rounded-xl bg-pink-bg">
          <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:gap-12 md:p-12">
            <div className="flex flex-col items-start text-left">
              <h3 className="font-display text-h4 capitalize text-foreground md:text-[2.5rem]">
                {tab.heading}
              </h3>
              <p className="mt-5 max-w-[480px] text-body-md text-foreground/75">
                {tab.body}
              </p>
              <ButtonA href={tab.href} variant="primary" className="mt-8">
                {tab.cta}
              </ButtonA>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-nav">
              <video
                key={tab.video}
                src={tab.video}
                autoPlay
                loop
                muted
                playsInline
                className="aspect-square h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* product-tour CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-body-md text-foreground/75">
            See the workflow and value in minutes
          </p>
          <ButtonA href="/product-tour" variant="primary">
            Take product tour
          </ButtonA>
        </div>
      </Container>
    </section>
  );
}
