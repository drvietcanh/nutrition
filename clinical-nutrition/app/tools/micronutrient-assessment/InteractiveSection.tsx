"use client";

import { useState } from "react";
import type { ClinicalInput } from "../../../lib/clinical-input";
import { calculateMicronutrientRequirements } from "../../../lib/calculators/micronutrients";
import type { MicronutrientAssessmentResult } from "../../../lib/calculators/micronutrients";
import { validateAge } from "../../../lib/utils/validation";
import { parseNumber, formatNumber } from "../../../lib/utils/formatting";

interface FormState {
  ageYears: string;
  sex: ClinicalInput["sex"];
  weightKg: string;
  pregnancy: boolean;
  lactation: boolean;
  renalDisease: boolean;
  liverDisease: boolean;
}

const initialFormState: FormState = {
  ageYears: "",
  sex: null,
  weightKg: "",
  pregnancy: false,
  lactation: false,
  renalDisease: false,
  liverDisease: false,
};

export function InteractiveSection() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [result, setResult] = useState<MicronutrientAssessmentResult | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const toClinicalInput = (): ClinicalInput => {
    return {
      ageYears: parseNumber(form.ageYears),
      sex: form.sex ?? null,
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
      const calculated = calculateMicronutrientRequirements(input, {
        pregnancy: form.pregnancy,
        lactation: form.lactation,
        renalDisease: form.renalDisease,
        liverDisease: form.liverDisease,
      });
      setResult(calculated);
    } catch (error) {
      console.error("Error calculating micronutrient requirements:", error);
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
          Chỉ sử dụng giá trị giả định, ẩn danh. Mục đích là hiểu cách tuổi, giới tính,
          và tình trạng lâm sàng định hình nhu cầu vi chất.
        </p>

        <form
          className="grid gap-4 rounded-md border border-neutral-200 bg-white p-4 sm:grid-cols-2 sm:gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleCalculate();
          }}
          aria-label="Form nhập thông tin để đánh giá nhu cầu vi chất"
          noValidate
        >
          <div role="alert" aria-live="polite" aria-atomic="true" className="sr-only">
            {Object.keys(fieldErrors).length > 0 && (
              <span>
                Có {Object.keys(fieldErrors).length} lỗi trong form. Vui lòng kiểm tra lại.
              </span>
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
              Tuổi ảnh hưởng đến nhu cầu vi chất, đặc biệt ở trẻ em và người lớn tuổi.
            </p>
          </div>

          {/* Sex */}
          <div className="space-y-1">
            <label
              htmlFor="sex"
              className="block text-xs font-medium text-neutral-800 sm:text-sm"
            >
              Giới tính
            </label>
            <select
              id="sex"
              className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
              value={form.sex ?? ""}
              onChange={(e) =>
                update("sex", (e.target.value || null) as ClinicalInput["sex"])
              }
            >
              <option value="">Chọn (tùy chọn)</option>
              <option value="female">Nữ</option>
              <option value="male">Nam</option>
              <option value="intersex">Liên giới tính</option>
              <option value="unspecified">Không xác định</option>
              <option value="unknown">Không biết</option>
            </select>
            <p className="text-xs text-neutral-600">
              Giới tính ảnh hưởng đến nhu cầu một số vi chất (ví dụ, sắt, kẽm).
            </p>
          </div>

          {/* Weight (optional but helpful) */}
          <div className="space-y-1">
            <label
              htmlFor="weightKg"
              className="block text-xs font-medium text-neutral-800 sm:text-sm"
            >
              Cân nặng (kg)
            </label>
            <input
              id="weightKg"
              type="number"
              inputMode="decimal"
              min={0}
              step="0.1"
              className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
              placeholder="ví dụ: 70"
              value={form.weightKg}
              onChange={(e) => update("weightKg", e.target.value)}
            />
            <p className="text-xs text-neutral-600">
              Cân nặng là tùy chọn nhưng có thể hữu ích cho một số đánh giá.
            </p>
          </div>

          {/* Clinical Conditions */}
          <div className="sm:col-span-2 space-y-3">
            <h3 className="text-sm font-semibold text-neutral-900">
              Tình trạng đặc biệt (chọn nếu có):
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.pregnancy}
                  onChange={(e) => update("pregnancy", e.target.checked)}
                  className="rounded border-neutral-300"
                />
                <span className="text-sm text-neutral-700">Thai kỳ</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.lactation}
                  onChange={(e) => update("lactation", e.target.checked)}
                  className="rounded border-neutral-300"
                />
                <span className="text-sm text-neutral-700">Cho con bú</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.renalDisease}
                  onChange={(e) => update("renalDisease", e.target.checked)}
                  className="rounded border-neutral-300"
                />
                <span className="text-sm text-neutral-700">Bệnh thận</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.liverDisease}
                  onChange={(e) => update("liverDisease", e.target.checked)}
                  className="rounded border-neutral-300"
                />
                <span className="text-sm text-neutral-700">Bệnh gan</span>
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
              Tính Nhu cầu Vi chất
            </button>
          </div>
        </form>
      </section>

      {/* Results Display */}
      {result && (
        <section aria-labelledby="results-heading" className="space-y-4">
          <h2 id="results-heading" className="heading-4">
            Kết quả Đánh giá Nhu cầu Vi chất
          </h2>

          <div className="rounded-md border border-neutral-200 bg-white p-4 space-y-4">
            {/* Requirements Table */}
            {result.requirements.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="text-left py-2 px-3 font-semibold text-neutral-900">
                        Vi chất
                      </th>
                      <th className="text-right py-2 px-3 font-semibold text-neutral-900">
                        Nhu cầu Khuyến nghị
                      </th>
                      <th className="text-left py-2 px-3 font-semibold text-neutral-900">
                        Ghi chú
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.requirements.map((req, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-neutral-100 last:border-b-0"
                      >
                        <td className="py-2 px-3 font-medium text-neutral-900">
                          {req.name}
                        </td>
                        <td className="py-2 px-3 text-right text-neutral-700">
                          {req.recommendedIntake == null
                            ? "—"
                            : typeof req.recommendedIntake === "number"
                            ? `${formatNumber(req.recommendedIntake)} ${req.unit}`
                            : `${formatNumber(req.recommendedIntake.lower)}–${formatNumber(req.recommendedIntake.upper)} ${req.unit}`}
                        </td>
                        <td className="py-2 px-3 text-xs text-neutral-600">
                          {req.notes[0]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
