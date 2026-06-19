/** "Check influencers' sponsored content" — two-column CTA with real product preview. */
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

      {/* real product preview screenshot */}
      <div className="relative w-full overflow-hidden rounded-xl p-4">
        <img
          src="https://www.modash.io/content-library/assets/brand_collaboration.png"
          alt="Brand collaboration"
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}
