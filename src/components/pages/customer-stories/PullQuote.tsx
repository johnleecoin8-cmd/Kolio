import Container from '@/components/ui/Container';

/** Big centered pull-quote with a styled author monogram on the left. */
export default function PullQuote() {
  return (
    <section className="bg-background">
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16">
          <div className="flex justify-center">
            <div className="flex h-56 w-56 items-center justify-center rounded-full bg-gradient-brand text-white md:h-64 md:w-64">
              <span className="font-display text-h2 leading-none">LG</span>
            </div>
          </div>
          <div>
            <p className="mb-6 font-display text-h2 leading-none text-violet-dark">
              &ldquo;
            </p>
            <p className="font-display text-h4 leading-snug text-violet-dark">
              Before Kolio, vetting a crypto KOL meant trusting screenshots and
              hoping the followers were real. Now I see verified reach and
              audience quality up front &mdash; and I move ten times faster.
            </p>
            <div className="mt-8 text-body text-foreground/75">
              <span className="font-semibold text-foreground">
                Laura Garsdal
              </span>
              <br />
              Growth Lead, Arbiscan
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
