import Container from '@/components/ui/Container';
import { useCountUp } from './useCountUp';

export type Stat = { value: number; suffix?: string; prefix?: string; label: string; decimals?: number };

function StatItem({ s }: { s: Stat }) {
  const { ref, value } = useCountUp(s.value);
  const shown = (s.decimals ? value.toFixed(s.decimals) : Math.round(value).toLocaleString());
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="num-display text-h2 leading-none text-foreground">
        {s.prefix}{shown}{s.suffix}
      </div>
      <div className="mt-2 text-body text-foreground/55">{s.label}</div>
    </div>
  );
}

/** Three big count-up stats with a cited source line (defends credibility). */
export default function StatTrio({ stats, source }: { stats: [Stat, Stat, Stat]; source?: string }) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 border-y border-gray-200 py-12 md:grid-cols-3">
          {stats.map((s) => <StatItem key={s.label} s={s} />)}
        </div>
        {source && (
          <p className="mt-4 font-mono-tnum text-eyebrow text-foreground/40">{source}</p>
        )}
      </Container>
    </section>
  );
}
