import { useEffect, useRef, useState } from 'react';

/** Count a number up from 0 once it scrolls into view. Respects reduced-motion. */
export function useCountUp(target: number, durationMs = 1400) {
  const ref = useRef<HTMLElement | null>(null);
  const [value, setValue] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setValue(target); return; }
    const run = () => {
      if (done.current) return;
      done.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / durationMs);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(target * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) run(); });
    }, { threshold: 0.4 });
    io.observe(el);
    // Fallback: never let a stat sit at 0 if the observer never fires
    // (above-the-fold, non-scrolling contexts, headless captures).
    const fallback = setTimeout(() => { if (!done.current) setValue(target); }, 2200);
    return () => { io.disconnect(); clearTimeout(fallback); };
  }, [target, durationMs]);

  return { ref, value };
}
