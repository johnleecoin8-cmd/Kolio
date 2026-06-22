import { useEffect, useState } from 'react';
import Container from '@/components/ui/Container';
import { BACKEND_ENABLED } from '@/lib/supabase';
import { getStats } from '@/api/creators';
import { fmt, pct } from '@/components/live/format';
import type { CreatorStats } from '@/api/types';

/**
 * Live benchmark card for the engagement-rate calculator: shows the real
 * average engagement across all Kolio creators so users can compare their
 * own number against the live network. Self-hides when the backend is off.
 */
export default function LiveBenchmark() {
  const [stats, setStats] = useState<CreatorStats | null>(null);

  useEffect(() => {
    if (!BACKEND_ENABLED) return;
    let alive = true;
    getStats().then((s) => {
      if (alive) setStats(s);
    });
    return () => {
      alive = false;
    };
  }, []);

  if (!BACKEND_ENABLED || !stats) return null;

  return (
    <section className="bg-background pb-4">
      <Container>
        <div className="mx-auto flex max-w-[42rem] flex-col items-center gap-3 rounded-lg bg-gradient-brand px-6 py-6 text-center text-white md:flex-row md:gap-6 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-eyebrow font-semibold uppercase tracking-wide text-white/70">
              Kolio benchmark
            </span>
            <span className="font-display text-[2rem] font-semibold leading-none">
              {pct(stats.avg_engagement)}
            </span>
          </div>
          <p className="text-body-md leading-snug text-white/90">
            Live average engagement across {fmt(stats.total)} verified-and-tracked
            crypto KOLs on Kolio. Compare your creator&apos;s rate above against the
            real network.
          </p>
        </div>
      </Container>
    </section>
  );
}
