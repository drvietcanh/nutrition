/**
 * Reusable section heading component with decorative dividers
 * Educational intent: Provides visual hierarchy and clear section breaks
 * for long-form educational content, improving readability and navigation
 */
interface SectionHeadingProps {
  id: string;
  children: React.ReactNode;
  level?: 2 | 3;
  variant?: 'default' | 'amber' | 'blue';
}

export function SectionHeading({ 
  id, 
  children, 
  level = 2,
  variant = 'default'
}: SectionHeadingProps) {
  const HeadingTag = level === 2 ? 'h2' : 'h3';
  const baseClasses = level === 2 
    ? "text-2xl font-semibold text-neutral-900 sm:text-3xl whitespace-nowrap"
    : "text-xl font-semibold text-neutral-900 sm:text-2xl";
  
  // Color variants for different section types
  const dividerColor = variant === 'amber' 
    ? 'via-amber-300' 
    : variant === 'blue' 
    ? 'via-blue-300' 
    : 'via-neutral-300';
  
  return (
    <div className="flex items-center gap-3 my-6">
      <div className={`h-px flex-1 bg-gradient-to-r from-transparent ${dividerColor} to-transparent`}></div>
      <HeadingTag id={id} className={baseClasses}>
        {children}
      </HeadingTag>
      <div className={`h-px flex-1 bg-gradient-to-r from-transparent ${dividerColor} to-transparent`}></div>
    </div>
  );
}
