"use client";

import { useState } from "react";
import type { ClinicalInput } from "../../../lib/clinical-input";
import { calculateBMIBodyComposition } from "../../../lib/calculators/bmiBodyComposition";
import type { BMIBodyCompositionResult } from "../../../lib/calculators/bmiBodyComposition";
import { validateWeight, validateHeight, validateAge } from "../../../lib/utils/validation";
import { parseNumber, formatNumber, formatWeight } from "../../../lib/utils/formatting";

interface FormState {
  weightKg: string;
  heightCm: string;
  ageYears: string;
  sex: ClinicalInput["sex"];
}

const initialFormState: FormState = {
  weightKg: "",
  heightCm: "",
  ageYears: "",
  sex: null,
};

export function InteractiveSection() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [result, setResult] = useState<BMIBodyCompositionResult | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const toClinicalInput = (): ClinicalInput => {
    return {
      ageYears: parseNumber(form.ageYears),
      sex: form.sex ?? null,
      weightKg: parseNumber(form.weightKg),
      heightCm: parseNumber(form.heightCm),
      recentWeightLossPercent: null,
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

    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      const input = toClinicalInput();
      const calculated = calculateBMIBodyComposition(input);
      setResult(calculated);
    } catch (error) {
      console.error("Error calculating BMI:", error);
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

  return (
    <div className="space-y-6">
      {/* Input Form */}
      <section aria-labelledby="inputs-heading" className="space-y-3">
        <h2 id="inputs-heading" className="heading-4">
          3. Nhập thông tin
        </h2>
        <p className="text-body-sm">
          Chỉ sử dụng giá trị giả định, ẩn danh. Mục đích là hiểu cách cân nặng và chiều cao
          định hình các chỉ số thành phần cơ thể.
        </p>

        <form
          className="grid gap-4 rounded-md border border-neutral-200 bg-white p-4 sm:grid-cols-2 sm:gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleCalculate();
          }}
          aria-label="Form nhập thông tin để tính BMI và thành phần cơ thể"
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
              placeholder="ví dụ: 70"
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
            <p className="text-xs text-neutral-600">
              Tuổi là tùy chọn nhưng có thể hữu ích cho một số đánh giá.
            </p>
          </div>

          {/* Sex */}
          <div className="space-y-1">
            <label
              htmlFor="sex"
              className="block text-xs font-medium text-neutral-800 sm:text-sm"
            >
              Giới tính (cho tính IBW)
            </label>
            <select
              id="sex"
              className={`w-full rounded-md border px-2 py-1 text-sm ${
                fieldErrors.sex ? "border-red-500" : "border-neutral-300"
              }`}
              value={form.sex ?? ""}
              onChange={(e) =>
                update("sex", (e.target.value || null) as ClinicalInput["sex"])
              }
              aria-invalid={!!fieldErrors.sex}
              aria-describedby={fieldErrors.sex ? "sex-error" : undefined}
            >
              <option value="">Chọn (tùy chọn, cần cho IBW)</option>
              <option value="female">Nữ</option>
              <option value="male">Nam</option>
              <option value="intersex">Liên giới tính</option>
              <option value="unspecified">Không xác định</option>
              <option value="unknown">Không biết</option>
            </select>
            {fieldErrors.sex && (
              <p id="sex-error" className="text-xs text-red-600" role="alert">
                {fieldErrors.sex}
              </p>
            )}
            <p className="text-xs text-neutral-600">
              Giới tính cần thiết để tính Cân nặng Lý tưởng (IBW) sử dụng công thức Devine.
            </p>
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
              Tính BMI & Thành phần cơ thể
            </button>
          </div>
        </form>
      </section>

      {/* Results Display */}
      {result && (
        <section aria-labelledby="results-heading" className="space-y-4">
          <h2 id="results-heading" className="heading-4">
            Kết quả Tính toán
          </h2>

          <div className="rounded-md border border-neutral-200 bg-white p-4 space-y-4">
            {/* BMI Result */}
            {result.bmi != null && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-700">BMI:</span>
                  <span className="text-lg font-bold text-neutral-900">
                    {formatNumber(result.bmi, { maximumFractionDigits: 1 })} kg/m²
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">Phân loại:</span>
                  <span className="text-sm font-semibold text-neutral-900">
                    {result.categoryLabel}
                  </span>
                </div>
              </div>
            )}

            {/* IBW Result */}
            {result.idealBodyWeight != null && (
              <div className="space-y-2 border-t border-neutral-200 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-700">
                    Cân nặng Lý tưởng (IBW):
                  </span>
                  <span className="text-lg font-bold text-neutral-900">
                    {formatWeight(result.idealBodyWeight)}
                  </span>
                </div>
                <p className="text-xs text-neutral-600">
                  Tính bằng công thức Devine
                </p>
              </div>
            )}

            {/* ABW Result */}
            {result.adjustedBodyWeight != null && (
              <div className="space-y-2 border-t border-neutral-200 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-700">
                    Cân nặng Điều chỉnh (ABW):
                  </span>
                  <span className="text-lg font-bold text-neutral-900">
                    {formatWeight(result.adjustedBodyWeight)}
                  </span>
                </div>
                <p className="text-xs text-neutral-600">
                  Được tính cho béo phì (BMI ≥ 30)
                </p>
              </div>
            )}

            {/* BSA Result */}
            {result.bodySurfaceArea != null && (
              <div className="space-y-2 border-t border-neutral-200 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-700">
                    Diện tích Bề mặt cơ thể (BSA):
                  </span>
                  <span className="text-lg font-bold text-neutral-900">
                    {formatNumber(result.bodySurfaceArea, {
                      maximumFractionDigits: 2,
                    })}{" "}
                    m²
                  </span>
                </div>
                <p className="text-xs text-neutral-600">
                  Tính bằng công thức Du Bois
                </p>
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
