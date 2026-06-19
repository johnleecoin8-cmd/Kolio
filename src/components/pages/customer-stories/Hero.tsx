import { ReactNode } from 'react';
import Container from '@/components/ui/Container';

const STATS: { big: string; sub: ReactNode }[] = [
  { big: '3 years', sub: 'running campaigns on Kolio' },
  {
    big: '⏱ 2 hours ⏱',
    sub: (
      <>
        saved each day vetting KOLs
        <br />
        <em>before</em>
        <br />
        opening a single DM
      </>
    ),
  },
  { big: '100 collabs', sub: 'a month across DeFi & L2 niches' },
];

/** Customer story hero: title + intro on the left, brand wordmark right, then a 3-up stat row. */
export default function Hero() {
  return (
    <section className="bg-violet-light">
      <Container className="pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="font-display text-h3 leading-tight text-violet-dark md:text-h2">
              How Arbiscan Uses{' '}
              <span className="text-gradient-brand">Kolio</span> to Vet Crypto
              KOLs for 100+ Collabs a Month
            </h1>
            <p className="mt-6 max-w-xl text-body text-foreground/75">
              If you follow L2 Twitter, you&rsquo;ve seen an Arbiscan thread.
              The blockchain explorer has run KOL campaigns across X, YouTube,
              and Telegram since its token launch. We spoke to{' '}
              <strong className="font-semibold text-foreground">
                growth lead Laura Garsdal
              </strong>{' '}
              to learn how Kolio helps her 14-person team find, verify, and pay
              the right crypto creators &mdash; without trusting a single
              screenshot.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md rounded-2xl bg-gradient-brand p-10 text-center text-white shadow-nav">
              <p className="font-display text-h3 leading-none">Arbiscan</p>
              <p className="mt-3 text-body opacity-90">
                L2 block explorer &amp; analytics
              </p>
            </div>
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
