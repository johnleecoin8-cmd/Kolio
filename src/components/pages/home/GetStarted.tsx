import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Calm closing: big light-weight headline + email capture (reference structure). */
export default function GetStarted() {
  const [email, setEmail] = useState('');
  return (
    <section className="canvas-warm2 py-24 md:py-36">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display-light text-[2.5rem] leading-[1.02] text-foreground md:text-[4.5rem]">
            Get started with <span className="accent text-gradient-brand">Kolio</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
            Run your first proof-based crypto KOL campaign. Free to explore, no wallet connect required.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-10 flex w-full max-w-md items-center gap-2 rounded-pill border border-black/10 bg-white p-1.5 pl-5 shadow-float-sm"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 border-none bg-transparent text-body text-foreground outline-none placeholder:text-foreground/40"
            />
            <button type="submit" className="inline-flex shrink-0 items-center gap-2 rounded-pill bg-brand px-5 py-3 font-semibold text-white transition hover:opacity-90">
              Start <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
