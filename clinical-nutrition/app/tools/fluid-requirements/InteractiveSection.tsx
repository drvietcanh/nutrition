"use client";

import { useState } from "react";
import type { ClinicalInput } from "../../../lib/clinical-input";
import { calculateFluidRequirements } from "../../../lib/calculators/fluidRequirements";
import type { FluidRequirementsResult } from "../../../lib/calculators/fluidRequirements";
import { validateWeight, validateAge } from "../../../lib/utils/validation";
import { parseNumber, formatNumber } from "../../../lib/utils/formatting";

interface FormState {
  weightKg: string;
  ageYears: string;
  fever: boolean;
  diarrhea: boolean;
  vomiting: boolean;
  heartFailure: boolean;
  renalFailure: boolean;
  liverFailure: boolean;
  burns: boolean;
}

const initialFormState: FormState = {
  weightKg: "",
  ageYears: "",
  fever: false,
  diarrhea: false,
  vomiting: false,
  heartFailure: false,
  renalFailure: false,
  liverFailure: false,
  burns: false,
};

export function InteractiveSection() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [result, setResult] = useState<FluidRequirementsResult | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const toClinicalInput = (): ClinicalInput => {
    return {
      ageYears: parseNumber(form.ageYears),
      sex: null,
      weightKg: parseNumber(form.weightKg),
      heightCm: null,
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
      const calculated = calculateFluidRequirements(input, {
        fever: form.fever,
        diarrhea: form.diarrhea,
        vomiting: form.vomiting,
        heartFailure: form.heartFailure,
        renalFailure: form.renalFailure,
        liverFailure: form.liverFailure,
        burns: form.burns,
      });
      setResult(calculated);
    } catch (error) {
      console.error("Error calculating fluid requirements:", error);
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
      {/* Input form */}
      <section aria-labelledby="inputs-heading" className="space-y-3">
        <h2 id="inputs-heading" className="heading-4">
          3. Nhập thông tin
        </h2>
        <p className="text-body-sm">
          Chỉ sử dụng giá trị giả định, ẩn danh. Mục đích là hiểu cách cân nặng, tuổi,
          và tình trạng lâm sàng định hình nhu cầu dịch.
        </p>

        <form
          className="grid gap-4 rounded-md border border-neutral-200 bg-white p-4 sm:grid-cols-2 sm:gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleCalculate();
          }}
          aria-label="Form nhập thông tin để tính nhu cầu dịch"
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
              Tuổi là tùy chọn nhưng cần thiết để tính chính xác cho trẻ em (sử dụng phương pháp Holliday-Segar).
            </p>
          </div>

          {/* Clinical conditions */}
          <div className="sm:col-span-2 space-y-3">
            <h3 className="text-sm font-semibold text-neutral-900">
              Tình trạng lâm sàng (chọn nếu có):
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.fever}
                  onChange={(e) => update("fever", e.target.checked)}
                  className="rounded border-neutral-300"
                />
                <span className="text-sm text-neutral-700">Sốt</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.diarrhea}
                  onChange={(e) => update("diarrhea", e.target.checked)}
                  className="rounded border-neutral-300"
                />
                <span className="text-sm text-neutral-700">Tiêu chảy</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.vomiting}
                  onChange={(e) => update("vomiting", e.target.checked)}
                  className="rounded border-neutral-300"
                />
                <span className="text-sm text-neutral-700">Nôn</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.heartFailure}
                  onChange={(e) => update("heartFailure", e.target.checked)}
                  className="rounded border-neutral-300"
                />
                <span className="text-sm text-neutral-700">Suy tim</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.renalFailure}
                  onChange={(e) => update("renalFailure", e.target.checked)}
                  className="rounded border-neutral-300"
                />
                <span className="text-sm text-neutral-700">Suy thận</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.liverFailure}
                  onChange={(e) => update("liverFailure", e.target.checked)}
                  className="rounded border-neutral-300"
                />
                <span className="text-sm text-neutral-700">Suy gan</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.burns}
                  onChange={(e) => update("burns", e.target.checked)}
                  className="rounded border-neutral-300"
                />
                <span className="text-sm text-neutral-700">Bỏng</span>
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
              Tính nhu cầu dịch
            </button>
          </div>
        </form>
      </section>

      {/* Results display */}
      {result && (
        <section aria-labelledby="results-heading" className="space-y-4">
          <h2 id="results-heading" className="heading-4">
            Kết quả Tính toán
          </h2>

          <div className="rounded-md border border-neutral-200 bg-white p-4 space-y-4">
            {/* Basic requirement */}
            {result.basicRequirement != null && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-700">
                    Nhu cầu dịch cơ bản:
                  </span>
                  <span className="text-lg font-bold text-neutral-900">
                    {formatNumber(result.basicRequirement)} ml/ngày
                  </span>
                </div>
                {result.requirementRange && (
                  <div className="text-xs text-neutral-600">
                    Phạm vi: {formatNumber(result.requirementRange.lower)}–
                    {formatNumber(result.requirementRange.upper)} ml/ngày
                  </div>
                )}
              </div>
            )}

            {/* Adjusted requirement */}
            {result.adjustedRequirement != null &&
              result.adjustedRequirement !== result.basicRequirement && (
                <div className="space-y-2 border-t border-neutral-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-neutral-700">
                      Nhu cầu dịch điều chỉnh:
                    </span>
                    <span className="text-lg font-bold text-neutral-900">
                      {formatNumber(result.adjustedRequirement)} ml/ngày
                    </span>
                  </div>
                  {result.adjustments.length > 0 && (
                    <div className="text-xs text-neutral-600">
                      Điều chỉnh đã áp dụng: {result.adjustments.join(", ")}
                    </div>
                  )}
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

            {/* Clinical notes */}
            {result.clinicalNotes.length > 0 && (
              <div className="border-t border-neutral-200 pt-4 space-y-2">
                <h3 className="text-sm font-semibold text-neutral-900">
                  Ghi chú lâm sàng:
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
