/** Full-width pink closing banner with giant display headline + dual CTA. */
export default function EndCta() {
  return (
    <section className="bg-background pb-0">
      <div className="rounded-b-[2rem] bg-pink px-6 py-20 text-center md:rounded-b-[3rem] md:py-28">
        <h2 className="mx-auto max-w-[1100px] font-display text-[2.75rem] uppercase leading-[0.98] text-ink sm:text-[5rem] md:text-[8rem]">
          End-to-end influencer marketing for Shopify
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://marketer.modash.io/register/marketer"
            className="inline-flex h-11 items-center justify-center rounded-pill bg-pink-hot px-6 text-body font-semibold text-ink shadow-btn transition hover:opacity-90"
          >
            Try for Free
          </a>
          <a
            href="https://www.modash.io/book-demo"
            className="inline-flex h-11 items-center justify-center rounded-pill bg-ink px-6 text-body font-semibold text-white transition hover:opacity-90"
          >
            Book a call
          </a>
        </div>

        <p className="mt-5 text-body-sm text-ink/70">
          14-day free trial・No credit card required
        </p>
      </div>
    </section>
  );
}
