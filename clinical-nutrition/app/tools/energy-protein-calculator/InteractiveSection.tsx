"use client";

import { useState, useMemo } from "react";
import type { ClinicalInput } from "../../../lib/clinical-input";
import {
  calculateSimpleWeightBasedNeeds,
  calculateEquationStyleNeeds,
  type EnergyProteinEducationalResult,
  type EstimationMethod,
} from "../../../lib/calculators/energyProtein";
import {
  validateWeight,
  validateHeight,
  validateAge,
} from "../../../lib/utils/validation";
import { parseNumber } from "../../../lib/utils/formatting";
import { ComparisonChart } from "../../components/Charts";

type MethodTab = EstimationMethod | "both";

interface FormState {
  ageYears: string;
  sex: ClinicalInput["sex"];
  weightKg: string;
  heightCm: string;
  diseaseContextCode: ClinicalInput["diseaseContextCode"];
  activityLevel: "" | "bedrest" | "light" | "mobile";
  bodySizeFlag: "" | "obesity" | "underweight";
}

const initialFormState: FormState = {
  ageYears: "",
  sex: null,
  weightKg: "",
  heightCm: "",
  diseaseContextCode: null,
  activityLevel: "",
  bodySizeFlag: "",
};

export function InteractiveSection() {
  const [activeMethod, setActiveMethod] = useState<MethodTab>("simple-weight-based");
  const [form, setForm] = useState<FormState>(initialFormState);
  const [simpleResult, setSimpleResult] =
    useState<EnergyProteinEducationalResult | null>(null);
  const [equationResult, setEquationResult] =
    useState<EnergyProteinEducationalResult | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const toClinicalInput = (): ClinicalInput => {
    const toNumberOrNull = (value: string): number | null => {
      if (!value.trim()) return null;
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : null;
    };

    return {
      ageYears: toNumberOrNull(form.ageYears),
      sex: form.sex ?? null,
      weightKg: toNumberOrNull(form.weightKg),
      heightCm: toNumberOrNull(form.heightCm),
      recentWeightLossPercent: null,
      intakeReductionPercent: null,
      diseaseContextCode: form.diseaseContextCode ?? null,
      diseaseContextFreeText: undefined,
    };
  };

  const handleEstimate = () => {
    // Validate required fields
    const errors: Record<string, string> = {};
    
    const weight = parseNumber(form.weightKg);
    const weightValidation = validateWeight(weight);
    if (!weightValidation.isValid && weightValidation.error) {
      errors.weightKg = weightValidation.error;
    }

    // Height is required for equation method
    if (activeMethod === "equation-educational" || activeMethod === "both") {
      const height = parseNumber(form.heightCm);
      const heightValidation = validateHeight(height);
      if (!heightValidation.isValid && heightValidation.error) {
        errors.heightCm = heightValidation.error;
      }
    }

    const age = parseNumber(form.ageYears);
    if (age != null) {
      const ageValidation = validateAge(age);
      if (!ageValidation.isValid && ageValidation.error) {
        errors.ageYears = ageValidation.error;
      }
    }

    setFieldErrors(errors);

    // If there are errors, don't proceed
    if (Object.keys(errors).length > 0) {
      return;
    }

    const input = toClinicalInput();

    try {
    if (activeMethod === "simple-weight-based" || activeMethod === "both") {
      setSimpleResult(calculateSimpleWeightBasedNeeds(input));
    }
    if (activeMethod === "equation-educational" || activeMethod === "both") {
      setEquationResult(calculateEquationStyleNeeds(input));
      }
    } catch (error) {
      console.error("Error calculating needs:", error);
      setFieldErrors({
        _general: "Đã xảy ra lỗi khi tính toán. Vui lòng kiểm tra lại các giá trị đã nhập.",
      });
    }
  };

  return (
    <section
      aria-label="Công cụ giảng dạy tương tác về nhu cầu năng lượng và protein"
      className="space-y-6"
    >
      <MethodSelector activeMethod={activeMethod} onChange={setActiveMethod} />

      <InputForm
        form={form}
        onChange={setForm}
        onEstimate={handleEstimate}
        errors={fieldErrors}
        onClearError={(field) => {
          setFieldErrors((prev) => {
            const next = { ...prev };
            delete next[field];
            return next;
          });
        }}
      />

      <ResultPanel
        activeMethod={activeMethod}
        simpleResult={simpleResult}
        equationResult={equationResult}
      />
    </section>
  );
}

interface MethodSelectorProps {
  activeMethod: MethodTab;
  onChange: (next: MethodTab) => void;
}

// Lets the user switch between simple weight-based and equation-style views.
function MethodSelector({ activeMethod, onChange }: MethodSelectorProps) {
  return (
    <section aria-labelledby="method-selector-heading" className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
          3
        </span>
        <h2
          id="method-selector-heading"
          className="text-lg font-semibold text-gray-900 sm:text-xl"
        >
          Chọn phương pháp ước tính
        </h2>
      </div>
      <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
        Các cách tiếp cận khác nhau để ước tính nhu cầu trả lời
        các câu hỏi hơi khác nhau. Sử dụng phần này để so sánh một
        quy tắc đơn giản dựa trên cân nặng với một ước tính
        điều chỉnh stress, kiểu phương trình.
      </p>
      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="button"
          onClick={() => onChange("simple-weight-based")}
          className={`rounded-lg border-2 px-4 py-2.5 text-sm font-medium transition-all focus-ring ${
            activeMethod === "simple-weight-based"
              ? "border-blue-600 bg-blue-600 text-white shadow-md hover:bg-blue-700"
              : "border-neutral-300 bg-white text-neutral-900 shadow-sm hover:border-blue-300 hover:bg-blue-50"
          }`}
        >
          Đơn giản dựa trên cân nặng
        </button>
        <button
          type="button"
          onClick={() => onChange("equation-educational")}
          className={`rounded-lg border-2 px-4 py-2.5 text-sm font-medium transition-all focus-ring ${
            activeMethod === "equation-educational"
              ? "border-blue-600 bg-blue-600 text-white shadow-md hover:bg-blue-700"
              : "border-neutral-300 bg-white text-neutral-900 shadow-sm hover:border-blue-300 hover:bg-blue-50"
          }`}
        >
          Kiểu phương trình (giáo dục)
        </button>
        <button
          type="button"
          onClick={() => onChange("both")}
          className={`rounded-lg border-2 px-4 py-2.5 text-sm font-medium transition-all focus-ring ${
            activeMethod === "both"
              ? "border-blue-600 bg-blue-600 text-white shadow-md hover:bg-blue-700"
              : "border-neutral-300 bg-white text-neutral-900 shadow-sm hover:border-blue-300 hover:bg-blue-50"
          }`}
        >
          So sánh cả hai
        </button>
      </div>
      <p className="text-xs text-neutral-600 sm:text-sm">
        Các phương pháp này cho thấy các cách suy nghĩ khác nhau về cùng một vấn đề.
        Chúng là điểm khởi đầu cho thảo luận, không phải chỉ định.
      </p>
    </section>
  );
}

interface InputFormProps {
  form: FormState;
  onChange: (next: FormState) => void;
  onEstimate: () => void;
  errors: Record<string, string>;
  onClearError: (field: string) => void;
}

// Collects anonymous, session-only inputs needed for weight-based reasoning.
function InputForm({ form, onChange, onEstimate, errors, onClearError }: InputFormProps) {
  const update = <K extends keyof FormState>(
    key: K,
    value: FormState[K]
  ) => onChange({ ...form, [key]: value });

  const fillExample = () => {
    onChange({
      ageYears: "65",
      sex: "male",
      weightKg: "70",
      heightCm: "170",
      diseaseContextCode: "general_medical",
      activityLevel: "light",
      bodySizeFlag: "",
    });
  };

  return (
    <section aria-labelledby="inputs-heading" className="space-y-4">
      <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1">
            <h2 id="inputs-heading" className="text-lg font-semibold text-gray-900 sm:text-xl mb-2">
              Nhập thông tin để tính toán
            </h2>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base mb-4">
              Bạn có thể nhập thông tin của mình hoặc dùng nút "Điền ví dụ" bên dưới để xem cách công cụ hoạt động. 
              Tất cả thông tin chỉ được sử dụng để tính toán, không được lưu trữ.
            </p>
          </div>
          <button
            type="button"
            onClick={fillExample}
            className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors focus-ring whitespace-nowrap"
          >
            Điền ví dụ
          </button>
        </div>

      <form
          className="grid gap-5 sm:grid-cols-2 sm:gap-6"
        onSubmit={(event) => {
          event.preventDefault();
          onEstimate();
        }}
        aria-label="Form nhập thông tin lâm sàng để tính toán nhu cầu năng lượng và protein"
        noValidate
      >
        <div role="alert" aria-live="polite" aria-atomic="true" className="sr-only">
          {Object.keys(errors).length > 0 && (
            <span>
              Có {Object.keys(errors).length} lỗi trong form. Vui lòng kiểm tra lại.
            </span>
          )}
        </div>
        {/* Age */}
        <div className="space-y-2">
          <label
            htmlFor="ageYears"
            className="block text-sm font-medium text-neutral-800 sm:text-base"
            title="Tại sao quan trọng: một số phương trình và hướng dẫn điều chỉnh nhu cầu cho người lớn tuổi hoặc trẻ hơn."
          >
            Tuổi (năm)
          </label>
          <input
            id="ageYears"
            type="number"
            inputMode="numeric"
            min={0}
            className={`w-full rounded-lg border px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.ageYears 
                ? "border-red-500 bg-red-50" 
                : "border-neutral-300 bg-white hover:border-neutral-400"
            }`}
            placeholder="ví dụ: 65"
            value={form.ageYears}
            onChange={(e) => {
              update("ageYears", e.target.value);
              if (errors.ageYears) onClearError("ageYears");
            }}
            aria-invalid={!!errors.ageYears}
            aria-describedby={errors.ageYears ? "ageYears-error ageYears-help" : "ageYears-help"}
          />
          {errors.ageYears && (
            <p id="ageYears-error" className="text-xs font-medium text-red-600" role="alert">
              {errors.ageYears}
            </p>
          )}
          <p id="ageYears-help" className="text-xs leading-relaxed text-neutral-600">
            Ví dụ: một người 30 tuổi và một người 85 tuổi với cùng cân nặng có thể
            có nhu cầu và khả năng chịu đựng khác nhau.
          </p>
        </div>

        {/* Sex */}
        <div className="space-y-2">
          <label
            htmlFor="sex"
            className="block text-sm font-medium text-neutral-800 sm:text-base"
            title="Tại sao quan trọng: giá trị tham chiếu và thành phần cơ thể thường khác nhau theo giới tính."
          >
            Giới tính (cho giá trị tham chiếu)
          </label>
          <select
            id="sex"
            className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm transition-colors hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={form.sex ?? ""}
            onChange={(e) => {
              const value = e.target.value;
              update("sex", value === "" ? null : (value as ClinicalInput["sex"]));
            }}
          >
            <option value="">Chọn (tùy chọn)</option>
            <option value="female">Nữ</option>
            <option value="male">Nam</option>
            <option value="intersex">Liên giới tính</option>
            <option value="unspecified">Không xác định</option>
            <option value="unknown">Không biết</option>
          </select>
          <p className="text-xs leading-relaxed text-neutral-600">
            Ví dụ: một số phương trình sử dụng giới tính như một trong nhiều biến đầu vào.
          </p>
        </div>

        {/* Weight */}
        <div className="space-y-2">
          <label
            htmlFor="weightKg"
            className="block text-sm font-medium text-neutral-800 sm:text-base"
            title="Tại sao quan trọng: hầu hết các phương pháp tại giường sử dụng cân nặng cơ thể như điểm neo chính cho phạm vi năng lượng và protein."
          >
            Cân nặng hiện tại (kg) <span className="text-red-600">*</span>
          </label>
          <input
            id="weightKg"
            type="number"
            inputMode="decimal"
            min={0}
            step="0.1"
            className={`w-full rounded-lg border px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.weightKg 
                ? "border-red-500 bg-red-50" 
                : "border-neutral-300 bg-white hover:border-neutral-400"
            }`}
            placeholder="ví dụ: 70"
            value={form.weightKg}
            onChange={(e) => {
              update("weightKg", e.target.value);
              if (errors.weightKg) onClearError("weightKg");
            }}
            aria-invalid={!!errors.weightKg}
            aria-describedby={errors.weightKg ? "weightKg-error weightKg-help" : "weightKg-help"}
            required
          />
          {errors.weightKg && (
            <p id="weightKg-error" className="text-xs font-medium text-red-600" role="alert">
              {errors.weightKg}
            </p>
          )}
          <p id="weightKg-help" className="text-xs leading-relaxed text-neutral-600">
            Ví dụ: sử dụng 70&nbsp;kg với quy tắc 25–30 kcal/kg cho khoảng
            1750–2100&nbsp;kcal/ngày như một phạm vi khởi đầu.
          </p>
        </div>

        {/* Height */}
        <div className="space-y-2">
          <label
            htmlFor="heightCm"
            className="block text-sm font-medium text-neutral-800 sm:text-base"
            title="Tại sao quan trọng: chiều cao giúp giải thích cân nặng (ví dụ, qua BMI hoặc cân nặng điều chỉnh trong béo phì)."
          >
            Chiều cao (cm)
          </label>
          <input
            id="heightCm"
            type="number"
            inputMode="decimal"
            min={0}
            step="0.1"
            className={`w-full rounded-lg border px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.heightCm 
                ? "border-red-500 bg-red-50" 
                : "border-neutral-300 bg-white hover:border-neutral-400"
            }`}
            placeholder="ví dụ: 170"
            value={form.heightCm}
            onChange={(e) => {
              update("heightCm", e.target.value);
              if (errors.heightCm) onClearError("heightCm");
            }}
            aria-invalid={!!errors.heightCm}
            aria-describedby={errors.heightCm ? "heightCm-error heightCm-help" : "heightCm-help"}
          />
          {errors.heightCm && (
            <p id="heightCm-error" className="text-xs font-medium text-red-600" role="alert">
              {errors.heightCm}
            </p>
          )}
          <p id="heightCm-help" className="text-xs leading-relaxed text-neutral-600">
            Ví dụ: 70&nbsp;kg ở 170&nbsp;cm có bối cảnh khác với
            70&nbsp;kg ở 150&nbsp;cm.
          </p>
        </div>

        {/* Disease context */}
        <div className="space-y-2 sm:col-span-2">
          <label
            htmlFor="diseaseContextCode"
            className="block text-sm font-medium text-neutral-800 sm:text-base"
            title="Tại sao quan trọng: bối cảnh lâm sàng stress cao hơn (ví dụ: phẫu thuật lớn, nhiễm trùng huyết, ICU) thường dẫn đến nhu cầu ước tính cao hơn."
          >
            Bối cảnh lâm sàng (bệnh tật / mức độ stress, tùy chọn)
          </label>
          <select
            id="diseaseContextCode"
            className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm transition-colors hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={form.diseaseContextCode ?? ""}
            onChange={(e) => {
              const value = e.target.value;
              update(
                "diseaseContextCode",
                value === "" ? null : (value as ClinicalInput["diseaseContextCode"])
              );
            }}
          >
            <option value="">
              Chọn (tùy chọn, ví dụ: ổn định / bệnh nhẹ)
            </option>
            <option value="general_medical">
              Ổn định / bệnh nhẹ (khoa nội khoa chung)
            </option>
            <option value="surgical">
              Stress trung bình (sau phẫu thuật / ngoại khoa)
            </option>
            <option value="oncology">
              Stress trung bình–cao (ung thư, điều trị tích cực)
            </option>
            <option value="icu">
              Bệnh nặng / chăm sóc cấp cứu (ICU)
            </option>
            <option value="gastrointestinal">
              Bệnh tiêu hóa (kém hấp thu, IBD, viêm tụy)
            </option>
            <option value="renal">Bệnh thận</option>
            <option value="hepatic">Bệnh gan</option>
            <option value="other">Khác / hỗn hợp</option>
          </select>
          <p className="text-xs leading-relaxed text-neutral-600">
            Ví dụ: chọn &quot;Bệnh nặng / chăm sóc cấp cứu&quot; sẽ
            minh họa cách điều chỉnh stress có thể đẩy phạm vi lên cao hơn so
            với khoa nội khoa chung ổn định.
          </p>
        </div>

        {/* Activity level (optional) */}
        <div className="space-y-2">
          <label
            htmlFor="activityLevel"
            className="block text-sm font-medium text-neutral-800 sm:text-base"
            title="Tại sao quan trọng: bệnh nhân di chuyển nhiều hơn thường có tiêu hao năng lượng cao hơn một chút so với những người nằm liệt giường nghiêm ngặt."
          >
            Mức độ hoạt động (tùy chọn)
          </label>
          <select
            id="activityLevel"
            className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm transition-colors hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={form.activityLevel}
            onChange={(e) =>
              update("activityLevel", e.target.value as FormState["activityLevel"])
            }
          >
            <option value="">Chọn (ví dụ: nằm liệt giường)</option>
            <option value="bedrest">Nằm liệt giường / chủ yếu trên giường</option>
            <option value="light">
              Hoạt động nhẹ (chủ yếu trên ghế / đi bộ ngắn)
            </option>
            <option value="mobile">
              Di chuyển trong khoa (đi bộ độc lập, phục hồi chức năng)
            </option>
          </select>
          <p className="text-xs leading-relaxed text-neutral-600">
            Ví dụ: một bệnh nhân di chuyển độc lập có thể dung nạp cuối cao hơn
            của phạm vi năng lượng dễ dàng hơn so với ai đó nằm liệt giường nghiêm ngặt.
          </p>
        </div>

        {/* Obesity / underweight flag (optional, educational) */}
        <div className="space-y-2">
          <label
            htmlFor="bodySizeFlag"
            className="block text-sm font-medium text-neutral-800 sm:text-base"
            title="Tại sao quan trọng: kích thước cơ thể rất thấp hoặc rất cao có thể thay đổi cách các bác sĩ lâm sàng sử dụng quy tắc đơn giản dựa trên cân nặng và khi nào họ xem xét cân nặng điều chỉnh."
          >
            Bối cảnh kích thước cơ thể (tùy chọn, giáo dục)
          </label>
          <select
            id="bodySizeFlag"
            className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm transition-colors hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={form.bodySizeFlag}
            onChange={(e) =>
              update("bodySizeFlag", e.target.value as FormState["bodySizeFlag"])
            }
          >
            <option value="">Chọn (ví dụ: phạm vi điển hình)</option>
            <option value="underweight">Thiếu cân / BMI thấp</option>
            <option value="obesity">
              Béo phì (nơi cân nặng điều chỉnh có thể được thảo luận)
            </option>
          </select>
          <p className="text-xs leading-relaxed text-neutral-600">
            Ví dụ: trong béo phì nặng, một số nhóm thảo luận sử dụng cân nặng điều chỉnh hoặc
            cân nặng lý tưởng khi áp dụng quy tắc g/kg.
          </p>
        </div>

        {errors._general && (
          <div className="sm:col-span-2 rounded-lg border-2 border-red-300 bg-red-50 p-4">
            <p className="text-sm font-medium text-red-800" role="alert">
              {errors._general}
            </p>
          </div>
        )}
        <div className="sm:col-span-2 pt-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-800"
          >
            Hiển thị phạm vi giáo dục
          </button>
        </div>
      </form>
      </div>
    </section>
  );
}

interface ResultPanelProps {
  activeMethod: MethodTab;
  simpleResult: EnergyProteinEducationalResult | null;
  equationResult: EnergyProteinEducationalResult | null;
}

// Shows calm, advisory ranges for each selected method.
function ResultPanel({
  activeMethod,
  simpleResult,
  equationResult,
}: ResultPanelProps) {
  const showSimple =
    activeMethod === "simple-weight-based" || activeMethod === "both";
  const showEquation =
    activeMethod === "equation-educational" || activeMethod === "both";

  return (
    <section aria-labelledby="results-heading" className="space-y-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
          5
        </span>
        <h2 id="results-heading" className="text-lg font-semibold text-gray-900 sm:text-xl">
          Kết quả Tính toán
        </h2>
      </div>
      <div className="rounded-lg border border-green-200 bg-green-50 p-4 mb-4">
        <p className="text-sm text-green-900">
          <strong>Giải thích kết quả:</strong> Dưới đây là khoảng năng lượng (kcal) và protein (g) 
          mà cơ thể cần mỗi ngày dựa trên thông tin bạn đã nhập. Đây là <strong>khoảng ước tính</strong>, 
          không phải số chính xác. Trong thực tế, nhu cầu có thể thay đổi và cần được điều chỉnh 
          dựa trên phản ứng của cơ thể.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {showSimple && (
          <SingleMethodResult
            heading="Simple weight-based"
            result={simpleResult}
          />
        )}
        {showEquation && (
          <SingleMethodResult
            heading="Equation-style (educational)"
            result={equationResult}
          />
        )}
      </div>
    </section>
  );
}

interface SingleMethodResultProps {
  heading: string;
  result: EnergyProteinEducationalResult | null;
}

function SingleMethodResult({ heading, result }: SingleMethodResultProps) {
  if (!result) {
    return (
      <div className="rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 p-6 text-center text-sm leading-relaxed text-neutral-700">
        Nhập giá trị ví dụ và chạy ước tính để xem cách tiếp cận này
        khung nhu cầu năng lượng và protein hàng ngày.
      </div>
    );
  }

  const { ranges } = result;

  const energyText =
    ranges.energyKcalPerDay &&
    `${ranges.energyKcalPerDay.lower.toLocaleString()}–${ranges.energyKcalPerDay.upper.toLocaleString()} kcal/ngày`;

  const proteinText =
    ranges.proteinGramsPerDay &&
    `${ranges.proteinGramsPerDay.lower.toLocaleString()}–${ranges.proteinGramsPerDay.upper.toLocaleString()} g/ngày`;

  const proteinPerKgText =
    ranges.proteinGramsPerKgPerDay &&
    `${ranges.proteinGramsPerKgPerDay.lower}–${ranges.proteinGramsPerKgPerDay.upper} g/kg/ngày`;

  return (
    <article className="space-y-3 rounded-md border border-neutral-200 bg-white p-4 text-sm text-neutral-800">
      <header className="space-y-1">
        <p className="text-xs uppercase tracking-wide text-neutral-500">
          Cách tiếp cận ước tính
        </p>
        <p className="text-sm font-semibold">{heading}</p>
        <p className="text-xs text-neutral-600">{result.methodLabel}</p>
      </header>

      <section className="space-y-1">
        <p className="text-xs font-semibold text-neutral-700">
          Phạm vi hàng ngày minh họa
        </p>
        <ul className="space-y-0.5 text-xs text-neutral-700">
          <li>
            năng lượng:{" "}
            <strong>{energyText ?? "dữ liệu không đủ để minh họa"}</strong>
          </li>
          <li>
            Protein (tổng):{" "}
            <strong>{proteinText ?? "dữ liệu không đủ để minh họa"}</strong>
          </li>
          <li>
            Protein (mỗi kg):{" "}
            <strong>
              {proteinPerKgText ?? "dữ liệu không đủ để minh họa"}
            </strong>
          </li>
        </ul>

        {/* Simple visual band to support comparison between methods.
            This band is qualitative and not drawn to scale. */}
        {ranges.energyKcalPerDay && (
          <div className="mt-2 space-y-1">
            <div className="h-2 w-full rounded-full bg-neutral-100">
              <div className="h-2 w-3/4 rounded-full bg-sky-100" />
            </div>
            <p className="text-[11px] text-neutral-500">
              Chỉ là dải trực quan (không theo tỷ lệ). Sử dụng các con số ở trên cho
              phạm vi gần đúng.
            </p>
          </div>
        )}
      </section>

      {/* Interpretation, assumptions & learning points */}
      <InterpretationBlock
        explanation={result.explanation}
        clinicalContextNotes={result.clinicalContextNotes}
      />

      {/* Common pitfalls */}
      {(result.warnings.length > 0 || result.missingFields.length > 0) && (
        <section className="space-y-1 rounded-md border border-amber-100 bg-amber-50 p-2 text-xs text-amber-900">
          <p className="font-semibold">Cạm bẫy phổ biến và lưu ý</p>
          {result.missingFields.length > 0 && (
            <p>
              Một số thông tin bị thiếu hoặc không rõ ràng:{" "}
              {result.missingFields
                .map((f) => {
                  const labels: Record<string, string> = {
                    weightKg: "cân nặng",
                    heightCm: "chiều cao",
                    diseaseContextCode: "bối cảnh bệnh",
                  };
                  return labels[f] || f;
                })
                .join(", ")}.
            </p>
          )}
          {result.warnings.length > 0 && (
            <ul className="list-disc space-y-0.5 pl-5">
              {result.warnings.map((warning) => (
                <li key={warning}>{warning}</li>
              ))}
            </ul>
          )}
        </section>
      )}
    </article>
  );
}

interface InterpretationBlockProps {
  explanation: string[];
  clinicalContextNotes: string[];
}

// Neutral, educational interpretation block explaining assumptions and typical use.
function InterpretationBlock({
  explanation,
  clinicalContextNotes,
}: InterpretationBlockProps) {
  return (
    <section className="space-y-1 border-t border-dashed border-neutral-200 pt-2">
      <p className="text-xs font-semibold text-neutral-700">
        Giả định chính, giải thích &amp; điểm học tập
      </p>
      <ul className="list-disc space-y-1 pl-5 text-xs text-neutral-700">
        {explanation.map((line) => (
          <li key={line}>{line}</li>
        ))}
        {clinicalContextNotes.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </section>
  );
}

