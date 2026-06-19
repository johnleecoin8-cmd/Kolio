import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const STEPS = [
  { num: '01', label: 'Book a call', bg: 'bg-sand' },
  { num: '02', label: 'Share your goals', bg: 'bg-orange' },
  { num: '03', label: 'Start building', bg: 'bg-pink' },
];

/** "Getting started is easy" — 3 numbered color steps + CTA. */
export default function GettingStarted() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="text-center font-display text-h3 leading-tight text-foreground md:text-h2">
          Getting started is easy
        </h2>

        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.num} className={`${s.bg} rounded-xl p-8`}>
              <p className="font-display text-h3 leading-none text-ink">{s.num}</p>
              <p className="mt-6 text-body font-semibold text-ink">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <ButtonA
            href="https://form.jotform.com/modash/intro-modash-api"
            variant="primary"
          >
            Request a demo
          </ButtonA>
        </div>
      </Container>
    </section>
  );
}
