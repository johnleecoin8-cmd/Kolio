import Container from '@/components/ui/Container';
import { ArrowUpRight } from 'lucide-react';

type Case = {
  metric: string;        // the outcome headline (the result number)
  metricLabel: string;   // what the number measures
  brand: string;         // crypto brand wordmark
  vertical: string;      // niche / category
  summary: string;       // one-line outcome story
  proof: { value: string; label: string }[];
  lead?: boolean;        // bigger / dark focal card
};

const CASES: Case[] = [
  {
    metric: '2 hrs/day',
    metricLabel: 'manual KOL vetting eliminated',
    brand: 'Arbiscan',
    vertical: 'L2 explorer · DeFi',
    summary:
      'Replaced screenshot-based vetting with verified reach and real-audience scoring across 100 collabs a month.',
    proof: [
      { value: '100', label: 'collabs / month' },
      { value: '94%', label: 'real audience' },
      { value: '0', label: 'unverified DMs' },
    ],
    lead: true,
  },
  {
    metric: '6.2x',
    metricLabel: 'return on KOL spend',
    brand: 'Helix DEX',
    vertical: 'Perps · Trading',
    summary:
      'On-chain attribution tied every paid post to wallet sign-ups, killing the campaigns that did not convert.',
    proof: [
      { value: '6.2x', label: 'ROAS' },
      { value: '38K', label: 'wallets' },
    ],
  },
  {
    metric: '11 days',
    metricLabel: 'from brief to live campaign',
    brand: 'Lumen Wallet',
    vertical: 'Consumer · Wallet',
    summary:
      'Discovery, vetting, escrow and payout in one loop cut a six-week agency cycle to under two.',
    proof: [
      { value: '11', label: 'days to live' },
      { value: '23', label: 'KOLs booked' },
    ],
  },
  {
    metric: '0 disputes',
    metricLabel: 'across $480K in escrow',
    brand: 'Parity Protocol',
    vertical: 'Infra · L1',
    summary:
      'On-chain escrow released on delivery removed invoice chasing and wallet-address roulette entirely.',
    proof: [
      { value: '$480K', label: 'paid via escrow' },
      { value: '100%', label: 'on-time payout' },
    ],
  },
];

function ProofRow({
  proof,
  dark,
}: {
  proof: { value: string; label: string }[];
  dark?: boolean;
}) {
  return (
    <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t pt-5"
      style={{ borderColor: dark ? 'rgba(255,255,255,0.12)' : undefined }}>
      {proof.map((p) => (
        <div key={p.label}>
          <div
            className={`font-mono-tnum num-display text-body-lg ${
              dark ? 'text-white' : 'text-foreground'
            }`}
          >
            {p.value}
          </div>
          <div
            className={`text-eyebrow ${
              dark ? 'text-white/50' : 'text-foreground/50'
            }`}
          >
            {p.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function CaseCard({ c }: { c: Case }) {
  if (c.lead) {
    return (
      <article className="surface-onchain glow-brand md:col-span-2 flex flex-col rounded-2xl p-8 md:p-10">
        <div className="flex items-center justify-between">
          <span className="chip chip-onchain">Featured outcome</span>
          <span className="font-mono-tnum text-eyebrow text-white/45">
            {c.vertical}
          </span>
        </div>
        <p className="eyebrow mt-7 text-brand-coral">{c.metricLabel}</p>
        <h3 className="display-xl mt-2 font-display text-h1 leading-none text-white">
          {c.metric}
        </h3>
        <p className="mt-5 max-w-xl text-body-md leading-snug text-white/75">
          {c.summary}
        </p>
        <div className="mt-7 flex items-center gap-2">
          <span className="font-display text-body-lg tracking-tight text-white">
            {c.brand}
          </span>
        </div>
        <ProofRow proof={c.proof} dark />
      </article>
    );
  }
  return (
    <article className="card-kit flex flex-col p-7 transition-transform duration-300 hover:-translate-y-0.5">
      <div className="flex items-center justify-between">
        <span className="font-display text-body-lg tracking-tight text-foreground/80">
          {c.brand}
        </span>
        <ArrowUpRight className="h-4 w-4 text-foreground/30" />
      </div>
      <span className="mt-1 font-mono-tnum text-eyebrow text-foreground/45">
        {c.vertical}
      </span>
      <p className="eyebrow mt-6">{c.metricLabel}</p>
      <h3 className="display-lg mt-1 font-display text-h2 leading-none text-gradient-brand">
        {c.metric}
      </h3>
      <p className="mt-4 flex-1 text-body leading-snug text-foreground/75">
        {c.summary}
      </p>
      <ProofRow proof={c.proof} />
    </article>
  );
}

/** Outcome-titled case grid: each card headline IS the result number, in a premium card. */
export default function OutcomeCases() {
  return (
    <section className="bg-gray-50">
      <Container className="py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Customer outcomes</span>
          <h2 className="mt-3 display-lg font-display text-h2 text-foreground">
            The result, not the testimonial.
          </h2>
          <p className="mt-4 text-body-md text-foreground/65">
            Every card below leads with what changed on-chain. Crypto teams use
            Kolio to discover, verify, manage and pay KOLs in one loop — and
            here is what it earned them.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {CASES.map((c) => (
            <CaseCard key={c.brand} c={c} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export type { Case };
