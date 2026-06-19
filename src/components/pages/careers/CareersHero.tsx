import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Careers hero — centered big headline, subtitle, dual CTA, full-width team beach photo. */
export default function CareersHero() {
  return (
    <section className="bg-background pt-10 md:pt-14">
      <Container>
        <div className="flex flex-col items-center text-center">
          <p className="mb-4 text-eyebrow font-semibold uppercase tracking-wide text-foreground/40">
            Careers
          </p>
          <h1 className="font-display uppercase leading-[0.95] text-foreground text-[2.75rem] sm:text-[4rem] md:text-[5rem]">
            Find your place at
            <br />
            modash
          </h1>
          <p className="mx-auto mt-5 max-w-[560px] text-body-md text-foreground/70">
            Join the team and support the content creator world
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#open-roles"
              className="inline-flex h-10 items-center justify-center rounded-sm bg-ink px-[1.125rem] text-body font-semibold text-white shadow-btn transition hover:opacity-90"
            >
              View open roles
            </a>
            <a
              href="https://engineering.modash.io/"
              className="inline-flex h-10 items-center justify-center rounded-sm border border-gray-300 bg-white px-[1.125rem] text-body font-semibold text-gray-700 shadow-btn transition hover:bg-gray-50"
            >
              Engineering blog
            </a>
          </div>
        </div>
      </Container>

      {/* full-width team photo */}
      <div className="mx-auto mt-10 w-full max-w-[1376px] px-4 sm:px-6 md:mt-14">
        <img
          src={`${CDN}/6909d33ecb45d13944b0d827_img_team.avif`}
          alt="The Modash team on the beach"
          loading="eager"
          className="w-full rounded-xl object-cover"
        />
      </div>
    </section>
  );
}
