import { useMemo, useState } from 'react';
import { Search, Eye, Heart, Users, BadgeCheck, Play, ArrowRight } from 'lucide-react';
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
  initials: string;
};

const PROFILES: Record<string, Profile> = {
  cryptobanter: {
    handle: 'cryptobanter',
    name: 'Crypto Banter',
    niche: 'Trading / Markets',
    followers: '1.2M',
    engagement: '4.6%',
    recent: [184_000, 92_000, 310_000, 145_000, 121_000, 168_000],
    initials: 'CB',
  },
  defidegen: {
    handle: 'defidegen',
    name: 'DeFi Degen',
    niche: 'DeFi / Yield',
    followers: '486K',
    engagement: '6.1%',
    recent: [74_000, 58_000, 91_000, 63_000, 47_000, 82_000],
    initials: 'DD',
  },
};

const formatViews = (n: number) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return `${n}`;
};

/** Calculator section in the calm-premium language: white surface, light-weight
 *  display heading, a soft pill search bar, and a floating result card that reads
 *  as a real product mini-UI (Proof-style profile + intentional bar chart). */
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

  const peak = Math.max(...profile.recent);

  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Free TikTok reach check</span>
          <h2 className="display-light mt-4 text-[2.5rem] leading-[1.04] text-foreground md:text-[3.75rem]">
            TikTok views, <span className="text-gradient-brand">measured</span> — not guessed
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-body-md text-foreground/60">
            See any crypto KOL&apos;s real average views, engagement, and recent
            performance on TikTok before a dollar of budget moves. Free, no sign-up —
            proof over promises.
          </p>
        </div>

        {/* Soft pill search bar */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-9 flex w-full max-w-lg items-center gap-2 rounded-pill border border-black/10 bg-white p-1.5 pl-5 shadow-float-sm"
        >
          <Search size={18} className="shrink-0 text-foreground/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="@cryptobanter"
            className="h-10 flex-1 bg-transparent text-body text-foreground outline-none placeholder:text-foreground/40"
          />
          <button
            type="submit"
            className="inline-flex shrink-0 items-center gap-2 rounded-pill bg-brand px-5 py-2.5 font-semibold text-white transition hover:opacity-90"
          >
            Check KOL <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        {/* Floating result card */}
        <div className="card-kit relative mx-auto mt-12 w-full max-w-4xl rounded-2xl p-6 text-left shadow-float md:p-9">
          {/* Profile header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-6">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-pill bg-gradient-brand text-body font-bold text-white">
                {profile.initials}
              </span>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-body-md font-semibold text-foreground">{profile.name}</span>
                  <BadgeCheck size={18} className="text-brand" />
                </div>
                <span className="font-mono-tnum text-body-sm text-foreground/50">
                  @{profile.handle} · {profile.niche}
                </span>
              </div>
            </div>
            <a
              href="/demo-confirmation"
              className="inline-flex items-center gap-2 rounded-pill border border-black/10 px-5 py-2.5 text-body-sm font-semibold text-foreground transition hover:bg-black/[0.03]"
            >
              View full report <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-3">
            <Metric icon={<Eye size={18} />} label="Average views" value={formatViews(avgViews)} chip="Real reach" accent />
            <Metric icon={<Heart size={18} />} label="Engagement rate" value={profile.engagement} />
            <Metric icon={<Users size={18} />} label="Followers" value={profile.followers} />
          </div>

          {/* Intentional bar chart: shared baseline, consistent brand fill, tabular axis */}
          <div className="border-t border-hairline pt-6">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-eyebrow text-foreground/50">Views by video · last {profile.recent.length}</p>
              <span className="chip chip-onchain">Real reach, not followers</span>
            </div>
            <div className="relative h-32">
              <div className="pointer-events-none absolute inset-x-0 top-1/2 border-t border-dashed border-hairline" />
              <div className="absolute inset-x-0 bottom-0 flex h-full items-end gap-2 border-b border-foreground/15">
                {profile.recent.map((v, i) => {
                  const h = Math.max(Math.round((v / peak) * 100), 10);
                  return (
                    <div key={i} className="group relative flex flex-1 flex-col items-center justify-end">
                      <span className="mb-1 font-mono-tnum text-[0.6rem] font-semibold text-foreground/40">
                        {formatViews(v)}
                      </span>
                      <div
                        className="w-full rounded-t bg-brand/85 transition-colors hover:bg-brand"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-2 flex justify-between font-mono-tnum text-[11px] tabular-nums text-foreground/40">
              <span>V1</span>
              <span>peak {formatViews(peak)}</span>
              <span>V{profile.recent.length}</span>
            </div>
          </div>

          {/* Recent videos */}
          <div className="border-t border-hairline pt-6">
            <p className="mb-3 text-eyebrow text-foreground/50">Recent videos</p>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
              {profile.recent.map((v, i) => (
                <div
                  key={i}
                  className="relative flex aspect-[9/16] flex-col justify-end overflow-hidden rounded-xl bg-surface-ink p-2"
                >
                  <span className="absolute left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-sm">
                    <Play size={12} className="ml-0.5 fill-foreground text-foreground" />
                  </span>
                  <span className="relative inline-flex items-center gap-1 self-start rounded-pill bg-white/10 px-1.5 py-0.5 text-[0.65rem] font-semibold text-white backdrop-blur">
                    <Eye size={10} />
                    {formatViews(v)}
                  </span>
                </div>
              ))}
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
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-5 text-center ${
        accent ? 'surface-onchain text-white' : 'bg-black/[0.03] text-foreground'
      }`}
    >
      <span className={accent ? 'text-mint' : 'text-foreground/50'}>{icon}</span>
      <span className="num-display font-mono-tnum text-[1.75rem] leading-none">{value}</span>
      <span className={`text-body-sm ${accent ? 'text-white/65' : 'text-foreground/55'}`}>{label}</span>
      {chip && <span className="chip chip-onchain mt-0.5">{chip}</span>}
    </div>
  );
}
