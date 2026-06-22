import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Database hero — pill tag, dark headline, dual CTA, neutral KOL-table mockup on a pink block. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-12 md:pt-20">
      <Container>
        <div className="mx-auto flex max-w-[1080px] flex-col items-center text-center">
          {/* product tag */}
          <div className="mb-6 inline-flex items-center gap-2">
            <span className="chip chip-brand">KOL Database</span>
            <span className="chip chip-onchain font-mono-tnum">1,284 verified</span>
          </div>

          <h1 className="display-xl font-display font-normal uppercase text-[3rem] leading-[0.9] text-foreground sm:text-[5rem] md:text-[8.5rem]">
            The crypto KOL database, <span className="text-gradient-brand">verified</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[650px] text-body-md text-foreground/70">
            A searchable index of every crypto key opinion leader across X, YouTube,
            TikTok &amp; Telegram — with proof-based reach, audience quality, niche
            coverage, and past campaign history. No vanity metrics, no guesswork.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonA href="/demo-confirmation" variant="primary">
                Start free
              </ButtonA>
              <ButtonA href="/demo-confirmation" variant="secondary">
                Book a demo
              </ButtonA>
            </div>
            <p className="text-body-sm text-foreground/60">
              Free to explore・On-chain payments・No credit card required
            </p>
          </div>
        </div>
      </Container>

      {/* pink block with brand-neutral product mockup */}
      <div className="mt-12 md:mt-16">
        <div className="bg-pink pt-12 md:pt-16">
          <Container>
            <DatabaseMockup />
          </Container>
        </div>
      </div>
    </section>
  );
}

const ROWS = [
  { name: 'DeFi Dad', handle: 'thedefidad', niche: 'DeFi', tier: 'Mid', reach: '412K', score: 94 },
  { name: 'Layah.eth', handle: 'layah_l2', niche: 'L1/L2', tier: 'Mid', reach: '288K', score: 91 },
  { name: 'NFTMaxi', handle: 'nft_maxi', niche: 'NFTs', tier: 'Micro', reach: '176K', score: 88 },
  { name: 'TradeDesk', handle: 'tradedesk', niche: 'Trading', tier: 'Macro', reach: '534K', score: 90 },
];

/** Brand-neutral KOL discovery table mockup (no Modash imagery). */
function DatabaseMockup() {
  return (
    <div className="mx-auto block w-full max-w-[1136px] overflow-hidden rounded-t-xl border border-gray-200 bg-white shadow-2xl">
      <div className="flex items-center gap-2 border-b border-gray-100 px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-gray-200" />
        <span className="h-3 w-3 rounded-full bg-gray-200" />
        <span className="h-3 w-3 rounded-full bg-gray-200" />
        <span className="ml-3 rounded-pill bg-gradient-brand px-3 py-1 text-eyebrow font-bold text-white">
          1,284 verified KOLs match
        </span>
      </div>
      <table className="w-full text-left text-body-sm">
        <thead className="border-b border-gray-200 bg-gray-50 text-eyebrow uppercase tracking-wide text-foreground/50">
          <tr>
            <th className="px-5 py-3 font-semibold">KOL</th>
            <th className="px-5 py-3 font-semibold">Niche</th>
            <th className="px-5 py-3 font-semibold">Tier</th>
            <th className="px-5 py-3 text-right font-semibold">Real reach</th>
            <th className="px-5 py-3 text-right font-semibold">Proof score</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr key={r.handle} className="border-b border-gray-100 last:border-0">
              <td className="px-5 py-3">
                <div className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-full bg-gradient-brand opacity-80" />
                  <div>
                    <div className="font-semibold text-foreground">{r.name}</div>
                    <div className="text-eyebrow text-foreground/50">@{r.handle}</div>
                  </div>
                </div>
              </td>
              <td className="px-5 py-3 text-foreground/70">{r.niche}</td>
              <td className="px-5 py-3">
                <span className="chip chip-ink">{r.tier}</span>
              </td>
              <td className="px-5 py-3 text-right font-mono-tnum font-semibold">{r.reach}</td>
              <td className="px-5 py-3 text-right">
                <span className="font-mono-tnum font-semibold text-brand">{r.score}</span>
                <span className="font-mono-tnum text-foreground/40">/100</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
