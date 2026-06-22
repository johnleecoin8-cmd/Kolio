import Container from '@/components/ui/Container';

const DEMO = '/demo-confirmation';

/** Closing CTA — warm brand-gradient panel (later.com-inspired). */
export default function CtaBanner() {
  return (
    <section className="bg-background pb-4 pt-12 md:pb-6 md:pt-20">
      <Container>
        <div className="bg-gradient-brand rounded-xl px-6 py-16 text-center md:px-12 md:py-24">
          <h2 className="display-xl mx-auto max-w-[900px] font-display text-[2.25rem] text-white md:text-[4rem]">
            No stale stats. Just live, verified crypto KOL data.
          </h2>
          <div className="mt-8 flex justify-center">
            <a
              href={DEMO}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-white px-6 text-body font-semibold text-ink shadow-btn transition hover:opacity-90"
            >
              Request a demo
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
