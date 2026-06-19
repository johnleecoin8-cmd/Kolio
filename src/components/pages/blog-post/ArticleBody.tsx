import Container from '@/components/ui/Container';
import TableOfContents from './TableOfContents';
import PlatformSection from './PlatformSection';
import MidCta from './MidCta';
import { PLATFORMS } from './platforms';

/** Two-column article: sticky TOC rail + main content column with intro, 19 platforms, mid CTA. */
export default function ArticleBody() {
  return (
    <div className="bg-background py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
          {/* TOC rail */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <TableOfContents />
          </aside>

          {/* Article content */}
          <article className="max-w-[720px]">
            {/* intro */}
            <p className="text-body leading-relaxed text-foreground/80">
              With literally hundreds of influencer marketing platforms to choose from,
              selecting the right one for your brand is tricky. If you’re using the
              standard trial-and-error approach, you could end up wasting thousands of
              dollars on a tool that doesn’t do what you need it to 🤦
            </p>
            <p className="mt-4 text-body leading-relaxed text-foreground/80">
              To save you the task of researching them all manually, I’ve rounded up 19
              of the best influencer marketing platforms and compared their:
            </p>
            <ul className="mt-4 space-y-2 pl-5 text-body leading-relaxed text-foreground/80">
              <li className="list-disc">Pricing (where available)</li>
              <li className="list-disc">Influencer database size</li>
              <li className="list-disc">Strengths and weaknesses</li>
            </ul>
            <p className="mt-4 text-body leading-relaxed text-foreground/80">
              Let’s get into it…
            </p>

            {/* platform sections */}
            <div className="divide-y divide-gray-200">
              {PLATFORMS.map((p) => (
                <PlatformSection key={p.num} platform={p} />
              ))}
            </div>

            <MidCta />
          </article>
        </div>
      </Container>
    </div>
  );
}
