import { Activity, Users, ShieldCheck } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Signature floating cards: what an engagement rate actually tells you about a
 *  crypto KOL — formula, authenticity split, and the "fund only on proof" rail. */
export default function HowItReads() {
  return (
    <section className="canvas-warm2 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Read past the follower count</span>
          <h2 className="display-light mt-4 text-[2.25rem] leading-[1.04] text-foreground md:text-[3.25rem]">
            What the rate actually proves
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
            A million followers means nothing if nobody reacts. Engagement rate is
            the first honest signal — here is how Kolio reads it.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[68rem] gap-6 md:grid-cols-3">
          {/* Formula card */}
          <div className="card-kit shadow-float -rotate-1 rounded-2xl p-6 transition hover:rotate-0 md:translate-y-3">
            <div className="flex items-center justify-between">
              <span className="chip chip-brand">The formula</span>
              <Activity className="h-5 w-5 text-brand" />
            </div>
            <div className="mt-6 rounded-xl bg-gray-50 p-4 font-mono-tnum text-body-sm text-foreground/70">
              <div className="flex justify-between"><span>avg interactions</span><span className="text-foreground">2,310</span></div>
              <div className="my-2 h-px bg-gray-200" />
              <div className="flex justify-between"><span>÷ followers</span><span className="text-foreground">48,100</span></div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-foreground/55">= rate</span>
                <span className="num-display text-h5 text-brand">4.8%</span>
              </div>
            </div>
            <p className="mt-4 text-eyebrow text-foreground/50">
              Likes, replies and reposts per post, normalized by reach.
            </p>
          </div>

          {/* Authenticity card */}
          <div className="card-kit shadow-float rounded-2xl p-6 transition hover:-translate-y-1 md:-translate-y-2">
            <div className="flex items-center justify-between">
              <span className="chip chip-onchain">Audience</span>
              <Users className="h-5 w-5 text-brand" />
            </div>
            <div className="mt-6 flex items-end gap-3">
              <span className="num-display text-[3rem] leading-none text-foreground">96</span>
              <span className="mb-2 text-body-sm text-foreground/50">% real</span>
            </div>
            <div className="mt-4 space-y-2">
              {[['Engaged holders', '96%', 'bg-brand'], ['Bots / bought', '4%', 'bg-gray-300']].map(([l, v, c]) => (
                <div key={l}>
                  <div className="mb-1 flex justify-between text-eyebrow text-foreground/55"><span>{l}</span><span className="font-mono-tnum">{v}</span></div>
                  <div className="h-1.5 rounded-pill bg-gray-100"><div className={`h-full rounded-pill ${c}`} style={{ width: v as string }} /></div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-eyebrow text-foreground/50">
              High reach with low engagement usually means inflated followers.
            </p>
          </div>

          {/* Fund-on-proof card */}
          <div className="surface-onchain shadow-float rotate-1 rounded-2xl p-6 text-white transition hover:rotate-0 md:translate-y-3">
            <div className="flex items-center justify-between">
              <span className="chip chip-onchain">Then book</span>
              <ShieldCheck className="h-5 w-5 text-mint" />
            </div>
            <div className="mt-6">
              <div className="text-eyebrow text-white/50">Once the rate checks out</div>
              <div className="num-display mt-1 text-[2.5rem] leading-none text-white">USDC<span className="text-body-md text-white/50"> escrow</span></div>
            </div>
            <div className="mt-5 space-y-2 font-mono-tnum text-eyebrow">
              <div className="flex justify-between text-white/70"><span>rate verified</span><span className="text-mint">✓</span></div>
              <div className="flex justify-between text-white/70"><span>audience real</span><span className="text-mint">✓</span></div>
              <div className="flex justify-between text-white"><span>fund on delivery</span><span className="text-mint">ready</span></div>
            </div>
            <p className="mt-4 text-eyebrow text-white/45">
              Proof first, payment second — never the other way around.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
