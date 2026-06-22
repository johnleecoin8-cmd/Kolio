import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import MotionReveal from '@/components/ui/MotionReveal';

export default function GetStarted() {
  const [email, setEmail] = useState('');
  return (
    <section className="canvas py-24 md:py-32">
      <Container>
        <MotionReveal className="mx-auto max-w-2xl text-center">
          <h2 className="display mx-auto max-w-[14ch] text-h1 text-ink">
            Get started with <span className="text-grad">Kolio</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-lg text-ink/60">
            Run your first proof-based crypto KOL campaign. Free to explore, no wallet connect required.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-9 flex w-full max-w-md items-center gap-2 rounded-pill border border-ink/10 bg-paper p-1.5 pl-5 float-sm">
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" className="flex-1 border-none bg-transparent text-body text-ink outline-none placeholder:text-ink/35" />
            <button type="submit" className="inline-flex shrink-0 items-center gap-2 rounded-pill bg-brand px-5 py-3 font-medium text-white transition hover:opacity-90">Start <ArrowRight className="h-4 w-4" /></button>
          </form>
        </MotionReveal>
      </Container>
    </section>
  );
}
