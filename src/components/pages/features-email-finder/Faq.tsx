import { useState } from 'react';
import Container from '@/components/ui/Container';
import { Plus, Minus } from 'lucide-react';

type Item = { q: string; a: React.ReactNode };

const ITEMS: Item[] = [
  {
    q: 'How do you get your KOL data? How accurate is it?',
    a: (
      <>
        Kolio continuously analyzes publicly available content across X,
        YouTube, TikTok, and Telegram and builds proof-based insights on top of
        it — real reach and audience quality, not vanity metrics. We refresh the
        data several times a month, so what you see on a crypto KOL profile is
        current. Our goal is simple: bring the rigor of mature web2 creator
        platforms to web3 marketing.
      </>
    ),
  },
  {
    q: 'Do you show analytics & vetting metrics for KOLs and their audiences?',
    a: (
      <>
        Yes. Every profile gives you a deep, verifiable view of a KOL and the
        people who actually follow them. Metrics include audience breakdown
        (country, language, crypto niche, sentiment, wallet-active share), KOL
        performance (followers, average views, engagement rate, paid vs.
        organic), and vetting signals (bot and fake-follower share, top posts).
        Request a demo to see them all.
      </>
    ),
  },
  {
    q: 'How do payments to KOLs work on Kolio?',
    a: (
      <>
        Kolio handles payments on-chain with escrow built in. Funds are locked
        when a deal is agreed and released when the agreed deliverables go live,
        so brands and KOLs both stay protected — no off-platform wire chasing.
        You can run a single sponsored post or a full multi-KOL campaign and
        keep every payout, milestone, and referral attribution in one place.
      </>
    ),
  },
  {
    q: 'Can I attribute and track my campaigns with Kolio?',
    a: (
      <>
        Kolio collects and tracks all of the branded content from a campaign and
        ties it back to on-chain outcomes. You'll see who posted what, who
        disclosed the partnership, and how each KOL drove link clicks,
        sign-ups, and wallet activity — so you can measure web3 ROI, not just
        impressions.
      </>
    ),
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="rounded-xl bg-background-soft px-6 py-12 md:px-16 md:py-16">
          <div className="mx-auto max-w-[760px]">
            <span className="eyebrow mb-3">FAQ</span>
            <h3 className="display-lg text-[2.25rem] text-foreground">
              Stuff teams ask before they request&nbsp;a&nbsp;demo
            </h3>

            <div className="mt-10 divide-y divide-black/10 border-t border-black/10">
              {ITEMS.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={i}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="text-body-md font-semibold text-foreground">
                        {item.q}
                      </span>
                      {isOpen ? (
                        <Minus className="h-5 w-5 shrink-0 text-foreground" />
                      ) : (
                        <Plus className="h-5 w-5 shrink-0 text-foreground" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="pb-6 text-body text-foreground/70">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
