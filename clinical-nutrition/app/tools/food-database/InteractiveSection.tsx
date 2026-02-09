"use client";

import { useState, useMemo } from "react";
import { Search, UtensilsCrossed, Calculator, X } from "lucide-react";
import { Card } from "../../components/Card";
import { NutrientChart } from "../../components/Charts";
import {
  foodDatabase,
  searchFoods,
  getFoodsByCategory,
  calculateNutrition,
  type FoodItem,
  type FoodCategory,
} from "../../../lib/food-db";
import toast from "react-hot-toast";

const categories: { value: FoodCategory; label: string }[] = [
  { value: "rice-noodles", label: "Cơm & Bún" },
  { value: "meat", label: "Thịt" },
  { value: "seafood", label: "Hải sản" },
  { value: "vegetables", label: "Rau củ" },
  { value: "fruits", label: "Trái cây" },
  { value: "legumes", label: "Đậu" },
  { value: "condiments", label: "Gia vị" },
];

export function InteractiveSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory | "all">("all");
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [servings, setServings] = useState(1);

  const filteredFoods = useMemo(() => {
    let foods = foodDatabase;

    if (searchQuery.trim()) {
      foods = searchFoods(searchQuery);
    }

    if (selectedCategory !== "all") {
      foods = foods.filter((food) => food.category === selectedCategory);
    }

    return foods;
  }, [searchQuery, selectedCategory]);

  const nutrition = useMemo(() => {
    if (!selectedFood) return null;
    return calculateNutrition(selectedFood, servings);
  }, [selectedFood, servings]);

  const chartData = useMemo(() => {
    if (!nutrition) return null;

    return [
      { name: "Protein", value: nutrition.protein, color: "#3b82f6" },
      { name: "Carbohydrate", value: nutrition.carbs, color: "#22c55e" },
      { name: "Fat", value: nutrition.fat, color: "#f59e0b" },
    ].filter((item) => item.value > 0);
  }, [nutrition]);

  const handleFoodSelect = (food: FoodItem) => {
    setSelectedFood(food);
    setServings(1);
    toast.success(`Đã chọn ${food.name}`);
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm thực phẩm..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Tất cả
            </button>
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                  selectedCategory === cat.value
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Food list */}
        <div className="space-y-4">
          <h2 className="heading-3">
            Danh sách Thực phẩm ({filteredFoods.length})
          </h2>
          <div className="space-y-2 max-h-[600px] overflow-y-auto">
            {filteredFoods.length === 0 ? (
              <Card>
                <p className="text-center text-gray-500 py-8">
                  Không tìm thấy thực phẩm nào
                </p>
              </Card>
            ) : (
              filteredFoods.map((food) => (
                <Card
                  key={food.id}
                  onClick={() => handleFoodSelect(food)}
                  className={`cursor-pointer transition-all ${
                    selectedFood?.id === food.id
                      ? "border-blue-500 bg-blue-50"
                      : "hover:border-blue-300"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {food.name}
                      </h3>
                      {food.nameEn && (
                        <p className="text-sm text-gray-600 mb-2">{food.nameEn}</p>
                      )}
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span>
                          <strong>{food.calories}</strong> cal
                        </span>
                        <span>
                          <strong>{food.protein}g</strong> protein
                        </span>
                        <span>
                          <strong>{food.carbs}g</strong> carbs
                        </span>
                        <span>
                          <strong>{food.fat}g</strong> fat
                        </span>
                      </div>
                      {food.commonServing && (
                        <p className="text-xs text-gray-500 mt-2">
                          {food.commonServing}
                        </p>
                      )}
                    </div>
                    <UtensilsCrossed className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>

        {/* Selected food Details */}
        <div className="space-y-4">
          <h2 className="heading-3">chi tiết Dinh dưỡng</h2>
          {selectedFood ? (
            <Card>
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="heading-4 mb-1">{selectedFood.name}</h3>
                    {selectedFood.nameEn && (
                      <p className="text-sm text-gray-600">{selectedFood.nameEn}</p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedFood(null)}
                    className="p-1 rounded hover:bg-gray-100"
                    aria-label="Đóng"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                {/* Servings input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số khẩu phần
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setServings(Math.max(0.5, servings - 0.5))}
                      className="px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={servings}
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (!isNaN(value) && value > 0) {
                          setServings(value);
                        }
                      }}
                      min="0.5"
                      step="0.5"
                      className="w-20 px-3 py-1.5 border border-gray-300 rounded-lg text-center"
                    />
                    <button
                      type="button"
                      onClick={() => setServings(servings + 0.5)}
                      className="px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      +
                    </button>
                    <span className="text-sm text-gray-600">
                      x {selectedFood.servingSize}g ({selectedFood.servingUnit})
                    </span>
                  </div>
                </div>

                {/* Nutrition chart */}
                {chartData && chartData.length > 0 && (
                  <div>
                    <NutrientChart
                      data={chartData}
                      title="Phân tích Chất dinh dưỡng Đa lượng"
                      unit="g"
                    />
                  </div>
                )}

                {/* Nutrition table */}
                {nutrition && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Giá trị Dinh dưỡng ({servings} khẩu phần)
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-700">năng lượng</span>
                        <span className="font-semibold">{nutrition.calories.toFixed(0)} cal</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-700">Protein</span>
                        <span className="font-semibold">{nutrition.protein.toFixed(1)} g</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-700">Carbohydrate</span>
                        <span className="font-semibold">{nutrition.carbs.toFixed(1)} g</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-700">Chất béo</span>
                        <span className="font-semibold">{nutrition.fat.toFixed(1)} g</span>
                      </div>
                      {nutrition.fiber !== undefined && (
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-700">Chất xơ</span>
                          <span className="font-semibold">{nutrition.fiber.toFixed(1)} g</span>
                        </div>
                      )}
                      {nutrition.sodium !== undefined && (
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-700">Natri</span>
                          <span className="font-semibold">{nutrition.sodium.toFixed(0)} mg</span>
                        </div>
                      )}
                      {nutrition.calcium !== undefined && (
                        <div className="flex justify-between py-2">
                          <span className="text-gray-700">Canxi</span>
                          <span className="font-semibold">{nutrition.calcium.toFixed(0)} mg</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {selectedFood.notes && (
                  <div className="rounded-lg bg-amber-50 border border-amber-200 p-3">
                    <p className="text-sm text-amber-900">{selectedFood.notes}</p>
                  </div>
                )}
              </div>
            </Card>
          ) : (
            <Card>
              <div className="text-center py-12">
                <UtensilsCrossed className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">
                  Chọn một thực phẩm từ danh sách để xem chi tiết dinh dưỡng
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
