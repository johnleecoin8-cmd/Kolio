import FeatureRow from './FeatureRow';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';
import ComparisonBlock from '@/components/kit/ComparisonBlock';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Dark on-chain escrow terminal — the one focal dark punctuation on the page. */
function EscrowTerminal() {
  const ledger = [
    ['ESCROW FUNDED', '5,000.00 USDC', 'text-foreground'],
    ['DELIVERY APPROVED', '+1 of 1 posts', 'text-mint'],
    ['PAYOUT RELEASED', '4,750.00 USDC', 'text-mint'],
    ['PLATFORM FEE', '250.00 USDC', 'text-white/50'],
  ];
  return (
    <section className="bg-surface-ink py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center text-white">
            <span className="eyebrow">On-chain escrow</span>
            <h2 className="mt-4 display-lg font-display text-[2rem] md:text-[2.5rem]">
              Pay TikTok KOLs on-chain, not into a DM
            </h2>
            <div className="mt-6 max-w-[480px] text-body-md text-white/65">
              <p>
                Found and shortlisted the KOLs you want to work with? Don't wire
                funds into a DM and hope for the best.
              </p>
              <p className="mt-4">
                Fund a campaign into escrow, release on delivery, and keep a
                clean on-chain record of every payout — so brands and KOLs both
                run with confidence.
              </p>
            </div>
            <div className="mt-8">
              <ButtonA
                href="/demo-confirmation"
                variant="secondary"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                See how it works
              </ButtonA>
            </div>
          </div>

          <div className="surface-onchain glow-brand rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono-tnum text-body-sm text-white/60">
                deal #KLO-7741 · base
              </span>
              <span className="chip chip-onchain">Settled</span>
            </div>
            <div className="mt-5 space-y-3">
              {ledger.map(([label, value, color]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-lg bg-white/[0.04] px-4 py-3"
                >
                  <span className="font-mono-tnum text-body-sm uppercase tracking-wide text-white/55">
                    {label}
                  </span>
                  <span className={`font-mono-tnum text-body font-semibold ${color}`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 font-mono-tnum text-body-sm text-white/45">
              <span>0x9f…3aE2</span>
              <span>block 19,884,201</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** The stack of alternating illustrated feature rows. */
export default function FeatureRows() {
  return (
    <>
      <FeatureRow
        imageOn="right"
        bg="soft"
        eyebrow="Audience match"
        heading="Target the right crypto audience for your project"
        ctaLabel="Start vetting KOLs"
        img={`${CDN}/5f4f61fbca8cb4f5cdfd17c4_Web_illustration_feature_02.svg`}
        imgAlt="Filtering crypto KOLs by audience on Kolio"
        body={
          <>
            <p>
              Apply filters to Kolio's index of crypto TikTok KOLs to find the
              creators whose audience actually overlaps with your token's
              buyers.
            </p>
            <p className="mt-4">
              Filter by audience age, location, language, niche (DeFi, L1/L2,
              NFTs, trading, gaming) and much more.
            </p>
            <p className="mt-4">
              Add KOLs to your shortlist, ready for outreach and on-chain deals.
            </p>
          </>
        }
      />

      {/* dark on-chain punctuation */}
      <EscrowTerminal />

      <ComparisonBlock
        heading="The old way burns budget. The Kolio way proves it."
        oldLabel="Sourcing TikTok KOLs the old way"
        newLabel="discovery"
        rows={[
          {
            old: 'Trust a screenshot of follower counts',
            better: 'Verified reach + real-follower rate on every profile',
          },
          {
            old: 'Wire USDC to a DM and hope they post',
            better: 'Fund escrow, release only on delivery',
          },
          {
            old: 'Guess whether the audience even holds crypto',
            better: 'Audience crypto-awareness & geo before you spend',
          },
          {
            old: 'No way to prove the campaign worked',
            better: 'On-chain attribution you can report to the team',
          },
        ]}
      />

      <FeatureRow
        imageOn="right"
        bg="soft"
        eyebrow="Full coverage"
        heading="Discover KOLs across every crypto channel"
        ctaLabel="Start vetting KOLs"
        img={`${CDN}/617958566b1c7ae8ac449a5d_web_illustration_feature_16.svg`}
        imgAlt="Crypto KOLs across TikTok, X, YouTube and Telegram"
        body={
          <>
            <p>
              Kolio covers more than TikTok. It surfaces crypto KOLs across the
              channels that drive web3 campaigns: TikTok, X (Twitter), YouTube,
              and Telegram.
            </p>
            <p className="mt-4">
              You see the real numbers behind each profile — and you see that
              there are dozens more like them reaching your audience.
            </p>
            <p className="mt-4">
              That coverage lets you weigh every option and make the right call
              fast. Never feel stuck on sourcing again.
            </p>
          </>
        }
      />

      <FeatureRow
        imageOn="left"
        eyebrow="Scale what works"
        heading="Scale by doing more of what already converts"
        ctaLabel="Start vetting KOLs"
        img={`${CDN}/5f4f61fc9227880c921d9e97_Web_illustration_feature_04.svg`}
        imgAlt="Lookalike KOL search on Kolio"
        body={
          <p>
            Use lookalike search to find crypto KOLs with audiences and content
            similar to the partnerships that already drove conversions and
            on-chain attribution for you.
          </p>
        }
      />
    </>
  );
}
