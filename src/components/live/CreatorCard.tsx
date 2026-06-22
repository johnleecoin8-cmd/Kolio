import { Link } from 'react-router-dom';
import { BadgeCheck } from 'lucide-react';
import type { Creator } from '@/api/types';
import { fmt, pct, PLATFORM_LABEL } from './format';

/** Proof-based creator card → links to the full profile report. */
export default function CreatorCard({ c }: { c: Creator }) {
  const initials = (c.display_name || c.handle || '?')
    .split(' ').map((p) => p[0]).join('').slice(0, 2).toUpperCase();
  return (
    <Link
      to={`/creator/${c.id}`}
      className="group flex flex-col rounded-lg border border-gray-200 bg-white p-4 transition hover:border-brand/40 hover:shadow-nav"
    >
      <div className="flex items-center gap-3">
        {c.avatar_url
          ? <img src={c.avatar_url} alt="" loading="lazy" className="h-11 w-11 rounded-pill object-cover" />
          : <span className="flex h-11 w-11 items-center justify-center rounded-pill bg-gradient-brand text-body-sm font-bold text-white">{initials}</span>}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1 text-body-sm font-semibold text-foreground">
            <span className="truncate">{c.display_name}</span>
            {c.is_verified && <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-brand" />}
          </div>
          <div className="truncate text-eyebrow text-foreground/50">@{c.handle} · {PLATFORM_LABEL[c.platform] ?? c.platform}</div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <Stat label="Followers" value={fmt(c.followers)} />
        <Stat label="Eng. rate" value={pct(c.engagement_rate)} />
        <Stat label="Avg views" value={fmt(c.avg_views)} />
      </div>
      {c.category && (
        <span className="mt-3 self-start rounded-pill bg-coral-bg px-2 py-0.5 text-eyebrow font-semibold capitalize text-brand">
          {c.category}
        </span>
      )}
    </Link>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-gray-50 py-2">
      <div className="text-body-sm font-extrabold text-foreground">{value}</div>
      <div className="text-[10px] uppercase tracking-wide text-foreground/45">{label}</div>
    </div>
  );
}
