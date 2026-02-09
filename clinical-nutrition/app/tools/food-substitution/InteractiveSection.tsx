"use client";

import { useState, useMemo } from "react";
import { Search, RefreshCw, CheckCircle, AlertCircle, Info, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardContent } from "../../components/Card";
import {
  searchExtendedFoods,
  getFoodsByCategory,
  extendedFoodDatabase,
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

const suitabilityOrder = { 'good': 3, 'moderate': 2, 'poor': 1 };

function getDiseaseAssessment(food: ExtendedFoodItem, disease: DiseaseType): string | undefined {
  switch (disease) {
    case 'diabetes':
      return food.diabetes ? 'moderate' : undefined; // Có thể cải thiện logic này
    case 'gout':
      return food.gout?.purineLevel === 'low' ? 'good' :
             food.gout?.purineLevel === 'medium' ? 'moderate' :
             food.gout?.purineLevel === 'high' || food.gout?.purineLevel === 'very-high' ? 'poor' : undefined;
    case 'kidney':
      // Đánh giá dựa trên kali và phốt pho
      if (!food.kidney) return undefined;
      const k = food.kidney.potassium;
      const p = food.kidney.phosphorus;
      if (k < 200 && p < 100) return 'good';
      if (k < 300 && p < 200) return 'moderate';
      return 'poor';
    case 'hypertension':
      // Đánh giá dựa trên natri
      if (!food.sodium) return undefined;
      if (food.sodium < 100) return 'good';
      if (food.sodium < 300) return 'moderate';
      return 'poor';
    case 'cardiovascular':
      if (!food.cardiovascular) return undefined;
      const chol = food.cardiovascular.cholesterol;
      const satFat = food.cardiovascular.saturatedFat;
      if (chol < 50 && satFat < 2) return 'good';
      if (chol < 100 && satFat < 5) return 'moderate';
      return 'poor';
    default:
      return undefined;
  }
}

function findSubstitutions(
  originalFood: ExtendedFoodItem,
  disease: DiseaseType,
  allFoods: ExtendedFoodItem[]
): ExtendedFoodItem[] {
  const originalAssessment = getDiseaseAssessment(originalFood, disease);
  const originalOrder = originalAssessment ? suitabilityOrder[originalAssessment as keyof typeof suitabilityOrder] : 0;

  // Tìm thực phẩm cùng category hoặc tương tự
  const sameCategory = allFoods.filter(f => 
    f.id !== originalFood.id && 
    f.category === originalFood.category
  );

  // Tìm thực phẩm có đánh giá tốt hơn
  const betterFoods = sameCategory.filter(f => {
    const assessment = getDiseaseAssessment(f, disease);
    if (!assessment) return false;
    const order = suitabilityOrder[assessment as keyof typeof suitabilityOrder];
    return order > originalOrder;
  });

  // Sắp xếp theo đánh giá tốt nhất
  betterFoods.sort((a, b) => {
    const aAssessment = getDiseaseAssessment(a, disease);
    const bAssessment = getDiseaseAssessment(b, disease);
    const aOrder = aAssessment ? suitabilityOrder[aAssessment as keyof typeof suitabilityOrder] : 0;
    const bOrder = bAssessment ? suitabilityOrder[bAssessment as keyof typeof suitabilityOrder] : 0;
    return bOrder - aOrder;
  });

  return betterFoods.slice(0, 5); // Trả về tối đa 5 lựa chọn
}

export function InteractiveSection() {
  const [selectedDisease, setSelectedDisease] = useState<DiseaseType>('diabetes');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFood, setSelectedFood] = useState<ExtendedFoodItem | null>(null);
  const [substitutions, setSubstitutions] = useState<ExtendedFoodItem[]>([]);

  const filteredFoods = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchExtendedFoods(searchQuery);
  }, [searchQuery]);

  const handleFindSubstitutions = () => {
    if (!selectedFood) {
      toast.error('Vui lòng chọn thực phẩm cần thay thế');
      return;
    }

    // Import all foods from database
    const results = findSubstitutions(selectedFood, selectedDisease, extendedFoodDatabase);
    
    if (results.length === 0) {
      toast.error('Không tìm thấy thực phẩm thay thế tốt hơn');
      setSubstitutions([]);
    } else {
      setSubstitutions(results);
      toast.success(`Tìm thấy ${results.length} thực phẩm thay thế`);
    }
  };

  const handleFoodSelect = (food: ExtendedFoodItem) => {
    setSelectedFood(food);
    setSubstitutions([]);
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
                onClick={() => {
                  setSelectedDisease(disease.value);
                  setSubstitutions([]);
                }}
                className={`p-3 rounded-lg border-2 transition-colors ${
                  selectedDisease === disease.value
                    ? 'border-teal-500 bg-teal-50'
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

      {/* Select Food to Replace */}
      <Card>
        <CardHeader icon={Search} title="Chọn Thực phẩm Cần Thay thế" />
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm thực phẩm..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              {searchQuery && filteredFoods.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {filteredFoods.map((food) => (
                    <button
                      key={food.id}
                      type="button"
                      onClick={() => handleFoodSelect(food)}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                        selectedFood?.id === food.id ? 'bg-teal-50' : ''
                      }`}
                    >
                      <div className="font-medium text-sm">{food.name}</div>
                      <div className="text-xs text-gray-500">{food.category}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {selectedFood && (
              <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{selectedFood.name}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      {selectedFood.category} • {selectedFood.calories} kcal/100g
                    </div>
                    <div className="mt-2">
                      <span className={`inline-block px-2 py-1 rounded text-xs ${getAssessmentColor(getDiseaseAssessment(selectedFood, selectedDisease))}`}>
                        {getAssessmentLabel(getDiseaseAssessment(selectedFood, selectedDisease))}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleFindSubstitutions}
                    className="ml-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Tìm Thay thế
                  </button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Substitutions */}
      {substitutions.length > 0 && (
        <Card>
          <CardHeader icon={CheckCircle} title="Thực phẩm Thay thế Gợi ý" />
          <CardContent>
            <div className="space-y-4">
              {substitutions.map((food) => {
                const assessment = getDiseaseAssessment(food, selectedDisease);
                const originalAssessment = selectedFood ? getDiseaseAssessment(selectedFood, selectedDisease) : undefined;
                
                return (
                  <div
                    key={food.id}
                    className="p-4 rounded-lg border-2 border-green-200 bg-green-50"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-lg">{food.name}</div>
                        <div className="text-sm text-gray-600 mt-1">
                          {food.category} • {food.calories} kcal/100g
                        </div>
                      </div>
                      <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${getAssessmentColor(assessment)}`}>
                        {getAssessmentLabel(assessment)}
                      </span>
                    </div>

                    {/* Nutrition Comparison */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3 text-sm">
                      <div>
                        <div className="text-gray-600">Calories</div>
                        <div className="font-semibold">{food.calories} kcal</div>
                        {selectedFood && (
                          <div className="text-xs text-gray-500">
                            {food.calories > selectedFood.calories ? '↑' : food.calories < selectedFood.calories ? '↓' : '='} 
                            {selectedFood.calories} kcal
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="text-gray-600">Đạm</div>
                        <div className="font-semibold">{food.protein}g</div>
                        {selectedFood && (
                          <div className="text-xs text-gray-500">
                            {food.protein > selectedFood.protein ? '↑' : food.protein < selectedFood.protein ? '↓' : '='} 
                            {selectedFood.protein}g
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="text-gray-600">Carb</div>
                        <div className="font-semibold">{food.carbs}g</div>
                        {selectedFood && (
                          <div className="text-xs text-gray-500">
                            {food.carbs > selectedFood.carbs ? '↑' : food.carbs < selectedFood.carbs ? '↓' : '='} 
                            {selectedFood.carbs}g
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="text-gray-600">Chất béo</div>
                        <div className="font-semibold">{food.fat}g</div>
                        {selectedFood && (
                          <div className="text-xs text-gray-500">
                            {food.fat > selectedFood.fat ? '↑' : food.fat < selectedFood.fat ? '↓' : '='} 
                            {selectedFood.fat}g
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Disease-specific info */}
                    <div className="mt-3 pt-3 border-t border-green-200">
                      {selectedDisease === 'diabetes' && food.diabetes && (
                        <div className="text-sm">
                          <span className="font-medium">GI:</span> {food.diabetes.glycemicIndex || '-'} 
                          {selectedFood?.diabetes && (
                            <span className="text-gray-600 ml-2">
                              ({food.diabetes.glycemicIndex! < (selectedFood.diabetes.glycemicIndex || 0) ? '↓' : '↑'} 
                              {selectedFood.diabetes.glycemicIndex})
                            </span>
                          )}
                        </div>
                      )}
                      {selectedDisease === 'gout' && food.gout && (
                        <div className="text-sm">
                          <span className="font-medium">Purin:</span> {food.gout.purine}mg/100g 
                          ({food.gout.purineLevel === 'low' ? 'Thấp' : 
                            food.gout.purineLevel === 'medium' ? 'Trung bình' :
                            food.gout.purineLevel === 'high' ? 'Cao' : 'Rất cao'})
                        </div>
                      )}
                      {selectedDisease === 'hypertension' && (
                        <div className="text-sm">
                          <span className="font-medium">Natri:</span> {food.sodium}mg/100g
                          {selectedFood && (
                            <span className="text-gray-600 ml-2">
                              ({food.sodium < selectedFood.sodium ? '↓' : '↑'} 
                              {selectedFood.sodium}mg)
                            </span>
                          )}
                        </div>
                      )}
                      {selectedDisease === 'kidney' && food.kidney && (
                        <div className="text-sm space-y-1">
                          <div>
                            <span className="font-medium">Kali:</span> {food.kidney.potassium}mg/100g
                          </div>
                          <div>
                            <span className="font-medium">Phốt pho:</span> {food.kidney.phosphorus}mg/100g
                          </div>
                        </div>
                      )}
                      {selectedDisease === 'cardiovascular' && food.cardiovascular && (
                        <div className="text-sm space-y-1">
                          <div>
                            <span className="font-medium">Cholesterol:</span> {food.cardiovascular.cholesterol}mg/100g
                          </div>
                          <div>
                            <span className="font-medium">Chất béo Bão hòa:</span> {food.cardiovascular.saturatedFat}g/100g
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Why it's better */}
                    <div className="mt-3 pt-3 border-t border-green-200">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-gray-700">
                          <strong>Tại sao tốt hơn:</strong> Thực phẩm này có đánh giá{' '}
                          <strong>{getAssessmentLabel(assessment)}</strong> cho {diseases.find(d => d.value === selectedDisease)?.label}, 
                          tốt hơn so với <strong>{getAssessmentLabel(originalAssessment)}</strong> của thực phẩm ban đầu.
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tips */}
      <Card>
        <CardHeader icon={Info} title="Mẹo Sử dụng" />
        <CardContent>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <ArrowRight className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
              <span>Chọn thực phẩm bạn đang ăn và muốn thay thế</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
              <span>Chọn bệnh lý của bạn để tìm thực phẩm phù hợp hơn</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
              <span>Công cụ sẽ tìm thực phẩm cùng loại nhưng có đánh giá tốt hơn</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
              <span>So sánh dinh dưỡng để đảm bảo phù hợp với nhu cầu của bạn</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
