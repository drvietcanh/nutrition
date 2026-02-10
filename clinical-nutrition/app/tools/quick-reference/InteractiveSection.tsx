"use client";

import { useState, useMemo } from "react";
import { Search, Download, Filter, ArrowUpDown } from "lucide-react";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { PDFExportButton } from "../../components/PDFExportButton";
import {
  extendedFoodDatabase,
  type ExtendedFoodItem,
} from "@/lib/vietnamese-food-extended";
import { NutritionBadge } from "../../components/NutritionBadge";
import toast from "react-hot-toast";

type DiseaseType = 'diabetes' | 'gout' | 'kidney' | 'hypertension' | 'cardiovascular';

const diseases: { value: DiseaseType; label: string; icon: string }[] = [
  { value: 'diabetes', label: 'Đái tháo đường', icon: '🩺' },
  { value: 'gout', label: 'Bệnh gút', icon: '🦴' },
  { value: 'kidney', label: 'Bệnh thận', icon: '🧪' },
  { value: 'hypertension', label: 'Tăng huyết áp', icon: '❤️' },
  { value: 'cardiovascular', label: 'Tim mạch', icon: '💓' },
];

type SortField = 'name' | 'value' | 'level';
type SortDirection = 'asc' | 'desc';

export function InteractiveSection() {
  const [selectedDisease, setSelectedDisease] = useState<DiseaseType>('diabetes');
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [showFilters, setShowFilters] = useState(false);

  const tableData = useMemo(() => {
    let foods: ExtendedFoodItem[] = [];

    // Filter by disease
    switch (selectedDisease) {
      case 'diabetes':
        foods = extendedFoodDatabase.filter(f => f.diabetes);
        break;
      case 'gout':
        foods = extendedFoodDatabase.filter(f => f.gout);
        break;
      case 'kidney':
        foods = extendedFoodDatabase.filter(f => f.kidney);
        break;
      case 'hypertension':
        foods = extendedFoodDatabase.filter(f => f.sodium !== undefined);
        break;
      case 'cardiovascular':
        foods = extendedFoodDatabase.filter(f => f.cardiovascular);
        break;
    }

    // Filter by search
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      foods = foods.filter(f =>
        f.name.toLowerCase().includes(lowerQuery) ||
        f.nameEn?.toLowerCase().includes(lowerQuery)
      );
    }

    // Sort
    foods = [...foods].sort((a, b) => {
      let aValue: number | string = 0;
      let bValue: number | string = 0;

      switch (selectedDisease) {
        case 'diabetes':
          aValue = a.diabetes?.glycemicIndex || 0;
          bValue = b.diabetes?.glycemicIndex || 0;
          break;
        case 'gout':
          aValue = a.gout?.purine || 0;
          bValue = b.gout?.purine || 0;
          break;
        case 'kidney':
          aValue = a.kidney?.potassium || 0;
          bValue = b.kidney?.potassium || 0;
          break;
        case 'hypertension':
          aValue = a.sodium || 0;
          bValue = b.sodium || 0;
          break;
        case 'cardiovascular':
          aValue = a.cardiovascular?.cholesterol || 0;
          bValue = b.cardiovascular?.cholesterol || 0;
          break;
      }

      if (sortField === 'name') {
        aValue = a.name;
        bValue = b.name;
      }

      if (sortField === 'value') {
        // Already set above
      }

      if (sortField === 'level') {
        // Sort by level (good < moderate < poor)
        const getLevel = (food: ExtendedFoodItem): number => {
          switch (selectedDisease) {
            case 'diabetes':
              const gi = food.diabetes?.glycemicIndex || 100;
              if (gi < 55) return 1; // good
              if (gi < 70) return 2; // moderate
              return 3; // poor
            case 'gout':
              const level = food.gout?.purineLevel;
              if (level === 'low') return 1;
              if (level === 'medium') return 2;
              if (level === 'high') return 3;
              return 4; // very-high
            case 'kidney':
              const k = food.kidney?.potassium || 0;
              const p = food.kidney?.phosphorus || 0;
              if (k < 200 && p < 200) return 1;
              if (k < 300 && p < 300) return 2;
              return 3;
            case 'hypertension':
              const na = food.sodium || 0;
              if (na < 100) return 1;
              if (na < 500) return 2;
              return 3;
            case 'cardiovascular':
              const chol = food.cardiovascular?.cholesterol || 0;
              const satFat = food.cardiovascular?.saturatedFat || 0;
              if (chol < 100 && satFat < 5) return 1;
              if (chol < 200 && satFat < 10) return 2;
              return 3;
            default:
              return 0;
          }
        };
        aValue = getLevel(a);
        bValue = getLevel(b);
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return sortDirection === 'asc'
        ? (aValue as number) - (bValue as number)
        : (bValue as number) - (aValue as number);
    });

    return foods;
  }, [selectedDisease, searchQuery, sortField, sortDirection]);

  const getValue = (food: ExtendedFoodItem): { value: string; level?: 'low' | 'medium' | 'high' | 'very-high' } => {
    switch (selectedDisease) {
      case 'diabetes':
        const gi = food.diabetes?.glycemicIndex || 0;
        let giLevel: 'low' | 'medium' | 'high' | 'very-high' = 'low';
        if (gi >= 70) giLevel = 'high';
        else if (gi >= 55) giLevel = 'medium';
        return { value: gi > 0 ? `${gi}` : 'N/A', level: giLevel };
      
      case 'gout':
        const purine = food.gout?.purine || 0;
        const purineLevel = food.gout?.purineLevel;
        let level: 'low' | 'medium' | 'high' | 'very-high' = 'low';
        if (purineLevel === 'very-high') level = 'very-high';
        else if (purineLevel === 'high') level = 'high';
        else if (purineLevel === 'medium') level = 'medium';
        return { value: `${purine}mg/100g`, level };
      
      case 'kidney':
        const k = food.kidney?.potassium || 0;
        const p = food.kidney?.phosphorus || 0;
        let kLevel: 'low' | 'medium' | 'high' | 'very-high' = 'low';
        if (k >= 300) kLevel = 'high';
        else if (k >= 200) kLevel = 'medium';
        return { value: `K: ${k}mg, P: ${p}mg`, level: kLevel };
      
      case 'hypertension':
        const na = food.sodium || 0;
        let naLevel: 'low' | 'medium' | 'high' | 'very-high' = 'low';
        if (na >= 500) naLevel = 'high';
        else if (na >= 100) naLevel = 'medium';
        return { value: `${na}mg/100g`, level: naLevel };
      
      case 'cardiovascular':
        const chol = food.cardiovascular?.cholesterol || 0;
        const satFat = food.cardiovascular?.saturatedFat || 0;
        let cholLevel: 'low' | 'medium' | 'high' | 'very-high' = 'low';
        if (chol >= 200 || satFat >= 10) cholLevel = 'high';
        else if (chol >= 100 || satFat >= 5) cholLevel = 'medium';
        return { value: `Chol: ${chol}mg, SatFat: ${satFat}g`, level: cholLevel };
      
      default:
        return { value: 'N/A' };
    }
  };

  const getColumnHeaders = () => {
    switch (selectedDisease) {
      case 'diabetes':
        return ['Thực phẩm', 'GI', 'GL', 'Carb/khẩu phần', 'Đánh giá'];
      case 'gout':
        return ['Thực phẩm', 'Purin (mg/100g)', 'Phân loại', 'Đánh giá'];
      case 'kidney':
        return ['Thực phẩm', 'Kali (mg/100g)', 'Phốt pho (mg/100g)', 'Đánh giá'];
      case 'hypertension':
        return ['Thực phẩm', 'Natri (mg/100g)', '% RNI', 'Đánh giá'];
      case 'cardiovascular':
        return ['Thực phẩm', 'Cholesterol (mg/100g)', 'Chất béo bão hòa (g/100g)', 'Đánh giá'];
      default:
        return ['Thực phẩm', 'Giá trị', 'Đánh giá'];
    }
  };

  return (
    <div className="space-y-6">
      {/* Disease Selection */}
      <Card>
        <CardHeader icon={Filter} title="Chọn bệnh lý" />
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {diseases.map((disease) => (
              <button
                key={disease.value}
                type="button"
                onClick={() => setSelectedDisease(disease.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedDisease === disease.value
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {disease.icon} {disease.label}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Search and Sort */}
      <Card>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm thực phẩm..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={sortField}
                onChange={(e) => setSortField(e.target.value as SortField)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="name">Sắp xếp theo tên</option>
                <option value="value">Sắp xếp theo giá trị</option>
                <option value="level">Sắp xếp theo mức độ</option>
              </select>
              <button
                type="button"
                onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                aria-label="Đảo ngược thứ tự"
              >
                <ArrowUpDown className="w-4 h-4" />
                {sortDirection === 'asc' ? 'Tăng dần' : 'Giảm dần'}
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader 
          icon={Download} 
          title={`Bảng tra cứu - ${diseases.find(d => d.value === selectedDisease)?.label} (${tableData.length} thực phẩm)`}
          action={
            <PDFExportButton
              elementRef={undefined}
              title={`Bảng tra cứu - ${diseases.find(d => d.value === selectedDisease)?.label}`}
              filename={`bang-tra-cuu-${selectedDisease}.pdf`}
              variant="outline"
              size="sm"
            >
              <Download className="w-4 h-4" />
              Tải PDF
            </PDFExportButton>
          }
        />
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {getColumnHeaders().map((header, idx) => (
                    <th
                      key={idx}
                      className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tableData.length === 0 ? (
                  <tr>
                    <td colSpan={getColumnHeaders().length} className="px-4 py-8 text-center text-gray-500">
                      Không tìm thấy thực phẩm nào
                    </td>
                  </tr>
                ) : (
                  tableData.map((food) => {
                    const valueInfo = getValue(food);
                    return (
                      <tr key={food.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{food.name}</div>
                          {food.nameEn && (
                            <div className="text-xs text-gray-500">{food.nameEn}</div>
                          )}
                        </td>
                        {selectedDisease === 'diabetes' && (
                          <>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                              {food.diabetes?.glycemicIndex || 'N/A'}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                              {food.diabetes?.glycemicLoad || 'N/A'}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                              {food.diabetes?.carbPerPortion || 'N/A'}g
                            </td>
                          </>
                        )}
                        {selectedDisease === 'gout' && (
                          <>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                              {food.gout?.purine || 0}mg/100g
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <NutritionBadge
                                label=""
                                value={food.gout?.purineLevel || 'N/A'}
                                level={
                                  food.gout?.purineLevel === 'very-high' ? 'very-high' :
                                  food.gout?.purineLevel === 'high' ? 'high' :
                                  food.gout?.purineLevel === 'medium' ? 'medium' :
                                  'low'
                                }
                              />
                            </td>
                          </>
                        )}
                        {selectedDisease === 'kidney' && (
                          <>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                              {food.kidney?.potassium || 0}mg
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                              {food.kidney?.phosphorus || 0}mg
                            </td>
                          </>
                        )}
                        {selectedDisease === 'hypertension' && (
                          <>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                              {food.sodium || 0}mg
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                              {food.sodium ? Math.round((food.sodium / 2000) * 100) : 0}%
                            </td>
                          </>
                        )}
                        {selectedDisease === 'cardiovascular' && (
                          <>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                              {food.cardiovascular?.cholesterol || 0}mg
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                              {food.cardiovascular?.saturatedFat || 0}g
                            </td>
                          </>
                        )}
                        <td className="px-4 py-3 whitespace-nowrap">
                          <NutritionBadge
                            label=""
                            value={valueInfo.value}
                            level={valueInfo.level}
                          />
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
