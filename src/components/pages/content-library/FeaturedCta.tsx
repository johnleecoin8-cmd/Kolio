import { TrendingUp, Wallet, ShieldCheck } from 'lucide-react';

/** "See every KOL's campaign history" — two-column CTA with a brand-neutral mockup. */
export default function FeaturedCta() {
  return (
    <div className="grid grid-cols-1 items-center gap-10 py-12 md:grid-cols-2">
      <div>
        <h2 className="font-display text-[2rem] leading-[1.05] text-foreground md:text-[2.75rem]">
          See every KOL's{' '}
          <span className="text-gradient-brand">campaign history</span>
        </h2>
        <p className="mt-5 max-w-md text-body text-foreground/75">
          Use the campaign timeline to see which brands and protocols a KOL has
          worked with, what they posted, and how each campaign performed —
          including on-chain attribution that ties posts to real sign-ups,
          deposits and trades.
        </p>
        <a
          href="/demo-confirmation"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-sm bg-ink px-5 text-body font-semibold text-white no-underline shadow-btn transition hover:opacity-90"
        >
          Book a demo
        </a>
      </div>

      {/* brand-neutral product mockup (div-based, no third-party imagery) */}
      <div className="relative w-full overflow-hidden rounded-xl bg-background-soft p-5">
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <p className="text-body-sm font-semibold text-foreground">
            Campaign timeline · @danielcheung_eth
          </p>
          <div className="mt-4 space-y-3">
            {[
              { icon: <TrendingUp size={15} />, label: 'OKX · DeFi thread', meta: 'May 26 · 1.2k engagements' },
              { icon: <Wallet size={15} />, label: 'Payout settled on-chain', meta: 'USDC · escrow released' },
              { icon: <ShieldCheck size={15} />, label: 'Reach verified', meta: '98.1% real audience' },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between rounded-lg bg-background-soft px-3 py-2.5"
              >
                <span className="flex items-center gap-2 text-body-sm text-foreground">
                  <span className="text-brand">{row.icon}</span>
                  {row.label}
                </span>
                <span className="text-[11px] text-foreground/55">{row.meta}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-100">
            <span className="block h-full w-3/4 rounded-full bg-gradient-brand" />
          </div>
          <p className="mt-2 text-[11px] text-foreground/55">
            Attribution: 1,284 sign-ups · 612 first deposits
          </p>
        </div>
      </div>
    </div>
  );
}
