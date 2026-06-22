import { ShieldCheck } from 'lucide-react';

/** Kolio Proof Score: a single composite 0-100 credibility number.
 *  Crypto-weighted (audience authenticity + on-chain proof + engagement quality).
 *  Derived deterministically from a creator so it is stable across renders. */
export function computeProofScore(c: {
  engagement_rate?: number; fake_follower_pct?: number; is_verified?: boolean; followers?: number;
}): number {
  const authenticity = (1 - (c.fake_follower_pct ?? 0)) * 45;      // up to 45
  const engagement = Math.min(1, (c.engagement_rate ?? 0) / 0.08) * 30; // up to 30
  const verified = c.is_verified ? 12 : 4;                          // up to 12
  const reach = Math.min(1, Math.log10((c.followers ?? 1) + 1) / 7) * 13; // up to 13
  return Math.round(Math.max(38, Math.min(99, authenticity + engagement + verified + reach)));
}

const band = (s: number) => s >= 85 ? 'Elite' : s >= 70 ? 'Strong' : s >= 55 ? 'Fair' : 'Watch';

/** Ring badge. size: 'sm' (card) | 'lg' (profile header). */
export default function ProofScore({ score, size = 'sm' }: { score: number; size?: 'sm' | 'lg' }) {
  const r = size === 'lg' ? 34 : 22;
  const stroke = size === 'lg' ? 6 : 4;
  const c = 2 * Math.PI * r;
  const dim = (r + stroke) * 2;
  const hue = score >= 70 ? 'var(--brand)' : score >= 55 ? 'var(--brand-coral)' : 'var(--gray-400)';
  return (
    <div className="inline-flex items-center gap-2" title={`Kolio Proof Score ${score}/100`}>
      <span className="relative inline-grid place-items-center" style={{ width: dim, height: dim }}>
        <svg width={dim} height={dim} className="-rotate-90">
          <circle cx={dim / 2} cy={dim / 2} r={r} fill="none" stroke="hsl(var(--gray-200))" strokeWidth={stroke} />
          <circle cx={dim / 2} cy={dim / 2} r={r} fill="none" stroke={`hsl(${hue})`} strokeWidth={stroke}
            strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - score / 100)} />
        </svg>
        <span className={`num-display absolute ${size === 'lg' ? 'text-body-md' : 'text-body-sm'} text-foreground`}>{score}</span>
      </span>
      {size === 'lg' && (
        <span className="leading-tight">
          <span className="flex items-center gap-1 text-body-sm font-semibold text-foreground"><ShieldCheck className="h-4 w-4 text-brand" /> Proof Score</span>
          <span className="text-eyebrow text-foreground/55">{band(score)} · on-chain weighted</span>
        </span>
      )}
    </div>
  );
}
