import Container from '@/components/ui/Container';

export type Quote = {
  quote: string;
  name: string;
  role: string;
  brand: string;          // brand name (rendered as a typographic wordmark, no external logo)
  metrics: { value: string; label: string }[]; // 2-4 hard outcome metrics
};

/** Quantified testimonial: named exec + brand wordmark + hard metrics.
 *  Replaces the fake-looking coral cards with earned, evidence-based proof. */
export function TestimonialCard({ q }: { q: Quote }) {
  const initials = q.name.split(' ').map((p) => p[0]).join('').slice(0, 2).toUpperCase();
  return (
    <figure className="card-kit flex h-full flex-col p-7">
      <div className="flex items-center justify-between">
        <span className="font-display text-body-lg tracking-tight text-foreground/80">{q.brand}</span>
        <span className="chip chip-onchain">Verified outcome</span>
      </div>
      <blockquote className="mt-5 flex-1 text-body-md leading-snug text-foreground">“{q.quote}”</blockquote>
      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-gray-200 pt-5 sm:grid-cols-4">
        {q.metrics.map((m) => (
          <div key={m.label}>
            <div className="num-display text-body-lg text-brand">{m.value}</div>
            <div className="text-eyebrow text-foreground/50">{m.label}</div>
          </div>
        ))}
      </div>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-pill bg-gradient-brand text-body-sm font-bold text-white">{initials}</span>
        <span className="leading-tight">
          <span className="block text-body-sm font-semibold text-foreground">{q.name}</span>
          <span className="block text-eyebrow text-foreground/55">{q.role}, {q.brand}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials({ heading = 'Outcomes, not adjectives', quotes }: { heading?: string; quotes: Quote[] }) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <span className="eyebrow">Proof</span>
        <h2 className="mt-3 display-lg text-h3 text-foreground">{heading}</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {quotes.map((q) => <TestimonialCard key={q.name} q={q} />)}
        </div>
      </Container>
    </section>
  );
}
