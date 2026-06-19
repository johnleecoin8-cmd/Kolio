import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS = [
  {
    q: 'What’s included in the free trial?',
    a: 'We offer a 14-day free trial with no credit card required. You get access to all platform features so you can explore Kolio, find and vet crypto KOLs, manage campaigns, track on-chain performance, and test integrations. The trial includes some usage limits: open and view up to 20 KOL profiles, unlock 6 KOL contact handles, and track 10 KOLs in campaigns. The free trial is intended for you to test key features and see if Kolio fits your web3 program.',
  },
  {
    q: 'What’s the difference between monthly and yearly billing?',
    a: 'Monthly billing gives you flexibility if you run campaigns around a single TGE, listing, or launch window. Annual billing saves you $100/month on Essentials and Performance plans. We offer this discount because brands that invest in long-term KOL relationships typically see better, more sustainable results than one-off shill campaigns.',
  },
  {
    q: 'How do on-chain payments and escrow work?',
    a: "On-chain Payments are included free with every Kolio plan. You connect a treasury wallet, fund a campaign into escrow, and the budget is released to the KOL only once deliverables are approved — no chargebacks and no chasing invoices. Payouts settle in stablecoins, on-chain, in minutes. Referral attribution and automated payout features are available on Performance Annual and Enterprise plans.",
  },
  {
    q: 'How do Kolio payout fees work?',
    a: 'Every plan includes a yearly fee-free payout limit. Once you go above that limit, a 5% fee applies only to the amount above it. Performance Annual: 0% fee up to $10,000 in total payout volume per year. Enterprise: 0% fee up to $100,000 in total payout volume per year for the first tier. KOLs receive the full payout amount approved by the brand — Kolio does not deduct any commission from KOL payments.',
  },
  {
    q: 'Do I have to commit to a full year?',
    a: 'No, absolutely not. You can choose between monthly or yearly plans and upgrade, downgrade, or cancel at any time. We offer big discounts for yearly plans because we’ve seen that brands who build long-term relationships with KOLs get better, more sustainable outcomes than brands who run short-term, transactional shill campaigns.',
  },
  {
    q: 'Can I change my plan after I subscribe?',
    a: "You can upgrade or downgrade your plan anytime from your account settings. If you upgrade mid-cycle, you'll be charged a prorated amount for the rest of your billing period. If you downgrade, the change takes effect at the start of your next billing cycle. You can cancel anytime. Monthly plans cancel immediately. Annual plans remain active until the end of your prepaid term.",
  },
  {
    q: 'What counts toward my limits (profile views, exports, tracked KOLs, contact unlocks)?',
    a: 'Profile views: each time you open a detailed KOL profile to see their full analytics, audience quality, and content performance, it counts as one profile view. Contact unlocks: when you reveal a KOL’s public contact handles (Telegram, email, or DM) from their profile, it counts as one unlock. Tracked KOLs: the maximum number of KOLs you can actively monitor in campaigns simultaneously. All these limits reset at the beginning of each billing cycle.',
  },
  {
    q: 'What happens if I pass the limits of my plan?',
    a: 'In case you go over the limits of your plan, you can upgrade to a bigger plan or ask us to build a custom plan just for you. This isn’t something you need to worry about, we’ll always find a solution for you.',
  },
  {
    q: 'What happens to my data if I cancel?',
    a: 'Your account stays active until the end of your current billing period. After that you can export your data (KOL lists, campaign reports, attribution data, etc.) before your subscription ends. Once your subscription expires, you\'ll lose access to the platform. We keep your account data for 90 days after cancellation in case you decide to come back. After 90 days, your data is permanently deleted from our systems.',
  },
  {
    q: 'Are there any additional fees besides the subscription?',
    a: 'Your Kolio subscription covers all platform features. There are no setup fees, onboarding fees, or hidden charges beyond your monthly or annual plan cost. The only additional fees you\'ll encounter relate to on-chain payouts on Essentials and Performance plans, which charge a small fee per payout above your fee-free limit. Annual Performance plans include $10,000 in fee-free payouts. Standard network gas fees may also apply to on-chain settlements.',
  },
  {
    q: 'Can I pay by invoice / do you support VAT / what payment methods do you accept?',
    a: 'We accept all major credit cards (Visa, Mastercard, American Express) and stablecoin payment for subscriptions. Invoice/bank transfer is available for all annual plans. We support VAT for EU customers and provide compliant invoices. Your billing address determines applicable taxes. All payments are processed securely.',
  },
];

/** Pricing FAQ accordion. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background pb-8">
      <Container>
        <div className="rounded-2xl bg-gray-50 px-6 py-12 md:px-16 md:py-16">
          <h2 className="mb-8 text-[1.75rem] font-bold leading-tight text-foreground md:text-[2rem]">
            Frequently asked questions
          </h2>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="py-3">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-2 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-body-md font-semibold text-foreground">
                      {f.q}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gray-100 text-foreground">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-2 max-w-[820px] text-body-sm leading-relaxed text-foreground/75">
                      {f.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
