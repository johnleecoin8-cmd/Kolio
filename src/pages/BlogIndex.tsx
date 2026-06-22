import Container from '@/components/ui/Container';
import FeaturedPost from '@/components/pages/blog-index/FeaturedPost';
import PostCard from '@/components/pages/blog-index/PostCard';
import TopicRail from '@/components/pages/blog-index/TopicRail';
import SubscribeClose from '@/components/pages/blog-index/SubscribeClose';
import { posts } from '@/components/pages/blog-index/posts';

/** Kolio /blog index — calm-premium editorial. Light canvas-warm header,
 *  floating card-kit post cards with one larger featured piece, calm close. */
export default function BlogIndex() {
  // gentle alternating tilt for the signature floating feel
  const tilts = ['-rotate-1', '', 'rotate-1', 'rotate-1', '', '-rotate-1'];

  return (
    <main>
      {/* Editorial header — light, calm */}
      <section className="canvas-warm pb-12 pt-20 md:pb-16 md:pt-28">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow inline-flex items-center gap-2 text-foreground/55">
              <span className="h-1.5 w-1.5 rounded-pill bg-brand-coral" /> Kolio Journal
            </span>
            <h1 className="display-light mt-5 text-[2.75rem] leading-[1.02] text-foreground md:text-[4.25rem]">
              The crypto KOL <span className="accent text-gradient-brand">proof</span> playbook
            </h1>
            <p className="mt-6 max-w-xl text-body-md text-foreground/60">
              How to vet creators, settle deals on-chain, and attribute reach without cookies —
              written from the campaigns we run every week.
            </p>
          </div>
          <div className="mt-10">
            <TopicRail />
          </div>
        </Container>
      </section>

      {/* Featured piece */}
      <section className="canvas-warm pb-16 md:pb-20">
        <Container>
          <FeaturedPost />
        </Container>
      </section>

      {/* Recent grid */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="eyebrow text-foreground/50">Latest</span>
              <h2 className="display-light mt-2 text-[1.75rem] leading-tight text-foreground md:text-[2.25rem]">
                Fresh from the field
              </h2>
            </div>
            <span className="hidden text-body-sm text-foreground/45 md:block">
              <span className="font-mono-tnum">{posts.length}</span> articles
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <PostCard key={post.slug} post={post} tilt={tilts[i] ?? ''} />
            ))}
          </div>
        </Container>
      </section>

      {/* Calm close */}
      <SubscribeClose />
    </main>
  );
}
