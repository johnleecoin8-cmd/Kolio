import { cn } from '@/lib/cn';

/**
 * Mid-page section heading. Bold sans, normal case (NOT the uppercase display face).
 */
export default function SectionHeading({
  children,
  className,
  as: Tag = 'h2',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'h2' | 'h3';
}) {
  return (
    <Tag
      className={cn(
        'font-sans font-bold tracking-tight text-[1.75rem] leading-[1.15] md:text-[2.5rem] text-foreground',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
