"use client";

import { useState, useMemo } from "react";
import { Search, CheckCircle, AlertCircle, Info, X } from "lucide-react";
import { Card, CardHeader, CardContent } from "../../components/Card";
import {
  searchExtendedFoods,
  type ExtendedFoodItem,
} from "../../../lib/vietnamese-food-extended";
import toast from "react-hot-toast";
import {
  GENERAL_RNI,
  getPercentOfDiseaseTarget,
  getPercentOfRNI,
  type DiseaseType,
} from "../../../lib/nutrition-reference";

type PercentMode = "rni" | "disease";

const diseases: { value: DiseaseType; label: string; icon: string }[] = [
  { value: "diabetes", label: "Đái tháo đường", icon: "🩺" },
  { value: "gout", label: "Bệnh gút", icon: "🦴" },
  { value: "kidney", label: "Bệnh thận", icon: "🧪" },
  { value: "hypertension", label: "Tăng huyết áp", icon: "❤️" },
  { value: "cardiovascular", label: "Tim mạch", icon: "💓" },
];

function getDiseaseAssessment(
  food: ExtendedFoodItem,
  disease: DiseaseType
): string | undefined {
  switch (disease) {
    case "diabetes": {
      if (!food.diabetes) return undefined;
      const gi = food.diabetes.glycemicIndex || 100;
      if (gi < 55) return "good";
      if (gi < 70) return "moderate";
      return "poor";
    }
    case "gout": {
      if (!food.gout) return undefined;
      if (food.gout.purineLevel === "low") return "good";
      if (food.gout.purineLevel === "medium") return "moderate";
      return "poor";
    }
    case "kidney": {
      if (!food.kidney) return undefined;
      const k = food.kidney.potassium;
      const p = food.kidney.phosphorus;
      if (k < 200 && p < 100) return "good";
      if (k < 300 && p < 200) return "moderate";
      return "poor";
    }
    case "hypertension": {
      if (!food.sodium) return "good";
      if (food.sodium < 100) return "good";
      if (food.sodium < 300) return "moderate";
      return "poor";
    }
    case "cardiovascular": {
      if (!food.cardiovascular) return "good";
      const chol = food.cardiovascular.cholesterol;
      const satFat = food.cardiovascular.saturatedFat;
      if (chol < 50 && satFat < 2) return "good";
      if (chol < 100 && satFat < 5) return "moderate";
      return "poor";
    }
    default:
      return undefined;
  }
}

function formatPercent(value: number | null): string {
  if (value == null || Number.isNaN(value)) return "?";
  if (value === 0) return "0";
  if (value < 1) return "<1%";
  if (value < 10) return value.toFixed(1) + "%";
  if (value > 999) return ">999%";
  return Math.round(value) + "%";
}

/**
 * Format hiển thị vi lượng với 3 trạng thái rõ ràng:
 * - 0 : không có / không đáng kể
 * - ? : chưa có dữ liệu chuẩn
 * - value% RNI : khi có dữ liệu
 */
function formatMicronutrientRNI(percent: number | null): string {
  if (percent == null || Number.isNaN(percent)) return "?";
  if (percent === 0) return "0";
  return formatPercent(percent) + " RNI";
}

/**
 * Format hiển thị vi lượng với label tùy chỉnh (RNI hoặc mục tiêu bệnh)
 */
function formatMicronutrientWithLabel(
  percent: number | null,
  label: string
): string {
  if (percent == null || Number.isNaN(percent)) return "?";
  if (percent === 0) return "0";
  return formatPercent(percent) + " " + label;
}

function getPercentBarColor(percent: number | null): string {
  if (percent == null) return "bg-gray-200";
  if (percent <= 30) return "bg-green-500";
  if (percent <= 70) return "bg-yellow-400";
  return "bg-red-500";
}

/**
 * Tự động sinh nhận xét vi lượng dựa trên các vi chất nổi bật
 * @param food - Thực phẩm
 * @param servingMultiplier - Hệ số scale khẩu phần (ví dụ: 0.5 cho 50g, 1 cho 100g)
 */
function generateMicronutrientInsights(food: ExtendedFoodItem, servingMultiplier: number = 1): string[] {
  const insights: string[] = [];
  
  // Phân tích vi chất giàu (vượt ngưỡng RNI cao)
  const richNutrients: string[] = [];
  const missingNutrients: string[] = [];
  const highRiskNutrients: string[] = [];
  
  // Sắt & Vitamin B12 → hỗ trợ thiếu máu
  const ironValue = food.iron != null ? food.iron * servingMultiplier : null;
  const b12Value = food.vitaminB12 != null ? food.vitaminB12 * servingMultiplier : null;
  const ironPercent = ironValue != null ? getPercentOfRNI("iron", ironValue) : null;
  const b12Percent = b12Value != null ? getPercentOfRNI("vitaminB12", b12Value) : null;
  if (ironPercent != null && ironPercent >= 30 && b12Percent != null && b12Percent >= 30) {
    richNutrients.push("Giàu sắt & vitamin B12 → hỗ trợ thiếu máu");
  } else if (ironPercent != null && ironPercent >= 50) {
    richNutrients.push("Giàu sắt → hỗ trợ thiếu máu");
  } else if (b12Percent != null && b12Percent >= 50) {
    richNutrients.push("Giàu vitamin B12 → hỗ trợ thiếu máu");
  }
  
  // Canxi cao
  const calciumValue = food.calcium != null ? food.calcium * servingMultiplier : null;
  const calciumPercent = calciumValue != null ? getPercentOfRNI("calcium", calciumValue) : null;
  if (calciumPercent != null && calciumPercent >= 30) {
    richNutrients.push("Giàu canxi → hỗ trợ xương");
  }
  
  // Vitamin C cao
  const vitCValue = food.vitaminC != null ? food.vitaminC * servingMultiplier : null;
  const vitCPercent = vitCValue != null ? getPercentOfRNI("vitaminC", vitCValue) : null;
  if (vitCPercent != null && vitCPercent >= 50) {
    richNutrients.push("Giàu vitamin C → tăng cường miễn dịch");
  }
  
  // Cholesterol & Phốt pho cao → không phù hợp tim mạch, CKD
  const cholValue = (food.cholesterol ?? food.cardiovascular?.cholesterol ?? null) != null
    ? (food.cholesterol ?? food.cardiovascular?.cholesterol ?? 0) * servingMultiplier
    : null;
  const cholPercent = cholValue != null ? getPercentOfRNI("cholesterol", cholValue) : null;
  const phosValue = food.phosphorus != null ? food.phosphorus * servingMultiplier : null;
  const phosPercent = phosValue != null ? getPercentOfRNI("phosphorus", phosValue) : null;
  
  if (cholPercent != null && cholPercent >= 50 && phosPercent != null && phosPercent >= 30) {
    highRiskNutrients.push("Cholesterol & phốt pho cao → không phù hợp tim mạch, CKD");
  } else if (cholPercent != null && cholPercent >= 50) {
    highRiskNutrients.push("Cholesterol cao → không phù hợp tim mạch");
  } else if (phosPercent != null && phosPercent >= 30) {
    highRiskNutrients.push("Phốt pho cao → không phù hợp CKD");
  }
  
  // Kali cao → không phù hợp CKD
  const potValue = food.potassium != null ? food.potassium * servingMultiplier : null;
  const potPercent = potValue != null ? getPercentOfRNI("potassium", potValue) : null;
  if (potPercent != null && potPercent >= 30) {
    highRiskNutrients.push("Kali cao → không phù hợp CKD");
  }
  
  // Natri cao → không phù hợp THA
  const naValue = food.sodium != null ? food.sodium * servingMultiplier : null;
  const naPercent = naValue != null ? getPercentOfRNI("sodium", naValue) : null;
  if (naPercent != null && naPercent >= 30) {
    highRiskNutrients.push("Natri cao → không phù hợp THA");
  }
  
  // Purine cao → không phù hợp gút
  if (
    food.gout?.purineLevel === "high" ||
    food.gout?.purineLevel === "very-high"
  ) {
    highRiskNutrients.push("Purine cao → không phù hợp bệnh gút");
  }
  
  // Vi chất thiếu hoặc không có
  if (food.vitaminC == null || food.vitaminC === 0) {
    missingNutrients.push("vitamin C");
  }
  if (food.vitaminD == null || food.vitaminD === 0) {
    missingNutrients.push("vitamin D");
  }
  if (missingNutrients.length > 0) {
    insights.push(`Không cung cấp ${missingNutrients.join(", ")}`);
  }
  
  // Kết hợp insights (tối đa 3-4 gạch đầu dòng)
  if (richNutrients.length > 0) {
    insights.push(...richNutrients.slice(0, 2));
  }
  if (highRiskNutrients.length > 0) {
    insights.push(...highRiskNutrients.slice(0, 2));
  }
  
  return insights.slice(0, 4); // Tối đa 4 gạch đầu dòng
}

export function InteractiveSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFood, setSelectedFood] = useState<ExtendedFoodItem | null>(null);
  const [selectedDisease, setSelectedDisease] = useState<DiseaseType | "all">("all");
  const [percentMode, setPercentMode] = useState<PercentMode>("rni");
  const [showMicronutrients, setShowMicronutrients] = useState(false);
  // Khẩu phần tính theo gram (50g, 70g, 100g mặc định)
  const [servingSizeInGrams, setServingSizeInGrams] = useState<number>(100);
  
  // Tính multiplier dựa trên servingSizeInGrams (database lưu theo 100g)
  const servingMultiplier = servingSizeInGrams / 100;

  const filteredFoods = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchExtendedFoods(searchQuery).slice(0, 10); // Limit to 10 for quick lookup
  }, [searchQuery]);

  const handleFoodSelect = (food: ExtendedFoodItem) => {
    setSelectedFood(food);
    toast.success(`Đã chọn ${food.name}`);
  };

  const getAssessmentColor = (assessment: string | undefined) => {
    if (!assessment) return "text-gray-600 bg-gray-100";
    switch (assessment) {
      case "good":
        return "text-green-600 bg-green-100";
      case "moderate":
        return "text-yellow-600 bg-yellow-100";
      case "poor":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getAssessmentLabel = (assessment: string | undefined) => {
    if (!assessment) return "Chưa đánh giá";
    switch (assessment) {
      case "good":
        return "Tốt";
      case "moderate":
        return "Trung bình";
      case "poor":
        return "Kém";
      default:
        return "Chưa đánh giá";
    }
  };

  const activeDiseaseForTargets: DiseaseType | null =
    percentMode === "disease" && selectedDisease !== "all"
      ? selectedDisease
      : null;

  return (
    <div className="space-y-6">
      {/* Quick Search */}
      <Card>
        <CardHeader icon={Search} title="Tìm kiếm Nhanh" />
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Nhập tên thực phẩm..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-lg"
                autoFocus
              />
            </div>

            {/* Quick Results */}
            {searchQuery && filteredFoods.length > 0 && (
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {filteredFoods.map((food) => (
                  <button
                    key={food.id}
                    type="button"
                    onClick={() => handleFoodSelect(food)}
                    className={`w-full text-left p-3 rounded-lg border-2 transition-colors ${
                      selectedFood?.id === food.id
                        ? 'border-yellow-500 bg-yellow-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium text-sm text-gray-900">{food.name}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {food.calories} kcal/100g • {food.category}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Selected Food Details */}
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
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>
                  Đang xem cho khẩu phần:{" "}
                  <span className="font-semibold">{servingSizeInGrams}</span> g
                </span>
                <div className="inline-flex rounded-full bg-gray-100 p-0.5">
                  {[50, 70, 100].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setServingSizeInGrams(size)}
                      className={`px-2 py-0.5 rounded-full text-[11px] ${
                        servingSizeInGrams === size
                          ? "bg-yellow-600 text-white"
                          : "text-gray-700"
                      }`}
                    >
                      {size} g
                    </button>
                  ))}
                </div>
              </div>

              {/* Percent mode toggle */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <span>
                    Chế độ %:{" "}
                    {percentMode === "rni"
                      ? "so với RNI chung người trưởng thành"
                      : "so với mục tiêu theo bệnh đã chọn"}
                  </span>
                  <span
                    className="inline-flex items-center text-gray-400"
                    title="%RNI: phần trăm so với nhu cầu khuyến nghị/ngày cho người trưởng thành khỏe mạnh. % mục tiêu bệnh: phần trăm so với giới hạn/ngày được khuyến cáo cho bệnh đã chọn (THA, thận, tim mạch...). Các giá trị chỉ mang tính giáo dục, không thay thế chỉ định của bác sĩ."
                  >
                    <Info className="w-3 h-3" aria-hidden="true" />
                  </span>
                </div>
                <div className="inline-flex rounded-full bg-gray-100 p-1 text-xs">
                  <button
                    type="button"
                    onClick={() => setPercentMode("rni")}
                    className={`px-3 py-1 rounded-full ${
                      percentMode === "rni"
                        ? "bg-yellow-600 text-white"
                        : "text-gray-700"
                    }`}
                  >
                    %RNI
                  </button>
                  <button
                    type="button"
                    onClick={() => setPercentMode("disease")}
                    className={`px-3 py-1 rounded-full ${
                      percentMode === "disease"
                        ? "bg-yellow-600 text-white"
                        : "text-gray-700"
                    }`}
                  >
                    %Mục tiêu bệnh
                  </button>
                </div>
              </div>

              {/* Block 1 – Energy & macros */}
              <div>
                <h4 className="font-semibold text-sm text-gray-900 mb-2">
                  Năng lượng & Chất đa lượng
                </h4>
                <div className="space-y-2">
                  {/* Calories row with progress bar */}
              <div>
                    <div className="flex items-baseline justify-between text-sm">
                      <span className="font-medium text-gray-800">
                        {selectedFood.calories * servingMultiplier} kcal
                      </span>
                      <span className="text-xs text-gray-600">
                        {(() => {
                          const percent = getPercentOfRNI(
                            "calories",
                            selectedFood.calories * servingMultiplier
                          );
                          return `≈ ${formatPercent(percent)} / ${GENERAL_RNI.calories.value} ${GENERAL_RNI.calories.label}`;
                        })()}
                      </span>
                    </div>
                    {(() => {
                      const percent = getPercentOfRNI(
                        "calories",
                        selectedFood.calories * servingMultiplier
                      );
                      const width = Math.min(Math.max(percent ?? 0, 0), 100);
                      return (
                        <div className="mt-1 h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${getPercentBarColor(
                              percent
                            )}`}
                            style={{ width: `${width}%` }}
                          />
                        </div>
                      );
                    })()}
                  </div>

                  {/* Macros & fiber & sugar & water */}
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-2 text-xs">
                    {(() => {
                      const value = selectedFood.protein * servingMultiplier;
                      const percent =
                        percentMode === "rni"
                          ? getPercentOfRNI("protein", value)
                          : activeDiseaseForTargets
                          ? getPercentOfDiseaseTarget(
                              activeDiseaseForTargets,
                              "protein",
                              value
                            )
                          : getPercentOfRNI("protein", value);
                      return (
                        <div className="p-2 bg-gray-50 rounded">
                          <div className="text-gray-600">Đạm</div>
                          <div className="font-semibold text-gray-900">
                            {value} g
                          </div>
                          <div className="text-[11px] text-gray-500">
                            {formatPercent(percent)}
                          </div>
                        </div>
                      );
                    })()}

                    {(() => {
                      const value = selectedFood.carbs * servingMultiplier;
                      const percent =
                        percentMode === "rni"
                          ? getPercentOfRNI("carbs", value)
                          : activeDiseaseForTargets
                          ? getPercentOfDiseaseTarget(
                              activeDiseaseForTargets,
                              "carbs",
                              value
                            )
                          : getPercentOfRNI("carbs", value);
                      return (
                        <div className="p-2 bg-gray-50 rounded">
                          <div className="text-gray-600">Carb</div>
                          <div className="font-semibold text-gray-900">
                            {value} g
                          </div>
                          <div className="text-[11px] text-gray-500">
                            {formatPercent(percent)}
                          </div>
                        </div>
                      );
                    })()}

                    {(() => {
                      const value = selectedFood.fat * servingMultiplier;
                      const percent =
                        percentMode === "rni"
                          ? getPercentOfRNI("fat", value)
                          : activeDiseaseForTargets
                          ? getPercentOfDiseaseTarget(
                              activeDiseaseForTargets,
                              "fat",
                              value
                            )
                          : getPercentOfRNI("fat", value);
                      return (
                  <div className="p-2 bg-gray-50 rounded">
                          <div className="text-gray-600">Chất béo</div>
                          <div className="font-semibold text-gray-900">
                            {value} g
                          </div>
                          <div className="text-[11px] text-gray-500">
                            {formatPercent(percent)}
                          </div>
                  </div>
                      );
                    })()}

                    {(() => {
                      const baseValue = selectedFood.fiber ?? null;
                      const value =
                        baseValue != null ? baseValue * servingMultiplier : null;
                      const percent =
                        value != null
                          ? percentMode === "rni"
                            ? getPercentOfRNI("fiber", value)
                            : activeDiseaseForTargets
                            ? getPercentOfDiseaseTarget(
                                activeDiseaseForTargets,
                                "fiber",
                                value
                              )
                            : getPercentOfRNI("fiber", value)
                          : null;
                      return (
                  <div className="p-2 bg-gray-50 rounded">
                          <div className="text-gray-600">Chất xơ</div>
                          <div className="font-semibold text-gray-900">
                            {value != null ? `${value} g` : "-"}
                          </div>
                          <div className="text-[11px] text-gray-500">
                            {formatPercent(percent)}
                          </div>
                          {percent != null && percent >= 20 && (
                            <div className="mt-0.5 inline-flex items-center rounded-full bg-green-100 px-1.5 py-0.5 text-[10px] text-green-800">
                              Giàu xơ
                            </div>
                          )}
                  </div>
                      );
                    })()}

                    {(() => {
                      const baseValue = selectedFood.sugars ?? null;
                      const value =
                        baseValue != null ? baseValue * servingMultiplier : null;
                      return (
                  <div className="p-2 bg-gray-50 rounded">
                          <div className="text-gray-600">Đường</div>
                          <div className="font-semibold text-gray-900">
                            {value != null ? `${value} g` : "-"}
                          </div>
                          <div className="text-[11px] text-gray-500">-</div>
                  </div>
                      );
                    })()}

                  <div className="p-2 bg-gray-50 rounded">
                      <div className="text-gray-600">Nước</div>
                      <div className="font-semibold text-gray-900">
                        {selectedFood.water != null
                          ? `${selectedFood.water * servingMultiplier} g`
                          : "-"}
                      </div>
                      <div className="text-[11px] text-gray-500">-</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Block 2 – Micronutrients (accordion) */}
              <div className="border rounded-lg">
                <button
                  type="button"
                  onClick={() => setShowMicronutrients((v) => !v)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-800 bg-gray-50 rounded-t-lg"
                >
                  <span>Vitamin & Khoáng chất chính ({servingSizeInGrams}g)</span>
                  <span className="text-xs text-gray-500">
                    {showMicronutrients ? "Ẩn bớt" : "Xem thêm vi chất"}
                  </span>
                </button>
                {showMicronutrients && (
                  <div className="px-3 pb-3 pt-2 text-xs">
                    <div className="grid grid-cols-2 gap-2">
                      {(() => {
                        const baseValue = selectedFood.vitaminC;
                        const value = baseValue != null ? baseValue * servingMultiplier : null;
                        const percent =
                          value != null
                            ? percentMode === "rni"
                              ? getPercentOfRNI("vitaminC", value)
                              : activeDiseaseForTargets
                              ? getPercentOfDiseaseTarget(
                                  activeDiseaseForTargets,
                                  "vitaminC",
                                  value
                                )
                              : getPercentOfRNI("vitaminC", value)
                            : null;
                        return (
                          <div className="p-2 bg-white rounded border border-gray-100">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Vitamin C</span>
                              <span className="font-semibold text-gray-900">
                                {value != null ? `${value.toFixed(1)} mg` : "-"}
                              </span>
                            </div>
                            <div className="mt-1 text-[11px] text-gray-500">
                              {formatMicronutrientRNI(percent)}
                            </div>
                          </div>
                        );
                      })()}

                      {(() => {
                        const baseValue = selectedFood.vitaminA;
                        const value = baseValue != null ? baseValue * servingMultiplier : null;
                        const percent =
                          value != null
                            ? percentMode === "rni"
                              ? getPercentOfRNI("vitaminA", value)
                              : activeDiseaseForTargets
                              ? getPercentOfDiseaseTarget(
                                  activeDiseaseForTargets,
                                  "vitaminA",
                                  value
                                )
                              : getPercentOfRNI("vitaminA", value)
                            : null;
                        return (
                          <div className="p-2 bg-white rounded border border-gray-100">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Vitamin A</span>
                              <span className="font-semibold text-gray-900">
                                {value != null ? `${Math.round(value)} IU` : "-"}
                              </span>
                            </div>
                            <div className="mt-1 text-[11px] text-gray-500">
                              {formatMicronutrientRNI(percent)}
                            </div>
                          </div>
                        );
                      })()}

                      {(() => {
                        const baseValue = selectedFood.sodium;
                        const value = baseValue != null ? baseValue * servingMultiplier : null;
                        const percentRNI =
                          value != null
                            ? getPercentOfRNI("sodium", value)
                            : null;
                        const percentDisease =
                          value != null && activeDiseaseForTargets
                            ? getPercentOfDiseaseTarget(
                                activeDiseaseForTargets,
                                "sodium",
                                value
                              )
                            : null;
                        const percentToShow =
                          percentMode === "disease" &&
                          percentDisease != null &&
                          activeDiseaseForTargets
                            ? percentDisease
                            : percentRNI;
                        return (
                          <div className="p-2 bg-white rounded border border-gray-100">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Natri</span>
                              <span className="font-semibold text-gray-900 flex items-center gap-1">
                                {value != null ? `${Math.round(value)} mg` : "-"}
                                <span className="text-red-500" title="Tim mạch, THA">❤️</span>
                              </span>
                            </div>
                            <div className="mt-1 text-[11px] text-gray-500">
                              {formatMicronutrientWithLabel(
                                percentToShow,
                                percentMode === "disease" &&
                                activeDiseaseForTargets === "hypertension"
                                  ? "mục tiêu THA"
                                  : "RNI"
                              )}
                            </div>
                            {activeDiseaseForTargets === "hypertension" &&
                              percentDisease != null &&
                              value != null && (
                                <div className="mt-0.5 text-[10px]">
                                  {percentDisease >= 30 ? (
                                    <span className="inline-flex rounded-full bg-red-100 px-1.5 py-0.5 text-red-800">
                                      Rất nhiều natri
                                    </span>
                                  ) : percentDisease >= 20 ? (
                                    <span className="inline-flex rounded-full bg-orange-100 px-1.5 py-0.5 text-orange-800">
                                      Nhiều natri
                                    </span>
                                  ) : percentDisease <= 5 ? (
                                    <span className="inline-flex rounded-full bg-green-100 px-1.5 py-0.5 text-green-800">
                                      Ít natri
                                    </span>
                                  ) : null}
                                </div>
                              )}
                          </div>
                        );
                      })()}

                      {(() => {
                        const baseValue = selectedFood.potassium;
                        const value = baseValue != null ? baseValue * servingMultiplier : null;
                        const percentRNI =
                          value != null
                            ? getPercentOfRNI("potassium", value)
                            : null;
                        const percentDisease =
                          value != null && activeDiseaseForTargets
                            ? getPercentOfDiseaseTarget(
                                activeDiseaseForTargets,
                                "potassium",
                                value
                              )
                            : null;
                        const percentToShow =
                          percentMode === "disease" &&
                          percentDisease != null &&
                          activeDiseaseForTargets === "kidney"
                            ? percentDisease
                            : percentRNI;
                        return (
                          <div className="p-2 bg-white rounded border border-gray-100">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Kali</span>
                              <span className="font-semibold text-gray-900 flex items-center gap-1">
                                {value != null ? `${Math.round(value)} mg` : "-"}
                                <span className="text-yellow-600" title="Bệnh thận">⚠️</span>
                              </span>
                            </div>
                            <div className="mt-1 text-[11px] text-gray-500">
                              {formatMicronutrientWithLabel(
                                percentToShow,
                                percentMode === "disease" &&
                                activeDiseaseForTargets === "kidney"
                                  ? "mục tiêu thận"
                                  : "RNI"
                              )}
                            </div>
                            {activeDiseaseForTargets === "kidney" &&
                              percentDisease != null &&
                              percentDisease >= 30 && (
                                <div className="mt-0.5 text-[10px]">
                                  <span className="inline-flex rounded-full bg-orange-100 px-1.5 py-0.5 text-orange-800">
                                    Giàu kali
                                  </span>
                                </div>
                              )}
                          </div>
                        );
                      })()}

                      {(() => {
                        const baseValue = selectedFood.calcium;
                        const value = baseValue != null ? baseValue * servingMultiplier : null;
                        const percent =
                          value != null
                            ? getPercentOfRNI("calcium", value)
                            : null;
                        return (
                          <div className="p-2 bg-white rounded border border-gray-100">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Canxi</span>
                              <span className="font-semibold text-gray-900">
                                {value != null ? `${Math.round(value)} mg` : "-"}
                              </span>
                            </div>
                            <div className="mt-1 text-[11px] text-gray-500">
                              {formatMicronutrientRNI(percent)}
                            </div>
                          </div>
                        );
                      })()}

                      {(() => {
                        const baseValue = selectedFood.iron;
                        const value = baseValue != null ? baseValue * servingMultiplier : null;
                        const percent =
                          value != null ? getPercentOfRNI("iron", value) : null;
                        return (
                          <div className="p-2 bg-white rounded border border-gray-100">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Sắt</span>
                              <span className="font-semibold text-gray-900">
                                {value != null ? `${value.toFixed(1)} mg` : "-"}
                              </span>
                            </div>
                            <div className="mt-1 text-[11px] text-gray-500">
                              {formatMicronutrientRNI(percent)}
                            </div>
                          </div>
                        );
                      })()}

                      {(() => {
                        const value = selectedFood.zinc;
                        const percent =
                          value != null ? getPercentOfRNI("zinc", value) : null;
                        return (
                          <div className="p-2 bg-white rounded border border-gray-100">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Kẽm</span>
                              <span className="font-semibold text-gray-900">
                                {value != null ? `${value} mg` : "-"}
                              </span>
                            </div>
                            <div className="mt-1 text-[11px] text-gray-500">
                              {formatMicronutrientRNI(percent)}
                            </div>
                          </div>
                        );
                      })()}

                      {(() => {
                        const baseValue = selectedFood.phosphorus;
                        const value = baseValue != null ? baseValue * servingMultiplier : null;
                        // Tính %RNI dựa trên giá trị 100g (không scale) để cảnh báo
                        const percentRNIFor100g = baseValue != null
                          ? getPercentOfRNI("phosphorus", baseValue)
                          : null;
                        const percentRNI =
                          value != null
                            ? getPercentOfRNI("phosphorus", value)
                            : null;
                        const percentDisease =
                          value != null && activeDiseaseForTargets
                            ? getPercentOfDiseaseTarget(
                                activeDiseaseForTargets,
                                "phosphorus",
                                value
                              )
                            : null;
                        const percentToShow =
                          percentMode === "disease" &&
                          percentDisease != null &&
                          activeDiseaseForTargets === "kidney"
                            ? percentDisease
                            : percentRNI;
                        return (
                          <div className="p-2 bg-white rounded border border-gray-100">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Phốt pho</span>
                              <span className="font-semibold text-gray-900 flex items-center gap-1">
                                {value != null ? `${Math.round(value)} mg` : "-"}
                                <span className="text-yellow-600" title="Bệnh thận">⚠️</span>
                              </span>
                            </div>
                            <div className="mt-1 text-[11px] text-gray-500">
                              {formatMicronutrientWithLabel(
                                percentToShow,
                                percentMode === "disease" &&
                                activeDiseaseForTargets === "kidney"
                                  ? "mục tiêu thận"
                                  : "RNI"
                              )}
                            </div>
                            {percentRNIFor100g != null && percentRNIFor100g >= 30 && (
                              <div className="mt-1.5">
                                <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-0.5 text-[10px] text-yellow-800">
                                  <span>⚠️</span>
                                  <span>Không phù hợp bệnh thận mạn</span>
                                </span>
                              </div>
                            )}
                          </div>
                        );
                      })()}

                      {(() => {
                        const baseValue = selectedFood.magnesium;
                        const value = baseValue != null ? baseValue * servingMultiplier : null;
                        const percent =
                          value != null
                            ? getPercentOfRNI("magnesium", value)
                            : null;
                        return (
                          <div className="p-2 bg-white rounded border border-gray-100">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Magiê</span>
                              <span className="font-semibold text-gray-900">
                                {value != null ? `${Math.round(value)} mg` : "-"}
                              </span>
                            </div>
                            <div className="mt-1 text-[11px] text-gray-500">
                              {formatMicronutrientRNI(percent)}
                            </div>
                          </div>
                        );
                      })()}

                      {(() => {
                        const baseValue =
                          selectedFood.cholesterol ??
                          selectedFood.cardiovascular?.cholesterol;
                        const value = baseValue != null ? baseValue * servingMultiplier : null;
                        // Tính %RNI dựa trên giá trị 100g (không scale) để cảnh báo
                        const percentRNIFor100g = baseValue != null
                          ? getPercentOfRNI("cholesterol", baseValue)
                          : null;
                        const percentRNI =
                          value != null
                            ? getPercentOfRNI("cholesterol", value)
                            : null;
                        const percentDisease =
                          value != null && activeDiseaseForTargets
                            ? getPercentOfDiseaseTarget(
                                activeDiseaseForTargets,
                                "cholesterol",
                                value
                              )
                            : null;
                        const percentToShow =
                          percentMode === "disease" &&
                          percentDisease != null &&
                          activeDiseaseForTargets === "cardiovascular"
                            ? percentDisease
                            : percentRNI;
                        return (
                          <div className="p-2 bg-white rounded border border-gray-100">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Cholesterol</span>
                              <span className="font-semibold text-gray-900 flex items-center gap-1">
                                {value != null ? `${Math.round(value)} mg` : "-"}
                                <span className="text-red-500" title="Tim mạch, THA">❤️</span>
                              </span>
                            </div>
                            <div className="mt-1 text-[11px] text-gray-500">
                              {formatMicronutrientWithLabel(
                                percentToShow,
                                percentMode === "disease" &&
                                activeDiseaseForTargets === "cardiovascular"
                                  ? "mục tiêu tim mạch"
                                  : "RNI"
                              )}
                            </div>
                            {percentRNIFor100g != null && percentRNIFor100g >= 30 && (
                              <div className="mt-1.5">
                                <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-0.5 text-[10px] text-yellow-800">
                                  <span>⚠️</span>
                                  <span>Hạn chế cho bệnh tim mạch</span>
                                </span>
                              </div>
                            )}
                          </div>
                        );
                      })()}
                    </div>

                    {/* Vitamin nhóm B & D */}
                    <div className="mt-3 border-t border-gray-100 pt-2">
                      <div className="text-[11px] font-semibold text-gray-700 mb-1">
                        Vitamin nhóm B & D ({servingSizeInGrams}g)
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {(() => {
                          const baseValue = selectedFood.vitaminB1;
                          const value = baseValue != null ? baseValue * servingMultiplier : null;
                          const percent =
                            value != null
                              ? getPercentOfRNI("vitaminB1", value)
                              : null;
                          return (
                            <div className="p-2 bg-white rounded border border-gray-100">
                              <div className="flex items-center justify-between">
                                <span className="text-gray-700">Vitamin B1</span>
                                <span className="font-semibold text-gray-900">
                                  {value != null ? `${value.toFixed(2)} mg` : "-"}
                                </span>
                              </div>
                              <div className="mt-1 text-[11px] text-gray-500">
                                {formatMicronutrientRNI(percent)}
                              </div>
                            </div>
                          );
                        })()}

                        {(() => {
                          const baseValue = selectedFood.vitaminB2;
                          const value = baseValue != null ? baseValue * servingMultiplier : null;
                          const percent =
                            value != null
                              ? getPercentOfRNI("vitaminB2", value)
                              : null;
                          return (
                            <div className="p-2 bg-white rounded border border-gray-100">
                              <div className="flex items-center justify-between">
                                <span className="text-gray-700">Vitamin B2</span>
                                <span className="font-semibold text-gray-900">
                                  {value != null ? `${value.toFixed(2)} mg` : "-"}
                                </span>
                              </div>
                              <div className="mt-1 text-[11px] text-gray-500">
                                {formatMicronutrientRNI(percent)}
                              </div>
                            </div>
                          );
                        })()}

                        {(() => {
                          const baseValue = selectedFood.vitaminB6;
                          const value = baseValue != null ? baseValue * servingMultiplier : null;
                          const percent =
                            value != null
                              ? getPercentOfRNI("vitaminB6", value)
                              : null;
                          return (
                            <div className="p-2 bg-white rounded border border-gray-100">
                              <div className="flex items-center justify-between">
                                <span className="text-gray-700">Vitamin B6</span>
                                <span className="font-semibold text-gray-900">
                                  {value != null ? `${value.toFixed(2)} mg` : "-"}
                                </span>
                              </div>
                              <div className="mt-1 text-[11px] text-gray-500">
                                {formatMicronutrientRNI(percent)}
                              </div>
                            </div>
                          );
                        })()}

                        {(() => {
                          const baseValue = selectedFood.folate;
                          const value = baseValue != null ? baseValue * servingMultiplier : null;
                          const percent =
                            value != null
                              ? getPercentOfRNI("folate", value)
                              : null;
                          return (
                            <div className="p-2 bg-white rounded border border-gray-100">
                              <div className="flex items-center justify-between">
                                <span className="text-gray-700">Folate</span>
                                <span className="font-semibold text-gray-900">
                                  {value != null ? `${Math.round(value)} µg` : "-"}
                                </span>
                              </div>
                              <div className="mt-1 text-[11px] text-gray-500">
                                {formatMicronutrientRNI(percent)}
                              </div>
                            </div>
                          );
                        })()}

                        {(() => {
                          const baseValue = selectedFood.vitaminB12;
                          const value = baseValue != null ? baseValue * servingMultiplier : null;
                          const percent =
                            value != null
                              ? getPercentOfRNI("vitaminB12", value)
                              : null;
                          return (
                            <div className="p-2 bg-white rounded border border-gray-100">
                              <div className="flex items-center justify-between">
                                <span className="text-gray-700">Vitamin B12</span>
                                <span className="font-semibold text-gray-900">
                                  {value != null ? `${value.toFixed(1)} µg` : "-"}
                                </span>
                              </div>
                              <div className="mt-1 text-[11px] text-gray-500">
                                {formatMicronutrientRNI(percent)}
                              </div>
                            </div>
                          );
                        })()}

                        {(() => {
                          const baseValue = selectedFood.vitaminD;
                          const value = baseValue != null ? baseValue * servingMultiplier : null;
                          const percent =
                            value != null
                              ? getPercentOfRNI("vitaminD", value)
                              : null;
                          return (
                            <div className="p-2 bg-white rounded border border-gray-100">
                              <div className="flex items-center justify-between">
                                <span className="text-gray-700">Vitamin D</span>
                                <span className="font-semibold text-gray-900">
                                  {value != null ? `${Math.round(value)} IU` : "-"}
                                </span>
                              </div>
                              <div className="mt-1 text-[11px] text-gray-500">
                                {formatMicronutrientRNI(percent)}
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    </div>

                    <p className="mt-2 text-[11px] text-gray-500">
                      Thông tin mang tính giáo dục dinh dưỡng.
                      <br />
                      Không thay thế tư vấn y khoa hoặc chỉ định điều trị cá thể hóa.
                    </p>
                  </div>
                )}
              </div>

              {/* Block: Nhận xét vi lượng */}
              {showMicronutrients && (
                <div className="mt-4 border rounded-lg bg-blue-50 border-blue-200">
                  <div className="px-3 py-2 bg-blue-100 rounded-t-lg">
                    <h4 className="font-semibold text-sm text-gray-900 flex items-center gap-2">
                      <span>🧠</span>
                      <span>Nhận xét vi lượng (tự động sinh)</span>
                    </h4>
                  </div>
                  <div className="px-3 pb-3 pt-2">
                    {(() => {
                      const insights = generateMicronutrientInsights(selectedFood, servingMultiplier);
                      if (insights.length === 0) {
                        return (
                          <p className="text-xs text-gray-600">
                            Không có nhận xét đặc biệt về vi lượng.
                          </p>
                        );
                      }
                      return (
                        <ul className="space-y-1 text-xs text-gray-700">
                          {insights.map((insight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-blue-600 mt-0.5">•</span>
                              <span>{insight}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    })()}
                    <p className="mt-2 text-[11px] text-gray-500 italic">
                      Block này chỉ mang tính giáo dục, không thay thế chỉ định điều trị.
                    </p>
                  </div>
                </div>
              )}

              {/* Block 3 – Disease Assessment */}
              <div>
                <h4 className="font-semibold text-sm text-gray-900 mb-2">
                  Đánh giá theo Bệnh
                </h4>
                {selectedDisease === "all" ? (
                  <div className="space-y-2">
                    {diseases.map((disease) => {
                      const assessment = getDiseaseAssessment(
                        selectedFood,
                        disease.value
                      );
                      if (!assessment) return null;
                      return (
                        <div
                          key={disease.value}
                          className="flex items-center justify-between p-2 bg-gray-50 rounded"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{disease.icon}</span>
                            <span className="text-sm font-medium">
                              {disease.label}
                            </span>
                          </div>
                          <span
                            className={`px-2 py-1 rounded text-xs ${getAssessmentColor(
                              assessment
                            )}`}
                          >
                            {getAssessmentLabel(assessment)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">
                          {
                            diseases.find(
                              (d) => d.value === selectedDisease
                            )?.icon
                          }
                        </span>
                        <span className="font-medium">
                          {
                            diseases.find(
                              (d) => d.value === selectedDisease
                            )?.label
                          }
                        </span>
                      </div>
                      <span
                        className={`px-3 py-1 rounded text-sm font-medium ${getAssessmentColor(
                          getDiseaseAssessment(selectedFood, selectedDisease)
                        )}`}
                      >
                        {getAssessmentLabel(
                          getDiseaseAssessment(selectedFood, selectedDisease)
                        )}
                      </span>
                    </div>
                    {selectedDisease === "diabetes" && selectedFood.diabetes && (
                      <div className="text-sm text-gray-700 mt-2 space-y-1">
                        <div>
                          GI: {selectedFood.diabetes.glycemicIndex || "-"}
                        </div>
                        {selectedFood.diabetes.glycemicLoad && (
                          <div>
                            GL: {selectedFood.diabetes.glycemicLoad}{" "}
                            <span className="text-xs text-gray-500">
                              (GL &gt; 20/khẩu phần = cao)
                            </span>
                            <span
                              className="ml-1 text-[11px] text-gray-400"
                              title="GL (glycemic load) kết hợp GI và lượng carb trong khẩu phần. GL &gt; 20/bữa thường gây tăng đường huyết mạnh và kéo dài hơn, nên cần hạn chế ở người đái tháo đường."
                            >
                              (Giải thích)
                            </span>
                          </div>
                        )}
                        <div>
                          Carb/khẩu phần: {selectedFood.diabetes.carbPerPortion} g
                        </div>
                      </div>
                    )}
                    {selectedDisease === "gout" && selectedFood.gout && (
                      <div className="text-sm text-gray-700 mt-2 space-y-1">
                        <div>
                          Purin: {selectedFood.gout.purine} mg/100g <span className="text-yellow-600" title="Bệnh gút">⚠️</span>
                        </div>
                        <div>
                          Mức độ:{" "}
                          {selectedFood.gout.purineLevel === "low"
                            ? "Thấp"
                            : selectedFood.gout.purineLevel === "medium"
                            ? "Trung bình"
                            : selectedFood.gout.purineLevel === "high"
                            ? "Cao"
                            : "Rất cao"}
                          <span
                            className="ml-1 text-[11px] text-gray-400"
                            title="Thực phẩm nhiều purine làm tăng acid uric máu; ở người gút, điều này dễ kích hoạt hoặc làm nặng thêm cơn gút cấp nên cần hạn chế/ tránh các nhóm purine cao và rất cao."
                          >
                            (Vì sao quan trọng?)
                          </span>
                        </div>
                      </div>
                    )}
                    {selectedDisease === "kidney" && selectedFood.kidney && (
                      <div className="text-sm text-gray-700 mt-2 space-y-1">
                        <div>
                          Kali: {selectedFood.kidney.potassium} mg/100g
                        </div>
                        <div>
                          Phốt pho: {selectedFood.kidney.phosphorus} mg/100g
                        </div>
                      </div>
                    )}
                    {selectedDisease === "hypertension" && (
                      <div className="text-sm text-gray-700 mt-2 space-y-1">
                        <div>Natri: {selectedFood.sodium ?? "-"} mg/100g</div>
                      </div>
                    )}
                    {selectedDisease === "cardiovascular" &&
                      selectedFood.cardiovascular && (
                        <div className="text-sm text-gray-700 mt-2 space-y-1">
                          <div>
                            Cholesterol:{" "}
                            {selectedFood.cardiovascular.cholesterol} mg/100g
                          </div>
                          <div>
                            Chất béo bão hòa:{" "}
                            {selectedFood.cardiovascular.saturatedFat} g/100g
                          </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Disease Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lọc theo bệnh:
                </label>
                <div className="flex flex-wrap gap-2 overflow-x-auto pb-1">
                  <button
                    type="button"
                    onClick={() => setSelectedDisease("all")}
                    className={`px-3 py-1.5 text-sm rounded-lg whitespace-nowrap transition-colors ${
                      selectedDisease === "all"
                        ? "bg-yellow-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Tất cả
                  </button>
                  {diseases.map((disease) => (
                    <button
                      key={disease.value}
                      type="button"
                      onClick={() => setSelectedDisease(disease.value)}
                      className={`px-3 py-1.5 text-sm rounded-lg whitespace-nowrap transition-colors ${
                        selectedDisease === disease.value
                          ? "bg-yellow-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {disease.icon} {disease.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              {selectedFood.notes && (
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-3">
                  <p className="text-sm text-blue-900">
                    <strong>Lưu ý:</strong> {selectedFood.notes}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tips */}
      <Card>
        <CardHeader icon={Info} title="Cách Sử dụng" />
        <CardContent>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Nhập tên thực phẩm vào ô tìm kiếm</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Chọn thực phẩm từ danh sách để xem chi tiết</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Lọc theo bệnh lý để xem đánh giá cụ thể</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Công cụ này có thể được nhúng vào các bài viết để tra cứu nhanh</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
