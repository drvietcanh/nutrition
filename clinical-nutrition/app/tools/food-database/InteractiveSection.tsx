"use client";

import { useState, useMemo, useRef } from "react";
import { Search, UtensilsCrossed, X, Download, Printer, RefreshCw, Info } from "lucide-react";
import { Card } from "../../components/Card";
import { PDFExportButton } from "../../components/PDFExportButton";
import {
  foodDatabase,
  searchFoods,
  filterFoodsByKcalRange,
  getNutritionPer100g,
  type FoodItem,
  type FoodCategory,
  type KcalRange,
} from "../../../lib/food-db";
import toast from "react-hot-toast";

const categories: { value: FoodCategory; label: string }[] = [
  { value: "rice-noodles", label: "Cơm & Bún" },
  { value: "meat", label: "Thịt" },
  { value: "seafood", label: "Hải sản" },
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
  seafood: "Hải sản",
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

export function InteractiveSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory | "all">("all");
  const [selectedKcalRange, setSelectedKcalRange] = useState<KcalRange>("all");
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const nutritionDetailRef = useRef<HTMLDivElement>(null);

  const mineralProfile = useMemo(() => {
    if (!selectedFood) return null;

    const { sodium, potassium, phosphorus, calcium, magnesium, zinc } = selectedFood;

    const classify = (value: number | undefined, low: number, medium: number) => {
      if (value === undefined) return null;
      if (value < low) return "low";
      if (value <= medium) return "medium";
      return "high";
    };

    return {
      sodium: {
        value: sodium,
        level: classify(sodium, 120, 400),
      },
      potassium: {
        value: potassium,
        level: classify(potassium, 150, 300),
      },
      phosphorus: {
        value: phosphorus,
        level: classify(phosphorus, 100, 200),
      },
      calcium,
      magnesium,
      zinc,
    };
  }, [selectedFood]);

  const vitaminProfile = useMemo(() => {
    if (!selectedFood) return null;

    const { vitaminA, vitaminC } = selectedFood;

    return {
      vitaminA,
      vitaminC,
      isRichInVitaminC: vitaminC !== undefined && vitaminC >= 20,
      isRichInVitaminA: vitaminA !== undefined && vitaminA >= 300,
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

    // Apply kcal filter
    foods = filterFoodsByKcalRange(foods, selectedKcalRange);

    return foods;
  }, [searchQuery, selectedCategory, selectedKcalRange]);

  const nutritionPer100g = useMemo(() => {
    if (!selectedFood) return null;
    return getNutritionPer100g(selectedFood);
  }, [selectedFood]);

  const handleFoodSelect = (food: FoodItem) => {
    setSelectedFood(food);
    toast.success(`Đã chọn ${food.name}`);
  };

  const handleRefresh = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedKcalRange("all");
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
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm theo tên hoặc mã thực phẩm"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Group Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nhóm/Group
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as FoodCategory | "all")}
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
                onChange={(e) => setSelectedKcalRange(e.target.value as KcalRange)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {kcalRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
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
        {/* Food list - Table format */}
        <div className="space-y-4">
          <h2 className="heading-3">Danh sách thực phẩm</h2>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
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

        {/* Selected food Details */}
        <div className="space-y-4">
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
                              <span className="font-medium text-gray-900">
                                {mineralProfile.sodium.value} mg
                              </span>
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
                              <span className="font-medium text-gray-900">
                                {mineralProfile.potassium.value} mg
                              </span>
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
                              <span className="font-medium text-gray-900">
                                {mineralProfile.phosphorus.value} mg
                              </span>
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
                              <span className="font-medium text-gray-900">
                                {mineralProfile.calcium} mg
                              </span>
                            </div>
                          )}
                          {mineralProfile.magnesium !== undefined && (
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Magie (Mg)</span>
                              <span className="font-medium text-gray-900">
                                {mineralProfile.magnesium} mg
                              </span>
                            </div>
                          )}
                          {mineralProfile.zinc !== undefined && (
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Kẽm (Zn)</span>
                              <span className="font-medium text-gray-900">
                                {mineralProfile.zinc} mg
                              </span>
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
                                <span className="font-medium text-gray-900">
                                  {vitaminProfile.vitaminC} mg
                                </span>
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
                                <span className="font-medium text-gray-900">
                                  {vitaminProfile.vitaminA} mcg
                                </span>
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
      </div>
    </div>
  );
}
