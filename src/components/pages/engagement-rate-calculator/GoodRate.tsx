import Container from '@/components/ui/Container';

const COLS = ['1k-5k', '5k-10k', '10k-50k', '50k-100k', '100k-500k', '500k-1M', '1M+'];

const ROWS: { label: string; tone: string; cells: string[] }[] = [
  {
    label: 'High',
    tone: 'bg-lime/40',
    cells: ['> 6.16%', '> 2.09%', '> 1.27%', '> 0.91%', '> 0.93%', '> 1.00%', '> 1.08%'],
  },
  {
    label: 'Above average',
    tone: 'bg-lime/20',
    cells: [
      '3.85 - 6.16%',
      '1.13 - 2.09%',
      '0.65 - 1.27%',
      '0.43 - 0.91%',
      '0.46 - 0.93%',
      '0.51 - 1.00%',
      '0.57 - 1.08%',
    ],
  },
  {
    label: 'Average',
    tone: 'bg-background-soft',
    cells: [
      '3.16 - 3.85%',
      '0.88 - 1.13%',
      '0.49 - 0.65%',
      '0.32 - 0.43%',
      '0.35 - 0.46%',
      '0.39 - 0.51%',
      '0.45 - 0.57%',
    ],
  },
  {
    label: 'Below Average',
    tone: 'bg-orange/30',
    cells: [
      '1.85 - 3.16%',
      '0.46 - 0.88%',
      '0.24 - 0.49%',
      '0.15 - 0.32%',
      '0.16 - 0.35%',
      '0.19 - 0.39%',
      '0.22 - 0.45%',
    ],
  },
  {
    label: 'Low',
    tone: 'bg-coral/30',
    cells: ['< 1.85%', '< 0.46%', '< 0.24%', '< 0.15%', '< 0.16%', '< 0.19%', '< 0.22%'],
  },
];

/** "What is a good Instagram influencer engagement rate?" + benchmark table. */
export default function GoodRate() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="flex w-full flex-col items-center gap-8">
          <h2 className="mb-4 w-full break-words text-center font-display text-5xl font-bold leading-tight text-foreground lg:text-7xl">
            What is a good Instagram influencer engagement rate?
          </h2>
          <p className="w-full break-words text-center text-lg font-normal leading-relaxed text-foreground">
            A good Instagram engagement rate depends largely on follower count,
            but in general, anything above 3% is strong, and above 6% is
            considered excellent for smaller creators (under 5K followers). As
            accounts grow, engagement rates naturally decline - for mid-sized
            and larger influencers, rates above 1% are typically considered
            solid.
          </p>

          <div className="mt-6 w-full">
            <h3 className="mb-4 text-center text-body-md font-semibold text-foreground">
              Instagram Engagement Rate Benchmarks
            </h3>
            <p className="mb-6 text-center text-body-sm text-foreground/70">
              Using data from 84M+ influencer profiles in our database, we&rsquo;ve
              put together some benchmarks.
            </p>

            <div className="overflow-x-auto rounded-lg border border-black/5">
              <table className="w-full min-w-[720px] border-collapse text-center text-body-sm">
                <thead>
                  <tr>
                    <th className="border-b border-black/5 bg-white p-3 text-left font-semibold text-foreground" />
                    {COLS.map((c) => (
                      <th
                        key={c}
                        className="border-b border-l border-black/5 bg-white p-3 font-semibold text-foreground"
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((r) => (
                    <tr key={r.label}>
                      <td className="border-b border-black/5 bg-white p-3 text-left font-semibold text-foreground">
                        {r.label}
                      </td>
                      {r.cells.map((cell, i) => (
                        <td
                          key={i}
                          className={`border-b border-l border-black/5 p-3 text-foreground ${r.tone}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-center text-body-sm text-foreground/50">
              Data collected from modash.io. November, 2025
            </p>
          </div>

          <a
            href="#"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-4 py-2 text-base font-semibold leading-6 text-white transition-colors hover:bg-[#333333]"
          >
            Check Engagement Rates
          </a>
        </div>
      </Container>
    </section>
  );
}
