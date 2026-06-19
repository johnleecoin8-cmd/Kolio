import { Search } from 'lucide-react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Hero — dark display headline with one gradient word, badge eyebrow, dual CTA, coral product block. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-12 md:pt-16">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* badge eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink text-ink">
              <Search className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="text-body font-semibold text-foreground">KOL Database</span>
          </div>

          <h1 className="max-w-[18ch] font-display uppercase leading-[0.9] text-foreground text-[3rem] sm:text-[4.5rem] md:text-[5.75rem] lg:text-[6.5rem]">
            The YouTube Crypto KOL Database, <span className="text-gradient-brand">Verified</span>
          </h1>

          <p className="mx-auto mt-7 max-w-[580px] text-body-md text-foreground/75">
            Discover and vet crypto YouTube creators with proof-based data, not
            vanity metrics. Filter by real reach, audience quality, and niche —
            DeFi, L1/L2, trading, NFTs, gaming — then run campaigns on-chain.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonA href="/demo-confirmation" variant="primary">
              Get started free
            </ButtonA>
            <ButtonA href="/demo-confirmation" variant="secondary">
              Book a demo
            </ButtonA>
          </div>
          <p className="mt-4 text-body-sm text-foreground/50">
            14-day free trial・No credit card required
          </p>
        </div>
      </Container>

      {/* coral product block */}
      <div className="mx-auto mt-12 w-full max-w-[1376px] px-4 sm:px-6 md:mt-16">
        <div className="overflow-hidden rounded-t-xl bg-pink px-4 pt-10 sm:px-10 sm:pt-16 md:px-16 md:pt-20">
          <div className="mx-auto block w-full max-w-[1040px] rounded-t-lg bg-white p-5 shadow-sm sm:p-7">
            {/* product mockup: KOL profile cards */}
            <div className="flex items-center justify-between border-b border-black/10 pb-4">
              <p className="text-body-md font-semibold text-foreground">
                Crypto KOLs · YouTube
              </p>
              <span className="rounded-full bg-pink-light px-3 py-1 text-body-sm font-semibold text-ink">
                4.2M profiles
              </span>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                { name: 'DeFi Daily', tag: 'DeFi', reach: '412K', quality: '94%' },
                { name: 'L2 Signal', tag: 'L1/L2', reach: '188K', quality: '91%' },
                { name: 'Chain Trader', tag: 'Trading', reach: '326K', quality: '88%' },
              ].map((k) => (
                <div
                  key={k.name}
                  className="rounded-lg border border-black/10 bg-background-soft p-4 text-left"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-8 w-8 rounded-full bg-gradient-brand" />
                    <div>
                      <p className="text-body-sm font-semibold text-foreground">
                        {k.name}
                      </p>
                      <p className="text-body-sm text-foreground/55">{k.tag}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between text-body-sm">
                    <span className="text-foreground/60">Avg. reach</span>
                    <span className="font-semibold text-foreground">{k.reach}</span>
                  </div>
                  <div className="mt-1.5 flex justify-between text-body-sm">
                    <span className="text-foreground/60">Audience quality</span>
                    <span className="font-semibold text-brand">{k.quality}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
