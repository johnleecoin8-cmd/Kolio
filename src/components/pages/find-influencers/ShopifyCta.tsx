/** Bottom pink CTA block: big heading, two buttons, trial note. */
export default function ShopifyCta() {
  return (
    <section className="bg-background pb-16 md:pb-24">
      <div className="mx-auto w-full max-w-container px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center rounded-xl bg-pink px-6 py-24 text-center">
          <h2 className="mb-10 max-w-[760px] font-display text-[2.5rem] uppercase leading-[1.05] text-ink md:text-[3.75rem]">
            End-to-end influencer marketing platform for Shopify
          </h2>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="https://marketer.modash.io/register/marketer"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-ink px-6 text-body font-semibold text-white no-underline shadow-btn transition hover:opacity-90"
            >
              Try for Free
            </a>
            <a
              href="https://modash.io/book-demo"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-gray-300 bg-white px-6 text-body font-semibold text-gray-700 no-underline shadow-btn transition hover:bg-gray-50"
            >
              Request a demo
            </a>
          </div>
          <p className="mt-6 text-body-sm text-ink/70">
            14-day free trial • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
