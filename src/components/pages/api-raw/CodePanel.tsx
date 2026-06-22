import { Activity, ShieldCheck, Wallet } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Floating dark code panel — the focal product surface. A real-looking GET
 *  request returning a proof-graded KOL profile, with two floating signal cards
 *  layered on top for depth (FloatingCards reference pattern). */
export default function CodePanel() {
  return (
    <section className="canvas-warm pb-20 pt-4 md:pb-28">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow text-brand">One request, the whole proof</span>
          <h2 className="display-light mt-3 text-[2rem] leading-[1.05] text-foreground md:text-[3rem]">
            Ask once. Get the data that <span className="text-gradient-brand">survives</span> diligence.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-body-md text-foreground/60">
            Every field is fetched live at request time — no nightly cache, no vanity rollups. Here is a single KOL lookup.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* dark code panel */}
          <div className="surface-onchain shadow-float overflow-hidden rounded-2xl">
            {/* terminal bar */}
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
              <span className="h-3 w-3 rounded-pill bg-white/15" />
              <span className="h-3 w-3 rounded-pill bg-white/15" />
              <span className="h-3 w-3 rounded-pill bg-white/15" />
              <span className="ml-3 font-mono-tnum text-eyebrow text-white/40">
                GET /v1/kols/cryptowhale?channel=x
              </span>
              <span className="chip chip-onchain ml-auto hidden sm:inline-flex">200 OK · 84ms</span>
            </div>
            {/* json body */}
            <pre className="overflow-x-auto px-6 py-6 font-mono-tnum text-[13px] leading-relaxed text-white/80">
              <code>
                <Line>{'{'}</Line>
                <Line indent={1}><K>"handle"</K>: <S>"@cryptowhale"</S>, <K>"channel"</K>: <S>"x"</S>,</Line>
                <Line indent={1}><K>"proof_score"</K>: <N>92</N>,            <Cmt>{'// 0–100, recomputed live'}</Cmt></Line>
                <Line indent={1}><K>"real_follower_count"</K>: <N>418204</N>,</Line>
                <Line indent={1}><K>"bot_ratio"</K>: <N>0.04</N>,</Line>
                <Line indent={1}><K>"engaged_holders"</K>: <N>0.61</N>,</Line>
                <Line indent={1}><K>"audience_overlap"</K>: {'{'} <K>"@l2maxi"</K>: <N>0.18</N> {'}'},</Line>
                <Line indent={1}><K>"is_paid_partnership"</K>: <B>true</B>,</Line>
                <Line indent={1}><K>"cashtags"</K>: [<S>"$ARB"</S>, <S>"$OP"</S>],</Line>
                <Line indent={1}><K>"onchain_attribution"</K>: {'{'}</Line>
                <Line indent={2}><K>"wallets_reached"</K>: <N>2841</N>,</Line>
                <Line indent={2}><K>"verified_via"</K>: <S>"kolio-pixel"</S></Line>
                <Line indent={1}>{'}'}</Line>
                <Line>{'}'}</Line>
              </code>
            </pre>
          </div>

          {/* floating signal card — top right */}
          <div className="card-kit shadow-float-sm absolute -right-3 -top-6 hidden w-52 rotate-2 rounded-2xl p-4 md:block lg:-right-10">
            <div className="flex items-center justify-between">
              <span className="chip chip-onchain">Live</span>
              <Activity className="h-4 w-4 text-brand" />
            </div>
            <div className="mt-3 text-eyebrow text-foreground/50">Real followers</div>
            <div className="num-display mt-0.5 text-[1.6rem] leading-none text-foreground">418,204</div>
            <div className="mt-2 h-1.5 rounded-pill bg-gray-100">
              <div className="h-full w-[96%] rounded-pill bg-brand" />
            </div>
            <div className="mt-1.5 flex justify-between text-eyebrow text-foreground/50">
              <span>verified</span><span className="font-mono-tnum text-brand">96%</span>
            </div>
          </div>

          {/* floating signal card — bottom left */}
          <div className="card-kit shadow-float-sm absolute -bottom-7 -left-3 hidden w-56 -rotate-2 rounded-2xl p-4 md:block lg:-left-10">
            <div className="flex items-center justify-between">
              <span className="chip chip-brand">Attribution</span>
              <Wallet className="h-4 w-4 text-brand-coral" />
            </div>
            <div className="mt-3 space-y-2 font-mono-tnum text-eyebrow">
              <div className="flex justify-between text-foreground/60"><span>wallets reached</span><span className="text-foreground">2,841</span></div>
              <div className="flex justify-between text-foreground/60"><span>paid disclosed</span><span className="inline-flex items-center gap-1 text-brand"><ShieldCheck className="h-3 w-3" /> yes</span></div>
              <div className="flex justify-between text-foreground/60"><span>bot ratio</span><span className="text-foreground">4%</span></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* — tiny syntax-highlight helpers, all on the dark panel — */
function Line({ children, indent = 0 }: { children: React.ReactNode; indent?: number }) {
  return <div style={{ paddingLeft: `${indent * 1.25}rem` }}>{children}</div>;
}
const K = ({ children }: { children: React.ReactNode }) => <span className="text-mint">{children}</span>;
const S = ({ children }: { children: React.ReactNode }) => <span className="text-white/90">{children}</span>;
const N = ({ children }: { children: React.ReactNode }) => <span className="text-brand-coral">{children}</span>;
const B = ({ children }: { children: React.ReactNode }) => <span className="text-brand-coral">{children}</span>;
const Cmt = ({ children }: { children: React.ReactNode }) => <span className="text-white/35">{children}</span>;
