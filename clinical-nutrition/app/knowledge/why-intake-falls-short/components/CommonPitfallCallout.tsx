/**
 * CommonPitfallCallout Component
 * 
 * Educational Purpose: Warns readers about common misconceptions or mistakes
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
    <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4">
      <p className="text-sm font-semibold text-amber-900 mb-2 uppercase tracking-wide">
        Cạm Bẫy Thường Gặp
      </p>
      <div className="text-sm text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
