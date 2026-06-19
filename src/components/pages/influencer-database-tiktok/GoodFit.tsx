import FeatureRow from './FeatureRow';
import { ButtonA } from '@/components/ui/Button';

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
      <div className="rounded-lg bg-white p-5 shadow-nav">
        <p className="text-body-sm font-semibold text-foreground/40">Proof score</p>
        <div className="mt-2 flex items-end gap-3">
          <span className="font-display text-[2.5rem] leading-none text-foreground">A</span>
          <span className="mb-1 text-body-sm text-foreground/60">
            Real reach 412K・3% bot followers
          </span>
        </div>
      </div>
      <div className="rounded-lg bg-white p-5 shadow-nav">
        <p className="text-body-sm font-semibold text-foreground/40">Audience by country</p>
        <div className="mt-4 space-y-3">
          {audience.map(([label, pct]) => (
            <div key={label}>
              <div className="flex justify-between text-body-sm">
                <span className="text-foreground/70">{label}</span>
                <span className="font-semibold text-foreground">{pct}%</span>
              </div>
              <div className="mt-1 h-1.5 rounded-pill bg-background-soft">
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
      <h2 className="text-[2.1875rem] font-semibold leading-[1.15] text-foreground">
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
