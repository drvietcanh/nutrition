"use client";

import { useState } from "react";
import type { ClinicalInput } from "../../../lib/clinical-input";
import { calculateRefeedingSyndromeRisk } from "../../../lib/calculators/refeedingSyndrome";
import type { RefeedingSyndromeResult } from "../../../lib/calculators/refeedingSyndrome";
import { validateWeight, validateHeight, validateAge, validateWeightLossPercent } from "../../../lib/utils/validation";
import { parseNumber, formatNumber, formatPercentage } from "../../../lib/utils/formatting";

interface FormState {
  weightKg: string;
  heightCm: string;
  ageYears: string;
  weightLossPercent: string;
  fastingDays: string;
  alcoholDependence: boolean;
  chemotherapy: boolean;
  diabetes: boolean;
  electrolyteImbalance: boolean;
}

const initialFormState: FormState = {
  weightKg: "",
  heightCm: "",
  ageYears: "",
  weightLossPercent: "",
  fastingDays: "",
  alcoholDependence: false,
  chemotherapy: false,
  diabetes: false,
  electrolyteImbalance: false,
};

export function InteractiveSection() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [result, setResult] = useState<RefeedingSyndromeResult | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const toClinicalInput = (): ClinicalInput => {
    return {
      ageYears: parseNumber(form.ageYears),
      sex: null,
      weightKg: parseNumber(form.weightKg),
      heightCm: parseNumber(form.heightCm),
      recentWeightLossPercent: parseNumber(form.weightLossPercent),
      intakeReductionPercent: null,
      diseaseContextCode: null,
      diseaseContextFreeText: undefined,
    };
  };

  const handleCalculate = () => {
    const errors: Record<string, string> = {};

    const weight = parseNumber(form.weightKg);
    const weightValidation = validateWeight(weight);
    if (!weightValidation.isValid && weightValidation.error) {
      errors.weightKg = weightValidation.error;
    }

    const height = parseNumber(form.heightCm);
    const heightValidation = validateHeight(height);
    if (!heightValidation.isValid && heightValidation.error) {
      errors.heightCm = heightValidation.error;
    }

    const age = parseNumber(form.ageYears);
    if (age != null) {
      const ageValidation = validateAge(age);
      if (!ageValidation.isValid && ageValidation.error) {
        errors.ageYears = ageValidation.error;
      }
    }

    const weightLoss = parseNumber(form.weightLossPercent);
    if (weightLoss != null) {
      const weightLossValidation = validateWeightLossPercent(weightLoss);
      if (!weightLossValidation.isValid && weightLossValidation.error) {
        errors.weightLossPercent = weightLossValidation.error;
      }
    }

    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      const input = toClinicalInput();
      
      // Calculate BMI
      let bmi: number | null = null;
      if (input.weightKg != null && input.heightCm != null && input.weightKg > 0 && input.heightCm > 0) {
        const heightM = input.heightCm / 100;
        bmi = input.weightKg / (heightM * heightM);
      }

      const calculated = calculateRefeedingSyndromeRisk(input, {
        bmi,
        weightLossPercent: parseNumber(form.weightLossPercent),
        fastingDays: parseNumber(form.fastingDays),
        alcoholDependence: form.alcoholDependence,
        chemotherapy: form.chemotherapy,
        diabetes: form.diabetes,
        electrolyteImbalance: form.electrolyteImbalance,
      });
      setResult(calculated);
    } catch (error) {
      console.error("Error calculating refeeding risk:", error);
      setFieldErrors({
        _general: "Đã xảy ra lỗi khi tính toán. Vui lòng kiểm tra lại các giá trị nhập vào.",
      });
    }
  };

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm({ ...form, [key]: value });
    if (fieldErrors[key]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[key];
        return newErrors;
      });
    }
    if (fieldErrors._general) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors._general;
        return newErrors;
      });
    }
  };

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case "high":
        return "text-red-700 bg-red-50 border-red-300";
      case "moderate":
        return "text-amber-700 bg-amber-50 border-amber-300";
      case "low":
        return "text-green-700 bg-green-50 border-green-300";
      default:
        return "text-neutral-700 bg-neutral-50 border-neutral-300";
    }
  };

  return (
    <div className="space-y-6">
      {/* Input Form */}
      <section aria-labelledby="inputs-heading" className="space-y-3">
        <h2 id="inputs-heading" className="heading-4">
          3. Nhập thông tin
        </h2>
        <p className="text-body-sm">
          Chỉ sử dụng giá trị giả định, ẩn danh. Mục đích là hiểu cách các yếu tố nguy cơ
          định hình đánh giá nguy cơ hội chứng tái cho ăn.
        </p>

        <form
          className="grid gap-4 rounded-md border border-neutral-200 bg-white p-4 sm:grid-cols-2 sm:gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleCalculate();
          }}
          aria-label="Form nhập thông tin để đánh giá nguy cơ hội chứng tái cho ăn"
          noValidate
        >
          <div role="alert" aria-live="polite" aria-atomic="true" className="sr-only">
            {Object.keys(fieldErrors).length > 0 && (
              <span>
                Có {Object.keys(fieldErrors).length} lỗi trong form. Vui lòng kiểm tra lại.
              </span>
            )}
          </div>

          {/* Weight */}
          <div className="space-y-1">
            <label
              htmlFor="weightKg"
              className="block text-xs font-medium text-neutral-800 sm:text-sm"
            >
              Cân nặng (kg) <span className="text-red-600">*</span>
            </label>
            <input
              id="weightKg"
              type="number"
              inputMode="decimal"
              min={0}
              step="0.1"
              className={`w-full rounded-md border px-2 py-1 text-sm ${
                fieldErrors.weightKg ? "border-red-500" : "border-neutral-300"
              }`}
              placeholder="ví dụ: 50"
              value={form.weightKg}
              onChange={(e) => update("weightKg", e.target.value)}
              aria-invalid={!!fieldErrors.weightKg}
              aria-describedby={fieldErrors.weightKg ? "weightKg-error" : undefined}
            />
            {fieldErrors.weightKg && (
              <p id="weightKg-error" className="text-xs text-red-600" role="alert">
                {fieldErrors.weightKg}
              </p>
            )}
          </div>

          {/* Height */}
          <div className="space-y-1">
            <label
              htmlFor="heightCm"
              className="block text-xs font-medium text-neutral-800 sm:text-sm"
            >
              Chiều cao (cm) <span className="text-red-600">*</span>
            </label>
            <input
              id="heightCm"
              type="number"
              inputMode="decimal"
              min={0}
              step="0.1"
              className={`w-full rounded-md border px-2 py-1 text-sm ${
                fieldErrors.heightCm ? "border-red-500" : "border-neutral-300"
              }`}
              placeholder="ví dụ: 170"
              value={form.heightCm}
              onChange={(e) => update("heightCm", e.target.value)}
              aria-invalid={!!fieldErrors.heightCm}
              aria-describedby={fieldErrors.heightCm ? "heightCm-error" : undefined}
            />
            {fieldErrors.heightCm && (
              <p id="heightCm-error" className="text-xs text-red-600" role="alert">
                {fieldErrors.heightCm}
              </p>
            )}
          </div>

          {/* Age */}
          <div className="space-y-1">
            <label
              htmlFor="ageYears"
              className="block text-xs font-medium text-neutral-800 sm:text-sm"
            >
              Tuổi (năm)
            </label>
            <input
              id="ageYears"
              type="number"
              inputMode="numeric"
              min={0}
              className={`w-full rounded-md border px-2 py-1 text-sm ${
                fieldErrors.ageYears ? "border-red-500" : "border-neutral-300"
              }`}
              placeholder="ví dụ: 65"
              value={form.ageYears}
              onChange={(e) => update("ageYears", e.target.value)}
              aria-invalid={!!fieldErrors.ageYears}
              aria-describedby={fieldErrors.ageYears ? "ageYears-error" : undefined}
            />
            {fieldErrors.ageYears && (
              <p id="ageYears-error" className="text-xs text-red-600" role="alert">
                {fieldErrors.ageYears}
              </p>
            )}
          </div>

          {/* Weight Loss */}
          <div className="space-y-1">
            <label
              htmlFor="weightLossPercent"
              className="block text-xs font-medium text-neutral-800 sm:text-sm"
            >
              Giảm cân gần đây (%)
            </label>
            <input
              id="weightLossPercent"
              type="number"
              inputMode="decimal"
              min={0}
              max={50}
              step="0.1"
              className={`w-full rounded-md border px-2 py-1 text-sm ${
                fieldErrors.weightLossPercent ? "border-red-500" : "border-neutral-300"
              }`}
              placeholder="ví dụ: 15"
              value={form.weightLossPercent}
              onChange={(e) => update("weightLossPercent", e.target.value)}
              aria-invalid={!!fieldErrors.weightLossPercent}
              aria-describedby={fieldErrors.weightLossPercent ? "weightLossPercent-error" : undefined}
            />
            {fieldErrors.weightLossPercent && (
              <p id="weightLossPercent-error" className="text-xs text-red-600" role="alert">
                {fieldErrors.weightLossPercent}
              </p>
            )}
          </div>

          {/* Fasting Days */}
          <div className="space-y-1">
            <label
              htmlFor="fastingDays"
              className="block text-xs font-medium text-neutral-800 sm:text-sm"
            >
              Số ngày nhịn ăn
            </label>
            <input
              id="fastingDays"
              type="number"
              inputMode="numeric"
              min={0}
              className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
              placeholder="ví dụ: 5"
              value={form.fastingDays}
              onChange={(e) => update("fastingDays", e.target.value)}
            />
          </div>

          {/* Additional Risk Factors */}
          <div className="sm:col-span-2 space-y-3">
            <h3 className="text-sm font-semibold text-neutral-900">
              Yếu tố Nguy cơ Bổ sung (chọn nếu có):
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.alcoholDependence}
                  onChange={(e) => update("alcoholDependence", e.target.checked)}
                  className="rounded border-neutral-300"
                />
                <span className="text-sm text-neutral-700">Nghiện rượu</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.chemotherapy}
                  onChange={(e) => update("chemotherapy", e.target.checked)}
                  className="rounded border-neutral-300"
                />
                <span className="text-sm text-neutral-700">Hóa trị</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.diabetes}
                  onChange={(e) => update("diabetes", e.target.checked)}
                  className="rounded border-neutral-300"
                />
                <span className="text-sm text-neutral-700">Đái tháo đường</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.electrolyteImbalance}
                  onChange={(e) => update("electrolyteImbalance", e.target.checked)}
                  className="rounded border-neutral-300"
                />
                <span className="text-sm text-neutral-700">Mất cân bằng điện giải</span>
              </label>
            </div>
          </div>

          <div className="sm:col-span-2">
            {fieldErrors._general && (
              <p className="mb-2 text-sm text-red-600" role="alert">
                {fieldErrors._general}
              </p>
            )}
            <button
              type="submit"
              className="inline-flex items-center rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800 focus-ring touch-target"
            >
              Đánh giá Nguy cơ
            </button>
          </div>
        </form>
      </section>

      {/* Results Display */}
      {result && (
        <section aria-labelledby="results-heading" className="space-y-4">
          <h2 id="results-heading" className="heading-4">
            Kết quả Đánh giá Nguy cơ
          </h2>

          <div className="rounded-md border border-neutral-200 bg-white p-4 space-y-4">
            {/* Risk Level */}
            <div
              className={`rounded-lg border-2 p-4 ${getRiskColor(result.riskLevel)}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Mức độ Nguy cơ:</span>
                <span className="text-lg font-bold">{result.riskLabel}</span>
              </div>
              <div className="text-xs">
                Điểm đánh giá: {result.riskScore}/100
              </div>
            </div>

            {/* Risk Factors */}
            {result.riskFactors.length > 0 && (
              <div className="border-t border-neutral-200 pt-4 space-y-2">
                <h3 className="text-sm font-semibold text-neutral-900">
                  Yếu tố Nguy cơ Được Xác định:
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-xs text-neutral-700">
                  {result.riskFactors.map((factor, idx) => (
                    <li key={idx}>{factor}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recommendations */}
            {result.recommendations.length > 0 && (
              <div className="border-t border-neutral-200 pt-4 space-y-2">
                <h3 className="text-sm font-semibold text-neutral-900">
                  Khuyến nghị (Giáo dục):
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-xs text-neutral-700">
                  {result.recommendations.map((rec, idx) => (
                    <li key={idx}>{rec}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Warnings */}
            {result.warnings.length > 0 && (
              <div className="border-t border-neutral-200 pt-4 space-y-2">
                <h3 className="text-sm font-semibold text-amber-900">Lưu ý:</h3>
                <ul className="list-disc space-y-1 pl-5 text-xs text-amber-800">
                  {result.warnings.map((warning, idx) => (
                    <li key={idx}>{warning}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Explanations */}
            {result.explanations.length > 0 && (
              <div className="border-t border-neutral-200 pt-4 space-y-2">
                <h3 className="text-sm font-semibold text-neutral-900">Giải thích:</h3>
                <ul className="list-disc space-y-1 pl-5 text-xs text-neutral-700">
                  {result.explanations.map((explanation, idx) => (
                    <li key={idx}>{explanation}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Clinical Notes */}
            {result.clinicalNotes.length > 0 && (
              <div className="border-t border-neutral-200 pt-4 space-y-2">
                <h3 className="text-sm font-semibold text-neutral-900">
                  Ghi chú Lâm sàng:
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-xs text-neutral-700">
                  {result.clinicalNotes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
