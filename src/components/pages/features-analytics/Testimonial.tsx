import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Centered customer quote with attribution and company logo. */
export default function Testimonial() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto flex max-w-[920px] flex-col items-center text-center">
          <img
            src={`${CDN}/683fe826e8a66c52e9440e93_%E2%80%9C_purple.png`}
            alt=""
            width={44}
            className="mb-6 h-8 w-auto"
          />
          <blockquote className="font-sans text-[1.5rem] font-medium leading-[1.35] tracking-tight text-foreground md:text-[1.875rem]">
            Using Modash, we&rsquo;ve been able to contract 70+ influencers and
            500+ nano influencers — and we plan to scale internationally! We start
            every campaign by using the influencer discovery tools, and Modash also
            makes it quick to see the metrics we care about &amp; how their content
            performs.
          </blockquote>

          <div className="mt-9 flex items-center gap-4">
            <img
              src={`${CDN}/683fe82d038abe5ad7570ece_img_aliz%20sipkai.avif`}
              alt="Alíz Sipkai"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="text-body font-semibold text-foreground">
                Alíz Sipkai
              </p>
              <p className="text-body-sm text-foreground/60">
                Influencer Marketing Manager
              </p>
            </div>
            <div className="mx-2 h-10 w-px bg-ink/15" aria-hidden />
            <img
              src={`${CDN}/683fe83472a17e0f010f0027_logo_biotech.avif`}
              alt="Biotech USA"
              width={132}
              className="h-6 w-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
