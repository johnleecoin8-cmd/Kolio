import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS = [
  {
    q: 'How does Modash track creator content?',
    a: 'Once you add creators to a campaign, Modash automatically captures every post, video, and Story they publish about your brand across Instagram, TikTok, and YouTube—no creator sign-up required. We do not track TikTok Stories.\n\nWe detect content in two ways:\n- When creators tag your brand handle or use campaign-specific hashtags\n- With Event Mode enabled, we capture everything creators post during your campaign period, even if they forget to tag your brand.\n\nAll performance data—views, engagement, EMV, link clicks, code redemptions, and revenue—appears automatically in your campaign dashboard.',
  },
  {
    q: 'Do creators need to sign up for Modash to make tracking work?',
    a: 'Nope! No creator signup needed. As long as they tag your brand or use your tracking links, Modash automatically captures and organizes all content.',
  },
  {
    q: 'What content does Modash track (and what does it miss)?',
    a: 'Modash tracks publicly available branded content across Instagram, TikTok, and YouTube, including posts, videos, and Stories (excluding TikTok Stories).\n\nWe can only track content that is publicly accessible on each platform. This means we don’t see private accounts, Close Friends stories, content shared in DMs, deleted posts, or posts that are never published publicly. If a platform restricts access to a content type, we respect those limitations.\n\nWhen creators publish branded content publicly, Modash automatically collects it and keeps your campaign reporting complete, without requiring creators to sign up or install anything.',
  },
  {
    q: 'What is Event Mode, and when should I use it?',
    a: 'Event Mode captures every piece of content your creators post during a specific time period, even if they forget to tag your brand or use required hashtags.\n\nUse Event Mode when:\n- Running product launches where you need to capture all creator buzz\n- Hosting brand events\n- Managing time-sensitive campaigns with strict reporting requirements\n- Working with creators who might forget to tag your brand consistently\n- High-stakes campaigns that require complete coverage.\n\nImportant: When enabled, each creator tracked counts as 2 creators. (When disabled, each creator tracked counts as 1.)',
  },
  {
    q: 'Can Modash help me ensure ad disclosure compliance?',
    a: 'Yes, Modash flags posts missing required ad disclosures so you can ensure compliance and address issues before they become problems.',
  },
  {
    q: 'Can I track sales and attribute revenue and website traffic to creators?',
    a: 'Yes. When you connect your Shopify store, all sales data syncs automatically to your Modash dashboard. You’ll see exactly which creators drive the most revenue for your brand.\n\nWhen you connect your Shopify store and codes, you can track:\n- Sales from discount codes: Monitor how many times each creator’s discount code is used and the revenue generated from those purchases.\n- Sales from affiliate links: Track clicks, conversions, and revenue from unique affiliate links assigned to each creator.\n- ROAS (Return on Ad Spend): Calculate the exact return on investment for each creator and campaign based on actual sales data when creator costs are added.\n\nBy using UTM tracking links, you’ll also see how many visitors each creator sends to your site and which pages they visit. All tracking data syncs automatically to your Modash dashboard, giving you real-time visibility into which creators drive the most valuable traffic.',
  },
  {
    q: 'Can I export tracking data and reports?',
    a: 'Yes. On Performance and Enterprise plans, you can export campaign data, creator lists, and performance metrics to CSV or Excel. Filter by creator, campaign, date range, or metric to show exactly what matters. You can also download content posted by your creators for marketing, testimonials, or archives.',
  },
  {
    q: 'How long is campaign and performance campaign data stored?',
    a: 'We store all campaign data for as long as your account is active, and you don’t delete the campaign. This includes creator profiles, content history, performance metrics, tracking links, and analytics.\n\nWhen you finish a campaign, all content and data are moved to the Finished tab, and remain there unless you delete them. Once you delete a campaign, the action is permanent and can’t be undone.',
  },
];

/** Frequently Asked Questions — accordion on soft bg. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background pb-16 md:pb-24">
      <Container>
        <div className="rounded-xl bg-background-soft p-8 md:p-14">
          <h2 className="mb-8 font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.5rem]">
            Frequently Asked Questions
          </h2>

          <div>
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-t border-black/10 first:border-t-0">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-body-md font-semibold text-foreground">
                      {f.q}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white text-foreground shadow-btn">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mb-6 max-w-[820px] whitespace-pre-line text-body text-foreground/75">
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
