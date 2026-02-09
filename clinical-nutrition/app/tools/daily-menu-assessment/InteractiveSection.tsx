"use client";

import { useState, useMemo } from "react";
import { Plus, X, ClipboardCheck, AlertCircle, CheckCircle, Info, Sun, Moon, Coffee } from "lucide-react";
import { Card, CardHeader, CardContent } from "../../components/Card";
import {
  searchExtendedFoods,
  type ExtendedFoodItem,
} from "../../../lib/vietnamese-food-extended";
import {
  convertToGrams,
  formatAmount,
  type VietnameseUnit,
} from "../../../lib/unit-converter";
import toast from "react-hot-toast";

type DiseaseType = 'diabetes' | 'gout' | 'kidney' | 'hypertension' | 'cardiovascular';

const diseases: { value: DiseaseType; label: string; icon: string }[] = [
  { value: 'diabetes', label: 'Đái tháo đường', icon: '🩺' },
  { value: 'gout', label: 'Bệnh gút', icon: '🦴' },
  { value: 'kidney', label: 'Bệnh thận', icon: '🧪' },
  { value: 'hypertension', label: 'Tăng huyết áp', icon: '❤️' },
  { value: 'cardiovascular', label: 'Tim mạch', icon: '💓' },
];

type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

interface MealItem {
  id: string;
  food: ExtendedFoodItem;
  amount: number;
  unit: VietnameseUnit;
  grams: number;
}

interface DailyMenu {
  breakfast: MealItem[];
  lunch: MealItem[];
  dinner: MealItem[];
  snack: MealItem[];
}

interface AssessmentResult {
  score: number; // 0-100
  level: 'excellent' | 'good' | 'moderate' | 'poor';
  issues: string[];
  suggestions: string[];
  nutritionSummary: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
    sodium?: number;
    potassium?: number;
    phosphorus?: number;
    cholesterol?: number;
    saturatedFat?: number;
    glycemicLoad?: number;
    purine?: number;
  };
}

export function InteractiveSection() {
  const [selectedDisease, setSelectedDisease] = useState<DiseaseType>('diabetes');
  const [currentMeal, setCurrentMeal] = useState<MealType>('breakfast');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFood, setSelectedFood] = useState<ExtendedFoodItem | null>(null);
  const [dailyMenu, setDailyMenu] = useState<DailyMenu>({
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: [],
  });
  const [amount, setAmount] = useState<number>(1);
  const [unit, setUnit] = useState<VietnameseUnit>('bat');

  const filteredFoods = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchExtendedFoods(searchQuery);
  }, [searchQuery]);

  const currentMealItems = dailyMenu[currentMeal];

  const assessment = useMemo((): AssessmentResult => {
    const allItems = [
      ...dailyMenu.breakfast,
      ...dailyMenu.lunch,
      ...dailyMenu.dinner,
      ...dailyMenu.snack,
    ];

    if (allItems.length === 0) {
      return {
        score: 0,
        level: 'poor',
        issues: ['Chưa có thực phẩm nào trong thực đơn'],
        suggestions: ['Thêm thực phẩm vào các bữa ăn để đánh giá'],
        nutritionSummary: {
          calories: 0,
          protein: 0,
          carbs: 0,
          fat: 0,
          fiber: 0,
        },
      };
    }

    // Calculate nutrition summary
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;
    let totalFiber = 0;
    let totalSodium = 0;
    let totalPotassium = 0;
    let totalPhosphorus = 0;
    let totalCholesterol = 0;
    let totalSaturatedFat = 0;
    let totalGL = 0;
    let totalPurine = 0;

    allItems.forEach(item => {
      const grams = item.grams;
      const calories = (item.food.calories * grams) / 100;
      const protein = (item.food.protein * grams) / 100;
      const carbs = (item.food.carbs * grams) / 100;
      const fat = (item.food.fat * grams) / 100;
      const fiber = ((item.food.fiber || 0) * grams) / 100;

      totalCalories += calories;
      totalProtein += protein;
      totalCarbs += carbs;
      totalFat += fat;
      totalFiber += fiber;

      if (item.food.hypertension) {
        totalSodium += (item.food.hypertension.sodium * grams) / 100;
      }
      if (item.food.kidney) {
        totalPotassium += (item.food.kidney.potassium * grams) / 100;
        totalPhosphorus += (item.food.kidney.phosphorus * grams) / 100;
      }
      if (item.food.cardiovascular) {
        totalCholesterol += (item.food.cardiovascular.cholesterol * grams) / 100;
        totalSaturatedFat += (item.food.cardiovascular.saturatedFat * grams) / 100;
      }
      if (item.food.diabetes) {
        const gi = item.food.diabetes.glycemicIndex || 0;
        const gl = (gi * carbs) / 100;
        totalGL += gl;
      }
      if (item.food.gout) {
        totalPurine += (item.food.gout.purine * grams) / 100;
      }
    });

    const issues: string[] = [];
    const suggestions: string[] = [];
    let score = 100;

    // Disease-specific assessment
    switch (selectedDisease) {
      case 'diabetes': {
        if (totalGL > 60) {
          score -= 30;
          issues.push(`GL tổng cả ngày quá cao (${totalGL.toFixed(1)}). Nên ≤ 60.`);
          suggestions.push('Giảm lượng thực phẩm có GI cao, phân bổ đều các bữa');
        } else if (totalGL > 45) {
          score -= 15;
          issues.push(`GL tổng hơi cao (${totalGL.toFixed(1)}).`);
        }
        if (totalFiber < 25) {
          score -= 10;
          issues.push(`Chất xơ thấp (${totalFiber.toFixed(1)}g). Nên ≥ 25g/ngày.`);
          suggestions.push('Thêm nhiều rau củ, trái cây, gạo lứt');
        }
        if (totalCarbs > 300) {
          score -= 10;
          issues.push(`Carb tổng cao (${totalCarbs.toFixed(0)}g).`);
          suggestions.push('Giảm lượng tinh bột, tăng rau củ');
        }
        break;
      }
      case 'gout': {
        if (totalPurine > 400) {
          score -= 30;
          issues.push(`Purin tổng quá cao (${totalPurine.toFixed(0)}mg). Nên ≤ 400mg/ngày.`);
          suggestions.push('Giảm thực phẩm có purin cao (nội tạng, hải sản, thịt đỏ)');
        } else if (totalPurine > 300) {
          score -= 15;
          issues.push(`Purin tổng hơi cao (${totalPurine.toFixed(0)}mg).`);
        }
        break;
      }
      case 'kidney': {
        if (totalPhosphorus > 1000) {
          score -= 20;
          issues.push(`Phốt pho tổng cao (${totalPhosphorus.toFixed(0)}mg). Nên ≤ 800-1000mg/ngày.`);
          suggestions.push('Giảm thực phẩm có phốt pho cao (đậu, hạt, sữa)');
        }
        if (totalPotassium > 3000) {
          score -= 20;
          issues.push(`Kali tổng cao (${totalPotassium.toFixed(0)}mg). Nên ≤ 2-3g/ngày.`);
          suggestions.push('Ngâm và luộc rau củ để giảm kali');
        }
        if (totalSodium > 2000) {
          score -= 10;
          issues.push(`Natri tổng cao (${totalSodium.toFixed(0)}mg).`);
          suggestions.push('Giảm muối và nước mắm');
        }
        break;
      }
      case 'hypertension': {
        if (totalSodium > 2000) {
          score -= 30;
          issues.push(`Natri tổng quá cao (${totalSodium.toFixed(0)}mg). Nên ≤ 2000mg/ngày.`);
          suggestions.push('Giảm muối, nước mắm, thực phẩm chế biến sẵn');
        } else if (totalSodium > 1500) {
          score -= 15;
          issues.push(`Natri tổng hơi cao (${totalSodium.toFixed(0)}mg).`);
        }
        break;
      }
      case 'cardiovascular': {
        if (totalCholesterol > 200) {
          score -= 20;
          issues.push(`Cholesterol tổng cao (${totalCholesterol.toFixed(0)}mg). Nên ≤ 200mg/ngày.`);
          suggestions.push('Giảm thịt mỡ, nội tạng, lòng đỏ trứng');
        }
        if (totalSaturatedFat > 20) {
          score -= 20;
          issues.push(`Chất béo bão hòa tổng cao (${totalSaturatedFat.toFixed(1)}g). Nên ≤ 20g/ngày.`);
          suggestions.push('Chọn thịt nạc, dầu thực vật thay mỡ động vật');
        }
        break;
      }
    }

    // General nutrition checks
    if (totalCalories < 1200) {
      score -= 10;
      issues.push(`Calories quá thấp (${totalCalories.toFixed(0)}kcal).`);
      suggestions.push('Tăng lượng thực phẩm để đủ năng lượng');
    } else if (totalCalories > 3000) {
      score -= 10;
      issues.push(`Calories quá cao (${totalCalories.toFixed(0)}kcal).`);
      suggestions.push('Giảm lượng thực phẩm để kiểm soát cân nặng');
    }

    if (totalProtein < 50) {
      score -= 10;
      issues.push(`Đạm thấp (${totalProtein.toFixed(1)}g). Nên ≥ 50-70g/ngày.`);
      suggestions.push('Tăng thịt nạc, cá, đậu phụ');
    }

    // Determine level
    let level: 'excellent' | 'good' | 'moderate' | 'poor';
    if (score >= 90) level = 'excellent';
    else if (score >= 70) level = 'good';
    else if (score >= 50) level = 'moderate';
    else level = 'poor';

    return {
      score: Math.max(0, score),
      level,
      issues,
      suggestions,
      nutritionSummary: {
        calories: totalCalories,
        protein: totalProtein,
        carbs: totalCarbs,
        fat: totalFat,
        fiber: totalFiber,
        sodium: totalSodium > 0 ? totalSodium : undefined,
        potassium: totalPotassium > 0 ? totalPotassium : undefined,
        phosphorus: totalPhosphorus > 0 ? totalPhosphorus : undefined,
        cholesterol: totalCholesterol > 0 ? totalCholesterol : undefined,
        saturatedFat: totalSaturatedFat > 0 ? totalSaturatedFat : undefined,
        glycemicLoad: totalGL > 0 ? totalGL : undefined,
        purine: totalPurine > 0 ? totalPurine : undefined,
      },
    };
  }, [dailyMenu, selectedDisease]);

  const handleAddFood = () => {
    if (!selectedFood) {
      toast.error('Vui lòng chọn thực phẩm');
      return;
    }

    const grams = convertToGrams(amount, unit, 'general');
    const newItem: MealItem = {
      id: `${selectedFood.id}-${Date.now()}`,
      food: selectedFood,
      amount,
      unit,
      grams,
    };

    setDailyMenu({
      ...dailyMenu,
      [currentMeal]: [...dailyMenu[currentMeal], newItem],
    });
    setSelectedFood(null);
    setSearchQuery("");
    setAmount(1);
    toast.success(`Đã thêm ${selectedFood.name} vào ${currentMeal === 'breakfast' ? 'bữa sáng' : currentMeal === 'lunch' ? 'bữa trưa' : currentMeal === 'dinner' ? 'bữa tối' : 'bữa phụ'}`);
  };

  const handleRemoveItem = (mealType: MealType, id: string) => {
    setDailyMenu({
      ...dailyMenu,
      [mealType]: dailyMenu[mealType].filter(item => item.id !== id),
    });
    toast.success('Đã xóa');
  };

  const handleFoodSelect = (food: ExtendedFoodItem) => {
    setSelectedFood(food);
    if (food.vietnameseUnits && food.vietnameseUnits.length > 0) {
      setUnit(food.vietnameseUnits[0].unit);
    }
  };

  return (
    <div className="space-y-6">
      {/* Disease Selection */}
      <Card>
        <CardHeader icon={ClipboardCheck} title="Chọn Bệnh Lý" />
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {diseases.map((disease) => (
              <button
                key={disease.value}
                type="button"
                onClick={() => setSelectedDisease(disease.value)}
                className={`p-3 rounded-lg border-2 transition-colors ${
                  selectedDisease === disease.value
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl mb-1">{disease.icon}</div>
                <div className="text-xs font-medium">{disease.label}</div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Meal Selection and Add Food */}
      <Card>
        <CardHeader icon={Plus} title="Thêm Thực phẩm" />
        <CardContent>
          <div className="space-y-4">
            {/* Meal Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chọn bữa ăn:
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentMeal('breakfast')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    currentMeal === 'breakfast'
                      ? 'bg-yellow-100 border-2 border-yellow-500'
                      : 'bg-gray-100 border-2 border-gray-200'
                  }`}
                >
                  <Sun className="w-4 h-4" />
                  <span className="text-sm">Sáng</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentMeal('lunch')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    currentMeal === 'lunch'
                      ? 'bg-orange-100 border-2 border-orange-500'
                      : 'bg-gray-100 border-2 border-gray-200'
                  }`}
                >
                  <Sun className="w-4 h-4" />
                  <span className="text-sm">Trưa</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentMeal('dinner')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    currentMeal === 'dinner'
                      ? 'bg-blue-100 border-2 border-blue-500'
                      : 'bg-gray-100 border-2 border-gray-200'
                  }`}
                >
                  <Moon className="w-4 h-4" />
                  <span className="text-sm">Tối</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentMeal('snack')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    currentMeal === 'snack'
                      ? 'bg-purple-100 border-2 border-purple-500'
                      : 'bg-gray-100 border-2 border-gray-200'
                  }`}
                >
                  <Coffee className="w-4 h-4" />
                  <span className="text-sm">Phụ</span>
                </button>
              </div>
            </div>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm thực phẩm..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              {searchQuery && filteredFoods.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {filteredFoods.map((food) => (
                    <button
                      key={food.id}
                      type="button"
                      onClick={() => handleFoodSelect(food)}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                        selectedFood?.id === food.id ? 'bg-purple-50' : ''
                      }`}
                    >
                      <div className="font-medium text-sm">{food.name}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Selected Food and Amount */}
            {selectedFood && (
              <div className="space-y-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="font-medium text-gray-900">{selectedFood.name}</div>
                <div className="flex gap-3 items-end">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Số lượng
                    </label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                      min="0"
                      step="0.1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Đơn vị
                    </label>
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value as VietnameseUnit)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    >
                      {selectedFood.vietnameseUnits?.map((vu) => (
                        <option key={vu.unit} value={vu.unit}>
                          {vu.description}
                        </option>
                      ))}
                      <option value="gram">Gram</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddFood}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Thêm
                  </button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Daily Menu Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Breakfast */}
        <Card>
          <CardHeader icon={Sun} title="🌅 Bữa sáng" />
          <CardContent>
            <div className="space-y-2">
              {dailyMenu.breakfast.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-2 bg-yellow-50 rounded border border-yellow-200">
                  <div className="flex-1 text-sm">
                    <div className="font-medium">{item.food.name}</div>
                    <div className="text-xs text-gray-600">
                      {formatAmount(item.amount, item.unit)} ({item.grams.toFixed(0)}g)
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('breakfast', item.id)}
                    className="ml-2 text-red-600 hover:text-red-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {dailyMenu.breakfast.length === 0 && (
                <p className="text-sm text-gray-500 text-center py-2">Chưa có món</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Lunch */}
        <Card>
          <CardHeader icon={Sun} title="🌞 Bữa trưa" />
          <CardContent>
            <div className="space-y-2">
              {dailyMenu.lunch.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-2 bg-orange-50 rounded border border-orange-200">
                  <div className="flex-1 text-sm">
                    <div className="font-medium">{item.food.name}</div>
                    <div className="text-xs text-gray-600">
                      {formatAmount(item.amount, item.unit)} ({item.grams.toFixed(0)}g)
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('lunch', item.id)}
                    className="ml-2 text-red-600 hover:text-red-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {dailyMenu.lunch.length === 0 && (
                <p className="text-sm text-gray-500 text-center py-2">Chưa có món</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Dinner */}
        <Card>
          <CardHeader icon={Moon} title="🌙 Bữa tối" />
          <CardContent>
            <div className="space-y-2">
              {dailyMenu.dinner.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-2 bg-blue-50 rounded border border-blue-200">
                  <div className="flex-1 text-sm">
                    <div className="font-medium">{item.food.name}</div>
                    <div className="text-xs text-gray-600">
                      {formatAmount(item.amount, item.unit)} ({item.grams.toFixed(0)}g)
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('dinner', item.id)}
                    className="ml-2 text-red-600 hover:text-red-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {dailyMenu.dinner.length === 0 && (
                <p className="text-sm text-gray-500 text-center py-2">Chưa có món</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Snack */}
        <Card>
          <CardHeader icon={Coffee} title="🍎 Bữa phụ" />
          <CardContent>
            <div className="space-y-2">
              {dailyMenu.snack.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-2 bg-purple-50 rounded border border-purple-200">
                  <div className="flex-1 text-sm">
                    <div className="font-medium">{item.food.name}</div>
                    <div className="text-xs text-gray-600">
                      {formatAmount(item.amount, item.unit)} ({item.grams.toFixed(0)}g)
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('snack', item.id)}
                    className="ml-2 text-red-600 hover:text-red-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {dailyMenu.snack.length === 0 && (
                <p className="text-sm text-gray-500 text-center py-2">Chưa có món</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Assessment Result */}
      {assessment.score > 0 && (
        <Card>
          <CardHeader icon={ClipboardCheck} title="Kết quả Đánh giá" />
          <CardContent>
            <div className="space-y-4">
              {/* Score */}
              <div className={`p-4 rounded-lg border-2 ${
                assessment.level === 'excellent' ? 'bg-green-50 border-green-200' :
                assessment.level === 'good' ? 'bg-blue-50 border-blue-200' :
                assessment.level === 'moderate' ? 'bg-yellow-50 border-yellow-200' :
                'bg-red-50 border-red-200'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  {assessment.level === 'excellent' || assessment.level === 'good' ? (
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  ) : assessment.level === 'moderate' ? (
                    <Info className="w-8 h-8 text-yellow-600" />
                  ) : (
                    <AlertCircle className="w-8 h-8 text-red-600" />
                  )}
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {assessment.score.toFixed(0)}/100
                    </div>
                    <div className="text-sm text-gray-600">
                      {assessment.level === 'excellent' ? 'Xuất sắc' :
                       assessment.level === 'good' ? 'Tốt' :
                       assessment.level === 'moderate' ? 'Trung bình' :
                       'Cần cải thiện'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Issues */}
              {assessment.issues.length > 0 && (
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Vấn đề phát hiện:</h4>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                    {assessment.issues.map((issue, idx) => (
                      <li key={idx}>{issue}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Suggestions */}
              {assessment.suggestions.length > 0 && (
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-3">
                  <h4 className="font-semibold text-sm text-blue-900 mb-2">Gợi ý cải thiện:</h4>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-blue-800">
                    {assessment.suggestions.map((suggestion, idx) => (
                      <li key={idx}>{suggestion}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Nutrition Summary */}
              <div className="border-t pt-4">
                <h4 className="font-semibold text-sm text-gray-900 mb-3">Tổng Dinh dưỡng Cả Ngày</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div className="p-2 bg-gray-50 rounded">
                    <div className="text-xs text-gray-600">Calories</div>
                    <div className="font-semibold">{assessment.nutritionSummary.calories.toFixed(0)} kcal</div>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <div className="text-xs text-gray-600">Đạm</div>
                    <div className="font-semibold">{assessment.nutritionSummary.protein.toFixed(1)}g</div>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <div className="text-xs text-gray-600">Carb</div>
                    <div className="font-semibold">{assessment.nutritionSummary.carbs.toFixed(1)}g</div>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <div className="text-xs text-gray-600">Chất béo</div>
                    <div className="font-semibold">{assessment.nutritionSummary.fat.toFixed(1)}g</div>
                  </div>
                  {assessment.nutritionSummary.sodium && (
                    <div className="p-2 bg-gray-50 rounded">
                      <div className="text-xs text-gray-600">Natri</div>
                      <div className="font-semibold">{assessment.nutritionSummary.sodium.toFixed(0)}mg</div>
                    </div>
                  )}
                  {assessment.nutritionSummary.glycemicLoad && (
                    <div className="p-2 bg-gray-50 rounded">
                      <div className="text-xs text-gray-600">GL</div>
                      <div className="font-semibold">{assessment.nutritionSummary.glycemicLoad.toFixed(1)}</div>
                    </div>
                  )}
                  {assessment.nutritionSummary.purine && (
                    <div className="p-2 bg-gray-50 rounded">
                      <div className="text-xs text-gray-600">Purin</div>
                      <div className="font-semibold">{assessment.nutritionSummary.purine.toFixed(0)}mg</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
