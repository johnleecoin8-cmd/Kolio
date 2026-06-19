import { AlertTriangle } from 'lucide-react';
import Container from '@/components/ui/Container';

/** "Analyze audience & performance data" — analytics mockup left, copy right. */
export default function AnalyzeFeature() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <AnalyticsMockup />

          <div className="max-w-xl">
            <h2 className="font-display text-[2rem] leading-tight text-violet-dark md:text-[2.5rem]">
              Analyze audience &amp; performance data
            </h2>
            <p className="mt-6 text-body text-foreground/80">
              Before you even reach out, use Modash to ensure they&apos;re a good
              fit. Check their audience locations, age, &amp; gender -- their
              engagement rates &amp; growth rates, check for fake followers, and
              more. All in one place.
            </p>
            <a
              href="https://marketer.modash.io/register/marketer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-violet-dark px-6 text-body font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
            >
              Try For Free
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function StatBox({
  value,
  label,
  warn,
}: {
  value: string;
  label: string;
  warn?: boolean;
}) {
  return (
    <div className="rounded-lg border border-gray-200 px-4 py-2 text-center">
      <div className="flex items-center justify-center gap-1 text-[15px] font-bold text-violet-dark">
        {value}
        {warn && <AlertTriangle size={13} className="text-orange" />}
      </div>
      <div className="text-[10px] text-gray-500">{label}</div>
    </div>
  );
}

function AnalyticsMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      {/* creator performance card */}
      <div className="rounded-xl border border-black/5 bg-white p-4 shadow-nav">
        <p className="text-[13px] font-bold text-violet-dark">
          Creator&apos;s Performance
        </p>
        <div className="mt-3 grid grid-cols-3 items-center gap-3">
          <div className="h-12 rounded-lg bg-violet/20" />
          <StatBox value="51.96%" label="Fake Followers" warn />
          <StatBox value="1.42%" label="Engagement Rate" />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-gray-200 p-2">
            <p className="text-[9px] text-gray-500">Engagement Rate Benchmark</p>
            <div className="mt-2 flex h-12 items-end gap-1">
              {[5, 7, 4, 9, 12, 6, 8, 5, 4, 3].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h * 4}px` }}
                  className={`flex-1 rounded-sm ${i === 4 ? 'bg-violet-dark' : 'bg-violet/40'}`}
                />
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 p-2">
            <p className="text-[9px] text-gray-500">Followers Growth</p>
            <div className="mt-2 h-12 rounded bg-violet/10" />
          </div>
        </div>
      </div>

      {/* audience data card overlapping */}
      <div className="relative -mt-6 ml-8 rounded-xl border border-black/5 bg-white p-4 shadow-nav">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-bold text-violet-dark">Audience Data</p>
          <div className="flex overflow-hidden rounded-md border border-gray-200 text-[11px]">
            <span className="px-2 py-1 text-gray-500">Likers</span>
            <span className="bg-violet/20 px-2 py-1 font-semibold text-violet-dark">
              Followers
            </span>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-gray-200 p-2">
            <p className="text-[9px] text-gray-500">Gender Split</p>
            <div className="mx-auto mt-2 h-16 w-16 rounded-full border-[10px] border-violet/30 border-t-violet-dark border-r-violet-dark" />
          </div>
          <div className="rounded-lg border border-gray-200 p-2">
            <p className="text-[9px] text-gray-500">Age &amp; Gender Split</p>
            <div className="mt-2 flex h-16 items-end gap-1">
              {[6, 9, 11, 14, 8, 5, 3].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h * 4}px` }}
                  className="flex-1 rounded-sm bg-violet/50"
                />
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 p-2">
            <p className="text-[9px] text-gray-500">Location By Country</p>
            <div className="mt-2 space-y-1.5">
              <div className="h-1.5 w-full rounded-pill bg-violet/30" />
              <div className="h-1.5 w-2/3 rounded-pill bg-violet/30" />
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 p-2">
            <p className="text-[9px] text-gray-500">Lookalike Accounts</p>
            <div className="mt-2 space-y-1.5">
              <div className="h-1.5 w-full rounded-pill bg-violet/30" />
              <div className="h-1.5 w-3/4 rounded-pill bg-violet/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
