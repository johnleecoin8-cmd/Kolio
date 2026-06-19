import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Warm gradient CTA panel at page bottom (later.com-inspired). */
export default function HelpCta() {
  return (
    <section className="bg-violet-light py-14 md:py-20">
      <Container>
        <div className="bg-gradient-brand mx-auto max-w-[820px] rounded-2xl px-6 py-12 text-center text-white md:px-12 md:py-16">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <div>
              <p className="font-display text-[2rem] font-bold leading-none md:text-[2.5rem]">
                4
              </p>
              <p className="mt-1 text-body-sm font-semibold text-white/85">
                platforms: X, YouTube, TikTok, Telegram
              </p>
            </div>
            <div className="hidden h-10 w-px bg-white/30 md:block" />
            <div>
              <p className="font-display text-[2rem] font-bold leading-none md:text-[2.5rem]">
                Proof-based
              </p>
              <p className="mt-1 text-body-sm font-semibold text-white/85">
                vetting, not vanity follower counts
              </p>
            </div>
            <div className="hidden h-10 w-px bg-white/30 md:block" />
            <div>
              <p className="font-display text-[2rem] font-bold leading-none md:text-[2.5rem]">
                On-chain
              </p>
              <p className="mt-1 text-body-sm font-semibold text-white/85">
                escrow, payments &amp; attribution
              </p>
            </div>
          </div>

          <h2 className="font-display text-[1.75rem] font-bold leading-tight md:text-h3">
            Looking for help running KOL campaigns with Kolio?
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-body-sm text-white/90 md:text-body">
            We know web3 KOL marketing inside out. Ask us anything:{' '}
            <a href="mailto:hello@kolio.io" className="font-semibold underline">
              hello@kolio.io
            </a>
            .
          </p>
          <div className="mt-7 flex justify-center">
            <ButtonA
              href="/demo-confirmation"
              variant="secondary"
              size="lg"
              className="uppercase tracking-wide"
            >
              Start Using Kolio
            </ButtonA>
          </div>
          <p className="mt-8 text-body-sm text-white/85">
            Got a suggestion for an Academy lesson?&nbsp;{' '}
            <a href="mailto:hello@kolio.io" className="font-semibold underline">
              Let us know
            </a>
          </p>
          <p className="mt-1 text-body-sm text-white/85">
            Need more help? Want to report a bug?{' '}
            <a href="mailto:hello@kolio.io" className="font-semibold underline">
              Contact support
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
