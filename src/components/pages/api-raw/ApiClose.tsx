import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Calm closing CTA: light-weight headline + API-key request capture, matching
 *  the GetStarted reference. No loud gradient stack. */
export default function ApiClose() {
  const [email, setEmail] = useState('');
  return (
    <section className="canvas-warm py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display-light text-[2.5rem] leading-[1.02] text-foreground md:text-[4rem]">
            Build on data you can <span className="text-gradient-brand">prove</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
            Request a key and start pulling live crypto KOL signals today. Sandbox is free — no wallet connect required.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-10 flex w-full max-w-md items-center gap-2 rounded-pill border border-black/10 bg-white p-1.5 pl-5 shadow-float-sm"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Work email for your API key"
              className="flex-1 border-none bg-transparent text-body text-foreground outline-none placeholder:text-foreground/40"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-2 rounded-pill bg-brand px-5 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Get a key <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          <p className="mt-4 font-mono-tnum text-eyebrow text-foreground/40">
            Base plan $10,000 / yr · 40,000 requests / mo · X, YouTube, TikTok, Telegram
          </p>
        </div>
      </Container>
    </section>
  );
}
