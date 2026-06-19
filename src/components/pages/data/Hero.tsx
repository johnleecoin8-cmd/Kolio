import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Data hero — "Our Data" eyebrow, big title, full-width product screenshot on purple-light. */
export default function Hero() {
  return (
    <section className="bg-background pt-12 md:pt-16">
      <Container>
        <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
          <div className="mb-5 text-body-sm font-bold text-foreground/55">
            Our Data
          </div>
          <h1 className="font-display text-[3rem] uppercase leading-[0.95] text-foreground sm:text-[5rem] md:text-[7rem]">
            Bringing data you trust to influencer marketing
          </h1>
        </div>
      </Container>

      <div className="mt-10 md:mt-14">
        <div className="bg-purple-light py-10 md:py-16">
          <Container>
            <img
              src={`${CDN}/688b2358e0582742402ee7c0_img_hero_our%20data.avif`}
              alt="Modash data dashboard"
              loading="eager"
              className="mx-auto hidden w-full max-w-[1136px] md:block"
            />
            <img
              src={`${CDN}/688b66f017c433d44bbf37b7_img_Hero_our%20data_mobile.avif`}
              alt="Modash data dashboard"
              loading="eager"
              className="mx-auto w-full max-w-[420px] md:hidden"
            />
          </Container>
        </div>
      </div>
    </section>
  );
}
