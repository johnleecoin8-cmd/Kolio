import Container from '@/components/ui/Container';

const VALUES = [
  {
    title: 'Proof over hype',
    body: 'We don’t take metrics at face value — and we don’t expect you to either. Every claim, every campaign, every dataset gets verified. That standard is the product, and it’s the culture.',
  },
  {
    title: 'Remote-first, deliberate in-person',
    body: 'We’re comfortable and productive collaborating online across time zones. But a few times a year we get together in person to build trust, go deep on strategy, and make memories as a team.',
  },
  {
    title: 'Ownership, end to end',
    body: 'Small team, big surface area. You’ll own problems from discovery to ship, talk directly to the exchanges and protocols using Kolio, and see your work in the hands of real customers within days.',
  },
];

/** How we work — Kolio culture and values (replaces Modash offsite video reel). */
export default function AnnualOffsite() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <p className="eyebrow mb-3 justify-center">How we work</p>
          <h2 className="display-lg font-display text-h3 uppercase leading-tight text-foreground md:text-h2">
            The standard runs through everything
          </h2>
          <p className="mx-auto mt-6 max-w-[640px] text-body-md text-foreground/70">
            Building a verification platform for crypto influence takes a
            particular kind of team — skeptical of easy numbers, fast to
            ship, and obsessed with getting the truth right. Here&rsquo;s what we
            care about.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1136px] gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {VALUES.map(({ title, body }, i) => {
            const lead = i === 0;
            return (
              <div
                key={title}
                className={
                  lead
                    ? 'bg-gradient-brand flex flex-col rounded-xl p-7 text-left text-white shadow-btn'
                    : 'card-kit flex flex-col p-7 text-left'
                }
              >
                <span
                  className={
                    'chip mb-4 self-start ' +
                    (lead ? 'bg-white/15 text-white' : 'chip-brand')
                  }
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  className={
                    'font-display text-h4 uppercase leading-tight ' +
                    (lead ? 'text-white' : 'text-foreground')
                  }
                >
                  {title}
                </h3>
                <p
                  className={
                    'mt-4 text-body-sm leading-relaxed ' +
                    (lead ? 'text-white/85' : 'text-foreground/70')
                  }
                >
                  {body}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
