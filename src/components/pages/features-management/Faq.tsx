import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS = [
  {
    q: 'What tools does Manage replace?',
    a: 'Modash Manage replaces spreadsheets, CRM tools, email marketing platforms, and scattered communication tools. Instead of switching between multiple systems to track creator relationships, store documents, manage outreach, and monitor campaign progress, everything lives in one unified workspace built specifically for influencer marketing.',
  },
  {
    q: 'Can I import my existing creators?',
    a: "Yes. You can import existing creators individually by their social handles or email addresses, or in bulk through CSV upload. We'll automatically enrich each profile with full analytics, audience insights, and contact information. Pick up right where you left off with no manual data entry.",
  },
  {
    q: 'Can I export my creator data at any time?',
    a: 'Yes, export any creator list or campaign data to CSV with one click. Take your data wherever you need it for reporting, presentations, or archiving. Available on Performance and Enterprise plans.',
  },
  {
    q: 'How does team collaboration work?',
    a: 'Invite team members, share lists, monitor campaigns and work together on creator relationships. For collaboration, statuses are visible across your whole team so everyone stays on the same page about where you stand with each creator. You can also share email conversations with your team using privacy settings to control what you share.',
  },
  {
    q: 'Can I automate routine creator management tasks?',
    a: "Yes. Modash automates repetitive influencer marketing tasks so you don't have to manage everything manually. You can use email templates with variables to personalize outreach at scale, set up automated email sequences to follow up with creators, and apply bulk actions to update statuses, assign owners, or move creators across lists in one click. All actions are tied to each creator's profile, so communication history, campaign status, and ownership stay centralized as you scale.",
  },
  {
    q: 'What kind of things can I store in Modash?',
    a: 'Store and organize all campaign documents, briefs, and contracts alongside each creator relationship notes, rates, comments, birthday, address and more! Everything stays accessible and organized in one workflow.',
  },
];

/** FAQ accordion on soft background. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background-soft py-16 md:py-24">
      <Container>
        <h2 className="font-display text-h4 leading-tight text-ink md:text-h3">
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
