import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';
import { Check } from 'lucide-react';

const PERFORMANCE = [
  'Average views',
  'Average comments',
  'Average shares',
  'Paid vs. organic',
  'Follower growth',
  'Fake followers',
];

const AUDIENCE = [
  'Countries',
  'Cities',
  'Gender',
  'Language',
  'Fake followers',
  'Interests',
];

/** "The data you need, without switching tabs" — text left, two checklist columns right. */
export default function DataYouNeed() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-h3 leading-tight text-foreground">
              The data you need, without switching tabs
            </h2>
            <div className="mt-8">
              <ButtonA
                href="https://marketer.modash.io/register/marketer"
                variant="primary"
              >
                Try for Free
              </ButtonA>
            </div>
          </div>

          <div className="rounded-xl bg-background-soft p-8 md:p-10">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              <Column title="Performance" items={PERFORMANCE} />
              <Column title="Audience" items={AUDIENCE} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-body text-foreground/80">
            <Check className="h-4 w-4 shrink-0 text-pink-dark" strokeWidth={3} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
