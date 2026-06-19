import type { ReactNode } from 'react';
import Container from '@/components/ui/Container';

/** Brand-neutral square tile visuals built from divs. */
function TileVerify() {
  return (
    <div className="flex w-full flex-col gap-3 p-8">
      {['Wallet verified', 'KYC complete', 'Tax form on file'].map((l) => (
        <div
          key={l}
          className="flex items-center gap-2.5 rounded-lg bg-white px-4 py-3 text-[13px] font-medium text-ink shadow-sm"
        >
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-positive text-[10px] text-white">
            ✓
          </span>
          {l}
        </div>
      ))}
    </div>
  );
}

function TileSplit() {
  return (
    <div className="flex w-full flex-col gap-3 p-8">
      <div className="rounded-lg bg-white px-4 py-3 shadow-sm">
        <p className="text-[12px] text-gray-500">Flat fee</p>
        <p className="text-base font-semibold text-ink">$1,200 USDC</p>
      </div>
      <div className="rounded-lg bg-white px-4 py-3 shadow-sm">
        <p className="text-[12px] text-gray-500">Performance bonus</p>
        <p className="text-base font-semibold text-ink">0.5% of referred volume</p>
      </div>
    </div>
  );
}

function TileSupport() {
  return (
    <div className="flex w-full flex-col gap-3 p-8">
      <div className="self-start rounded-2xl rounded-bl-sm bg-white px-4 py-2.5 text-[13px] text-ink shadow-sm">
        When does my payout clear?
      </div>
      <div className="self-end rounded-2xl rounded-br-sm bg-purple px-4 py-2.5 text-[13px] text-ink shadow-sm">
        Released on-chain — tx 0x9f…41a2
      </div>
    </div>
  );
}

const CARDS: { visual: ReactNode; title: string; body: string }[] = [
  {
    visual: <TileVerify />,
    title: 'KOL onboarding & verification',
    body: 'We verify wallets, identity, and tax details for every KOL — so you know exactly who you’re paying before funds move.',
  },
  {
    visual: <TileSplit />,
    title: 'Performance payouts your way',
    body: 'Mix flat fees with on-chain performance bonuses tied to referred volume or conversions, all settled from the same campaign budget.',
  },
  {
    visual: <TileSupport />,
    title: 'Payout issue resolution',
    body: 'Our team handles KOL questions about payouts, wallets, and onboarding — so your team doesn’t have to.',
  },
];

/** Everything you need — 3 brand-neutral cards. */
export default function EverythingGrid() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <h2 className="mx-auto max-w-[760px] text-center font-display text-h4 text-ink md:text-h3">
          Everything you need to pay crypto KOLs from one place
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {CARDS.map((c) => (
            <div key={c.title}>
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-background-soft">
                {c.visual}
              </div>
              <h3 className="mt-5 text-body-lg font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-body text-foreground/70">{c.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
