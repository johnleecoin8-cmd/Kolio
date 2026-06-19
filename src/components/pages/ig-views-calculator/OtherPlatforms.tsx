import WideContainer from './WideContainer';

const CARDS = [
  {
    href: '/demo-confirmation',
    title: 'YouTube Crypto KOL Checker',
    description:
      'Check the real reach and audience of any crypto YouTube KOL. Free, no sign-up needed.',
  },
  {
    href: '/demo-confirmation',
    title: 'Telegram Channel Checker',
    description:
      'Read the real, active audience behind any crypto Telegram channel. Free, no sign-up needed.',
  },
];

/** "Vet KOLs on other channels" — two cross-channel cards. */
export default function OtherPlatforms() {
  return (
    <section className="bg-background py-16 md:py-24">
      <WideContainer>
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="font-display text-5xl lg:text-7xl font-normal leading-tight text-foreground">
            Vet KOLs on every crypto channel
          </h2>
          <p className="max-w-xl text-body text-foreground">
            Use our free checkers to read real reach and audience quality for
            crypto KOLs across X, YouTube, TikTok, and Telegram.
          </p>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-3xl grid-cols-1 gap-6 lg:grid-cols-2">
          {CARDS.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="flex flex-col gap-4 rounded-xl bg-background-soft p-8 text-foreground no-underline transition hover:bg-sand"
            >
              <div className="text-xl font-semibold leading-7">{c.title}</div>
              <p className="text-body-sm leading-relaxed opacity-70">
                {c.description}
              </p>
              <span className="text-body-sm font-semibold underline">
                Try Kolio free
              </span>
            </a>
          ))}
        </div>
      </WideContainer>
    </section>
  );
}
