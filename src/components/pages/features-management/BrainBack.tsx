import Container from '@/components/ui/Container';

/** Big display headline with floating accent pills. */
export default function BrainBack() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="relative mx-auto max-w-[1080px] py-8 text-center">
          {/* floating pills */}
          <span className="mb-4 inline-block rounded-pill bg-pink px-4 py-2 text-body-sm font-medium text-ink md:absolute md:left-[14%] md:top-0 md:mb-0">
            Zero duplicate outreach
          </span>
          <span className="mb-4 inline-block rounded-pill bg-coral px-4 py-2 text-body-sm font-medium text-ink md:absolute md:right-[14%] md:top-2 md:mb-0">
            Payouts on the record
          </span>

          <h2 className="font-display uppercase text-[2.25rem] leading-[0.92] text-ink sm:text-[3.5rem] md:text-[5rem]">
            When every KOL deal is on the record, you get your brain back
          </h2>

          <span className="mt-4 inline-block rounded-pill bg-purple px-4 py-2 text-body-sm font-medium text-ink md:absolute md:bottom-0 md:left-1/2 md:mt-0 md:-translate-x-1/2">
            Full overview and control
          </span>
        </div>
      </Container>
    </section>
  );
}
