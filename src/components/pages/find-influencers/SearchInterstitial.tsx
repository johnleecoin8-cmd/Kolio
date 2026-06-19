import { Search, Sparkles, MapPin, Users, Hash } from 'lucide-react';

/** Pink mid-list promo block: copy on the left, a stylized search-UI mock on the right. */
export default function SearchInterstitial() {
  return (
    <div className="my-7 grid grid-cols-1 items-center gap-8 rounded-xl bg-pink p-8 md:grid-cols-2 md:p-12">
      <div>
        <h2 className="font-display text-[2rem] uppercase leading-[1.05] text-ink md:text-[2.75rem]">
          Search &amp; filter 350M+ influencers
        </h2>
        <p className="mt-4 max-w-[420px] text-body text-ink/80">
          Find creators with the perfect audience for your brand using Modash's
          discovery tools. Try for free, with no credit card required.
        </p>
        <a
          href="https://marketer.modash.io/register/marketer"
          className="mt-7 inline-flex h-11 items-center justify-center rounded-sm bg-ink px-5 text-body-sm font-semibold text-white no-underline shadow-btn transition hover:opacity-90"
        >
          Search for Influencers
        </a>
      </div>

      {/* Stylized search UI mock */}
      <div className="rounded-lg bg-white p-4 shadow-nav">
        <div className="flex items-center gap-2 rounded border border-gray-200 px-3 py-2">
          <Sparkles size={16} className="text-pink-hot" />
          <span className="text-body-sm text-foreground/60">
            Moms with tea
          </span>
          <button className="ml-auto inline-flex h-7 items-center rounded-sm bg-pink px-3 text-[12px] font-semibold text-ink">
            <Search size={13} className="mr-1" />
            Search
          </button>
        </div>

        <div className="mt-4 space-y-3">
          {[
            { icon: <Users size={14} />, label: 'Followers', val: '10k – 1M' },
            { icon: <MapPin size={14} />, label: 'Location', val: 'United States' },
            { icon: <Hash size={14} />, label: 'Topics', val: 'Fitness, Health' },
          ].map((f) => (
            <div
              key={f.label}
              className="flex items-center justify-between rounded border border-gray-100 bg-background-soft px-3 py-2 text-[12px]"
            >
              <span className="flex items-center gap-2 text-foreground/60">
                <span className="text-foreground/40">{f.icon}</span>
                {f.label}
              </span>
              <span className="font-medium text-foreground/80">{f.val}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink to-violet" />
              <div className="flex-1">
                <div className="h-2 w-1/2 rounded-pill bg-gray-200" />
                <div className="mt-1 h-2 w-1/3 rounded-pill bg-gray-100" />
              </div>
              <div className="h-5 w-12 rounded-pill bg-pink-light" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
