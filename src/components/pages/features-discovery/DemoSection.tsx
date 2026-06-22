import Container from '@/components/ui/Container';

const STEPS = [
  { n: '01', title: 'Search', body: 'Describe your ideal KOL by niche, chain, and audience.' },
  { n: '02', title: 'Vet', body: 'Check real reach, audience quality, and past campaigns.' },
  { n: '03', title: 'Shortlist', body: 'Save the KOLs you trust into a campaign in one click.' },
  { n: '04', title: 'Reach out', body: 'Open the conversation the same day — no media-kit wait.' },
];

/** Dark on-chain terminal punctuation: the discovery walkthrough as a focal moment. */
export default function DemoSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="surface-onchain overflow-hidden rounded-2xl p-8 md:p-12">
          <div className="mx-auto max-w-[750px] text-center">
            <span className="eyebrow text-coral">See it in action</span>
            <h2 className="mt-4 display-lg font-display text-[1.75rem] leading-[1.12] md:text-[2.5rem] text-white">
              From a blank search to a vetted shortlist
            </h2>
            <p className="mt-4 text-body md:text-body-md text-white/70">
              Here’s how Kolio Discover takes you from a blank search to a vetted KOL shortlist, so
              you can start outreach the same day instead of guessing on follower counts.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className={`rounded-xl border border-white/10 bg-white/[0.04] p-5 text-left ${i === 0 ? 'glow-brand' : ''}`}
              >
                <span className="num-display font-mono-tnum text-[1.5rem] leading-none text-gradient-brand">
                  {s.n}
                </span>
                <p className="mt-3 text-body font-semibold text-white">{s.title}</p>
                <p className="mt-1 text-body-sm text-white/60">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/demo-confirmation"
              className="inline-flex items-center justify-center h-11 px-5 rounded-sm bg-brand text-white text-body font-semibold transition hover:opacity-90"
            >
              Walk through a live demo
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
