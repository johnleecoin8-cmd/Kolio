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

/** One stat tile (icon + label on left, value on right). Locked values render
 *  as a blurred placeholder pill to match modash's paywalled preview. */
function StatTile({
  icon,
  label,
  value,
  info,
  locked,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  info?: boolean;
  locked?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded border border-black/5 bg-white px-4 py-3.5">
      <span className="flex items-center gap-2 text-body-sm font-medium text-foreground/80">
        <span className="text-foreground/40">{icon}</span>
        {label}
        {info && <Info size={13} className="text-foreground/30" />}
      </span>
      {locked ? (
        <span
          aria-hidden
          className="select-none rounded-sm bg-gray-200/80 text-body-sm font-semibold text-transparent blur-[3px]"
        >
          {value}
        </span>
      ) : (
        <span className="text-body-sm font-semibold text-foreground">
          {value}
        </span>
      )}
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

/** Small circular avatar used as the creator marker on the histogram. */
function MiniAvatar({ profile }: { profile: Profile }) {
  const [err, setErr] = useState(false);
  return !err ? (
    <img
      src={profile.picture}
      alt=""
      onError={() => setErr(true)}
      className="h-7 w-7 rounded-full border-2 border-white object-cover shadow-btn"
    />
  ) : (
    <span className="block h-7 w-7 rounded-full border-2 border-white bg-gradient-to-br from-pink to-violet shadow-btn" />
  );
}

/** Engagement-rate benchmark histogram: descending bars, black = median,
 *  pink rightmost bar carries the creator's avatar (matches modash UI). */
function Histogram({ avatar }: { avatar: React.ReactNode }) {
  const bars = [100, 88, 72, 62, 52, 45, 40, 36, 32, 28];
  const medianIdx = 3;
  const selfIdx = bars.length - 1;
  return (
    <div>
      <div className="flex h-[120px] items-end gap-2">
        {bars.map((h, i) => (
          <div
            key={i}
            className="relative flex flex-1 items-end"
            style={{ height: '100%' }}
          >
            <div
              style={{ height: `${h}%` }}
              className={`relative w-full rounded-[5px] ${
                i === medianIdx
                  ? 'bg-ink'
                  : i === selfIdx
                    ? 'bg-pink'
                    : 'bg-gray-100'
              }`}
            >
              {i === selfIdx && (
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-full">
                  {avatar}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex">
        <span
          className="text-center text-[11px] text-foreground/40"
          style={{
            width: `${(1 / bars.length) * 100}%`,
            marginLeft: `${(medianIdx / bars.length) * 100}%`,
          }}
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
          locked
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
          locked
        />

        {/* Audience gender — bars with paywall-blurred labels + fills */}
        <div className="rounded-lg border border-black/5 bg-white p-5">
          <PanelHead>Audience gender</PanelHead>
          <div className="space-y-5">
            {profile.gender.map((g) => (
              <div key={g.label}>
                <span
                  aria-hidden
                  className="mb-1.5 inline-block h-2.5 w-9 select-none rounded-sm bg-gray-200/80 blur-[3px]"
                />
                <div className="h-2.5 w-full rounded-pill bg-gray-100">
                  <div
                    style={{ width: `${g.value * 100}%` }}
                    className={`h-2.5 rounded-pill blur-[2px] ${GENDER_COLOR[g.label] || 'bg-gray-300'}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top performing reels — title links only (likes are paywalled) */}
        <div className="rounded-lg border border-black/5 bg-white p-5">
          <PanelHead>Top performing Reels</PanelHead>
          <ul className="space-y-3">
            {profile.reels.map((r, i) => (
              <li key={i}>
                <a
                  href="https://marketer.modash.io/register/marketer"
                  className="line-clamp-2 text-body-sm text-foreground/80 underline decoration-foreground/30 underline-offset-2 transition hover:text-foreground"
                >
                  {r.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Engagement benchmark */}
        <div className="rounded-lg border border-black/5 bg-white p-5">
          <PanelHead>Engagement rate benchmark</PanelHead>
          <Histogram avatar={<MiniAvatar profile={profile} />} />
        </div>

        {/* Audience location by country */}
        <div className="rounded-lg border border-black/5 bg-white p-5">
          <PanelHead>Audience location by country</PanelHead>
          <ul className="space-y-2.5">
            {profile.countries.map((c) => (
              <li key={c.name}>
                <div className="mb-1 flex items-center justify-between text-body-sm text-foreground/80">
                  <span>{c.name}</span>
                  <span
                    aria-hidden
                    className="select-none rounded-sm bg-gray-200/80 font-semibold text-transparent blur-[3px]"
                  >
                    {pct(c.weight)}
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-pill bg-gray-100">
                  <div
                    style={{ width: `${c.weight * 100}%` }}
                    className="h-1.5 rounded-pill bg-ink blur-[1px]"
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
