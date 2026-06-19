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
    blurb: 'Keep every relationship under control and details out of your head',
    features: [
      { name: 'Import influencers', desc: 'Bring your creators into Modash by CSV, social handles, or emails' },
      { name: 'Creator emails', desc: 'Find emails that creators list publicly in their profiles' },
      { name: 'Manage relationships', desc: 'Set statuses, add labels, documents, notes, address, birthday, rates, and more' },
      { name: 'Profile sidebars', desc: 'Access full creator context, including details, notes, history, and status' },
      { name: 'Email creators', desc: 'Send personalized emails with all campaign details added automatically' },
      { name: 'Team collaboration', desc: 'Share inboxes and assign ownership across the team' },
      { name: 'Manage lists', desc: 'Organize creators into manageable lists by sorting and filtering' },
      { name: 'Bulk actions', desc: 'Make changes across multiple creators and campaigns simultaneously' },
      { name: 'Export', desc: 'Export your entire creator lists to CSV' },
    ],
  },
  {
    icon: `${CDN}/6837096d4faddb80cd0aec3f_ic_find%20influencers.avif`,
    title: 'Discover',
    blurb: 'Find the right creators for your brand and know they’re a fit before you reach out',
    features: [
      { name: '350M+ creators', desc: 'Access creators with over 1K followers on Instagram, TikTok, and YouTube' },
      { name: 'AI Search', desc: 'Find creators using natural language' },
      { name: 'Image search', desc: 'Find creators by uploading reference images' },
      { name: 'Advanced filters', desc: 'Find creators using 37 different filters' },
      { name: 'Lookalikes', desc: 'Find creators with similar content or audiences to ones you know' },
      { name: 'Influential customers', desc: 'Import customer emails to find the creators among them' },
      { name: 'Creator collabs', desc: 'Find creators who have worked with other brands in the past' },
      { name: 'Influencer performance', desc: "Evaluate influencers' social media accounts with performance insights" },
      { name: 'Audience insights', desc: 'Evaluate creators’ audience by location, demographics, interests, and quality' },
      { name: 'Download profiles', desc: 'Save a creator PDF with metrics, audience demographics, and content history' },
    ],
  },
  {
    icon: `${CDN}/68370b6b9eae2d6b80f9cac2_ic_measure%20results.avif`,
    title: 'Track',
    blurb: 'Automatically track campaigns and spend your time doing literally anything else',
    features: [
      { name: 'Log sales', desc: 'Log creator attributed sales yourself to measure campaign ROI' },
      { name: 'Conversion and sales tracking (Shopify)', desc: 'Automatically attribute sales through discount codes and tracking links' },
      { name: 'Attribution links & codes (Shopify)', desc: 'Create unique UTM links, QR codes, or promo codes automatically' },
      { name: 'Efficiency tracking', desc: 'Track CPM and ROAS per creator and per campaign' },
      { name: 'Brand awareness tracking', desc: 'Track reach, engagement, views, and EMV per creator and per campaign' },
      { name: 'Content-level analytics', desc: 'See instant analytics for every piece of content in real-time' },
      { name: 'Sponsored content collector', desc: 'Capture sponsored posts based on tags, mentions, or keywords' },
      { name: 'Ad compliance', desc: "Spot posts that are missing ad disclosures before it's too late" },
      { name: 'Campaign dashboard', desc: 'Get a complete campaign view with an aggregated report across social platforms' },
      { name: 'Exports', desc: 'Export campaign data via CSV or Excel file' },
    ],
  },
  {
    icon: `${CDN}/6839880de4b9dfb7a7cb6c5e_ic_pay.avif`,
    title: 'Pay',
    blurb: 'Cut down on financial admin, invoicing back-and-forth, and tax headaches',
    noBadge: true,
    features: [
      { name: 'Balance dashboard', desc: 'Track payment balance and view spending at a glance' },
      { name: 'Payment setup', desc: 'Create payment requests to receive creator invoices' },
      { name: 'Global coverage', desc: 'Send payments to creators in 180+ countries in 36 currencies' },
      { name: 'Invoice generator', desc: 'Creators can generate compliant invoices directly in Modash' },
      { name: 'Automatic payouts', desc: 'Modash collects creator invoices, approves, and handles payouts' },
      { name: 'Secure bank account payments', desc: 'Ensure payment delivery (1-3 business days) and reduce payment failures' },
      { name: 'Affiliate payouts', desc: 'Automatically pay creators based on their sales performance' },
      { name: 'Tax compliance', desc: 'Tax and compliance handling across all supported countries' },
      { name: 'Bundled invoicing', desc: 'You pay one invoice for all creator payouts' },
      { name: 'Issues resolution', desc: 'Support & issue resolution for both the brand and creators' },
    ],
  },
  {
    icon: `${CDN}/68e50d0a217090115d90f41c_ic_mail_black.png`,
    title: 'Inbox',
    blurb: 'Outreach to more creators and grow long-term relationships without more work',
    features: [
      { name: 'Email sync', desc: 'Connect Gmail or Outlook to communicate with creators' },
      { name: 'Profile sidebars', desc: 'Full creator context while emailing without switching tabs' },
      { name: 'Smart filters', desc: 'Find specific conversations instantly' },
      { name: 'Influencer-only filter', desc: 'View only conversations with creators in your inbox' },
      { name: 'Templates & Variables', desc: 'Templates with personalization variables' },
      { name: 'Bulk emails', desc: 'Send 100 personalized emails per day to multiple creators at once' },
      { name: 'Sequences', desc: 'Automated email flows with timing and exit rules' },
      { name: 'Email analytics', desc: 'Track email open rates and bounce rates across your templates' },
      { name: 'Team inbox', desc: 'View previous team conversations with creators for seamless handoffs' },
      { name: 'Two-way sync', desc: 'Sync conversations between Modash and your email provider' },
    ],
  },
  {
    icon: `${CDN}/68e50bdc9d9b9f6e11584e90_ic_Shopify_black.avif`,
    title: 'Shopify',
    blurb: 'Unlock paid partnerships, affiliates, and gifting in just a few clicks',
    features: [
      { name: 'Shopify Integration', desc: 'Connect your Shopify store with Modash' },
      { name: 'Send products', desc: 'Choose which products or collections creators can access from your store' },
      { name: 'Tracking links & promo codes', desc: 'Create unique UTM links, affiliate links, QR codes, or Shopify discount codes' },
      { name: 'Share offer links', desc: 'Send creators a link to place orders using automatically generated discount codes' },
      { name: 'Track orders & content', desc: 'Monitor order statuses within Modash and track creator posts and performance' },
    ],
  },
  {
    icon: `${CDN}/698988e2410a04a449e8b444_ic_affiliates.avif`,
    title: 'Affiliates (Shopify)',
    blurb: 'Turn creators into long-term, revenue-driving partners',
    noBadge: true,
    features: [
      { name: 'Commission tiers', desc: 'Custom tiers with flexible rates, percentage, or fixed amount per sale' },
      { name: 'Commission options', desc: 'Different rates for first sale, recurring sale, or new customer' },
      { name: 'Commission hold period', desc: '7-365 days (default 30 days, customizable)' },
      { name: 'Conversion and revenue tracking', desc: 'Calculate commissions automatically with Shopify integration' },
      { name: 'Insights dashboard', desc: 'Overview of affiliate reach, conversions, and revenue insights' },
      { name: 'Attribution window', desc: '30-day period for affiliate links and codes' },
      { name: 'Automated commission payouts', desc: 'Scale affiliate programs without manual payment calculations' },
      { name: 'Payout threshold', desc: 'Minimum of $50 and customizable per brand' },
      { name: 'Creator dashboard', desc: 'Creators can view their performance, earnings, and payment history' },
    ],
  },
  {
    icon: `${CDN}/691b1a6eaff8bc4a091fbb57_ic_gift.avif`,
    title: 'Gifting (Shopify)',
    blurb: 'Speed up every step of your gifting workflow, from discovery to tracking who posts',
    features: [
      { name: 'Offer products', desc: 'Coordinate gifting campaigns without leaving your workflow' },
      { name: 'Organize collections', desc: 'Segment products by campaign type or creator tier for seeding' },
      { name: 'Collect info', desc: 'Gather accurate shipping details from creators' },
      { name: 'Shopify store fulfillment', desc: 'Process gifts through your existing fulfillment workflow' },
      { name: 'Manage product offers', desc: 'Delete, edit, expire, or remove product offers' },
    ],
  },
];

export default function ValueAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="mb-10 text-center text-[1.75rem] font-bold leading-tight text-foreground md:text-[2.25rem]">
          Here’s all the value you get with Modash
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
