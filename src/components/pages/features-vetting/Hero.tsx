import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const HERO_VIDEO =
  'https://dl.dropboxusercontent.com/scl/fi/6onpf9ebjxl48cv303ofg/discovery.webm?rlkey=doa06uij3aqqq8npqt6zvglsk&e=1&st=nfclswrz&dl=0';

/** Hero — pink full-width band, dark display headline left, product video panel right. */
export default function Hero() {
  return (
    <section className="bg-pink">
      <Container className="pb-0 pt-16 md:pt-24">
        <div className="grid items-end gap-10 md:grid-cols-2 md:gap-12">
          {/* Copy */}
          <div className="pb-16 text-center md:pb-24 md:text-left">
            <h1 className="font-display text-[2.5rem] uppercase leading-[1.02] text-ink sm:text-[3.25rem] md:text-[3.5rem] lg:text-[4rem]">
              Vet &amp; research
              <br className="hidden sm:block" /> influencers,
              <br />
              Before you Reach out
            </h1>

            <p className="mx-auto mt-6 max-w-[520px] text-body-md text-ink/75 md:mx-0">
              Find influencers, then get all the profile information you need — all
              in the same place. Check audience demographics, performance data, and
              past collabs - without having to reach out.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 md:items-start">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <ButtonA
                  href="https://marketer.modash.io/register/marketer"
                  variant="primary"
                >
                  Try for Free
                </ButtonA>
                <ButtonA href="https://www.modash.io/book-demo" variant="secondary">
                  Book a call
                </ButtonA>
              </div>
              <p className="text-body-sm text-ink/60">
                14-day free trial・No credit card required
              </p>
            </div>
          </div>

          {/* Product video panel, anchored to the bottom edge of the pink band */}
          <div className="relative hidden self-end md:block">
            <div className="relative ml-auto aspect-[4/3.4] w-full max-w-[520px] overflow-hidden rounded-t-[20px] bg-background-soft">
              <video
                className="absolute inset-0 h-full w-full object-cover object-top"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={HERO_VIDEO} type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
