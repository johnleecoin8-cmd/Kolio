import { ChevronRight } from 'lucide-react';

const TIERS = [
  { cls: 'chip chip-brand', label: 'Tier S · proof-verified' },
  { cls: 'chip chip-ink', label: 'Tier A · high-signal' },
  { cls: 'chip chip-onchain', label: 'Tier B · emerging' },
];

/** Centered breadcrumb + editorial display H1 with tier chips, on white. */
export default function PageHeader() {
  return (
    <header className="bg-background pt-10 pb-10 md:pt-16">
      <div className="mx-auto w-full max-w-container px-4 sm:px-6 text-center">
        <nav className="mb-5 flex items-center justify-center gap-2 text-body-sm font-medium text-foreground/60">
          <a
            href="/find-influencers"
            className="no-underline transition hover:text-foreground"
          >
            Find KOLs
          </a>
          <ChevronRight size={16} className="text-foreground/40" />
          <span className="text-foreground">DeFi KOLs on X</span>
        </nav>

        <span className="eyebrow mb-4">Proof-ranked · June 2026</span>

        <h1 className="mx-auto max-w-[940px] font-display display-xl text-[2.6rem] text-foreground md:text-[3.75rem]">
          The top 20 <span className="text-gradient-brand">DeFi</span> KOLs on Crypto Twitter
        </h1>

        <p className="mx-auto mt-5 max-w-[660px] text-body-md text-foreground/60">
          Ranked by proof of reach and audience quality — not follower counts.
          Every profile is graded on a transparent, on-chain-backed tier scale.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
          {TIERS.map((t) => (
            <span key={t.label} className={t.cls}>
              {t.label}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
