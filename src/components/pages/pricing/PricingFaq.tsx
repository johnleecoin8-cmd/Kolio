import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How does the settlement fee work?',
    a: 'You fund a campaign budget into on-chain escrow. The settlement fee is charged only against the amount that actually clears to the KOL once delivery is approved. Budget you never spend is never charged.',
  },
  {
    q: 'Do I need to connect a wallet to start?',
    a: 'No. Exploring the KOL index, reading Proof Scores, and shortlisting are fully free with just an email. A wallet is only needed when you fund your first escrow deal.',
  },
  {
    q: 'What counts as usage?',
    a: 'Usage is escrowed campaign spend — the USDC you route to KOLs through Kolio. Discovery, analytics, and proof reports are not metered.',
  },
  {
    q: 'Can I switch plans later?',
    a: 'Yes. Upgrade or downgrade anytime; your active escrow deals keep running untouched. Lower settlement fees apply to deals funded after the switch.',
  },
  {
    q: 'How do KOLs get paid?',
    a: 'On approval, escrow releases USDC straight to the KOL with an on-chain receipt. Milestone splits and dispute holds are handled by the same contract — no off-platform invoicing.',
  },
];

function Row({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-black/10">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-body-md font-medium text-foreground">{q}</span>
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-pill bg-coral-bg text-brand">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && <p className="pb-6 pr-10 text-body-sm leading-relaxed text-foreground/60">{a}</p>}
    </div>
  );
}

/** Calm FAQ — single open row, generous spacing. */
export default function PricingFaq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="eyebrow text-brand">FAQ</span>
            <h2 className="display-light mt-3 text-[2rem] leading-[1.05] text-foreground md:text-[2.75rem]">
              Pricing questions, answered plainly
            </h2>
            <p className="mt-5 max-w-sm text-body-md text-foreground/60">
              Still unsure which plan fits your spend? Book a demo and we will model it with your numbers.
            </p>
          </div>
          <div>
            {FAQS.map((f, i) => (
              <Row key={f.q} q={f.q} a={f.a} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
