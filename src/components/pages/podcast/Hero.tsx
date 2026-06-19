/** Podcast hero — brand band with title, subtitle, two CTAs. */
export default function Hero() {
  return (
    <section className="bg-[#d6daff] pt-12 pb-20 md:pt-16 md:pb-28">
      <div className="mx-auto w-full max-w-container px-4 sm:px-6 text-center">
        <h1 className="font-sans font-bold text-h4 md:text-h2 leading-tight tracking-tight text-navy">
          The <span className="text-gradient-brand">Web3 KOL</span> Marketing Podcast
        </h1>
        <p className="mx-auto mt-5 max-w-[640px] text-body text-navy/80">
          Real playbooks from the teams running crypto KOL campaigns that
          actually convert. Kolio sits down with growth leads at exchanges,
          protocols, and projects to unpack how they find, vet, and pay
          KOLs across X, YouTube, Telegram, and TikTok — and how they prove ROI.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#episodes"
            className="inline-flex items-center justify-center h-10 px-5 rounded-sm bg-blue text-white text-body-sm font-semibold uppercase tracking-wide transition hover:opacity-90"
          >
            See all episodes
          </a>
          <a
            href="#guest"
            className="inline-flex items-center justify-center h-10 px-5 rounded-sm bg-white text-navy border border-gray-300 text-body-sm font-semibold uppercase tracking-wide transition hover:bg-gray-50"
          >
            Become a guest
          </a>
        </div>
      </div>
    </section>
  );
}
