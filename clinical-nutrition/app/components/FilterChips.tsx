"use client";

interface FilterChip {
  value: string;
  label: string;
  count?: number;
}

interface FilterChipsProps {
  options: FilterChip[];
  selected: string;
  onChange: (value: string) => void;
  className?: string;
}

export function FilterChips({ options, selected, onChange, className = "" }: FilterChipsProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all ${
            selected === option.value
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {option.label}
          {option.count !== undefined && (
            <span className="ml-1.5 text-xs opacity-75">({option.count})</span>
          )}
        </button>
      ))}
    </div>
  );
}
