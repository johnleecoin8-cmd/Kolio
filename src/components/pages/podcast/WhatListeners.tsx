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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-sans font-bold text-h4 md:text-h3 leading-tight tracking-tight text-navy">
              What listeners can expect
            </h2>
            <p className="mt-6 text-body-sm text-foreground/70 max-w-[420px]">
              If you run growth, marketing, or community at a crypto brand,
              exchange, or protocol, this show will make your next KOL campaign
              sharper, cheaper, and easier to defend with data.
            </p>
            <p className="mt-4 text-body-sm text-foreground/70 max-w-[420px]">
              You'll hear directly from the operators turning web3 influencer
              marketing into a measurable, repeatable channel — bringing the
              rigor of mature web2 creator marketing to crypto KOLs.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-3 max-w-[440px]">
              {TOPICS.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-blue/30 bg-violet-bg px-4 py-2 text-body-sm font-medium text-navy"
                >
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
