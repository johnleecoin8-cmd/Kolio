import Container from '@/components/ui/Container';

/** "Your boss asks for performance" pain statement. */
export default function PainIntro() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[880px] text-center">
          <h2 className="font-display text-[2rem] uppercase leading-[1.05] text-foreground sm:text-[2.75rem] md:text-[3.5rem]">
            Leadership asks what the KOLs delivered.
            <br className="hidden sm:block" /> You&apos;re stuck with screenshots.
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-body-md text-foreground/70">
            You&apos;re scrolling X and Telegram for posts that may already be deleted,
            chasing KOLs for screenshots that never arrive, and stitching reach and
            on-chain results together by hand across half a dozen tabs.
          </p>
        </div>
      </Container>
    </section>
  );
}
