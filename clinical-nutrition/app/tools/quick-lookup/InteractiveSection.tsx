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
  if (value == null || Number.isNaN(value)) return "-";
  if (value < 1) return "<1%";
  if (value < 10) return value.toFixed(1) + "%";
  if (value > 999) return ">999%";
  return Math.round(value) + "%";
}

function getPercentBarColor(percent: number | null): string {
  if (percent == null) return "bg-gray-200";
  if (percent <= 30) return "bg-green-500";
  if (percent <= 70) return "bg-yellow-400";
  return "bg-red-500";
}

export function InteractiveSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFood, setSelectedFood] = useState<ExtendedFoodItem | null>(null);
  const [selectedDisease, setSelectedDisease] = useState<DiseaseType | "all">("all");
  const [percentMode, setPercentMode] = useState<PercentMode>("rni");
  const [showMicronutrients, setShowMicronutrients] = useState(false);
  // Hệ số khẩu phần so với khẩu phần gốc trong database (servingSize)
  const [servingMultiplier, setServingMultiplier] = useState<number>(1);

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
              {(() => {
                const baseSize = selectedFood.servingSize || 100;
                const currentSize = baseSize * servingMultiplier;
                return (
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>
                      Đang xem cho khẩu phần ≈{" "}
                      <span className="font-semibold">{currentSize}</span> g
                      {" "}
                      <span className="text-[11px] text-gray-500">
                        (khẩu phần gốc: {baseSize} g)
                      </span>
                    </span>
                    <div className="inline-flex rounded-full bg-gray-100 p-0.5">
                      {[0.5, 1, 1.5, 2].map((mult) => (
                        <button
                          key={mult}
                          type="button"
                          onClick={() => setServingMultiplier(mult)}
                          className={`px-2 py-0.5 rounded-full text-[11px] ${
                            servingMultiplier === mult
                              ? "bg-yellow-600 text-white"
                              : "text-gray-700"
                          }`}
                        >
                          {mult}×
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })()}

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
                  <span>Vitamin & Khoáng chất chính (100g)</span>
                  <span className="text-xs text-gray-500">
                    {showMicronutrients ? "Ẩn bớt" : "Xem thêm vi chất"}
                  </span>
                </button>
                {showMicronutrients && (
                  <div className="px-3 pb-3 pt-2 text-xs">
                    <div className="grid grid-cols-2 gap-2">
                      {(() => {
                        const value = selectedFood.vitaminC;
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
                                {value != null ? `${value} mg` : "-"}
                              </span>
                            </div>
                            <div className="mt-1 text-[11px] text-gray-500">
                              {formatPercent(percent)} RNI
                            </div>
                          </div>
                        );
                      })()}

                      {(() => {
                        const value = selectedFood.vitaminA;
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
                                {value != null ? `${value} IU` : "-"}
                              </span>
                            </div>
                            <div className="mt-1 text-[11px] text-gray-500">
                              {formatPercent(percent)} RNI
                            </div>
                          </div>
                        );
                      })()}

                      {(() => {
                        const value = selectedFood.sodium;
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
                              <span className="font-semibold text-gray-900">
                                {value != null ? `${value} mg` : "-"}
                              </span>
                            </div>
                            <div className="mt-1 text-[11px] text-gray-500">
                              {formatPercent(percentToShow)}{" "}
                              {percentMode === "disease" &&
                              activeDiseaseForTargets === "hypertension"
                                ? "mục tiêu THA"
                                : "RNI"}
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
                        const value = selectedFood.potassium;
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
                              <span className="font-semibold text-gray-900">
                                {value != null ? `${value} mg` : "-"}
                              </span>
                            </div>
                            <div className="mt-1 text-[11px] text-gray-500">
                              {formatPercent(percentToShow)}{" "}
                              {percentMode === "disease" &&
                              activeDiseaseForTargets === "kidney"
                                ? "mục tiêu thận"
                                : "RNI"}
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
                        const value = selectedFood.calcium;
                        const percent =
                          value != null
                            ? getPercentOfRNI("calcium", value)
                            : null;
                        return (
                          <div className="p-2 bg-white rounded border border-gray-100">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Canxi</span>
                              <span className="font-semibold text-gray-900">
                                {value != null ? `${value} mg` : "-"}
                              </span>
                            </div>
                            <div className="mt-1 text-[11px] text-gray-500">
                              {formatPercent(percent)} RNI
                            </div>
                          </div>
                        );
                      })()}

                      {(() => {
                        const value = selectedFood.iron;
                        const percent =
                          value != null ? getPercentOfRNI("iron", value) : null;
                        return (
                          <div className="p-2 bg-white rounded border border-gray-100">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Sắt</span>
                              <span className="font-semibold text-gray-900">
                                {value != null ? `${value} mg` : "-"}
                              </span>
                            </div>
                            <div className="mt-1 text-[11px] text-gray-500">
                              {formatPercent(percent)} RNI
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
                              {formatPercent(percent)} RNI
                            </div>
                          </div>
                        );
                      })()}

                      {(() => {
                        const value = selectedFood.phosphorus;
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
                              <span className="font-semibold text-gray-900">
                                {value != null ? `${value} mg` : "-"}
                              </span>
                            </div>
                            <div className="mt-1 text-[11px] text-gray-500">
                              {formatPercent(percentToShow)}{" "}
                              {percentMode === "disease" &&
                              activeDiseaseForTargets === "kidney"
                                ? "mục tiêu thận"
                                : "RNI"}
                            </div>
                          </div>
                        );
                      })()}

                      {(() => {
                        const value = selectedFood.magnesium;
                        const percent =
                          value != null
                            ? getPercentOfRNI("magnesium", value)
                            : null;
                        return (
                          <div className="p-2 bg-white rounded border border-gray-100">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Magiê</span>
                              <span className="font-semibold text-gray-900">
                                {value != null ? `${value} mg` : "-"}
                              </span>
                            </div>
                            <div className="mt-1 text-[11px] text-gray-500">
                              {formatPercent(percent)} RNI
                            </div>
                          </div>
                        );
                      })()}

                      {(() => {
                        const value =
                          selectedFood.cholesterol ??
                          selectedFood.cardiovascular?.cholesterol;
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
                              <span className="font-semibold text-gray-900">
                                {value != null ? `${value} mg` : "-"}
                              </span>
                            </div>
                            <div className="mt-1 text-[11px] text-gray-500">
                              {formatPercent(percentToShow)}{" "}
                              {percentMode === "disease" &&
                              activeDiseaseForTargets === "cardiovascular"
                                ? "mục tiêu tim mạch"
                                : "RNI"}
                            </div>
                          </div>
                        );
                      })()}
                    </div>

                    {/* Vitamin nhóm B & D */}
                    <div className="mt-3 border-t border-gray-100 pt-2">
                      <div className="text-[11px] font-semibold text-gray-700 mb-1">
                        Vitamin nhóm B & D (100g)
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {(() => {
                          const value = selectedFood.vitaminB1;
                          const percent =
                            value != null
                              ? getPercentOfRNI("vitaminB1", value)
                              : null;
                          return (
                            <div className="p-2 bg-white rounded border border-gray-100">
                              <div className="flex items-center justify-between">
                                <span className="text-gray-700">Vitamin B1</span>
                                <span className="font-semibold text-gray-900">
                                  {value != null ? `${value} mg` : "-"}
                                </span>
                              </div>
                              <div className="mt-1 text-[11px] text-gray-500">
                                {formatPercent(percent)} RNI
                              </div>
                            </div>
                          );
                        })()}

                        {(() => {
                          const value = selectedFood.vitaminB2;
                          const percent =
                            value != null
                              ? getPercentOfRNI("vitaminB2", value)
                              : null;
                          return (
                            <div className="p-2 bg-white rounded border border-gray-100">
                              <div className="flex items-center justify-between">
                                <span className="text-gray-700">Vitamin B2</span>
                                <span className="font-semibold text-gray-900">
                                  {value != null ? `${value} mg` : "-"}
                                </span>
                              </div>
                              <div className="mt-1 text-[11px] text-gray-500">
                                {formatPercent(percent)} RNI
                              </div>
                            </div>
                          );
                        })()}

                        {(() => {
                          const value = selectedFood.vitaminB6;
                          const percent =
                            value != null
                              ? getPercentOfRNI("vitaminB6", value)
                              : null;
                          return (
                            <div className="p-2 bg-white rounded border border-gray-100">
                              <div className="flex items-center justify-between">
                                <span className="text-gray-700">Vitamin B6</span>
                                <span className="font-semibold text-gray-900">
                                  {value != null ? `${value} mg` : "-"}
                                </span>
                              </div>
                              <div className="mt-1 text-[11px] text-gray-500">
                                {formatPercent(percent)} RNI
                              </div>
                            </div>
                          );
                        })()}

                        {(() => {
                          const value = selectedFood.folate;
                          const percent =
                            value != null
                              ? getPercentOfRNI("folate", value)
                              : null;
                          return (
                            <div className="p-2 bg-white rounded border border-gray-100">
                              <div className="flex items-center justify-between">
                                <span className="text-gray-700">Folate</span>
                                <span className="font-semibold text-gray-900">
                                  {value != null ? `${value} µg` : "-"}
                                </span>
                              </div>
                              <div className="mt-1 text-[11px] text-gray-500">
                                {formatPercent(percent)} RNI
                              </div>
                            </div>
                          );
                        })()}

                        {(() => {
                          const value = selectedFood.vitaminB12;
                          const percent =
                            value != null
                              ? getPercentOfRNI("vitaminB12", value)
                              : null;
                          return (
                            <div className="p-2 bg-white rounded border border-gray-100">
                              <div className="flex items-center justify-between">
                                <span className="text-gray-700">Vitamin B12</span>
                                <span className="font-semibold text-gray-900">
                                  {value != null ? `${value} µg` : "-"}
                                </span>
                              </div>
                              <div className="mt-1 text-[11px] text-gray-500">
                                {formatPercent(percent)} RNI
                              </div>
                            </div>
                          );
                        })()}

                        {(() => {
                          const value = selectedFood.vitaminD;
                          const percent =
                            value != null
                              ? getPercentOfRNI("vitaminD", value)
                              : null;
                          return (
                            <div className="p-2 bg-white rounded border border-gray-100">
                              <div className="flex items-center justify-between">
                                <span className="text-gray-700">Vitamin D</span>
                                <span className="font-semibold text-gray-900">
                                  {value != null ? `${value} IU` : "-"}
                                </span>
                              </div>
                              <div className="mt-1 text-[11px] text-gray-500">
                                {formatPercent(percent)} RNI
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    </div>

                    <p className="mt-2 text-[11px] text-gray-500">
                      Các % trên chỉ mang tính giáo dục, không thay thế chỉ định
                      điều trị cá thể hóa.
                    </p>
                  </div>
                )}
              </div>

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
                          Purin: {selectedFood.gout.purine} mg/100g
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
