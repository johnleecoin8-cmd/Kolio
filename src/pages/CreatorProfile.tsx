import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell,
} from 'recharts';
import { BadgeCheck, ArrowLeft, ShieldCheck, Loader2 } from 'lucide-react';
import { BACKEND_ENABLED } from '@/lib/supabase';
import { getCreator, getMetrics, getAudience, getContent, getLookalikes } from '@/api/creators';
import type { Creator, AudienceRow, ContentRow } from '@/api/types';
import Container from '@/components/ui/Container';
import CreatorCard from '@/components/live/CreatorCard';
import { fmt, pct, PLATFORM_LABEL } from '@/components/live/format';

const PIE = ['hsl(var(--brand))', 'hsl(var(--brand-coral))', 'hsl(var(--coral))', 'hsl(var(--purple))', 'hsl(var(--gray-300))'];

export default function CreatorProfile() {
  const { id = '' } = useParams();
  const [c, setC] = useState<Creator | null>(null);
  const [metrics, setMetrics] = useState<any[]>([]);
  const [audience, setAudience] = useState<AudienceRow[]>([]);
  const [content, setContent] = useState<ContentRow[]>([]);
  const [similar, setSimilar] = useState<Creator[]>([]);
  const [state, setState] = useState<'loading' | 'ok' | 'error'>('loading');

  useEffect(() => {
    if (!BACKEND_ENABLED) { setState('error'); return; }
    let active = true;
    setState('loading');
    getCreator(id)
      .then(async (cr) => {
        if (!cr) { if (active) setState('error'); return; }
        if (!active) return;
        setC(cr);
        const [m, a, ct, lk] = await Promise.all([
          getMetrics(id), getAudience(id), getContent(id), getLookalikes(cr),
        ]);
        if (!active) return;
        setMetrics(m); setAudience(a); setContent(ct); setSimilar(lk);
        setState('ok');
      })
      .catch(() => active && setState('error'));
    return () => { active = false; };
  }, [id]);

  if (state === 'loading') {
    return <div className="flex min-h-[60vh] items-center justify-center"><Loader2 className="h-7 w-7 animate-spin text-brand" /></div>;
  }
  if (state === 'error' || !c) {
    return (
      <Container>
        <div className="py-24 text-center">
          <h1 className="font-display text-h3">Creator not found</h1>
          <p className="mt-3 text-foreground/60">This profile isn’t available{!BACKEND_ENABLED ? ' — backend is off in this environment.' : '.'}</p>
          <Link to="/influencer-database" className="mt-6 inline-block rounded-pill bg-brand px-5 py-2.5 font-semibold text-white">Browse the database</Link>
        </div>
      </Container>
    );
  }

  const growth = metrics.map((m: any) => ({ month: String(m.captured_on).slice(0, 7), followers: m.followers }));
  const byDim = (d: string) => audience.filter((a) => a.dimension === d).map((a) => ({ name: a.bucket, value: +(a.share * 100).toFixed(1) }));
  const realPct = Math.max(0, 1 - (c.fake_follower_pct ?? 0));

  return (
    <div className="py-10 md:py-14">
      <Container>
        <Link to="/influencer-database" className="inline-flex items-center gap-1 text-body-sm text-foreground/60 hover:text-brand">
          <ArrowLeft className="h-4 w-4" /> Back to database
        </Link>

        {/* header */}
        <div className="mt-6 flex flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 md:flex-row md:items-center md:p-8">
          {c.avatar_url
            ? <img src={c.avatar_url} alt="" className="h-20 w-20 rounded-pill object-cover" />
            : <span className="flex h-20 w-20 items-center justify-center rounded-pill bg-gradient-brand text-h4 font-bold text-white">{(c.display_name||c.handle).slice(0,2).toUpperCase()}</span>}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="font-display text-h3 leading-none">{c.display_name}</h1>
              {c.is_verified && <BadgeCheck className="h-5 w-5 text-brand" />}
            </div>
            <div className="mt-1 text-foreground/60">@{c.handle} · {PLATFORM_LABEL[c.platform] ?? c.platform} · <span className="capitalize">{c.category}</span> · {c.country}</div>
            {c.bio && <p className="mt-3 max-w-2xl text-body text-foreground/70">{c.bio}</p>}
          </div>
        </div>

        {/* headline metrics */}
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[['Followers', fmt(c.followers)], ['Engagement', pct(c.engagement_rate)], ['Avg views', fmt(c.avg_views)], ['Avg likes', fmt(c.avg_likes)]].map(([l, v]) => (
            <div key={l} className="rounded-lg border border-gray-200 bg-white p-5">
              <div className="font-display text-h4 leading-none">{v}</div>
              <div className="mt-1 text-body-sm text-foreground/55">{l}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* growth chart */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 lg:col-span-2">
            <h2 className="font-display text-h5">Follower growth · last 12 months</h2>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={growth} margin={{ left: -10, right: 8, top: 8 }}>
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--brand))" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="hsl(var(--brand))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--gray-200))" vertical={false} />
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="hsl(var(--gray-400))" />
                  <YAxis tickFormatter={(v) => fmt(v)} tick={{ fontSize: 11 }} stroke="hsl(var(--gray-400))" width={48} />
                  <Tooltip formatter={(v: any) => fmt(v)} />
                  <Area type="monotone" dataKey="followers" stroke="hsl(var(--brand))" strokeWidth={2} fill="url(#g)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* credibility */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="flex items-center gap-2 font-display text-h5"><ShieldCheck className="h-5 w-5 text-brand" /> Audience credibility</h2>
            <div className="mt-6 space-y-4">
              {[['Real followers', realPct, 'bg-brand'], ['Engaged audience', c.engagement_rate * 6, 'bg-brand-coral'], ['Suspicious / bots', c.fake_follower_pct ?? 0, 'bg-gray-300']].map(([l, v, cls]) => (
                <div key={l as string}>
                  <div className="mb-1 flex justify-between text-eyebrow text-foreground/60"><span>{l}</span><span>{pct(Math.min(1, v as number), 0)}</span></div>
                  <div className="h-2.5 rounded-pill bg-gray-100"><div className={`h-full rounded-pill ${cls}`} style={{ width: pct(Math.min(1, v as number), 0) }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* audience breakdowns */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[['Top countries', 'country'], ['Age', 'age'], ['Gender', 'gender']].map(([title, dim]) => (
            <div key={dim} className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-display text-h5">{title}</h3>
              <div className="mt-2 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={byDim(dim)} dataKey="value" nameKey="name" innerRadius={38} outerRadius={64} paddingAngle={2}>
                      {byDim(dim).map((_, i) => <Cell key={i} fill={PIE[i % PIE.length]} />)}
                    </Pie>
                    <Tooltip formatter={(v: any) => v + '%'} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-2 space-y-1">
                {byDim(dim).slice(0, 4).map((b, i) => (
                  <div key={b.name} className="flex items-center justify-between text-body-sm">
                    <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm" style={{ background: PIE[i % PIE.length] }} /><span className="capitalize">{b.name}</span></span>
                    <span className="text-foreground/60">{b.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* content grid */}
        {content.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-h4">Recent content</h2>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
              {content.map((p) => (
                <div key={p.id} className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                  <img src={p.thumbnail_url ?? ''} alt="" loading="lazy" className="aspect-square w-full object-cover" />
                  <div className="flex items-center justify-between px-3 py-2 text-eyebrow text-foreground/60">
                    <span className="capitalize">{p.kind}</span>
                    <span>{fmt(p.likes)} likes · {fmt(p.comments)} comments</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* lookalikes */}
        {similar.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-h4">Similar creators</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {similar.map((s) => <CreatorCard key={s.id} c={s} />)}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
