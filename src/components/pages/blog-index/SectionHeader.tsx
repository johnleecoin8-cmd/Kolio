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
      <h3 className="font-display text-[1.75rem] uppercase leading-tight text-foreground md:text-[2.25rem]">
        {title}
      </h3>
      <a
        href={href}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-background-soft px-4 py-2 text-body-sm font-semibold text-foreground transition-colors hover:bg-sand"
      >
        View all
        <ArrowRight size={15} />
      </a>
    </div>
  );
}
