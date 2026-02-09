import { AlertTriangle } from 'lucide-react';

/**
 * CommonPitfallCallout component
 * 
 * Educational purpose: Warns readers about common misconceptions or mistakes
 * in clinical reasoning. Helps prevent errors in interpretation without being
 * judgmental or alarmist.
 * 
 * Usage: Use when explaining what NOT to do or common misunderstandings to avoid.
 */

interface CommonPitfallCalloutProps {
  children: React.ReactNode;
}

export default function CommonPitfallCallout({ children }: CommonPitfallCalloutProps) {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4 sm:p-5" role="alert">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-amber-900 mb-2 uppercase tracking-wide">
            Cạm bẫy Thường gặp
          </p>
          <div className="text-sm text-gray-700 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
