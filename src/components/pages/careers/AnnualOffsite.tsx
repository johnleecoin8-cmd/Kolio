import Container from '@/components/ui/Container';

const VALUES = [
  {
    n: '01',
    title: 'Proof over hype',
    body: 'We don’t take metrics at face value, and we don’t expect you to either. Every claim, campaign, and dataset gets verified. That standard is the product, and the culture.',
    accent: true,
  },
  {
    n: '02',
    title: 'Remote-first, deliberate in-person',
    body: 'Productive online across time zones, with a few intentional gatherings a year to build trust, go deep on strategy, and make things as a team.',
    accent: false,
  },
  {
    n: '03',
    title: 'Ownership, end to end',
    body: 'Small team, big surface area. You own problems from discovery to ship, talk directly to the exchanges and protocols using Kolio, and see your work shipped within days.',
    accent: false,
  },
];

/** How we work — calm deeper-warm surface, floating value cards, one brand accent. */
export default function AnnualOffsite() {
  return (
    <section className="canvas-warm2 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 justify-center">How we work</p>
          <h2 className="display-light text-[2.25rem] leading-[1.05] text-foreground md:text-[3.5rem]">
            The standard runs through <span className="accent text-gradient-brand">everything</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-body-md text-foreground/65">
            Building a verification layer for crypto influence takes a particular
            kind of team: skeptical of easy numbers, fast to ship, obsessed with
            getting the truth right.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1100px] grid-cols-1 gap-6 md:mt-20 md:grid-cols-3">
          {VALUES.map(({ n, title, body, accent }, i) => (
            <div
              key={n}
              className={`card-kit shadow-float rounded-2xl p-7 transition hover:-translate-y-1 ${i === 1 ? 'md:translate-y-4' : ''}`}
            >
              <span className={`chip ${accent ? 'chip-brand' : 'chip-ink'} font-mono-tnum`}>{n}</span>
              <h3 className="mt-5 text-h4 font-semibold leading-tight text-foreground">{title}</h3>
              <p className="mt-3 text-body-sm leading-relaxed text-foreground/65">{body}</p>
              {accent && (
                <div className="mt-5 flex items-center gap-2 border-t border-hairline pt-4 font-mono-tnum text-eyebrow text-brand">
                  <span className="h-1.5 w-1.5 rounded-pill bg-brand-coral" /> assert(verified === true)
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
