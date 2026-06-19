import Container from '@/components/ui/Container';
import SectionHeader from './SectionHeader';

const CDN = 'https://cdn.prod.website-files.com/5f59e07fe9136eb4299c5719';

type Article = {
  href: string;
  img: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  title: string;
  authors: string[];
  date: string;
  read: string;
};

const ARTICLES: Article[] = [
  {
    href: '/blog/how-to-find-competitors-affiliates',
    img: `${CDN}/69c56fc7fd146c17d6a768e6_68efab9808d0e9e998a3d4ba_micro%20influencer%20examples.avif`,
    tag: 'Recruitment',
    tagColor: '#fee9dd',
    tagBg: '#ff521a',
    title: "How to Find Your Competitors' Affiliates (And Recruit Them for Your Program)",
    authors: [`${CDN}/66dad82f68010bced8ff8a36_1517376322625.avif`],
    date: 'June 14, 2026',
    read: '11 mins',
  },
  {
    href: '/blog/affiliate-onboarding',
    img: `${CDN}/6a21479c04d6b0310d8f458d_69788444f5f8bf421ee31b33_Risk%20in%20influencer%20marketing.avif`,
    tag: 'Relationships',
    tagColor: '#ad1f66',
    tagBg: '#ffdbed',
    title: 'Affiliate Onboarding: How to Set Up New Affiliates So They Actually Start Posting',
    authors: [
      `${CDN}/66dad82f68010bced8ff8a36_1517376322625.avif`,
      `${CDN}/6721ef563105b8a4d3048f1a_Gabija%20Jankausk%C4%97.avif`,
      `${CDN}/6565f539b29b043aa2e4255a_1688989624991.avif`,
      `${CDN}/653b8e44f8b5205c6d6180c4_1651060313711.avif`,
    ],
    date: 'June 4, 2026',
    read: '14 mins',
  },
  {
    href: '/blog/affiliate-program-management',
    img: `${CDN}/6a19d03ab3f650d596a48ac1_6867bca938fd53da7ab7e2b0_Untitled%20design.avif`,
    tag: 'Strategy',
    tagColor: '#141414',
    tagBg: '#ebe9e0',
    title: 'Affiliate Program Management: How to Scale Your Program Without Losing Control',
    authors: [
      `${CDN}/66dad82f68010bced8ff8a36_1517376322625.avif`,
      `${CDN}/6721ef563105b8a4d3048f1a_Gabija%20Jankausk%C4%97.avif`,
      `${CDN}/6565f539b29b043aa2e4255a_1688989624991.avif`,
    ],
    date: 'May 29, 2026',
    read: '15 mins',
  },
  {
    href: '/blog/how-to-pay-affiliates',
    img: `${CDN}/693010ec29fd00f95f3d822f_img_blog_Influencer%20Trends.avif`,
    tag: 'Relationships',
    tagColor: '#ad1f66',
    tagBg: '#ffdbed',
    title: 'How to Pay Affiliates: Methods, Timing, and Tools to Make It Scalable',
    authors: [
      `${CDN}/6565f539b29b043aa2e4255a_1688989624991.avif`,
      `${CDN}/6721ef563105b8a4d3048f1a_Gabija%20Jankausk%C4%97.avif`,
    ],
    date: 'May 27, 2026',
    read: '17 mins',
  },
  {
    href: '/blog/how-to-find-affiliates',
    img: `${CDN}/698dd43638197b62847121e3_68efac92924fdb43a0b46f5f_influencer%20marketing%20blogs.avif`,
    tag: 'Recruitment',
    tagColor: '#fee9dd',
    tagBg: '#ff521a',
    title: 'How to Find Affiliates: 9 Strategies to Build a High-Quality Program',
    authors: [`${CDN}/66dad82f68010bced8ff8a36_1517376322625.avif`],
    date: 'May 14, 2026',
    read: '15 mins',
  },
  {
    href: '/blog/affiliate-marketing-automation',
    img: `${CDN}/693712d583b0f2dfc1b486b5_6867894706dfe96c6555dc9f_New%20Market%20Expansion.avif`,
    tag: 'Strategy',
    tagColor: '#141414',
    tagBg: '#ebe9e0',
    title: 'How to Automate Your Affiliate Program Across Every Stage',
    authors: [`${CDN}/67920950027eb523d6b9c30e_Rochi.avif`],
    date: 'May 12, 2026',
    read: '15 min',
  },
];

/** "Recent Articles" — 3-column grid of article cards with stacked author avatars. */
export default function RecentArticles() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container className="max-w-[896px]">
        <SectionHeader title="Recent Articles" href="https://www.modash.io/category/all" />

        <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
          {ARTICLES.map((a) => (
            <div key={a.href} className="flex flex-col">
              <a href={a.href} className="block overflow-hidden rounded-xl">
                <img
                  src={a.img}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </a>
              <a
                href={`/category/${a.tag.toLowerCase()}`}
                className="mt-4 inline-flex w-fit rounded-pill px-3 py-1 text-eyebrow font-semibold"
                style={{ color: a.tagColor, backgroundColor: a.tagBg }}
              >
                {a.tag}
              </a>
              <a
                href={a.href}
                className="mt-3 font-display text-body-lg leading-tight text-foreground"
              >
                {a.title}
              </a>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {a.authors.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      loading="lazy"
                      className="h-7 w-7 rounded-full object-cover ring-2 ring-white"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2 text-body-sm text-foreground/50">
                  <span>{a.date}</span>
                  <span>•</span>
                  <span>{a.read}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
