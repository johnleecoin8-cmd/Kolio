import Container from '@/components/ui/Container';

/** Full-width pink band: "Use Modash to analyze creators & their audiences". */
export default function AnalyzeBlock() {
  return (
    <section className="bg-background py-8">
      <Container>
        <div className="box-border flex w-full flex-col items-center justify-center rounded-xl bg-pink px-4 py-8 md:py-16">
          <div className="flex w-full flex-col items-center justify-start gap-6 lg:max-w-[60rem]">
            <h2 className="text-center font-display text-[2.5rem] font-normal leading-tight text-ink lg:text-[4rem]">
              Use Modash to analyze creators &amp; their audiences
            </h2>
            <p className="w-full text-center text-body-md leading-snug text-ink lg:max-w-[35rem]">
              Inside Modash, you get a complete analysis of any Instagram
              influencer. Including engagement rates, fake followers, growth
              rate, audience demographics, and much more.
            </p>
            <a
              href="https://app.modash.io/signup"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-4 py-2 text-base font-semibold leading-6 text-white transition-colors hover:bg-[#333333]"
            >
              Get a 14-day free trial
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
