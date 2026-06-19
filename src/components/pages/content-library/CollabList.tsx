import { Fragment } from 'react';
import { CalendarDays } from 'lucide-react';
import Container from '@/components/ui/Container';
import { INFLUENCERS } from './data';
import InfluencerCard from './InfluencerCard';
import FeaturedCta from './FeaturedCta';
import ScalingCta from './ScalingCta';

export default function CollabList() {
  return (
    <section className="bg-background pb-6">
      <Container>
        <div className="rounded-xl bg-background-soft p-6 md:p-12">
          {/* header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <h2 className="text-[1.75rem] font-bold leading-tight text-foreground md:text-[2.25rem]">
              Recent influencer collabs with Red Bull
            </h2>
            <span className="inline-flex w-fit items-center gap-2 rounded-pill bg-white px-3 py-1.5 text-body-sm text-foreground/70 shadow-sm">
              <CalendarDays size={15} />
              Last updated{' '}
              <span className="font-semibold text-foreground">05/22/2026</span>
            </span>
          </div>

          <p className="mt-4 max-w-3xl text-body text-foreground/75">
            These 29 influencers have posted at least 1 piece of content that is
            sponsored by Red Bull. Data powered by Modash.{' '}
            <a href="https://www.modash.io/" className="font-semibold underline">
              Start a free trial
            </a>{' '}
            to get a timeline view of influencers' brand collaborations. (Or
            check out our{' '}
            <a href="https://www.modash.io/" className="font-semibold underline">
              Brand Collaborations API
            </a>{' '}
            to get data for your own products and processes.)
          </p>

          <div className="mt-6 flex flex-col gap-4">
            {INFLUENCERS.map((inf, i) => (
              <Fragment key={inf.handle}>
                <InfluencerCard data={inf} />
                {/* Featured CTA after card 3 */}
                {i === 2 && <FeaturedCta />}
                {/* Scaling CTA after card 20 */}
                {i === 19 && <ScalingCta />}
              </Fragment>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
