import { useState, ReactNode } from 'react';
import Container from '@/components/ui/Container';

export type Pillar = { key: string; label: string; heading: string; body: string; visual: ReactNode };

/** Four-pillar tabbed product spine (Discover / Vet / Manage / Pay).
 *  Teaches the product mental model in one glance and frames the deal loop
 *  as one connected workflow. */
export default function PillarTabs({ eyebrow = 'One connected workflow', pillars }: { eyebrow?: string; pillars: Pillar[] }) {
  const [active, setActive] = useState(0);
  const p = pillars[active];
  return (
    <section className="py-16 md:py-24">
      <Container>
        <span className="eyebrow">{eyebrow}</span>
        <div className="mt-5 flex flex-wrap gap-2">
          {pillars.map((pl, i) => (
            <button
              key={pl.key}
              onClick={() => setActive(i)}
              className={`rounded-pill px-5 py-2.5 text-body-sm font-semibold transition ${i === active ? 'bg-brand text-white' : 'bg-gray-100 text-foreground/60 hover:bg-gray-200'}`}
            >
              {pl.label}
            </button>
          ))}
        </div>
        <div className="mt-8 grid items-center gap-8 rounded-xl border border-gray-200 bg-white p-6 md:grid-cols-2 md:p-10">
          <div>
            <h3 className="font-display text-h3 leading-tight text-foreground">{p.heading}</h3>
            <p className="mt-4 max-w-md text-body-md text-foreground/65">{p.body}</p>
          </div>
          <div className="min-h-[260px]">{p.visual}</div>
        </div>
      </Container>
    </section>
  );
}
