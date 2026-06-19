import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const STATS = [
  { value: '0%', label: 'budget released before delivery' },
  { value: '100%', label: 'of payouts settled on-chain' },
  { value: 'Live', label: 'attribution from post to wallet' },
];

/** "Built for on-chain campaigns" — warm gradient panel, copy left, native proof stats right. */
export default function ShopifyFeature() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="overflow-hidden rounded-xl bg-gradient-brand text-white">
          <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:gap-12 md:p-14">
            <div className="flex flex-col items-start text-left">
              <h2 className="font-display text-[2.25rem] leading-[1.05] text-white md:text-[3.5rem]">
                Built for on-chain campaigns
              </h2>
              <p className="mt-5 max-w-[480px] text-body-md text-white/85">
                Connect your wallet and contracts to run KOL campaigns with escrow,
                stablecoin payouts, and on-chain attribution. No more wiring funds blind.
              </p>
              <p className="mt-4 max-w-[480px] text-body-md text-white/85">
                Track clicks, sign-ups, swaps, and mints back to each KOL, so you can see
                what's working and double down on the partners that actually convert.
              </p>
              <ButtonA href="/demo-confirmation" variant="secondary" className="mt-8">
                Get started free
              </ButtonA>
            </div>

            <div className="grid gap-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex items-baseline gap-4 rounded-lg bg-white/10 p-6 backdrop-blur-sm"
                >
                  <span className="font-display text-[2.5rem] font-bold leading-none text-white">
                    {s.value}
                  </span>
                  <span className="text-body-md text-white/85">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
