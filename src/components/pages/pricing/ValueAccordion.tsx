import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

type Category = {
  icon: string;
  title: string;
  blurb: string;
  noBadge?: boolean;
  features: { name: string; desc: string }[];
};

const CATEGORIES: Category[] = [
  {
    icon: `${CDN}/68370b6a349bf837c4481e3b_ic_manage%20relationships.avif`,
    title: 'Manage',
    blurb: 'Keep every KOL relationship under control and the deal details out of your head',
    features: [
      { name: 'Import KOLs', desc: 'Bring your KOLs into Kolio by CSV, social handles, or wallet addresses' },
      { name: 'KOL contacts', desc: 'Find the Telegram, email, and DM handles KOLs list publicly on their profiles' },
      { name: 'Manage relationships', desc: 'Set statuses, add labels, documents, notes, rates, niches, and more' },
      { name: 'Profile sidebars', desc: 'Access full KOL context, including reach, audience quality, history, and status' },
      { name: 'Message KOLs', desc: 'Send personalized outreach with all campaign details added automatically' },
      { name: 'Team collaboration', desc: 'Share inboxes and assign ownership across the team' },
      { name: 'Manage lists', desc: 'Organize KOLs into manageable lists by sorting and filtering' },
      { name: 'Bulk actions', desc: 'Make changes across multiple KOLs and campaigns simultaneously' },
      { name: 'Export', desc: 'Export your entire KOL lists to CSV' },
    ],
  },
  {
    icon: `${CDN}/6837096d4faddb80cd0aec3f_ic_find%20influencers.avif`,
    title: 'Discover',
    blurb: 'Find the right crypto KOLs and know they’re legit before you reach out',
    features: [
      { name: 'Crypto KOL index', desc: 'Search vetted KOLs across X, YouTube, TikTok, and Telegram with real audiences' },
      { name: 'AI Search', desc: 'Find KOLs using natural language' },
      { name: 'Niche filters', desc: 'Filter by DeFi, NFTs, L1/L2, trading, gaming, and dozens more signals' },
      { name: 'Proof-based vetting', desc: 'See real reach and audience quality — not vanity follower counts or looks' },
      { name: 'Lookalikes', desc: 'Find KOLs with similar content or audiences to ones you already trust' },
      { name: 'On-chain audience', desc: 'Find KOLs whose followers already hold or trade your token or chain' },
      { name: 'KOL collabs', desc: 'See which projects, chains, and protocols a KOL has worked with before' },
      { name: 'Performance insights', desc: "Evaluate a KOL's accounts with engagement and authenticity analytics" },
      { name: 'Audience insights', desc: 'Evaluate a KOL’s audience by region, interests, bot rate, and quality' },
      { name: 'Download profiles', desc: 'Save a KOL PDF with metrics, audience breakdown, and content history' },
    ],
  },
  {
    icon: `${CDN}/68370b6b9eae2d6b80f9cac2_ic_measure%20results.avif`,
    title: 'Track',
    blurb: 'Automatically track web3 campaigns and spend your time doing literally anything else',
    features: [
      { name: 'Log conversions', desc: 'Log KOL-attributed sign-ups or trades yourself to measure campaign ROI' },
      { name: 'On-chain conversion tracking', desc: 'Attribute wallet sign-ups, trades, and volume back to each KOL automatically' },
      { name: 'Referral links & codes', desc: 'Generate unique referral links, UTMs, or promo codes automatically' },
      { name: 'Efficiency tracking', desc: 'Track CPM and cost-per-acquisition per KOL and per campaign' },
      { name: 'Awareness tracking', desc: 'Track reach, engagement, views, and EMV per KOL and per campaign' },
      { name: 'Content-level analytics', desc: 'See instant analytics for every post in real-time' },
      { name: 'Sponsored content collector', desc: 'Capture sponsored posts based on tags, mentions, or cashtags' },
      { name: 'Disclosure compliance', desc: "Spot posts missing #ad or paid-partnership disclosures before it's too late" },
      { name: 'Campaign dashboard', desc: 'Get a complete campaign view with an aggregated report across platforms' },
      { name: 'Exports', desc: 'Export campaign data via CSV or Excel file' },
    ],
  },
  {
    icon: `${CDN}/6839880de4b9dfb7a7cb6c5e_ic_pay.avif`,
    title: 'Pay',
    blurb: 'Cut down on payment admin, escrow disputes, and cross-border headaches',
    noBadge: true,
    features: [
      { name: 'Balance dashboard', desc: 'Track on-chain balance and view spending at a glance' },
      { name: 'Escrow setup', desc: 'Fund campaigns into escrow and release on delivery — no chargebacks' },
      { name: 'Global coverage', desc: 'Pay KOLs anywhere in stablecoins, settled on-chain in minutes' },
      { name: 'Invoice generator', desc: 'KOLs can generate compliant invoices directly in Kolio' },
      { name: 'Automatic payouts', desc: 'Kolio collects deliverables, approves, and handles on-chain payouts' },
      { name: 'Secure wallet payments', desc: 'Reduce failed transfers and reconcile every payout on-chain' },
      { name: 'Referral payouts', desc: 'Automatically pay KOLs based on attributed on-chain performance' },
      { name: 'Tax compliance', desc: 'Tax and compliance handling across all supported regions' },
      { name: 'Bundled invoicing', desc: 'You settle one invoice for all KOL payouts' },
      { name: 'Issues resolution', desc: 'Support & dispute resolution for both the brand and KOLs' },
    ],
  },
  {
    icon: `${CDN}/68e50d0a217090115d90f41c_ic_mail_black.png`,
    title: 'Inbox',
    blurb: 'Reach more KOLs and grow long-term relationships without more work',
    features: [
      { name: 'Channel sync', desc: 'Connect Gmail, Outlook, or Telegram to communicate with KOLs' },
      { name: 'Profile sidebars', desc: 'Full KOL context while messaging without switching tabs' },
      { name: 'Smart filters', desc: 'Find specific conversations instantly' },
      { name: 'KOL-only filter', desc: 'View only conversations with KOLs in your inbox' },
      { name: 'Templates & Variables', desc: 'Templates with personalization variables' },
      { name: 'Bulk outreach', desc: 'Send 100 personalized messages per day to multiple KOLs at once' },
      { name: 'Sequences', desc: 'Automated outreach flows with timing and exit rules' },
      { name: 'Outreach analytics', desc: 'Track open and reply rates across your templates' },
      { name: 'Team inbox', desc: 'View previous team conversations with KOLs for seamless handoffs' },
      { name: 'Two-way sync', desc: 'Sync conversations between Kolio and your messaging provider' },
    ],
  },
  {
    icon: `${CDN}/6839880de4b9dfb7a7cb6c5e_ic_pay.avif`,
    title: 'On-chain Payments',
    blurb: 'Unlock escrow deals, referral payouts, and token campaigns in just a few clicks',
    features: [
      { name: 'Wallet connect', desc: 'Connect your treasury wallet to Kolio to fund and release campaigns' },
      { name: 'Fund escrow', desc: 'Lock campaign budget on-chain and release it only on approved delivery' },
      { name: 'Referral links & codes', desc: 'Create unique referral links, attribution codes, or QR codes automatically' },
      { name: 'Share offer links', desc: 'Send KOLs a link to claim a deal with automatically generated terms' },
      { name: 'Track deliverables & content', desc: 'Monitor deal status within Kolio and track KOL posts and performance' },
    ],
  },
  {
    icon: `${CDN}/698988e2410a04a449e8b444_ic_affiliates.avif`,
    title: 'Referrals',
    blurb: 'Turn KOLs into long-term, performance-driving partners',
    noBadge: true,
    features: [
      { name: 'Commission tiers', desc: 'Custom tiers with flexible rates, percentage, or fixed amount per conversion' },
      { name: 'Commission options', desc: 'Different rates for first trade, recurring volume, or new wallet' },
      { name: 'Commission hold period', desc: '7-365 days (default 30 days, customizable)' },
      { name: 'On-chain attribution', desc: 'Calculate commissions automatically from on-chain conversion data' },
      { name: 'Insights dashboard', desc: 'Overview of referral reach, conversions, and revenue insights' },
      { name: 'Attribution window', desc: '30-day period for referral links and codes' },
      { name: 'Automated payouts', desc: 'Scale referral programs without manual payment calculations' },
      { name: 'Payout threshold', desc: 'Minimum of $50 and customizable per brand' },
      { name: 'KOL dashboard', desc: 'KOLs can view their performance, earnings, and payment history' },
    ],
  },
  {
    icon: `${CDN}/691b1a6eaff8bc4a091fbb57_ic_gift.avif`,
    title: 'Whitelists & Drops',
    blurb: 'Speed up every step of seeding KOLs — from selection to tracking who posts',
    features: [
      { name: 'Offer allocations', desc: 'Coordinate allowlist, airdrop, or NFT seeding campaigns without leaving your workflow' },
      { name: 'Organize tiers', desc: 'Segment allocations by campaign type or KOL tier for seeding' },
      { name: 'Collect info', desc: 'Gather accurate wallet addresses and details from KOLs' },
      { name: 'Automated distribution', desc: 'Distribute allocations through your existing on-chain workflow' },
      { name: 'Manage offers', desc: 'Delete, edit, expire, or remove allocation offers' },
    ],
  },
];

export default function ValueAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="mb-10 text-center text-[1.75rem] font-bold leading-tight text-foreground md:text-[2.25rem]">
          Here’s all the value you get with Kolio
        </h2>

        <div className="mx-auto max-w-[860px] space-y-2">
          {CATEGORIES.map((cat, i) => {
            const isOpen = open === i;
            return (
              <div
                key={cat.title}
                className="overflow-hidden rounded-lg bg-background-soft"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left md:px-6"
                >
                  <img
                    src={cat.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-body-md font-semibold text-foreground">
                      {cat.title}
                    </p>
                    <p className="mt-0.5 hidden text-body-sm text-foreground/60 sm:block">
                      {cat.blurb}
                    </p>
                  </div>
                  {!cat.noBadge && (
                    <span className="hidden shrink-0 rounded-pill bg-green-100 px-3 py-1 text-eyebrow font-semibold text-green-700 md:inline-block">
                      In every plan
                    </span>
                  )}
                  <ChevronDown
                    size={22}
                    className={`shrink-0 text-foreground/60 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-black/[0.06] px-5 py-4 md:px-6">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                      {cat.features.map((f) => (
                        <div key={f.name} className="flex gap-3">
                          <img
                            src={`${CDN}/6979e3846b0113b65e269635_Check-Small.svg`}
                            alt=""
                            width={20}
                            height={20}
                            className="mt-0.5 h-5 w-5 shrink-0"
                            loading="lazy"
                          />
                          <div>
                            <p className="text-body-sm font-semibold text-foreground">
                              {f.name}
                            </p>
                            <p className="mt-0.5 text-body-sm leading-snug text-foreground/55">
                              {f.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
