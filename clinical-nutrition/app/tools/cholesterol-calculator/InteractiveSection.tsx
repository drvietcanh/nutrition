"use client";

import { useState, useMemo } from "react";
import { Plus, X, Calculator, AlertCircle, CheckCircle, Info } from "lucide-react";
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

interface MealItem {
  id: string;
  food: ExtendedFoodItem;
  amount: number;
  unit: VietnameseUnit;
  grams: number;
  cholesterol: number; // mg
  saturatedFat: number; // g
}

const CHOLESTEROL_RECOMMENDATION = 200; // mg/ngày
const SATURATED_FAT_RECOMMENDATION = 20; // g/ngày (cho người ăn 2000 calo)

export function InteractiveSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFood, setSelectedFood] = useState<ExtendedFoodItem | null>(null);
  const [mealItems, setMealItems] = useState<MealItem[]>([]);
  const [amount, setAmount] = useState<number>(1);
  const [unit, setUnit] = useState<VietnameseUnit>('mieng');

  const filteredFoods = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const foods = searchExtendedFoods(searchQuery);
    // Chỉ hiển thị thực phẩm có thông tin về tim mạch
    return foods.filter(food => food.cardiovascular);
  }, [searchQuery]);

  const totalCholesterol = useMemo(() => {
    return mealItems.reduce((sum, item) => sum + item.cholesterol, 0);
  }, [mealItems]);

  const totalSaturatedFat = useMemo(() => {
    return mealItems.reduce((sum, item) => sum + item.saturatedFat, 0);
  }, [mealItems]);

  const cholesterolLevel = useMemo(() => {
    const percentage = (totalCholesterol / CHOLESTEROL_RECOMMENDATION) * 100;
    if (percentage >= 100) return { level: 'exceeded', label: 'Vượt ngưỡng', color: 'red' };
    if (percentage >= 80) return { level: 'high', label: 'Cao', color: 'red' };
    if (percentage >= 60) return { level: 'medium', label: 'Trung bình', color: 'yellow' };
    return { level: 'low', label: 'Thấp', color: 'green' };
  }, [totalCholesterol]);

  const saturatedFatLevel = useMemo(() => {
    const percentage = (totalSaturatedFat / SATURATED_FAT_RECOMMENDATION) * 100;
    if (percentage >= 100) return { level: 'exceeded', label: 'Vượt ngưỡng', color: 'red' };
    if (percentage >= 80) return { level: 'high', label: 'Cao', color: 'red' };
    if (percentage >= 60) return { level: 'medium', label: 'Trung bình', color: 'yellow' };
    return { level: 'low', label: 'Thấp', color: 'green' };
  }, [totalSaturatedFat]);

  const handleAddFood = () => {
    if (!selectedFood || !selectedFood.cardiovascular) {
      toast.error('Vui lòng chọn thực phẩm có thông tin về cholesterol và chất béo');
      return;
    }

    const grams = convertToGrams(amount, unit, 'general');
    const cholPer100g = selectedFood.cardiovascular.cholesterol;
    const satFatPer100g = selectedFood.cardiovascular.saturatedFat;
    const cholesterol = (cholPer100g * grams) / 100;
    const saturatedFat = (satFatPer100g * grams) / 100;

    const newItem: MealItem = {
      id: `${selectedFood.id}-${Date.now()}`,
      food: selectedFood,
      amount,
      unit,
      grams,
      cholesterol,
      saturatedFat,
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

  return (
    <div className="space-y-6">
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              {searchQuery && filteredFoods.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {filteredFoods.map((food) => (
                    <button
                      key={food.id}
                      type="button"
                      onClick={() => handleFoodSelect(food)}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                        selectedFood?.id === food.id ? 'bg-red-50' : ''
                      }`}
                    >
                      <div className="font-medium text-sm">{food.name}</div>
                      {food.cardiovascular && (
                        <div className="text-xs text-gray-500">
                          Cholesterol: {food.cardiovascular.cholesterol}mg/100g, 
                          Chất béo bão hòa: {food.cardiovascular.saturatedFat}g/100g
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Selected Food and Amount */}
            {selectedFood && selectedFood.cardiovascular && (
              <div className="space-y-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <div>
                  <div className="font-medium text-gray-900">{selectedFood.name}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Cholesterol: {selectedFood.cardiovascular.cholesterol}mg/100g, 
                    Chất béo bão hòa: {selectedFood.cardiovascular.saturatedFat}g/100g
                  </div>
                </div>

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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Đơn vị
                    </label>
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value as VietnameseUnit)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
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
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
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
        <Card>
          <CardHeader icon={Calculator} title="Bữa Ăn của Bạn" />
          <CardContent>
            <div className="space-y-4">
              {/* Items List */}
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
                        {formatAmount(item.amount, item.unit)} ({item.grams.toFixed(0)}g) - 
                        Cholesterol: {item.cholesterol.toFixed(0)}mg, 
                        Chất béo bão hòa: {item.saturatedFat.toFixed(1)}g
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

              {/* Summary */}
              <div className="border-t pt-4 space-y-4">
                {/* Cholesterol */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Tổng Cholesterol:</span>
                    <span className="font-semibold text-gray-900">{totalCholesterol.toFixed(0)}mg</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Khuyến nghị:</span>
                    <span className="text-sm text-gray-600">&lt; {CHOLESTEROL_RECOMMENDATION}mg/ngày</span>
                  </div>
                  <div className={`p-3 rounded-lg border-2 ${
                    cholesterolLevel.color === 'red' ? 'bg-red-50 border-red-200' :
                    cholesterolLevel.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
                    'bg-green-50 border-green-200'
                  }`}>
                    <div className="flex items-center gap-2">
                      {cholesterolLevel.color === 'red' ? (
                        <AlertCircle className="w-5 h-5 text-red-600" />
                      ) : cholesterolLevel.color === 'yellow' ? (
                        <Info className="w-5 h-5 text-yellow-600" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      )}
                      <div>
                        <div className={`font-semibold ${
                          cholesterolLevel.color === 'red' ? 'text-red-900' :
                          cholesterolLevel.color === 'yellow' ? 'text-yellow-900' :
                          'text-green-900'
                        }`}>
                          Cholesterol {cholesterolLevel.label}
                        </div>
                        <div className={`text-sm mt-1 ${
                          cholesterolLevel.color === 'red' ? 'text-red-700' :
                          cholesterolLevel.color === 'yellow' ? 'text-yellow-700' :
                          'text-green-700'
                        }`}>
                          {cholesterolLevel.level === 'exceeded' && '⚠️ Vượt quá khuyến nghị! Nên giảm cholesterol trong các bữa khác.'}
                          {cholesterolLevel.level === 'high' && '⚠️ Gần đạt giới hạn. Nên cẩn thận với các bữa còn lại.'}
                          {cholesterolLevel.level === 'medium' && '✓ Chấp nhận được. Vẫn còn khoảng trống cho các bữa khác.'}
                          {cholesterolLevel.level === 'low' && '✓ Tốt! Bữa ăn này có ít cholesterol.'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Saturated Fat */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Tổng Chất béo Bão hòa:</span>
                    <span className="font-semibold text-gray-900">{totalSaturatedFat.toFixed(1)}g</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Khuyến nghị:</span>
                    <span className="text-sm text-gray-600">&lt; {SATURATED_FAT_RECOMMENDATION}g/ngày</span>
                  </div>
                  <div className={`p-3 rounded-lg border-2 ${
                    saturatedFatLevel.color === 'red' ? 'bg-red-50 border-red-200' :
                    saturatedFatLevel.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
                    'bg-green-50 border-green-200'
                  }`}>
                    <div className="flex items-center gap-2">
                      {saturatedFatLevel.color === 'red' ? (
                        <AlertCircle className="w-5 h-5 text-red-600" />
                      ) : saturatedFatLevel.color === 'yellow' ? (
                        <Info className="w-5 h-5 text-yellow-600" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      )}
                      <div>
                        <div className={`font-semibold ${
                          saturatedFatLevel.color === 'red' ? 'text-red-900' :
                          saturatedFatLevel.color === 'yellow' ? 'text-yellow-900' :
                          'text-green-900'
                        }`}>
                          Chất béo Bão hòa {saturatedFatLevel.label}
                        </div>
                        <div className={`text-sm mt-1 ${
                          saturatedFatLevel.color === 'red' ? 'text-red-700' :
                          saturatedFatLevel.color === 'yellow' ? 'text-yellow-700' :
                          'text-green-700'
                        }`}>
                          {saturatedFatLevel.level === 'exceeded' && '⚠️ Vượt quá khuyến nghị! Nên giảm chất béo bão hòa trong các bữa khác.'}
                          {saturatedFatLevel.level === 'high' && '⚠️ Gần đạt giới hạn. Nên cẩn thận với các bữa còn lại.'}
                          {saturatedFatLevel.level === 'medium' && '✓ Chấp nhận được. Vẫn còn khoảng trống cho các bữa khác.'}
                          {saturatedFatLevel.level === 'low' && '✓ Tốt! Bữa ăn này có ít chất béo bão hòa.'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tips */}
      <Card>
        <CardHeader icon={Info} title="Mẹo Giảm Cholesterol và Chất béo Bão hòa" />
        <CardContent>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Chọn thịt nạc:</strong> Bỏ mỡ, bỏ da gà trước khi nấu</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Ăn cá thay thịt:</strong> Cá có ít cholesterol và chất béo bão hòa hơn thịt, có omega-3</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Dùng dầu thực vật:</strong> Dầu đậu nành, dầu hướng dương thay vì mỡ động vật</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Hạn chế nội tạng:</strong> Gan, thận, tim có cholesterol rất cao</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Ăn đậu phụ:</strong> Đạm thực vật không có cholesterol</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Chọn sữa ít béo:</strong> Sữa tách béo, sữa chua ít béo</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Trứng:</strong> Có thể ăn nhưng hạn chế lòng đỏ (1-2 lòng đỏ/tuần), lòng trắng ăn tự do</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
