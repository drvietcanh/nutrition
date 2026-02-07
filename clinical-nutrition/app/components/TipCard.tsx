import { CheckCircle2, Lightbulb, AlertCircle, Info } from "lucide-react";

type TipType = 'tip' | 'check' | 'warning' | 'info';

interface Tip {
  type?: TipType;
  text: string;
}

interface TipCardProps {
  title?: string;
  tips: Tip[] | string[];
  variant?: TipType;
  className?: string;
}

const iconMap = {
  tip: Lightbulb,
  check: CheckCircle2,
  warning: AlertCircle,
  info: Info,
};

const colorMap = {
  tip: 'text-green-600',
  check: 'text-green-600',
  warning: 'text-amber-600',
  info: 'text-blue-600',
};

export function TipCard({ title, tips, variant = 'tip', className = "" }: TipCardProps) {
  // Convert string[] to Tip[] if needed
  const normalizedTips: Tip[] = tips.map(tip => {
    if (typeof tip === 'string') {
      return { text: tip, type: variant };
    }
    return tip;
  });
  
  return (
    <div className={`rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6 ${className}`}>
      {title && (
        <h3 className="heading-4 mb-4">{title}</h3>
      )}
      <div className="space-y-3">
        {normalizedTips.map((tip, index) => {
          const Icon = iconMap[tip.type || 'tip'];
          const iconColor = colorMap[tip.type || 'tip'];
          
          return (
            <div key={index} className="flex items-start gap-3">
              <Icon className={`w-5 h-5 ${iconColor} mt-0.5 flex-shrink-0`} aria-hidden="true" />
              <p className="text-sm text-gray-700 flex-1">{tip.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
