import { Eye, Heart } from 'lucide-react';

/** "Check influencers' sponsored content" — two-column CTA with product preview. */
export default function FeaturedCta() {
  return (
    <div className="grid grid-cols-1 items-center gap-10 py-12 md:grid-cols-2">
      <div>
        <h2 className="font-display text-[2rem] uppercase leading-[1.05] text-foreground md:text-[2.75rem]">
          Check influencers' sponsored content
        </h2>
        <p className="mt-5 max-w-md text-body text-foreground/75">
          Use the brand collaborations timeline to see who an influencer has
          worked with, what they posted, and how it performed. Plus see Paid vs.
          Organic metrics to see how well their sponsored content performs on
          average.
        </p>
        <a
          href="https://www.modash.io/"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-sm bg-ink px-5 text-body font-semibold text-white no-underline shadow-btn transition hover:opacity-90"
        >
          Try for Free
        </a>
      </div>

      {/* product preview mock */}
      <div className="relative">
        <div className="rounded-xl border border-black/10 bg-white p-3 shadow-nav">
          <p className="mb-3 text-body-sm font-semibold text-foreground">
            Brand collaboration
          </p>
          <div className="mb-3 flex items-center gap-3">
            {['🛍', '🎯', '🏔', '⚡'].map((e, i) => (
              <span
                key={i}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm ${
                  i === 3 ? 'ring-2 ring-ink' : 'bg-gray-50'
                }`}
              >
                {e}
              </span>
            ))}
          </div>
          <div className="mb-3 h-1 w-full rounded-full bg-gray-200">
            <span className="block h-full w-full rounded-full bg-ink" />
          </div>
          <div className="mb-3 grid grid-cols-4 gap-2 text-[10px] text-foreground/50">
            <div>
              <p>Company</p>
              <p className="font-semibold text-foreground">Farfetch</p>
            </div>
            <div>
              <p>Duration</p>
              <p className="font-semibold text-foreground">Apr. 2025</p>
            </div>
            <div>
              <p>Posts</p>
              <p className="font-semibold text-foreground">15</p>
            </div>
            <div>
              <p>Platform</p>
              <p className="font-semibold text-foreground">IG</p>
            </div>
          </div>
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-gradient-to-br from-sand to-gray-200" />
        </div>

        {/* floating paid vs organic card */}
        <div className="absolute -bottom-6 right-0 w-56 rounded-lg border border-black/10 bg-white p-3 shadow-nav">
          <p className="mb-2 text-[11px] font-semibold text-foreground">
            Paid vs. Organic
          </p>
          <div className="space-y-2 text-[11px] text-foreground/70">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Heart size={11} /> Paid engagements
              </span>
              <span className="font-semibold text-foreground">30.83%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Eye size={11} /> Paid views
              </span>
              <span className="font-semibold text-foreground">65.38%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
