import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const ITEMS = [
  {
    icon: `${CDN}/6837096d4faddb80cd0aec3f_ic_find%20influencers.avif`,
    title: 'Find influencers',
    body: 'Search & filter 350M+ influencer profiles, or find influencers who already engaged with your brand. Solve influencer discovery at scale, in any niche.',
  },
  {
    icon: `${CDN}/68370b6b8dcc81bc9e714810_ic_analyze%20profiles.png`,
    title: 'Analyze profiles',
    body: 'Get data on audience demographics, locations, engagement rate, average views, past sponsors & more. Without reaching out to ask for screenshots.',
  },
  {
    icon: `${CDN}/68370b6b110cbb6fa07e64a9_ic_send%20emails.avif`,
    title: 'Send emails',
    body: 'Your creators & influencers are annoyed because they’re still waiting on payment for a campaign they finished a month ago.',
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

/** "Plus, everything else..." — centered heading + 3-col / 2-row icon grid. */
export default function PlusGrid() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="mx-auto max-w-[760px] text-center text-[1.75rem] font-semibold leading-[1.15] text-foreground md:text-[2.1875rem]">
          Plus, everything else you need to run a profitable influencer program
        </h2>

        <div className="mt-12 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {ITEMS.map((it) => (
            <div key={it.title}>
              <img src={it.icon} alt="" className="h-8 w-8" loading="lazy" />
              <h3 className="mt-4 text-body-md font-semibold text-foreground">
                {it.title}
              </h3>
              <p className="mt-2 text-body text-foreground/75">{it.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
