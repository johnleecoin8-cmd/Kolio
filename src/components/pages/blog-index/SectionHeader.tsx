import { ArrowRight } from 'lucide-react';

/** Section title row: heading on the left, "View all" link on the right. */
export default function SectionHeader({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <h3 className="font-display text-[1.5rem] leading-tight text-foreground md:text-h4">
        {title}
      </h3>
      <a
        href={href}
        className="inline-flex shrink-0 items-center gap-1 text-body-sm font-semibold text-foreground/70 transition-colors hover:text-foreground"
      >
        View all
        <ArrowRight size={16} />
      </a>
    </div>
  );
}
