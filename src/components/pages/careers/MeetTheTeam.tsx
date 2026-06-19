import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const POLAROIDS = [
  '6889f33e7f5a20c9aa255245_img_polaroid_team1.avif',
  '6889f384c8db42d4a675f98f_img_polaroid_team2.avif',
  '6889f38cd8bd2d9d45f95b50_img_polaroid_team3.avif',
  '6889f8a25912ad3d1dbbb62f_img_polaroid_team4.avif',
  '6889f8d126ba0461813b160f_img_polaroid_team5.avif',
  '6889f8da6b9a0a6d2b243c2e_img_polaroid_team6.avif',
  '6889f907915e8dc0f2dbc74a_img_polaroid_team7.avif',
  '6889f9270562eaf19b61b50f_img_polaroid_team8.avif',
  '6889f9511c2eb4a2fc544408_img_polaroid_team9.avif',
  '6889f95918e403dfb96f647f_img_polaroid_team10.avif',
  '6889f977972ae8ee7865dad9_img_polaroid_team11.avif',
  '6889f984471866da593309c3_img_polaroid_team12.avif',
  '6889f9987a9ec327eb66a392_img_polaroid_team13.avif',
];

const ROTATIONS = [
  '-rotate-2',
  'rotate-1',
  '-rotate-1',
  'rotate-2',
  'rotate-1',
  '-rotate-2',
  'rotate-2',
  '-rotate-1',
  'rotate-1',
  '-rotate-2',
  'rotate-2',
  '-rotate-1',
  'rotate-1',
];

/** Meet the Team — heading, 2-col copy, scattered polaroid masonry grid. */
export default function MeetTheTeam() {
  return (
    <section className="bg-background pb-16 md:pb-24">
      <Container>
        <h2 className="text-center font-display text-h3 uppercase leading-tight text-foreground md:text-h2">
          Meet the Team
        </h2>

        <div className="mx-auto mt-8 grid max-w-[940px] gap-6 text-body-sm leading-relaxed text-foreground/70 md:mt-10 md:grid-cols-2 md:gap-10 md:text-body">
          <div className="space-y-4">
            <p>
              Founded by a high-school dropout and a Canadian (yes, we&rsquo;re
              also shocked it&rsquo;s going so well), Modash is building a suite of
              tools that help brands scale partnerships with online content
              creators.
            </p>
            <p>
              1000 companies like Google, Wolt (Doordash), Bolt, Adoreme use
              Modash to find, analyse and monitor social media creators.
            </p>
            <p>
              We have some very big customers. Some have already changed the
              world. But many of them are just starting out. Modash is their first
              customer acquisition channel and we help make their missions come to
              life, in our small way.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              We&rsquo;re a profitable company. We&rsquo;re also backed by the best
              investors in Europe. Including Icebreaker.vc and group of founders
              (some have built their own unicorns).
            </p>
            <p>
              We&rsquo;re a small team and we&rsquo;re just getting started.
              You&rsquo;ll work with people who have done everything from build
              solar cars to hanging out with Metallica and Bon Jovi. Folks who
              have seen the inner workings of companies like Amazon, Veriff,
              Pipedrive, Yes, and the burning man of startups - Pirate summit.
            </p>
            <p>
              Come be great and do great things and make great stuff and create
              great memories while making great impact. Do it!
            </p>
          </div>
        </div>

        {/* scattered polaroid masonry */}
        <div className="mx-auto mt-12 max-w-[1000px] columns-2 gap-4 sm:columns-3 md:mt-16 md:gap-6">
          {POLAROIDS.map((src, i) => (
            <div
              key={src}
              className={`mb-4 break-inside-avoid md:mb-6 ${ROTATIONS[i]}`}
            >
              <div className="overflow-hidden rounded-md bg-white p-2 shadow-nav">
                <img
                  src={`${CDN}/${src}`}
                  alt={`Modash team moment ${i + 1}`}
                  loading="lazy"
                  className="w-full rounded-sm object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
