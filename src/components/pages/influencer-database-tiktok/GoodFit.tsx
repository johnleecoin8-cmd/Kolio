import FeatureRow from './FeatureRow';
import { ButtonA } from '@/components/ui/Button';
import ProofScore from '@/components/kit/ProofScore';

/** Brand-neutral audience-breakdown mockup built with divs (no branded screenshot). */
function ProofMockup() {
  const audience = [
    ['United States', 38],
    ['Germany', 14],
    ['Brazil', 11],
    ['South Korea', 9],
  ] as const;
  return (
    <div className="mx-auto w-full max-w-[480px] space-y-5">
      <div className="card-kit flex items-center justify-between p-5">
        <ProofScore score={91} size="lg" />
        <span className="text-right text-body-sm text-foreground/60">
          Real reach <span className="font-mono-tnum text-foreground/80">412K</span>
          <br />
          <span className="font-mono-tnum text-foreground/80">3%</span> bot followers
        </span>
      </div>
      <div className="card-kit p-5">
        <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/40">Audience by country</p>
        <div className="mt-4 space-y-3">
          {audience.map(([label, pct]) => (
            <div key={label}>
              <div className="flex justify-between text-body-sm">
                <span className="text-foreground/70">{label}</span>
                <span className="font-mono-tnum font-semibold text-foreground">{pct}%</span>
              </div>
              <div className="mt-1 h-1.5 rounded-pill bg-gray-100">
                <div
                  className="h-full rounded-pill bg-gradient-brand"
                  style={{ width: `${pct * 2}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** "Vet KOLs before you reach out" — text left, proof mockup right. */
export default function GoodFit() {
  return (
    <FeatureRow imageSide="right" image={<ProofMockup />}>
      <span className="eyebrow">Vet</span>
      <h2 className="display-lg mt-3 font-display text-[2.1875rem] text-foreground">
        Vet every KOL on proof, not promises
      </h2>
      <p className="mt-6 max-w-[480px] text-body-md text-foreground/70">
        Crypto KOL fraud is real — bought followers, recycled engagement, and
        screenshots you can&apos;t verify. Kolio gives you the truth upfront:
        real reach, bot share, audience quality, engagement, and a record of
        past project work. Spend with confidence, not faith.
      </p>
      <div className="mt-8">
        <ButtonA href="/demo-confirmation" variant="primary">
          Start free
        </ButtonA>
      </div>
    </FeatureRow>
  );
}
