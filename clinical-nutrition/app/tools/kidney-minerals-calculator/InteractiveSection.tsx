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
  potassium: number; // mg
  phosphorus: number; // mg
}

const CKD_STAGES = {
  stage3: { phosphorus: 1000, potassium: 3000 },
  stage4: { phosphorus: 800, potassium: 2000 },
  stage5: { phosphorus: 800, potassium: 2000 },
};

export function InteractiveSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFood, setSelectedFood] = useState<ExtendedFoodItem | null>(null);
  const [mealItems, setMealItems] = useState<MealItem[]>([]);
  const [amount, setAmount] = useState<number>(1);
  const [unit, setUnit] = useState<VietnameseUnit>('mieng');
  const [ckdStage, setCkdStage] = useState<'stage3' | 'stage4' | 'stage5'>('stage3');

  const filteredFoods = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const foods = searchExtendedFoods(searchQuery);
    // Chỉ hiển thị thực phẩm có thông tin về bệnh thận
    return foods.filter(food => food.kidney);
  }, [searchQuery]);

  const totalPotassium = useMemo(() => {
    return mealItems.reduce((sum, item) => sum + item.potassium, 0);
  }, [mealItems]);

  const totalPhosphorus = useMemo(() => {
    return mealItems.reduce((sum, item) => sum + item.phosphorus, 0);
  }, [mealItems]);

  const recommendations = CKD_STAGES[ckdStage];

  const potassiumLevel = useMemo(() => {
    const percentage = (totalPotassium / recommendations.potassium) * 100;
    if (percentage >= 100) return { level: 'exceeded', label: 'Vượt ngưỡng', color: 'red' };
    if (percentage >= 80) return { level: 'high', label: 'Cao', color: 'red' };
    if (percentage >= 60) return { level: 'medium', label: 'Trung bình', color: 'yellow' };
    return { level: 'low', label: 'Thấp', color: 'green' };
  }, [totalPotassium, recommendations.potassium]);

  const phosphorusLevel = useMemo(() => {
    const percentage = (totalPhosphorus / recommendations.phosphorus) * 100;
    if (percentage >= 100) return { level: 'exceeded', label: 'Vượt ngưỡng', color: 'red' };
    if (percentage >= 80) return { level: 'high', label: 'Cao', color: 'red' };
    if (percentage >= 60) return { level: 'medium', label: 'Trung bình', color: 'yellow' };
    return { level: 'low', label: 'Thấp', color: 'green' };
  }, [totalPhosphorus, recommendations.phosphorus]);

  const handleAddFood = () => {
    if (!selectedFood || !selectedFood.kidney) {
      toast.error('Vui lòng chọn thực phẩm có thông tin về kali và phốt pho');
      return;
    }

    const grams = convertToGrams(amount, unit, 'general');
    const kPer100g = selectedFood.kidney.potassium;
    const pPer100g = selectedFood.kidney.phosphorus;
    const potassium = (kPer100g * grams) / 100;
    const phosphorus = (pPer100g * grams) / 100;

    const newItem: MealItem = {
      id: `${selectedFood.id}-${Date.now()}`,
      food: selectedFood,
      amount,
      unit,
      grams,
      potassium,
      phosphorus,
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
      {/* Settings */}
      <Card>
        <CardHeader icon={Info} title="Thiết lập" />
        <CardContent>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Giai đoạn CKD:
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setCkdStage('stage3')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  ckdStage === 'stage3'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Giai đoạn 3
              </button>
              <button
                type="button"
                onClick={() => setCkdStage('stage4')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  ckdStage === 'stage4'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Giai đoạn 4
              </button>
              <button
                type="button"
                onClick={() => setCkdStage('stage5')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  ckdStage === 'stage5'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Giai đoạn 5
              </button>
            </div>
            <div className="mt-3 text-sm text-gray-600">
              Khuyến nghị: Phốt pho &lt; {recommendations.phosphorus}mg/ngày, 
              Kali &lt; {recommendations.potassium}mg/ngày
            </div>
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              {searchQuery && filteredFoods.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {filteredFoods.map((food) => (
                    <button
                      key={food.id}
                      type="button"
                      onClick={() => handleFoodSelect(food)}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                        selectedFood?.id === food.id ? 'bg-green-50' : ''
                      }`}
                    >
                      <div className="font-medium text-sm">{food.name}</div>
                      {food.kidney && (
                        <div className="text-xs text-gray-500">
                          Kali: {food.kidney.potassium}mg/100g, Phốt pho: {food.kidney.phosphorus}mg/100g
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Selected Food and Amount */}
            {selectedFood && selectedFood.kidney && (
              <div className="space-y-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <div>
                  <div className="font-medium text-gray-900">{selectedFood.name}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Kali: {selectedFood.kidney.potassium}mg/100g, 
                    Phốt pho: {selectedFood.kidney.phosphorus}mg/100g
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Đơn vị
                    </label>
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value as VietnameseUnit)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
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
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
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
                        Kali: {item.potassium.toFixed(0)}mg, Phốt pho: {item.phosphorus.toFixed(0)}mg
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
                {/* Potassium */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Tổng Kali:</span>
                    <span className="font-semibold text-gray-900">{totalPotassium.toFixed(0)}mg</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Khuyến nghị:</span>
                    <span className="text-sm text-gray-600">&lt; {recommendations.potassium.toLocaleString()}mg/ngày</span>
                  </div>
                  <div className={`p-3 rounded-lg border-2 ${
                    potassiumLevel.color === 'red' ? 'bg-red-50 border-red-200' :
                    potassiumLevel.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
                    'bg-green-50 border-green-200'
                  }`}>
                    <div className="flex items-center gap-2">
                      {potassiumLevel.color === 'red' ? (
                        <AlertCircle className="w-5 h-5 text-red-600" />
                      ) : potassiumLevel.color === 'yellow' ? (
                        <Info className="w-5 h-5 text-yellow-600" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      )}
                      <div>
                        <div className={`font-semibold ${
                          potassiumLevel.color === 'red' ? 'text-red-900' :
                          potassiumLevel.color === 'yellow' ? 'text-yellow-900' :
                          'text-green-900'
                        }`}>
                          Kali {potassiumLevel.label}
                        </div>
                        <div className={`text-sm mt-1 ${
                          potassiumLevel.color === 'red' ? 'text-red-700' :
                          potassiumLevel.color === 'yellow' ? 'text-yellow-700' :
                          'text-green-700'
                        }`}>
                          {potassiumLevel.level === 'exceeded' && '⚠️ Vượt quá khuyến nghị! Nên giảm kali trong các bữa khác.'}
                          {potassiumLevel.level === 'high' && '⚠️ Gần đạt giới hạn. Nên cẩn thận với các bữa còn lại.'}
                          {potassiumLevel.level === 'medium' && '✓ Chấp nhận được. Vẫn còn khoảng trống cho các bữa khác.'}
                          {potassiumLevel.level === 'low' && '✓ Tốt! Bữa ăn này có ít kali.'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phosphorus */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Tổng Phốt pho:</span>
                    <span className="font-semibold text-gray-900">{totalPhosphorus.toFixed(0)}mg</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Khuyến nghị:</span>
                    <span className="text-sm text-gray-600">&lt; {recommendations.phosphorus}mg/ngày</span>
                  </div>
                  <div className={`p-3 rounded-lg border-2 ${
                    phosphorusLevel.color === 'red' ? 'bg-red-50 border-red-200' :
                    phosphorusLevel.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
                    'bg-green-50 border-green-200'
                  }`}>
                    <div className="flex items-center gap-2">
                      {phosphorusLevel.color === 'red' ? (
                        <AlertCircle className="w-5 h-5 text-red-600" />
                      ) : phosphorusLevel.color === 'yellow' ? (
                        <Info className="w-5 h-5 text-yellow-600" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      )}
                      <div>
                        <div className={`font-semibold ${
                          phosphorusLevel.color === 'red' ? 'text-red-900' :
                          phosphorusLevel.color === 'yellow' ? 'text-yellow-900' :
                          'text-green-900'
                        }`}>
                          Phốt pho {phosphorusLevel.label}
                        </div>
                        <div className={`text-sm mt-1 ${
                          phosphorusLevel.color === 'red' ? 'text-red-700' :
                          phosphorusLevel.color === 'yellow' ? 'text-yellow-700' :
                          'text-green-700'
                        }`}>
                          {phosphorusLevel.level === 'exceeded' && '⚠️ Vượt quá khuyến nghị! Nên giảm phốt pho trong các bữa khác.'}
                          {phosphorusLevel.level === 'high' && '⚠️ Gần đạt giới hạn. Nên cẩn thận với các bữa còn lại.'}
                          {phosphorusLevel.level === 'medium' && '✓ Chấp nhận được. Vẫn còn khoảng trống cho các bữa khác.'}
                          {phosphorusLevel.level === 'low' && '✓ Tốt! Bữa ăn này có ít phốt pho.'}
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
        <CardHeader icon={Info} title="Mẹo Giảm Kali và Phốt pho" />
        <CardContent>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Giảm kali trong rau củ:</strong> Ngâm rau củ 2-3 giờ trước khi nấu, luộc bỏ nước đầu, luộc lại lần 2</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Gọt vỏ khoai:</strong> Gọt vỏ khoai tây, khoai lang trước khi nấu</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Chọn gạo trắng:</strong> Gạo trắng ít phốt pho hơn gạo lứt</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Hạn chế đậu:</strong> Đậu có kali và phốt pho rất cao</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Thuốc gắn phốt pho:</strong> Uống cùng bữa ăn để giảm hấp thu phốt pho</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Chỉ hạn chế khi cần:</strong> Chỉ hạn chế kali/phốt pho khi máu tăng, không nên kiêng máy móc</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
