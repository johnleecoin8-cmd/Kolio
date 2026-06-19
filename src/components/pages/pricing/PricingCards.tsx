import { useState } from 'react';
import { ChevronDown, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/cn';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

type FeatureItem = { label: string; note?: string };
type FeatureGroup = { heading?: string; shopify?: boolean; items: FeatureItem[] };

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
    subtitle: 'For campaigns with up to 100 creators.',
    tagline: 'Validate influencer marketing before you scale.',
    monthly: '$299',
    yearly: '$199',
    yearlyTotal: '$2,388 paid yearly',
    discount: '-33%',
    cta: 'Try for free',
    ctaVariant: 'primary',
    ctaHref: 'https://marketer.modash.io/register/marketer',
    usage: [
      { label: '2 team members' },
      {
        label: '300 opened profiles',
        note: 'Profiles include everything you need to evaluate and communicate with a creator on a single platform. This limit resets monthly.',
      },
      {
        label: '150 unlocked creator emails',
        note: 'Access emails that creators list publicly in their profiles. This limit resets monthly.',
      },
      {
        label: '100 tracked creators',
        note: 'Content tracking monitors posts across all platforms for a specific creator profile. This limit resets monthly.',
      },
    ],
    includedLabel: 'Included in Essentials',
    groups: [
      {
        items: [
          {
            label: 'Manage',
            note: 'An influencer CRM built to manage lists and relationships as you grow',
          },
          {
            label: 'Discover',
            note: 'A deep search engine with 350M+ profiles to help you find and evaluate creators',
          },
          {
            label: 'Track',
            note: 'An automatic content collector and metrics tracker for your campaigns',
          },
          {
            label: 'Inbox integration',
            note: 'Connect Gmail or Outlook to access an Inbox that knows you’re talking to creators',
          },
          { label: 'Support', note: '24/7 in-platform chat, email and Help Center' },
        ],
      },
      {
        shopify: true,
        heading: 'Shopify Integration',
        items: [
          {
            label: 'Gifting',
            note: 'Send free products to influencers, automatically track who posts and more!',
          },
          { label: 'Support', note: '24/7 in-platform chat, email and Help Center' },
        ],
      },
    ],
  },
  {
    name: 'Performance',
    subtitle: 'For campaigns up to 250 creators.',
    tagline: 'Scale your program with confidence.',
    recommended: true,
    monthly: '$599',
    yearly: '$499',
    yearlyTotal: '$5,988 paid yearly',
    discount: '-16%',
    cta: 'Try for free',
    ctaVariant: 'accent',
    ctaHref: 'https://marketer.modash.io/register/marketer',
    usage: [
      { label: '5 team members' },
      {
        label: '800 opened profiles',
        note: 'Profiles include everything you need to evaluate and communicate with a creator on a single platform. This limit resets monthly.',
      },
      {
        label: '400 unlocked creator emails',
        note: 'Access emails that creators list publicly in their profiles. This limit resets monthly.',
      },
      {
        label: '250 tracked creators’ content',
        note: 'Content tracking monitors posts across all platforms for a specific creator profile. This limit resets monthly.',
      },
    ],
    includedLabel: 'Everything in Essentials, plus',
    groups: [
      {
        items: [
          {
            label: 'Influential fans',
            note: 'Discover up to 6,000 creators per month who already follow and engage with your brand on Instagram, YouTube, or TikTok.',
          },
          {
            label: 'Download content',
            note: 'Download all creator content, including posts, Reels, Stories from Instagram, and all content from TikTok & YouTube.',
          },
          {
            label: 'Export campaign data',
            note: 'Export campaign results in CSV or Excel. Exports include all campaign performance data within your selected date range.',
          },
          {
            label: 'Payments (0% fee up to $10K/yr)',
            note: 'Send fast, secure payouts to creators worldwide. 0% fee up to $10,000/yr limit applies to Payments + Affiliates (combined). 5% fee applies after.',
          },
        ],
      },
      {
        shopify: true,
        heading: 'Shopify Integration',
        items: [
          {
            label: 'Affiliate management (0% fee up to $10K/yr)',
            note: 'Create affiliate links, track sales, and automate commission-based payouts. 0% fee $10,000/yr limit applies to Payments + Affiliates (combined). 5% fee applies after.',
          },
          { label: 'Support', note: '24/7 in-platform chat, email and Help Center' },
        ],
      },
    ],
  },
  {
    name: 'Enterprise',
    subtitle: 'For campaigns above 250 creators.',
    tagline: 'Run influencer marketing as a global growth engine.',
    isEnterprise: true,
    monthly: '$14,700',
    yearly: '$14,700',
    yearlyTotal: 'Customizable',
    discount: '',
    cta: 'Talk to sales',
    ctaVariant: 'primary',
    ctaHref: 'https://www.modash.io/book-demo',
    usage: [
      { label: 'More team members' },
      {
        label: 'More opened profiles',
        note: 'Profiles include everything you need to evaluate and communicate with a creator on a single platform. This limit resets monthly.',
      },
      {
        label: 'More unlocked creator emails',
        note: 'Access emails that creators list publicly in their profiles. This limit resets monthly.',
      },
      {
        label: "More tracked creators' content",
        note: 'Content tracking monitors posts across all platforms for a specific creator profile. This limit resets monthly.',
      },
    ],
    includedLabel: 'Everything in Performance, plus',
    groups: [
      {
        items: [
          {
            label: 'Payments (starts at 0% fee on payouts up to $100,000/y)',
            note: 'Send fast, secure payouts to creators across 180+ countries in local currency.',
          },
          {
            label: 'Custom domain for links',
            note: 'Your own branded domain for tracking links',
          },
        ],
      },
      {
        shopify: true,
        heading: 'Shopify Integration',
        items: [
          {
            label: 'Affiliate management (starts at 0% fee on payouts up to $100,000/y)',
            note: 'Create affiliate links, track sales, and automate commission-based payouts.',
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
        <ButtonA href={plan.ctaHref} variant={plan.ctaVariant} className="w-full">
          {plan.cta}
        </ButtonA>
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
                {group.shopify && <ShoppingBag size={16} className="text-foreground/70" />}
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
