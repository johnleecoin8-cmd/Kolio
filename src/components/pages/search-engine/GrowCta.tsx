import Container from '@/components/ui/Container';

/** Closing CTA band — periwinkle, "Modash makes your business grow faster". */
export default function GrowCta() {
  return (
    <section className="bg-violet/40 py-16 md:py-24">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-[2rem] leading-tight text-violet-dark md:text-[2.5rem]">
            Modash makes your business grow faster
          </h2>
          <p className="mt-6 max-w-[920px] text-body text-violet-dark/90">
            Quickly find influencers, analyze their audiences, export data and
            build world-class influencer programs.
          </p>
          <p className="mt-4 max-w-[920px] text-body text-violet-dark/90">
            Recruit 2 influencers into monthly programs per month and have
            thousands of monthly conversions in 1 year.
          </p>
          <a
            href="https://marketer.modash.io/register/marketer"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-violet-dark px-6 text-body font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
          >
            get started
          </a>
        </div>
      </Container>
    </section>
  );
}
