/**
 * Reusable content section wrapper component
 * Educational intent: Provides consistent spacing and typography for
 * educational content blocks, ensuring comfortable reading experience
 */
interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
  ariaLabelledBy?: string;
}

export function ContentSection({ 
  children, 
  className = '',
  ariaLabelledBy 
}: ContentSectionProps) {
  return (
    <section
      aria-labelledby={ariaLabelledBy}
      className={`space-y-6 ${className}`}
    >
      {children}
    </section>
  );
}
