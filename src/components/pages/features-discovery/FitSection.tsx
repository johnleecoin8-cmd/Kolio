import { Check } from 'lucide-react';
import Container from '@/components/ui/Container';

const PILLS = [
  '20+ creators per month',
  'Entering new markets',
  'Going from 50 to 250+ creators',
  'Running always on campaigns',
  'Prioritize audience fit over follower count',
  'Launching gifting campaigns',
];

/** Soft gray rounded card with centered heading and check pills. */
export default function FitSection() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="rounded-xl bg-background-soft px-6 py-12 text-center md:px-12 md:py-16">
          <h2 className="font-display text-h4 md:text-[2.5rem] leading-tight text-foreground">
            Is Modash Discover right for you?
          </h2>
          <p className="mt-4 mx-auto max-w-[640px] text-body md:text-body-md text-foreground/75">
            Perfect fit if you're managing creator partnerships as a core channel and need to find
            more creators at scale.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {PILLS.map((t) => (
              <div
                key={t}
                className="inline-flex items-center gap-2 rounded-pill bg-white px-4 py-2.5 text-body-sm font-medium text-foreground shadow-btn"
              >
                <Check className="h-[18px] w-[18px] shrink-0 text-positive" strokeWidth={3} />
                {t}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
