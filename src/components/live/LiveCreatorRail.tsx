import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { BACKEND_ENABLED } from '@/lib/supabase';
import { getTopCreators } from '@/api/creators';
import type { Creator, CreatorFilters } from '@/api/types';
import Container from '@/components/ui/Container';
import CreatorCard from './CreatorCard';

/** A showcase grid of live creators (top by engagement, optionally filtered).
 *  Drop into any marketing page to make it run on real backend data. */
export default function LiveCreatorRail({
  title = 'Trending creators right now',
  subtitle,
  filters,
  count = 8,
}: { title?: string; subtitle?: string; filters?: CreatorFilters; count?: number }) {
  const [rows, setRows] = useState<Creator[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!BACKEND_ENABLED) return;
    let active = true;
    getTopCreators({ limit: count, ...filters })
      .then((r) => active && setRows(r.slice(0, count)))
      .catch((e) => console.error(e))
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, [count, JSON.stringify(filters)]);

  if (!BACKEND_ENABLED) return null;

  return (
    <section className="py-16">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="rounded-pill bg-coral-bg px-3 py-1 text-eyebrow font-bold text-brand">LIVE DATA</span>
            <h2 className="mt-3 font-display text-h3 leading-none">{title}</h2>
            {subtitle && <p className="mt-2 max-w-xl text-body text-foreground/60">{subtitle}</p>}
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center py-12"><Loader2 className="h-6 w-6 animate-spin text-brand" /></div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rows.map((c) => <CreatorCard key={c.id} c={c} />)}
          </div>
        )}
      </Container>
    </section>
  );
}
