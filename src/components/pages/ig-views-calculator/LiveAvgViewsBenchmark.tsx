import { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';
import Container from '@/components/ui/Container';
import { BACKEND_ENABLED } from '@/lib/supabase';
import { searchCreators } from '@/api/creators';
import { fmt } from '@/components/live/format';

/**
 * Live Kolio benchmark for the reach checker: pulls the top 50 Instagram
 * creators from the live catalog and surfaces their average avg_views as a
 * calm reference card on the warm canvas. Self-hides when backend is off.
 */
export default function LiveAvgViewsBenchmark() {
  const [avg, setAvg] = useState<number | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!BACKEND_ENABLED) return;
    let alive = true;
    searchCreators({ platform: 'instagram', sort: 'followers', limit: 50 })
      .then((rows) => {
        if (!alive || rows.length === 0) return;
        const total = rows.reduce((s, c) => s + Number(c.avg_views ?? 0), 0);
        setAvg(total / rows.length);
        setCount(rows.length);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  if (!BACKEND_ENABLED || avg === null) return null;

  return (
    <section className="canvas-warm pb-4">
      <Container>
        <div className="card-kit shadow-float-sm mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-5 rounded-2xl p-6 sm:flex-row sm:p-7 sm:text-left">
          <div className="flex items-start gap-3 text-center sm:text-left">
            <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-pill bg-coral-bg text-brand">
              <Activity className="h-5 w-5" />
            </span>
            <div>
              <span className="chip chip-brand">Live benchmark</span>
              <p className="mt-2 max-w-sm text-body-md text-foreground/65">
                Average views across the top {count} creators in Kolio&apos;s live index — your
                baseline for what real reach looks like.
              </p>
            </div>
          </div>
          <div className="shrink-0 text-center sm:text-right">
            <div className="num-display text-h2 leading-none text-foreground">{fmt(avg)}</div>
            <div className="mt-1 font-mono-tnum text-eyebrow text-foreground/50">avg views / post</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
