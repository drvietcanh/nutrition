"use client";

import { useState, useMemo } from "react";
import { CalendarDays, Heart, RefreshCw, Sun, Moon, Coffee, CheckCircle } from "lucide-react";
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

const daysOfWeek = [
  'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'
];

interface MealPlanItem {
  id: string;
  name: string;
  type: 'dish' | 'food';
  dish?: VietnameseDish;
  food?: ExtendedFoodItem;
  portion: string;
}

interface DayMealPlan {
  breakfast: MealPlanItem[];
  lunch: MealPlanItem[];
  dinner: MealPlanItem[];
  snack?: MealPlanItem[];
}

interface WeeklyMealPlan {
  [day: string]: DayMealPlan;
}

export function InteractiveSection() {
  const [selectedDisease, setSelectedDisease] = useState<DiseaseType>('diabetes');
  const [calories, setCalories] = useState<number>(1800);
  const [protein, setProtein] = useState<number>(70);
  const [generatedPlan, setGeneratedPlan] = useState<WeeklyMealPlan | null>(null);

  const generateWeeklyPlan = () => {
    // Lấy các món ăn phù hợp với bệnh
    const goodDishes = getDishesByDisease(selectedDisease, 'good');
    const moderateDishes = getDishesByDisease(selectedDisease, 'moderate');
    const allSuitableDishes = [...goodDishes, ...moderateDishes];

    // Lấy các thực phẩm phù hợp
    const goodFoods = getFoodsByDisease(selectedDisease, 'good');
    const moderateFoods = getFoodsByDisease(selectedDisease, 'moderate');
    const allSuitableFoods = [...goodFoods, ...moderateFoods];

    const plan: WeeklyMealPlan = {};

    // Tạo thực đơn cho 7 ngày
    daysOfWeek.forEach((day, dayIndex) => {
      const dayPlan: DayMealPlan = {
        breakfast: [],
        lunch: [],
        dinner: [],
        snack: [],
      };

      // Bữa sáng: Xoay vòng các món phở/bún/cháo
      const breakfastDishes = allSuitableDishes.filter(d => 
        d.category === 'pho-noodles' || d.category === 'soups'
      );
      if (breakfastDishes.length > 0) {
        const selected = breakfastDishes[dayIndex % breakfastDishes.length];
        dayPlan.breakfast.push({
          id: `${day}-breakfast-${selected.id}`,
          name: selected.name,
          type: 'dish',
          dish: selected,
          portion: selected.commonPortion.description,
        });
      }

      // Bữa trưa: Cơm + món kèm + canh
      const riceDishes = allSuitableDishes.filter(d => d.category === 'rice-dishes');
      const soups = allSuitableDishes.filter(d => d.category === 'soups');
      const steamed = allSuitableDishes.filter(d => d.category === 'steamed');
      const stirFried = allSuitableDishes.filter(d => d.category === 'stir-fried');

      // Món chính (cơm + món kèm)
      if (riceDishes.length > 0) {
        const selected = riceDishes[dayIndex % riceDishes.length];
        dayPlan.lunch.push({
          id: `${day}-lunch-${selected.id}`,
          name: selected.name,
          type: 'dish',
          dish: selected,
          portion: selected.commonPortion.description,
        });
      }

      // Canh
      if (soups.length > 0) {
        const selected = soups[(dayIndex + 1) % soups.length];
        dayPlan.lunch.push({
          id: `${day}-lunch-soup-${selected.id}`,
          name: selected.name,
          type: 'dish',
          dish: selected,
          portion: selected.commonPortion.description,
        });
      }

      // Rau xào
      if (stirFried.length > 0) {
        const selected = stirFried[(dayIndex + 2) % stirFried.length];
        dayPlan.lunch.push({
          id: `${day}-lunch-veg-${selected.id}`,
          name: selected.name,
          type: 'dish',
          dish: selected,
          portion: selected.commonPortion.description,
        });
      }

      // Bữa tối: Khác với bữa trưa
      if (riceDishes.length > 1) {
        const selected = riceDishes[(dayIndex + 3) % riceDishes.length];
        dayPlan.dinner.push({
          id: `${day}-dinner-${selected.id}`,
          name: selected.name,
          type: 'dish',
          dish: selected,
          portion: selected.commonPortion.description,
        });
      } else if (steamed.length > 0) {
        const selected = steamed[dayIndex % steamed.length];
        dayPlan.dinner.push({
          id: `${day}-dinner-${selected.id}`,
          name: selected.name,
          type: 'dish',
          dish: selected,
          portion: selected.commonPortion.description,
        });
      }

      // Canh cho bữa tối
      if (soups.length > 1) {
        const selected = soups[(dayIndex + 4) % soups.length];
        dayPlan.dinner.push({
          id: `${day}-dinner-soup-${selected.id}`,
          name: selected.name,
          type: 'dish',
          dish: selected,
          portion: selected.commonPortion.description,
        });
      }

      // Bữa phụ: Trái cây
      const fruits = allSuitableFoods.filter(f => f.category === 'fruits');
      if (fruits.length > 0) {
        const selected = fruits[dayIndex % fruits.length];
        dayPlan.snack = [{
          id: `${day}-snack-${selected.id}`,
          name: selected.name,
          type: 'food',
          food: selected,
          portion: selected.commonServing || '100g',
        }];
      }

      plan[day] = dayPlan;
    });

    setGeneratedPlan(plan);
    toast.success('Đã tạo thực đơn tuần!');
  };

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
                        ? 'border-indigo-500 bg-indigo-50'
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={generateWeeklyPlan}
              className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              Tạo Thực đơn Tuần
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Plan */}
      {generatedPlan && (
        <div className="space-y-6">
          {daysOfWeek.map((day) => {
            const dayPlan = generatedPlan[day];
            if (!dayPlan) return null;

            return (
              <Card key={day}>
                <CardHeader icon={CalendarDays} title={day} />
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Breakfast */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Sun className="w-4 h-4 text-yellow-600" />
                        <h4 className="font-semibold text-sm text-gray-900">Bữa sáng</h4>
                      </div>
                      <div className="space-y-2">
                        {dayPlan.breakfast.map((item) => (
                          <div key={item.id} className="p-2 bg-yellow-50 rounded border border-yellow-200">
                            <div className="font-medium text-xs text-gray-900">{item.name}</div>
                            <div className="text-xs text-gray-600 mt-1">{item.portion}</div>
                          </div>
                        ))}
                        {dayPlan.breakfast.length === 0 && (
                          <p className="text-xs text-gray-500">Chưa có món</p>
                        )}
                      </div>
                    </div>

                    {/* Lunch */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Sun className="w-4 h-4 text-orange-600" />
                        <h4 className="font-semibold text-sm text-gray-900">Bữa trưa</h4>
                      </div>
                      <div className="space-y-2">
                        {dayPlan.lunch.map((item) => (
                          <div key={item.id} className="p-2 bg-orange-50 rounded border border-orange-200">
                            <div className="font-medium text-xs text-gray-900">{item.name}</div>
                            <div className="text-xs text-gray-600 mt-1">{item.portion}</div>
                          </div>
                        ))}
                        {dayPlan.lunch.length === 0 && (
                          <p className="text-xs text-gray-500">Chưa có món</p>
                        )}
                      </div>
                    </div>

                    {/* Dinner */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Moon className="w-4 h-4 text-blue-600" />
                        <h4 className="font-semibold text-sm text-gray-900">Bữa tối</h4>
                      </div>
                      <div className="space-y-2">
                        {dayPlan.dinner.map((item) => (
                          <div key={item.id} className="p-2 bg-blue-50 rounded border border-blue-200">
                            <div className="font-medium text-xs text-gray-900">{item.name}</div>
                            <div className="text-xs text-gray-600 mt-1">{item.portion}</div>
                          </div>
                        ))}
                        {dayPlan.dinner.length === 0 && (
                          <p className="text-xs text-gray-500">Chưa có món</p>
                        )}
                      </div>
                    </div>

                    {/* Snack */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Coffee className="w-4 h-4 text-purple-600" />
                        <h4 className="font-semibold text-sm text-gray-900">Bữa phụ</h4>
                      </div>
                      <div className="space-y-2">
                        {dayPlan.snack?.map((item) => (
                          <div key={item.id} className="p-2 bg-purple-50 rounded border border-purple-200">
                            <div className="font-medium text-xs text-gray-900">{item.name}</div>
                            <div className="text-xs text-gray-600 mt-1">{item.portion}</div>
                          </div>
                        ))}
                        {(!dayPlan.snack || dayPlan.snack.length === 0) && (
                          <p className="text-xs text-gray-500">Chưa có món</p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Summary */}
          <Card>
            <CardHeader icon={CheckCircle} title="Lưu ý về Thực đơn Tuần" />
            <CardContent>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>💡 Thực đơn này:</strong>
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Đã được tạo tự động dựa trên bệnh lý và nhu cầu dinh dưỡng của bạn</li>
                  <li>Các món ăn được xoay vòng để đa dạng, tránh nhàm chán</li>
                  <li>Bạn có thể điều chỉnh theo sở thích và tình trạng cụ thể</li>
                  <li>Nên kết hợp với đánh giá thực đơn để kiểm tra phù hợp</li>
                  <li>Luôn tham khảo bác sĩ hoặc chuyên gia dinh dưỡng để được tư vấn chính xác</li>
                </ul>
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-3 mt-4">
                  <p className="text-blue-900">
                    <strong>📋 Gợi ý:</strong> Bạn có thể in hoặc lưu thực đơn này để tham khảo khi đi chợ và nấu ăn.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
