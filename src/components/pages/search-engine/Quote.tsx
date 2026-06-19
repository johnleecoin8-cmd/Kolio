import Container from '@/components/ui/Container';

const PAUL =
  'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/5f1abc6548ff5b0f466ba037_paul_strong.avif';
const QUOTE_MARK =
  'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/5f1e9d168dccd9d4351fe24f_quotationmark_dark.svg';

/** Customer testimonial — Paul Strong, Hoopla Marketing UK. */
export default function Quote() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="flex justify-center">
            <img
              src={PAUL}
              alt="Paul Strong"
              className="h-44 w-44 rounded-full object-cover"
            />
          </div>

          <div className="max-w-xl">
            <img src={QUOTE_MARK} alt="" className="mb-6 h-9 w-9" />
            <p className="font-display text-[1.5rem] leading-snug text-violet-dark">
              &ldquo;We have run thousands of searches through Modash without
              fail, finding influencers for clients like Aldi UK and Warner
              Leisure Hotels. Within a few clicks, there are results we&apos;re
              super happy with.&rdquo;
            </p>
            <p className="mt-6 text-body font-medium text-foreground">
              Paul Strong
            </p>
            <p className="text-body text-foreground/70">
              Creative Director at Hoopla Marketing UK
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
