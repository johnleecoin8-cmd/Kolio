import Container from '@/components/ui/Container';

const TOPICS = [
  'Proof-based KOL vetting',
  'Audience quality over follower count',
  'On-chain payments & escrow',
  'Campaign attribution',
  'TGE & launch playbooks',
  'DeFi · NFTs · L1/L2 · gaming niches',
  'Negotiating KOL deals',
  'Compliance & disclosure',
  'Briefing crypto creators',
];

export default function WhatListeners() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <span className="eyebrow">What to expect</span>
            <h2 className="mt-3 display-lg font-display text-h4 md:text-h3 text-foreground">
              What listeners can expect
            </h2>
            <p className="mt-6 max-w-[420px] text-body-sm text-foreground/70">
              If you run growth, marketing, or community at a crypto brand,
              exchange, or protocol, this show will make your next KOL campaign
              sharper, cheaper, and easier to defend with data.
            </p>
            <p className="mt-4 max-w-[420px] text-body-sm text-foreground/70">
              You'll hear directly from the operators turning web3 influencer
              marketing into a measurable, repeatable channel — bringing the
              rigor of mature web2 creator marketing to crypto KOLs.
            </p>
          </div>
          <div className="card-kit p-7">
            <p className="text-eyebrow uppercase tracking-widest text-foreground/45">
              Topics we cover
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {TOPICS.map((t) => (
                <span key={t} className="chip chip-ink">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
