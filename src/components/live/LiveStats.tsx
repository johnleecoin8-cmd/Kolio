import { useEffect, useState } from 'react';
import { BACKEND_ENABLED } from '@/lib/supabase';
import { getStats } from '@/api/creators';
import type { CreatorStats } from '@/api/types';
import { fmt, pct } from './format';
import Container from '@/components/ui/Container';

/** Live aggregate numbers from the backend (creator_stats RPC).
 *  Renders nothing when the backend is off so the static clone is unaffected. */
export default function LiveStats({ heading = 'Real numbers, live from the platform' }: { heading?: string }) {
  const [s, setS] = useState<CreatorStats | null>(null);
  useEffect(() => {
    if (!BACKEND_ENABLED) return;
    getStats().then(setS).catch((e) => console.error(e));
  }, []);
  if (!BACKEND_ENABLED || !s) return null;

  const items = [
    { label: 'Creators indexed', value: fmt(s.total) },
    { label: 'Combined reach', value: fmt(s.total_reach) },
    { label: 'Verified KOLs', value: fmt(s.verified) },
    { label: 'Avg engagement', value: pct(s.avg_engagement) },
  ];
  return (
    <section className="py-14">
      <Container>
        <div className="rounded-xl bg-gradient-brand p-8 text-white md:p-12">
          <h2 className="max-w-2xl font-display text-h4 leading-tight">{heading}</h2>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {items.map((it) => (
              <div key={it.label}>
                <div className="font-display text-h3 leading-none">{it.value}</div>
                <div className="mt-1 text-body-sm text-white/80">{it.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
