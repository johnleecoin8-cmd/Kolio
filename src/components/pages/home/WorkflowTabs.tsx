import { useState } from 'react';
import { Search, ShieldCheck, BarChart3, Wallet, BadgeCheck } from 'lucide-react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

type Tab = {
  nav: string;
  heading: string;
  body: string;
  cta: string;
  href: string;
};

const ROW = ['CryptoWhale', 'DeFiDegen', 'L2Maxi', 'NFT_Curator', 'OnchainAna'];

/** Brand-neutral product-UI mockups (one per tab) — divs only, Kolio tokens. */
function TabMock({ nav }: { nav: string }) {
  if (nav === 'Discover')
    return (
      <div className="flex h-full flex-col gap-3">
        <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-body-sm text-foreground/50">
          <Search className="h-4 w-4" /> DeFi · audience &gt; 40% holders
        </div>
        {ROW.map((h, i) => (
          <div key={h} className="flex items-center gap-3 rounded-lg border border-gray-100 px-3 py-2">
            <div className="h-8 w-8 rounded-pill bg-gradient-brand" />
            <div className="flex-1">
              <div className="flex items-center gap-1 text-body-sm font-semibold">@{h}<BadgeCheck className="h-3.5 w-3.5 text-brand" /></div>
              <div className="text-eyebrow text-foreground/50">{(120 - i * 17)}K followers · {(8 - i)}.{i}% ER</div>
            </div>
            <div className="rounded-pill bg-coral-bg px-2 py-1 text-eyebrow font-bold text-brand">Match {96 - i * 4}</div>
          </div>
        ))}
      </div>
    );
  if (nav === 'Vet')
    return (
      <div className="flex h-full flex-col justify-center gap-4">
        <div className="flex items-center gap-2 text-body-sm font-semibold"><ShieldCheck className="h-5 w-5 text-brand" /> Audience credibility</div>
        {[['Real followers', 91, 'bg-brand'], ['Engaged holders', 64, 'bg-brand-coral'], ['Bot / fake', 9, 'bg-gray-300']].map(([l, v, c]) => (
          <div key={l as string}>
            <div className="mb-1 flex justify-between text-eyebrow text-foreground/60"><span>{l}</span><span>{v}%</span></div>
            <div className="h-2.5 rounded-pill bg-gray-100"><div className={`h-full rounded-pill ${c}`} style={{ width: `${v}%` }} /></div>
          </div>
        ))}
      </div>
    );
  if (nav === 'Track')
    return (
      <div className="flex h-full flex-col gap-3">
        <div className="flex items-center gap-2 text-body-sm font-semibold"><BarChart3 className="h-5 w-5 text-brand" /> Campaign performance</div>
        <div className="flex flex-1 items-end gap-2">
          {[40, 62, 51, 78, 66, 90, 84].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-gradient-brand" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          {[['Reach', '2.4M'], ['Clicks', '88K'], ['Swaps', '6.1K']].map(([l, v]) => (
            <div key={l} className="rounded-lg bg-gray-50 py-2"><div className="text-body font-extrabold">{v}</div><div className="text-eyebrow text-foreground/50">{l}</div></div>
          ))}
        </div>
      </div>
    );
  return (
    <div className="flex h-full flex-col justify-center gap-3">
      <div className="flex items-center gap-2 text-body-sm font-semibold"><Wallet className="h-5 w-5 text-brand" /> Escrow · on-chain payout</div>
      {[['Funded to escrow', 'escrow'], ['KOL delivered', 'ok'], ['Released 4,200 USDC', 'paid']].map(([l, s], i) => (
        <div key={l} className="flex items-center justify-between rounded-lg border border-gray-100 px-3 py-3">
          <span className="text-body-sm">{l}</span>
          <span className={`rounded-pill px-2 py-1 text-eyebrow font-bold ${i === 2 ? 'bg-brand text-white' : 'bg-coral-bg text-brand'}`}>{s}</span>
        </div>
      ))}
    </div>
  );
}

const TABS: Tab[] = [
  {
    nav: 'Discover',
    heading: 'Find the right KOLs',
    body: 'Search crypto KOLs across X, YouTube, TikTok, and Telegram. Filter by niche — DeFi, NFTs, L1/L2, trading, gaming — and surface the right voices for your token, not just the loudest accounts.',
    cta: 'Explore Discovery',
    href: '/demo-confirmation',
  },
  {
    nav: 'Vet',
    heading: 'Vet before you spend',
    body: 'See real reach and audience quality, not vanity metrics. Spot bot followers, engagement farming, and recycled audiences before a single dollar moves — so budget goes to KOLs who actually move markets.',
    cta: 'Explore Vetting',
    href: '/demo-confirmation',
  },
  {
    nav: 'Track',
    heading: 'Attribute every campaign',
    body: 'Capture every post automatically, no KOL sign-up required. Tie content to on-chain outcomes — wallet sign-ups, swaps, mints — and see impressions, clicks, and conversions in one dashboard.',
    cta: 'Explore Attribution',
    href: '/demo-confirmation',
  },
  {
    nav: 'Pay',
    heading: 'Pay on-chain, with escrow',
    body: 'Hold budget in escrow and release it on delivery. Pay KOLs in stablecoins worldwide with on-chain settlement — fast, transparent, and disputes handled before funds ever leave the contract.',
    cta: 'Explore Payments',
    href: '/demo-confirmation',
  },
];

/** "Your whole KOL program" — tabbed feature carousel with looping product videos. */
export default function WorkflowTabs() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-[760px] text-center">
          <p className="text-body-sm font-bold text-foreground/50">
            Discover. Vet. Track. Pay.
          </p>
          <h2 className="mt-3 font-sans text-[2rem] font-extrabold leading-[1.1] text-foreground md:text-[2.5rem]">
            Your whole crypto KOL program, finally connected in one workflow
          </h2>
        </div>

        {/* tab nav */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {TABS.map((t, i) => (
            <button
              key={t.nav}
              onClick={() => setActive(i)}
              className={`h-11 rounded-pill px-5 text-body font-semibold transition ${
                i === active
                  ? 'bg-ink text-white'
                  : 'bg-ink/5 text-foreground/70 hover:bg-ink/10'
              }`}
            >
              {t.nav}
            </button>
          ))}
        </div>

        {/* tab panel */}
        <div className="overflow-hidden rounded-xl bg-pink">
          <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:gap-12 md:p-12">
            <div className="flex flex-col items-start text-left">
              <h3 className="font-display text-h4 text-foreground md:text-[2.5rem]">
                {tab.heading}
              </h3>
              <p className="mt-5 max-w-[480px] text-body-md text-foreground/75">
                {tab.body}
              </p>
              <ButtonA href={tab.href} variant="primary" className="mt-8">
                {tab.cta}
              </ButtonA>
            </div>

            <div className="aspect-square overflow-hidden rounded-lg bg-white p-5 shadow-nav">
              <TabMock nav={tab.nav} />
            </div>
          </div>
        </div>

        {/* product-tour CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-body-md text-foreground/75">
            See the workflow and value in minutes
          </p>
          <ButtonA href="/demo-confirmation" variant="primary">
            Take product tour
          </ButtonA>
        </div>
      </Container>
    </section>
  );
}
