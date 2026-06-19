import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

const STEPS = [
  { num: '01', label: 'Book a call', bg: 'bg-sand', arrow: true },
  { num: '02', label: 'Share your goals', bg: 'bg-orange', arrow: true },
  { num: '03', label: 'Start building', bg: 'bg-pink', arrow: false },
];

/** "Getting started is easy" — 3 interlocking numbered color steps + CTA. */
export default function GettingStarted() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="text-center text-[1.75rem] font-semibold leading-[1.15] text-foreground">
          Getting started is easy
        </h2>

        <div className="mt-12 grid gap-3 md:grid-cols-3 md:gap-0">
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className={`${s.bg} relative rounded-xl p-8 md:rounded-none md:py-10 md:pr-12 md:pl-12 ${
                i === 0 ? 'md:rounded-l-xl' : ''
              } ${i === STEPS.length - 1 ? 'md:rounded-r-xl' : ''}`}
              style={
                s.arrow
                  ? {
                      clipPath:
                        'polygon(0 0, calc(100% - 28px) 0, 100% 50%, calc(100% - 28px) 100%, 0 100%)',
                    }
                  : undefined
              }
            >
              <p className="font-display text-h3 leading-none text-ink">{s.num}</p>
              <p className="mt-6 text-body font-semibold text-ink">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <ButtonLink to="/demo-confirmation" variant="primary">
            Request a demo
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
