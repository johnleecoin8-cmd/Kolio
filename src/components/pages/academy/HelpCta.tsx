import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const FACTS = [
  { v: '4', label: 'platforms: X, YouTube, TikTok, Telegram' },
  { v: 'Proof', label: 'based vetting, not vanity follower counts' },
  { v: 'On-chain', label: 'escrow, payments & attribution' },
];

/** Dark on-chain punctuation panel: stats spine + help CTA. */
export default function HelpCta() {
  return (
    <section className="bg-surface-ink py-16 md:py-24">
      <Container>
        <div className="surface-onchain glow-brand mx-auto max-w-[920px] rounded-2xl px-6 py-12 text-center md:px-12 md:py-16">
          <div className="mb-10 grid grid-cols-1 gap-8 border-b border-white/10 pb-10 sm:grid-cols-3">
            {FACTS.map((f) => (
              <div key={f.label}>
                <p className="num-display font-display text-[2rem] leading-none text-white md:text-[2.5rem]">
                  {f.v}
                </p>
                <p className="mt-2 text-body-sm font-medium text-white/65">
                  {f.label}
                </p>
              </div>
            ))}
          </div>

          <span className="eyebrow">Need a hand?</span>
          <h2 className="display-lg mt-3 font-display text-[1.75rem] text-white md:text-[2.25rem]">
            Looking for help running KOL campaigns with Kolio?
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-body-sm text-white/75 md:text-body">
            We know web3 KOL marketing inside out. Ask us anything:{' '}
            <a
              href="mailto:hello@kolio.io"
              className="font-semibold text-white underline"
            >
              hello@kolio.io
            </a>
            .
          </p>
          <div className="mt-7 flex justify-center">
            <ButtonA
              href="/demo-confirmation"
              size="lg"
              className="bg-gradient-brand border-none uppercase tracking-wide text-white"
            >
              Start Using Kolio
            </ButtonA>
          </div>
          <p className="mt-8 text-body-sm text-white/60">
            Got a suggestion for an Academy lesson?&nbsp;{' '}
            <a
              href="mailto:hello@kolio.io"
              className="font-semibold text-white/85 underline"
            >
              Let us know
            </a>
          </p>
          <p className="mt-1 text-body-sm text-white/60">
            Need more help? Want to report a bug?{' '}
            <a
              href="mailto:hello@kolio.io"
              className="font-semibold text-white/85 underline"
            >
              Contact support
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
