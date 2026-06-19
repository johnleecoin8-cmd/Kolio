import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';
const CHECK = `${CDN}/682de021530893fd2b4bcae7_Check%20Circle.png`;

type Group = { items: string[] };
type Col = {
  icon: string;
  title: string;
  subtitle: string;
  groups: Group[];
};

const COLS: Col[] = [
  {
    icon: `${CDN}/68370b6a349bf837c4481e3b_ic_manage%20relationships.avif`,
    title: 'Profile data',
    subtitle: 'Data points to query influencer profile data',
    groups: [
      {
        items: [
          'Username',
          'Display name',
          'Bio / description',
          'Verification status',
          'Privacy status',
          'Get detailed and live influencer profile data and information',
        ],
      },
      {
        items: [
          'Account category',
          'Profile picture URL',
          'External URL / bio link',
          'Address (IG)',
          'Country (YT)',
          'Join Date (YT)',
        ],
      },
    ],
  },
  {
    icon: `${CDN}/68370b6b465c1fff3f547980_ic_collect%20content.png`,
    title: 'Analytics data',
    subtitle: 'Data points to query analytics data',
    groups: [
      {
        items: [
          'Followers count',
          'Total likes count (TT)',
          'Total digg count (TT)',
          'Total views (YT)',
          'Follower lists',
          'Query influencer performance data & metrics',
        ],
      },
    ],
  },
  {
    icon: `${CDN}/68370b6b9eae2d6b80f9cac2_ic_measure%20results.avif`,
    title: 'Content metadata',
    subtitle: 'Data points to query metadata of influencer content',
    groups: [
      {
        items: [
          'Tags',
          'Mentions',
          'Post metadata',
          'Comments',
          'Hashtags used in posts',
          'Query metadata and comments of influencer content',
        ],
      },
      {
        items: [
          'Recent content (posts & stories)',
          'IGTV video count (IG)',
          'Media type flags (IG)',
          'Join feature enabled (YT)',
          'Music feed / info',
          'Video subtitles (YT)',
        ],
      },
    ],
  },
];

function Row({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <img
        src={CHECK}
        width={20}
        height={20}
        alt=""
        loading="lazy"
        className="mt-0.5 shrink-0"
      />
      <span className="text-body-sm text-foreground/65">{text}</span>
    </div>
  );
}

/** Three grey columns of grouped datapoints. */
export default function DataPoints() {
  return (
    <section className="bg-background py-12 md:py-20">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="text-[1.75rem] font-semibold leading-[1.15] text-foreground md:text-[2.1875rem]">
            More than 30 datapoints, live and unfiltered
          </h2>
          <p className="mt-4 text-body-md text-foreground/70">
            Modash Raw API provides both high-level profile data and deep,
            specific endpoints for real-time actions
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {COLS.map((col) => (
            <div
              key={col.title}
              className="flex flex-col gap-8 rounded-lg bg-background-soft p-6 md:p-8"
            >
              <div>
                <div className="flex items-center gap-3">
                  <img src={col.icon} width={24} height={24} alt="" loading="lazy" />
                  <h3 className="text-body-md font-semibold text-foreground">
                    {col.title}
                  </h3>
                </div>
                <p className="mt-3 text-body text-foreground/60">
                  {col.subtitle}
                </p>
              </div>

              {col.groups.map((g, gi) => (
                <div key={gi}>
                  {gi > 0 && <div className="mb-8 h-px w-full bg-black/10" />}
                  <div className="flex flex-col gap-4">
                    {g.items.map((it) => (
                      <Row key={it} text={it} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
