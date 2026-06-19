import { useState } from 'react';
import { Search } from 'lucide-react';
import Container from '@/components/ui/Container';

/**
 * Hero of the Crypto KOL Reach Checker.
 * Centered big heading (one word in the brand gradient) + centered description,
 * a single centered search bar (magnifier icon + handle input + check button),
 * a hairline divider, and a large bordered result/example card below.
 */
export default function Hero() {
  const [handle, setHandle] = useState('');

  return (
    <section className="bg-background pt-10 md:pt-16">
      <Container>
        {/* page title — one word highlighted in the brand gradient */}
        <h1 className="mx-auto max-w-4xl text-center font-display text-4xl font-normal uppercase leading-[1.02] tracking-tight text-foreground md:text-6xl xl:text-[5rem]">
          Crypto KOL <span className="text-gradient-brand">Reach</span> Checker
        </h1>

        {/* description */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-body-md text-foreground/80">
          Check any crypto KOL&apos;s real reach, engagement rate, audience
          quality, and recent posts on X. Free, with no sign-up needed — see
          past the vanity numbers before you book.
        </p>

        {/* centered search bar */}
        <form
          className="mx-auto mt-8 flex w-full max-w-xl items-center gap-2 rounded-lg border border-black/10 bg-white p-1.5 pl-4 shadow-nav"
          onSubmit={(e) => e.preventDefault()}
        >
          <Search className="h-4 w-4 shrink-0 text-foreground" />
          <input
            type="text"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            name="kol-handle"
            autoComplete="off"
            placeholder="@VitalikButerin"
            className="flex-1 border-none bg-transparent text-body-sm leading-5 text-foreground placeholder:text-foreground/40 outline-none"
          />
          <button
            type="submit"
            className="inline-flex h-9 shrink-0 items-center justify-center rounded-md bg-ink px-5 text-body-sm font-semibold text-white shadow-btn transition hover:opacity-90"
          >
            Check Profile
          </button>
        </form>

        {/* hairline divider */}
        <div className="mx-auto mt-10 h-px w-full max-w-6xl bg-violet/20" />

        {/* large bordered result / example card */}
        <div className="mx-auto mt-10 w-full max-w-6xl rounded-2xl border border-violet/20 bg-white shadow-nav">
          <div className="aspect-[16/9] w-full" />
        </div>
      </Container>
    </section>
  );
}
