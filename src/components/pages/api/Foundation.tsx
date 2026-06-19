import Container from '@/components/ui/Container';
import { Globe, TrendingUp, Sparkles } from 'lucide-react';

const ITEMS = [
  {
    Icon: Globe,
    text: 'Receive structured, app-ready KOL data. Skip the scraping and save months of integration work.',
  },
  {
    Icon: TrendingUp,
    text: 'Leave audience vetting and data freshness to us. Focus on your campaigns, not your pipelines.',
  },
  {
    Icon: Sparkles,
    text: 'Our AI search and on-chain attribution endpoints power use-cases no spreadsheet can. Get an edge.',
  },
];

/** "Beyond the data" — centered heading + 3 icon columns. */
export default function Foundation() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="text-center text-[1.75rem] font-semibold leading-[1.15] text-foreground">
          Beyond raw follower counts. Get a foundation you can trust.
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
