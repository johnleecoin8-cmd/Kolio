import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Calm closing section — quiet email capture for the editorial newsletter. */
export default function SubscribeClose() {
  const [email, setEmail] = useState('');
  return (
    <section className="canvas-warm2 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-foreground/50">The proof brief</span>
          <h2 className="display-light mt-4 text-[2.25rem] leading-[1.04] text-foreground md:text-[3.5rem]">
            One sharp read on crypto KOL marketing, <span className="accent text-gradient-brand">weekly</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
            Methodology, on-chain attribution, and field notes from real campaigns. No fluff, no spam — unsubscribe anytime.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-10 flex w-full max-w-md items-center gap-2 rounded-pill border border-black/10 bg-white p-1.5 pl-5 shadow-float-sm"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@protocol.xyz"
              className="flex-1 border-none bg-transparent text-body text-foreground outline-none placeholder:text-foreground/40"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-2 rounded-pill bg-brand px-5 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Subscribe <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
