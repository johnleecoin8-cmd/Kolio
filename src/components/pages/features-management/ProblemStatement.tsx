import Container from '@/components/ui/Container';

/** Big display problem statement on white. */
export default function ProblemStatement() {
  return (
    <section className="bg-background py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-[1080px] text-center">
          <h2 className="font-display uppercase text-[2.25rem] leading-[0.92] text-ink sm:text-[3.5rem] md:text-[5rem]">
            83 KOLs, 4 Telegram DMs, 1 spreadsheet &amp; the deal&rsquo;s
            already slipping
          </h2>
          <p className="mx-auto mt-6 max-w-[760px] text-body-md text-foreground/70">
            Wallet addresses live in a DM, the deal terms live in someone&rsquo;s
            head, and a teammate just pinged the same KOL you closed yesterday.
            Running web3 campaigns shouldn&rsquo;t feel like herding chat
            threads.
          </p>
        </div>
      </Container>
    </section>
  );
}
