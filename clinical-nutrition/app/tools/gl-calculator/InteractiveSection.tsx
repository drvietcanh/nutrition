"use client";

import { useState, useMemo } from "react";
import { Plus, X, Calculator, AlertCircle, CheckCircle, Info } from "lucide-react";
import { Card, CardHeader, CardContent } from "../../components/Card";
import {
  searchExtendedFoods,
  getExtendedFoodById,
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
  carb: number;
  gi: number;
  gl: number;
}

export function InteractiveSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFood, setSelectedFood] = useState<ExtendedFoodItem | null>(null);
  const [mealItems, setMealItems] = useState<MealItem[]>([]);
  const [amount, setAmount] = useState<number>(1);
  const [unit, setUnit] = useState<VietnameseUnit>('bat');

  const filteredFoods = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const foods = searchExtendedFoods(searchQuery);
    // Chỉ hiển thị thực phẩm có thông tin về đái tháo đường
    return foods.filter(food => food.diabetes);
  }, [searchQuery]);

  const totalGL = useMemo(() => {
    return mealItems.reduce((sum, item) => sum + item.gl, 0);
  }, [mealItems]);

  const totalCarb = useMemo(() => {
    return mealItems.reduce((sum, item) => sum + item.carb, 0);
  }, [mealItems]);

  const glLevel = useMemo(() => {
    if (totalGL <= 10) return { level: 'low', label: 'Thấp', color: 'green' };
    if (totalGL <= 19) return { level: 'medium', label: 'Trung bình', color: 'yellow' };
    return { level: 'high', label: 'Cao', color: 'red' };
  }, [totalGL]);

  const handleAddFood = () => {
    if (!selectedFood || !selectedFood.diabetes) {
      toast.error('Vui lòng chọn thực phẩm có thông tin về đái tháo đường');
      return;
    }

    const grams = convertToGrams(amount, unit, 'general');
    const carbPer100g = selectedFood.carbs;
    const carb = (carbPer100g * grams) / 100;
    const gi = selectedFood.diabetes.glycemicIndex || 0;
    const gl = (gi * carb) / 100;

    const newItem: MealItem = {
      id: `${selectedFood.id}-${Date.now()}`,
      food: selectedFood,
      amount,
      unit,
      grams,
      carb,
      gi,
      gl,
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
    // Tự động set unit phù hợp
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
                      {food.diabetes && (
                        <div className="text-xs text-gray-500">
                          GI: {food.diabetes.glycemicIndex || 'N/A'}, 
                          Carb: {food.carbs}g/100g
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Selected Food and Amount */}
            {selectedFood && (
              <div className="space-y-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div>
                  <div className="font-medium text-gray-900">{selectedFood.name}</div>
                  {selectedFood.diabetes && (
                    <div className="text-sm text-gray-600 mt-1">
                      GI: {selectedFood.diabetes.glycemicIndex || 'N/A'}, 
                      Carb: {selectedFood.carbs}g/100g
                    </div>
                  )}
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
                        Carb: {item.carb.toFixed(1)}g, GI: {item.gi}, GL: {item.gl.toFixed(1)}
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
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Tổng Carbohydrate:</span>
                  <span className="font-semibold text-gray-900">{totalCarb.toFixed(1)}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Tổng GL:</span>
                  <span className={`font-semibold text-lg ${
                    glLevel.color === 'red' ? 'text-red-600' :
                    glLevel.color === 'yellow' ? 'text-yellow-600' :
                    'text-green-600'
                  }`}>
                    {totalGL.toFixed(1)}
                  </span>
                </div>
                <div className={`p-3 rounded-lg border-2 ${
                  glLevel.color === 'red' ? 'bg-red-50 border-red-200' :
                  glLevel.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
                  'bg-green-50 border-green-200'
                }`}>
                  <div className="flex items-center gap-2">
                    {glLevel.color === 'red' ? (
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    ) : glLevel.color === 'yellow' ? (
                      <Info className="w-5 h-5 text-yellow-600" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                    <div>
                      <div className={`font-semibold ${
                        glLevel.color === 'red' ? 'text-red-900' :
                        glLevel.color === 'yellow' ? 'text-yellow-900' :
                        'text-green-900'
                      }`}>
                        GL {glLevel.label} ({glLevel.level === 'low' ? '≤10' : glLevel.level === 'medium' ? '11-19' : '≥20'})
                      </div>
                      <div className={`text-sm mt-1 ${
                        glLevel.color === 'red' ? 'text-red-700' :
                        glLevel.color === 'yellow' ? 'text-yellow-700' :
                        'text-green-700'
                      }`}>
                        {glLevel.level === 'low' && 'Tốt! Đường huyết sẽ tăng chậm và ổn định.'}
                        {glLevel.level === 'medium' && 'Chấp nhận được. Nên kết hợp với rau và đạm để giảm GL tổng thể.'}
                        {glLevel.level === 'high' && 'Cao! Nên giảm lượng hoặc thay thế bằng thực phẩm có GI thấp hơn.'}
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
        <CardHeader icon={Info} title="Mẹo Giảm GL trong Bữa Ăn" />
        <CardContent>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Kết hợp thực phẩm:</strong> Ăn thực phẩm GI cao cùng với rau và đạm → GL tổng thể thấp hơn</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Thứ tự ăn:</strong> Ăn rau và đạm trước, sau đó mới ăn cơm → đường huyết tăng chậm hơn</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Chọn thực phẩm GI thấp-trung bình:</strong> Gạo lứt, bún, phở tốt hơn cơm trắng</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Giảm khẩu phần:</strong> Ăn ít hơn một chút cơm, thay bằng nhiều rau hơn</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Theo dõi đường huyết:</strong> Mỗi người phản ứng khác nhau, nên đo đường huyết sau ăn để điều chỉnh</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
