import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BadgeCheck, Loader2 } from 'lucide-react';
import { BACKEND_ENABLED } from '@/lib/supabase';
import { searchCreators } from '@/api/creators';
import type { Creator, CreatorFilters } from '@/api/types';
import Container from '@/components/ui/Container';

const PLATFORMS = ['', 'instagram', 'tiktok', 'youtube', 'x'];
const CATEGORIES = ['', 'crypto', 'beauty', 'fitness', 'fashion', 'food', 'tech', 'gaming', 'travel', 'finance', 'lifestyle'];
const fmt = (n: number) => n >= 1e6 ? (n / 1e6).toFixed(1) + 'M' : n >= 1e3 ? (n / 1e3).toFixed(1) + 'K' : '' + n;

/** Live demo: real discovery powered by the Supabase backend (search_creators RPC).
 *  Renders only when VITE_USE_BACKEND is on; otherwise the page stays a static clone. */
export default function LiveDiscovery() {
  const [filters, setFilters] = useState<CreatorFilters>({ sort: 'followers', limit: 12 });
  const [rows, setRows] = useState<Creator[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!BACKEND_ENABLED) return;
    let active = true;
    setLoading(true);
    const t = setTimeout(() => {
      searchCreators(filters)
        .then((r) => active && setRows(r))
        .catch((e) => console.error(e))
        .finally(() => active && setLoading(false));
    }, 250);
    return () => { active = false; clearTimeout(t); };
  }, [filters]);

  if (!BACKEND_ENABLED) return null;

  const set = (patch: Partial<CreatorFilters>) => setFilters((f) => ({ ...f, ...patch }));

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-6 flex items-center gap-2">
          <span className="rounded-pill bg-lime px-3 py-1 text-eyebrow font-bold text-ink">LIVE DEMO</span>
          <span className="text-body-sm text-foreground/60">Powered by your Supabase backend · {rows.length} of 500 seeded creators</span>
        </div>
        <h2 className="font-display text-h3 uppercase leading-none">Search the database</h2>

        {/* controls */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-btn">
            <Search className="h-4 w-4 text-foreground/40" />
            <input
              placeholder="Search name, handle, category…"
              className="w-64 bg-transparent text-body-sm outline-none"
              onChange={(e) => set({ q: e.target.value })}
            />
          </div>
          <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-body-sm shadow-btn"
            onChange={(e) => set({ platform: e.target.value || undefined })}>
            {PLATFORMS.map((p) => <option key={p} value={p}>{p ? p[0].toUpperCase() + p.slice(1) : 'All platforms'}</option>)}
          </select>
          <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-body-sm shadow-btn"
            onChange={(e) => set({ category: e.target.value || undefined })}>
            {CATEGORIES.map((c) => <option key={c} value={c}>{c ? c[0].toUpperCase() + c.slice(1) : 'All categories'}</option>)}
          </select>
          <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-body-sm shadow-btn"
            onChange={(e) => set({ sort: e.target.value as CreatorFilters['sort'] })}>
            <option value="followers">Sort: Followers</option>
            <option value="engagement">Sort: Engagement</option>
          </select>
          {loading && <Loader2 className="h-4 w-4 animate-spin text-foreground/40" />}
        </div>

        {/* results table */}
        <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-nav">
          <table className="w-full text-left text-body-sm">
            <thead className="border-b border-gray-200 bg-gray-50 text-eyebrow uppercase tracking-wide text-foreground/50">
              <tr>
                <th className="px-4 py-3 font-semibold">Creator</th>
                <th className="px-4 py-3 font-semibold">Platform</th>
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 text-right font-semibold">Followers</th>
                <th className="px-4 py-3 text-right font-semibold">Engagement</th>
                <th className="px-4 py-3 text-right font-semibold">Country</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((c) => (
                <tr key={c.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <Link to={`/creator/${c.id}`} className="flex items-center gap-3">
                      <img src={c.avatar_url ?? ''} alt="" className="h-9 w-9 rounded-pill object-cover" loading="lazy" />
                      <div>
                        <div className="flex items-center gap-1 font-semibold text-foreground hover:text-brand">
                          {c.display_name}
                          {c.is_verified && <BadgeCheck className="h-4 w-4 text-blue" />}
                        </div>
                        <div className="text-eyebrow text-foreground/50">@{c.handle}</div>
                      </div>
                    </Link>
                  </td>
                  <td className="px-4 py-3 capitalize text-foreground/70">{c.platform}</td>
                  <td className="px-4 py-3 capitalize text-foreground/70">{c.category}</td>
                  <td className="px-4 py-3 text-right font-semibold tabular-nums">{fmt(c.followers)}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{(c.engagement_rate * 100).toFixed(1)}%</td>
                  <td className="px-4 py-3 text-right text-foreground/70">{c.country}</td>
                </tr>
              ))}
              {!loading && rows.length === 0 && (
                <tr><td colSpan={6} className="px-4 py-10 text-center text-foreground/50">No creators match these filters.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
