import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Centered heading + copy + CTA, then full-width filters screenshot. */
export default function UnmatchedScale() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.5rem]">
            Unmatched scale:&nbsp;filter every TikTok influencer
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-body-md text-foreground/75">
            Modash's database of TikTok influencers ensures you'll never run out
            of partners to work with as you scale your TikTok ambassador program.
            Use our TikTok influencer search tool to filter audience interests,
            engagement, demographics, growth rate &amp; more to find the perfect
            influencers for your brand.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonA
              href="https://marketer.modash.io/register/marketer"
              variant="accent"
            >
              Try For Free
            </ButtonA>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <img
            src={`${CDN}/668fa959bcda2a9cf4b53781_img_influencer%20filters_tiktok.avif`}
            alt="Modash TikTok influencer filters"
            loading="lazy"
            className="mx-auto w-full max-w-[1136px] rounded-xl"
          />
        </div>
      </Container>
    </section>
  );
}
