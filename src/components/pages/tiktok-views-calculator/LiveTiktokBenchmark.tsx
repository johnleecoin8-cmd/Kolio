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
    <section className="canvas-warm pb-12 pt-2 md:pb-16">
      <Container>
        <div className="card-kit mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 rounded-2xl px-6 py-5 shadow-float-sm sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-pill surface-onchain text-mint">
              <Eye size={20} />
            </span>
            <div className="flex flex-col">
              <span className="eyebrow !text-foreground/50">Kolio TikTok benchmark</span>
              <span className="text-body-sm text-foreground/60">
                Live average across {count} top TikTok KOLs in our index
              </span>
            </div>
          </div>
          <div className="flex items-baseline gap-2 self-start sm:self-auto">
            <span className="num-display font-mono-tnum text-[2rem] leading-none text-brand">
              {fmt(avg)}
            </span>
            <span className="text-body-sm font-semibold text-foreground/50">avg views</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
