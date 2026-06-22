import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

const FILTERS = [
  { label: 'Niche', value: 'DeFi · L2 · Perps' },
  { label: 'Audience region', value: 'APAC' },
  { label: 'Real reach', value: '50K – 250K' },
  { label: 'Audience quality', value: '> 85% authentic' },
  { label: 'Platform', value: 'X · YouTube · TG' },
];

/** "Stack filters to find the perfect fit" — brand-neutral filter mockup left, copy right. */
export default function FilteringLayers() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <div className="card-kit p-6">
              <div className="mb-4 text-body font-semibold text-foreground">
                Filters
              </div>
              <div className="flex flex-col gap-3">
                {FILTERS.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center justify-between rounded-lg border border-black/5 bg-black/[0.02] px-4 py-3"
                  >
                    <span className="text-body-sm text-foreground/60">
                      {f.label}
                    </span>
                    <span className="text-body-sm font-medium text-foreground">
                      {f.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 inline-flex items-center gap-2 rounded-sm bg-gradient-brand px-4 py-2 text-body-sm font-semibold text-white">
                <span className="num-display">312</span> matching KOLs
              </div>
            </div>
          </div>
          <div>
            <span className="eyebrow">Narrow the field</span>
            <h2 className="mt-3 display-lg font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.75rem]">
              Stack filters to find the perfect fit
            </h2>
            <p className="mt-6 max-w-[480px] text-body text-foreground/70">
              Say your best-performing KOL covers DeFi for a US audience, and you
              want the same profile but reaching traders in Korea. Add a filter
              for audience region, niche, or verified reach, and Kolio narrows
              the list to KOLs who actually match — no guesswork, no inflated
              follower counts.
            </p>
            <div className="mt-8">
              <ButtonLink to="/demo-confirmation" variant="primary">
                Try for free
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
