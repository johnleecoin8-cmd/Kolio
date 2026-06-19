import Container from '@/components/ui/Container';

/** Warm gradient CTA band (later.com-inspired): "Checking engagement is just the start". */
export default function RestCta() {
  return (
    <section className="bg-background py-8">
      <Container>
        <div className="bg-gradient-brand box-border flex w-full flex-col items-center justify-center rounded-xl px-4 py-12 md:py-20">
          <div className="flex w-full flex-col items-center justify-start gap-6 lg:max-w-[60rem]">
            <h2 className="whitespace-pre-line text-center font-display text-[2.75rem] font-normal leading-[1.05] text-white lg:text-[5rem]">
              {'Checking engagement is just the start \nKolio runs the whole campaign'}
            </h2>
            <p className="w-full text-center text-body-md leading-snug text-white/90 lg:max-w-[38rem]">
              Everything a web3 team needs to discover, vet, book and pay crypto
              KOLs &mdash; with on-chain escrow and end-to-end attribution, so
              you can prove what every campaign actually moved.
            </p>
            <a
              href="/demo-confirmation"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-4 py-2 text-base font-semibold leading-6 text-white transition-colors hover:bg-[#333333]"
            >
              Book a demo
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
