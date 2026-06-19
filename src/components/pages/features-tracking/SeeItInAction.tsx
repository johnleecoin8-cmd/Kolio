import Container from '@/components/ui/Container';

/** "See it in action" — Navattic interactive demo embed. */
export default function SeeItInAction() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.5rem]">
            See it in action
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-body-md text-foreground/70">
            Explore this interactive demo to see how Modash Track automatically
            collects content and consolidates your Shopify data, so everything lives
            in one place.
          </p>
        </div>

        <div className="relative mt-12 aspect-[3/4] w-full overflow-hidden rounded-[20px] sm:aspect-[16/13] md:aspect-[1136/1014]">
          <iframe
            src="https://capture.navattic.com/cmettlfeq000004ih8lgo7qij"
            title="Modash Track interactive demo"
            loading="lazy"
            allow="fullscreen"
            className="absolute inset-0 h-full w-full rounded-[20px] border-none"
          />
        </div>
      </Container>
    </section>
  );
}
