import Container from '@/components/ui/Container';

/** Auto-scrolling row of partner wordmarks (typographic, no external assets).
 *  An endless ribbon implies "too many to fit", amplifying perceived adoption. */
export default function LogoMarquee({
  label = 'The crypto teams running KOL programs on Kolio',
  names,
}: { label?: string; names: string[] }) {
  const loop = [...names, ...names];
  return (
    <section className="border-y border-gray-200 bg-white py-10">
      <Container>
        <p className="mb-6 text-center text-eyebrow uppercase tracking-widest text-foreground/45">{label}</p>
      </Container>
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-12 whitespace-nowrap">
          {loop.map((n, i) => (
            <span key={n + i} className="font-display text-body-lg tracking-tight text-foreground/35">{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
