import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';
import { searchCreators } from '@/api/creators';
import { BACKEND_ENABLED } from '@/lib/supabase';
import { fmt } from '@/components/live/format';
import Container from '@/components/ui/Container';

/** Live Kolio benchmark: average avg_views across the top 50 TikTok creators
 *  in the live index, shown next to the calculator result. Self-hides when the
 *  backend is off so it is safe to render unconditionally. */
export default function LiveTiktokBenchmark() {
  const [avg, setAvg] = useState<number | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!BACKEND_ENABLED) return;
    let alive = true;
    searchCreators({ platform: 'tiktok', sort: 'followers', limit: 50 })
      .then((rows) => {
        if (!alive || rows.length === 0) return;
        const total = rows.reduce((a, c) => a + Number(c.avg_views ?? 0), 0);
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
    <section className="bg-background pb-4 md:pb-8">
      <Container>
        <div className="mx-auto flex max-w-[920px] flex-col items-center justify-between gap-4 rounded-xl bg-gradient-brand px-6 py-5 text-white sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20">
              <Eye size={20} />
            </span>
            <div className="flex flex-col">
              <span className="text-body-sm font-semibold uppercase tracking-wide text-white/80">
                Kolio TikTok benchmark
              </span>
              <span className="text-body-sm text-white/70">
                Live average across {count} top TikTok KOLs in our index
              </span>
            </div>
          </div>
          <div className="flex items-baseline gap-2 self-start sm:self-auto">
            <span className="font-display text-[2rem] leading-none">
              {fmt(avg)}
            </span>
            <span className="text-body-sm font-semibold text-white/75">
              avg views
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
