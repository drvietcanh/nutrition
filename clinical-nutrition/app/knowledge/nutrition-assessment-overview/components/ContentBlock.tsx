/**
 * Reusable component for main content paragraphs
 * Educational intent: Ensures consistent typography and spacing for
 * educational text, optimized for long-form reading
 */
interface ContentBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function ContentBlock({ children, className = '' }: ContentBlockProps) {
  return (
    <div className={`space-y-4 text-base leading-relaxed text-neutral-700 sm:text-lg ${className}`}>
      {children}
    </div>
  );
}
