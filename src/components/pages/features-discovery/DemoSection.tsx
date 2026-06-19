import Container from '@/components/ui/Container';
import SectionHeading from './SectionHeading';

const STEPS = [
  { n: '01', title: 'Search', body: 'Describe your ideal KOL by niche, chain, and audience.' },
  { n: '02', title: 'Vet', body: 'Check real reach, audience quality, and past campaigns.' },
  { n: '03', title: 'Shortlist', body: 'Save the KOLs you trust into a campaign in one click.' },
  { n: '04', title: 'Reach out', body: 'Open the conversation the same day — no media-kit wait.' },
];

/** "See it in action" — centered heading + brand-neutral guided walkthrough panel. */
export default function DemoSection() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-[750px] text-center">
          <SectionHeading>See it in action</SectionHeading>
          <p className="mt-4 text-body md:text-body-md text-foreground/75">
            Here’s how Kolio Discover takes you from a blank search to a vetted KOL shortlist, so
            you can start outreach the same day instead of guessing on follower counts.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-xl bg-gradient-brand p-6 shadow-nav md:p-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-lg bg-white/95 p-5 text-left">
                <span className="font-display text-[1.5rem] leading-none text-gradient-brand">
                  {s.n}
                </span>
                <p className="mt-3 text-body font-semibold text-foreground">{s.title}</p>
                <p className="mt-1 text-body-sm text-foreground/70">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="/demo-confirmation"
              className="inline-flex items-center justify-center h-11 px-5 rounded-sm bg-ink text-white text-body font-semibold transition hover:opacity-90"
            >
              Walk through a live demo
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
