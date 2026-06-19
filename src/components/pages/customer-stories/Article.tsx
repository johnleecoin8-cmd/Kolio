import { ReactNode } from 'react';
import Container from '@/components/ui/Container';

const CASE_SCREENSHOT =
  'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/6434210cad5ead1505f6c9f5_NordVPN%20Case%20Study.webp';

const FACTS = [
  { label: 'Industry', value: 'Tech' },
  { label: 'Number of influencers', value: '100 collabs per month' },
  { label: 'Team size', value: '14 marketers' },
  { label: 'Platforms', value: 'YouTube, Instagram' },
];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-eyebrow font-semibold uppercase tracking-wide text-purple-dark">
      {children}
    </p>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-3 font-display text-h4 leading-tight text-foreground md:text-h3">
      {children}
    </h2>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="text-body text-foreground/80">{children}</p>;
}

function Pullquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="border-l-4 border-purple py-1 pl-5 text-body-md font-medium italic text-foreground">
      {children}
    </blockquote>
  );
}

/** Two-column case study body: sticky facts sidebar + article (Challenge / Solution / Impact). */
export default function Article() {
  return (
    <section className="bg-background">
      <Container className="pb-16 md:pb-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] md:gap-16">
          {/* Sidebar */}
          <aside className="md:sticky md:top-28 md:self-start">
            <div className="space-y-6 rounded-xl bg-violet-bg p-6">
              {FACTS.map((f) => (
                <div key={f.label}>
                  <p className="font-semibold text-foreground">{f.label}</p>
                  <p className="mt-1 text-body text-foreground/75">{f.value}</p>
                </div>
              ))}
            </div>
          </aside>

          {/* Article body */}
          <div className="max-w-2xl space-y-12">
            {/* CHALLENGE */}
            <div className="space-y-5">
              <Eyebrow>Challenge</Eyebrow>
              <Heading>
                Digging through 51 million YouTube channels to find the right
                influencers
              </Heading>
              <P>
                NordVPN is no stranger to influencer marketing. They&rsquo;ve
                been using influencers to drive brand awareness, brand trust, and
                revenue for over 4 years.
              </P>
              <P>
                After many experiments across different social media platforms,
                they found that YouTube is the best platform to showcase the
                capabilities of their cybersecurity product.
              </P>
              <P>
                With over 51 million YouTube channels this presents a challenge
                for NordVPN. How do they find and select the right creators for
                their brand?
              </P>
              <P>
                Influencer Marketing Manager Laura Garsdal keeps it simple
                &ndash; know your audience.
              </P>
              <Pullquote>
                &ldquo;I&rsquo;ve been working with Modash for over 3 years.
                Previously, I was at a beauty brand and when I started at NordVPN
                I told my team lead, &quot;I&rsquo;m going to need
                Modash.&rdquo;
              </Pullquote>
            </div>

            {/* SOLUTION */}
            <div className="space-y-5">
              <Eyebrow>Solution</Eyebrow>
              <Heading>
                Using Modash to find YouTube creators with the right audience
                demographics
              </Heading>
              <Pullquote>
                &ldquo;I&rsquo;ve been working with Modash for over 3 years.
                Previously, I was at a beauty brand and when I started at NordVPN
                I told my team lead, &quot;I&rsquo;m going to need
                Modash.&rdquo;
              </Pullquote>
              <P>
                With Modash and a very good understanding of their target
                audience, NordVPN follows an audience-led influencer strategy
                when finding YouTube influencers to partner with. Before even
                looking at the creator stats, they first run an audience search
                focusing on a specific list of demographics.
              </P>
              <Pullquote>
                &ldquo;Modash helps us find the channels that match our target
                audience better &amp; faster&rdquo;
              </Pullquote>
              <P>
                By using Modash, NordVPNs influencer marketers can easily narrow
                down YouTube channels by audience demographics like gender, age
                &amp; location.
              </P>
              <img
                src={CASE_SCREENSHOT}
                alt="Modash creator discovery for NordVPN"
                className="w-full rounded-xl border border-black/5 shadow-nav"
                loading="lazy"
              />
              <P>
                Once they&rsquo;ve identified the YouTube channels with the right
                audiences, they can focus on qualitative aspects of their
                decision making.
              </P>
              <Pullquote>
                &ldquo;We look at what kind of videos they make. We look at the
                topics they cover that we know work for us, like travel, remote
                work, anything where internet security might be an issue or there
                is a need to secure content access from home while
                traveling.&rdquo;
              </Pullquote>
              <P>
                NordVPN also uses Modash to get contact details for creators they
                want to reach out to. Laura downloads all the creator emails she
                needs from Modash Lists &ndash; making her workflow far simpler.
              </P>
              <Pullquote>
                &ldquo;I had a task where I had to find a list of 200 influencers
                to reach out to. I searched around 800 profiles to find the good
                ones. Before Modash, I had to search for profiles manually. With
                Modash, I find creators that actually match our targets &amp; our
                needs and I do it faster&rdquo;
              </Pullquote>
            </div>

            {/* IMPACT */}
            <div className="space-y-5">
              <Eyebrow>Impact</Eyebrow>
              <Heading>2 hours saved a day by removing manual vetting</Heading>
              <P>
                Today, influencer marketing at NordVPN supports all other
                marketing channels including ads and SEO. Video integrations and
                more recently Instagram Stories help raise awareness of the brand
                and directly impact revenue goals.
              </P>
              <P>
                As all marketers know, once a channel starts getting traction
                like this, the next step is to streamline processes and scale the
                initiative.
              </P>
              <P>
                Laura gives Modash props for not only helping her streamline the
                discovery process, but also completely erase the frustratingly
                manual process of getting insights directly from influencers.
              </P>
              <Pullquote>
                &ldquo;Asking influencers for metrics regarding their audiences
                can sometimes be complicated. With Modash I&rsquo;m able to find
                all the information I need with a few clicks before reaching out
                to any influencers.&rdquo;
              </Pullquote>
              <P>How much time does Laura think Modash saves her on average?</P>
              <Pullquote>
                &ldquo;Modash saves me about 1-2 hours a day when I&rsquo;m
                searching profiles and list gathering.&rdquo;
              </Pullquote>
              <P>
                When you&rsquo;re running 100 different collabs a month, every
                minute saved counts big.
              </P>
              <P>
                NordVPN doesn&rsquo;t rest on their YouTube laurels.
                They&rsquo;re always testing to find new awareness &amp;
                acquisition channels to further the success of their influencer
                marketing efforts. Currently, Instagram is on the testing block
                where Modash also plays a supporting role.
              </P>
              <Pullquote>
                &ldquo;I use the Audience Interest filter a lot for our Instagram
                campaigns to find audiences who are interested in certain topics.
                And the Fake Follower rate feature comes in handy when choosing
                which influencers we&rsquo;ll add to our list.&rdquo;
              </Pullquote>
              <P>
                As NordVPN tries to find the perfect recipe for Instagram
                influencer marketing, Modash is proud to stand next to them as
                they take the world by storm.
              </P>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
