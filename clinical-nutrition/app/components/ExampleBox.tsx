import { Lightbulb, Info, AlertCircle } from "lucide-react";

type ExampleBoxVariant = 'info' | 'tip' | 'warning';

interface ExampleBoxProps {
  variant?: ExampleBoxVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-900',
    icon: Info,
    iconColor: 'text-blue-600',
  },
  tip: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-900',
    icon: Lightbulb,
    iconColor: 'text-green-600',
  },
  warning: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-900',
    icon: AlertCircle,
    iconColor: 'text-amber-600',
  },
};

export function ExampleBox({ 
  variant = 'info', 
  title, 
  children, 
  className = "" 
}: ExampleBoxProps) {
  const styles = variantStyles[variant];
  const Icon = styles.icon;

  return (
    <div className={`rounded-lg border ${styles.border} ${styles.bg} p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 ${styles.iconColor} mt-0.5 flex-shrink-0`} aria-hidden="true" />
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className={`text-sm font-semibold ${styles.text} mb-2`}>
              {title}
            </h4>
          )}
          <div className={`text-sm ${styles.text} leading-relaxed`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
