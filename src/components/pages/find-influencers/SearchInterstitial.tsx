/** Pink mid-list promo block: copy on the left, the real AI-search demo video on the right. */
const AI_SEARCH_VIDEO =
  'https://dl.dropboxusercontent.com/scl/fi/xkndtg57wr4uaihcte4mx/AIsearchgrey.mp4?rlkey=plrhzhwviuvmxbdd4w4i959li&e=1&st=z4eylzr6&dl=0';

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

      {/* Real AI search demo video */}
      <div className="relative h-[480px] flex-1 overflow-hidden rounded-lg bg-pink-light p-4">
        <video
          src={AI_SEARCH_VIDEO}
          title="AI Search Demo"
          className="h-full w-full object-contain"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>
  );
}
