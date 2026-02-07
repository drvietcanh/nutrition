import React from "react";
import { Info, AlertTriangle, CheckCircle, Lightbulb, AlertCircle as AlertCircleIcon } from "lucide-react";

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

const iconMap = {
  info: Info,
  warning: AlertTriangle,
  tip: CheckCircle,
  'clinical-insight': Lightbulb,
  'common-pitfall': AlertCircleIcon,
};

export function EducationalNote({ 
  children, 
  variant = 'info',
  title 
}: EducationalNoteProps) {
  const Icon = iconMap[variant];
  
  const variantStyles = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-900',
      icon: 'text-blue-600',
    },
    warning: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-900',
      icon: 'text-amber-600',
    },
    tip: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-900',
      icon: 'text-green-600',
    },
    'clinical-insight': {
      bg: 'bg-purple-50',
      border: 'border-purple-300',
      text: 'text-purple-900',
      icon: 'text-purple-600',
    },
    'common-pitfall': {
      bg: 'bg-orange-50',
      border: 'border-orange-300',
      text: 'text-orange-900',
      icon: 'text-orange-600',
    }
  };

  const styles = variantStyles[variant];
  const defaultTitle = variant === 'clinical-insight'
    ? 'Hiểu Biết Lâm Sàng'
    : variant === 'common-pitfall'
    ? 'Cạm Bẫy Thường Gặp'
    : undefined;

  return (
    <div className={`rounded-md border p-4 sm:p-5 ${styles.bg} ${styles.border}`} role="alert">
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 ${styles.icon} flex-shrink-0 mt-0.5`} aria-hidden="true" />
        <div className="flex-1 min-w-0">
          {(title || defaultTitle) && (
            <h4 className={`font-semibold text-base sm:text-lg mb-2 sm:mb-3 ${styles.text}`}>
              {title || defaultTitle}
            </h4>
          )}
          <div className={`text-sm sm:text-base leading-relaxed ${styles.text}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
