"use client";

import { useState, useMemo, useRef } from "react";
import { Search, Plus, Trash2, UtensilsCrossed } from "lucide-react";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { PDFExportButton } from "../../components/PDFExportButton";
import { ComparisonChart } from "../../components/Charts";
import {
  foodDatabase,
  searchFoods,
  type FoodItem,
  type FoodCategory,
} from "../../../lib/food-db";
import {
  createMealPlan,
  type MealPlanResult,
  type NutritionalTargets,
} from "../../../lib/calculators/mealPlanner";
import toast from "react-hot-toast";

type MealType = "breakfast" | "lunch" | "dinner" | "snack";

interface MealFoodItem {
  food: FoodItem;
  servings: number;
  meal: MealType;
}

const categories: { value: FoodCategory; label: string }[] = [
  { value: "rice-noodles", label: "Cơm & Bún" },
  { value: "meat", label: "Thịt" },
  { value: "fish", label: "Cá" },
  { value: "seafood", label: "Hải sản" },
  { value: "freshwater", label: "Thủy sản nước ngọt" },
  { value: "vegetables", label: "Rau củ" },
  { value: "fruits", label: "Trái cây" },
  { value: "legumes", label: "Đậu" },
  { value: "soups", label: "Canh/Súp" },
];

export function InteractiveSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory | "all">("all");
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [servings, setServings] = useState(1);
  const [selectedMeal, setSelectedMeal] = useState<MealType>("breakfast");
  const [mealFoods, setMealFoods] = useState<MealFoodItem[]>([]);
  const [targets, setTargets] = useState<NutritionalTargets>({
    calories: 2000,
    protein: 60,
  });
  const resultsRef = useRef<HTMLDivElement>(null);

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

  const mealPlanResult = useMemo<MealPlanResult | null>(() => {
    if (mealFoods.length === 0) return null;

    const foods = mealFoods.map((mf) => ({
      food: mf.food,
      servings: mf.servings,
      meal: mf.meal,
    }));

    return createMealPlan(foods, targets);
  }, [mealFoods, targets]);

  const handleAddFood = () => {
    if (!selectedFood) {
      toast.error("Vui lòng chọn thực phẩm");
      return;
    }

    if (servings <= 0) {
      toast.error("Số khẩu phần phải lớn hơn 0");
      return;
    }

    setMealFoods([...mealFoods, { food: selectedFood, servings, meal: selectedMeal }]);
    toast.success(`Đã thêm ${selectedFood.name} vào ${getMealLabel(selectedMeal)}`);
    setSelectedFood(null);
    setServings(1);
  };

  const handleRemoveFood = (index: number) => {
    const newMealFoods = mealFoods.filter((_, i) => i !== index);
    setMealFoods(newMealFoods);
    toast.success("Đã xóa thực phẩm");
  };

  const getMealLabel = (meal: MealType): string => {
    const labels = {
      breakfast: "Bữa sáng",
      lunch: "Bữa trưa",
      dinner: "Bữa tối",
      snack: "Đồ ăn nhẹ",
    };
    return labels[meal];
  };

  const getMealFoods = (meal: MealType): MealFoodItem[] => {
    return mealFoods.filter((mf) => mf.meal === meal);
  };

  const chartData = useMemo(() => {
    if (!mealPlanResult) return [];

    return [
      {
        name: "Calories",
        actual: mealPlanResult.totals.calories,
        target: mealPlanResult.targets.calories,
      },
      {
        name: "Protein (g)",
        actual: mealPlanResult.totals.protein,
        target: mealPlanResult.targets.protein,
      },
    ];
  }, [mealPlanResult]);

  return (
    <div className="space-y-6">
      {/* Nutritional Targets */}
      <Card>
        <h2 className="heading-4 mb-4">Nhu cầu Dinh dưỡng Mục tiêu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Năng lượng (kcal/ngày)
            </label>
            <input
              type="number"
              value={targets.calories}
              onChange={(e) =>
                setTargets({ ...targets, calories: Number(e.target.value) })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Protein (g/ngày)
            </label>
            <input
              type="number"
              value={targets.protein}
              onChange={(e) =>
                setTargets({ ...targets, protein: Number(e.target.value) })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
            />
          </div>
        </div>
      </Card>

      {/* Food Search and Selection */}
      <Card>
        <h2 className="heading-4 mb-4">Tìm và Thêm Thực phẩm</h2>
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

          {selectedFood && (
            <div className="border border-blue-200 bg-blue-50 rounded-lg p-4 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{selectedFood.name}</h3>
                  <p className="text-sm text-gray-600">
                    {selectedFood.calories} cal, {selectedFood.protein}g protein /{" "}
                    {selectedFood.servingSize}
                    {selectedFood.servingUnit}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedFood(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số khẩu phần
                  </label>
                  <input
                    type="number"
                    value={servings}
                    onChange={(e) => setServings(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    min="0.1"
                    step="0.1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bữa ăn
                  </label>
                  <select
                    value={selectedMeal}
                    onChange={(e) => setSelectedMeal(e.target.value as MealType)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="breakfast">Bữa sáng</option>
                    <option value="lunch">Bữa trưa</option>
                    <option value="dinner">Bữa tối</option>
                    <option value="snack">Đồ ăn nhẹ</option>
                  </select>
                </div>
              </div>

              <Button onClick={handleAddFood} icon={Plus} iconPosition="left">
                Thêm vào {getMealLabel(selectedMeal)}
              </Button>
            </div>
          )}

          <div className="max-h-64 overflow-y-auto space-y-2">
            {filteredFoods.slice(0, 20).map((food) => (
              <button
                key={food.id}
                type="button"
                onClick={() => setSelectedFood(food)}
                className={`w-full text-left p-3 rounded-lg border transition-colors ${
                  selectedFood?.id === food.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{food.name}</p>
                    <p className="text-sm text-gray-600">
                      {food.calories} cal • {food.protein}g protein
                    </p>
                  </div>
                  <UtensilsCrossed className="w-5 h-5 text-gray-400" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Meal Plan */}
      {mealFoods.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="heading-4">Kế hoạch Bữa ăn</h2>
            {mealPlanResult && (
              <PDFExportButton
                elementRef={resultsRef}
                title="Kế hoạch Bữa ăn"
                filename={`ke-hoach-bua-an-${Date.now()}.pdf`}
                size="sm"
              />
            )}
          </div>

          <div ref={resultsRef} className="space-y-6">
            {(["breakfast", "lunch", "dinner", "snack"] as MealType[]).map((meal) => {
              const foods = getMealFoods(meal);
              if (foods.length === 0) return null;

              const mealNutrition = foods.reduce(
                (acc, mf) => {
                  const factor = mf.servings / (mf.food.servingSize / 100);
                  return {
                    calories: acc.calories + mf.food.calories * factor,
                    protein: acc.protein + mf.food.protein * factor,
                    carbs: acc.carbs + mf.food.carbs * factor,
                    fat: acc.fat + mf.food.fat * factor,
                  };
                },
                { calories: 0, protein: 0, carbs: 0, fat: 0 }
              );

              return (
                <Card key={meal}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="heading-5">{getMealLabel(meal)}</h3>
                    <div className="text-sm text-gray-600">
                      {mealNutrition.calories.toFixed(0)} cal • {mealNutrition.protein.toFixed(1)}g protein
                    </div>
                  </div>
                  <div className="space-y-2">
                    {foods.map((mf, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{mf.food.name}</p>
                          <p className="text-sm text-gray-600">
                            {mf.servings} khẩu phần •{" "}
                            {((mf.food.calories * mf.servings) / (mf.food.servingSize / 100)).toFixed(0)} cal
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveFood(mealFoods.indexOf(mf))}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          aria-label="Xóa"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}

            {/* Summary */}
            {mealPlanResult && (
              <Card>
                <h3 className="heading-4 mb-4">Tổng hợp Dinh dưỡng</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Calories</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {mealPlanResult.totals.calories.toFixed(0)}
                    </p>
                    <p className="text-xs text-gray-500">
                      / {mealPlanResult.targets.calories} (
                      {mealPlanResult.percentages.calories.toFixed(0)}%)
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Protein</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {mealPlanResult.totals.protein.toFixed(1)}g
                    </p>
                    <p className="text-xs text-gray-500">
                      / {mealPlanResult.targets.protein}g (
                      {mealPlanResult.percentages.protein.toFixed(0)}%)
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Carbs</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {mealPlanResult.totals.carbs.toFixed(1)}g
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Fat</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {mealPlanResult.totals.fat.toFixed(1)}g
                    </p>
                  </div>
                </div>

                {chartData.length > 0 && (
                  <ComparisonChart
                    data={chartData}
                    title="So sánh Thực tế vs Mục tiêu"
                    yAxisLabel="Giá trị"
                  />
                )}
              </Card>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
