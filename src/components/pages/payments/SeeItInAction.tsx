import Container from '@/components/ui/Container';
import PaymentsDashboard from './PaymentsDashboard';

/** See it in action — interactive Modash Payments product demo mockup. */
export default function SeeItInAction() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-h4 text-ink md:text-h3">
            See it in action
          </h2>
          <p className="mt-4 text-body-md text-foreground/70">
            Walk through this interactive demo to see how Modash Payments handles
            global payouts, automatic invoicing, and tax compliance — so you can
            pay every creator from one place.
          </p>
        </div>

        <div className="mt-10 h-[680px] w-full overflow-hidden rounded-[20px] bg-background-soft p-2 shadow-nav md:mt-14 md:p-3">
          <PaymentsDashboard />
        </div>
      </Container>
    </section>
  );
}
