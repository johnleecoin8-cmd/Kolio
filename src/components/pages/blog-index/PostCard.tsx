import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Post } from './posts';

/** Floating editorial post card in the shared calm-premium language. */
export default function PostCard({ post, tilt = '' }: { post: Post; tilt?: string }) {
  return (
    <Link
      to="/blog"
      className={`card-kit group flex flex-col rounded-2xl p-6 shadow-float-sm transition hover:-translate-y-1 hover:shadow-float ${tilt}`}
    >
      {/* mini cover: original geometric on-chain motif, no images */}
      <div className="surface-onchain relative mb-5 grid h-36 place-items-center overflow-hidden rounded-xl">
        <div className="absolute -left-6 -top-6 h-24 w-24 rounded-pill bg-brand/30 blur-2xl" />
        <div className="absolute -bottom-8 right-2 h-24 w-24 rounded-pill bg-brand-coral/30 blur-2xl" />
        <span className="num-display text-[2.5rem] leading-none text-white/90">
          {post.topic.slice(0, 2)}
          <span className="align-top text-body-sm text-mint">/</span>
        </span>
      </div>

      <span className="chip chip-brand self-start">{post.topic}</span>
      <h3 className="mt-3 text-body-lg font-semibold leading-snug text-foreground">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-body-sm text-foreground/60">{post.dek}</p>

      <div className="mt-5 flex items-center justify-between border-t border-hairline pt-4">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-pill bg-gradient-brand text-eyebrow font-bold text-white">
            {post.initials}
          </span>
          <div className="leading-tight">
            <div className="text-eyebrow font-semibold text-foreground/80">{post.author}</div>
            <div className="text-eyebrow text-foreground/45">
              <span className="font-mono-tnum">{post.readMin}</span> min · {post.date}
            </div>
          </div>
        </div>
        <ArrowUpRight className="h-4 w-4 text-foreground/40 transition group-hover:text-brand" />
      </div>
    </Link>
  );
}
