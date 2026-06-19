import Container from '@/components/ui/Container';

/** Hero — periwinkle wash, big navy headline, indigo CTA, search-UI mockup. */
export default function Hero() {
  return (
    <section className="bg-violet/40">
      <Container>
        <div className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          {/* copy */}
          <div className="max-w-xl">
            <h1 className="font-display text-[2.75rem] leading-[1.05] text-violet-dark md:text-[3.5rem]">
              Influencer Search Engine For Instagram, YouTube,&nbsp;&amp;&nbsp;TikTok
            </h1>
            <p className="mt-6 text-body-md leading-relaxed text-violet-dark/90">
              Search &amp; filter every creator on Earth for the big 3 platforms.
              Find the perfect influencers, analyze their profiles, get contact
              emails, &amp; more.
            </p>
            <a
              href="https://marketer.modash.io/register/marketer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-violet-dark px-6 text-body font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
            >
              Search 200m+ Influencers - try For Free
            </a>
          </div>

          {/* search UI mockup */}
          <SearchMockup />
        </div>
      </Container>
    </section>
  );
}

function Bar({ w }: { w: string }) {
  return <div className={`h-3 rounded-pill bg-black/10 ${w}`} />;
}

function SearchMockup() {
  return (
    <div className="relative ml-auto flex w-full max-w-[520px] gap-3">
      {/* left dark rail */}
      <div className="hidden w-[112px] shrink-0 rounded-xl bg-violet-dark p-4 sm:block">
        <div className="mb-8 flex items-center gap-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[8px] font-extrabold leading-none text-violet-dark">
            MO
          </span>
          <span className="text-[12px] font-extrabold uppercase tracking-tight text-white">
            Modash
          </span>
        </div>
        <div className="space-y-4">
          <div className="h-3 w-full rounded-pill bg-white/10" />
          <div className="h-3 w-full rounded-pill bg-white/10" />
          <div className="h-3 w-full rounded-pill bg-white/10" />
        </div>
      </div>

      <div className="flex-1 space-y-3">
        {/* filter card */}
        <div className="relative rounded-lg border border-black/5 bg-white p-4 shadow-nav">
          <p className="text-[10px] font-bold uppercase tracking-wide text-violet-dark">
            Influencer info
          </p>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <div>
              <p className="text-[10px] text-gray-500">Location</p>
              <div className="mt-1 rounded border border-gray-200 px-2 py-1 text-[11px]">
                Germany
              </div>
            </div>
            <div>
              <p className="text-[10px] text-gray-500">Follower range</p>
              <div className="mt-1 flex gap-1">
                <div className="rounded border border-gray-200 px-2 py-1 text-[11px]">
                  5,000
                </div>
                <div className="rounded border border-gray-200 px-2 py-1 text-[11px]">
                  25,000
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-[10px] font-bold uppercase tracking-wide text-violet-dark">
            Audience info
          </p>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <div>
              <p className="text-[10px] text-gray-500">Location</p>
              <div className="mt-1 rounded border border-gray-200 px-2 py-1 text-[11px]">
                Hamburg
              </div>
            </div>
            <div>
              <p className="text-[10px] text-gray-500">Age</p>
              <div className="mt-1 rounded border border-gray-200 px-2 py-1 text-[11px]">
                25-34
              </div>
            </div>
          </div>
          {/* find influencers floating pill */}
          <div className="absolute -bottom-4 right-4 rounded-pill bg-violet px-4 py-2 text-[12px] font-semibold text-violet-dark shadow-nav">
            Find influencers
          </div>
        </div>

        <p className="text-[11px] font-semibold text-violet-dark">
          83 721 influencers found (0.72 sec)
        </p>

        {/* result rows */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-lg border border-black/5 bg-white p-3 shadow-nav"
          >
            <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-violet to-coral" />
            <div className="grid flex-1 grid-cols-3 items-center gap-3">
              <Bar w="w-full" />
              <Bar w="w-2/3" />
              <Bar w="w-3/4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
