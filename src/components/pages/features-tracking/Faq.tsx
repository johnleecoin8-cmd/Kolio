import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS = [
  {
    q: 'How does Kolio track KOL content?',
    a: 'Once you add KOLs to a campaign, Kolio automatically captures every post, thread, video, and broadcast they publish about your project across X, YouTube, TikTok, and Telegram—no KOL sign-up required.\n\nWe detect content in two ways:\n- When KOLs tag your project handle, $ticker, or campaign-specific hashtags\n- With Event Mode enabled, we capture everything your KOLs post during the campaign window, even if they forget to tag you.\n\nAll performance data—impressions, engagement, verified reach, link clicks, code redemptions, and on-chain conversions—appears automatically in your campaign dashboard.',
  },
  {
    q: 'Do KOLs need to sign up for Kolio to make tracking work?',
    a: 'Nope. No KOL signup needed. As long as they tag your project or use your referral links and codes, Kolio automatically captures and organizes everything they post.',
  },
  {
    q: 'What content does Kolio track (and what does it miss)?',
    a: 'Kolio tracks publicly available content across X, YouTube, TikTok, and public Telegram channels, including posts, threads, videos, and broadcasts.\n\nWe can only track content that is publicly accessible on each platform. That means we don’t see private accounts, private Telegram groups, content shared in DMs, or posts that are never published publicly. We do, however, keep a record of posts that are later deleted, so a KOL can’t take down a paid post and erase the proof.\n\nWhen KOLs publish publicly, Kolio collects it automatically and keeps your campaign reporting complete, without requiring anyone to sign up or install anything.',
  },
  {
    q: 'What is Event Mode, and when should I use it?',
    a: 'Event Mode captures every post your KOLs publish during a specific window, even if they forget to tag your project or use the required $ticker or hashtags.\n\nUse Event Mode when:\n- Running a token launch or TGE where you need to capture all the buzz\n- Coordinating an exchange listing\n- Managing time-sensitive campaigns with strict reporting requirements\n- Working with KOLs who don’t always tag consistently\n- High-stakes pushes that require complete coverage.\n\nImportant: when enabled, each KOL tracked counts as 2 KOLs. (When disabled, each KOL counts as 1.)',
  },
  {
    q: 'Can Kolio help me verify that a KOL’s reach is real?',
    a: 'Yes. Kolio is built around proof-based vetting. We measure real impressions and audience quality rather than follower counts, and flag bot-inflated or low-quality reach, so you pay for genuine attention, not vanity metrics.',
  },
  {
    q: 'Can I attribute on-chain conversions and volume to each KOL?',
    a: 'Yes. When you connect your referral program, smart contract, or referral codes, on-chain results sync automatically to your Kolio dashboard. You’ll see exactly which KOLs drive the most value for your project.\n\nOnce connected, you can track:\n- Conversions from referral codes: how many times each KOL’s code is used and the on-chain activity it generates.\n- Conversions from referral links: clicks, sign-ups, and conversions from unique links assigned to each KOL.\n- Cost per conversion and ROI: the exact return for each KOL and campaign based on real on-chain activity, once KOL costs are added.\n\nWith UTM tracking links you’ll also see how much traffic each KOL sends and where it lands. Everything syncs automatically, giving you real-time visibility into which KOLs drive the most valuable on-chain activity.',
  },
  {
    q: 'Can I export tracking data and reports?',
    a: 'Yes. On Performance and Enterprise plans, you can export campaign data, KOL lists, and performance metrics to CSV or Excel. Filter by KOL, campaign, date range, or metric to show exactly what matters. You can also download the content your KOLs posted for archives, compliance, or your DAO’s records.',
  },
  {
    q: 'How are payments to KOLs handled?',
    a: 'Kolio supports on-chain payments and escrow. You can fund a deal into escrow, and the payout releases against verified deliverables, so KOLs are paid for posts that actually went live and you keep a clean, recorded paper trail of every settlement.',
  },
  {
    q: 'How long is campaign and performance data stored?',
    a: 'We store all campaign data for as long as your account is active and you don’t delete the campaign. This includes KOL profiles, content history, verified-reach metrics, tracking links, attribution, and analytics.\n\nWhen you finish a campaign, all content and data move to the Finished tab and stay there unless you delete them. Once you delete a campaign, the action is permanent and can’t be undone.',
  },
];

/** Frequently Asked Questions — accordion on soft bg. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background pb-16 md:pb-24">
      <Container>
        <div className="rounded-xl bg-background-soft p-8 md:p-14">
          <h2 className="mb-8 text-[1.75rem] font-bold leading-[1.15] text-foreground md:text-[2.25rem]">
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
