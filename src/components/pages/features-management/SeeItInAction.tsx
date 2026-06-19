import Container from '@/components/ui/Container';

/** "See it in action" — brand-neutral KOL workflow board mock. */
export default function SeeItInAction() {
  const cols = [
    {
      title: 'Sourced',
      tint: 'bg-ink/5',
      cards: ['@nftcurator · NFTs', '@gamefi_guild · Gaming'],
    },
    {
      title: 'Negotiating',
      tint: 'bg-coral/30',
      cards: ['@chartwizard · Trading', '@l2maxi · L1 / L2'],
    },
    {
      title: 'Escrowed',
      tint: 'bg-brand/15',
      cards: ['@defi_degen · DeFi'],
    },
    {
      title: 'Live',
      tint: 'bg-brand/25',
      cards: ['@yield_farmer · DeFi', '@web3_anna · Trading'],
    },
  ];
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[680px] text-center">
          <h2 className="font-sans text-h4 font-bold leading-tight text-ink">
            See it in action
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-body-md text-foreground/70">
            Move KOLs from first DM to live campaign on one board, so you always
            know where every deal stands.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[1100px] overflow-hidden rounded-xl bg-background-soft p-5 md:p-8">
          <div className="grid gap-4 md:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title} className="rounded-lg bg-white p-4 shadow-btn">
                <div className="flex items-center justify-between">
                  <span className="text-body-sm font-bold text-ink">{c.title}</span>
                  <span className="rounded-pill bg-background-soft px-2 py-0.5 text-[0.7rem] font-semibold text-foreground/60">
                    {c.cards.length}
                  </span>
                </div>
                <div className="mt-3 space-y-3">
                  {c.cards.map((card) => (
                    <div
                      key={card}
                      className={`rounded-md ${c.tint} px-3 py-2.5 text-body-sm font-medium text-ink`}
                    >
                      {card}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
