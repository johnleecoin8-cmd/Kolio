import BlogHero from '@/components/pages/blog-index/BlogHero';
import TrustedBy from '@/components/pages/blog-index/TrustedBy';
import FeaturedArticle from '@/components/pages/blog-index/FeaturedArticle';
import RecentArticles from '@/components/pages/blog-index/RecentArticles';
import BiteSizedInsights from '@/components/pages/blog-index/BiteSizedInsights';
import ScaleProgram from '@/components/pages/blog-index/ScaleProgram';
import EndToEndCta from '@/components/pages/blog-index/EndToEndCta';

/** Kolio /blog index — the web3 KOL playbook. Sections render top-to-bottom. */
export default function BlogIndex() {
  return (
    <main>
      <BlogHero />
      <TrustedBy />
      <FeaturedArticle />
      <RecentArticles />
      <BiteSizedInsights />
      <ScaleProgram />
      <EndToEndCta />
    </main>
  );
}
