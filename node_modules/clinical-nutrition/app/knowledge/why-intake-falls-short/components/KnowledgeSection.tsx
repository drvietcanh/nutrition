/**
 * KnowledgeSection component
 * 
 * Educational purpose: Provides consistent structure for major content sections
 * in knowledge pages. Ensures semantic HTML, accessibility, and consistent styling.
 * 
 * Usage: Wrap major content sections to maintain consistent structure and spacing.
 */

interface KnowledgeSectionProps {
  id: string;
  heading: string;
  children: React.ReactNode;
}

export default function KnowledgeSection({ id, heading, children }: KnowledgeSectionProps) {
  return (
    <section
      aria-labelledby={id}
      className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
    >
      <h2
        id={id}
        className="text-xl font-semibold sm:text-2xl text-gray-900"
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}
