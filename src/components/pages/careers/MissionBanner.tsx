import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Giant pink "MODASH MISSION" wordmark + mission statement + Join us CTA. */
export default function MissionBanner() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="flex flex-col items-center text-center">
          <img
            src={`${CDN}/6889d460f981c0ff287ff2b0_Modash%20mission.svg`}
            alt="Modash Mission"
            className="w-full max-w-[1000px]"
          />

          <p className="mx-auto mt-8 max-w-[760px] text-body-lg font-semibold leading-snug text-foreground md:mt-10">
            The world doesn&rsquo;t need giant media organizations to tell every
            story. The world needs millions of creators. Independent voices who
            bring weird, wonderful stories to life online. We are working to help
            every creator earn a living.
          </p>

          <a
            href="#open-roles"
            className="mt-8 inline-flex h-10 items-center justify-center rounded-sm bg-ink px-[1.125rem] text-body font-semibold text-white shadow-btn transition hover:opacity-90"
          >
            Join us
          </a>
        </div>
      </Container>
    </section>
  );
}
