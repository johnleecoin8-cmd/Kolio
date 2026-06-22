import { Link } from 'react-router-dom';
import { Check, Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';

type Tier = {
  name: string;
  blurb: string;
  anchor?: string;
  price: string;
  unit: string;
  fee: string;
  cta: string;
  to: string;
  recommended?: boolean;
  features: string[];
};

const TIERS: Tier[] = [
  {
    name: 'Explore',
    blurb: 'For founders running their first proof-based campaign.',
    price: '$0',
    unit: 'to start',
    fee: '4% settlement fee on escrowed spend',
    cta: 'Start free',
    to: '/influencer-database',
    features: [
      'Search the full KOL index',
      'Proof Score on every profile',
      '1 active escrow deal',
      'On-chain payout receipts',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    blurb: 'For teams running always-on crypto KOL programs.',
    anchor: '$499',
    price: '$299',
    unit: '/ mo + usage',
    fee: '2.5% settlement fee on escrowed spend',
    cta: 'Choose Growth',
    to: '/demo-confirmation',
    recommended: true,
    features: [
      'Everything in Explore',
      'Unlimited active escrow deals',
      'Audience holder overlap analysis',
      'Attribution links + on-chain conversions',
      'Dispute resolution & milestone splits',
      'Priority support',
    ],
  },
  {
    name: 'Scale',
    blurb: 'For agencies and protocols with high monthly spend.',
    price: 'Custom',
    unit: 'volume pricing',
    fee: 'Negotiated settlement fee',
    cta: 'Talk to us',
    to: '/demo-confirmation',
    features: [
      'Everything in Growth',
      'Lowest settlement fee tier',
      'Multi-seat workspace + roles',
      'Whitelisted treasury wallets',
      'Dedicated KOL sourcing desk',
      'SLA & onboarding manager',
    ],
  },
];

function TierCard({ t, lift }: { t: Tier; lift: string }) {
  const dark = t.recommended;
  return (
    <div
      className={`${dark ? 'surface-onchain text-white' : 'card-kit text-foreground'} shadow-float relative flex flex-col rounded-2xl p-7 transition hover:-translate-y-1 ${lift}`}
    >
      {t.recommended && (
        <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-pill bg-gradient-brand px-4 py-1.5 text-eyebrow font-bold text-white shadow-float-sm">
          <Sparkles className="h-3.5 w-3.5" /> Recommended
        </span>
      )}

      <div className="flex items-center gap-2">
        <h3 className={`text-h5 font-semibold ${dark ? 'text-white' : 'text-foreground'}`}>{t.name}</h3>
      </div>
      <p className={`mt-2 min-h-[2.75rem] text-body-sm ${dark ? 'text-white/60' : 'text-foreground/55'}`}>
        {t.blurb}
      </p>

      <div className="mt-6 flex items-end gap-2">
        {t.anchor && (
          <span className={`num-display text-body-md line-through ${dark ? 'text-white/40' : 'text-foreground/35'}`}>
            {t.anchor}
          </span>
        )}
        <span className={`num-display text-[2.75rem] leading-none ${dark ? 'text-white' : 'text-foreground'}`}>
          {t.price}
        </span>
        <span className={`mb-1.5 text-body-sm ${dark ? 'text-white/50' : 'text-foreground/45'}`}>{t.unit}</span>
      </div>

      <div
        className={`mt-4 inline-flex w-fit items-center rounded-pill px-3 py-1.5 font-mono-tnum text-eyebrow ${
          dark ? 'bg-white/10 text-mint' : 'bg-coral-bg text-brand'
        }`}
      >
        {t.fee}
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {t.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-body-sm">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? 'text-mint' : 'text-brand'}`} />
            <span className={dark ? 'text-white/80' : 'text-foreground/75'}>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        to={t.to}
        className={`mt-8 inline-flex items-center justify-center rounded-pill px-5 py-3 font-semibold transition ${
          dark
            ? 'pill-light shadow-float-sm hover:opacity-90'
            : t.recommended
              ? 'bg-brand text-white hover:opacity-90'
              : 'border border-black/10 bg-white text-foreground hover:bg-black/[0.03]'
        }`}
      >
        {t.cta}
      </Link>
    </div>
  );
}

/** Usage-based 3-tier pricing in floating cards. Middle tier dark + "Recommended", strikethrough anchor. */
export default function PricingTiers() {
  return (
    <section className="canvas-warm py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-brand">Plans</span>
          <h2 className="display-light mt-3 text-[2.25rem] leading-[1.05] text-foreground md:text-[3.25rem]">
            One escrow rail, three ways to ride it
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-md text-foreground/60">
            No seats to count, no surprise overage. You pay a small settlement fee only when a campaign clears escrow.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          <TierCard t={TIERS[0]} lift="md:translate-y-3" />
          <TierCard t={TIERS[1]} lift="" />
          <TierCard t={TIERS[2]} lift="md:translate-y-3" />
        </div>

        <p className="mt-8 text-center font-mono-tnum text-eyebrow text-foreground/40">
          Settlement fee applies to escrowed campaign spend only. No charge on unspent budget.
        </p>
      </Container>
    </section>
  );
}
