"use client";

import { Info } from "lucide-react";

interface NutritionBadgeProps {
  label: string;
  value: string | number;
  level?: "low" | "medium" | "high" | "very-high";
  tooltip?: string;
  className?: string;
}

const levelColors = {
  low: "bg-green-100 text-green-800 border-green-200",
  medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  high: "bg-orange-100 text-orange-800 border-orange-200",
  "very-high": "bg-red-100 text-red-800 border-red-200",
};

const levelLabels = {
  low: "Thấp",
  medium: "Trung bình",
  high: "Cao",
  "very-high": "Rất cao",
};

export function NutritionBadge({
  label,
  value,
  level,
  tooltip,
  className = "",
}: NutritionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium ${
        level ? levelColors[level] : "bg-gray-100 text-gray-800 border-gray-200"
      } ${className}`}
      title={tooltip}
    >
      <span className="font-semibold">{label}:</span>
      <span>{value}</span>
      {level && (
        <span className="text-[10px] opacity-75">({levelLabels[level]})</span>
      )}
      {tooltip && (
        <Info className="w-3 h-3 opacity-60" aria-hidden="true" />
      )}
    </div>
  );
}
