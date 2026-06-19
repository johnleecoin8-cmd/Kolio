import { Check } from 'lucide-react';
import Container from '@/components/ui/Container';

const ITEMS = [
  'Paying 50+ creators monthly',
  'Working with international creators',
  'Active in multiple countries',
  'Need proper tax compliance',
  'Running affiliate programs',
  'Want a simple tech stack',
];

/** Is Modash Payments right for you — soft panel with check pills. */
export default function RightForYou() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <div className="rounded-xl bg-background-soft px-6 py-14 md:px-16 md:py-20">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="font-display text-h4 text-ink md:text-h3">
              Is Modash Payments right for you?
            </h2>
            <p className="mt-4 text-body-md text-foreground/70">
              Perfect if you're paying multiple creators regularly and need to
              consolidate payment tools, automate invoicing, and handle
              international compliance without the risk of errors or delays.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {ITEMS.map((i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-pill bg-white px-4 py-2.5 text-body-sm font-medium text-ink shadow-sm"
              >
                <Check className="h-4 w-4 shrink-0 rounded-full bg-positive p-0.5 text-white" />
                {i}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
