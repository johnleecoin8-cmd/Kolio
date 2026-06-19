import {
  AlertTriangle,
  Heart,
  TrendingUp,
  MessageCircle,
  Mail,
  BarChart3,
  Play,
  Instagram,
  Lock,
} from 'lucide-react';
import type { Influencer, LocationStat } from './data';

function StatPill({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-black/5 bg-white px-4 py-3">
      <span className="flex items-center gap-2 text-body-sm text-foreground/70">
        <span className="text-gray-400">{icon}</span>
        {label}
      </span>
      <span className="text-body-sm font-semibold text-foreground">{value}</span>
    </div>
  );
}

function LocationBars({
  title,
  rows,
}: {
  title: string;
  rows: LocationStat[];
}) {
  return (
    <div className="relative">
      <p className="mb-2 text-body-sm font-medium text-foreground/70">{title}</p>
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.name} className="flex items-center gap-3">
            <span className="w-28 shrink-0 truncate text-[11px] text-foreground/60">
              {r.name}
            </span>
            <span className="h-1.5 flex-1 rounded-full bg-gray-100">
              <span
                className="block h-full rounded-full bg-gray-300"
                style={{ width: r.pct }}
              />
            </span>
            <span className="w-12 shrink-0 text-right text-[11px] text-foreground/60">
              {r.pct}
            </span>
          </div>
        ))}
      </div>
      {/* unlock overlay teaser */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-10 items-end justify-center bg-gradient-to-t from-white via-white/80 to-transparent">
        <span className="flex items-center gap-1 text-[10px] font-medium text-foreground/50">
          <Lock size={10} /> Start a Free Trial to Unlock
        </span>
      </div>
    </div>
  );
}

export default function InfluencerCard({ data }: { data: Influencer }) {
  return (
    <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-[280px_1fr]">
      {/* ---- left: identity ---- */}
      <div>
        <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-100">
          <img
            src={data.avatar}
            alt={data.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <h2 className="mt-4 text-[1.375rem] font-semibold leading-tight text-foreground">
          {data.rank}. {data.name}
        </h2>
        <p className="mt-1 text-body-sm text-foreground/60">{data.location}</p>

        <div className="mt-3 space-y-0.5 text-body-sm text-foreground/70">
          {data.bio.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <p className="mt-3 text-body-sm font-semibold text-foreground">
          {data.handle}
        </p>

        <div className="mt-4 space-y-2">
          <button className="flex items-center gap-2 text-body-sm font-medium text-foreground/80 hover:text-foreground">
            <Mail size={15} /> Check contact details
          </button>
          <button className="flex items-center gap-2 text-body-sm font-medium text-foreground/80 hover:text-foreground">
            <BarChart3 size={15} /> Get audience breakdown
          </button>
        </div>

        <a
          href="https://www.modash.io/"
          className="mt-4 inline-flex h-10 items-center justify-center rounded-sm bg-ink px-4 text-body-sm font-semibold text-white no-underline shadow-btn transition hover:opacity-90"
        >
          Full Profile Data
        </a>

        <button className="mt-3 flex items-center gap-2 text-body-sm font-medium text-foreground/70 hover:text-foreground">
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-black/10">
            <Play size={11} className="fill-current" />
          </span>
          How to see more content
        </button>
      </div>

      {/* ---- right: data ---- */}
      <div className="space-y-5">
        {/* top stat pills */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <StatPill
            icon={<AlertTriangle size={15} />}
            label="Fake followers"
            value={data.fakeFollowers}
          />
          <StatPill
            icon={<Heart size={15} />}
            label="Average likes"
            value={data.avgLikes}
          />
          <StatPill
            icon={<TrendingUp size={15} />}
            label="Engagement rate"
            value={data.engagementRate}
          />
          <StatPill
            icon={<MessageCircle size={15} />}
            label="Average comments"
            value={data.avgComments}
          />
        </div>

        {/* location + post */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_220px]">
          <div className="space-y-5">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <LocationBars
                title="Audience location by country"
                rows={data.countries}
              />
              <LocationBars
                title="Audience location by city"
                rows={data.cities}
              />
            </div>
            {/* gender */}
            <div className="relative">
              <p className="mb-2 text-body-sm font-medium text-foreground/70">
                Audience gender
              </p>
              <div className="flex h-2 w-full overflow-hidden rounded-full bg-gray-100">
                <span
                  className="h-full bg-pink"
                  style={{ width: `${data.genderFemale}%` }}
                />
                <span
                  className="h-full bg-violet"
                  style={{ width: `${100 - data.genderFemale}%` }}
                />
              </div>
              <div className="mt-1 flex justify-between text-[11px] text-foreground/50">
                <span>female {data.genderFemale}%</span>
                <span>male {100 - data.genderFemale}%</span>
              </div>
            </div>
          </div>

          {/* brand post thumbnail */}
          <div className="overflow-hidden rounded-lg border border-black/5">
            <div className="flex items-center gap-2 px-3 py-2">
              <span className="h-7 w-7 overflow-hidden rounded-full bg-gray-100">
                <img
                  src={data.avatar}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-semibold text-foreground">
                  {data.name}
                </p>
                <p className="truncate text-[10px] text-foreground/50">
                  {data.handle}
                </p>
              </div>
              <Instagram size={14} className="shrink-0 text-foreground/60" />
            </div>
            <div className="relative aspect-[3/4] bg-gray-100">
              <img
                src={data.post.image}
                alt={`Instagram post by ${data.handle} for Red Bull`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <span className="absolute right-2 top-2 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white">
                {data.post.duration}
              </span>
            </div>
            <div className="px-3 py-2">
              <div className="flex items-center gap-3 text-[11px] text-foreground/60">
                <span className="flex items-center gap-1">
                  <Heart size={11} /> {data.post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle size={11} /> {data.post.comments}
                </span>
                <span className="flex items-center gap-1">
                  <Play size={11} /> {data.post.views}
                </span>
              </div>
              <p className="mt-1.5 line-clamp-2 text-[11px] text-foreground/70">
                {data.post.caption}
              </p>
            </div>
          </div>
        </div>

        <button className="flex items-center gap-2 text-body-sm font-medium text-foreground/70 hover:text-foreground">
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-black/10">
            <Play size={11} className="fill-current" />
          </span>
          How to see more content
        </button>
      </div>
    </div>
  );
}
