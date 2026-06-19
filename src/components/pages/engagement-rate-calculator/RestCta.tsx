import Container from '@/components/ui/Container';

/** Pink CTA band: "Checking engagement rates is just the beginning". */
export default function RestCta() {
  return (
    <section className="bg-background py-8">
      <Container>
        <div className="box-border flex w-full flex-col items-center justify-center rounded-xl bg-pink px-4 py-12 md:py-20">
          <div className="flex w-full flex-col items-center justify-start gap-6 lg:max-w-[60rem]">
            <h2 className="whitespace-pre-line text-center font-display text-[2.75rem] font-normal leading-[1.05] text-ink lg:text-[5rem]">
              {'Checking engagement rates is just the beginning \nModash does the rest too'}
            </h2>
            <p className="w-full text-center text-body-md leading-snug text-ink lg:max-w-[35rem]">
              Everything Shopify brands need to run and scale influencer
              marketing (without losing your mind)
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
