import React from "react";

/**
 * Reusable component for educational callout boxes
 * Educational intent: Highlights important concepts, warnings, key takeaways,
 * clinical insights, and common pitfalls without using imperative language
 * or treatment recommendations
 */
interface EducationalNoteProps {
  children: React.ReactNode;
  variant?: 'info' | 'warning' | 'tip' | 'clinical-insight' | 'common-pitfall';
  title?: string;
}

export function EducationalNote({ 
  children, 
  variant = 'info',
  title 
}: EducationalNoteProps) {
  const variantStyles = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
    tip: 'bg-green-50 border-green-200 text-green-900',
    'clinical-insight': 'bg-purple-50 border-purple-300 text-purple-900',
    'common-pitfall': 'bg-orange-50 border-orange-300 text-orange-900'
  };

  const variantTextStyles = {
    info: 'text-blue-800',
    warning: 'text-amber-800',
    tip: 'text-green-800',
    'clinical-insight': 'text-purple-800',
    'common-pitfall': 'text-orange-800'
  };

  const titleColor = variant === 'info' 
    ? 'text-blue-900' 
    : variant === 'warning' 
    ? 'text-amber-900' 
    : variant === 'tip'
    ? 'text-green-900'
    : variant === 'clinical-insight'
    ? 'text-purple-900'
    : 'text-orange-900';

  const defaultTitle = variant === 'clinical-insight'
    ? 'Hiểu Biết Lâm Sàng'
    : variant === 'common-pitfall'
    ? 'Cạm Bẫy Thường Gặp'
    : undefined;

  return (
    <div className={`rounded-md border p-4 sm:p-5 ${variantStyles[variant]}`}>
      {(title || defaultTitle) && (
        <h4 className={`font-semibold text-base sm:text-lg mb-2 sm:mb-3 ${titleColor}`}>
          {title || defaultTitle}
        </h4>
      )}
      <div className={`text-sm sm:text-base leading-relaxed ${variantTextStyles[variant]}`}>
        {children}
      </div>
    </div>
  );
}
