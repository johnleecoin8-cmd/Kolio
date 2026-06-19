import { Check as CheckIcon } from 'lucide-react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const KOL = [
  'Crypto niche (DeFi, L1/L2, NFTs, gaming)',
  'Average views & watch-through',
  'Engagement rate',
  'Bio & on-chain keywords',
  'Reach growth over time',
  'Transcript & ticker mentions',
];

const AUDIENCE = [
  'Locations (city/country)',
  'Demographics (age/gender)',
  'Audience quality & bot share',
];

function Check({ children }: { children: string }) {
  return (
    <li className="flex items-center gap-3 border-b border-black/10 py-3 text-body text-foreground">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-white">
        <CheckIcon className="h-3 w-3" strokeWidth={3} />
      </span>
      {children}
    </li>
  );
}

/** Search & filter — brand-neutral filter-panel mockup left, two checklists + CTA right. */
export default function SearchFilter() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* filter-panel mockup */}
          <div className="flex items-center justify-center rounded-xl bg-background-soft p-6 sm:p-10">
            <div className="w-full max-w-[460px] rounded-lg border border-black/10 bg-white p-5 shadow-sm">
              <p className="text-body-sm font-semibold uppercase tracking-wide text-foreground/50">
                Filters
              </p>
              <div className="mt-4 space-y-3">
                {[
                  { label: 'Niche', value: 'DeFi · Trading' },
                  { label: 'Min. avg. views', value: '50,000' },
                  { label: 'Audience country', value: 'United States' },
                  { label: 'Audience quality', value: '≥ 85%' },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center justify-between rounded-md border border-black/10 bg-background-soft px-3 py-2.5"
                  >
                    <span className="text-body-sm text-foreground/60">{f.label}</span>
                    <span className="text-body-sm font-semibold text-foreground">
                      {f.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-md bg-gradient-brand px-4 py-3 text-center text-body-sm font-semibold text-white">
                1,284 matching crypto KOLs
              </div>
            </div>
          </div>

          {/* copy */}
          <div>
            <h2 className="text-[1.75rem] font-semibold leading-[1.15] text-foreground md:text-[2.1875rem]">
              Search &amp; filter crypto YouTube KOLs
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h3 className="border-b border-black/10 pb-3 text-body-md font-semibold text-foreground">
                  KOL filters
                </h3>
                <ul className="mt-2">
                  {KOL.map((f) => (
                    <Check key={f}>{f}</Check>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="border-b border-black/10 pb-3 text-body-md font-semibold text-foreground">
                  Audience filters
                </h3>
                <ul className="mt-2">
                  {AUDIENCE.map((f) => (
                    <Check key={f}>{f}</Check>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <ButtonA href="/demo-confirmation" variant="primary">
                Get started free
              </ButtonA>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
