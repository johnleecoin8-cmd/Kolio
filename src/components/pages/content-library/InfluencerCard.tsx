import {
  AlertTriangle,
  Heart,
  TrendingUp,
  MessageCircle,
  Mail,
  BarChart3,
  Play,
  Twitter,
} from 'lucide-react';
import { cn } from '@/lib/cn';
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
    <div className="flex items-center justify-between rounded-lg bg-white p-4">
      <span className="flex items-center gap-2 text-sm text-foreground/80">
        <span className="text-foreground/60">{icon}</span>
        {label}
      </span>
      <span className="text-base text-foreground">{value}</span>
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
    <div className="flex w-full flex-1 flex-col">
      <span className="text-sm font-semibold text-foreground">{title}</span>
      <div className="mt-2 flex flex-col gap-2">
        {rows.map((r, i) => {
          const blur = i > 1;
          const width = parseFloat(r.pct);
          return (
            <div key={r.name} className="flex flex-col justify-center">
              <div
                className={cn(
                  'flex justify-between text-sm',
                  blur && 'blur-sm opacity-40',
                )}
              >
                <span className="min-w-0 flex-1 truncate text-foreground/80">
                  {r.name}
                </span>
                <span className="text-foreground/80">{r.pct}</span>
              </div>
              <div
                className={cn(
                  'mt-0.5 h-2 rounded-lg bg-gray-100',
                  blur && 'blur opacity-40',
                )}
              >
                <span
                  className="block h-full rounded-lg bg-ink"
                  style={{ width: `${Math.min(width, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function InfluencerCard({ data }: { data: Influencer }) {
  return (
    <div className="grid grid-cols-1 gap-4 rounded-lg bg-background-soft p-4 xl:grid-cols-7 xl:p-6">
      {/* ---- left: identity (white panel) ---- */}
      <div className="flex h-full w-full flex-col gap-4 rounded-lg bg-white p-4 xl:col-span-2">
        {/* avatar + name row (stacks on lg) */}
        <div className="flex flex-row items-start gap-4 lg:flex-col">
          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-gray-100 lg:h-25 lg:w-25">
            <img
              src={data.avatar}
              alt={data.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-xl font-semibold leading-tight text-foreground lg:text-2xl">
              {data.rank}. {data.name}
            </h2>
            <p className="mt-1 text-body-sm text-foreground/60">
              {data.location}
            </p>
          </div>
        </div>

        {/* bio box */}
        <div className="mt-3 rounded-lg border border-black/[0.08] px-2.5 py-1">
          <p className="line-clamp-3 whitespace-pre-line text-body-sm leading-relaxed text-foreground">
            {data.bio.join('\n')}
          </p>
        </div>

        {/* handle */}
        <a
          href="#"
          className="mt-3 flex items-center gap-2 text-body-sm text-foreground/80 no-underline hover:underline"
        >
          <Twitter size={18} className="shrink-0" />
          {data.handle}
        </a>

        <div className="mt-4 space-y-2">
          <button className="flex items-center gap-2 text-body-sm font-medium text-foreground/80 hover:text-foreground">
            <Mail size={15} /> Check contact details
          </button>
          <button className="flex items-center gap-2 text-body-sm font-medium text-foreground/80 hover:text-foreground">
            <BarChart3 size={15} /> Get audience breakdown
          </button>
        </div>

        <a
          href="/demo-confirmation"
          className="mt-4 inline-flex h-10 items-center justify-center rounded-sm bg-ink px-4 text-body-sm font-semibold text-white no-underline shadow-btn transition hover:opacity-90"
        >
          Full KOL Profile
        </a>

        <button className="mt-3 flex items-center gap-2 text-body-sm font-medium text-foreground/70 hover:text-foreground">
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-black/10">
            <Play size={11} className="fill-current" />
          </span>
          How to see more content
        </button>
      </div>

      {/* ---- right: data grid (named-area layout) ---- */}
      <div className="space-y-4 xl:col-span-5">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-6 lg:[grid-template-areas:'fakeFollowers_fakeFollowers_fakeFollowers_averageLikes_averageLikes_averageLikes''engagementRate_engagementRate_engagementRate_averageComments_averageComments_averageComments''audienceCountries_audienceCountries_audienceCities_audienceCities_brandPost_brandPost''genderSplit_genderSplit_genderSplit_genderSplit_brandPost_brandPost']">
          {/* stat tiles */}
          <div style={{ gridArea: 'fakeFollowers' }} className="col-span-2 lg:col-auto">
            <StatPill icon={<AlertTriangle size={16} />} label="Bot followers" value={data.fakeFollowers} />
          </div>
          <div style={{ gridArea: 'averageLikes' }} className="col-span-2 lg:col-auto">
            <StatPill icon={<Heart size={16} />} label="Average likes" value={data.avgLikes} />
          </div>
          <div style={{ gridArea: 'engagementRate' }} className="col-span-2 lg:col-auto">
            <StatPill icon={<TrendingUp size={16} />} label="Engagement rate" value={data.engagementRate} />
          </div>
          <div style={{ gridArea: 'averageComments' }} className="col-span-2 lg:col-auto">
            <StatPill icon={<MessageCircle size={16} />} label="Average comments" value={data.avgComments} />
          </div>

          {/* audience countries */}
          <div style={{ gridArea: 'audienceCountries' }} className="col-span-2 flex rounded-lg bg-white p-4 lg:col-auto">
            <LocationBars title="Audience location by country" rows={data.countries} />
          </div>
          {/* audience cities */}
          <div style={{ gridArea: 'audienceCities' }} className="col-span-2 flex rounded-lg bg-white p-4 lg:col-auto">
            <LocationBars title="Audience location by city" rows={data.cities} />
          </div>

          {/* gender split (blurred) */}
          <div style={{ gridArea: 'genderSplit' }} className="col-span-2 flex rounded-lg bg-white p-4 lg:col-auto">
            <div className="flex w-full flex-1 flex-col">
              <span className="text-sm font-semibold text-foreground">
                Audience gender
              </span>
              <div className="relative mt-4">
                <div className="flex select-none flex-col gap-2 blur-[5px]">
                  <div className="flex flex-col justify-center">
                    <div className="flex justify-between text-sm text-foreground/80">
                      <span className="min-w-0 flex-1 truncate">female</span>
                      <span>{data.genderFemale}.57%</span>
                    </div>
                    <div className="mt-0.5 h-2 rounded-lg bg-gray-100">
                      <span className="block h-full rounded-lg bg-coral" style={{ width: `${data.genderFemale}%` }} />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex justify-between text-sm text-foreground/80">
                      <span className="min-w-0 flex-1 truncate">male</span>
                      <span>{100 - data.genderFemale}.43%</span>
                    </div>
                    <div className="mt-0.5 h-2 rounded-lg bg-gray-100">
                      <span className="block h-full rounded-lg bg-violet" style={{ width: `${100 - data.genderFemale}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* brand post thumbnail (spans 2 rows) */}
          <div style={{ gridArea: 'brandPost' }} className="col-span-2 overflow-hidden rounded-lg bg-white lg:col-auto">
            <div className="flex items-center gap-2 px-3 py-2">
              <span className="h-7 w-7 overflow-hidden rounded-full bg-gray-100">
                <img src={data.avatar} alt="" className="h-full w-full object-cover" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-semibold text-foreground">{data.name}</p>
                <p className="truncate text-[10px] text-foreground/50">{data.handle}</p>
              </div>
              <Twitter size={14} className="shrink-0 text-foreground/60" />
            </div>
            <div className="relative aspect-[3/4] bg-gray-100">
              <img
                src={data.post.image}
                alt={`Sponsored post by ${data.handle} for OKX`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <span className="absolute right-2 top-2 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white">
                {data.post.duration}
              </span>
            </div>
            <div className="px-3 py-2">
              <div className="flex items-center gap-3 text-[11px] text-foreground/60">
                <span className="flex items-center gap-1"><Heart size={11} /> {data.post.likes}</span>
                <span className="flex items-center gap-1"><MessageCircle size={11} /> {data.post.comments}</span>
                <span className="flex items-center gap-1"><Play size={11} /> {data.post.views}</span>
              </div>
              <p className="mt-1.5 line-clamp-2 text-[11px] text-foreground/70">{data.post.caption}</p>
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
