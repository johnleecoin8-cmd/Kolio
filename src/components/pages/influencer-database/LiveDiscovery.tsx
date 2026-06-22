import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BadgeCheck, Loader2, ShieldCheck } from 'lucide-react';
import { BACKEND_ENABLED } from '@/lib/supabase';
import { searchCreators } from '@/api/creators';
import type { Creator, CreatorFilters } from '@/api/types';
import { computeProofScore } from '@/components/kit/ProofScore';
import Container from '@/components/ui/Container';

const PLATFORMS = ['', 'x', 'youtube', 'telegram', 'tiktok'];
const CATEGORIES = ['', 'crypto', 'defi', 'trading', 'nft', 'gaming', 'finance'];
const fmt = (n: number) => (n >= 1e6 ? (n / 1e6).toFixed(1) + 'M' : n >= 1e3 ? (n / 1e3).toFixed(1) + 'K' : '' + n);

/** Static rows shown when the live backend is off, so the discovery surface is
 *  never empty. These are illustrative Kolio index entries, scored on-chain. */
const SAMPLE: Array<{ id: string; name: string; handle: string; platform: string; category: string; followers: number; er: number; score: number }> = [
  { id: 's1', name: 'Onchain Ana', handle: 'onchain_ana', platform: 'x', category: 'defi', followers: 412000, er: 0.061, score: 94 },
  { id: 's2', name: 'L2 Maxi', handle: 'l2maxi', platform: 'youtube', category: 'crypto', followers: 188000, er: 0.052, score: 91 },
  { id: 's3', name: 'Mint Signal', handle: 'mintsignal', platform: 'telegram', category: 'nft', followers: 96400, er: 0.073, score: 88 },
  { id: 's4', name: 'Perps Desk', handle: 'perpsdesk', platform: 'x', category: 'trading', followers: 254000, er: 0.044, score: 86 },
  { id: 's5', name: 'Yield Notes', handle: 'yieldnotes', platform: 'youtube', category: 'finance', followers: 61200, er: 0.058, score: 83 },
];

/** Live crypto-KOL discovery, restyled to the calm-premium language: a floating
 *  search panel over a soft warm canvas, with a proof-scored result table.
 *  Uses the Supabase backend when enabled, and a static index slice otherwise. */
export default function LiveDiscovery() {
  const [filters, setFilters] = useState<CreatorFilters>({ sort: 'followers', limit: 12, category: 'crypto' });
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

  const set = (patch: Partial<CreatorFilters>) => setFilters((f) => ({ ...f, ...patch }));
  const live = BACKEND_ENABLED;

  return (
    <section className="canvas-warm py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow inline-flex items-center gap-2 text-foreground/55">
            <span className="h-1.5 w-1.5 rounded-pill bg-brand-coral" /> {live ? 'Live discovery' : 'Discovery preview'}
          </span>
          <h2 className="display-light mt-4 text-[2.25rem] leading-[1.05] text-foreground md:text-[3.25rem]">
            Search the crypto KOL index, scored on <span className="text-gradient-brand">proof</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-body-md text-foreground/60">
            Every creator carries a single 0–100 Proof Score: real reach, bot-adjusted engagement,
            and on-chain audience quality. Filter to the few who will actually move your token.
          </p>
        </div>

        {/* floating search panel */}
        <div className="card-kit shadow-float mx-auto mt-12 max-w-5xl rounded-2xl p-4 md:p-5">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex min-w-[16rem] flex-1 items-center gap-2 rounded-pill border border-black/10 bg-white px-4 py-2.5">
              <Search className="h-4 w-4 text-foreground/40" />
              <input
                placeholder="Search handle, niche, chain…"
                className="w-full bg-transparent text-body-sm outline-none placeholder:text-foreground/40"
                onChange={(e) => set({ q: e.target.value })}
              />
            </div>
            <select
              className="rounded-pill border border-black/10 bg-white px-4 py-2.5 text-body-sm capitalize outline-none"
              defaultValue=""
              onChange={(e) => set({ platform: e.target.value || undefined })}
            >
              {PLATFORMS.map((p) => <option key={p} value={p}>{p ? p[0].toUpperCase() + p.slice(1) : 'All platforms'}</option>)}
            </select>
            <select
              className="rounded-pill border border-black/10 bg-white px-4 py-2.5 text-body-sm capitalize outline-none"
              defaultValue="crypto"
              onChange={(e) => set({ category: e.target.value || undefined })}
            >
              {CATEGORIES.map((c) => <option key={c} value={c}>{c ? c[0].toUpperCase() + c.slice(1) : 'All niches'}</option>)}
            </select>
            <select
              className="rounded-pill border border-black/10 bg-white px-4 py-2.5 text-body-sm outline-none"
              onChange={(e) => set({ sort: e.target.value as CreatorFilters['sort'] })}
            >
              <option value="followers">Sort: Reach</option>
              <option value="engagement">Sort: Engagement</option>
            </select>
            {loading && <Loader2 className="h-4 w-4 animate-spin text-brand" />}
          </div>

          {/* results */}
          <div className="mt-4 overflow-hidden rounded-xl border border-black/5">
            <table className="w-full text-left text-body-sm">
              <thead className="bg-background-warm text-eyebrow uppercase tracking-wide text-foreground/45">
                <tr>
                  <th className="px-4 py-3 font-semibold">Creator</th>
                  <th className="px-4 py-3 font-semibold">Niche</th>
                  <th className="px-4 py-3 text-right font-semibold">Reach</th>
                  <th className="px-4 py-3 text-right font-semibold">Engagement</th>
                  <th className="px-4 py-3 text-right font-semibold">Proof</th>
                </tr>
              </thead>
              <tbody>
                {live
                  ? rows.map((c) => {
                      const score = computeProofScore({
                        engagement_rate: c.engagement_rate,
                        fake_follower_pct: (c as { fake_follower_pct?: number }).fake_follower_pct,
                        is_verified: c.is_verified,
                        followers: c.followers,
                      });
                      return (
                        <tr key={c.id} className="border-t border-black/5 transition hover:bg-gray-50">
                          <td className="px-4 py-3">
                            <Link to={`/creator/${c.id}`} className="flex items-center gap-3">
                              <span className="grid h-9 w-9 place-items-center rounded-pill bg-gradient-brand text-eyebrow font-bold text-white">
                                {c.display_name.slice(0, 2).toUpperCase()}
                              </span>
                              <span>
                                <span className="flex items-center gap-1 font-semibold text-foreground">
                                  {c.display_name}
                                  {c.is_verified && <BadgeCheck className="h-3.5 w-3.5 text-brand" />}
                                </span>
                                <span className="text-eyebrow text-foreground/50">@{c.handle}</span>
                              </span>
                            </Link>
                          </td>
                          <td className="px-4 py-3 capitalize text-foreground/65">{c.category}</td>
                          <td className="px-4 py-3 text-right font-mono-tnum text-foreground/80">{fmt(c.followers)}</td>
                          <td className="px-4 py-3 text-right font-mono-tnum text-foreground/80">{(c.engagement_rate * 100).toFixed(1)}%</td>
                          <td className="px-4 py-3 text-right">
                            <ScoreChip score={score} />
                          </td>
                        </tr>
                      );
                    })
                  : SAMPLE.map((c) => (
                      <tr key={c.id} className="border-t border-black/5 transition hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <span className="flex items-center gap-3">
                            <span className="grid h-9 w-9 place-items-center rounded-pill bg-gradient-brand text-eyebrow font-bold text-white">
                              {c.name.slice(0, 2).toUpperCase()}
                            </span>
                            <span>
                              <span className="flex items-center gap-1 font-semibold text-foreground">
                                {c.name}
                                <BadgeCheck className="h-3.5 w-3.5 text-brand" />
                              </span>
                              <span className="text-eyebrow text-foreground/50">@{c.handle} · {c.platform.toUpperCase()}</span>
                            </span>
                          </span>
                        </td>
                        <td className="px-4 py-3 capitalize text-foreground/65">{c.category}</td>
                        <td className="px-4 py-3 text-right font-mono-tnum text-foreground/80">{fmt(c.followers)}</td>
                        <td className="px-4 py-3 text-right font-mono-tnum text-foreground/80">{(c.er * 100).toFixed(1)}%</td>
                        <td className="px-4 py-3 text-right">
                          <ScoreChip score={c.score} />
                        </td>
                      </tr>
                    ))}
                {live && !loading && rows.length === 0 && (
                  <tr><td colSpan={5} className="px-4 py-10 text-center text-foreground/50">No creators match these filters.</td></tr>
                )}
              </tbody>
            </table>
          </div>
          <p className="mt-3 flex items-center gap-1.5 font-mono-tnum text-eyebrow text-foreground/40">
            <ShieldCheck className="h-3.5 w-3.5 text-brand" />
            {live ? `Live · ${rows.length} of 500 seeded creators` : 'Preview · illustrative slice of the Kolio index'}
          </p>
        </div>
      </Container>
    </section>
  );
}

function ScoreChip({ score }: { score: number }) {
  const tone = score >= 90 ? 'bg-coral-bg text-brand' : 'bg-gray-100 text-foreground/70';
  return <span className={`num-display rounded-pill px-2.5 py-1 text-eyebrow font-bold ${tone}`}>{score}</span>;
}
