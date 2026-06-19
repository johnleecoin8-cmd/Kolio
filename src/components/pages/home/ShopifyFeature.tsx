import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** "Connects with Shopify" — sand panel, copy left, integration screenshot right. */
export default function ShopifyFeature() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="overflow-hidden rounded-xl bg-sand">
          <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:gap-12 md:p-14">
            <div className="flex flex-col items-start text-left">
              <h2 className="font-display text-[2.25rem] leading-[1.05] text-foreground md:text-[3.5rem]">
                Connects with Shopify
              </h2>
              <p className="mt-5 max-w-[480px] text-body-md text-foreground/75">
                Sync your store to effortlessly manage paid partnerships, affiliates, and
                gifting. No more back-and-forth.
              </p>
              <p className="mt-4 max-w-[480px] text-body-md text-foreground/75">
                Track clicks, redemptions, and affiliate performance, and manage product
                gifting in one place to see what’s working and double down on what drives
                results.
              </p>
              <ButtonA
                href="https://marketer.modash.io/register/marketer"
                variant="primary"
                className="mt-8"
              >
                Try for free
              </ButtonA>
            </div>

            <div>
              <img
                src={`${CDN}/68ee4a8ea851480a3e3a8afb_img_shopify_integration.avif`}
                alt="Modash Shopify integration"
                loading="lazy"
                width={560}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
