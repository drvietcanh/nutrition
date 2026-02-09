"use client";

import { useState, useMemo } from "react";
import { Search, CheckCircle, AlertCircle, Info, X } from "lucide-react";
import { Card, CardHeader, CardContent } from "../../components/Card";
import {
  searchExtendedFoods,
  getFoodsByDisease,
  type ExtendedFoodItem,
} from "../../../lib/vietnamese-food-extended";
import toast from "react-hot-toast";
import {
  getPercentOfDiseaseTarget,
  getPercentOfRNI,
  type DiseaseType,
} from "../../../lib/nutrition-reference";

const diseases: { value: DiseaseType; label: string; icon: string }[] = [
  { value: "diabetes", label: "Đái tháo đường", icon: "🩺" },
  { value: "gout", label: "Bệnh gút", icon: "🦴" },
  { value: "kidney", label: "Bệnh thận", icon: "🧪" },
  { value: "hypertension", label: "Tăng huyết áp", icon: "❤️" },
  { value: "cardiovascular", label: "Tim mạch", icon: "💓" },
];

function formatPercent(value: number | null): string {
  if (value == null || Number.isNaN(value)) return "-";
  if (value < 1) return "<1%";
  if (value < 10) return value.toFixed(1) + "%";
  if (value > 999) return ">999%";
  return Math.round(value) + "%";
}

export function InteractiveSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDisease, setSelectedDisease] = useState<DiseaseType | 'all'>('all');
  const [selectedFood, setSelectedFood] = useState<ExtendedFoodItem | null>(null);
  const [filterLevel, setFilterLevel] = useState<'all' | 'good' | 'moderate' | 'avoid'>('all');
  const [nutrientFilter, setNutrientFilter] = useState<'none' | 'low-sodium' | 'high-potassium' | 'high-fiber'>('none');

  const filteredFoods = useMemo(() => {
    let foods = searchExtendedFoods(searchQuery);

    if (selectedDisease !== 'all') {
      if (filterLevel !== 'all') {
        foods = getFoodsByDisease(selectedDisease, filterLevel);
        // Lọc thêm theo search query
        if (searchQuery.trim()) {
          const lowerQuery = searchQuery.toLowerCase();
          foods = foods.filter(
            (food) =>
              food.name.toLowerCase().includes(lowerQuery) ||
              food.nameEn?.toLowerCase().includes(lowerQuery)
          );
        }
      } else {
        // Nếu filterLevel là 'all', chỉ lọc theo search query
        // (getFoodsByDisease đã được gọi trong searchExtendedFoods nếu cần)
      }
    }

    // Lọc thêm theo chất dinh dưỡng nếu được chọn
    if (nutrientFilter !== 'none') {
      foods = foods.filter((food) => {
        switch (nutrientFilter) {
          case 'low-sodium': {
            const na = food.sodium ?? 0;
            // Ít natri: < 100 mg/100g hoặc không có dữ liệu (coi như an toàn hơn muối nhiều)
            return na === 0 || na < 100;
          }
          case 'high-potassium': {
            const k = food.kidney?.potassium ?? food.potassium ?? 0;
            // Giàu kali: ≥ 300 mg/100g
            return k >= 300;
          }
          case 'high-fiber': {
            const fiber = food.fiber ?? 0;
            // Giàu xơ: ≥ 3 g chất xơ/100g
            return fiber >= 3;
          }
          default:
            return true;
        }
      });
    }

    return foods;
  }, [searchQuery, selectedDisease, filterLevel, nutrientFilter]);

  const handleFoodSelect = (food: ExtendedFoodItem) => {
    setSelectedFood(food);
    toast.success(`Đã chọn ${food.name}`);
  };

  const getDiseaseInfo = (food: ExtendedFoodItem, disease: DiseaseType) => {
    switch (disease) {
      case 'diabetes':
        if (!food.diabetes) return null;
        const gi = food.diabetes.glycemicIndex || 0;
        const gl = food.diabetes.glycemicLoad || 0;
        let giLevel = 'good';
        let giColor = 'green';
        if (gi >= 70) {
          giLevel = 'cao';
          giColor = 'red';
        } else if (gi >= 55) {
          giLevel = 'trung bình';
          giColor = 'yellow';
        } else {
          giLevel = 'thấp';
          giColor = 'green';
        }
        return {
          label: 'Đái tháo đường',
          items: [
            { label: 'GI', value: gi > 0 ? `${gi}` : 'N/A', level: giLevel, color: giColor },
            { label: 'GL', value: gl > 0 ? `${gl}` : 'N/A', tooltip: 'GL (glycemic load) kết hợp GI và lượng carb trong khẩu phần; GL > 20/bữa thường được xem là cao và có thể gây tăng đường huyết mạnh.' },
            { label: 'Carb/khẩu phần', value: `${food.diabetes.carbPerPortion}g` },
          ],
        };

      case 'gout':
        if (!food.gout) return null;
        const purineLevel = food.gout.purineLevel;
        let purineColor = 'green';
        if (purineLevel === 'very-high' || purineLevel === 'high') {
          purineColor = 'red';
        } else if (purineLevel === 'medium') {
          purineColor = 'yellow';
        }
        return {
          label: 'Bệnh gút',
          items: [
            { label: 'Purin', value: `${food.gout.purine}mg/100g`, tooltip: 'Thực phẩm giàu purine làm tăng acid uric; ở người gút nên hạn chế/thận trọng với nhóm purine cao và rất cao.' },
            { label: 'Phân loại', value: purineLevel, level: purineLevel, color: purineColor },
          ],
        };

      case 'kidney':
        if (!food.kidney) return null;
        const potassium = food.kidney.potassium;
        const phosphorus = food.kidney.phosphorus;
        let kColor = 'green';
        let pColor = 'green';
        if (potassium >= 300) kColor = 'red';
        else if (potassium >= 200) kColor = 'yellow';
        if (phosphorus >= 300) pColor = 'red';
        else if (phosphorus >= 200) pColor = 'yellow';
        return {
          label: 'Bệnh thận',
          items: [
            { label: 'Kali', value: `${potassium}mg/100g`, color: kColor },
            { label: 'Phốt pho', value: `${phosphorus}mg/100g`, color: pColor },
          ],
        };

      case 'hypertension': {
        const sodium = food.sodium || 0;
        let naColor = 'green';
        if (sodium >= 500) naColor = 'red';
        else if (sodium >= 100) naColor = 'yellow';
        const percentRni = getPercentOfRNI("sodium", sodium);
        const percentDisease = getPercentOfDiseaseTarget("hypertension", "sodium", sodium);
        return {
          label: 'Tăng huyết áp',
          items: [
            { label: 'Natri', value: `${sodium}mg/100g`, color: naColor },
            { label: '%RNI natri', value: formatPercent(percentRni), color: 'green' },
            { label: '% mục tiêu THA', value: formatPercent(percentDisease), color: 'yellow' },
          ],
        };
      }

      case 'cardiovascular': {
        if (!food.cardiovascular) return null;
        const cholesterol = food.cardiovascular.cholesterol;
        const satFat = food.cardiovascular.saturatedFat;
        let cholColor = 'green';
        let fatColor = 'green';
        if (cholesterol >= 200) cholColor = 'red';
        else if (cholesterol >= 100) cholColor = 'yellow';
        if (satFat >= 10) fatColor = 'red';
        else if (satFat >= 5) fatColor = 'yellow';
        const cholPercentRni = getPercentOfRNI("cholesterol", cholesterol);
        const cholPercentDisease = getPercentOfDiseaseTarget("cardiovascular", "cholesterol", cholesterol);
        return {
          label: 'Tim mạch',
          items: [
            { label: 'Cholesterol', value: `${cholesterol}mg/100g`, color: cholColor },
            { label: 'Chất béo bão hòa', value: `${satFat}g/100g`, color: fatColor },
            { label: '%RNI cholesterol', value: formatPercent(cholPercentRni), color: 'green' },
            { label: '% mục tiêu tim mạch', value: formatPercent(cholPercentDisease), color: 'yellow' },
          ],
        };
      }

      default:
        return null;
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
                placeholder="Tìm kiếm thực phẩm..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Disease Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chọn bệnh lý:
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
                      ? 'bg-blue-600 text-white'
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
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {disease.icon} {disease.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Nutrient Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lọc theo chất dinh dưỡng (tùy chọn):
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setNutrientFilter('none')}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                    nutrientFilter === 'none'
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Không lọc
                </button>
                <button
                  type="button"
                  onClick={() => setNutrientFilter('low-sodium')}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                    nutrientFilter === 'low-sodium'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Ít natri
                </button>
                <button
                  type="button"
                  onClick={() => setNutrientFilter('high-potassium')}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                    nutrientFilter === 'high-potassium'
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Giàu kali
                </button>
                <button
                  type="button"
                  onClick={() => setNutrientFilter('high-fiber')}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                    nutrientFilter === 'high-fiber'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Giàu xơ
                </button>
              </div>
            </div>

            {/* Level Filter */}
            {selectedDisease !== 'all' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lọc theo mức độ phù hợp:
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
                    onClick={() => setFilterLevel('avoid')}
                    className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                      filterLevel === 'avoid'
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ❌ Nên tránh
                  </button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Food List */}
        <Card>
          <CardHeader icon={Info} title={`Kết quả (${filteredFoods.length})`} />
          <CardContent>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredFoods.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-4">
                  Không tìm thấy thực phẩm nào
                </p>
              ) : (
                filteredFoods.map((food) => (
                  <button
                    key={food.id}
                    type="button"
                    onClick={() => handleFoodSelect(food)}
                    className={`w-full text-left p-3 rounded-lg border-2 transition-colors ${
                      selectedFood?.id === food.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium text-sm text-gray-900">{food.name}</div>
                    {food.nameEn && (
                      <div className="text-xs text-gray-500">{food.nameEn}</div>
                    )}
                    {selectedDisease !== 'all' && (
                      <div className="mt-1 text-xs">
                        {(() => {
                          const info = getDiseaseInfo(food, selectedDisease);
                          if (!info) return null;
                          return (
                            <span className={`inline-block px-2 py-0.5 rounded ${
                              filterLevel === 'good' ? 'bg-green-100 text-green-800' :
                              filterLevel === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                              filterLevel === 'avoid' ? 'bg-red-100 text-red-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {info.items[0]?.value}
                            </span>
                          );
                        })()}
                      </div>
                    )}
                  </button>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        {/* Food Details */}
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
                {/* Basic Info */}
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Thông tin cơ bản</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-600">Calories:</span>{' '}
                      <span className="font-medium">{selectedFood.calories} kcal</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Đạm:</span>{' '}
                      <span className="font-medium">{selectedFood.protein}g</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Carb:</span>{' '}
                      <span className="font-medium">{selectedFood.carbs}g</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Chất béo:</span>{' '}
                      <span className="font-medium">{selectedFood.fat}g</span>
                    </div>
                  </div>
                  {selectedFood.commonServing && (
                    <div className="mt-2 text-xs text-gray-600">
                      Khẩu phần thông thường: {selectedFood.commonServing}
                    </div>
                  )}
                </div>

                {/* Disease-specific Info */}
                {selectedDisease === 'all' ? (
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Thông tin theo bệnh</h4>
                    <div className="space-y-3">
                      {diseases.map((disease) => {
                        const info = getDiseaseInfo(selectedFood, disease.value);
                        if (!info) return null;
                        return (
                          <div key={disease.value} className="border-l-4 border-blue-200 pl-3">
                            <div className="font-medium text-sm text-gray-900 mb-1">
                              {disease.icon} {info.label}
                            </div>
                            <div className="space-y-1">
                              {info.items.map((item, idx) => (
                                <div key={idx} className="text-xs text-gray-700">
                                  <span className="font-medium">{item.label}:</span>{' '}
                                  <span className={`${
                                    item.color === 'red' ? 'text-red-600' :
                                    item.color === 'yellow' ? 'text-yellow-600' :
                                    'text-green-600'
                                  }`}>
                                    {item.value}
                                  </span>
                                  {'level' in item && item.level && (
                                    <span className={`ml-2 px-1.5 py-0.5 rounded text-xs ${
                                      item.color === 'red' ? 'bg-red-100 text-red-800' :
                                      item.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                                      'bg-green-100 text-green-800'
                                    }`}>
                                      {item.level}
                                    </span>
                                  )}
                                </div>
                              ))}
                            </div>
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
                      const info = getDiseaseInfo(selectedFood, selectedDisease);
                      if (!info) {
                        return (
                          <p className="text-sm text-gray-500">
                            Không có thông tin cho bệnh này
                          </p>
                        );
                      }
                      return (
                        <div className="space-y-2">
                          {info.items.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-2 bg-gray-50 rounded"
                              title={('tooltip' in item && (item as any).tooltip) || undefined}
                            >
                              <span className="text-sm font-medium text-gray-700">
                                {item.label}:
                              </span>
                              <div className="flex items-center gap-2">
                                <span
                                  className={`text-sm font-semibold ${
                                    item.color === 'red'
                                      ? 'text-red-600'
                                      : item.color === 'yellow'
                                      ? 'text-yellow-600'
                                      : 'text-green-600'
                                  }`}
                                >
                                  {item.value}
                                </span>
                                {'level' in item && item.level && (
                                  <span
                                    className={`px-2 py-0.5 rounded text-xs ${
                                      item.color === 'red'
                                        ? 'bg-red-100 text-red-800'
                                        : item.color === 'yellow'
                                        ? 'bg-yellow-100 text-yellow-800'
                                        : 'bg-green-100 text-green-800'
                                    }`}
                                  >
                                    {item.level}
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })()}
                  </div>
                )}

                {/* Notes */}
                {selectedFood.notes && (
                  <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-3">
                    <p className="text-xs text-amber-900">
                      <strong>Lưu ý:</strong> {selectedFood.notes}
                    </p>
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
