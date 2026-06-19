import Container from '@/components/ui/Container';

/** Customer testimonial — web3 growth lead, brand-neutral text treatment. */
export default function Quote() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="flex justify-center">
            <div className="flex h-44 w-44 items-center justify-center rounded-full bg-gradient-brand">
              <span className="font-display text-[3.5rem] leading-none text-white">
                M
              </span>
            </div>
          </div>

          <div className="max-w-xl">
            <span
              aria-hidden
              className="block font-display text-[3rem] leading-none text-violet-dark"
            >
              &ldquo;
            </span>
            <p className="mt-2 font-display text-[1.5rem] leading-snug text-violet-dark md:text-[1.75rem]">
              We&apos;ve run hundreds of KOL searches through Kolio for token
              launches and ecosystem campaigns. The proof-based scoring filters
              out the bots before we ever spend a dollar, and on-chain escrow
              made paying creators painless.
            </p>
            <p className="mt-6 text-body font-medium text-foreground">
              Maya Okonkwo
            </p>
            <p className="text-body text-foreground/70">
              Head of Growth at a Layer-2 protocol
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
