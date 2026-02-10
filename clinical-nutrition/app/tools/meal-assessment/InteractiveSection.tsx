"use client";

import { useState, useMemo } from "react";
import { Plus, X, ClipboardCheck, AlertCircle, CheckCircle, Info, TrendingUp, Heart } from "lucide-react";
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

interface MealItem {
  id: string;
  food: ExtendedFoodItem;
  amount: number;
  unit: VietnameseUnit;
  grams: number;
}

interface AssessmentResult {
  score: number; // 0-100
  level: 'excellent' | 'good' | 'moderate' | 'poor';
  issues: string[];
  suggestions: string[];
}

export function InteractiveSection() {
  const [selectedDisease, setSelectedDisease] = useState<DiseaseType>('diabetes');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFood, setSelectedFood] = useState<ExtendedFoodItem | null>(null);
  const [mealItems, setMealItems] = useState<MealItem[]>([]);
  const [amount, setAmount] = useState<number>(1);
  const [unit, setUnit] = useState<VietnameseUnit>('bat');

  const filteredFoods = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchExtendedFoods(searchQuery);
  }, [searchQuery]);

  const assessment = useMemo((): AssessmentResult => {
    if (mealItems.length === 0) {
      return {
        score: 0,
        level: 'poor',
        issues: ['Chưa có thực phẩm nào trong bữa ăn'],
        suggestions: ['Thêm thực phẩm vào bữa ăn để đánh giá'],
      };
    }

    const issues: string[] = [];
    const suggestions: string[] = [];
    let score = 100;

    switch (selectedDisease) {
      case 'diabetes': {
        let totalGL = 0;
        let totalCarb = 0;
        let hasHighGI = false;
        let hasLowFiber = true;

        mealItems.forEach(item => {
          const grams = item.grams;
          const carbPer100g = item.food.carbs;
          const carb = (carbPer100g * grams) / 100;
          totalCarb += carb;

          if (item.food.diabetes) {
            const gi = item.food.diabetes.glycemicIndex || 0;
            const gl = (gi * carb) / 100;
            totalGL += gl;
            if (gi >= 70) hasHighGI = true;
          }

          if (item.food.fiber && item.food.fiber > 2) {
            hasLowFiber = false;
          }
        });

        if (totalGL > 20) {
          score -= 30;
          issues.push(`GL tổng quá cao (${totalGL.toFixed(1)}). Nên ≤ 20.`);
          suggestions.push('Giảm lượng thực phẩm có GI cao hoặc thay thế bằng thực phẩm có GI thấp hơn');
        } else if (totalGL > 15) {
          score -= 15;
          issues.push(`GL tổng hơi cao (${totalGL.toFixed(1)}).`);
          suggestions.push('Có thể giảm một chút lượng thực phẩm có GI cao');
        }

        if (hasHighGI) {
          score -= 10;
          issues.push('Có thực phẩm có GI cao trong bữa ăn');
          suggestions.push('Thay thế bằng thực phẩm có GI thấp-trung bình (gạo lứt, bún, phở)');
        }

        if (hasLowFiber) {
          score -= 10;
          issues.push('Thiếu chất xơ trong bữa ăn');
          suggestions.push('Thêm rau củ quả để tăng chất xơ, giúp làm chậm hấp thu đường');
        }

        if (totalCarb === 0) {
          score -= 20;
          issues.push('Không có carbohydrate trong bữa ăn');
          suggestions.push('Thêm tinh bột (cơm, bún, phở) với lượng phù hợp');
        }

        break;
      }

      case 'gout': {
        let totalPurine = 0;
        let hasVeryHigh = false;
        let hasHigh = false;

        mealItems.forEach(item => {
          if (item.food.gout) {
            const grams = item.grams;
            const purinePer100g = item.food.gout.purine;
            const purine = (purinePer100g * grams) / 100;
            totalPurine += purine;

            if (item.food.gout.purineLevel === 'very-high') hasVeryHigh = true;
            if (item.food.gout.purineLevel === 'high') hasHigh = true;
          }
        });

        if (hasVeryHigh) {
          score -= 40;
          issues.push('Có thực phẩm có purin rất cao - nên tránh hoàn toàn!');
          suggestions.push('Loại bỏ thực phẩm có purin rất cao (nội tạng, cá cơm khô)');
        } else if (hasHigh) {
          score -= 25;
          issues.push('Có thực phẩm có purin cao');
          suggestions.push('Hạn chế thực phẩm có purin cao, chỉ ăn 1-2 lần/tuần với lượng nhỏ');
        } else if (totalPurine > 200) {
          score -= 15;
          issues.push(`Tổng purin hơi cao (${totalPurine.toFixed(0)}mg)`);
          suggestions.push('Giảm lượng thực phẩm có purin trung bình');
        }

        const hasLowPurine = mealItems.some(item => 
          item.food.gout && item.food.gout.purineLevel === 'low'
        );
        if (!hasLowPurine) {
          score -= 10;
          issues.push('Thiếu thực phẩm có purin thấp');
          suggestions.push('Thêm rau củ quả, sữa, trứng - những thực phẩm có purin thấp');
        }

        break;
      }

      case 'kidney': {
        let totalPotassium = 0;
        let totalPhosphorus = 0;
        let hasVeryHighK = false;
        let hasVeryHighP = false;

        mealItems.forEach(item => {
          if (item.food.kidney) {
            const grams = item.grams;
            const kPer100g = item.food.kidney.potassium;
            const pPer100g = item.food.kidney.phosphorus;
            totalPotassium += (kPer100g * grams) / 100;
            totalPhosphorus += (pPer100g * grams) / 100;

            if (kPer100g >= 300) hasVeryHighK = true;
            if (pPer100g >= 300) hasVeryHighP = true;
          }
        });

        if (hasVeryHighK) {
          score -= 20;
          issues.push('Có thực phẩm có kali rất cao');
          suggestions.push('Hạn chế thực phẩm có kali rất cao (khoai tây, chuối, đậu). Luộc bỏ nước có thể giảm một phần.');
        } else if (totalPotassium > 500) {
          score -= 10;
          issues.push(`Tổng kali hơi cao (${totalPotassium.toFixed(0)}mg)`);
        }

        if (hasVeryHighP) {
          score -= 20;
          issues.push('Có thực phẩm có phốt pho rất cao');
          suggestions.push('Hạn chế thực phẩm có phốt pho rất cao (đậu, hạt, ngũ cốc nguyên hạt)');
        } else if (totalPhosphorus > 500) {
          score -= 10;
          issues.push(`Tổng phốt pho hơi cao (${totalPhosphorus.toFixed(0)}mg)`);
        }

        break;
      }

      case 'hypertension': {
        let totalSodium = 0;
        let hasVeryHighSodium = false;

        mealItems.forEach(item => {
          const grams = item.grams;
          const sodiumPer100g = item.food.sodium || 0;
          const sodium = (sodiumPer100g * grams) / 100;
          totalSodium += sodium;

          if (sodiumPer100g >= 1000) hasVeryHighSodium = true;
        });

        const recommendation = 1500; // mg/ngày cho người tăng huyết áp
        const percentage = (totalSodium / recommendation) * 100;

        if (hasVeryHighSodium) {
          score -= 30;
          issues.push('Có thực phẩm có natri rất cao (nước mắm, đồ muối)');
          suggestions.push('Giảm hoặc loại bỏ thực phẩm có natri rất cao');
        }

        if (percentage >= 100) {
          score -= 30;
          issues.push(`Natri vượt quá khuyến nghị (${totalSodium.toFixed(0)}mg / ${recommendation}mg)`);
          suggestions.push('Giảm natri trong các bữa khác hoặc giảm lượng thực phẩm có nhiều natri');
        } else if (percentage >= 80) {
          score -= 15;
          issues.push(`Natri gần đạt giới hạn (${totalSodium.toFixed(0)}mg)`);
          suggestions.push('Cẩn thận với các bữa còn lại, nên giảm natri');
        }

        const hasLowSodium = mealItems.some(item => 
          (item.food.sodium || 0) < 100
        );
        if (!hasLowSodium) {
          score -= 10;
          issues.push('Thiếu thực phẩm có natri thấp');
          suggestions.push('Thêm rau củ quả tươi, thực phẩm không chế biến sẵn');
        }

        break;
      }

      case 'cardiovascular': {
        let totalCholesterol = 0;
        let totalSaturatedFat = 0;
        let hasVeryHighChol = false;
        let hasVeryHighSatFat = false;

        mealItems.forEach(item => {
          const grams = item.grams;
          if (item.food.cardiovascular) {
            const cholPer100g = item.food.cardiovascular.cholesterol;
            const satFatPer100g = item.food.cardiovascular.saturatedFat;
            totalCholesterol += (cholPer100g * grams) / 100;
            totalSaturatedFat += (satFatPer100g * grams) / 100;

            if (cholPer100g >= 200) hasVeryHighChol = true;
            if (satFatPer100g >= 10) hasVeryHighSatFat = true;
          }
        });

        if (hasVeryHighChol) {
          score -= 25;
          issues.push('Có thực phẩm có cholesterol rất cao (nội tạng, lòng đỏ trứng)');
          suggestions.push('Hạn chế hoặc tránh thực phẩm có cholesterol rất cao');
        } else if (totalCholesterol > 200) {
          score -= 15;
          issues.push(`Tổng cholesterol hơi cao (${totalCholesterol.toFixed(0)}mg)`);
          suggestions.push('Giảm lượng thực phẩm có cholesterol cao');
        }

        if (hasVeryHighSatFat) {
          score -= 25;
          issues.push('Có thực phẩm có chất béo bão hòa rất cao (mỡ động vật, bơ)');
          suggestions.push('Thay thế bằng dầu thực vật, thịt nạc');
        } else if (totalSaturatedFat > 10) {
          score -= 15;
          issues.push(`Tổng chất béo bão hòa hơi cao (${totalSaturatedFat.toFixed(1)}g)`);
          suggestions.push('Giảm lượng thực phẩm có chất béo bão hòa cao');
        }

        const hasFish = mealItems.some((item) => {
          // Cá biển: nằm trong `seafood` và tên bắt đầu bằng \"Cá\"
          if (item.food.category === "seafood" && item.food.name.toLowerCase().startsWith("cá")) {
            return true;
          }
          // Cá & thủy sản nước ngọt: toàn bộ nhóm `freshwater`
          if (item.food.category === "freshwater") {
            return true;
          }
          return false;
        });
        if (!hasFish) {
          score -= 5;
          suggestions.push('Nên ăn cá 2-3 lần/tuần - tốt cho tim mạch');
        }

        break;
      }
    }

    // Đảm bảo score không âm
    score = Math.max(0, score);

    let level: 'excellent' | 'good' | 'moderate' | 'poor';
    if (score >= 80) level = 'excellent';
    else if (score >= 60) level = 'good';
    else if (score >= 40) level = 'moderate';
    else level = 'poor';

    return { score, level, issues, suggestions };
  }, [mealItems, selectedDisease]);

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

    setMealItems([...mealItems, newItem]);
    setSelectedFood(null);
    setSearchQuery("");
    setAmount(1);
    toast.success(`Đã thêm ${selectedFood.name}`);
  };

  const handleRemoveItem = (id: string) => {
    setMealItems(mealItems.filter(item => item.id !== id));
    toast.success('Đã xóa');
  };

  const handleFoodSelect = (food: ExtendedFoodItem) => {
    setSelectedFood(food);
    if (food.vietnameseUnits && food.vietnameseUnits.length > 0) {
      setUnit(food.vietnameseUnits[0].unit);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    if (score >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'excellent': return 'bg-green-50 border-green-200 text-green-900';
      case 'good': return 'bg-yellow-50 border-yellow-200 text-yellow-900';
      case 'moderate': return 'bg-orange-50 border-orange-200 text-orange-900';
      case 'poor': return 'bg-red-50 border-red-200 text-red-900';
      default: return 'bg-gray-50 border-gray-200 text-gray-900';
    }
  };

  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'excellent': return 'Xuất sắc';
      case 'good': return 'Tốt';
      case 'moderate': return 'Trung bình';
      case 'poor': return 'Cần cải thiện';
      default: return 'Chưa đánh giá';
    }
  };

  return (
    <div className="space-y-6">
      {/* Disease Selection */}
      <Card>
        <CardHeader icon={Heart} title="Chọn Bệnh lý" />
        <CardContent>
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
        </CardContent>
      </Card>

      {/* Add Food */}
      <Card>
        <CardHeader icon={Plus} title="Thêm Thực phẩm vào Bữa Ăn" />
        <CardContent>
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm thực phẩm..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {searchQuery && filteredFoods.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {filteredFoods.map((food) => (
                    <button
                      key={food.id}
                      type="button"
                      onClick={() => handleFoodSelect(food)}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                        selectedFood?.id === food.id ? 'bg-blue-50' : ''
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
              <div className="space-y-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Đơn vị
                    </label>
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value as VietnameseUnit)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Thêm
                  </button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Meal Items */}
      {mealItems.length > 0 && (
        <>
          <Card>
            <CardHeader icon={ClipboardCheck} title="Bữa Ăn của Bạn" />
            <CardContent>
              <div className="space-y-2">
                {mealItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-sm text-gray-900">
                        {item.food.name}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        {formatAmount(item.amount, item.unit)} ({item.grams.toFixed(0)}g)
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(item.id)}
                      className="ml-3 text-red-600 hover:text-red-800"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Assessment Result */}
          <Card>
            <CardHeader icon={TrendingUp} title="Kết quả Đánh giá" />
            <CardContent>
              <div className="space-y-4">
                {/* Score */}
                <div className="text-center">
                  <div className={`text-5xl font-bold mb-2 ${getScoreColor(assessment.score)}`}>
                    {assessment.score}
                  </div>
                  <div className={`inline-block px-4 py-2 rounded-lg border-2 ${getLevelColor(assessment.level)}`}>
                    {getLevelLabel(assessment.level)}
                  </div>
                </div>

                {/* Issues */}
                {assessment.issues.length > 0 && (
                  <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold text-red-900">Vấn đề cần chú ý:</div>
                    </div>
                    <ul className="list-disc space-y-1 pl-6 text-sm text-red-800">
                      {assessment.issues.map((issue, idx) => (
                        <li key={idx}>{issue}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Suggestions */}
                {assessment.suggestions.length > 0 && (
                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold text-blue-900">Gợi ý cải thiện:</div>
                    </div>
                    <ul className="list-disc space-y-1 pl-6 text-sm text-blue-800">
                      {assessment.suggestions.map((suggestion, idx) => (
                        <li key={idx}>{suggestion}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Positive feedback */}
                {assessment.score >= 80 && (
                  <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-green-800">
                        <strong>Tuyệt vời!</strong> Bữa ăn này rất phù hợp với bệnh lý của bạn. 
                        Tiếp tục duy trì chế độ ăn lành mạnh như vậy!
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
