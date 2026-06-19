import Container from '@/components/ui/Container';
import { Globe, TrendingUp, Sparkles } from 'lucide-react';

const ITEMS = [
  {
    Icon: Globe,
    text: 'Receive structured, app-ready data. Skip the heavy lifting and save months of development.',
  },
  {
    Icon: TrendingUp,
    text: 'Leave data scalability and freshness to us. Focus on your unique value proposition.',
  },
  {
    Icon: Sparkles,
    text: 'Our AI search endpoints can power truly innovative use-cases. Get an edge over others.',
  },
];

/** "Beyond the data" — centered heading + 3 icon columns. */
export default function Foundation() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="text-center text-[1.75rem] font-semibold leading-[1.15] text-foreground">
          Beyond the data. Get the foundation.
        </h2>

        <div className="mx-auto mt-12 grid max-w-[940px] gap-10 md:grid-cols-3 md:gap-8">
          {ITEMS.map(({ Icon, text }) => (
            <div key={text} className="flex flex-col items-center text-center">
              <Icon className="h-7 w-7 text-ink" strokeWidth={2} />
              <p className="mt-4 max-w-[300px] text-body font-medium text-foreground/85">
                {text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
