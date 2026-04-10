import { cn } from '../../lib/utils';
export default function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section className={cn('py-12 bg-white', className)} id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">{children}</div>
    </section>
  );
}
