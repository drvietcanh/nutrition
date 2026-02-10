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
  purine: number; // mg
  purineLevel: 'very-high' | 'high' | 'medium' | 'low';
}

export function InteractiveSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFood, setSelectedFood] = useState<ExtendedFoodItem | null>(null);
  const [mealItems, setMealItems] = useState<MealItem[]>([]);
  const [amount, setAmount] = useState<number>(1);
  const [unit, setUnit] = useState<VietnameseUnit>('mieng');

  const filteredFoods = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const foods = searchExtendedFoods(searchQuery);
    // Chỉ hiển thị thực phẩm có thông tin về gút
    return foods.filter(food => food.gout);
  }, [searchQuery]);

  const totalPurine = useMemo(() => {
    return mealItems.reduce((sum, item) => sum + item.purine, 0);
  }, [mealItems]);

  const veryHighCount = useMemo(() => {
    return mealItems.filter(item => item.purineLevel === 'very-high').length;
  }, [mealItems]);

  const highCount = useMemo(() => {
    return mealItems.filter(item => item.purineLevel === 'high').length;
  }, [mealItems]);

  const purineLevel = useMemo(() => {
    if (veryHighCount > 0) return { level: 'very-high', label: 'Rất cao', color: 'red' };
    if (highCount > 0 || totalPurine > 200) return { level: 'high', label: 'Cao', color: 'red' };
    if (totalPurine > 100) return { level: 'medium', label: 'Trung bình', color: 'yellow' };
    return { level: 'low', label: 'Thấp', color: 'green' };
  }, [totalPurine, veryHighCount, highCount]);

  const handleAddFood = () => {
    if (!selectedFood || !selectedFood.gout) {
      toast.error('Vui lòng chọn thực phẩm có thông tin về purin');
      return;
    }

    const grams = convertToGrams(amount, unit, 'general');
    const purinePer100g = selectedFood.gout.purine;
    const purine = (purinePer100g * grams) / 100;

    const newItem: MealItem = {
      id: `${selectedFood.id}-${Date.now()}`,
      food: selectedFood,
      amount,
      unit,
      grams,
      purine,
      purineLevel: selectedFood.gout.purineLevel,
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
    } else if (
      food.category === 'meat' ||
      food.category === 'seafood' ||
      food.category === 'freshwater'
    ) {
      setUnit('mieng');
    }
  };

  const getPurineLevelColor = (level: string) => {
    switch (level) {
      case 'very-high': return 'bg-red-100 text-red-800 border-red-300';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'low': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getPurineLevelLabel = (level: string) => {
    switch (level) {
      case 'very-high': return 'Rất cao';
      case 'high': return 'Cao';
      case 'medium': return 'Trung bình';
      case 'low': return 'Thấp';
      default: return 'Không xác định';
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              {searchQuery && filteredFoods.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {filteredFoods.map((food) => (
                    <button
                      key={food.id}
                      type="button"
                      onClick={() => handleFoodSelect(food)}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                        selectedFood?.id === food.id ? 'bg-purple-50' : ''
                      }`}
                    >
                      <div className="font-medium text-sm">{food.name}</div>
                      {food.gout && (
                        <div className="text-xs text-gray-500">
                          Purin: {food.gout.purine}mg/100g ({getPurineLevelLabel(food.gout.purineLevel)})
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Selected Food and Amount */}
            {selectedFood && selectedFood.gout && (
              <div className="space-y-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div>
                  <div className="font-medium text-gray-900">{selectedFood.name}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Purin: {selectedFood.gout.purine}mg/100g
                    <span className={`ml-2 px-2 py-0.5 rounded text-xs ${getPurineLevelColor(selectedFood.gout.purineLevel)}`}>
                      {getPurineLevelLabel(selectedFood.gout.purineLevel)}
                    </span>
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Đơn vị
                    </label>
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value as VietnameseUnit)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
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
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
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
                        Purin: {item.purine.toFixed(0)}mg
                        <span className={`ml-2 px-2 py-0.5 rounded text-xs ${getPurineLevelColor(item.purineLevel)}`}>
                          {getPurineLevelLabel(item.purineLevel)}
                        </span>
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
                  <span className="font-medium text-gray-700">Tổng Purin:</span>
                  <span className="font-semibold text-gray-900">{totalPurine.toFixed(0)}mg</span>
                </div>
                
                {(veryHighCount > 0 || highCount > 0) && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="text-sm text-red-900">
                      <strong>Cảnh báo:</strong>
                      {veryHighCount > 0 && (
                        <span className="ml-2">
                          Có {veryHighCount} thực phẩm có purin rất cao - nên tránh hoàn toàn!
                        </span>
                      )}
                      {highCount > 0 && (
                        <span className="ml-2">
                          Có {highCount} thực phẩm có purin cao - nên hạn chế nghiêm ngặt!
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className={`p-3 rounded-lg border-2 ${
                  purineLevel.color === 'red' ? 'bg-red-50 border-red-200' :
                  purineLevel.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
                  'bg-green-50 border-green-200'
                }`}>
                  <div className="flex items-center gap-2">
                    {purineLevel.color === 'red' ? (
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    ) : purineLevel.color === 'yellow' ? (
                      <Info className="w-5 h-5 text-yellow-600" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                    <div>
                      <div className={`font-semibold ${
                        purineLevel.color === 'red' ? 'text-red-900' :
                        purineLevel.color === 'yellow' ? 'text-yellow-900' :
                        'text-green-900'
                      }`}>
                        Purin {purineLevel.label}
                      </div>
                      <div className={`text-sm mt-1 ${
                        purineLevel.color === 'red' ? 'text-red-700' :
                        purineLevel.color === 'yellow' ? 'text-yellow-700' :
                        'text-green-700'
                      }`}>
                        {purineLevel.level === 'very-high' && '⚠️ Rất nguy hiểm! Bữa ăn này có nhiều purin rất cao. Nên tránh hoàn toàn các thực phẩm này.'}
                        {purineLevel.level === 'high' && '⚠️ Cao! Nên hạn chế nghiêm ngặt. Chỉ ăn 1-2 lần/tuần với lượng nhỏ.'}
                        {purineLevel.level === 'medium' && '✓ Trung bình. Có thể ăn vừa phải (2-3 lần/tuần).'}
                        {purineLevel.level === 'low' && '✓ Tốt! Bữa ăn này có ít purin, an toàn cho người bị gút.'}
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
        <CardHeader icon={Info} title="Mẹo Giảm Purin trong Bữa Ăn" />
        <CardContent>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Tránh nội tạng:</strong> Gan, thận, tim có purin rất cao - tuyệt đối không ăn</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Hạn chế thịt đỏ và hải sản:</strong> Chỉ ăn 1-2 lần/tuần với lượng nhỏ</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Luộc thịt/cá:</strong> Luộc rồi bỏ nước luộc - purin sẽ hòa tan vào nước, giảm được một phần</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Chọn cá đồng:</strong> Cá đồng (cá lóc, cá rô) có ít purin hơn cá biển</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Chọn đạm thực vật:</strong> Đậu phụ, đậu các loại có ít purin hơn thịt</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Uống nhiều nước:</strong> 2-3 lít nước/ngày giúp đào thải acid uric</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Tránh rượu bia:</strong> Đặc biệt là bia - làm tăng acid uric và giảm đào thải</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
