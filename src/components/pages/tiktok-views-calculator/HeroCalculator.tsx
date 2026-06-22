import { useMemo, useState } from 'react';
import { Search, Eye, Heart, Users, BadgeCheck, Play } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Deterministic mock crypto-KOL profiles keyed by handle so the result card
 *  shows real-looking Kolio data. On the live platform this renders verified
 *  reach pulled from Kolio's KOL graph; here we approximate the visual and
 *  compute the average from recent videos. */
type Profile = {
  handle: string;
  name: string;
  niche: string;
  followers: string;
  engagement: string;
  /** recent video view counts (used to compute average views) */
  recent: number[];
  avatarBg: string;
};

const PROFILES: Record<string, Profile> = {
  cryptobanter: {
    handle: 'cryptobanter',
    name: 'Crypto Banter',
    niche: 'Trading / Markets',
    followers: '1.2M',
    engagement: '4.6%',
    recent: [184_000, 92_000, 310_000, 145_000, 121_000, 168_000],
    avatarBg: 'from-pink-light via-pink to-pink-hot',
  },
  defidegen: {
    handle: 'defidegen',
    name: 'DeFi Degen',
    niche: 'DeFi / Yield',
    followers: '486K',
    engagement: '6.1%',
    recent: [74_000, 58_000, 91_000, 63_000, 47_000, 82_000],
    avatarBg: 'from-violet-light via-violet to-violet-dark',
  },
};

/** Pale accent gradients so the recent-video thumbnails read as real cards. */
const THUMB_BG = [
  'from-pink-light to-pink',
  'from-violet-light to-violet',
  'from-orange-light to-orange',
  'from-coral-light to-coral',
  'from-purple-light to-purple',
  'from-pink-bg to-pink-light',
];

const formatViews = (n: number) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return `${n}`;
};

/** Hero: H1 + subtext + the TikTok average-views calculator widget. */
export default function HeroCalculator() {
  const [query, setQuery] = useState('');

  const profile = useMemo(() => {
    const key = query.trim().replace(/^@/, '').toLowerCase();
    return PROFILES[key] ?? PROFILES['cryptobanter'];
  }, [query]);

  const avgViews = useMemo(() => {
    const total = profile.recent.reduce((a, b) => a + b, 0);
    return total / profile.recent.length;
  }, [profile]);

  return (
    <section className="bg-background pt-16 pb-16 md:pt-24 md:pb-24">
      <Container>
        <div className="flex justify-center">
          <span className="eyebrow">Free TikTok reach check</span>
        </div>
        <h1 className="display-lg mx-auto mt-4 max-w-[18ch] text-center font-display text-[2.75rem] uppercase text-foreground md:text-[5rem]">
          TikTok KOL{' '}
          <span className="text-gradient-brand">Views</span> Calculator
        </h1>
        <p className="mx-auto mt-6 max-w-[620px] text-center text-body text-foreground/75 md:text-body-md">
          See any crypto KOL's real average views, engagement, and recent
          performance on TikTok before you spend a dollar on a campaign. Free,
          no sign-up — proof over promises.
        </p>

        {/* Search bar — single rounded container */}
        <div className="mx-auto mt-10 flex max-w-[560px] items-center gap-3 rounded-pill bg-background-soft p-2 pl-5">
          <Search size={20} className="shrink-0 text-foreground/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="@cryptobanter"
            className="h-11 flex-1 bg-transparent text-body text-foreground outline-none placeholder:text-foreground/40 md:text-body-md"
          />
          <button className="inline-flex h-12 shrink-0 items-center justify-center rounded-pill bg-ink px-6 text-body font-semibold text-white transition hover:opacity-90">
            Check KOL
          </button>
        </div>

        {/* Result card — violet-bordered widget frame */}
        <div className="mx-auto mt-10 max-w-[920px] rounded-xl bg-background-soft p-2 md:p-3">
          <div className="rounded-lg border-2 border-violet/50 bg-white p-5 md:p-8">
            {/* Profile header */}
            <div className="flex flex-col gap-5 border-b border-black/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`h-16 w-16 shrink-0 rounded-full bg-gradient-to-br ${profile.avatarBg}`}
                />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-body-md font-semibold text-foreground">
                      {profile.name}
                    </span>
                    <BadgeCheck size={18} className="text-[#4AABED]" />
                  </div>
                  <span className="text-body-sm text-foreground/55">
                    @{profile.handle} · {profile.niche}
                  </span>
                </div>
              </div>
              <a
                href="/demo-confirmation"
                className="inline-flex h-11 items-center justify-center rounded-pill bg-ink px-5 text-body-sm font-semibold text-white transition hover:opacity-90"
              >
                View full report
              </a>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-3">
              <Metric
                icon={<Eye size={20} />}
                label="Average views"
                value={formatViews(avgViews)}
                chip="Real reach"
                accent
              />
              <Metric
                icon={<Heart size={20} />}
                label="Engagement rate"
                value={profile.engagement}
              />
              <Metric
                icon={<Users size={20} />}
                label="Followers"
                value={profile.followers}
              />
            </div>

            {/* Views by video — intentional bar chart (real proportions) */}
            <div className="border-b border-black/10 pb-6">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-body-sm font-semibold text-foreground/70">
                  Views by video · last {profile.recent.length}
                </p>
                <span className="chip chip-onchain">Real reach, not followers</span>
              </div>
              <div className="flex h-28 items-end gap-2">
                {profile.recent.map((v, i) => {
                  const max = Math.max(...profile.recent);
                  const pct = Math.round((v / max) * 100);
                  return (
                    <div
                      key={i}
                      className="group relative flex flex-1 flex-col items-center justify-end"
                    >
                      <span className="mb-1 font-mono-tnum text-[0.6rem] font-semibold text-foreground/45">
                        {formatViews(v)}
                      </span>
                      <div
                        className="w-full rounded-t bg-gradient-brand"
                        style={{ height: `${Math.max(pct, 8)}%` }}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="mt-2 h-px w-full bg-black/10" />
            </div>

            {/* Top videos */}
            <div className="pt-6">
              <p className="mb-3 text-body-sm font-semibold text-foreground/70">
                Recent videos
              </p>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                {profile.recent.map((v, i) => (
                  <div
                    key={i}
                    className={`relative flex aspect-[9/16] flex-col justify-end overflow-hidden rounded-lg bg-gradient-to-br ${THUMB_BG[i % THUMB_BG.length]} p-2`}
                  >
                    <span className="absolute left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 shadow-sm">
                      <Play size={13} className="ml-0.5 fill-ink text-ink" />
                    </span>
                    <span className="relative inline-flex items-center gap-1 self-start rounded-pill bg-ink/70 px-1.5 py-0.5 text-[0.65rem] font-semibold text-white">
                      <Eye size={10} />
                      {formatViews(v)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Metric({
  icon,
  label,
  value,
  accent = false,
  chip,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent?: boolean;
  chip?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-lg p-5 text-center ${
        accent ? 'bg-ink text-white' : 'bg-background-soft text-foreground'
      }`}
    >
      <span className={accent ? 'text-pink' : 'text-foreground/70'}>{icon}</span>
      <span className="num-display font-mono-tnum text-[1.75rem] leading-none">
        {value}
      </span>
      <span
        className={`text-body-sm ${accent ? 'text-white/70' : 'text-foreground/55'}`}
      >
        {label}
      </span>
      {chip && <span className="chip chip-onchain mt-0.5">{chip}</span>}
    </div>
  );
}
