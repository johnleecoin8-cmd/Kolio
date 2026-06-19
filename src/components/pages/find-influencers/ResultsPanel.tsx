import { Search, Calendar } from 'lucide-react';
import { profiles } from './data';
import InfluencerCard from './InfluencerCard';
import SearchInterstitial from './SearchInterstitial';

/** Soft rounded panel holding the title bar, intro, and the full influencer list. */
export default function ResultsPanel() {
  const first = profiles.slice(0, 10);
  const rest = profiles.slice(10);

  return (
    <section className="bg-background pb-16">
      <div className="mx-auto w-full max-w-container px-4 sm:px-6">
        <div className="rounded-xl bg-background-soft p-6 md:p-10">
          {/* Title bar */}
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <h2 className="max-w-[640px] text-[1.5rem] font-semibold leading-tight text-foreground md:text-[2.25rem]">
              We found 690 fitness Influencers in United States
            </h2>
            <div className="flex shrink-0 items-center gap-3">
              <span className="flex items-center gap-2 rounded-pill border border-black/5 bg-white px-3 py-2 text-body-sm">
                <Calendar size={15} className="text-foreground/40" />
                <span className="text-foreground/50">Last updated</span>
                <span className="font-medium text-foreground">06/12/2026</span>
              </span>
              <span className="h-6 w-px bg-black/10" />
              <button
                aria-label="Search"
                className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/60 transition hover:bg-black/5"
              >
                <Search size={18} />
              </button>
            </div>
          </div>

          <p className="mt-4 max-w-[760px] text-body text-foreground/70">
            These influencers mention 'fitness' in their Instagram bio and have
            audiences primarily in United States. Here are the top 20. To run a
            custom search, check out Modash's influencer discovery features{' '}
            <a
              href="https://marketer.modash.io/register/marketer"
              className="font-medium text-foreground underline underline-offset-2"
            >
              (free to try)
            </a>
            .
          </p>

          <hr className="my-6 border-black/10" />

          {/* List */}
          <div className="divide-y divide-black/10">
            {first.map((p) => (
              <InfluencerCard key={p.rank} profile={p} />
            ))}
          </div>

          <SearchInterstitial />

          <div className="divide-y divide-black/10">
            {rest.map((p) => (
              <InfluencerCard key={p.rank} profile={p} />
            ))}
          </div>

          {/* Try for free pill */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://marketer.modash.io/register/marketer"
              className="inline-flex h-10 items-center justify-center rounded-sm bg-ink px-5 text-body-sm font-semibold text-white no-underline shadow-btn transition hover:opacity-90"
            >
              Try for free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
