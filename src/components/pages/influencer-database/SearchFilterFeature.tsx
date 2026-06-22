import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';
import { Check, Search, Sliders } from 'lucide-react';

function CheckDot() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground">
      <Check className="h-3 w-3 text-background" strokeWidth={3} />
    </span>
  );
}

const KOL_FILTERS = [
  'Crypto niche (DeFi, NFTs, L1/L2)',
  'Real reach & follower range',
  'Engagement rate',
  'Bio keywords & cashtags',
  'Bot & fake-follower share',
  'Token & chain affinity',
];

const AUDIENCE_FILTERS = [
  'Holder vs. trader mix',
  'Audience geography',
  'Wallet & on-chain activity',
  'Genuine engagement rate',
  'Sentiment & quality score',
  'Growth velocity',
];

const FILTER_CHIPS = ['DeFi', 'Real reach 100K+', 'Eng. 4%+', 'Bots < 10%', 'EN audience'];

/** First feature — image left, headline + two-column filter checklist right. */
export default function SearchFilterFeature() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <div className="w-full rounded-lg border border-gray-200 bg-white p-5 shadow-nav">
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
                <Search className="h-4 w-4 text-foreground/40" />
                <span className="text-body-sm text-foreground/50">
                  Search KOLs by niche, handle, chain…
                </span>
                <Sliders className="ml-auto h-4 w-4 text-foreground/40" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {FILTER_CHIPS.map((chip, i) => (
                  <span key={chip} className={`chip ${i === 0 ? 'chip-brand' : 'chip-ink'}`}>
                    {chip}
                  </span>
                ))}
              </div>
              <div className="mt-5 space-y-2.5">
                {[
                  { n: 'DeFi Dad', h: 'thedefidad', tier: 'Mid', r: '412K', s: 94 },
                  { n: 'Layah.eth', h: 'layah_l2', tier: 'Mid', r: '288K', s: 91 },
                  { n: 'TradeDesk', h: 'tradedesk', tier: 'Macro', r: '534K', s: 90 },
                ].map((c) => (
                  <div
                    key={c.h}
                    className="flex items-center gap-3 rounded-lg border border-gray-100 px-3 py-2.5"
                  >
                    <span className="h-9 w-9 rounded-full bg-gradient-brand opacity-80" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-body-sm font-semibold text-foreground">{c.n}</span>
                        <span className="chip chip-ink">{c.tier}</span>
                      </div>
                      <div className="text-eyebrow text-foreground/50">@{c.h}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono-tnum text-body-sm font-semibold">{c.r}</div>
                      <div className="text-eyebrow text-foreground/50">real reach</div>
                    </div>
                    <div className="w-12 text-right">
                      <div className="font-mono-tnum text-body-sm font-semibold text-brand">{c.s}</div>
                      <div className="text-eyebrow text-foreground/50">proof</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="eyebrow">Discover</span>
            <h2 className="mt-3 display-lg text-[1.75rem] font-semibold leading-[1.15] text-foreground md:text-[2.1875rem]">
              Search &amp; filter every crypto KOL that matters
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div className="text-body font-semibold text-foreground sm:col-span-1">
                KOL filters
              </div>
              <div className="hidden text-body font-semibold text-foreground sm:block">
                Audience filters
              </div>

              <ul className="space-y-3">
                {KOL_FILTERS.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckDot />
                    <span className="text-body-sm text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-body font-semibold text-foreground sm:hidden">
                Audience filters
              </div>

              <ul className="space-y-3">
                {AUDIENCE_FILTERS.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckDot />
                    <span className="text-body-sm text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <ButtonA href="/demo-confirmation" variant="primary">
                Start free
              </ButtonA>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
