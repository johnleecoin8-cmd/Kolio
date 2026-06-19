import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS = [
  {
    q: 'What tools does Kolio Manage replace?',
    a: 'Kolio Manage replaces spreadsheets, generic CRMs, scattered Telegram and DM threads, and manual payout tracking. Instead of switching between systems to vet KOLs, store deal terms, run outreach, and chase on-chain payments, everything lives in one workspace built specifically for web3 influencer marketing.',
  },
  {
    q: 'Can I import my existing KOLs?',
    a: 'Yes. Import KOLs individually by their X, YouTube, TikTok, or Telegram handles, or in bulk via CSV. Kolio automatically enriches each profile with proof-based reach, audience quality, and engagement data, so you pick up right where you left off with no manual entry.',
  },
  {
    q: 'How does Kolio vet KOLs?',
    a: 'Kolio scores every KOL on real, proof-based metrics: authentic reach, audience geography and quality, and engagement, not vanity follower counts or looks. You see whether a crypto KOL genuinely reaches your target audience before you commit budget or escrow.',
  },
  {
    q: 'How do on-chain payments and escrow work?',
    a: 'Store each KOL’s wallet and preferred chain on their profile, then fund deals into escrow and release payouts on-chain once deliverables are approved. No invoicing back-and-forth, no cross-border friction, and a clear record of every payment tied to the relationship.',
  },
  {
    q: 'How does team collaboration work?',
    a: 'Invite teammates, share KOL lists, and work deals together. Statuses are visible across your whole team, so everyone knows where each relationship stands and no one double-books a KOL. Ownership is assigned per KOL so nothing falls through the cracks.',
  },
  {
    q: 'Can I export my KOL data at any time?',
    a: 'Yes. Export any KOL list or campaign data to CSV in one click, for reporting, board decks, or archiving. Your data is always yours to take wherever you need it.',
  },
];

/** FAQ accordion on soft background. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background-soft py-16 md:py-24">
      <Container>
        <h2 className="font-sans text-h4 font-bold leading-tight text-ink">
          Frequently Asked Questions
        </h2>

        <div className="mt-10">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-black/10">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-body-md font-semibold text-ink">
                    {f.q}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-gray-200 text-ink">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <p className="max-w-[860px] pb-6 text-body text-foreground/70">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
