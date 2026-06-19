import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Single customer quote with avatar. */
export default function Testimonial() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[900px]">
          <img
            src={`${CDN}/5f1e9d168dccd9d4351fe24f_quotationmark_dark.svg`}
            alt=""
            aria-hidden
            className="mx-auto h-8 w-auto"
          />
          <div className="mt-10 flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-12">
            <img
              src={`${CDN}/5f1abc6548ff5b0f466ba037_paul_strong.avif`}
              alt="Paul Strong"
              loading="eager"
              className="h-32 w-32 shrink-0 rounded-full object-cover sm:h-40 sm:w-40"
            />
            <div className="text-center sm:text-left">
              <h3 className="font-display text-[1.375rem] leading-[1.3] text-violet-dark md:text-[1.625rem]">
                "We have run thousands of searches through Modash without fail,
                finding influencers for clients like Aldi UK and Warner Leisure
                Hotels. Within a few clicks, there are results we're super happy
                with."
              </h3>
              <div className="mt-6 text-body text-foreground/75">
                <span className="font-semibold text-foreground">
                  Paul Strong
                </span>
                <br />
                Creative Director at Hoopla Marketing UK
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
