import { Search, SlidersHorizontal, BadgeCheck } from 'lucide-react';
import Container from '@/components/ui/Container';
import MotionReveal from '@/components/ui/MotionReveal';

/** Split product showcase: copy + a floating discovery product UI (original). */
export default function Showcase() {
  return (
    <section className="canvas py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <MotionReveal>
            <span className="eyebrow">Discovery</span>
            <h2 className="display-2 mt-3 text-h2 text-ink">Find the right KOL, not the loudest one</h2>
            <p className="mt-5 max-w-md text-body-lg text-ink/60">
              Search by audience, niche, and on-chain proof. Every creator carries a Proof Score so you back real reach, not farmed followers.
            </p>
            <ul className="mt-7 space-y-3">
              {['Filter by holders, chains, and engagement quality', 'See bot and fake-follower share before you book', 'Shortlist and hand off to escrow in one flow'].map((t) => (
                <li key={t} className="flex items-start gap-3 text-body text-ink/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-pill bg-brand" />{t}
                </li>
              ))}
            </ul>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="card float relative overflow-hidden p-5 md:p-6">
              <div className="flex items-center gap-2 rounded-pill border border-hairline px-3 py-2 text-body-sm text-ink/50">
                <Search className="h-4 w-4" /> DeFi · audience &gt; 40% holders
                <SlidersHorizontal className="ml-auto h-4 w-4" />
              </div>
              <div className="mt-3 flex gap-2">
                {['DeFi', 'Layer2', 'NFT', 'Trading'].map((t, i) => (
                  <span key={t} className={`chip ${i === 0 ? 'chip-brand' : 'chip-dark !bg-ink/5 !text-ink/55'}`}>{t}</span>
                ))}
              </div>
              <div className="mt-4 space-y-2.5">
                {[['cryptowhale', '120K', '8.2%', 92], ['defi_degen', '88K', '6.4%', 88], ['l2maxi', '64K', '7.1%', 86], ['onchain_ana', '41K', '9.0%', 84]].map(([h, f, e, s]) => (
                  <div key={h as string} className="flex items-center gap-3 rounded-lg border border-hairline p-3">
                    <span className="grid h-9 w-9 place-items-center rounded-pill bg-gradient-to-br from-brand to-brand-2 text-eyebrow font-semibold text-white">{(h as string).slice(0, 2).toUpperCase()}</span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1 text-body-sm font-medium">@{h}<BadgeCheck className="h-3.5 w-3.5 text-brand" /></div>
                      <div className="num text-eyebrow text-ink/45">{f} followers · {e} ER</div>
                    </div>
                    <span className="num chip chip-mint">{s as number}</span>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}
