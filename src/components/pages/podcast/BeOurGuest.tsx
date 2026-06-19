import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

export default function BeOurGuest() {
  return (
    <section id="guest" className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="text-center font-display text-h4 md:text-h3 leading-tight text-[#1b1b4d]">
          Be our next guest!
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-body-sm text-foreground/80">
              We're looking for awesome people who:
            </p>
            <ul className="mt-4 space-y-3 list-disc pl-5 text-body-sm text-foreground/80">
              <li>
                Work (or previously worked) at/with a successful B2C brand on
                influencer marketing
              </li>
              <li>
                Are excited, willing, and able to draw back the curtain and share
                the nitty gritty of how you run creator partnerships
              </li>
            </ul>
            <p className="mt-5 text-body-sm text-foreground/80 max-w-[440px]">
              You absolutely <span className="font-bold">don't</span> have to have
              an audience of your own. We're excited to shine a spotlight on the
              marketers who are quietly doing incredible work every day and
              pushing the industry forward.
            </p>
            <a
              href="https://www.modash.io/podcast"
              className="mt-7 inline-flex items-center justify-center h-10 px-5 rounded-sm bg-[#4f56ff] text-white text-body-sm font-semibold uppercase tracking-wide transition hover:opacity-90"
            >
              Register your interest
            </a>
          </div>
          <div className="flex justify-center">
            <img
              src={`${CDN}/650af13d100e1af14bc5e885_img_creator%20partnerships%20podcast%20guests.avif`}
              alt="Podcast guests"
              className="w-full max-w-[440px]"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
