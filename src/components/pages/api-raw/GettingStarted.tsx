import Container from '@/components/ui/Container';

const FORM =
  'https://form.jotform.com/modash/intro-modash-api?utm_source=api_raw&utm_campaign=web';

const STEPS = [
  { n: '01', label: 'Book a call', bg: 'bg-sand' },
  { n: '02', label: 'Share your goals', bg: 'bg-orange' },
  { n: '03', label: 'Start building', bg: 'bg-pink' },
];

/** "Getting started is easy" — three overlapping numbered blocks + CTA. */
export default function GettingStarted() {
  return (
    <section className="bg-background py-12 md:py-20">
      <Container>
        <h2 className="text-center text-[1.75rem] font-semibold leading-[1.15] text-foreground md:text-[2.1875rem]">
          Getting started is easy
        </h2>

        <div className="mx-auto mt-10 grid max-w-[760px] grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className={`flex flex-col gap-6 rounded-xl p-6 md:p-8 ${s.bg} ${
                i > 0 ? 'sm:-ml-6' : ''
              }`}
              style={{ zIndex: i + 1 }}
            >
              <div className="font-display text-[2rem] leading-none text-ink md:text-[2.5rem]">
                {s.n}
              </div>
              <div className="text-body-md font-semibold text-ink">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
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
