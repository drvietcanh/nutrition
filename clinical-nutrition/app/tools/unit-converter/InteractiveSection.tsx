"use client";

import { useState, useMemo } from "react";
import { Calculator, ArrowRight, ArrowLeft, Info } from "lucide-react";
import { Card, CardHeader, CardContent } from "../../components/Card";
import {
  convertToGrams,
  convertFromGrams,
  getAvailableUnits,
  getUnitDescription,
  formatAmount,
  type VietnameseUnit,
} from "../../../lib/unit-converter";

const categories = [
  { value: 'general', label: 'Chung', description: 'Đơn vị chung cho mọi loại thực phẩm' },
  { value: 'rice', label: 'Cơm & Ngũ cốc', description: 'Bát cơm, gạo...' },
  { value: 'noodles', label: 'Bún & Phở', description: 'Tô bún, phở...' },
  { value: 'meat-fish', label: 'Thịt & Cá', description: 'Miếng thịt, cá...' },
  { value: 'vegetables', label: 'Rau củ', description: 'Bó rau, củ...' },
  { value: 'fruits', label: 'Trái cây', description: 'Quả...' },
  { value: 'liquids', label: 'Chất lỏng', description: 'Nước mắm, dầu, nước...' },
  { value: 'dishes', label: 'Món ăn', description: 'Đĩa, tô món ăn...' },
];

export function InteractiveSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('general');
  const [fromAmount, setFromAmount] = useState<number>(1);
  const [fromUnit, setFromUnit] = useState<VietnameseUnit>('bat');
  const [toUnit, setToUnit] = useState<VietnameseUnit>('gram');

  const availableUnits = useMemo(() => {
    return getAvailableUnits(selectedCategory);
  }, [selectedCategory]);

  // Tự động chọn đơn vị đầu tiên khi đổi category
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const units = getAvailableUnits(category);
    if (units.length > 0) {
      setFromUnit(units[0].unit);
      // Nếu toUnit không có trong category mới, đổi sang gram
      if (!units.find(u => u.unit === toUnit)) {
        setToUnit('gram');
      }
    }
  };

  // Tính toán chuyển đổi
  const result = useMemo(() => {
    try {
      // Chuyển từ đơn vị nguồn sang gram
      const grams = convertToGrams(fromAmount, fromUnit, selectedCategory);
      
      // Chuyển từ gram sang đơn vị đích
      const converted = convertFromGrams(grams, toUnit, selectedCategory);
      
      return {
        grams,
        converted,
        isValid: true,
      };
    } catch (error) {
      return {
        grams: 0,
        converted: 0,
        isValid: false,
      };
    }
  }, [fromAmount, fromUnit, toUnit, selectedCategory]);

  return (
    <div className="space-y-6">
      {/* Category Selection */}
      <Card>
        <CardHeader icon={Info} title="Chọn Loại Thực phẩm" />
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => handleCategoryChange(cat.value)}
                className={`p-3 rounded-lg border-2 transition-colors text-left ${
                  selectedCategory === cat.value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-medium text-sm text-gray-900">{cat.label}</div>
                <div className="text-xs text-gray-600 mt-1">{cat.description}</div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Converter */}
      <Card>
        <CardHeader icon={Calculator} title="Chuyển đổi" />
        <CardContent>
          <div className="space-y-6">
            {/* From */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Từ
              </label>
              <div className="flex gap-3 items-end">
                <div className="flex-1">
                  <input
                    type="number"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(parseFloat(e.target.value) || 0)}
                    min="0"
                    step="0.1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Số lượng"
                  />
                </div>
                <div className="flex-1">
                  <select
                    value={fromUnit}
                    onChange={(e) => setFromUnit(e.target.value as VietnameseUnit)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {availableUnits.map((unit) => (
                      <option key={unit.unit} value={unit.unit}>
                        {unit.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="flex items-center gap-2 text-gray-400">
                <ArrowRight className="w-5 h-5" />
                <span className="text-sm">Chuyển đổi</span>
                <ArrowLeft className="w-5 h-5" />
              </div>
            </div>

            {/* To */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Sang
              </label>
              <div className="flex gap-3 items-end">
                <div className="flex-1">
                  <input
                    type="number"
                    value={result.isValid ? result.converted.toFixed(2) : '0'}
                    readOnly
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                  />
                </div>
                <div className="flex-1">
                  <select
                    value={toUnit}
                    onChange={(e) => setToUnit(e.target.value as VietnameseUnit)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {availableUnits.map((unit) => (
                      <option key={unit.unit} value={unit.unit}>
                        {unit.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Result in grams */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-sm text-blue-900">
                <strong>Tương đương:</strong> {result.grams.toFixed(1)} gram
              </div>
              <div className="text-xs text-blue-700 mt-1">
                {formatAmount(fromAmount, fromUnit)} = {formatAmount(result.converted, toUnit)} = {result.grams.toFixed(1)}g
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader icon={Info} title="Bảng Tham khảo Nhanh" />
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">
                    Đơn vị
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-900">
                    Tương đương (gram)
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">
                    Ghi chú
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {availableUnits.map((unit) => (
                  <tr key={unit.unit}>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      {unit.description}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 text-center">
                      ~{unit.toGrams}g
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {unit.category === 'liquid' && 'Chất lỏng'}
                      {unit.category === 'solid' && 'Chất rắn'}
                      {unit.category === 'both' && 'Cả hai'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Tips */}
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4">
        <p className="text-sm font-semibold text-amber-900 mb-2">
          💡 Mẹo sử dụng
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
          <li>Chọn đúng loại thực phẩm để có chuyển đổi chính xác hơn</li>
          <li>Các giá trị là ước tính trung bình - kích thước thực tế có thể khác</li>
          <li>Để chuyển đổi chính xác nhất, nên cân thực tế một lần để biết kích thước bát/thìa của bạn</li>
          <li>Gram là đơn vị chuẩn - dùng để tính toán dinh dưỡng chính xác</li>
        </ul>
      </div>
    </div>
  );
}
