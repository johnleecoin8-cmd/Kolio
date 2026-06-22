import { Eye, Users, ShieldCheck, Globe2 } from 'lucide-react';
import Container from '@/components/ui/Container';

/**
 * Calm floating-cards section: the four reads the checker gives you, built as
 * rounded product mini-UIs with gentle depth and rotation on the warm canvas.
 */
export default function WhatYouCheck() {
  return (
    <section className="canvas-warm py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What the checker reads</span>
          <h2 className="display-light mt-4 text-[2.25rem] leading-[1.05] text-foreground md:text-[3.25rem]">
            Four reads before a dollar leaves <span className="text-gradient-brand">escrow</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
            Reach is just the entry point. Kolio scores the audience underneath it, so you
            book on proof — not on a follower count.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Real reach */}
          <div className="card-kit shadow-float -rotate-1 rounded-2xl p-6 transition hover:rotate-0 md:translate-y-3">
            <div className="flex items-center justify-between">
              <span className="chip chip-brand">Real reach</span>
              <Eye className="h-5 w-5 text-brand" />
            </div>
            <div className="mt-6 flex items-end gap-3">
              <span className="num-display text-[3rem] leading-none text-foreground">540.6K</span>
              <span className="mb-2 text-body-sm text-foreground/50">avg views / post</span>
            </div>
            <p className="mt-4 text-body-sm text-foreground/60">
              Median views across recent posts on X — not the inflated follower number on the bio.
            </p>
          </div>

          {/* Audience quality */}
          <div className="card-kit shadow-float rounded-2xl p-6 transition hover:-translate-y-1 md:-translate-y-2">
            <div className="flex items-center justify-between">
              <span className="chip chip-onchain">Audience quality</span>
              <Users className="h-5 w-5 text-brand" />
            </div>
            <div className="mt-6 space-y-2">
              {[['Real holders', '94%', 'bg-brand'], ['Engaged', '61%', 'bg-brand-coral'], ['Bots / fake', '4%', 'bg-gray-300']].map(([l, v, c]) => (
                <div key={l}>
                  <div className="mb-1 flex justify-between text-eyebrow text-foreground/55">
                    <span>{l}</span>
                    <span className="font-mono-tnum">{v}</span>
                  </div>
                  <div className="h-1.5 rounded-pill bg-gray-100">
                    <div className={`h-full rounded-pill ${c}`} style={{ width: v as string }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engagement integrity */}
          <div className="card-kit shadow-float rotate-1 rounded-2xl p-6 transition hover:rotate-0 md:translate-y-2">
            <div className="flex items-center justify-between">
              <span className="chip chip-brand">Engagement</span>
              <ShieldCheck className="h-5 w-5 text-brand" />
            </div>
            <div className="mt-6 flex items-end gap-3">
              <span className="num-display text-[3rem] leading-none text-foreground">5.8%</span>
              <span className="mb-2 text-body-sm text-foreground/50">true ER</span>
            </div>
            <div className="mt-5 flex h-16 items-end gap-1.5">
              {[40, 55, 48, 70, 62, 80, 74].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-brand/80" style={{ height: `${h}%` }} />
              ))}
            </div>
            <p className="mt-3 text-body-sm text-foreground/60">
              Replies and reposts weighted over likes — engagement that can&apos;t be bought.
            </p>
          </div>

          {/* Regional split */}
          <div className="surface-onchain shadow-float -rotate-1 rounded-2xl p-6 text-white transition hover:rotate-0 md:-translate-y-1">
            <div className="flex items-center justify-between">
              <span className="chip chip-onchain">Audience map</span>
              <Globe2 className="h-5 w-5 text-mint" />
            </div>
            <div className="mt-6 space-y-3 font-mono-tnum text-body-sm">
              {[['KR · Korea', '38%'], ['SEA', '24%'], ['US / EU', '21%'], ['Other', '17%']].map(([l, v]) => (
                <div key={l} className="flex items-center gap-3">
                  <span className="w-28 shrink-0 text-white/70">{l}</span>
                  <div className="h-1.5 flex-1 rounded-pill bg-white/10">
                    <div className="h-full rounded-pill bg-mint" style={{ width: v }} />
                  </div>
                  <span className="w-10 shrink-0 text-right text-white">{v}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-body-sm text-white/55">
              Know where the audience actually lives before you scope a regional launch.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
