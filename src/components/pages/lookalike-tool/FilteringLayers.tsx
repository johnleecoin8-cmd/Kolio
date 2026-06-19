import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** "Add more filtering layers to find the perfect fit" — image left, copy right. */
export default function FilteringLayers() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <img
              src={`${CDN}/66b1fedafe94b08d5f160d84_img_lookalikes_filtering.avif`}
              alt="Modash filtering options"
              className="w-full"
            />
          </div>
          <div>
            <h2 className="font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.75rem]">
              Add more filtering layers to find the perfect fit
            </h2>
            <p className="mt-6 max-w-[480px] text-body text-foreground/75">
              Let's say you have the ideal creator already in the U.S., and you'd
              love to find someone exactly like that, but in Australia. By adding
              a filter for geography (either influencer location, or their
              audience's location), you'll find people that fit your criteria.
            </p>
            <div className="mt-8">
              <ButtonA
                href="https://marketer.modash.io/register/marketer"
                variant="primary"
                className="!bg-blue !text-white hover:!opacity-90"
              >
                Try for free
              </ButtonA>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
