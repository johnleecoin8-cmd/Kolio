import { useState } from 'react';
import { Search, Eye, Heart, Users, BadgeCheck } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Mock example profiles so the result card has real-looking data (the live
 *  page renders Modash data; we approximate the visual). */
const EXAMPLES = [
  {
    handle: 'khaby00',
    name: 'Khabane lame',
    followers: '162.3M',
    avgViews: '8.4M',
    engagement: '2.1%',
    avatar:
      'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/6839797ca1a594bbe217a8b9_img_hero_logo_modash.png',
  },
];

/** Hero: H1 + subtext + the TikTok average-views calculator widget. */
export default function HeroCalculator() {
  const [query, setQuery] = useState('');
  const profile = EXAMPLES[0];

  return (
    <section className="bg-background pt-12 pb-16 md:pt-16 md:pb-24">
      <Container>
        <h1 className="mx-auto max-w-[18ch] text-center font-display text-[2.75rem] uppercase leading-[1.02] text-foreground md:text-[4.5rem]">
          TikTok Average Views Calculator
        </h1>
        <p className="mx-auto mt-5 max-w-[640px] text-center text-body text-foreground/75 md:text-body-md">
          Check any TikTok creator's average views, engagement rate, audience
          quality, and top videos. Free, with no sign-up needed.
        </p>

        {/* Search bar */}
        <div className="mx-auto mt-8 flex max-w-[560px] items-center gap-2">
          <div className="relative flex-1">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter TikTok username"
              className="h-12 w-full rounded-pill border border-gray-200 bg-gray-50 pl-11 pr-4 text-body text-foreground outline-none transition focus:border-gray-300 focus:bg-white"
            />
          </div>
          <button className="inline-flex h-12 items-center justify-center gap-2 rounded-pill bg-ink px-6 text-body font-semibold text-white transition hover:opacity-90">
            Profile
          </button>
        </div>

        {/* Result card */}
        <div className="mx-auto mt-8 max-w-[1040px] rounded-xl border border-black/10 bg-white p-5 shadow-nav md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
            {/* Profile summary */}
            <div className="flex w-full items-center gap-4 rounded-lg bg-gray-50 p-5 lg:w-72">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-pink-light via-pink to-pink-hot" />
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-body-md font-semibold text-foreground">
                    {profile.name}
                  </span>
                  <BadgeCheck size={16} className="text-[#4AABED]" />
                </div>
                <span className="text-body-sm text-foreground/60">
                  @{profile.handle}
                </span>
                <span className="mt-1 text-body-sm font-medium text-foreground/75">
                  {profile.followers} followers
                </span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-3">
              <Metric
                icon={<Eye size={20} />}
                label="Average views"
                value={profile.avgViews}
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
          </div>

          <p className="mt-6 text-center text-body-sm text-foreground/55">
            Click on a profile to see a different example, and type in any
            username above.
          </p>
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
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-lg p-5 text-center ${
        accent ? 'bg-ink text-white' : 'bg-gray-50 text-foreground'
      }`}
    >
      <span className={accent ? 'text-pink' : 'text-foreground/70'}>{icon}</span>
      <span className="text-[1.5rem] font-semibold leading-none">{value}</span>
      <span
        className={`text-body-sm ${accent ? 'text-white/70' : 'text-foreground/60'}`}
      >
        {label}
      </span>
    </div>
  );
}
