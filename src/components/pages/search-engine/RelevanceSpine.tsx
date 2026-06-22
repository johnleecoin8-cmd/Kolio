import ComparisonBlock from '@/components/kit/ComparisonBlock';

const ROWS = [
  {
    old: 'Sort by follower count and hope the audience overlaps',
    better: 'Sort by relevance — audience match is the ranking signal',
  },
  {
    old: 'Eyeball spreadsheets to guess who is real',
    better: 'Every result is bot-screened and proof-scored before it ranks',
  },
  {
    old: 'DM a hundred handles, half of them dead or fake',
    better: 'Verified contact channel surfaces on each ranked result',
  },
  {
    old: 'Wire transfers, invoices, and trust-me payouts',
    better: 'On-chain escrow releases on delivery, tracked to source',
  },
];

/** Relevance-sort spine: old-way vs Kolio-way on a soft neutral surface. */
export default function RelevanceSpine() {
  return (
    <div className="bg-gray-50">
      <ComparisonBlock
        heading="A search engine ranks for relevance. So does Kolio."
        oldLabel="Finding crypto KOLs the old way"
        newLabel="ranking on Kolio"
        rows={ROWS}
      />
    </div>
  );
}
