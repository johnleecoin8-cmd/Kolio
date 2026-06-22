import StatTrio from '@/components/kit/StatTrio';

/** Cited payout proof stats for the on-chain payments page. */
export default function PayoutStats() {
  return (
    <StatTrio
      stats={[
        { value: 48.2, suffix: 'M', prefix: '$', decimals: 1, label: 'USDC paid out to KOLs' },
        { value: 99.6, suffix: '%', decimals: 1, label: 'Payouts settled on-chain on time' },
        { value: 4.1, suffix: 's', decimals: 1, label: 'Median release-to-wallet time' },
      ]}
      source="Source: Kolio settlement ledger, trailing 12 months (Base + Solana payouts)."
    />
  );
}
