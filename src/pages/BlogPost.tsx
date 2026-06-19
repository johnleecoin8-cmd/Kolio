import ArticleHeader from '@/components/pages/blog-post/ArticleHeader';
import ArticleBody from '@/components/pages/blog-post/ArticleBody';
import RecentArticles from '@/components/pages/blog-post/RecentArticles';
import EndCta from '@/components/pages/blog-post/EndCta';

/**
 * Kolio blog post — "19 Best Web3 KOL Marketing Platforms, Compared".
 * Sections render top-to-bottom: header → two-column article (TOC + 19 platforms + mid CTA)
 * → recent articles → gradient end CTA banner.
 */
export default function BlogPost() {
  return (
    <main>
      <ArticleHeader />
      <ArticleBody />
      <RecentArticles />
      <EndCta />
    </main>
  );
}
