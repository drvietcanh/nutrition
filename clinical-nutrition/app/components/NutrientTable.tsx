interface NutrientRow {
  nutrient: string;
  amount: string;
  unit?: string;
  note?: string;
  highlight?: 'good' | 'moderate' | 'low';
}

interface NutrientTableProps {
  title?: string;
  rows: NutrientRow[];
  className?: string;
}

const highlightColors = {
  good: 'bg-green-50 border-green-200',
  moderate: 'bg-amber-50 border-amber-200',
  low: 'bg-red-50 border-red-200',
};

export function NutrientTable({ title, rows, className = "" }: NutrientTableProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
        {title && (
          <caption className="px-4 py-2 text-left text-sm font-semibold text-gray-900 bg-neutral-50">
            {title}
          </caption>
        )}
        <thead className="bg-neutral-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
              Chất dinh dưỡng
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
              Lượng
            </th>
            {rows.some(row => row.note) && (
              <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                Ghi chú
              </th>
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-neutral-200">
          {rows.map((row, index) => {
            const highlightClass = row.highlight ? highlightColors[row.highlight] : '';
            return (
              <tr key={index} className={highlightClass}>
                <td className="px-4 py-3 text-sm font-medium text-neutral-900">
                  {row.nutrient}
                </td>
                <td className="px-4 py-3 text-sm text-neutral-700">
                  {row.amount} {row.unit && <span className="text-neutral-500">{row.unit}</span>}
                </td>
                {rows.some(r => r.note) && (
                  <td className="px-4 py-3 text-sm text-neutral-600">
                    {row.note}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
