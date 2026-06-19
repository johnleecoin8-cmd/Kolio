import BlogHero from '@/components/pages/blog-index/BlogHero';
import FeaturedArticle from '@/components/pages/blog-index/FeaturedArticle';
import RecentArticles from '@/components/pages/blog-index/RecentArticles';
import BiteSizedInsights from '@/components/pages/blog-index/BiteSizedInsights';
import ScaleProgram from '@/components/pages/blog-index/ScaleProgram';
import EndToEndCta from '@/components/pages/blog-index/EndToEndCta';

/** modash.io /blog index — 1:1 clone. Sections render top-to-bottom. */
export default function BlogIndex() {
  return (
    <main>
      <BlogHero />
      <FeaturedArticle />
      <RecentArticles />
      <BiteSizedInsights />
      <ScaleProgram />
      <EndToEndCta />
    </main>
  );
}
