"use client";

import { useState, useMemo } from "react";
import { Search, CheckCircle, AlertCircle, Info, X } from "lucide-react";
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

function getDiseaseAssessment(food: ExtendedFoodItem, disease: DiseaseType): string | undefined {
  switch (disease) {
    case 'diabetes':
      if (!food.diabetes) return undefined;
      const gi = food.diabetes.glycemicIndex || 100;
      if (gi < 55) return 'good';
      if (gi < 70) return 'moderate';
      return 'poor';
    case 'gout':
      if (!food.gout) return undefined;
      if (food.gout.purineLevel === 'low') return 'good';
      if (food.gout.purineLevel === 'medium') return 'moderate';
      return 'poor';
    case 'kidney':
      if (!food.kidney) return undefined;
      const k = food.kidney.potassium;
      const p = food.kidney.phosphorus;
      if (k < 200 && p < 100) return 'good';
      if (k < 300 && p < 200) return 'moderate';
      return 'poor';
    case 'hypertension':
      if (!food.sodium) return 'good';
      if (food.sodium < 100) return 'good';
      if (food.sodium < 300) return 'moderate';
      return 'poor';
    case 'cardiovascular':
      if (!food.cardiovascular) return 'good';
      const chol = food.cardiovascular.cholesterol;
      const satFat = food.cardiovascular.saturatedFat;
      if (chol < 50 && satFat < 2) return 'good';
      if (chol < 100 && satFat < 5) return 'moderate';
      return 'poor';
    default:
      return undefined;
  }
}

export function InteractiveSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFood, setSelectedFood] = useState<ExtendedFoodItem | null>(null);
  const [selectedDisease, setSelectedDisease] = useState<DiseaseType | 'all'>('all');

  const filteredFoods = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchExtendedFoods(searchQuery).slice(0, 10); // Limit to 10 for quick lookup
  }, [searchQuery]);

  const handleFoodSelect = (food: ExtendedFoodItem) => {
    setSelectedFood(food);
    toast.success(`Đã chọn ${food.name}`);
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
      {/* Quick Search */}
      <Card>
        <CardHeader icon={Search} title="Tìm kiếm Nhanh" />
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Nhập tên thực phẩm..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-lg"
                autoFocus
              />
            </div>

            {/* Quick Results */}
            {searchQuery && filteredFoods.length > 0 && (
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {filteredFoods.map((food) => (
                  <button
                    key={food.id}
                    type="button"
                    onClick={() => handleFoodSelect(food)}
                    className={`w-full text-left p-3 rounded-lg border-2 transition-colors ${
                      selectedFood?.id === food.id
                        ? 'border-yellow-500 bg-yellow-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium text-sm text-gray-900">{food.name}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {food.calories} kcal/100g • {food.category}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Selected Food Details */}
      {selectedFood && (
        <Card>
          <CardHeader 
            icon={Info} 
            title={selectedFood.name}
            action={
              <button
                type="button"
                onClick={() => setSelectedFood(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            }
          />
          <CardContent>
            <div className="space-y-4">
              {/* Basic Nutrition */}
              <div>
                <h4 className="font-semibold text-sm text-gray-900 mb-2">Dinh dưỡng (100g)</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div className="p-2 bg-gray-50 rounded">
                    <div className="text-gray-600 text-xs">Calories</div>
                    <div className="font-semibold">{selectedFood.calories} kcal</div>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <div className="text-gray-600 text-xs">Đạm</div>
                    <div className="font-semibold">{selectedFood.protein}g</div>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <div className="text-gray-600 text-xs">Carb</div>
                    <div className="font-semibold">{selectedFood.carbs}g</div>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <div className="text-gray-600 text-xs">Chất béo</div>
                    <div className="font-semibold">{selectedFood.fat}g</div>
                  </div>
                </div>
              </div>

              {/* Disease Assessment */}
              <div>
                <h4 className="font-semibold text-sm text-gray-900 mb-2">Đánh giá theo Bệnh</h4>
                {selectedDisease === 'all' ? (
                  <div className="space-y-2">
                    {diseases.map((disease) => {
                      const assessment = getDiseaseAssessment(selectedFood, disease.value);
                      if (!assessment) return null;
                      return (
                        <div key={disease.value} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{disease.icon}</span>
                            <span className="text-sm font-medium">{disease.label}</span>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs ${getAssessmentColor(assessment)}`}>
                            {getAssessmentLabel(assessment)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{diseases.find(d => d.value === selectedDisease)?.icon}</span>
                        <span className="font-medium">{diseases.find(d => d.value === selectedDisease)?.label}</span>
                      </div>
                      <span className={`px-3 py-1 rounded text-sm font-medium ${getAssessmentColor(getDiseaseAssessment(selectedFood, selectedDisease))}`}>
                        {getAssessmentLabel(getDiseaseAssessment(selectedFood, selectedDisease))}
                      </span>
                    </div>
                    {selectedDisease === 'diabetes' && selectedFood.diabetes && (
                      <div className="text-sm text-gray-700 mt-2">
                        <div>GI: {selectedFood.diabetes.glycemicIndex || '-'}</div>
                        {selectedFood.diabetes.glycemicLoad && (
                          <div>GL: {selectedFood.diabetes.glycemicLoad}</div>
                        )}
                      </div>
                    )}
                    {selectedDisease === 'gout' && selectedFood.gout && (
                      <div className="text-sm text-gray-700 mt-2">
                        <div>Purin: {selectedFood.gout.purine}mg/100g</div>
                        <div>Mức độ: {
                          selectedFood.gout.purineLevel === 'low' ? 'Thấp' :
                          selectedFood.gout.purineLevel === 'medium' ? 'Trung bình' :
                          selectedFood.gout.purineLevel === 'high' ? 'Cao' : 'Rất cao'
                        }</div>
                      </div>
                    )}
                    {selectedDisease === 'kidney' && selectedFood.kidney && (
                      <div className="text-sm text-gray-700 mt-2">
                        <div>Kali: {selectedFood.kidney.potassium}mg/100g</div>
                        <div>Phốt pho: {selectedFood.kidney.phosphorus}mg/100g</div>
                      </div>
                    )}
                    {selectedDisease === 'hypertension' && (
                      <div className="text-sm text-gray-700 mt-2">
                        <div>Natri: {selectedFood.sodium}mg/100g</div>
                      </div>
                    )}
                    {selectedDisease === 'cardiovascular' && selectedFood.cardiovascular && (
                      <div className="text-sm text-gray-700 mt-2">
                        <div>Cholesterol: {selectedFood.cardiovascular.cholesterol}mg/100g</div>
                        <div>Chất béo Bão hòa: {selectedFood.cardiovascular.saturatedFat}g/100g</div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Disease Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lọc theo bệnh:
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedDisease('all')}
                    className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                      selectedDisease === 'all'
                        ? 'bg-yellow-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Tất cả
                  </button>
                  {diseases.map((disease) => (
                    <button
                      key={disease.value}
                      type="button"
                      onClick={() => setSelectedDisease(disease.value)}
                      className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                        selectedDisease === disease.value
                          ? 'bg-yellow-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {disease.icon} {disease.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              {selectedFood.notes && (
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-3">
                  <p className="text-sm text-blue-900">
                    <strong>Lưu ý:</strong> {selectedFood.notes}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tips */}
      <Card>
        <CardHeader icon={Info} title="Cách Sử dụng" />
        <CardContent>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Nhập tên thực phẩm vào ô tìm kiếm</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Chọn thực phẩm từ danh sách để xem chi tiết</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Lọc theo bệnh lý để xem đánh giá cụ thể</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Công cụ này có thể được nhúng vào các bài viết để tra cứu nhanh</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
