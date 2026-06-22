import Container from '@/components/ui/Container';

const USES = [
  {
    n: '01',
    title: 'Vetting pipelines',
    body: 'Score a shortlist of crypto KOLs before outreach — filter out bought audiences and undisclosed paid partners automatically.',
  },
  {
    n: '02',
    title: 'Live campaign dashboards',
    body: 'Stream up-to-the-second reach, engagement, and cashtag mentions for every deal you’ve funded into escrow.',
  },
  {
    n: '03',
    title: 'On-chain attribution',
    body: 'Join API reach signals with wallet activity to prove which KOL actually moved holders, down to the address.',
  },
];

/** Deeper warm canvas: what teams build on the raw API. Calm numbered cards,
 *  generous whitespace, no gradient bands. */
export default function BuildWith() {
  return (
    <section className="canvas-warm2 py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <span className="eyebrow text-brand">Built for web3 teams</span>
          <h2 className="display-light mt-3 text-[2rem] leading-[1.05] text-foreground md:text-[3rem]">
            What teams ship on top of <span className="text-gradient-brand">Kolio</span>
          </h2>
          <p className="mt-4 max-w-lg text-body-md text-foreground/60">
            The same data behind the Kolio app, exposed raw. Bring your own dashboard, model, or attribution stack.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {USES.map((u, i) => (
            <div
              key={u.n}
              className={`card-kit shadow-float-sm rounded-2xl p-7 transition hover:-translate-y-1 ${
                i === 1 ? 'md:translate-y-3' : ''
              }`}
            >
              <span className="num-display text-[2.5rem] leading-none text-gradient-brand">{u.n}</span>
              <h3 className="mt-5 text-h4 font-semibold text-foreground">{u.title}</h3>
              <p className="mt-2 text-body-sm text-foreground/60">{u.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
