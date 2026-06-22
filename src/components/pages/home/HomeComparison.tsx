import ComparisonBlock from '@/components/kit/ComparisonBlock';

const ROWS = [
  {
    old: 'KOL discovery happens in DMs, group chats, and a referral you half-trust.',
    better: 'Search 12,000+ vetted KOLs by audience, chain, and Proof Score in seconds.',
  },
  {
    old: 'You pay on follower count and hope the audience is real.',
    better: 'See bot share and engagement quality before a dollar leaves escrow.',
  },
  {
    old: 'Briefs, drafts, and deadlines scatter across spreadsheets and Telegram.',
    better: 'One shared workflow holds every brief, approval, and deliverable.',
  },
  {
    old: 'You wire payment up front and chase deliverables afterwards.',
    better: 'Budget sits in on-chain escrow and releases only on delivery.',
  },
  {
    old: '"Did it work?" is a vibe, not a number you can report.',
    better: 'On-chain attribution ties every post to sign-ups, swaps, and mints.',
  },
];

/** Old crypto-KOL way vs the Kolio way. */
export default function HomeComparison() {
  return <ComparisonBlock rows={ROWS} />;
}
