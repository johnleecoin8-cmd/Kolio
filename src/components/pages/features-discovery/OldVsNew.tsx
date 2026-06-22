import ComparisonBlock from '@/components/kit/ComparisonBlock';

const ROWS = [
  { old: 'Scrolling Crypto Twitter for hours', better: 'Search by niche, chain & audience' },
  { old: 'Manual handle spreadsheets', better: 'One-click shortlist into a campaign' },
  { old: 'Trusting raw follower counts', better: 'Proof-based reach & engagement' },
  { old: 'Bots & bought engagement slip through', better: 'Audience-quality scoring up front' },
  { old: 'No way to find more like a winner', better: 'Lookalike KOL matching' },
  { old: 'Screenshot-only media kits', better: 'On-chain campaign track records' },
];

/** Old-way vs Kolio-way shortlist comparison (kit ComparisonBlock). */
export default function OldVsNew() {
  return (
    <ComparisonBlock
      heading="A faster way to shortlist KOLs you’re confident to fund"
      oldLabel="Shortlisting KOLs the old way"
      newLabel="shortlisting"
      rows={ROWS}
    />
  );
}
