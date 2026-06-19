/** Compact number formatting used across influencer stat tiles (773k, 1.2M). */
export function compact(n: number): string {
  if (n >= 1_000_000) {
    const v = n / 1_000_000;
    return `${v >= 100 ? Math.round(v) : trim(v)}M`;
  }
  if (n >= 1_000) {
    const v = n / 1_000;
    return `${trim(v)}k`;
  }
  return `${n}`;
}

function trim(v: number): string {
  return v.toFixed(1).replace(/\.0$/, '');
}

/** 0.0291 -> "2.91%" */
export function pct(n: number, digits = 2): string {
  return `${(n * 100).toFixed(digits)}%`;
}
