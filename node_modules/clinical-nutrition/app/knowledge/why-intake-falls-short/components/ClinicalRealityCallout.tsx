import { Info } from 'lucide-react';

/**
 * ClinicalRealityCallout Component
 * 
 * Educational Purpose: Highlights real-world clinical situations and normalizes
 * common experiences in nutrition care. Helps readers understand that certain
 * situations are expected, not failures.
 * 
 * Usage: Use when explaining that something is common, normal, or expected
 * in clinical practice.
 */

interface ClinicalRealityCalloutProps {
  children: React.ReactNode;
}

export default function ClinicalRealityCallout({ children }: ClinicalRealityCalloutProps) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 sm:p-5" role="alert">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
            Thực Tế Lâm Sàng
          </p>
          <div className="text-sm text-gray-700 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
