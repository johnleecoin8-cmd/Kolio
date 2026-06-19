import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: 'How do I find DeFi KOLs on Crypto Twitter?',
    a: (
      <>
        <p className="mb-3">You can find DeFi KOLs on X by:</p>
        <ul className="mb-3 list-disc space-y-1 pl-5">
          <li>
            Manually searching DeFi keywords, cashtags, and protocol hashtags
            across Crypto Twitter
          </li>
          <li>
            Using niche, platform, and audience-quality filters in a KOL
            discovery tool like Kolio
          </li>
          <li>
            Inviting KOLs to apply directly to your campaign (via your site or
            community)
          </li>
        </ul>
        <p>
          There are 20 DeFi KOLs reaching crypto audiences on this page. For each
          one you can preview real reach, engagement, fake-follower share, and
          audience breakdown. Inside Kolio you also get proof-based vetting,
          on-chain payment and escrow, and campaign attribution (there is a free
          trial).
        </p>
      </>
    ),
  },
  {
    q: 'How does Kolio vet crypto KOLs?',
    a: (
      <>
        <p className="mb-3">
          Kolio scores KOLs on proof, not vanity. We measure real reach, audience
          quality, and fake-follower share, then surface the signal that matters
          for web3 campaigns — not follower counts or looks.
        </p>
        <p>
          This is the rigor mature web2 creator platforms built, brought to crypto
          KOLs. Run a custom search across DeFi, NFTs, L1/L2, trading, and gaming,
          and see full audience and authenticity data by starting a free trial.
        </p>
      </>
    ),
  },
  {
    q: 'How can I see full data and run a campaign with these KOLs?',
    a: (
      <>
        <p className="mb-3">
          The profiles shown here are a snapshot of each KOL's key metrics. To
          unlock full data — audience demographics, growth trends, fake-follower
          analysis, content history, and contact details — start a free trial of
          Kolio.
        </p>
        <p>
          From there you can book KOLs directly, pay on-chain with escrow, and
          track campaign attribution end to end across X, YouTube, TikTok, and
          Telegram — the web2-grade workflow, built for web3.
        </p>
      </>
    ),
  },
];

/** Page-specific FAQ: eyebrow + big display heading + accordion, on soft bg. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background-soft py-16 md:py-24">
      <div className="mx-auto w-full max-w-container px-4 sm:px-6">
        <p className="mb-3 text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
          FAQ
        </p>
        <h2 className="mb-10 font-display text-[2rem] uppercase leading-[1.05] text-foreground md:text-[3rem]">
          Frequently asked questions
        </h2>

        <div className="divide-y divide-black/10">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="py-6">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  <span className="text-body-md font-semibold text-foreground">
                    {f.q}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/5 text-foreground">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-4 max-w-[820px] text-body text-foreground/75">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
