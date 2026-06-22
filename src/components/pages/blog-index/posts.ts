/** Original Kolio editorial — the proof-layer playbook for crypto KOL marketing.
 *  All copy original; no external assets. */
export type Post = {
  slug: string;
  title: string;
  dek: string;
  topic: string;
  readMin: number;
  date: string;
  initials: string; // author avatar fallback
  author: string;
};

export const featured: Post = {
  slug: 'proof-score-explained',
  title: 'The Proof Score: scoring a crypto KOL on what actually moves on-chain',
  dek: 'Follower counts lie. We break down the four signals — real holders, engaged wallets, repeat reach, and bot share — that turn a creator profile into a number you can underwrite a budget against.',
  topic: 'Methodology',
  readMin: 9,
  date: 'Jun 18, 2026',
  initials: 'KO',
  author: 'Kolio Research',
};

export const posts: Post[] = [
  {
    slug: 'escrow-payouts-usdc',
    title: 'Why we settle KOL deals in escrow, not invoices',
    dek: 'How on-chain escrow removes the trust gap between brand and creator — funds locked up front, released only on verified delivery.',
    topic: 'On-chain',
    readMin: 6,
    date: 'Jun 14, 2026',
    initials: 'AV',
    author: 'Ava Nguyen',
  },
  {
    slug: 'attribution-without-cookies',
    title: 'Attributing a campaign when there are no cookies',
    dek: 'Referral codes, wallet tagging, and link-level signals: a practical attribution stack for campaigns that live entirely in web3.',
    topic: 'Attribution',
    readMin: 7,
    date: 'Jun 09, 2026',
    initials: 'DR',
    author: 'Diego Ruiz',
  },
  {
    slug: 'spotting-fake-reach',
    title: 'Six tells of inflated reach on Crypto Twitter',
    dek: 'A field guide to engagement pods, recycled impressions, and the metrics that survive a real audit.',
    topic: 'Vetting',
    readMin: 5,
    date: 'Jun 03, 2026',
    initials: 'MK',
    author: 'Mia Kang',
  },
  {
    slug: 'tge-launch-window',
    title: 'Timing KOL reach around your TGE window',
    dek: 'Sequencing creators across the pre-listing, listing, and post-listing windows so reach compounds instead of peaking early.',
    topic: 'Playbook',
    readMin: 8,
    date: 'May 28, 2026',
    initials: 'JL',
    author: 'Jonah Levi',
  },
  {
    slug: 'brief-that-converts',
    title: 'Writing a KOL brief a creator actually wants to run',
    dek: 'The difference between a brief that gets ignored and one that gets a same-day yes — with the structure our top campaigns reuse.',
    topic: 'Playbook',
    readMin: 6,
    date: 'May 21, 2026',
    initials: 'SR',
    author: 'Sana Raza',
  },
  {
    slug: 'reading-holder-overlap',
    title: 'Reading holder overlap before you book',
    dek: 'Two KOLs can have identical follower counts and a 70% audience overlap. Here is how to map it before the budget is committed.',
    topic: 'Methodology',
    readMin: 7,
    date: 'May 15, 2026',
    initials: 'TC',
    author: 'Theo Carr',
  },
];
