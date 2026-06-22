import ArticleHeader from '@/components/pages/blog-post/ArticleHeader';
import ArticleBody from '@/components/pages/blog-post/ArticleBody';
import RecentArticles from '@/components/pages/blog-post/RecentArticles';
import EndCta from '@/components/pages/blog-post/EndCta';

/**
 * Kolio blog post — calm-premium editorial reading layout on a soft warm canvas.
 * Light-weight display title, chip tags, clean meta row, comfortable single-measure
 * column with a sticky TOC rail, and a calm HeroPanel-style closing CTA.
 * Flow: header → article (TOC + 19 platforms + mid CTA) → recent articles → closing.
 */
export default function BlogPost() {
  return (
    <main className="canvas-warm">
      <ArticleHeader />
      <ArticleBody />
      <RecentArticles />
      <EndCta />
    </main>
  );
}
