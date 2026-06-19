import { useState, type ReactNode } from 'react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

type Tab = {
  title: string;
  copy: string;
  visual: ReactNode;
};

/** Brand-neutral KOL performance mockup. */
function PerformanceVisual() {
  const rows = [
    ['Engagement rate', '6.8%', 'w-[78%]'],
    ['Real follower rate', '91%', 'w-[91%]'],
    ['Sponsored post reach', '142K', 'w-[64%]'],
  ];
  return (
    <div className="w-full rounded-xl border border-black/10 bg-white p-6 shadow-nav md:p-8">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-brand" />
        <div>
          <div className="text-body font-semibold text-violet-dark">
            @defi.daily
          </div>
          <div className="text-body-sm text-violet-dark/60">
            218K followers · Trading & DeFi
          </div>
        </div>
        <span className="ml-auto rounded-full bg-violet-light px-3 py-1 text-body-sm font-semibold text-violet-dark">
          Verified
        </span>
      </div>
      <div className="mt-6 space-y-4">
        {rows.map(([label, value, width]) => (
          <div key={label}>
            <div className="flex items-center justify-between text-body-sm text-violet-dark/80">
              <span>{label}</span>
              <span className="font-semibold text-violet-dark">{value}</span>
            </div>
            <div className="mt-1.5 h-2 w-full rounded-full bg-black/5">
              <div className={`h-2 rounded-full bg-gradient-brand ${width}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Brand-neutral audience breakdown mockup. */
function AudienceVisual() {
  const geo = [
    ['United States', '34%', 'w-[34%]'],
    ['South Korea', '19%', 'w-[19%]'],
    ['Germany', '12%', 'w-[12%]'],
    ['Brazil', '9%', 'w-[9%]'],
  ];
  return (
    <div className="w-full rounded-xl border border-black/10 bg-white p-6 shadow-nav md:p-8">
      <div className="text-body font-semibold text-violet-dark">
        Audience breakdown
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {[
          ['Age 25–34', '46%'],
          ['Crypto-aware', '71%'],
          ['Reachable', '88%'],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-lg bg-violet-light p-3 text-center"
          >
            <div className="font-display text-xl text-violet-dark">{value}</div>
            <div className="mt-1 text-body-sm text-violet-dark/60">{label}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-3">
        {geo.map(([label, value, width]) => (
          <div key={label}>
            <div className="flex items-center justify-between text-body-sm text-violet-dark/80">
              <span>{label}</span>
              <span className="font-semibold text-violet-dark">{value}</span>
            </div>
            <div className="mt-1.5 h-2 w-full rounded-full bg-black/5">
              <div className={`h-2 rounded-full bg-gradient-brand ${width}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const TABS: Tab[] = [
  {
    title: 'KOL performance',
    copy: "Don't get duped by the shine of a big follower count. Check each KOL's real engagement rate, fake-follower rate, and sponsored-post performance before you commit budget.",
    visual: <PerformanceVisual />,
  },
  {
    title: 'Audience breakdown',
    copy: "No more guessing whether a KOL reaches actual crypto buyers. See audience age, location, reachability, and crypto-awareness so you know your campaign lands with the right people.",
    visual: <AudienceVisual />,
  },
];

/** Heading + tabbed brand-neutral product mockups with selectable tab cards. */
export default function PerformanceTabs() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-[2rem] leading-[1.1] text-violet-dark md:text-[2.5rem]">
            Check the performance, audience &amp; posts of any crypto KOL
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-body-md text-violet-dark/80">
            Forget running campaigns in the dark. See what's happening behind
            the profile and make smart, confident decisions about your KOL
            partnerships.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-8 md:mt-16 md:grid-cols-[minmax(0,360px)_1fr] md:gap-12">
          <div className="flex flex-col gap-4 rounded-xl bg-violet-bg p-6 md:p-8">
            {TABS.map((t, i) => {
              const isActive = active === i;
              return (
                <button
                  key={t.title}
                  onClick={() => setActive(i)}
                  className="text-left"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block h-2.5 w-2.5 rounded-full ${
                        isActive ? 'bg-violet' : 'bg-transparent'
                      }`}
                    />
                    <span
                      className={`text-body font-semibold ${
                        isActive ? 'text-violet-dark' : 'text-violet-dark/55'
                      }`}
                    >
                      {t.title}
                    </span>
                  </div>
                  {isActive && (
                    <p className="mt-3 text-body-sm text-violet-dark/80">
                      {t.copy}
                    </p>
                  )}
                </button>
              );
            })}
          </div>

          {TABS[active].visual}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <ButtonA href="/demo-confirmation" variant="accent">
              Find crypto KOLs
            </ButtonA>
            <ButtonA href="/demo-confirmation" variant="secondary">
              Book a demo
            </ButtonA>
          </div>
        </div>
        <p className="mt-4 text-center text-body-sm text-violet-dark/60">
          Free trial・No credit card required
        </p>
      </Container>
    </section>
  );
}
