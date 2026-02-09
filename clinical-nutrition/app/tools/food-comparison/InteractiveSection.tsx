"use client";

import { useState, useMemo } from "react";
import { Plus, X, Search, BarChart3, CheckCircle, AlertCircle, Info } from "lucide-react";
import { Card, CardHeader, CardContent } from "../../components/Card";
import {
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

export function InteractiveSection() {
  const [selectedDisease, setSelectedDisease] = useState<DiseaseType>('diabetes');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFoods, setSelectedFoods] = useState<ExtendedFoodItem[]>([]);
  const [comparisonAmount, setComparisonAmount] = useState<number>(100); // grams

  const filteredFoods = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchExtendedFoods(searchQuery);
  }, [searchQuery]);

  const handleAddFood = (food: ExtendedFoodItem) => {
    if (selectedFoods.some(f => f.id === food.id)) {
      toast.error('Thực phẩm này đã được thêm');
      return;
    }
    if (selectedFoods.length >= 5) {
      toast.error('Chỉ có thể so sánh tối đa 5 thực phẩm');
      return;
    }
    setSelectedFoods([...selectedFoods, food]);
    setSearchQuery("");
    toast.success(`Đã thêm ${food.name}`);
  };

  const handleRemoveFood = (id: string) => {
    setSelectedFoods(selectedFoods.filter(f => f.id !== id));
    toast.success('Đã xóa');
  };

  const getDiseaseAssessment = (food: ExtendedFoodItem) => {
    switch (selectedDisease) {
      case 'diabetes':
        return food.diabetes;
      case 'gout':
        return food.gout;
      case 'kidney':
        return food.kidney;
      case 'hypertension':
        return food.hypertension;
      case 'cardiovascular':
        return food.cardiovascular;
      default:
        return null;
    }
  };

  const getAssessmentColor = (assessment: string | undefined) => {
    if (!assessment) return 'text-gray-600 bg-gray-100';
    switch (assessment) {
      case 'good':
        return 'text-green-600 bg-green-100';
      case 'moderate':
        return 'text-yellow-600 bg-yellow-100';
      case 'poor':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getAssessmentLabel = (assessment: string | undefined) => {
    if (!assessment) return 'Chưa đánh giá';
    switch (assessment) {
      case 'good':
        return 'Tốt';
      case 'moderate':
        return 'Trung bình';
      case 'poor':
        return 'Kém';
      default:
        return 'Chưa đánh giá';
    }
  };

  return (
    <div className="space-y-6">
      {/* Disease Selection */}
      <Card>
        <CardHeader icon={Info} title="Chọn Bệnh Lý" />
        <CardContent>
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
        </CardContent>
      </Card>

      {/* Add Foods */}
      <Card>
        <CardHeader icon={Plus} title="Thêm Thực phẩm để So sánh" />
        <CardContent>
          <div className="space-y-4">
            <div className="text-sm text-gray-600">
              Đã chọn: {selectedFoods.length}/5 thực phẩm
            </div>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm thực phẩm..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              {searchQuery && filteredFoods.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {filteredFoods
                    .filter(f => !selectedFoods.some(sf => sf.id === f.id))
                    .map((food) => (
                      <button
                        key={food.id}
                        type="button"
                        onClick={() => handleAddFood(food)}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        <div className="font-medium text-sm">{food.name}</div>
                        {getDiseaseAssessment(food) && (
                          <div className="text-xs text-gray-500">
                            {getAssessmentLabel(getDiseaseAssessment(food)?.suitability)}
                          </div>
                        )}
                      </button>
                    ))}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Khối lượng so sánh (gram):
              </label>
              <input
                type="number"
                value={comparisonAmount}
                onChange={(e) => setComparisonAmount(parseInt(e.target.value) || 100)}
                min="1"
                step="10"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Table */}
      {selectedFoods.length > 0 && (
        <Card>
          <CardHeader icon={BarChart3} title="Bảng So sánh" />
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left p-2 font-semibold text-gray-900">Thực phẩm</th>
                    <th className="text-right p-2 font-semibold text-gray-900">Calories</th>
                    <th className="text-right p-2 font-semibold text-gray-900">Đạm (g)</th>
                    <th className="text-right p-2 font-semibold text-gray-900">Carb (g)</th>
                    <th className="text-right p-2 font-semibold text-gray-900">Chất béo (g)</th>
                    <th className="text-right p-2 font-semibold text-gray-900">Chất xơ (g)</th>
                    {selectedDisease === 'diabetes' && (
                      <>
                        <th className="text-right p-2 font-semibold text-gray-900">GI</th>
                        <th className="text-right p-2 font-semibold text-gray-900">GL</th>
                      </>
                    )}
                    {selectedDisease === 'gout' && (
                      <th className="text-right p-2 font-semibold text-gray-900">Purin (mg)</th>
                    )}
                    {selectedDisease === 'kidney' && (
                      <>
                        <th className="text-right p-2 font-semibold text-gray-900">Kali (mg)</th>
                        <th className="text-right p-2 font-semibold text-gray-900">Phốt pho (mg)</th>
                      </>
                    )}
                    {selectedDisease === 'hypertension' && (
                      <th className="text-right p-2 font-semibold text-gray-900">Natri (mg)</th>
                    )}
                    {selectedDisease === 'cardiovascular' && (
                      <>
                        <th className="text-right p-2 font-semibold text-gray-900">Cholesterol (mg)</th>
                        <th className="text-right p-2 font-semibold text-gray-900">Chất béo Bão hòa (g)</th>
                      </>
                    )}
                    <th className="text-center p-2 font-semibold text-gray-900">Đánh giá</th>
                    <th className="text-center p-2 font-semibold text-gray-900"></th>
                  </tr>
                </thead>
                <tbody>
                  {selectedFoods.map((food) => {
                    const diseaseData = getDiseaseAssessment(food);
                    const multiplier = comparisonAmount / 100;
                    const calories = food.calories * multiplier;
                    const protein = food.protein * multiplier;
                    const carbs = food.carbs * multiplier;
                    const fat = food.fat * multiplier;
                    const fiber = (food.fiber || 0) * multiplier;

                    let gl = 0;
                    if (food.diabetes && food.diabetes.glycemicIndex) {
                      gl = (food.diabetes.glycemicIndex * carbs) / 100;
                    }

                    return (
                      <tr key={food.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-2">
                          <div className="font-medium text-gray-900">{food.name}</div>
                          <div className="text-xs text-gray-500">{comparisonAmount}g</div>
                        </td>
                        <td className="text-right p-2">{calories.toFixed(0)}</td>
                        <td className="text-right p-2">{protein.toFixed(1)}</td>
                        <td className="text-right p-2">{carbs.toFixed(1)}</td>
                        <td className="text-right p-2">{fat.toFixed(1)}</td>
                        <td className="text-right p-2">{fiber.toFixed(1)}</td>
                        {selectedDisease === 'diabetes' && (
                          <>
                            <td className="text-right p-2">
                              {food.diabetes?.glycemicIndex || '-'}
                            </td>
                            <td className="text-right p-2">{gl.toFixed(1)}</td>
                          </>
                        )}
                        {selectedDisease === 'gout' && (
                          <td className="text-right p-2">
                            {food.gout ? (food.gout.purine * multiplier).toFixed(0) : '-'}
                          </td>
                        )}
                        {selectedDisease === 'kidney' && (
                          <>
                            <td className="text-right p-2">
                              {food.kidney ? (food.kidney.potassium * multiplier).toFixed(0) : '-'}
                            </td>
                            <td className="text-right p-2">
                              {food.kidney ? (food.kidney.phosphorus * multiplier).toFixed(0) : '-'}
                            </td>
                          </>
                        )}
                        {selectedDisease === 'hypertension' && (
                          <td className="text-right p-2">
                            {food.hypertension ? (food.hypertension.sodium * multiplier).toFixed(0) : '-'}
                          </td>
                        )}
                        {selectedDisease === 'cardiovascular' && (
                          <>
                            <td className="text-right p-2">
                              {food.cardiovascular ? (food.cardiovascular.cholesterol * multiplier).toFixed(0) : '-'}
                            </td>
                            <td className="text-right p-2">
                              {food.cardiovascular ? (food.cardiovascular.saturatedFat * multiplier).toFixed(1) : '-'}
                            </td>
                          </>
                        )}
                        <td className="text-center p-2">
                          <span className={`inline-block px-2 py-1 rounded text-xs ${getAssessmentColor(diseaseData?.suitability)}`}>
                            {getAssessmentLabel(diseaseData?.suitability)}
                          </span>
                        </td>
                        <td className="text-center p-2">
                          <button
                            type="button"
                            onClick={() => handleRemoveFood(food.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Best Choice */}
      {selectedFoods.length > 1 && (
        <Card>
          <CardHeader icon={CheckCircle} title="Gợi ý Lựa chọn" />
          <CardContent>
            {(() => {
              const foodsWithAssessment = selectedFoods
                .map(food => ({
                  food,
                  assessment: getDiseaseAssessment(food),
                }))
                .filter(item => item.assessment);

              if (foodsWithAssessment.length === 0) {
                return (
                  <p className="text-sm text-gray-500">
                    Không có thực phẩm nào có đánh giá cho bệnh này
                  </p>
                );
              }

              const goodFoods = foodsWithAssessment.filter(
                item => item.assessment?.suitability === 'good'
              );
              const moderateFoods = foodsWithAssessment.filter(
                item => item.assessment?.suitability === 'moderate'
              );

              if (goodFoods.length > 0) {
                return (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-green-700">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Thực phẩm tốt nhất:</span>
                    </div>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                      {goodFoods.map((item, idx) => (
                        <li key={idx}>
                          <strong>{item.food.name}</strong>
                          {item.assessment?.notes && (
                            <span className="text-gray-600"> - {item.assessment.notes}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              } else if (moderateFoods.length > 0) {
                return (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-yellow-700">
                      <Info className="w-5 h-5" />
                      <span className="font-semibold">Thực phẩm chấp nhận được:</span>
                    </div>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                      {moderateFoods.map((item, idx) => (
                        <li key={idx}>
                          <strong>{item.food.name}</strong>
                          {item.assessment?.notes && (
                            <span className="text-gray-600"> - {item.assessment.notes}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              } else {
                return (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-red-700">
                      <AlertCircle className="w-5 h-5" />
                      <span className="font-semibold">Lưu ý:</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Tất cả các thực phẩm đã chọn đều không phù hợp tốt với bệnh này.
                      Nên tìm thực phẩm thay thế tốt hơn.
                    </p>
                  </div>
                );
              }
            })()}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
