import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const ITEMS = [
  {
    icon: `${CDN}/6837096d4faddb80cd0aec3f_ic_find%20influencers.avif`,
    title: 'Find influencers',
    body: 'Search & filter 380M+ influencer profiles, or find influencers who already engaged with your brand. Solve influencer discovery at scale, in any niche.',
  },
  {
    icon: `${CDN}/68370b6b8dcc81bc9e714810_ic_analyze%20profiles.png`,
    title: 'Analyze profiles',
    body: 'Get data on audience demographics, locations, engagement rate, average views, past sponsors & more. Without reaching out to ask for screenshots.',
  },
  {
    icon: `${CDN}/68370b6b110cbb6fa07e64a9_ic_send%20emails.avif`,
    title: 'Send emails',
    body: 'Find email addresses, then send bulk outreach that feels 1:1 at scale. Onboard creators, send products, share updates, and more.',
  },
  {
    icon: `${CDN}/68370b6a349bf837c4481e3b_ic_manage%20relationships.avif`,
    title: 'Manage relationships',
    body: 'Create unlimited lists to keep track of your influencers. Add notes for personalization (or for your team), organize documents (like contracts/briefs), and more.',
  },
  {
    icon: `${CDN}/68370b6b465c1fff3f547980_ic_collect%20content.png`,
    title: 'Collect content',
    body: 'Automatically track live content, and save it to a dashboard. Even Stories. Without asking influencers to sign up.',
  },
  {
    icon: `${CDN}/68370b6b9eae2d6b80f9cac2_ic_measure%20results.avif`,
    title: 'Measure results',
    body: 'Track metrics like total content, views, EMV, engagements, link clicks, promo code redemptions, and more. Per campaign, and per influencer.',
  },
];

/** 3x2 grid of supporting feature blurbs. */
export default function EverythingElse() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <h2 className="mx-auto max-w-[760px] text-center font-display text-h4 leading-tight text-foreground">
          Plus, everything else you need to run a profitable influencer program
        </h2>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 md:mt-16 md:grid-cols-3">
          {ITEMS.map((it) => (
            <div key={it.title} className="flex flex-col gap-3">
              <img src={it.icon} width={24} alt="" className="h-6 w-6" />
              <div className="text-body font-semibold text-foreground">
                {it.title}
              </div>
              <p className="text-body-sm text-foreground/60">{it.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
