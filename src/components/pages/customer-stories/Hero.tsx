import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const NORDVPN_LOGO =
  'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/643648c4189a48249130cf0e_NordVPN_Logo-p-1080.webp';

const STATS = [
  { big: '3 years', sub: 'using Modash' },
  {
    big: '⏰ 2 hours ⏰',
    sub: 'saved each day vetting influencer profiles before reaching out',
  },
  { big: '100 collabs', sub: 'a month (new & recurring)' },
];

/** Customer story hero: title + intro on the left, brand logo right, then a 3-up stat row. */
export default function Hero() {
  return (
    <section className="bg-violet-light">
      <Container className="pt-12 pb-16 md:pt-20 md:pb-24">
        {/* CTA labels shown small above on real page */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="font-display text-h3 leading-tight text-foreground md:text-h2">
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
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonA href="#" variant="primary">
                Try for free
              </ButtonA>
              <ButtonA href="#" variant="secondary">
                Get a demo
              </ButtonA>
            </div>
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
              key={s.sub}
              className="flex flex-col items-center justify-start rounded-xl bg-violet-bg px-6 py-10 text-center"
            >
              <h4 className="font-display text-h4 text-foreground">{s.big}</h4>
              <p className="mt-4 text-body text-foreground/75">{s.sub}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
