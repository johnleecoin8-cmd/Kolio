import Container from '@/components/ui/Container';

const FORM =
  'https://form.jotform.com/modash/intro-modash-api?utm_source=api_raw&utm_campaign=web';

const CARDS = [
  {
    title: 'Custom analytics',
    body: 'Get latest data to build up-to-date dashboards. Analyze post performance, comments, and follower changes, as it happens, for immediate campaign insight.',
  },
  {
    title: 'Enrichment workflows',
    body: 'Augment your user profiles or CRM data. Connect social profiles to your database and keep track of follower lists, and stats up-to-date.',
  },
  {
    title: 'Competitive inteligence',
    body: "Monitor content and metadata in real-time. Pull recent posts, brand profiles, and analyze content strategies as they launch, not after it's trending.",
  },
];

/** "What will you build?" — three grey use-case cards + closing CTA. */
export default function WhatYouBuild() {
  return (
    <section className="bg-background py-12 md:py-20">
      <Container>
        <h2 className="text-center font-display text-[1.75rem] leading-[1.15] text-foreground md:text-[2.25rem]">
          What will you build?
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="rounded-lg bg-background-soft p-6 md:p-8"
            >
              <h3 className="text-body-md font-semibold text-foreground">
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
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-ink px-6 text-body font-semibold text-white shadow-btn transition hover:opacity-90"
          >
            Request a demo
          </a>
        </div>
      </Container>
    </section>
  );
}
