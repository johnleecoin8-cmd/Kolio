/** Shared number/format helpers for live backend-driven UI. */
export const fmt = (n: number | null | undefined): string => {
  const v = Number(n ?? 0);
  if (v >= 1e9) return (v / 1e9).toFixed(1) + 'B';
  if (v >= 1e6) return (v / 1e6).toFixed(1) + 'M';
  if (v >= 1e3) return (v / 1e3).toFixed(1) + 'K';
  return '' + Math.round(v);
};

export const pct = (n: number | null | undefined, digits = 1): string =>
  ((Number(n ?? 0)) * 100).toFixed(digits) + '%';

export const PLATFORM_LABEL: Record<string, string> = {
  instagram: 'Instagram', tiktok: 'TikTok', youtube: 'YouTube', x: 'X',
};

export const CATEGORIES = [
  'crypto', 'beauty', 'fitness', 'fashion', 'food',
  'tech', 'gaming', 'travel', 'finance', 'lifestyle',
];
