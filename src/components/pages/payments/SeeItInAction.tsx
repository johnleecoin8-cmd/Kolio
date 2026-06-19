import Container from '@/components/ui/Container';

/** See it in action — Navattic interactive demo embed. */
export default function SeeItInAction() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-h4 text-ink md:text-h3">
            See it in action
          </h2>
          <p className="mt-4 text-body-md text-foreground/70">
            Walk through this interactive demo to see how Modash Payments handles
            global payouts, automatic invoicing, and tax compliance — so you can
            pay every creator from one place.
          </p>
        </div>

        <div className="mt-10 aspect-[16/9] w-full overflow-hidden rounded-xl bg-background-soft">
          <iframe
            src="https://capture.navattic.com/cmewtk9pn000004kyb37kagzn"
            title="Modash Payments interactive demo"
            loading="lazy"
            allow="fullscreen"
            className="h-full w-full border-0"
          />
        </div>
      </Container>
    </section>
  );
}
