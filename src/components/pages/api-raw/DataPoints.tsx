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
    title: 'KOL profile data',
    subtitle: 'Datapoints to query a crypto KOL’s profile',
    groups: [
      {
        items: [
          'Handle',
          'Display name',
          'Bio / description',
          'Verification status',
          'Public / private status',
          'Get detailed, live KOL profile data and identity signals',
        ],
      },
      {
        items: [
          'Crypto niche (DeFi, NFTs, L1/L2, trading, gaming)',
          'Profile picture URL',
          'Linked wallet / bio link',
          'Region (X)',
          'Country (YT)',
          'Join date (YT)',
        ],
      },
    ],
  },
  {
    icon: `${CDN}/68370b6b465c1fff3f547980_ic_collect%20content.png`,
    title: 'Reach & audience',
    subtitle: 'Datapoints to vet real reach and audience quality',
    groups: [
      {
        items: [
          'Real follower count',
          'Total likes (TT)',
          'Engagement rate',
          'Total views (YT)',
          'Follower lists & audience overlap',
          'Query KOL performance to separate real reach from inflated counts',
        ],
      },
    ],
  },
  {
    icon: `${CDN}/68370b6b9eae2d6b80f9cac2_ic_measure%20results.avif`,
    title: 'Content metadata',
    subtitle: 'Datapoints to query the metadata of KOL content',
    groups: [
      {
        items: [
          'Cashtags ($BTC, $ETH …)',
          'Project mentions',
          'Post metadata',
          'Comments & replies',
          'Hashtags used in posts',
          'Query metadata and sentiment across a KOL’s content',
        ],
      },
      {
        items: [
          'Recent posts & threads',
          'Video count (YT)',
          'Paid-partnership flags',
          'Telegram broadcast info',
          'Pinned / promoted content',
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
            The Kolio Raw API exposes both high-level KOL profiles and deep,
            specific endpoints so you can vet, monitor, and attribute web3
            campaigns in real time
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
