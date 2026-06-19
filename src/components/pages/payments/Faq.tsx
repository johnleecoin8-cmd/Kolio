import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS = [
  {
    q: 'How does Modash Payments work?',
    a: 'Modash Payments centralizes all creator payouts into a single workflow. You approve payments in Modash, pay Modash a single invoice, and we handle distributing payouts to creators in their local currency across 180+ countries. This applies to both flat-fee creator payments and affiliate commissions. Once payments are approved, creators are paid directly to their bank accounts. The result is one payment flow for your entire creator program, without managing individual transfers, currencies, or payout tools.',
  },
  {
    q: 'Who is Modash Payments ideally suited for?',
    a: 'Modash Payments is perfect for you if you check any of these boxes: Your company operates in more than one country, you work with influencers in more than one country, or each team member manages 10+ influencers monthly.',
  },
  {
    q: 'In which countries can I pay creators?',
    a: "We pay creators in 180+ countries in their local currency. Whether they're in the US, UK, Brazil, or Japan, we've got you covered.",
  },
  {
    q: 'How do creators get paid?',
    a: 'Creators receive fast, secure payments directly to their bank account. They can also auto-generate invoices with one click, and also enable automatic invoice generation, so invoices will be created by Modash, making the entire process smooth and professional.',
  },
  {
    q: 'How quickly do creators receive payment?',
    a: 'Creators receive payments within a few business days after you approve. Fast, reliable payouts keep your creators happy and your relationships strong.',
  },
  {
    q: 'Do creators need to sign up to Modash to get paid?',
    a: "Yes. Creators complete a one-time signup the first time they're paid through Modash. On their first payment, whether flat fee or affiliate, creators sign up and provide their personal or company details, along with the information needed for invoicing and tax compliance. If a creator has already signed up to Modash for another brand, they don't need to sign up again. For all future payments, creators simply sign in to upload an invoice or use Modash's automatic invoice generator to create a compliant invoice.",
  },
  {
    q: 'How does Modash handle taxes, invoicing, and compliance?',
    a: 'Modash acts as your single payment and compliance vendor for creator payouts. You receive one invoice from Modash. We handle creator invoicing, tax documentation, payment processing, and compliance requirements on your behalf. This applies to both flat-fee payments and affiliate commissions. This setup centralizes compliance across 180+ countries and 36 currencies, keeping payouts auditable and reducing legal and administrative risk for your team.',
  },
  {
    q: "What happens if there's a payment issue?",
    a: 'Modash handles all payment issues on your behalf. We manage the resolution process so you can focus on your campaigns, not administrative headaches.',
  },
  {
    q: 'Can I see my current payment balance?',
    a: 'Always. Your Payments dashboard shows your current balance, funds in transit, and total spent, all down to the cent. Full transparency at all times.',
  },
];

/** FAQ accordion on a soft section background. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <div className="rounded-xl bg-background-soft px-6 py-12 md:px-16 md:py-16">
          <h3 className="font-sans text-h4 font-bold text-ink">
            Frequently asked questions
          </h3>

          <div className="mt-8">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-black/10">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-body font-bold text-ink">{f.q}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gray-200 text-ink">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-6 pr-10 text-body text-foreground/70">{f.a}</p>
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
