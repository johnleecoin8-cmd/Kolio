import { Check } from 'lucide-react';
import Container from '@/components/ui/Container';

const PILLS = [
  '20+ KOLs per campaign',
  'Entering new regional markets',
  'Scaling from 50 to 250+ KOLs',
  'Always-on community campaigns',
  'Audience quality over follower count',
  'Launching a token or mainnet',
];

/** Premium card with centered heading and qualifier chips. */
export default function FitSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="card-kit px-6 py-12 text-center md:px-12 md:py-16">
          <span className="eyebrow">Right fit</span>
          <h2 className="mt-4 display-lg font-display text-[1.75rem] leading-[1.15] md:text-[2.5rem] text-foreground">
            Is Kolio Discover right for you?
          </h2>
          <p className="mt-4 mx-auto max-w-[640px] text-body md:text-body-md text-foreground/70">
            A perfect fit if KOL marketing is a core growth channel for your protocol, exchange, or
            project and you need to find vetted crypto creators at scale.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {PILLS.map((t) => (
              <div
                key={t}
                className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-white px-4 py-2.5 text-body-sm font-medium text-foreground shadow-btn"
              >
                <Check className="h-[18px] w-[18px] shrink-0 text-brand" strokeWidth={3} />
                {t}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
