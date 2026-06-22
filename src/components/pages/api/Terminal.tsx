import Container from '@/components/ui/Container';

type Line = { kind: 'comment' | 'req' | 'res' | 'key' | 'blank'; text?: string; k?: string; v?: string; accent?: boolean };

const lines: Line[] = [
  { kind: 'comment', text: '# Find DeFi KOLs with a verified, real audience' },
  { kind: 'req', text: 'GET /v1/kols?niche=defi&min_proof=85&chain=base' },
  { kind: 'blank' },
  { kind: 'res', text: '{' },
  { kind: 'key', k: '"handle"', v: '"@onchain_ana"' },
  { kind: 'key', k: '"proof_score"', v: '92', accent: true },
  { kind: 'key', k: '"real_followers"', v: '148_204' },
  { kind: 'key', k: '"engaged_holders"', v: '0.61' },
  { kind: 'key', k: '"fake_ratio"', v: '0.04' },
  { kind: 'key', k: '"attributed_volume_usd"', v: '"1.27M"', accent: true },
  { kind: 'res', text: '}' },
];

/** Floating dark on-chain code terminal: mono, mint live chip, soft glow.
 *  Shows a real Kolio API request → Proof-Scored KOL response. */
export default function Terminal() {
  return (
    <section className="canvas-warm pb-20 pt-4 md:pb-28">
      <Container>
        <div className="relative mx-auto max-w-3xl">
          {/* glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-brand opacity-20 blur-3xl"
          />
          <div className="surface-onchain shadow-float overflow-hidden rounded-2xl">
            {/* window chrome */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-pill bg-white/20" />
                <span className="h-3 w-3 rounded-pill bg-white/20" />
                <span className="h-3 w-3 rounded-pill bg-white/20" />
              </div>
              <span className="font-mono-tnum text-eyebrow text-white/40">api.kolio.io</span>
              <span className="chip chip-onchain inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-pill bg-mint" /> live
              </span>
            </div>

            {/* code body */}
            <pre className="overflow-x-auto px-6 py-6 text-body-sm leading-relaxed font-mono-tnum">
              <code className="block">
                {lines.map((l, i) => {
                  if (l.kind === 'blank') return <div key={i}>&nbsp;</div>;
                  if (l.kind === 'comment')
                    return <div key={i} className="text-white/35">{l.text}</div>;
                  if (l.kind === 'req')
                    return (
                      <div key={i} className="text-white">
                        <span className="mr-2 rounded bg-mint/15 px-1.5 py-0.5 text-eyebrow font-bold text-mint">GET</span>
                        <span className="text-white/80">{l.text?.replace('GET ', '')}</span>
                      </div>
                    );
                  if (l.kind === 'res') return <div key={i} className="text-white/50">{l.text}</div>;
                  return (
                    <div key={i} className="pl-4 text-white/70">
                      <span className="text-mint/70">{l.k}</span>
                      <span className="text-white/40">: </span>
                      <span className={l.accent ? 'font-bold text-mint' : 'text-white/85'}>{l.v}</span>
                      <span className="text-white/40">,</span>
                    </div>
                  );
                })}
              </code>
            </pre>
          </div>

          <p className="mt-5 text-center text-body-sm text-foreground/55">
            Every response carries a <span className="font-semibold text-foreground">Proof Score</span> and on-chain
            attribution — never raw follower vanity.
          </p>
        </div>
      </Container>
    </section>
  );
}
