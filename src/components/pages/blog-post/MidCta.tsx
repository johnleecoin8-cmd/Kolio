/** In-article closing CTA after the platform list. */
export default function MidCta() {
  return (
    <section className="mt-16 border-t border-hairline pt-12">
      <h2 className="display-light text-[1.75rem] leading-[1.1] text-foreground md:text-[2.125rem]">
        See why web3 brands run their KOL campaigns on Kolio
      </h2>
      <p className="mt-4 text-body leading-[1.75] text-foreground/80">
        If you market a token, protocol, exchange, or app and you need one tool for the
        whole KOL workflow, you really have two choices:
      </p>
      <ul className="mt-4 space-y-2.5 text-body leading-relaxed text-foreground/80">
        <li>👉 Stitch together a web2 influencer tool, a payments hack, and a spreadsheet</li>
        <li>
          👉 Choose Kolio — the web3 influencer marketing platform, with proof-based
          vetting, on-chain escrow, and real attribution in one place
        </li>
      </ul>
      <p className="mt-4 text-body leading-relaxed text-foreground/80">
        For a web3 team, it’s a no-brainer.
      </p>
      <p className="mt-4 text-body leading-relaxed text-foreground/80">
        See why by{' '}
        <a href="/demo-confirmation" className="font-medium text-brand underline decoration-brand/30 underline-offset-2 hover:decoration-brand">
          trying Kolio for free
        </a>{' '}
        – we won’t even ask for your credit card details!
      </p>
    </section>
  );
}
