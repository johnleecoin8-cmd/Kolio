import { Search, Sparkles, ShieldCheck } from 'lucide-react';

/** Gradient mid-list promo block: copy on the left, a brand-neutral AI-search
 *  mockup (built with divs) on the right. */
export default function SearchInterstitial() {
  return (
    <div className="my-7 grid grid-cols-1 items-center gap-8 rounded-xl bg-gradient-brand p-8 md:grid-cols-2 md:p-12">
      <div>
        <h2 className="font-display text-[2rem] uppercase leading-[1.05] text-white md:text-[2.75rem]">
          Search &amp; vet crypto KOLs across every niche
        </h2>
        <p className="mt-4 max-w-[420px] text-body text-white/85">
          Find KOLs with the right crypto audience using Kolio's discovery and
          proof-based vetting — across DeFi, NFTs, L1/L2, trading, and gaming.
          Try for free, no credit card required.
        </p>
        <a
          href="/demo-confirmation"
          className="mt-7 inline-flex h-11 items-center justify-center rounded-sm bg-ink px-5 text-body-sm font-semibold text-white no-underline shadow-btn transition hover:opacity-90"
        >
          Search for KOLs
        </a>
      </div>

      {/* Brand-neutral AI search mockup */}
      <div className="relative flex-1 overflow-hidden rounded-lg bg-white/10 p-6 backdrop-blur-sm">
        <div className="rounded-lg bg-white p-4 shadow-btn">
          <div className="flex items-center gap-2 rounded-md border border-black/10 px-3 py-2.5 text-body-sm text-foreground/50">
            <Sparkles size={16} className="text-foreground/40" />
            DeFi KOLs with 60%+ US audience and low fake followers
          </div>
          <div className="mt-4 space-y-3">
            {[
              { name: 'DeFi macro analyst', meta: '420k reach · 4.8% ER' },
              { name: 'On-chain yield educator', meta: '310k reach · 6.1% ER' },
              { name: 'L2 ecosystem voice', meta: '188k reach · 5.2% ER' },
            ].map((r) => (
              <div
                key={r.name}
                className="flex items-center justify-between rounded-md border border-black/5 bg-background-soft px-3 py-2.5"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-white">
                    <Search size={14} />
                  </span>
                  <div className="text-left">
                    <p className="text-body-sm font-semibold text-foreground">
                      {r.name}
                    </p>
                    <p className="text-[11px] text-foreground/50">{r.meta}</p>
                  </div>
                </div>
                <ShieldCheck size={16} className="text-brand" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
