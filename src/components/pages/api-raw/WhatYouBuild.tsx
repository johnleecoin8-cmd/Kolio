import Container from '@/components/ui/Container';

const FORM = '/demo-confirmation';

const CARDS = [
  {
    tag: 'attribution',
    title: 'Campaign analytics & attribution',
    body: 'Build live dashboards for every funded campaign. Track post performance, sentiment, and follower changes as they happen, then tie reach back to on-chain conversions.',
  },
  {
    tag: 'vetting',
    title: 'KOL vetting & enrichment',
    body: 'Enrich your KOL CRM with proof-based reach and audience quality. Connect crypto handles to your database and keep follower lists and stats fresh before you sign a deal.',
  },
  {
    tag: 'intelligence',
    title: 'Market & competitor intelligence',
    body: 'Monitor KOL content and project mentions in real time. Pull recent posts, cashtags, and narrative shifts as they launch — not after a token is already trending.',
  },
];

/** "What will you build?" — three premium use-case cards + closing CTA. */
export default function WhatYouBuild() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <p className="eyebrow mb-3">Use cases</p>
          <h2 className="display-lg font-display text-[1.75rem] text-foreground md:text-[2.1875rem]">
            What will you build?
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((c) => (
            <div key={c.title} className="card-kit p-6 md:p-8">
              <span className="chip chip-brand font-mono-tnum">{c.tag}</span>
              <h3 className="mt-4 text-body-md font-semibold text-foreground">
                {c.title}
              </h3>
              <p className="mt-3 text-body text-foreground/60">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-5 text-center">
          <p className="text-body-md text-foreground/80">
            Can&apos;t find your use-case? Let&apos;s discuss!
          </p>
          <a
            href={FORM}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-ink px-6 text-body font-semibold text-white shadow-btn transition hover:opacity-90"
          >
            Request a demo
          </a>
        </div>
      </Container>
    </section>
  );
}
