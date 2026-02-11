"use client";

import { FoodItem, type FoodCategory } from "@/lib/food-db";
import { ExtendedFoodItem } from "@/lib/vietnamese-food-extended";

type FoodCardItem = FoodItem | (ExtendedFoodItem & { code?: string });

const categoryLabels: Record<FoodCategory, string> = {
  "rice-noodles": "Cơm & Bún",
  meat: "Thịt",
  seafood: "Hải sản",
  freshwater: "Thủy sản nước ngọt",
  vegetables: "Rau củ",
  fruits: "Trái cây",
  legumes: "Đậu",
  dairy: "Sữa",
  condiments: "Gia vị",
  beverages: "Đồ uống",
  snacks: "Đồ ăn vặt",
  soups: "Súp",
  desserts: "Tráng miệng",
};

interface FoodCardProps {
  food: FoodCardItem;
  onClick: () => void;
  isSelected?: boolean;
}

export function FoodCard({ food, onClick, isSelected }: FoodCardProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer transition-all rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md ${
        isSelected ? "ring-2 ring-blue-500 bg-blue-50" : "bg-white hover:bg-gray-50"
      }`}
      role="button"
      tabIndex={0}
      aria-label={`${food.name}${food.nameEn ? ` (${food.nameEn})` : ""}, ${food.calories} calories`}
      aria-pressed={isSelected}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-base mb-1 truncate">
            {food.name}
          </h3>
          {food.nameEn && (
            <p className="text-sm text-gray-500 mb-1 truncate">{food.nameEn}</p>
          )}
          {food.category && (
            <p className="text-xs text-gray-400 mb-2">
              {categoryLabels[food.category] || food.category}
            </p>
          )}
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded">
              {food.calories} kcal
            </span>
            {food.protein !== undefined && (
              <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded">
                Đạm: {food.protein}g
              </span>
            )}
            {food.carbs !== undefined && (
              <span className="px-2 py-0.5 bg-green-50 text-green-700 rounded">
                Carb: {food.carbs}g
              </span>
            )}
            {food.sodium !== undefined && food.sodium > 0 && (
              <span
                className={`px-2 py-0.5 rounded ${
                  food.sodium > 500
                    ? "bg-red-50 text-red-700"
                    : food.sodium > 100
                    ? "bg-yellow-50 text-yellow-700"
                    : "bg-green-50 text-green-700"
                }`}
              >
                Na: {food.sodium}mg
              </span>
            )}
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          {'code' in food && food.code && (
            <p className="text-xs text-gray-500 mb-1">Mã: {food.code}</p>
          )}
          {food.commonServing && (
            <p className="text-xs text-gray-400">{food.commonServing}</p>
          )}
        </div>
      </div>
    </div>
  );
}
