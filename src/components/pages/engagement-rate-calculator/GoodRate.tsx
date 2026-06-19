import { cn } from '@/lib/cn';
import Container from '@/components/ui/Container';

const COLS = ['1k-5k', '5k-10k', '10k-50k', '50k-100k', '100k-500k', '500k-1M', '1M+'];

type Row = { label: string; tone: string; highlight?: boolean; cells: string[] };

const ROWS: Row[] = [
  {
    label: 'High',
    tone: 'bg-positive/10',
    cells: ['> 6.16%', '> 2.09%', '> 1.27%', '> 0.91%', '> 0.93%', '> 1.00%', '> 1.08%'],
  },
  {
    label: 'Above average',
    tone: 'bg-positive/5',
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
    tone: 'bg-purple-light',
    highlight: true,
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
    tone: 'bg-orange-light',
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
    tone: 'bg-orange-bg',
    cells: ['< 1.85%', '< 0.46%', '< 0.24%', '< 0.15%', '< 0.16%', '< 0.19%', '< 0.22%'],
  },
];

/** "What is a good crypto KOL engagement rate?" + benchmark table. */
export default function GoodRate() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="flex w-full flex-col items-center gap-8">
          <h2 className="mb-4 w-full break-words text-center font-display text-5xl font-normal leading-tight text-foreground lg:text-7xl">
            What is a good crypto KOL engagement rate?
          </h2>
          <p className="w-full break-words text-center text-lg font-normal leading-relaxed text-foreground">
            A good engagement rate on X (Twitter) depends largely on audience
            size, but in general, anything above 3% is strong, and above 6% is
            excellent for smaller KOLs (under 5K followers). As accounts grow,
            engagement rates naturally decline &mdash; for mid-sized and larger
            crypto KOLs, rates above 1% are typically a healthy sign that the
            audience is real and not bought.
          </p>

          <div className="mt-6 w-full">
            <h3 className="mb-4 text-center text-body-md font-semibold text-foreground">
              Crypto KOL Engagement Rate Benchmarks (X / Twitter)
            </h3>
            <p className="mb-6 text-center text-body-sm text-foreground/70">
              Using engagement data from millions of crypto KOL profiles vetted
              on Kolio, we&rsquo;ve put together some benchmarks.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-separate border-spacing-y-2 text-center text-body-sm">
                <thead>
                  <tr>
                    <th className="p-3 text-left font-semibold text-foreground" />
                    {COLS.map((c) => (
                      <th key={c} className="px-3 pb-2 font-semibold text-foreground">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((r) => (
                    <tr key={r.label} className={r.tone}>
                      <td
                        className={cn(
                          'rounded-l-lg p-4 text-left font-semibold text-foreground',
                          r.highlight && 'border-y border-l border-purple',
                        )}
                      >
                        {r.label}
                      </td>
                      {r.cells.map((cell, i) => (
                        <td
                          key={i}
                          className={cn(
                            'p-4 text-foreground',
                            i === r.cells.length - 1 && 'rounded-r-lg',
                            r.highlight && 'border-y border-purple',
                            r.highlight && i === r.cells.length - 1 && 'border-r',
                          )}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-gradient-brand font-display text-lg font-semibold leading-none">
                Kolio
              </span>
              <p className="text-body-sm text-foreground/50">
                Data collected from the{' '}
                <a href="/demo-confirmation" className="underline">
                  Kolio
                </a>{' '}
                KOL index. November, 2025
              </p>
            </div>
          </div>

          <a
            href="/demo-confirmation"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-4 py-2 text-base font-semibold leading-6 text-white transition-colors hover:bg-[#333333]"
          >
            Check KOL Engagement Rates
          </a>
        </div>
      </Container>
    </section>
  );
}
