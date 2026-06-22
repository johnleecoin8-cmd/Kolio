import Container from '@/components/ui/Container';

const FORM = '/demo-confirmation';

const STEPS = [
  { n: '01', label: 'Book a demo', bg: 'bg-sand' },
  { n: '02', label: 'Share your web3 goals', bg: 'bg-orange' },
  { n: '03', label: 'Start building', bg: 'bg-pink' },
];

/** "Getting started is easy" — three overlapping numbered blocks + CTA. */
export default function GettingStarted() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <p className="eyebrow mb-3">Onboarding</p>
          <h2 className="display-lg font-display text-[1.75rem] text-foreground md:text-[2.1875rem]">
            Getting started is easy
          </h2>
        </div>

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
            className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-ink px-6 text-body font-semibold text-white shadow-btn transition hover:opacity-90"
          >
            Request a demo
          </a>
        </div>
      </Container>
    </section>
  );
}
