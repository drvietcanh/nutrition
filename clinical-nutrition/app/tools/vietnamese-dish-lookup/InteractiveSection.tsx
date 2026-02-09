"use client";

import { useState, useMemo } from "react";
import { Search, CheckCircle, AlertCircle, Info, X, UtensilsCrossed } from "lucide-react";
import { Card, CardHeader, CardContent } from "../../components/Card";
import {
  searchDishes,
  getDishesByCategory,
  getDishesByDisease,
  type VietnameseDish,
  type DishCategory,
} from "../../../lib/vietnamese-dishes";
import toast from "react-hot-toast";

type DiseaseType = 'diabetes' | 'gout' | 'kidney' | 'hypertension' | 'cardiovascular';

const diseases: { value: DiseaseType; label: string; icon: string }[] = [
  { value: 'diabetes', label: 'Đái tháo đường', icon: '🩺' },
  { value: 'gout', label: 'Bệnh gút', icon: '🦴' },
  { value: 'kidney', label: 'Bệnh thận', icon: '🧪' },
  { value: 'hypertension', label: 'Tăng huyết áp', icon: '❤️' },
  { value: 'cardiovascular', label: 'Tim mạch', icon: '💓' },
];

const categories: { value: DishCategory; label: string }[] = [
  { value: 'pho-noodles', label: 'Phở & Bún Mì' },
  { value: 'rice-dishes', label: 'Cơm & Món Kèm' },
  { value: 'soups', label: 'Canh, Cháo, Súp' },
  { value: 'stir-fried', label: 'Món Xào' },
  { value: 'steamed', label: 'Món Hấp' },
  { value: 'salads', label: 'Gỏi, Nộm' },
  { value: 'drinks', label: 'Đồ Uống' },
];

export function InteractiveSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<DishCategory | 'all'>('all');
  const [selectedDisease, setSelectedDisease] = useState<DiseaseType | 'all'>('all');
  const [filterLevel, setFilterLevel] = useState<'all' | 'good' | 'moderate' | 'poor'>('all');
  const [selectedDish, setSelectedDish] = useState<VietnameseDish | null>(null);

  const filteredDishes = useMemo(() => {
    let dishes = searchDishes(searchQuery);

    if (selectedCategory !== 'all') {
      dishes = dishes.filter((dish) => dish.category === selectedCategory);
    }

    if (selectedDisease !== 'all' && filterLevel !== 'all') {
      const diseaseDishes = getDishesByDisease(selectedDisease, filterLevel);
      dishes = dishes.filter((dish) => 
        diseaseDishes.some(d => d.id === dish.id)
      );
    }

    return dishes;
  }, [searchQuery, selectedCategory, selectedDisease, filterLevel]);

  const handleDishSelect = (dish: VietnameseDish) => {
    setSelectedDish(dish);
    toast.success(`Đã chọn ${dish.name}`);
  };

  const getAssessmentColor = (assessment: string) => {
    switch (assessment) {
      case 'excellent':
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

  const getAssessmentLabel = (assessment: string) => {
    switch (assessment) {
      case 'excellent':
        return 'Xuất sắc';
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
      {/* Search and Filters */}
      <Card>
        <CardHeader icon={Search} title="Tìm kiếm và Lọc" />
        <CardContent>
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm món ăn..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loại món ăn:
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Disease Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lọc theo bệnh lý:
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedDisease('all');
                    setFilterLevel('all');
                  }}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                    selectedDisease === 'all'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Tất cả
                </button>
                {diseases.map((disease) => (
                  <button
                    key={disease.value}
                    type="button"
                    onClick={() => {
                      setSelectedDisease(disease.value);
                      setFilterLevel('all');
                    }}
                    className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                      selectedDisease === disease.value
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {disease.icon} {disease.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Level Filter */}
            {selectedDisease !== 'all' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mức độ phù hợp:
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setFilterLevel('all')}
                    className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                      filterLevel === 'all'
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Tất cả
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterLevel('good')}
                    className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                      filterLevel === 'good'
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ✅ Tốt
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterLevel('moderate')}
                    className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                      filterLevel === 'moderate'
                        ? 'bg-yellow-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ⚠️ Trung bình
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterLevel('poor')}
                    className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                      filterLevel === 'poor'
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ❌ Kém
                  </button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Dish List */}
        <Card>
          <CardHeader icon={UtensilsCrossed} title={`Kết quả (${filteredDishes.length})`} />
          <CardContent>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredDishes.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-4">
                  Không tìm thấy món ăn nào
                </p>
              ) : (
                filteredDishes.map((dish) => (
                  <button
                    key={dish.id}
                    type="button"
                    onClick={() => handleDishSelect(dish)}
                    className={`w-full text-left p-3 rounded-lg border-2 transition-colors ${
                      selectedDish?.id === dish.id
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium text-sm text-gray-900">{dish.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{dish.description}</div>
                    {selectedDisease !== 'all' && dish.diseaseAssessment[selectedDisease] && (
                      <div className="mt-2">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs ${getAssessmentColor(dish.diseaseAssessment[selectedDisease]!.assessment)}`}>
                          {getAssessmentLabel(dish.diseaseAssessment[selectedDisease]!.assessment)}
                        </span>
                      </div>
                    )}
                  </button>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        {/* Dish Details */}
        {selectedDish && (
          <Card>
            <CardHeader 
              icon={Info} 
              title={selectedDish.name}
              action={
                <button
                  type="button"
                  onClick={() => setSelectedDish(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              }
            />
            <CardContent>
              <div className="space-y-4">
                {/* Basic Info */}
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Thông tin cơ bản</h4>
                  <p className="text-sm text-gray-700 mb-2">{selectedDish.description}</p>
                  <p className="text-xs text-gray-600">
                    Khẩu phần: {selectedDish.commonPortion.description} ({selectedDish.commonPortion.weight}g)
                  </p>
                  <div className="mt-2">
                    <p className="text-xs font-medium text-gray-700 mb-1">Thành phần chính:</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedDish.mainIngredients.map((ing, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-700">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Nutrition */}
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Dinh dưỡng (khẩu phần thông thường)</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-600">Calories:</span>{' '}
                      <span className="font-medium">{selectedDish.nutrition.calories} kcal</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Đạm:</span>{' '}
                      <span className="font-medium">{selectedDish.nutrition.protein}g</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Carb:</span>{' '}
                      <span className="font-medium">{selectedDish.nutrition.carbs}g</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Chất béo:</span>{' '}
                      <span className="font-medium">{selectedDish.nutrition.fat}g</span>
                    </div>
                    {selectedDish.nutrition.fiber && (
                      <div>
                        <span className="text-gray-600">Chất xơ:</span>{' '}
                        <span className="font-medium">{selectedDish.nutrition.fiber}g</span>
                      </div>
                    )}
                    {selectedDish.nutrition.sodium && (
                      <div>
                        <span className="text-gray-600">Natri:</span>{' '}
                        <span className="font-medium">{selectedDish.nutrition.sodium}mg</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Disease Assessment */}
                {selectedDisease === 'all' ? (
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Đánh giá theo bệnh</h4>
                    <div className="space-y-3">
                      {diseases.map((disease) => {
                        const assessment = selectedDish.diseaseAssessment[disease.value];
                        if (!assessment) return null;
                        return (
                          <div key={disease.value} className="border-l-4 border-blue-200 pl-3">
                            <div className="font-medium text-sm text-gray-900 mb-1">
                              {disease.icon} {disease.label}
                            </div>
                            <div className={`inline-block px-2 py-0.5 rounded text-xs mb-1 ${getAssessmentColor(assessment.assessment)}`}>
                              {getAssessmentLabel(assessment.assessment)}
                            </div>
                            <p className="text-xs text-gray-700 mt-1">{assessment.notes}</p>
                            {'glycemicLoad' in assessment && assessment.glycemicLoad !== undefined && (
                              <p className="text-xs text-gray-600 mt-1">
                                GL: {assessment.glycemicLoad}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">
                      {diseases.find(d => d.value === selectedDisease)?.icon}{' '}
                      {diseases.find(d => d.value === selectedDisease)?.label}
                    </h4>
                    {(() => {
                      const assessment = selectedDish.diseaseAssessment[selectedDisease];
                      if (!assessment) {
                        return (
                          <p className="text-sm text-gray-500">
                            Không có thông tin đánh giá cho bệnh này
                          </p>
                        );
                      }
                      return (
                        <div className="space-y-2">
                          <div className={`p-3 rounded-lg border-2 ${
                            assessment.assessment === 'good' || assessment.assessment === 'excellent' 
                              ? 'bg-green-50 border-green-200' 
                              : assessment.assessment === 'moderate'
                              ? 'bg-yellow-50 border-yellow-200'
                              : 'bg-red-50 border-red-200'
                          }`}>
                            <div className="flex items-center gap-2 mb-2">
                              {assessment.assessment === 'good' || assessment.assessment === 'excellent' ? (
                                <CheckCircle className="w-5 h-5 text-green-600" />
                              ) : assessment.assessment === 'moderate' ? (
                                <Info className="w-5 h-5 text-yellow-600" />
                              ) : (
                                <AlertCircle className="w-5 h-5 text-red-600" />
                              )}
                              <span className={`font-semibold ${
                                assessment.assessment === 'good' || assessment.assessment === 'excellent'
                                  ? 'text-green-900'
                                  : assessment.assessment === 'moderate'
                                  ? 'text-yellow-900'
                                  : 'text-red-900'
                              }`}>
                                {getAssessmentLabel(assessment.assessment)}
                              </span>
                            </div>
                            <p className="text-sm text-gray-700">{assessment.notes}</p>
                            {'glycemicLoad' in assessment && assessment.glycemicLoad !== undefined && (
                              <p className="text-xs text-gray-600 mt-2">
                                Glycemic Load: {assessment.glycemicLoad}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}

                {/* Adjustment Tips */}
                {selectedDish.adjustmentTips && selectedDisease !== 'all' && selectedDish.adjustmentTips[selectedDisease] && (
                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-3">
                    <div className="flex items-start gap-2 mb-2">
                      <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold text-blue-900">Mẹo điều chỉnh:</div>
                    </div>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-blue-800">
                      {selectedDish.adjustmentTips[selectedDisease]!.map((tip, idx) => (
                        <li key={idx}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
