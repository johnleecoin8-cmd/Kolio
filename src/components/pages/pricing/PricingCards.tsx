import { useState } from 'react';
import { ChevronDown, Link2 } from 'lucide-react';
import { cn } from '@/lib/cn';
import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

type FeatureItem = { label: string; note?: string };
type FeatureGroup = { heading?: string; onchain?: boolean; items: FeatureItem[] };

type Plan = {
  name: string;
  subtitle: string;
  tagline: string;
  recommended?: boolean;
  isEnterprise?: boolean;
  monthly: string;
  yearly: string;
  yearlyTotal: string;
  discount: string;
  cta: string;
  ctaVariant: 'primary' | 'accent';
  ctaHref: string;
  /** First line is a plain text item (no accordion); rest are accordions. */
  usage: FeatureItem[];
  includedLabel: string;
  groups: FeatureGroup[];
};

const PLANS: Plan[] = [
  {
    name: 'Essentials',
    subtitle: 'For campaigns with up to 100 crypto KOLs.',
    tagline: 'Validate web3 influencer marketing before you scale.',
    monthly: '$299',
    yearly: '$199',
    yearlyTotal: '$2,388 paid yearly',
    discount: '-33%',
    cta: 'Start free',
    ctaVariant: 'primary',
    ctaHref: '/demo-confirmation',
    usage: [
      { label: '2 team members' },
      {
        label: '300 opened KOL profiles',
        note: 'Each profile bundles real reach, audience-quality scores, and contact details so you can vet a crypto KOL on a single screen. This limit resets monthly.',
      },
      {
        label: '150 unlocked KOL contacts',
        note: 'Reveal the public contact handles — Telegram, email, or DM — that KOLs list on their profiles. This limit resets monthly.',
      },
      {
        label: '100 tracked KOLs',
        note: 'Campaign tracking monitors posts across X, YouTube, TikTok, and Telegram for a specific KOL. This limit resets monthly.',
      },
    ],
    includedLabel: 'Included in Essentials',
    groups: [
      {
        items: [
          {
            label: 'Manage',
            note: 'A KOL relationship manager built to organize lists, deals, and conversations as you grow',
          },
          {
            label: 'Discover',
            note: 'A proof-based search engine across DeFi, NFT, L1/L2, trading, and gaming niches to find and vet crypto KOLs',
          },
          {
            label: 'Track',
            note: 'An automatic content collector and metrics tracker for your web3 campaigns',
          },
          {
            label: 'Inbox integration',
            note: 'Connect Gmail, Outlook, or Telegram to run KOL outreach where the conversations already live',
          },
          { label: 'Support', note: '24/7 in-platform chat, email and Help Center' },
        ],
      },
      {
        onchain: true,
        heading: 'On-chain Payments',
        items: [
          {
            label: 'Escrow deals',
            note: 'Fund a campaign into on-chain escrow and release once the KOL delivers — no chargebacks, no chasing invoices.',
          },
          { label: 'Support', note: '24/7 in-platform chat, email and Help Center' },
        ],
      },
    ],
  },
  {
    name: 'Performance',
    subtitle: 'For campaigns up to 250 crypto KOLs.',
    tagline: 'Scale your web3 program with confidence.',
    recommended: true,
    monthly: '$599',
    yearly: '$499',
    yearlyTotal: '$5,988 paid yearly',
    discount: '-16%',
    cta: 'Start free',
    ctaVariant: 'accent',
    ctaHref: '/demo-confirmation',
    usage: [
      { label: '5 team members' },
      {
        label: '800 opened KOL profiles',
        note: 'Each profile bundles real reach, audience-quality scores, and contact details so you can vet a crypto KOL on a single screen. This limit resets monthly.',
      },
      {
        label: '400 unlocked KOL contacts',
        note: 'Reveal the public contact handles — Telegram, email, or DM — that KOLs list on their profiles. This limit resets monthly.',
      },
      {
        label: '250 tracked KOLs’ content',
        note: 'Campaign tracking monitors posts across X, YouTube, TikTok, and Telegram for a specific KOL. This limit resets monthly.',
      },
    ],
    includedLabel: 'Everything in Essentials, plus',
    groups: [
      {
        items: [
          {
            label: 'On-chain audience',
            note: 'Surface up to 6,000 KOLs per month whose audiences already hold, trade, or engage with your token, chain, or protocol.',
          },
          {
            label: 'Download content',
            note: 'Archive every KOL post, thread, Space, and video across X, YouTube, TikTok, and Telegram.',
          },
          {
            label: 'Export campaign data',
            note: 'Export campaign results in CSV or Excel. Exports include all on-chain and social performance data within your selected date range.',
          },
          {
            label: 'On-chain payouts (0% fee up to $10K/yr)',
            note: 'Send instant stablecoin payouts to KOLs anywhere. 0% fee up to $10,000/yr applies to Payouts + Referrals (combined). 5% fee applies after.',
          },
        ],
      },
      {
        onchain: true,
        heading: 'On-chain Payments',
        items: [
          {
            label: 'Referral attribution (0% fee up to $10K/yr)',
            note: 'Issue on-chain referral links, attribute wallet sign-ups and trades, and automate performance-based payouts. 0% fee up to $10,000/yr applies to Payouts + Referrals (combined). 5% fee applies after.',
          },
          { label: 'Support', note: '24/7 in-platform chat, email and Help Center' },
        ],
      },
    ],
  },
  {
    name: 'Enterprise',
    subtitle: 'For campaigns above 250 crypto KOLs.',
    tagline: 'Run web3 KOL marketing as a global growth engine.',
    isEnterprise: true,
    monthly: '$14,700',
    yearly: '$14,700',
    yearlyTotal: 'Customizable',
    discount: '',
    cta: 'Talk to sales',
    ctaVariant: 'primary',
    ctaHref: '/demo-confirmation',
    usage: [
      { label: 'More team members' },
      {
        label: 'More opened KOL profiles',
        note: 'Each profile bundles real reach, audience-quality scores, and contact details so you can vet a crypto KOL on a single screen. This limit resets monthly.',
      },
      {
        label: 'More unlocked KOL contacts',
        note: 'Reveal the public contact handles — Telegram, email, or DM — that KOLs list on their profiles. This limit resets monthly.',
      },
      {
        label: "More tracked KOLs' content",
        note: 'Campaign tracking monitors posts across X, YouTube, TikTok, and Telegram for a specific KOL. This limit resets monthly.',
      },
    ],
    includedLabel: 'Everything in Performance, plus',
    groups: [
      {
        items: [
          {
            label: 'On-chain payouts (starts at 0% fee on payouts up to $100,000/y)',
            note: 'Send instant stablecoin payouts to KOLs in 180+ countries, settled on-chain.',
          },
          {
            label: 'Custom domain for links',
            note: 'Your own branded domain for referral and attribution links',
          },
        ],
      },
      {
        onchain: true,
        heading: 'On-chain Payments',
        items: [
          {
            label: 'Referral attribution (starts at 0% fee on payouts up to $100,000/y)',
            note: 'Issue on-chain referral links, attribute wallet sign-ups and trades, and automate performance-based payouts.',
          },
          {
            label: 'Support',
            note: 'Dedicated success manager for onboarding, monthly strategy calls, quarterly reviews, and seamless migration.',
          },
        ],
      },
    ],
  },
];

export default function PricingCards() {
  return (
    <section className="bg-background pt-12 pb-16 md:pt-16 md:pb-24">
      <Container>
        <div className="rounded-2xl bg-gray-50 p-3 sm:p-5 md:p-6">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {PLANS.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const [yearly, setYearly] = useState(true);
  const price = yearly ? plan.yearly : plan.monthly;

  return (
    <div
      className={cn(
        'relative flex flex-col rounded-xl bg-white p-6 md:p-7',
        plan.recommended
          ? 'border-2 border-pink shadow-nav lg:-mt-9 lg:self-start lg:pt-9'
          : 'border border-black/[0.07]',
      )}
    >
      {plan.recommended && (
        <span className="mb-4 block text-body-sm text-foreground/80">Recommended</span>
      )}
      <h3 className="text-[1.9rem] font-bold leading-none text-foreground">{plan.name}</h3>
      <p className="mt-4 text-body-sm text-foreground/60">{plan.subtitle}</p>
      <p className="mt-1 text-body-sm font-semibold text-foreground">{plan.tagline}</p>

      {/* Price */}
      <div className="mt-6">
        <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/45">
          Starts at
        </p>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-[2.4rem] font-extrabold leading-none text-foreground">{price}</span>
          <span className="text-body-sm text-foreground/55">
            {plan.isEnterprise ? 'Yearly' : '/ month'}
          </span>
        </div>
      </div>

      {/* Per-card billing toggle / customizable */}
      {plan.isEnterprise ? null : (
        <div className="mt-3 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setYearly((v) => !v)}
            className="flex items-center gap-2"
            aria-pressed={yearly}
          >
            <span
              className={cn(
                'relative inline-flex h-5 w-9 items-center rounded-pill transition-colors',
                yearly ? 'bg-ink' : 'bg-gray-300',
              )}
            >
              <span
                className={cn(
                  'inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform',
                  yearly ? 'translate-x-[1.15rem]' : 'translate-x-[0.2rem]',
                )}
              />
            </span>
            <span className="text-body-sm text-foreground/70">{plan.yearlyTotal}</span>
          </button>
          {plan.discount && (
            <span className="rounded-pill bg-green-100 px-2 py-0.5 text-eyebrow font-semibold text-green-700">
              {plan.discount}
            </span>
          )}
        </div>
      )}

      {/* CTA */}
      <div className="mt-6">
        <ButtonLink to={plan.ctaHref} variant={plan.ctaVariant} className="w-full">
          {plan.cta}
        </ButtonLink>
      </div>

      {plan.isEnterprise && (
        <>
          <div className="mt-6 border-t border-black/10" />
          <p className="mt-6 text-body-sm text-foreground/55">Customizable</p>
        </>
      )}

      {/* Usage limits */}
      <div className="mt-6 border-t border-black/10 pt-6">
        <ul className="space-y-0.5">
          {plan.usage.map((u, i) =>
            i === 0 ? (
              <li key={u.label} className="px-1 py-2 text-body-sm font-medium text-foreground">
                {u.label}
              </li>
            ) : (
              <AccordionRow key={u.label} item={u} />
            ),
          )}
        </ul>
      </div>

      {/* Included features */}
      <div className="mt-6 border-t border-black/10 pt-6">
        <p className="text-body-md font-semibold text-foreground">{plan.includedLabel}</p>
        {plan.groups.map((group, gi) => (
          <div key={gi} className={gi > 0 ? 'mt-6' : 'mt-2'}>
            {group.heading && (
              <div className="mb-1 flex items-center gap-2">
                {group.onchain && <Link2 size={16} className="text-foreground/70" />}
                <span className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/55">
                  {group.heading}
                </span>
              </div>
            )}
            <ul className="space-y-0.5">
              {group.items.map((it) => (
                <AccordionRow key={it.label} item={it} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function AccordionRow({ item }: { item: FeatureItem }) {
  const [open, setOpen] = useState(false);
  if (!item.note) {
    return (
      <li className="px-1 py-2 text-body-sm font-medium text-foreground">{item.label}</li>
    );
  }
  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-2 px-1 py-2 text-left"
        aria-expanded={open}
      >
        <span className="text-body-sm font-medium text-foreground">{item.label}</span>
        <ChevronDown
          size={18}
          className={cn(
            'shrink-0 text-foreground/50 transition-transform',
            open && 'rotate-180',
          )}
        />
      </button>
      {open && (
        <p className="px-1 pb-3 text-body-sm leading-snug text-foreground/55">{item.note}</p>
      )}
    </li>
  );
}
