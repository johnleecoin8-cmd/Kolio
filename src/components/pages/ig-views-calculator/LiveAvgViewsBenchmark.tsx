import { useEffect, useState } from 'react';
import Container from '@/components/ui/Container';
import { BACKEND_ENABLED } from '@/lib/supabase';
import { searchCreators } from '@/api/creators';
import { fmt } from '@/components/live/format';

/**
 * Live Kolio benchmark for the IG views checker: pulls the top 50 Instagram
 * creators from the live catalog and surfaces their average avg_views as a
 * reference point next to a user's result. Self-hides when backend is off.
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
    <section className="bg-background pt-10 md:pt-12">
      <Container>
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-brand px-6 py-5 text-white shadow-nav sm:flex-row sm:text-left">
          <div className="text-center sm:text-left">
            <p className="text-body-sm font-semibold uppercase tracking-wide text-white/80">
              Kolio benchmark
            </p>
            <p className="mt-1 text-body-md text-white/90">
              Avg. views across the top {count} Instagram creators in our live index
            </p>
          </div>
          <div className="shrink-0 text-center sm:text-right">
            <div className="font-display text-4xl font-normal leading-none md:text-5xl">
              {fmt(avg)}
            </div>
            <div className="mt-1 text-body-sm text-white/80">avg. views / post</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
