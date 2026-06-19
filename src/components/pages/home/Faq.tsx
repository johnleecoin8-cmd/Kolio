import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS = [
  {
    q: 'What is Kolio and how does it work?',
    a: 'Kolio is the web3 influencer marketing platform. It lets crypto brands, exchanges, protocols, and projects discover, vet, and pay KOLs from one place. Find KOLs across X, YouTube, TikTok, and Telegram, vet their real audience before you spend, run campaigns with on-chain escrow, and attribute results — all in one connected workflow, without juggling DMs and spreadsheets.',
  },
  {
    q: 'Is Kolio a platform, an agency, or a marketplace?',
    a: "Kolio is a platform. It's software you use yourself to run your crypto KOL program. We're not an agency (we don't run campaigns for you), and we're not a managed service. Think of Kolio as the operating system for web3 KOL marketing — discovery, vetting, escrow, payments, and attribution in one place.",
  },
  {
    q: 'How is Kolio different from a web2 influencer tool?',
    a: 'Kolio brings the rigor of mature web2 creator platforms to crypto. That means proof-based vetting tuned for crypto audiences (real reach, bot detection, audience quality — not vanity metrics or looks), on-chain payments and escrow instead of risky wires, and attribution that ties KOL content to on-chain outcomes like sign-ups, swaps, and mints.',
  },
  {
    q: "Will I find the KOLs I'm looking for?",
    a: 'Yes. Kolio covers crypto KOLs across X, YouTube, TikTok, and Telegram. Filter by niche — DeFi, NFTs, L1/L2, trading, gaming — plus audience quality and engagement, so you reach out only to voices that genuinely fit your token or project.',
  },
  {
    q: 'How does Kolio handle payments?',
    a: 'Kolio holds your campaign budget in on-chain escrow and releases it on delivery. KOLs are paid in stablecoins with transparent, on-chain settlement worldwide — and disputes are handled before funds ever leave the contract.',
  },
  {
    q: 'Can I try Kolio for free?',
    a: 'Yes. You can explore discovery and vetting for free, with no wallet connect required, so you can see if Kolio fits your KOL program before committing budget. Plans scale with your campaigns as you grow.',
  },
];

/** Frequently asked questions — accordion on sand bg. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="rounded-xl bg-background-soft p-8 md:p-14">
          <h2 className="mb-10 font-sans text-[2rem] font-extrabold leading-[1.1] text-foreground md:text-[2.5rem]">
            Frequently asked questions
          </h2>

          <div className="divide-y divide-black/[0.06]">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="py-5">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 text-left"
                  >
                    <span className="text-body font-semibold text-foreground">
                      {f.q}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-black/[0.06] text-foreground">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-4 max-w-[760px] text-body text-foreground/75">
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
