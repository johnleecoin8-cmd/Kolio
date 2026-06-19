import { Play } from 'lucide-react';
import Container from '@/components/ui/Container';

/** See it in action — interactive demo embed placeholder. */
export default function SeeItInAction() {
  return (
    <section className="bg-background py-12 md:py-16">
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

        <div className="mt-10 flex aspect-[16/9] w-full items-center justify-center rounded-xl bg-background-soft">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ink text-white shadow-lg">
            <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
          </div>
        </div>
      </Container>
    </section>
  );
}
