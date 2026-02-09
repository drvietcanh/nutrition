"use client";

import { useState, useMemo } from "react";
import { Calendar, Heart, Sun, Moon, Coffee, Plus, X, RefreshCw } from "lucide-react";
import { Card, CardHeader, CardContent } from "../../components/Card";
import {
  getDishesByDisease,
  getDishesByCategory,
  type VietnameseDish,
} from "../../../lib/vietnamese-dishes";
import {
  getFoodsByDisease,
  searchExtendedFoods,
  type ExtendedFoodItem,
} from "../../../lib/vietnamese-food-extended";
import toast from "react-hot-toast";

type DiseaseType = 'diabetes' | 'gout' | 'kidney' | 'hypertension' | 'cardiovascular';

const diseases: { value: DiseaseType; label: string; icon: string }[] = [
  { value: 'diabetes', label: 'Đái tháo đường', icon: '🩺' },
  { value: 'gout', label: 'Bệnh gút', icon: '🦴' },
  { value: 'kidney', label: 'Bệnh thận', icon: '🧪' },
  { value: 'hypertension', label: 'Tăng huyết áp', icon: '❤️' },
  { value: 'cardiovascular', label: 'Tim mạch', icon: '💓' },
];

interface MealPlanItem {
  id: string;
  name: string;
  type: 'dish' | 'food';
  dish?: VietnameseDish;
  food?: ExtendedFoodItem;
  portion: string;
}

interface MealPlan {
  breakfast: MealPlanItem[];
  lunch: MealPlanItem[];
  dinner: MealPlanItem[];
  snack?: MealPlanItem[];
}

export function InteractiveSection() {
  const [selectedDisease, setSelectedDisease] = useState<DiseaseType>('diabetes');
  const [calories, setCalories] = useState<number>(1800);
  const [protein, setProtein] = useState<number>(70);
  const [generatedPlan, setGeneratedPlan] = useState<MealPlan | null>(null);

  const generateMealPlan = () => {
    // Lấy các món ăn phù hợp với bệnh
    const goodDishes = getDishesByDisease(selectedDisease, 'good');
    const moderateDishes = getDishesByDisease(selectedDisease, 'moderate');
    const allSuitableDishes = [...goodDishes, ...moderateDishes];

    // Lấy các thực phẩm phù hợp
    const goodFoods = getFoodsByDisease(selectedDisease, 'good');
    const moderateFoods = getFoodsByDisease(selectedDisease, 'moderate');
    const allSuitableFoods = [...goodFoods, ...moderateFoods];

    const plan: MealPlan = {
      breakfast: [],
      lunch: [],
      dinner: [],
      snack: [],
    };

    // Bữa sáng: Chọn từ món ăn phù hợp
    if (allSuitableDishes.length > 0) {
      const breakfastDishes = allSuitableDishes.filter(d => 
        d.category === 'pho-noodles' || d.category === 'soups'
      );
      if (breakfastDishes.length > 0) {
        const selected = breakfastDishes[Math.floor(Math.random() * breakfastDishes.length)];
        plan.breakfast.push({
          id: `breakfast-${selected.id}`,
          name: selected.name,
          type: 'dish',
          dish: selected,
          portion: selected.commonPortion.description,
        });
      } else {
        // Fallback: cháo hoặc bún
        const chao = allSuitableDishes.find(d => d.id === 'chao');
        if (chao) {
          plan.breakfast.push({
            id: 'breakfast-chao',
            name: chao.name,
            type: 'dish',
            dish: chao,
            portion: chao.commonPortion.description,
          });
        }
      }
    }

    // Bữa trưa: Cơm + món kèm + canh
    const riceDishes = allSuitableDishes.filter(d => d.category === 'rice-dishes');
    const soups = allSuitableDishes.filter(d => d.category === 'soups');
    const steamed = allSuitableDishes.filter(d => d.category === 'steamed');

    if (riceDishes.length > 0) {
      const selected = riceDishes[Math.floor(Math.random() * riceDishes.length)];
      plan.lunch.push({
        id: `lunch-${selected.id}`,
        name: selected.name,
        type: 'dish',
        dish: selected,
        portion: selected.commonPortion.description,
      });
    }

    if (soups.length > 0) {
      const selected = soups[Math.floor(Math.random() * soups.length)];
      plan.lunch.push({
        id: `lunch-soup-${selected.id}`,
        name: selected.name,
        type: 'dish',
        dish: selected,
        portion: selected.commonPortion.description,
      });
    }

    // Thêm rau xào nếu có
    const stirFried = allSuitableDishes.filter(d => d.category === 'stir-fried');
    if (stirFried.length > 0) {
      const selected = stirFried[Math.floor(Math.random() * stirFried.length)];
      plan.lunch.push({
        id: `lunch-veg-${selected.id}`,
        name: selected.name,
        type: 'dish',
        dish: selected,
        portion: selected.commonPortion.description,
      });
    }

    // Bữa tối: Tương tự bữa trưa nhưng khác món
    if (riceDishes.length > 1) {
      const selected = riceDishes.filter((d, idx) => 
        !plan.lunch.some(item => item.dish?.id === d.id)
      )[Math.floor(Math.random() * (riceDishes.length - 1))];
      if (selected) {
        plan.dinner.push({
          id: `dinner-${selected.id}`,
          name: selected.name,
          type: 'dish',
          dish: selected,
          portion: selected.commonPortion.description,
        });
      }
    } else if (steamed.length > 0) {
      const selected = steamed[Math.floor(Math.random() * steamed.length)];
      plan.dinner.push({
        id: `dinner-${selected.id}`,
        name: selected.name,
        type: 'dish',
        dish: selected,
        portion: selected.commonPortion.description,
      });
    }

    if (soups.length > 1) {
      const selected = soups.filter((d, idx) => 
        !plan.lunch.some(item => item.dish?.id === d.id)
      )[Math.floor(Math.random() * (soups.length - 1))];
      if (selected) {
        plan.dinner.push({
          id: `dinner-soup-${selected.id}`,
          name: selected.name,
          type: 'dish',
          dish: selected,
          portion: selected.commonPortion.description,
        });
      }
    }

    // Bữa phụ: Trái cây
    const fruits = allSuitableFoods.filter(f => f.category === 'fruits');
    if (fruits.length > 0) {
      const selected = fruits[Math.floor(Math.random() * fruits.length)];
      plan.snack = [{
        id: `snack-${selected.id}`,
        name: selected.name,
        type: 'food',
        food: selected,
        portion: selected.commonServing || '100g',
      }];
    }

    setGeneratedPlan(plan);
    toast.success('Đã tạo thực đơn!');
  };

  const totalNutrition = useMemo(() => {
    if (!generatedPlan) return null;

    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;

    const allMeals = [
      ...generatedPlan.breakfast,
      ...generatedPlan.lunch,
      ...generatedPlan.dinner,
      ...(generatedPlan.snack || []),
    ];

    allMeals.forEach(item => {
      if (item.type === 'dish' && item.dish) {
        totalCalories += item.dish.nutrition.calories;
        totalProtein += item.dish.nutrition.protein;
        totalCarbs += item.dish.nutrition.carbs;
        totalFat += item.dish.nutrition.fat;
      } else if (item.type === 'food' && item.food) {
        totalCalories += item.food.calories;
        totalProtein += item.food.protein;
        totalCarbs += item.food.carbs;
        totalFat += item.food.fat;
      }
    });

    return { totalCalories, totalProtein, totalCarbs, totalFat };
  }, [generatedPlan]);

  return (
    <div className="space-y-6">
      {/* Settings */}
      <Card>
        <CardHeader icon={Heart} title="Thiết lập" />
        <CardContent>
          <div className="space-y-4">
            {/* Disease Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chọn bệnh lý:
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {diseases.map((disease) => (
                  <button
                    key={disease.value}
                    type="button"
                    onClick={() => setSelectedDisease(disease.value)}
                    className={`p-3 rounded-lg border-2 transition-colors ${
                      selectedDisease === disease.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-1">{disease.icon}</div>
                    <div className="text-xs font-medium">{disease.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Nutrition Requirements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nhu cầu năng lượng (kcal/ngày):
                </label>
                <input
                  type="number"
                  value={calories}
                  onChange={(e) => setCalories(parseInt(e.target.value) || 1800)}
                  min="1000"
                  max="3000"
                  step="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nhu cầu đạm (g/ngày):
                </label>
                <input
                  type="number"
                  value={protein}
                  onChange={(e) => setProtein(parseInt(e.target.value) || 70)}
                  min="40"
                  max="150"
                  step="5"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={generateMealPlan}
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <RefreshCw className="w-5 h-5 inline-block mr-2" />
              Tạo Thực đơn
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Generated Meal Plan */}
      {generatedPlan && (
        <Card>
          <CardHeader icon={Calendar} title="Thực đơn Gợi ý" />
          <CardContent>
            <div className="space-y-6">
              {/* Breakfast */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="w-5 h-5 text-yellow-600" />
                  <h3 className="font-semibold text-gray-900">🌅 Bữa sáng</h3>
                </div>
                {generatedPlan.breakfast.length > 0 ? (
                  <div className="space-y-2">
                    {generatedPlan.breakfast.map((item) => (
                      <div key={item.id} className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                        <div className="font-medium text-sm text-gray-900">{item.name}</div>
                        <div className="text-xs text-gray-600 mt-1">Khẩu phần: {item.portion}</div>
                        {item.dish && (
                          <div className="text-xs text-gray-500 mt-1">
                            {item.dish.nutrition.calories} kcal, {item.dish.nutrition.protein}g đạm
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">Chưa có món ăn</p>
                )}
              </div>

              {/* Lunch */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="w-5 h-5 text-orange-600" />
                  <h3 className="font-semibold text-gray-900">🌞 Bữa trưa</h3>
                </div>
                {generatedPlan.lunch.length > 0 ? (
                  <div className="space-y-2">
                    {generatedPlan.lunch.map((item) => (
                      <div key={item.id} className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                        <div className="font-medium text-sm text-gray-900">{item.name}</div>
                        <div className="text-xs text-gray-600 mt-1">Khẩu phần: {item.portion}</div>
                        {item.dish && (
                          <div className="text-xs text-gray-500 mt-1">
                            {item.dish.nutrition.calories} kcal, {item.dish.nutrition.protein}g đạm
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">Chưa có món ăn</p>
                )}
              </div>

              {/* Dinner */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Moon className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">🌙 Bữa tối</h3>
                </div>
                {generatedPlan.dinner.length > 0 ? (
                  <div className="space-y-2">
                    {generatedPlan.dinner.map((item) => (
                      <div key={item.id} className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="font-medium text-sm text-gray-900">{item.name}</div>
                        <div className="text-xs text-gray-600 mt-1">Khẩu phần: {item.portion}</div>
                        {item.dish && (
                          <div className="text-xs text-gray-500 mt-1">
                            {item.dish.nutrition.calories} kcal, {item.dish.nutrition.protein}g đạm
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">Chưa có món ăn</p>
                )}
              </div>

              {/* Snack */}
              {generatedPlan.snack && generatedPlan.snack.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Coffee className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">🍎 Bữa phụ</h3>
                  </div>
                  <div className="space-y-2">
                    {generatedPlan.snack.map((item) => (
                      <div key={item.id} className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="font-medium text-sm text-gray-900">{item.name}</div>
                        <div className="text-xs text-gray-600 mt-1">Khẩu phần: {item.portion}</div>
                        {item.food && (
                          <div className="text-xs text-gray-500 mt-1">
                            {item.food.calories} kcal, {item.food.protein}g đạm
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Nutrition Summary */}
              {totalNutrition && (
                <div className="border-t pt-4 mt-4">
                  <h4 className="font-semibold text-sm text-gray-900 mb-3">Tổng Dinh dưỡng</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-xs text-gray-600">Calories</div>
                      <div className="text-lg font-semibold text-gray-900">
                        {totalNutrition.totalCalories.toFixed(0)}
                      </div>
                      <div className="text-xs text-gray-500">
                        / {calories} kcal
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-xs text-gray-600">Đạm</div>
                      <div className="text-lg font-semibold text-gray-900">
                        {totalNutrition.totalProtein.toFixed(1)}g
                      </div>
                      <div className="text-xs text-gray-500">
                        / {protein}g
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-xs text-gray-600">Carb</div>
                      <div className="text-lg font-semibold text-gray-900">
                        {totalNutrition.totalCarbs.toFixed(1)}g
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-xs text-gray-600">Chất béo</div>
                      <div className="text-lg font-semibold text-gray-900">
                        {totalNutrition.totalFat.toFixed(1)}g
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notes */}
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4">
                <p className="text-sm font-semibold text-blue-900 mb-2">
                  💡 Lưu ý về thực đơn gợi ý:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-blue-800">
                  <li>Thực đơn này chỉ là gợi ý ban đầu, bạn có thể điều chỉnh theo sở thích</li>
                  <li>Các giá trị dinh dưỡng là ước tính, có thể thay đổi tùy theo cách nấu</li>
                  <li>Nên kết hợp với đánh giá bữa ăn để kiểm tra phù hợp</li>
                  <li>Luôn tham khảo bác sĩ hoặc chuyên gia dinh dưỡng để được tư vấn chính xác</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
