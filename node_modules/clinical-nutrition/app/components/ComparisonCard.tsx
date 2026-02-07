import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

interface ComparisonItem {
  label: string;
  good?: string;
  bad?: string;
  note?: string;
}

interface ComparisonCardProps {
  title?: string;
  items?: ComparisonItem[];
  goodTitle?: string;
  goodItems?: string[];
  badTitle?: string;
  badItems?: string[];
  note?: string;
  className?: string;
}

export function ComparisonCard({ 
  title, 
  items, 
  goodTitle, 
  goodItems, 
  badTitle, 
  badItems, 
  note, 
  className = "" 
}: ComparisonCardProps) {
  // Support new format (goodTitle/badTitle with arrays)
  if (goodTitle && goodItems && badTitle && badItems) {
    const maxLength = Math.max(goodItems.length, badItems.length);
    const convertedItems: ComparisonItem[] = [];
    
    for (let i = 0; i < maxLength; i++) {
      convertedItems.push({
        label: i === 0 ? `${goodTitle} vs ${badTitle}` : "",
        good: goodItems[i],
        bad: badItems[i],
      });
    }
    
    return (
      <div className={`rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6 ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <div className="flex items-start gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <h3 className="heading-5 text-green-900">{goodTitle}</h3>
            </div>
            <ul className="space-y-2">
              {goodItems.map((item, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <div className="flex items-start gap-2 mb-3">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <h3 className="heading-5 text-red-900">{badTitle}</h3>
            </div>
            <ul className="space-y-2">
              {badItems.map((item, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {note && (
          <p className="text-xs text-gray-600 italic mt-4">{note}</p>
        )}
      </div>
    );
  }
  
  // Support original format (title with items array)
  if (title && items) {
    return (
      <div className={`rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6 ${className}`}>
        <h3 className="heading-4 mb-4">{title}</h3>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="space-y-2">
              {item.label && (
                <p className="text-sm font-semibold text-gray-900">{item.label}</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {item.good && (
                  <div className="rounded-lg border border-green-200 bg-green-50 p-3">
                    <div className="flex items-start gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-xs font-semibold text-green-900 uppercase">Tốt</span>
                    </div>
                    <p className="text-sm text-green-900">{item.good}</p>
                  </div>
                )}
                {item.bad && (
                  <div className="rounded-lg border border-red-200 bg-red-50 p-3">
                    <div className="flex items-start gap-2 mb-1">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-xs font-semibold text-red-900 uppercase">Tránh</span>
                    </div>
                    <p className="text-sm text-red-900">{item.bad}</p>
                  </div>
                )}
              </div>
              {item.note && (
                <p className="text-xs text-gray-600 italic">{item.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  return null;
}
