import StatTrio from '@/components/kit/StatTrio';

/** Headline proof stats for the homepage, with a cited source line. */
export default function HomeStats() {
  return (
    <StatTrio
      stats={[
        { value: 12480, suffix: '+', label: 'Vetted crypto KOLs in the Kolio index' },
        { value: 38, suffix: '%', label: 'Average follower base flagged as bots before payout' },
        { value: 8.6, suffix: 'M', label: 'USDC settled through on-chain escrow', decimals: 1, prefix: '$' },
      ]}
      source="Source: Kolio index, rolling 90-day platform data (Jun 2026)"
    />
  );
}
