import { useState } from 'react';
import { Check } from 'lucide-react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

type Plan = {
  name: string;
  subtitle: string;
  tagline: string;
  recommended?: boolean;
  monthly: string;
  yearly: string;
  yearlyTotal: string;
  discount: string;
  cta: string;
  ctaVariant: 'primary' | 'accent';
  ctaHref: string;
  usage: { label: string; note: string }[];
  includedLabel: string;
  included: { label: string; note: string }[];
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
    ctaHref: 'https://app.modash.io/signup',
    usage: [
      { label: '2 team members', note: '' },
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
    included: [
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
      {
        label: 'Support',
        note: '24/7 in-platform chat, email and Help Center',
      },
      {
        label: 'Gifting',
        note: 'Send free products to influencers, automatically track who posts and more!',
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
    ctaHref: 'https://app.modash.io/signup',
    usage: [
      { label: '5 team members', note: '' },
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
    included: [
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
      {
        label: 'Affiliate management (0% fee up to $10K/yr)',
        note: 'Create affiliate links, track sales, and automate commission-based payouts. 0% fee $10,000/yr limit applies to Payments + Affiliates (combined). 5% fee applies after.',
      },
    ],
  },
  {
    name: 'Enterprise',
    subtitle: 'For campaigns above 250 creators.',
    tagline: 'Run influencer marketing as a global growth engine.',
    monthly: '$14,700',
    yearly: '$14,700',
    yearlyTotal: 'billed yearly',
    discount: '',
    cta: 'Talk to sales',
    ctaVariant: 'primary',
    ctaHref: 'https://www.modash.io/book-demo',
    usage: [
      { label: 'More team members', note: '' },
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
    included: [
      {
        label: 'Payments (0% fee on payouts up to $100,000/y)',
        note: 'Send fast, secure payouts to creators across 180+ countries in local currency.',
      },
      {
        label: 'Custom domain for links',
        note: 'Your own branded domain for tracking links',
      },
      {
        label: 'Affiliate management (0% fee up to $100,000/y)',
        note: 'Create affiliate links, track sales, and automate commission-based payouts.',
      },
      {
        label: 'Support',
        note: 'Dedicated success manager for onboarding, monthly strategy calls, quarterly reviews, and seamless migration.',
      },
    ],
  },
];

export default function PricingCards() {
  const [yearly, setYearly] = useState(true);

  return (
    <section className="bg-background pt-10 pb-16 md:pt-12 md:pb-24">
      <Container>
        {/* Billing toggle */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-pill border border-gray-200 bg-white p-1">
            <button
              onClick={() => setYearly(true)}
              className={`rounded-pill px-4 py-2 text-body-sm font-semibold transition ${
                yearly ? 'bg-ink text-white' : 'text-gray-600 hover:text-foreground'
              }`}
            >
              Yearly
            </button>
            <button
              onClick={() => setYearly(false)}
              className={`rounded-pill px-4 py-2 text-body-sm font-semibold transition ${
                !yearly ? 'bg-ink text-white' : 'text-gray-600 hover:text-foreground'
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} yearly={yearly} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function PlanCard({ plan, yearly }: { plan: Plan; yearly: boolean }) {
  const isEnterprise = plan.name === 'Enterprise';
  const price = yearly ? plan.yearly : plan.monthly;

  return (
    <div
      className={`relative flex flex-col rounded-xl border bg-white p-6 md:p-7 ${
        plan.recommended
          ? 'border-pink shadow-nav'
          : 'border-black/10'
      }`}
    >
      {plan.recommended && (
        <span className="absolute -top-3 left-6 rounded-pill bg-pink px-3 py-1 text-eyebrow font-semibold uppercase tracking-wide text-ink">
          Recommended
        </span>
      )}

      <h3 className="font-display text-h4 text-foreground">{plan.name}</h3>
      <p className="mt-2 text-body-sm text-foreground/60">{plan.subtitle}</p>
      <p className="mt-1 text-body-sm font-semibold text-foreground">
        {plan.tagline}
      </p>

      <div className="mt-6">
        <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
          Starts at
        </p>
        <div className="mt-1 flex items-end gap-2">
          {!isEnterprise && !yearly && (
            <span className="text-body-md text-foreground/40 line-through">
              {plan.monthly}
            </span>
          )}
          <span className="font-display text-[2.5rem] leading-none text-foreground">
            {price}
          </span>
          {!isEnterprise && (
            <span className="pb-1 text-body-sm text-foreground/60">
              {yearly ? '/ month' : 'Monthly'}
            </span>
          )}
          {isEnterprise && (
            <span className="pb-1 text-body-sm text-foreground/60">Yearly</span>
          )}
        </div>
        {!isEnterprise && (
          <div className="mt-2 flex items-center gap-2">
            <span className="text-body-sm text-foreground/60">
              {plan.yearlyTotal}
            </span>
            {plan.discount && (
              <span className="rounded-pill bg-lime px-2 py-0.5 text-eyebrow font-semibold text-ink">
                {plan.discount}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="mt-6">
        <ButtonA
          href={plan.ctaHref}
          variant={plan.ctaVariant}
          className="w-full"
        >
          {plan.cta}
        </ButtonA>
      </div>

      {/* Usage limits */}
      <ul className="mt-7 space-y-4 border-t border-black/10 pt-6">
        {plan.usage.map((u) => (
          <li key={u.label} className="flex gap-3">
            <Check
              size={18}
              className="mt-0.5 shrink-0 text-foreground"
              strokeWidth={2.5}
            />
            <div>
              <p className="text-body-sm font-semibold text-foreground">
                {u.label}
              </p>
              {u.note && (
                <p className="mt-1 text-body-sm leading-snug text-foreground/55">
                  {u.note}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Included features */}
      <p className="mt-7 text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
        {plan.includedLabel}
      </p>
      <ul className="mt-4 space-y-4">
        {plan.included.map((f) => (
          <li key={f.label} className="flex gap-3">
            <Check
              size={18}
              className="mt-0.5 shrink-0 text-foreground"
              strokeWidth={2.5}
            />
            <div>
              <p className="text-body-sm font-semibold text-foreground">
                {f.label}
              </p>
              <p className="mt-1 text-body-sm leading-snug text-foreground/55">
                {f.note}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
