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
          <div className="pb-8 text-center md:pb-24 md:text-left">
            <h1 className="font-display text-[2.75rem] uppercase leading-[1.02] text-ink sm:text-[3.5rem] md:text-[4rem] lg:text-[4.25rem]">
              <span className="text-gradient-brand">Vet</span> crypto KOLs before you spend a dollar
            </h1>

            <p className="mx-auto mt-6 max-w-[520px] text-body-md text-ink/75 md:mx-0">
              Find the right key opinion leaders across X, YouTube, TikTok and
              Telegram — then see every number that matters before you ever send a
              DM.
              <br />
              <br />
              Real reach, audience quality, and proof of past on-chain campaigns.
              No vanity metrics, no guesswork.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 md:items-start">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <ButtonA href="/demo-confirmation" variant="primary">
                  Start vetting free
                </ButtonA>
                <ButtonA href="/demo-confirmation" variant="secondary">
                  Book a demo
                </ButtonA>
              </div>
              <p className="text-body-sm text-ink/60">
                14-day free trial・No credit card required
              </p>
            </div>
          </div>

          {/* Product video panel, anchored to the bottom edge of the pink band, bleeds right */}
          <div className="relative self-end md:-mr-4 lg:-mr-6">
            <div className="relative aspect-[4/3.6] w-full overflow-hidden rounded-b-[20px] bg-background-soft md:aspect-[4/3.4]">
              <video
                className="absolute inset-0 h-full w-full object-cover object-left-top"
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
