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

function Row({ text, dark }: { text: string; dark?: boolean }) {
  return (
    <div className="flex items-start gap-3">
      {dark ? (
        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-pill bg-mint" />
      ) : (
        <img
          src={CHECK}
          width={20}
          height={20}
          alt=""
          loading="lazy"
          className="mt-0.5 shrink-0"
        />
      )}
      <span
        className={`font-mono-tnum text-body-sm ${
          dark ? 'text-white/70' : 'text-foreground/65'
        }`}
      >
        {text}
      </span>
    </div>
  );
}

/** Three columns of grouped datapoints — first card is a dark on-chain terminal lead. */
export default function DataPoints() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <p className="eyebrow mb-3">The schema</p>
          <h2 className="display-lg font-display text-[1.75rem] text-foreground md:text-[2.1875rem]">
            More than 30 datapoints, live and unfiltered
          </h2>
          <p className="mt-4 text-body-md text-foreground/70">
            The Kolio Raw API exposes both high-level KOL profiles and deep,
            specific endpoints so you can vet, monitor, and attribute web3
            campaigns in real time
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {COLS.map((col, ci) => {
            const dark = ci === 0;
            return (
              <div
                key={col.title}
                className={
                  dark
                    ? 'surface-onchain flex flex-col gap-8 rounded-xl p-6 md:p-8'
                    : 'card-kit flex flex-col gap-8 p-6 md:p-8'
                }
              >
                <div>
                  <div className="flex items-center gap-3">
                    {dark ? (
                      <span className="chip chip-onchain font-mono-tnum">
                        profile
                      </span>
                    ) : (
                      <img
                        src={col.icon}
                        width={24}
                        height={24}
                        alt=""
                        loading="lazy"
                      />
                    )}
                    <h3
                      className={`text-body-md font-semibold ${
                        dark ? 'text-white' : 'text-foreground'
                      }`}
                    >
                      {col.title}
                    </h3>
                  </div>
                  <p
                    className={`mt-3 text-body ${
                      dark ? 'text-white/55' : 'text-foreground/60'
                    }`}
                  >
                    {col.subtitle}
                  </p>
                </div>

                {col.groups.map((g, gi) => (
                  <div key={gi}>
                    {gi > 0 && (
                      <div
                        className={`mb-8 h-px w-full ${
                          dark ? 'bg-white/10' : 'bg-black/10'
                        }`}
                      />
                    )}
                    <div className="flex flex-col gap-4">
                      {g.items.map((it) => (
                        <Row key={it} text={it} dark={dark} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
