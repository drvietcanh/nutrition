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
  sodium: number; // mg
}

const SODIUM_RECOMMENDATION_NORMAL = 2300; // mg/ngày
const SODIUM_RECOMMENDATION_HYPERTENSION = 1500; // mg/ngày

export function InteractiveSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFood, setSelectedFood] = useState<ExtendedFoodItem | null>(null);
  const [mealItems, setMealItems] = useState<MealItem[]>([]);
  const [amount, setAmount] = useState<number>(1);
  const [unit, setUnit] = useState<VietnameseUnit>('thia-canh');
  const [hasHypertension, setHasHypertension] = useState<boolean>(true);

  const filteredFoods = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchExtendedFoods(searchQuery);
  }, [searchQuery]);

  const totalSodium = useMemo(() => {
    return mealItems.reduce((sum, item) => sum + item.sodium, 0);
  }, [mealItems]);

  const recommendation = hasHypertension 
    ? SODIUM_RECOMMENDATION_HYPERTENSION 
    : SODIUM_RECOMMENDATION_NORMAL;

  const sodiumLevel = useMemo(() => {
    const percentage = (totalSodium / recommendation) * 100;
    if (percentage >= 100) return { level: 'exceeded', label: 'Vượt ngưỡng', color: 'red' };
    if (percentage >= 80) return { level: 'high', label: 'Cao', color: 'red' };
    if (percentage >= 60) return { level: 'medium', label: 'Trung bình', color: 'yellow' };
    return { level: 'low', label: 'Thấp', color: 'green' };
  }, [totalSodium, recommendation]);

  const handleAddFood = () => {
    if (!selectedFood) {
      toast.error('Vui lòng chọn thực phẩm');
      return;
    }

    const grams = convertToGrams(amount, unit, 'general');
    const sodiumPer100g = selectedFood.sodium || 0;
    const sodium = (sodiumPer100g * grams) / 100;

    const newItem: MealItem = {
      id: `${selectedFood.id}-${Date.now()}`,
      food: selectedFood,
      amount,
      unit,
      grams,
      sodium,
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
    } else if (food.category === 'condiments') {
      setUnit('thia-canh');
    }
  };

  return (
    <div className="space-y-6">
      {/* Settings */}
      <Card>
        <CardHeader icon={Info} title="Thiết lập" />
        <CardContent>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={hasHypertension}
                onChange={(e) => setHasHypertension(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">
                Tôi bị tăng huyết áp (khuyến nghị: &lt; 1,500mg natri/ngày)
              </span>
            </label>
          </div>
          <div className="mt-2 text-xs text-gray-600">
            Khuyến nghị: {hasHypertension ? '1,500mg' : '2,300mg'} natri/ngày
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
                      <div className="text-xs text-gray-500">
                        Natri: {food.sodium || 0}mg/100g
                      </div>
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
                  <div className="text-sm text-gray-600 mt-1">
                    Natri: {selectedFood.sodium || 0}mg/100g
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
                      <option value="thia-canh">Muỗng canh</option>
                      <option value="thia-ca-phe">Muỗng cà phê</option>
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
                        Natri: {item.sodium.toFixed(0)}mg
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
                  <span className="font-medium text-gray-700">Tổng Natri:</span>
                  <span className="font-semibold text-gray-900">{totalSodium.toFixed(0)}mg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Khuyến nghị:</span>
                  <span className="font-semibold text-gray-900">{recommendation.toLocaleString()}mg/ngày</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Tỷ lệ:</span>
                  <span className={`font-semibold ${
                    sodiumLevel.color === 'red' ? 'text-red-600' :
                    sodiumLevel.color === 'yellow' ? 'text-yellow-600' :
                    'text-green-600'
                  }`}>
                    {((totalSodium / recommendation) * 100).toFixed(0)}%
                  </span>
                </div>
                <div className={`p-3 rounded-lg border-2 ${
                  sodiumLevel.color === 'red' ? 'bg-red-50 border-red-200' :
                  sodiumLevel.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
                  'bg-green-50 border-green-200'
                }`}>
                  <div className="flex items-center gap-2">
                    {sodiumLevel.color === 'red' ? (
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    ) : sodiumLevel.color === 'yellow' ? (
                      <Info className="w-5 h-5 text-yellow-600" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                    <div>
                      <div className={`font-semibold ${
                        sodiumLevel.color === 'red' ? 'text-red-900' :
                        sodiumLevel.color === 'yellow' ? 'text-yellow-900' :
                        'text-green-900'
                      }`}>
                        Natri {sodiumLevel.label}
                      </div>
                      <div className={`text-sm mt-1 ${
                        sodiumLevel.color === 'red' ? 'text-red-700' :
                        sodiumLevel.color === 'yellow' ? 'text-yellow-700' :
                        'text-green-700'
                      }`}>
                        {sodiumLevel.level === 'exceeded' && '⚠️ Đã vượt quá khuyến nghị! Nên giảm natri trong các bữa khác.'}
                        {sodiumLevel.level === 'high' && '⚠️ Gần đạt giới hạn. Nên cẩn thận với các bữa còn lại.'}
                        {sodiumLevel.level === 'medium' && '✓ Chấp nhận được. Vẫn còn khoảng trống cho các bữa khác.'}
                        {sodiumLevel.level === 'low' && '✓ Tốt! Bữa ăn này có ít natri.'}
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
        <CardHeader icon={Info} title="Mẹo Giảm Natri trong Bữa Ăn" />
        <CardContent>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Nấu ăn tại nhà:</strong> Kiểm soát được lượng muối và nước mắm</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Dùng gia vị thay muối:</strong> Tỏi, gừng, sả, nghệ tạo hương vị đậm đà mà không cần nhiều muối</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Hạn chế thực phẩm chế biến:</strong> Mì tôm, đồ hộp, thịt nguội có rất nhiều natri</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Giảm nước mắm, nước tương:</strong> Chỉ dùng 1-2 thìa canh/ngày, hoặc pha loãng</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Đọc nhãn thực phẩm:</strong> Chọn sản phẩm có ít hơn 300mg natri/100g</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Không chấm thêm muối:</strong> Khi ăn, không nên chấm thêm muối, nước mắm</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
