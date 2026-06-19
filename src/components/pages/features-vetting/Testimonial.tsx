import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Centered featured testimonial with quote mark, author and brand logo. */
export default function Testimonial() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <img
            src={`${CDN}/682ded8928b2561009cb96af_%E2%80%9C.png`}
            alt=""
            className="h-9 w-auto"
            loading="lazy"
          />
          <p className="mt-6 text-body-lg leading-snug text-foreground">
            Using Modash, we&rsquo;ve been able to contract 70+ influencers and 500+
            nano influencers — and we plan to scale internationally! We start every
            campaign by using the influencer discovery tools, and Modash also makes it
            quick to see the metrics we care about &amp; how their content performs.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <img
              src={`${CDN}/6846b82ce1c3620fe7a9efff_img_aliz_accent.avif`}
              alt="Alíz Sipkai"
              className="h-12 w-12 rounded-full object-cover"
              loading="lazy"
            />
            <div className="text-left">
              <div className="text-body font-semibold text-foreground">Alíz Sipkai</div>
              <div className="text-body-sm text-foreground/60">
                Influencer Marketing Manager
              </div>
            </div>
            <div className="mx-2 h-10 w-px bg-black/10" />
            <img
              src={`${CDN}/683fe83472a17e0f010f0027_logo_biotech.avif`}
              alt="Biotech"
              className="h-7 w-auto"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
