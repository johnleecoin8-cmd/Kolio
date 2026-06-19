import { ReactNode } from 'react';
import Container from '@/components/ui/Container';

const NORDVPN_LOGO =
  'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/643648c4189a48249130cf0e_NordVPN_Logo-p-1080.webp';

const STATS: { big: string; sub: ReactNode }[] = [
  { big: '3 years', sub: 'using Modash' },
  {
    big: '⏰ 2 hours ⏰',
    sub: (
      <>
        saved each day vetting influencer profiles
        <br />
        <em>before</em>
        <br />
        reaching out
      </>
    ),
  },
  { big: '100 collabs', sub: 'a month (new & recurring)' },
];

/** Customer story hero: title + intro on the left, brand logo right, then a 3-up stat row. */
export default function Hero() {
  return (
    <section className="bg-violet-light">
      <Container className="pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="font-display text-h3 leading-tight text-violet-dark md:text-h2">
              How NordVPN Uses Modash to Find YouTubers for 100+ Collabs Per
              Month
            </h1>
            <p className="mt-6 max-w-xl text-body text-foreground/75">
              If you haven&rsquo;t seen a NordVPN integration on YouTube,
              you&rsquo;re probably not on YouTube enough. Established in 2012,
              cybersecurity software NordVPN has been on the influencer beat for
              over 4 years. We spoke to{' '}
              <strong className="font-semibold text-foreground">
                influencer marketing manager Laura Garsdal
              </strong>{' '}
              to learn how Modash supports the 14-strong team with their
              awareness &amp; acquisition efforts.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={NORDVPN_LOGO}
              alt="NordVPN"
              className="w-full max-w-md"
              loading="lazy"
            />
          </div>
        </div>

        {/* Stat row */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
          {STATS.map((s) => (
            <div
              key={s.big}
              className="flex flex-col items-center justify-center rounded-xl bg-violet-bg px-6 py-12 text-center"
            >
              <p className="font-display text-h3 leading-none text-violet-dark">
                {s.big}
              </p>
              <p className="mt-4 text-body text-foreground/75">{s.sub}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
