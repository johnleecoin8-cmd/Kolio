import Container from '@/components/ui/Container';

const FORM =
  'https://form.jotform.com/modash/intro-modash-api?utm_source=api_raw&utm_campaign=web';

/** Closing pink CTA banner. */
export default function CtaBanner() {
  return (
    <section className="bg-background pb-4 pt-12 md:pb-6 md:pt-20">
      <Container>
        <div className="rounded-xl bg-pink px-6 py-16 text-center md:px-12 md:py-24">
          <h2 className="mx-auto max-w-[900px] font-display text-[2rem] leading-[1.1] text-ink md:text-[3.5rem]">
            NO DELAY, NO STALE STATS, GET LIVE CREATOR DATA
          </h2>
          <div className="mt-8 flex justify-center">
            <a
              href={FORM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-ink px-6 text-body font-semibold text-white shadow-btn transition hover:opacity-90"
            >
              Request a demo
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
