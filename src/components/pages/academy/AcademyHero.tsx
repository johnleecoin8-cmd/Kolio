import Container from '@/components/ui/Container';

/** Top lavender banner: title + intro paragraph. */
export default function AcademyHero() {
  return (
    <section className="bg-violet-light pt-12 pb-10 md:pt-16 md:pb-12">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h1 className="font-display text-[2rem] font-normal leading-tight text-violet-dark md:text-[3rem]">
            Modash Influencer Marketing Academy
          </h1>
          <p className="mx-auto mt-5 max-w-[680px] text-body-sm font-semibold text-foreground/85 md:text-[1.25rem] md:leading-relaxed">
            Here, you&rsquo;ll learn everything you need to run effective influencer
            campaigns. From finding the perfect partners, to reaching out &amp;
            negotiating deals, to managing relationships at scale (without hiring a
            huge team) and more. Jump in and get started!
          </p>
        </div>
      </Container>
    </section>
  );
}
