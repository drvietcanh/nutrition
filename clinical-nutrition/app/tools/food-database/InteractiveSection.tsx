"use client";

import { useState, useMemo, useRef } from "react";
import { Search, UtensilsCrossed, X, Download, Printer, RefreshCw, Info, Filter } from "lucide-react";
import { Card } from "../../components/Card";
import { PDFExportButton } from "../../components/PDFExportButton";
import { FoodCard } from "../../components/FoodCard";
import { BottomSheet } from "../../components/BottomSheet";
import { FilterChips } from "../../components/FilterChips";
import { SearchInput } from "../../components/SearchInput";
import { VirtualList } from "../../components/VirtualList";
import { useDebounce } from "@/app/hooks/useDebounce";
import { useMemoizedSearch } from "@/app/hooks/useMemoizedSearch";
import {
  foodDatabase,
  searchFoods,
  filterFoodsByKcalRange,
  getNutritionPer100g,
  type FoodItem,
  type FoodCategory,
  type KcalRange,
} from "@/lib/food-db";
import toast from "react-hot-toast";

const categories: { value: FoodCategory; label: string }[] = [
  { value: "rice-noodles", label: "Cơm & Bún" },
  { value: "meat", label: "Thịt" },
  { value: "fish", label: "Cá" },
  { value: "seafood", label: "Hải sản" },
  { value: "freshwater", label: "Thủy sản nước ngọt" },
  { value: "vegetables", label: "Rau củ" },
  { value: "fruits", label: "Trái cây" },
  { value: "legumes", label: "Đậu" },
  { value: "dairy", label: "Sữa" },
  { value: "condiments", label: "Gia vị" },
];

const kcalRanges: { value: KcalRange; label: string }[] = [
  { value: "all", label: "Tất cả" },
  { value: "<50", label: "< 50 Kcal" },
  { value: "50-100", label: "50 - 100 Kcal" },
  { value: "100-200", label: "100 - 200 Kcal" },
  { value: "200-300", label: "200 - 300 Kcal" },
  { value: ">300", label: "> 300 Kcal" },
];

const categoryLabels: Record<FoodCategory, string> = {
  "rice-noodles": "Cơm & Bún",
  meat: "Thịt",
  fish: "Cá",
  seafood: "Hải sản",
  freshwater: "Thủy sản nước ngọt",
  vegetables: "Rau củ",
  fruits: "Trái cây",
  legumes: "Đậu",
  dairy: "Sữa",
  condiments: "Gia vị",
  beverages: "Đồ uống",
  snacks: "Đồ ăn vặt",
  soups: "Súp",
  desserts: "Tráng miệng",
};

// Ước tính nhu cầu/ngày cho người lớn khỏe mạnh (tham khảo, dùng cho mục đích giáo dục)
const DAILY_INTAKE = {
  sodium: 2000, // mg
  potassium: 3500, // mg
  phosphorus: 700, // mg
  calcium: 1000, // mg
  magnesium: 320, // mg
  zinc: 11, // mg
  vitaminC: 75, // mg
  vitaminA: 700, // mcg RAE
} as const;

type Level = "low" | "medium" | "high";

const classifyLevel = (value: number | undefined, low: number, medium: number): Level | null => {
  if (value === undefined) return null;
  if (value < low) return "low";
  if (value <= medium) return "medium";
  return "high";
};

export function InteractiveSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory | "all">("all");
  const [selectedKcalRange, setSelectedKcalRange] = useState<KcalRange>("all");
  const [sodiumFilter, setSodiumFilter] = useState<"all" | Level>("all");
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const nutritionDetailRef = useRef<HTMLDivElement>(null);
  
  // Debounce search query for performance
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const mineralProfile = useMemo(() => {
    if (!selectedFood) return null;

    const { sodium, potassium, phosphorus, calcium, magnesium, zinc } = selectedFood;

    const toPercent = (value: number | undefined, daily: number) => {
      if (value === undefined || !daily) return undefined;
      return Math.round((value / daily) * 100);
    };

    return {
      sodium: {
        value: sodium,
        level: classifyLevel(sodium, 120, 400),
        percent: toPercent(sodium, DAILY_INTAKE.sodium),
      },
      potassium: {
        value: potassium,
        level: classifyLevel(potassium, 150, 300),
        percent: toPercent(potassium, DAILY_INTAKE.potassium),
      },
      phosphorus: {
        value: phosphorus,
        level: classifyLevel(phosphorus, 100, 200),
        percent: toPercent(phosphorus, DAILY_INTAKE.phosphorus),
      },
      calcium: {
        value: calcium,
        percent: toPercent(calcium, DAILY_INTAKE.calcium),
      },
      magnesium: {
        value: magnesium,
        percent: toPercent(magnesium, DAILY_INTAKE.magnesium),
      },
      zinc: {
        value: zinc,
        percent: toPercent(zinc, DAILY_INTAKE.zinc),
      },
    };
  }, [selectedFood]);

  const vitaminProfile = useMemo(() => {
    if (!selectedFood) return null;

    const { vitaminA, vitaminC } = selectedFood;

    const toPercent = (value: number | undefined, daily: number) => {
      if (value === undefined || !daily) return undefined;
      return Math.round((value / daily) * 100);
    };

    return {
      vitaminA,
      vitaminC,
      isRichInVitaminC: vitaminC !== undefined && vitaminC >= 20,
      isRichInVitaminA: vitaminA !== undefined && vitaminA >= 300,
      vitaminAPercent: toPercent(vitaminA, DAILY_INTAKE.vitaminA),
      vitaminCPercent: toPercent(vitaminC, DAILY_INTAKE.vitaminC),
    };
  }, [selectedFood]);

  const filteredFoods = useMemo(() => {
    let foods = foodDatabase;

    // Apply search filter
    if (searchQuery.trim()) {
      foods = searchFoods(searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      foods = foods.filter((food) => food.category === selectedCategory);
    }

    // Apply sodium filter (hỗ trợ bệnh tăng huyết áp, tim mạch, thận)
    if (sodiumFilter !== "all") {
      foods = foods.filter((food) => {
        const level = classifyLevel(food.sodium, 120, 400);
        if (!level) return false;
        return level === sodiumFilter;
      });
    }

    // Apply kcal filter
    foods = filterFoodsByKcalRange(foods, selectedKcalRange);

    return foods;
  }, [searchQuery, selectedCategory, selectedKcalRange, sodiumFilter]);

  const nutritionPer100g = useMemo(() => {
    if (!selectedFood) return null;
    return getNutritionPer100g(selectedFood);
  }, [selectedFood]);

  const handleFoodSelect = (food: FoodItem) => {
    setSelectedFood(food);
    setShowBottomSheet(true);
    toast.success(`Đã chọn ${food.name}`);
  };

  const handleRefresh = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedKcalRange("all");
    setSodiumFilter("all");
    setSelectedFood(null);
    toast.success("Đã làm mới");
  };

  const handlePrint = () => {
    window.print();
  };

  const getNutrientRows = () => {
    if (!nutritionPer100g) return [];

    const rows: { stt: number; nutrient: string; value: number; unit: string }[] = [];
    let stt = 1;

    if (nutritionPer100g.protein !== undefined) {
      rows.push({ stt: stt++, nutrient: "Protein", value: nutritionPer100g.protein, unit: "g" });
    }
    if (nutritionPer100g.carbs !== undefined) {
      rows.push({
        stt: stt++,
        nutrient: "Carbohydrate by difference",
        value: nutritionPer100g.carbs,
        unit: "g",
      });
    }
    if (nutritionPer100g.fat !== undefined) {
      rows.push({ stt: stt++, nutrient: "Lipid (Fat)", value: nutritionPer100g.fat, unit: "g" });
    }
    if (nutritionPer100g.water !== undefined) {
      rows.push({ stt: stt++, nutrient: "Nước", value: nutritionPer100g.water, unit: "g" });
    }
    if (nutritionPer100g.fiber !== undefined) {
      rows.push({ stt: stt++, nutrient: "Chất xơ", value: nutritionPer100g.fiber, unit: "g" });
    }
    if (nutritionPer100g.calcium !== undefined) {
      rows.push({ stt: stt++, nutrient: "Ca (Canxi)", value: nutritionPer100g.calcium, unit: "mg" });
    }
    if (nutritionPer100g.iron !== undefined) {
      rows.push({ stt: stt++, nutrient: "Fe (Sắt)", value: nutritionPer100g.iron, unit: "mg" });
    }
    if (nutritionPer100g.sodium !== undefined) {
      rows.push({ stt: stt++, nutrient: "Na (Natri)", value: nutritionPer100g.sodium, unit: "mg" });
    }
    if (nutritionPer100g.potassium !== undefined) {
      rows.push({ stt: stt++, nutrient: "K (Kali)", value: nutritionPer100g.potassium, unit: "mg" });
    }
    if (nutritionPer100g.phosphorus !== undefined) {
      rows.push({
        stt: stt++,
        nutrient: "P (Phốt pho)",
        value: nutritionPer100g.phosphorus,
        unit: "mg",
      });
    }
    if (nutritionPer100g.magnesium !== undefined) {
      rows.push({
        stt: stt++,
        nutrient: "Mg (Magie)",
        value: nutritionPer100g.magnesium,
        unit: "mg",
      });
    }
    if (nutritionPer100g.zinc !== undefined) {
      rows.push({ stt: stt++, nutrient: "Zn (Kẽm)", value: nutritionPer100g.zinc, unit: "mg" });
    }
    if (nutritionPer100g.vitaminA !== undefined) {
      rows.push({
        stt: stt++,
        nutrient: "Vit A-RAE",
        value: nutritionPer100g.vitaminA,
        unit: "mcg",
      });
    }
    if (nutritionPer100g.vitaminC !== undefined) {
      rows.push({
        stt: stt++,
        nutrient: "Vit C",
        value: nutritionPer100g.vitaminC,
        unit: "mg",
      });
    }
    if (nutritionPer100g.cholesterol !== undefined) {
      rows.push({
        stt: stt++,
        nutrient: "Cholesterol",
        value: nutritionPer100g.cholesterol,
        unit: "mg",
      });
    }

    return rows;
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Keyword Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Từ khóa/Keyword
              </label>
              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Tìm kiếm theo tên hoặc mã thực phẩm"
                suggestions={foodDatabase}
                showHistory={true}
              />
            </div>

            {/* Group Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nhóm/Group
              </label>
              <select
                value={selectedCategory}
                onChange={(e) =>
                  setSelectedCategory(e.target.value as FoodCategory | "all")
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">Tất cả</option>
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Kcal Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Năng lượng (Kcal)/Energy (Kcal)
              </label>
              <select
                value={selectedKcalRange}
                onChange={(e) =>
                  setSelectedKcalRange(e.target.value as KcalRange)
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {kcalRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sodium filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Natri cho người THA/CKD
              </label>
              <select
                value={sodiumFilter}
                onChange={(e) =>
                  setSodiumFilter(e.target.value as "all" | Level)
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">Tất cả mức natri</option>
                <option value="low">Thấp (&lt; 120 mg/100g)</option>
                <option value="medium">Vừa (120–400 mg/100g)</option>
                <option value="high">Cao (&gt; 400 mg/100g)</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => {
                // Search is already reactive, this is just for consistency
                toast.success("Đã tìm kiếm");
              }}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              Tìm kiếm
            </button>
            <button
              type="button"
              onClick={handleRefresh}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Làm mới
            </button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Food list - Card layout on mobile, Table on desktop */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="heading-3">Danh sách thực phẩm ({filteredFoods.length})</h2>
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-label="Lọc"
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile: Card Layout with Virtual Scrolling */}
          <div className="md:hidden">
            {filteredFoods.length === 0 ? (
              <Card>
                <div className="text-center py-8 text-gray-500">
                  <UtensilsCrossed className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p>Không tìm thấy thực phẩm nào</p>
                </div>
              </Card>
            ) : filteredFoods.length > 50 ? (
              <VirtualList
                items={filteredFoods}
                itemHeight={120}
                containerHeight={600}
                renderItem={(food) => (
                  <div className="p-2">
                    <FoodCard
                      food={food}
                      onClick={() => handleFoodSelect(food)}
                      isSelected={selectedFood?.id === food.id}
                    />
                  </div>
                )}
              />
            ) : (
              <div className="space-y-3">
                {filteredFoods.map((food) => (
                  <FoodCard
                    key={food.id}
                    food={food}
                    onClick={() => handleFoodSelect(food)}
                    isSelected={selectedFood?.id === food.id}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Desktop: Table Layout */}
          <div className="hidden md:block border border-gray-200 rounded-lg overflow-hidden">
            <div className="max-h-[600px] overflow-y-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      STT
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Mã số
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Nhóm
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Thực phẩm (100g ăn được)
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Năng lượng
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredFoods.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                        Không tìm thấy thực phẩm nào
                      </td>
                    </tr>
                  ) : (
                    filteredFoods.map((food, index) => (
                      <tr
                        key={food.id}
                        onClick={() => handleFoodSelect(food)}
                        className={`cursor-pointer transition-colors ${
                          selectedFood?.id === food.id
                            ? "bg-blue-50 hover:bg-blue-100"
                            : "hover:bg-gray-50"
                        }`}
                        role="row"
                        tabIndex={0}
                        aria-label={`${food.name}, ${food.calories} calories`}
                        aria-selected={selectedFood?.id === food.id}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleFoodSelect(food);
                          }
                        }}
                      >
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                          {index + 1}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                          {food.code}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                          {categoryLabels[food.category]}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          <div>
                            <div className="font-medium">{food.name}</div>
                            {food.nameEn && (
                              <div className="text-xs text-gray-500">{food.nameEn}</div>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                          {food.calories} Kcal
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Selected food Details - Desktop */}
        <div className="hidden lg:block space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="heading-3">Giá trị dinh dưỡng</h2>
            {selectedFood && (
              <div className="flex gap-2">
                <PDFExportButton
                  elementRef={nutritionDetailRef}
                  title={`Giá trị dinh dưỡng - ${selectedFood.name}`}
                  filename={`gia-tri-dinh-duong-${selectedFood.code}.pdf`}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Tải xuống
                </PDFExportButton>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm"
                >
                  <Printer className="w-4 h-4" />
                  In
                </button>
              </div>
            )}
          </div>

          {selectedFood ? (
            <div ref={nutritionDetailRef}>
              <Card>
                <div className="space-y-6">
                  {/* Food name box */}
                  <div className="bg-green-600 text-white rounded-lg p-4 text-center">
                    <h3 className="text-xl font-bold">{selectedFood.name}</h3>
                    {selectedFood.nameEn && (
                      <p className="text-sm text-green-100 mt-1">{selectedFood.nameEn}</p>
                    )}
                  </div>

                  {/* Code and Energy boxes */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 rounded-lg p-3 text-center">
                      <div className="text-sm text-gray-600">Mã số</div>
                      <div className="text-lg font-semibold text-gray-900">{selectedFood.code}</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 text-center">
                      <div className="text-sm text-gray-600">Năng lượng</div>
                      <div className="text-lg font-semibold text-gray-900">
                        {nutritionPer100g?.calories} Kcal
                      </div>
                    </div>
                  </div>

                  {/* Nutrition table */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Giá trị dinh dưỡng</h4>
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                              STT
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                              Thành phần dinh dưỡng (Nutrients)
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                              Hàm lượng (Value)
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                              Đơn vị (Unit)
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {getNutrientRows().map((row) => (
                            <tr key={row.stt}>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                                {row.stt}
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-900">{row.nutrient}</td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                                {row.value.toFixed(1)}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                                {row.unit}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Mineral profile */}
                  {mineralProfile && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="text-sm font-semibold text-blue-900">
                            Hồ sơ khoáng chất chính
                          </h5>
                          <Info className="w-4 h-4 text-blue-500" aria-hidden="true" />
                        </div>
                        <div className="space-y-1.5 text-xs">
                          {mineralProfile.sodium.value !== undefined && (
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Natri (Na)</span>
                              <div className="text-right">
                                <div className="font-medium text-gray-900">
                                  {mineralProfile.sodium.value} mg
                                </div>
                                {mineralProfile.sodium.percent !== undefined && (
                                  <div className="text-[11px] text-gray-500">
                                    ≈ {mineralProfile.sodium.percent}% nhu cầu/ngày
                                  </div>
                                )}
                              </div>
                              {mineralProfile.sodium.level && (
                                <span
                                  className={`ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${
                                    mineralProfile.sodium.level === "low"
                                      ? "bg-green-100 text-green-800"
                                      : mineralProfile.sodium.level === "medium"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {mineralProfile.sodium.level === "low"
                                    ? "Thấp"
                                    : mineralProfile.sodium.level === "medium"
                                    ? "Vừa"
                                    : "Cao"}
                                </span>
                              )}
                            </div>
                          )}
                          {mineralProfile.potassium.value !== undefined && (
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Kali (K)</span>
                              <div className="text-right">
                                <div className="font-medium text-gray-900">
                                  {mineralProfile.potassium.value} mg
                                </div>
                                {mineralProfile.potassium.percent !== undefined && (
                                  <div className="text-[11px] text-gray-500">
                                    ≈ {mineralProfile.potassium.percent}% nhu cầu/ngày
                                  </div>
                                )}
                              </div>
                              {mineralProfile.potassium.level && (
                                <span
                                  className={`ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${
                                    mineralProfile.potassium.level === "low"
                                      ? "bg-green-100 text-green-800"
                                      : mineralProfile.potassium.level === "medium"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {mineralProfile.potassium.level === "low"
                                    ? "Thấp"
                                    : mineralProfile.potassium.level === "medium"
                                    ? "Vừa"
                                    : "Cao"}
                                </span>
                              )}
                            </div>
                          )}
                          {mineralProfile.phosphorus.value !== undefined && (
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Phốt pho (P)</span>
                              <div className="text-right">
                                <div className="font-medium text-gray-900">
                                  {mineralProfile.phosphorus.value} mg
                                </div>
                                {mineralProfile.phosphorus.percent !== undefined && (
                                  <div className="text-[11px] text-gray-500">
                                    ≈ {mineralProfile.phosphorus.percent}% nhu cầu/ngày
                                  </div>
                                )}
                              </div>
                              {mineralProfile.phosphorus.level && (
                                <span
                                  className={`ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${
                                    mineralProfile.phosphorus.level === "low"
                                      ? "bg-green-100 text-green-800"
                                      : mineralProfile.phosphorus.level === "medium"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {mineralProfile.phosphorus.level === "low"
                                    ? "Thấp"
                                    : mineralProfile.phosphorus.level === "medium"
                                    ? "Vừa"
                                    : "Cao"}
                                </span>
                              )}
                            </div>
                          )}
                          {mineralProfile.calcium !== undefined && (
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Canxi (Ca)</span>
                              <div className="text-right">
                                <div className="font-medium text-gray-900">
                                  {mineralProfile.calcium.value} mg
                                </div>
                                {mineralProfile.calcium.percent !== undefined && (
                                  <div className="text-[11px] text-gray-500">
                                    ≈ {mineralProfile.calcium.percent}% nhu cầu/ngày
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                          {mineralProfile.magnesium !== undefined && (
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Magie (Mg)</span>
                              <div className="text-right">
                                <div className="font-medium text-gray-900">
                                  {mineralProfile.magnesium.value} mg
                                </div>
                                {mineralProfile.magnesium.percent !== undefined && (
                                  <div className="text-[11px] text-gray-500">
                                    ≈ {mineralProfile.magnesium.percent}% nhu cầu/ngày
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                          {mineralProfile.zinc !== undefined && (
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Kẽm (Zn)</span>
                              <div className="text-right">
                                <div className="font-medium text-gray-900">
                                  {mineralProfile.zinc.value} mg
                                </div>
                                {mineralProfile.zinc.percent !== undefined && (
                                  <div className="text-[11px] text-gray-500">
                                    ≈ {mineralProfile.zinc.percent}% nhu cầu/ngày
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Vitamin profile */}
                      {vitaminProfile && (
                        <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-3">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-sm font-semibold text-emerald-900">
                              Hồ sơ vitamin chính
                            </h5>
                            <Info className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                          </div>
                          <div className="space-y-1.5 text-xs">
                            {vitaminProfile.vitaminC !== undefined && (
                              <div className="flex items-center justify-between">
                                <span className="text-gray-700">Vitamin C</span>
                                <div className="text-right">
                                  <div className="font-medium text-gray-900">
                                    {vitaminProfile.vitaminC} mg
                                  </div>
                                  {vitaminProfile.vitaminCPercent !== undefined && (
                                    <div className="text-[11px] text-gray-500">
                                      ≈ {vitaminProfile.vitaminCPercent}% nhu cầu/ngày
                                    </div>
                                  )}
                                </div>
                                {vitaminProfile.isRichInVitaminC && (
                                  <span className="ml-2 inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-medium text-emerald-800">
                                    Nguồn tốt vitamin C
                                  </span>
                                )}
                              </div>
                            )}
                            {vitaminProfile.vitaminA !== undefined && (
                              <div className="flex items-center justify-between">
                                <span className="text-gray-700">Vitamin A (RAE)</span>
                                <div className="text-right">
                                  <div className="font-medium text-gray-900">
                                    {vitaminProfile.vitaminA} mcg
                                  </div>
                                  {vitaminProfile.vitaminAPercent !== undefined && (
                                    <div className="text-[11px] text-gray-500">
                                      ≈ {vitaminProfile.vitaminAPercent}% nhu cầu/ngày
                                    </div>
                                  )}
                                </div>
                                {vitaminProfile.isRichInVitaminA && (
                                  <span className="ml-2 inline-flex items-center rounded-full bg-orange-100 px-2 py-0.5 text-[11px] font-medium text-orange-800">
                                    Nguồn tốt vitamin A
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Micronutrient table: amount per 100g và % nhu cầu/ngày */}
                  {(mineralProfile || vitaminProfile) && (
                    <div>
                      <h4 className="mt-4 mb-2 text-sm font-semibold text-gray-900">
                        Vitamin & Khoáng chất (trên 100g thực phẩm)
                      </h4>
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Vi chất
                              </th>
                              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Hàm lượng /100g
                              </th>
                              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Ước tính % nhu cầu/ngày*
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200 text-sm">
                            {mineralProfile?.sodium.value !== undefined && (
                              <tr>
                                <td className="px-4 py-2 text-gray-900">Natri (Na)</td>
                                <td className="px-4 py-2 text-gray-900">
                                  {mineralProfile.sodium.value} mg
                                </td>
                                <td className="px-4 py-2 text-gray-700">
                                  {mineralProfile.sodium.percent !== undefined
                                    ? `${mineralProfile.sodium.percent}%`
                                    : "—"}
                                </td>
                              </tr>
                            )}
                            {mineralProfile?.potassium.value !== undefined && (
                              <tr>
                                <td className="px-4 py-2 text-gray-900">Kali (K)</td>
                                <td className="px-4 py-2 text-gray-900">
                                  {mineralProfile.potassium.value} mg
                                </td>
                                <td className="px-4 py-2 text-gray-700">
                                  {mineralProfile.potassium.percent !== undefined
                                    ? `${mineralProfile.potassium.percent}%`
                                    : "—"}
                                </td>
                              </tr>
                            )}
                            {mineralProfile?.phosphorus.value !== undefined && (
                              <tr>
                                <td className="px-4 py-2 text-gray-900">Phốt pho (P)</td>
                                <td className="px-4 py-2 text-gray-900">
                                  {mineralProfile.phosphorus.value} mg
                                </td>
                                <td className="px-4 py-2 text-gray-700">
                                  {mineralProfile.phosphorus.percent !== undefined
                                    ? `${mineralProfile.phosphorus.percent}%`
                                    : "—"}
                                </td>
                              </tr>
                            )}
                            {mineralProfile?.calcium.value !== undefined && (
                              <tr>
                                <td className="px-4 py-2 text-gray-900">Canxi (Ca)</td>
                                <td className="px-4 py-2 text-gray-900">
                                  {mineralProfile.calcium.value} mg
                                </td>
                                <td className="px-4 py-2 text-gray-700">
                                  {mineralProfile.calcium.percent !== undefined
                                    ? `${mineralProfile.calcium.percent}%`
                                    : "—"}
                                </td>
                              </tr>
                            )}
                            {mineralProfile?.magnesium.value !== undefined && (
                              <tr>
                                <td className="px-4 py-2 text-gray-900">Magie (Mg)</td>
                                <td className="px-4 py-2 text-gray-900">
                                  {mineralProfile.magnesium.value} mg
                                </td>
                                <td className="px-4 py-2 text-gray-700">
                                  {mineralProfile.magnesium.percent !== undefined
                                    ? `${mineralProfile.magnesium.percent}%`
                                    : "—"}
                                </td>
                              </tr>
                            )}
                            {mineralProfile?.zinc.value !== undefined && (
                              <tr>
                                <td className="px-4 py-2 text-gray-900">Kẽm (Zn)</td>
                                <td className="px-4 py-2 text-gray-900">
                                  {mineralProfile.zinc.value} mg
                                </td>
                                <td className="px-4 py-2 text-gray-700">
                                  {mineralProfile.zinc.percent !== undefined
                                    ? `${mineralProfile.zinc.percent}%`
                                    : "—"}
                                </td>
                              </tr>
                            )}
                            {vitaminProfile?.vitaminC !== undefined && (
                              <tr>
                                <td className="px-4 py-2 text-gray-900">Vitamin C</td>
                                <td className="px-4 py-2 text-gray-900">
                                  {vitaminProfile.vitaminC} mg
                                </td>
                                <td className="px-4 py-2 text-gray-700">
                                  {vitaminProfile.vitaminCPercent !== undefined
                                    ? `${vitaminProfile.vitaminCPercent}%`
                                    : "—"}
                                </td>
                              </tr>
                            )}
                            {vitaminProfile?.vitaminA !== undefined && (
                              <tr>
                                <td className="px-4 py-2 text-gray-900">Vitamin A (RAE)</td>
                                <td className="px-4 py-2 text-gray-900">
                                  {vitaminProfile.vitaminA} mcg
                                </td>
                                <td className="px-4 py-2 text-gray-700">
                                  {vitaminProfile.vitaminAPercent !== undefined
                                    ? `${vitaminProfile.vitaminAPercent}%`
                                    : "—"}
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                      <p className="mt-1 text-[11px] text-gray-500">
                        *Ước tính so với nhu cầu/ngày của người lớn khỏe mạnh, dùng cho mục đích
                        giáo dục – không thay thế tư vấn cá nhân hóa.
                      </p>
                    </div>
                  )}

                  {selectedFood.notes && (
                    <div className="rounded-lg bg-amber-50 border border-amber-200 p-3">
                      <p className="text-sm text-amber-900">{selectedFood.notes}</p>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          ) : (
            <Card>
              <div className="text-center py-12">
                <UtensilsCrossed className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">
                  Chọn một thực phẩm từ danh sách để xem chi tiết dinh dưỡng
                </p>
              </div>
            </Card>
          )}
        </div>

        {/* Bottom Sheet for Mobile */}
        <BottomSheet
          isOpen={showBottomSheet}
          onClose={() => {
            setShowBottomSheet(false);
            setSelectedFood(null);
          }}
          title={selectedFood?.name || "Giá trị dinh dưỡng"}
        >
          {selectedFood && (
            <div ref={nutritionDetailRef} className="space-y-4">
              {/* Food name */}
              <div className="bg-green-600 text-white rounded-lg p-4 text-center">
                <h3 className="text-lg font-bold">{selectedFood.name}</h3>
                {selectedFood.nameEn && (
                  <p className="text-sm text-green-100 mt-1">{selectedFood.nameEn}</p>
                )}
              </div>

              {/* Code and Energy */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-100 rounded-lg p-3 text-center">
                  <div className="text-xs text-gray-600">Mã số</div>
                  <div className="text-base font-semibold text-gray-900">{selectedFood.code}</div>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center">
                  <div className="text-xs text-gray-600">Năng lượng</div>
                  <div className="text-base font-semibold text-gray-900">
                    {nutritionPer100g?.calories} Kcal
                  </div>
                </div>
              </div>

              {/* Quick Nutrition Info */}
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-gray-900">Thông tin cơ bản</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {nutritionPer100g?.protein !== undefined && (
                    <div className="bg-blue-50 rounded-lg p-2">
                      <div className="text-xs text-gray-600">Đạm</div>
                      <div className="font-semibold">{nutritionPer100g.protein.toFixed(1)}g</div>
                    </div>
                  )}
                  {nutritionPer100g?.carbs !== undefined && (
                    <div className="bg-green-50 rounded-lg p-2">
                      <div className="text-xs text-gray-600">Carb</div>
                      <div className="font-semibold">{nutritionPer100g.carbs.toFixed(1)}g</div>
                    </div>
                  )}
                  {nutritionPer100g?.fat !== undefined && (
                    <div className="bg-yellow-50 rounded-lg p-2">
                      <div className="text-xs text-gray-600">Chất béo</div>
                      <div className="font-semibold">{nutritionPer100g.fat.toFixed(1)}g</div>
                    </div>
                  )}
                  {nutritionPer100g?.fiber !== undefined && (
                    <div className="bg-purple-50 rounded-lg p-2">
                      <div className="text-xs text-gray-600">Chất xơ</div>
                      <div className="font-semibold">{nutritionPer100g.fiber.toFixed(1)}g</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Mineral Profile */}
              {mineralProfile && (
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-900">Khoáng chất</h4>
                  <div className="space-y-2">
                    {mineralProfile.sodium.value !== undefined && (
                      <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-700">Natri (Na)</span>
                        <div className="text-right">
                          <span className="font-semibold text-sm">
                            {mineralProfile.sodium.value} mg
                          </span>
                          {mineralProfile.sodium.level && (
                            <span
                              className={`ml-2 text-xs px-2 py-0.5 rounded ${
                                mineralProfile.sodium.level === "low"
                                  ? "bg-green-100 text-green-800"
                                  : mineralProfile.sodium.level === "medium"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {mineralProfile.sodium.level === "low"
                                ? "Thấp"
                                : mineralProfile.sodium.level === "medium"
                                ? "Vừa"
                                : "Cao"}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    {mineralProfile.potassium.value !== undefined && (
                      <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-700">Kali (K)</span>
                        <span className="font-semibold text-sm">
                          {mineralProfile.potassium.value} mg
                        </span>
                      </div>
                    )}
                    {mineralProfile.phosphorus.value !== undefined && (
                      <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-700">Phốt pho (P)</span>
                        <span className="font-semibold text-sm">
                          {mineralProfile.phosphorus.value} mg
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2 pt-2 border-t">
                <PDFExportButton
                  elementRef={nutritionDetailRef}
                  title={`Giá trị dinh dưỡng - ${selectedFood.name}`}
                  filename={`gia-tri-dinh-duong-${selectedFood.code}.pdf`}
                  variant="outline"
                  size="sm"
                  className="flex-1 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Tải PDF
                </PDFExportButton>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm"
                >
                  <Printer className="w-4 h-4" />
                  In
                </button>
              </div>
            </div>
          )}
        </BottomSheet>
      </div>
    </div>
  );
}
