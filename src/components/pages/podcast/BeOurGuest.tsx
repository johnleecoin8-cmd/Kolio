import Container from '@/components/ui/Container';

export default function BeOurGuest() {
  return (
    <section id="guest" className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="text-center font-sans font-bold text-h4 md:text-h3 leading-tight tracking-tight text-navy">
          Be our next guest!
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-body-sm text-foreground/80">
              We're looking for sharp operators who:
            </p>
            <ul className="mt-4 space-y-3 list-disc pl-5 text-body-sm text-foreground/80">
              <li>
                Run (or have run) crypto KOL campaigns at an exchange,
                protocol, project, or web3 brand
              </li>
              <li>
                Are willing to pull back the curtain on how you really vet
                KOLs, structure deals, and measure what worked
              </li>
            </ul>
            <p className="mt-5 text-body-sm text-foreground/80 max-w-[440px]">
              You absolutely <span className="font-bold">don't</span> need an
              audience of your own. We're here to spotlight the marketers
              quietly building web3 influencer marketing into a serious,
              accountable channel.
            </p>
            <a
              href="/demo-confirmation"
              className="mt-7 inline-flex items-center justify-center h-10 px-5 rounded-sm bg-blue text-white text-body-sm font-semibold uppercase tracking-wide transition hover:opacity-90"
            >
              Register your interest
            </a>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-[440px] rounded-lg bg-gradient-brand p-10 text-center">
              <p className="font-sans font-bold text-white text-h4 leading-tight">
                Got a KOL campaign worth talking about?
              </p>
              <p className="mt-4 text-white/90 text-body-sm">
                Pitch us your story and reach an audience of web3 growth and
                marketing teams.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
