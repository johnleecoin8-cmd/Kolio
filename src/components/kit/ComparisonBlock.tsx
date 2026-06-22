import { X, Check } from 'lucide-react';
import Container from '@/components/ui/Container';

export type CompareRow = { old: string; better: string };

/** Old-way vs Kolio-way two-column comparison. Visitor self-diagnoses the pain
 *  in their own words before the pitch. */
export default function ComparisonBlock({
  heading = 'The old way burns budget. The Kolio way proves it.',
  oldLabel = 'Running crypto KOLs the old way',
  newLabel = 'Running them on Kolio',
  rows,
}: { heading?: string; oldLabel?: string; newLabel?: string; rows: CompareRow[] }) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <h2 className="mx-auto max-w-3xl text-center display-lg text-h3 text-foreground">{heading}</h2>
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
          {/* old way */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-7">
            <div className="mb-5 text-body font-semibold text-foreground/55">{oldLabel}</div>
            <ul className="space-y-4">
              {rows.map((r) => (
                <li key={r.old} className="flex items-start gap-3 text-body text-foreground/70">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-pill bg-gray-200"><X className="h-3 w-3 text-gray-600" /></span>
                  <span>{r.old}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* kolio way */}
          <div className="rounded-xl border border-brand/20 bg-coral-bg/60 p-7 glow-brand">
            <div className="mb-5 flex items-center gap-2 text-body font-semibold text-brand"><span className="text-gradient-brand font-display">Kolio</span> {newLabel}</div>
            <ul className="space-y-4">
              {rows.map((r) => (
                <li key={r.better} className="flex items-start gap-3 text-body font-medium text-foreground">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-pill bg-brand"><Check className="h-3 w-3 text-white" /></span>
                  <span>{r.better}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
