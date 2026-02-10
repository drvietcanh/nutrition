/**
 * FactorCard component
 * 
 * Educational purpose: Displays individual factors affecting intake in a
 * visually distinct card format. Helps readers understand specific barriers
 * or contributors to intake gaps.
 * 
 * Usage: Use for patient-related, illness-related, care-delivery, or system
 * factors that affect nutritional intake.
 */

interface FactorCardProps {
  title: string;
  borderColor: 'blue' | 'purple' | 'green' | 'amber' | 'pink' | 'red' | 'orange' | 'teal' | 'indigo' | 'cyan' | 'emerald' | 'violet';
  children: React.ReactNode;
}

const colorClasses = {
  blue: 'border-blue-500 bg-blue-50',
  purple: 'border-purple-500 bg-purple-50',
  green: 'border-green-500 bg-green-50',
  amber: 'border-amber-500 bg-amber-50',
  pink: 'border-pink-500 bg-pink-50',
  red: 'border-red-500 bg-red-50',
  orange: 'border-orange-500 bg-orange-50',
  teal: 'border-teal-500 bg-teal-50',
  indigo: 'border-indigo-500 bg-indigo-50',
  cyan: 'border-cyan-500 bg-cyan-50',
  emerald: 'border-emerald-500 bg-emerald-50',
  violet: 'border-violet-500 bg-violet-50',
};

export default function FactorCard({ title, borderColor, children }: FactorCardProps) {
  return (
    <article className={`border-l-4 ${colorClasses[borderColor]} rounded-r-lg p-4`}>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="text-sm text-gray-700 leading-relaxed">
        {children}
      </div>
    </article>
  );
}
