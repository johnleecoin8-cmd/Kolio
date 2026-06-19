import { useState } from 'react';
import {
  Users,
  TrendingUp,
  AlertTriangle,
  Clapperboard,
  Mail,
  PieChart,
  Instagram,
  Info,
  BadgeCheck,
} from 'lucide-react';
import type { Profile } from './data';
import { compact, pct } from './format';

/** One stat tile (icon + label on left, value on right). */
function StatTile({
  icon,
  label,
  value,
  info,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  info?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded border border-black/5 bg-white px-4 py-3.5">
      <span className="flex items-center gap-2 text-body-sm font-medium text-foreground/80">
        <span className="text-foreground/40">{icon}</span>
        {label}
        {info && <Info size={13} className="text-foreground/30" />}
      </span>
      <span className="text-body-sm font-semibold text-foreground">{value}</span>
    </div>
  );
}

function PanelHead({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-body-sm font-semibold text-foreground">
      {children}
    </h3>
  );
}

/** Avatar with fallback gradient circle when the proxied image fails. */
function Avatar({ profile }: { profile: Profile }) {
  const [err, setErr] = useState(false);
  const initials = profile.name
    .replace(/[^A-Za-z ]/g, '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
  return (
    <div className="relative h-[68px] w-[68px] shrink-0">
      {!err ? (
        <img
          src={profile.picture}
          alt={profile.name}
          onError={() => setErr(true)}
          className="h-[68px] w-[68px] rounded-full object-cover"
        />
      ) : (
        <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-gradient-to-br from-pink to-violet text-body font-semibold text-ink">
          {initials || '?'}
        </div>
      )}
      {profile.verified && (
        <BadgeCheck
          size={20}
          className="absolute -bottom-0.5 right-0 rounded-full bg-white fill-[#3897f0] text-white"
        />
      )}
    </div>
  );
}

/** Engagement-rate benchmark histogram (decorative; black = median, pink = creator). */
function Histogram() {
  const bars = [22, 34, 44, 56, 70, 86, 100, 78, 60, 46, 34, 24];
  const medianIdx = 6;
  const selfIdx = 10;
  return (
    <div>
      <div className="flex h-[120px] items-end gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            style={{ height: `${h}%` }}
            className={`flex-1 rounded-[3px] ${
              i === medianIdx
                ? 'bg-ink'
                : i === selfIdx
                  ? 'bg-pink'
                  : 'bg-gray-100'
            }`}
          />
        ))}
      </div>
      <div className="mt-2 flex">
        <span
          className="text-[11px] text-foreground/40"
          style={{ marginLeft: `${(medianIdx / bars.length) * 100}%` }}
        >
          Median
        </span>
      </div>
    </div>
  );
}

const GENDER_COLOR: Record<string, string> = {
  female: 'bg-coral',
  male: 'bg-purple',
};

export default function InfluencerCard({ profile }: { profile: Profile }) {
  return (
    <article className="grid grid-cols-1 gap-4 py-7 lg:grid-cols-[260px_1fr]">
      {/* Left column: identity */}
      <div className="rounded-lg border border-black/5 bg-white p-5">
        <Avatar profile={profile} />
        <h2 className="mt-4 text-body-md font-semibold leading-tight text-foreground">
          {profile.rank}. {profile.name}
        </h2>
        <p className="mt-1 text-body-sm text-foreground/50">
          {profile.location || '—'}
        </p>

        <p className="mt-4 whitespace-pre-line rounded border border-black/5 bg-background-soft p-3 text-[12px] leading-snug text-foreground/70">
          {profile.bio}
        </p>

        <div className="mt-4 flex items-center gap-2 text-body-sm text-foreground/80">
          <Instagram size={16} className="text-foreground/50" />
          <a
            href={`https://www.instagram.com/${profile.username}`}
            className="no-underline transition hover:underline"
          >
            @{profile.username}
          </a>
        </div>

        <ul className="mt-3 space-y-2 text-body-sm text-foreground/70">
          <li className="flex items-center gap-2">
            <Mail size={15} className="text-foreground/40" /> Check contact
            details
          </li>
          <li className="flex items-center gap-2">
            <PieChart size={15} className="text-foreground/40" /> Get audience
            breakdown
          </li>
        </ul>

        <a
          href="https://marketer.modash.io/register/marketer"
          className="mt-5 inline-flex h-10 items-center justify-center rounded-sm bg-ink px-5 text-body-sm font-semibold text-white no-underline shadow-btn transition hover:opacity-90"
        >
          Full Profile Data
        </a>
      </div>

      {/* Right column: stats grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <StatTile
          icon={<Users size={16} />}
          label="Followers"
          value={compact(profile.followers)}
        />
        <StatTile
          icon={<AlertTriangle size={16} />}
          label="Fake followers"
          value={pct(profile.fakeFollowers, 1)}
          info
        />
        <StatTile
          icon={<TrendingUp size={16} />}
          label="Engagement rate"
          value={pct(profile.engagementRate)}
          info
        />
        <StatTile
          icon={<Clapperboard size={16} />}
          label="Average Reel plays"
          value={compact(profile.averageReelPlays)}
        />

        {/* Audience gender */}
        <div className="rounded-lg border border-black/5 bg-white p-5">
          <PanelHead>Audience gender</PanelHead>
          <div className="space-y-3">
            {profile.gender.map((g) => (
              <div key={g.label}>
                <div className="mb-1 flex justify-between text-[11px] text-foreground/50">
                  <span className="capitalize">{g.label}</span>
                  <span>{pct(g.value, 1)}</span>
                </div>
                <div className="h-2 w-full rounded-pill bg-gray-100">
                  <div
                    style={{ width: `${g.value * 100}%` }}
                    className={`h-2 rounded-pill ${GENDER_COLOR[g.label] || 'bg-gray-300'}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top performing reels */}
        <div className="rounded-lg border border-black/5 bg-white p-5">
          <PanelHead>Top performing Reels</PanelHead>
          <ul className="space-y-3">
            {profile.reels.map((r, i) => (
              <li key={i} className="flex items-center justify-between gap-3">
                <span className="truncate text-body-sm text-foreground/80 underline decoration-foreground/20 underline-offset-2">
                  {r.title}
                </span>
                <span className="shrink-0 text-body-sm font-semibold text-foreground">
                  {compact(r.likes)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Engagement benchmark */}
        <div className="rounded-lg border border-black/5 bg-white p-5">
          <PanelHead>Engagement rate benchmark</PanelHead>
          <Histogram />
        </div>

        {/* Audience location by country */}
        <div className="rounded-lg border border-black/5 bg-white p-5">
          <PanelHead>Audience location by country</PanelHead>
          <ul className="space-y-2.5">
            {profile.countries.map((c) => (
              <li key={c.name}>
                <div className="mb-1 flex justify-between text-body-sm text-foreground/80">
                  <span>{c.name}</span>
                  <span className="font-semibold">{pct(c.weight)}</span>
                </div>
                <div className="h-1.5 w-full rounded-pill bg-gray-100">
                  <div
                    style={{ width: `${c.weight * 100}%` }}
                    className="h-1.5 rounded-pill bg-ink"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
