import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Centered warm-gradient CTA panel: "Vetting views is just the start". */
export default function JustTheBeginning() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="rounded-xl bg-gradient-brand px-6 py-20 text-white md:px-12 md:py-28">
          <h2 className="mx-auto max-w-[13ch] text-center font-display text-[2.75rem] uppercase leading-[0.98] text-white md:text-[6.25rem]">
            Vetting views is just the start
          </h2>
          <p className="mx-auto mt-8 max-w-[480px] text-center text-body text-white/85 md:text-body-md">
            Kolio takes you from discovery to payout — find crypto KOLs across
            DeFi, NFTs, L1/L2, trading and gaming, vet them on proof, pay through
            on-chain escrow, and attribute every campaign.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonA
              href="/demo-confirmation"
              variant="secondary"
              size="md"
            >
              Book a demo
            </ButtonA>
          </div>
        </div>
      </Container>
    </section>
  );
}
