import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Single customer quote with avatar. */
export default function Testimonial() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto flex max-w-[860px] flex-col items-center gap-8 text-center">
          <img
            src={`${CDN}/5f1abc6548ff5b0f466ba037_paul_strong.avif`}
            alt="Paul Strong"
            loading="lazy"
            className="h-20 w-20 rounded-full object-cover"
          />
          <img
            src={`${CDN}/5f1e9d168dccd9d4351fe24f_quotationmark_dark.svg`}
            alt=""
            aria-hidden
            className="h-7 w-auto"
          />
          <h3 className="font-display text-[1.5rem] leading-[1.3] text-foreground md:text-[2rem]">
            "We have run thousands of searches through Modash without fail,
            finding influencers for clients like Aldi UK and Warner Leisure
            Hotels. Within a few clicks, there are results we're super happy
            with."
          </h3>
          <div className="text-body text-foreground/75">
            <span className="font-semibold text-foreground">Paul Strong</span>
            <br />
            Creative Director at Hoopla Marketing UK
          </div>
        </div>
      </Container>
    </section>
  );
}
