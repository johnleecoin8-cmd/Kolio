/** "Scaling your web3 KOL program?" — warm gradient CTA panel (later.com pattern). */
export default function ScalingCta() {
  return (
    <div className="my-10 overflow-hidden rounded-2xl bg-gradient-brand px-6 py-16 text-center md:px-12 md:py-20">
      <h2 className="mx-auto max-w-[680px] font-display text-[2.25rem] leading-[1.04] text-white sm:text-[3rem] md:text-[3.5rem]">
        Scaling your web3 KOL program?
      </h2>
      <p className="mx-auto mt-5 max-w-md text-body text-white/90">
        Stop stitching together spreadsheets, DMs and screenshots. With Kolio you
        discover and vet crypto KOLs, pay them on-chain through escrow, and track
        every campaign down to real deposits — all in one place.
      </p>
      <a
        href="/demo-confirmation"
        className="mt-8 inline-flex h-11 items-center justify-center rounded-sm bg-white px-5 text-body font-semibold text-ink no-underline shadow-btn transition hover:opacity-90"
      >
        Book a demo
      </a>
    </div>
  );
}
