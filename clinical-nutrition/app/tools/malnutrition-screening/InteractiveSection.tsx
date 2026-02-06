"use client";

import { useState } from "react";
import type { ClinicalInput } from "../../../lib/clinical-input";
import {
  calculateEducationalNrs2002,
  type Nrs2002EducationalResult,
} from "../../../lib/screeners/nrs2002";
import {
  calculateEducationalPgSga,
  type PgSgaEducationalResult,
} from "../../../lib/screeners/pgsga";
import {
  buildMalnutritionInterpretation,
  type InterpretationBlock,
} from "../../../lib/explainers/malnutrition";

type ActiveTool = "nrs-2002" | "pg-sga" | "both";

// Session-only, anonymous inputs used to drive educational screening.
interface MalnutritionFormState {
  ageYears: string;
  sex: ClinicalInput["sex"];
  weightKg: string;
  heightCm: string;
  recentWeightLossPercent: string;
  intakeReductionPercent: string;
  durationReducedIntakeDays: string;
  diseaseContextCode: ClinicalInput["diseaseContextCode"];
}

const initialFormState: MalnutritionFormState = {
  ageYears: "",
  sex: null,
  weightKg: "",
  heightCm: "",
  recentWeightLossPercent: "",
  intakeReductionPercent: "",
  durationReducedIntakeDays: "",
  diseaseContextCode: null,
};

export function InteractiveSection() {
  const [activeTool, setActiveTool] = useState<ActiveTool>("nrs-2002");
  const [form, setForm] = useState<MalnutritionFormState>(initialFormState);
  const [nrsResult, setNrsResult] = useState<Nrs2002EducationalResult | null>(
    null
  );
  const [pgResult, setPgResult] = useState<PgSgaEducationalResult | null>(null);

  // Helper to map the string-based form state into the numeric ClinicalInput model.
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
      recentWeightLossPercent: toNumberOrNull(form.recentWeightLossPercent),
      intakeReductionPercent: toNumberOrNull(form.intakeReductionPercent),
      diseaseContextCode: form.diseaseContextCode ?? null,
      diseaseContextFreeText: undefined,
    };
  };

  const handleRunScreening = () => {
    const input = toClinicalInput();

    // Run only the selected tool(s); both results remain purely in memory.
    if (activeTool === "nrs-2002" || activeTool === "both") {
      setNrsResult(calculateEducationalNrs2002(input));
    }
    if (activeTool === "pg-sga" || activeTool === "both") {
      setPgResult(calculateEducationalPgSga(input));
    }
  };

  return (
    <section aria-label="Công cụ giảng dạy tương tác về nguy cơ suy dinh dưỡng" className="space-y-6">
      <ToolSelector activeTool={activeTool} onChange={setActiveTool} />

      <InputForm
        form={form}
        onChange={setForm}
        onRunScreening={handleRunScreening}
      />

      <ResultPanel
        activeTool={activeTool}
        nrsResult={nrsResult}
        pgResult={pgResult}
      />
    </section>
  );
}

interface ToolSelectorProps {
  activeTool: ActiveTool;
  onChange: (next: ActiveTool) => void;
}

// Lets the user choose which educational screening framework they want to explore.
function ToolSelector({ activeTool, onChange }: ToolSelectorProps) {
  return (
    <section aria-labelledby="tool-selector-heading" className="space-y-3">
      <h2
        id="tool-selector-heading"
        className="text-base font-semibold sm:text-lg"
      >
        2. Chọn góc nhìn sàng lọc
      </h2>
      <p className="text-sm text-neutral-700 sm:text-base">
        Chọn khung sàng lọc bạn muốn khám phá. Cùng một
        đầu vào ẩn danh có thể được giải thích qua NRS-2002, PG-SGA, hoặc cả hai
        cạnh nhau.
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onChange("nrs-2002")}
          className={`rounded-md border px-3 py-2 text-sm shadow-sm ${
            activeTool === "nrs-2002"
              ? "border-neutral-800 bg-neutral-900 text-white"
              : "border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50"
          }`}
        >
          NRS-2002 (giáo dục)
        </button>
        <button
          type="button"
          onClick={() => onChange("pg-sga")}
          className={`rounded-md border px-3 py-2 text-sm shadow-sm ${
            activeTool === "pg-sga"
              ? "border-neutral-800 bg-neutral-900 text-white"
              : "border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50"
          }`}
        >
          PG-SGA (giáo dục)
        </button>
        <button
          type="button"
          onClick={() => onChange("both")}
          className={`rounded-md border px-3 py-2 text-sm shadow-sm ${
            activeTool === "both"
              ? "border-neutral-800 bg-neutral-900 text-white"
              : "border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50"
          }`}
        >
          So sánh cả hai
        </button>
      </div>
      <p className="text-xs text-neutral-600 sm:text-sm">
        Các chế độ xem này là ước tính giáo dục đơn giản hóa. Chúng minh họa
        cách các công cụ suy nghĩ về nguy cơ, không phải cách đưa ra quyết định lâm sàng.
      </p>
    </section>
  );
}

interface InputFormProps {
  form: MalnutritionFormState;
  onChange: (next: MalnutritionFormState) => void;
  onRunScreening: () => void;
}

// Step-by-step input form that collects anonymous, session-only data.
function InputForm({ form, onChange, onRunScreening }: InputFormProps) {
  const update = <K extends keyof MalnutritionFormState>(
    key: K,
    value: MalnutritionFormState[K]
  ) => {
    onChange({ ...form, [key]: value });
  };

  return (
    <section aria-labelledby="inputs-heading" className="space-y-3">
      <h2 id="inputs-heading" className="text-base font-semibold sm:text-lg">
        3. Nhập thông tin lâm sàng ví dụ
      </h2>
      <p className="text-sm text-neutral-700 sm:text-base">
        Chỉ sử dụng giá trị giả định, ẩn danh. Các trường này được giữ
        cố ý nhỏ: chúng ở đây để minh họa các thành phần mà
        công cụ sàng lọc quan tâm, không phải để ghi lại hồ sơ bệnh nhân thực tế.
      </p>

      <form
        className="grid gap-4 rounded-md border border-neutral-200 bg-white p-4 sm:grid-cols-2 sm:gap-6"
        onSubmit={(event) => {
          event.preventDefault();
          onRunScreening();
        }}
      >
        {/* Age */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: NRS-2002 và các công cụ khác có thể cho trọng số thêm cho tuổi cao hơn vì tính dễ tổn thương cơ bản cao hơn."
          >
            Tuổi (năm)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="ví dụ: 45"
            value={form.ageYears}
            onChange={(e) => update("ageYears", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Ví dụ: một người 72 tuổi với cùng mức giảm cân như người 25 tuổi
            có thể được coi là có nguy cơ cao hơn một chút.
          </p>
        </div>

        {/* Sex */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: một số phạm vi tham chiếu và phương trình khác nhau theo giới tính, điều này có thể thay đổi cách 'cân nặng thấp' hoặc 'lượng ăn vào thấp' được giải thích."
          >
            Giới tính (cho giá trị tham chiếu)
          </label>
          <select
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            value={form.sex ?? ""}
            onChange={(e) =>
              update("sex", (e.target.value || null) as MalnutritionFormState["sex"])
            }
          >
            <option value="">Chọn (ví dụ: nữ)</option>
            <option value="female">Nữ</option>
            <option value="male">Nam</option>
            <option value="intersex">Liên giới tính</option>
            <option value="unspecified">Không xác định</option>
            <option value="unknown">Không biết</option>
          </select>
          <p className="text-xs text-neutral-600">
            Ví dụ: một người trưởng thành 60&nbsp;kg có thể thấp cho một giới tính nhưng trong
            phạm vi tham chiếu cho giới tính khác.
          </p>
        </div>

        {/* Current weight */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: cân nặng hiện tại giúp ước tính nhu cầu năng lượng/protein và đặt giảm cân trong bối cảnh."
          >
            Cân nặng hiện tại (kg)
          </label>
          <input
            type="number"
            inputMode="decimal"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="ví dụ: 60"
            value={form.weightKg}
            onChange={(e) => update("weightKg", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Ví dụ: 60&nbsp;kg sau khi mất 6&nbsp;kg trong 3&nbsp;tháng là
            mất 10%.
          </p>
        </div>

        {/* Height */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: chiều cao được sử dụng với cân nặng để suy nghĩ về khối lượng cơ thể (ví dụ: BMI) và tình trạng dinh dưỡng dài hạn."
          >
            Chiều cao (cm)
          </label>
          <input
            type="number"
            inputMode="decimal"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="ví dụ: 165"
            value={form.heightCm}
            onChange={(e) => update("heightCm", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Ví dụ: 60&nbsp;kg ở 165&nbsp;cm cho BMI khoảng 22.
          </p>
        </div>

        {/* Recent weight loss */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: giảm cân không chủ ý trong vài tuần–tháng là một dấu hiệu cảnh báo quan trọng trong cả NRS-2002 và PG-SGA."
          >
            Giảm cân không chủ ý gần đây (%)
          </label>
          <input
            type="number"
            inputMode="decimal"
            min={0}
            max={100}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="ví dụ: 7"
            value={form.recentWeightLossPercent}
            onChange={(e) => update("recentWeightLossPercent", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Ví dụ: mất 7% trong 3&nbsp;tháng thường được coi là
            quan trọng về mặt lâm sàng.
          </p>
        </div>

        {/* Intake reduction */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: ăn ít hơn đáng kể so với bình thường trong vài ngày–tuần làm tăng nguy cơ rằng nhu cầu không được đáp ứng."
          >
            Giảm lượng ăn vào thông thường (%)
          </label>
          <input
            type="number"
            inputMode="decimal"
            min={0}
            max={100}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="ví dụ: 50"
            value={form.intakeReductionPercent}
            onChange={(e) => update("intakeReductionPercent", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Ví dụ: ăn khoảng một nửa so với bình thường (giảm 50%) trong một
            tuần hoặc hơn là một tín hiệu quan tâm mạnh.
          </p>
        </div>

        {/* Duration of reduced intake */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: lượng ăn vào giảm càng lâu, càng có khả năng thiếu hụt tích tụ và chuyển thành giảm cân và ảnh hưởng chức năng."
          >
            Thời gian lượng ăn vào giảm (ngày)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="ví dụ: 7"
            value={form.durationReducedIntakeDays}
            onChange={(e) =>
              update("durationReducedIntakeDays", e.target.value)
            }
          />
          <p className="text-xs text-neutral-600">
            Ví dụ: &gt;7&nbsp;ngày lượng ăn vào giảm rõ ràng thường đáng lo ngại hơn
            so với 1–2&nbsp;ngày xung quanh một bệnh cấp tính.
          </p>
        </div>

        {/* Disease context (optional, selectable) */}
        <div className="space-y-1 sm:col-span-2">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: các tình trạng có gánh nặng viêm hoặc dị hóa cao (ví dụ: phẫu thuật lớn, nhiễm trùng huyết, ung thư tiến triển) làm tăng nguy cơ dinh dưỡng."
          >
            Bối cảnh bệnh (tùy chọn)
          </label>
          <select
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            value={form.diseaseContextCode ?? ""}
            onChange={(e) =>
              update(
                "diseaseContextCode",
                (e.target.value || null) as MalnutritionFormState["diseaseContextCode"]
              )
            }
          >
            <option value="">
              Chọn (tùy chọn, ví dụ: nội khoa chung)
            </option>
            <option value="general_medical">Khoa nội khoa chung</option>
            <option value="surgical">Sau phẫu thuật / ngoại khoa</option>
            <option value="oncology">Ung thư</option>
            <option value="icu">Hồi sức cấp cứu</option>
            <option value="gastrointestinal">Bệnh tiêu hóa</option>
            <option value="renal">Bệnh thận</option>
            <option value="hepatic">Bệnh gan</option>
            <option value="other">Khác / hỗn hợp</option>
          </select>
          <p className="text-xs text-neutral-600">
            Ví dụ: chọn &quot;Ung thư&quot; cho người trưởng thành đang hóa trị,
            hoặc &quot;Sau phẫu thuật / ngoại khoa&quot; sau phẫu thuật lớn.
          </p>
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
          >
            Chạy sàng lọc giáo dục
          </button>
        </div>
      </form>
    </section>
  );
}

interface ResultPanelProps {
  activeTool: ActiveTool;
  nrsResult: Nrs2002EducationalResult | null;
  pgResult: PgSgaEducationalResult | null;
}

// Displays the chosen screening tool result(s) with neutral, advisory wording.
function ResultPanel({ activeTool, nrsResult, pgResult }: ResultPanelProps) {
  const showNrs = activeTool === "nrs-2002" || activeTool === "both";
  const showPg = activeTool === "pg-sga" || activeTool === "both";

  return (
    <section aria-labelledby="result-heading" className="space-y-3">
      <h2 id="result-heading" className="text-base font-semibold sm:text-lg">
        4. Kết quả sàng lọc giáo dục
      </h2>
      <p className="text-sm text-neutral-700 sm:text-base">
        Các bảng dưới đây cho thấy cách mỗi khung sàng lọc có thể suy nghĩ về
        thông tin bạn đã nhập. Đây là các ước tính giáo dục đơn giản hóa
        và <strong>không phải</strong> công cụ chẩn đoán.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {showNrs && (
          <SingleToolResult
            label="NRS-2002"
            result={nrsResult}
            variant="nrs"
          />
        )}
        {showPg && (
          <SingleToolResult
            label="PG-SGA"
            result={pgResult}
            variant="pg"
          />
        )}
      </div>
    </section>
  );
}

type Variant = "nrs" | "pg";

interface SingleToolResultProps {
  label: string;
  result: Nrs2002EducationalResult | PgSgaEducationalResult | null;
  variant: Variant;
}

function SingleToolResult({ label, result, variant }: SingleToolResultProps) {
  if (!result) {
    return (
      <div className="rounded-md border border-dashed border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
        Nhập giá trị ví dụ và chạy sàng lọc để xem {label} có thể
        giải thích chúng theo cách giáo dục như thế nào.
      </div>
    );
  }

  const interpretation: InterpretationBlock = buildMalnutritionInterpretation(
    result.riskCategory
  );

  const riskLabel =
    result.riskCategory === "low"
      ? "Mối quan tâm thấp"
      : result.riskCategory === "increased"
      ? "Mối quan tâm tăng"
      : result.riskCategory === "high"
      ? "Mối quan tâm cao hơn"
      : "Dữ liệu không đủ";

  const badgeColor =
    result.riskCategory === "low"
      ? "bg-emerald-50 text-emerald-800 border-emerald-100"
      : result.riskCategory === "unknown"
      ? "bg-neutral-50 text-neutral-800 border-neutral-200"
      : // increased / high – calm, non-alarming neutral/blue tones
        "bg-sky-50 text-sky-900 border-sky-100";

  return (
    <article className="space-y-3 rounded-md border border-neutral-200 bg-white p-4 text-sm text-neutral-800">
      {/* Header with tool name and category */}
      <header className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs uppercase tracking-wide text-neutral-500">
            Khung sàng lọc
          </p>
          <p className="text-sm font-semibold">
            {variant === "nrs"
              ? "NRS-2002 (ước tính giáo dục)"
              : "PG-SGA (ước tính giáo dục)"}
          </p>
        </div>
        <div
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${badgeColor}`}
        >
          <span>{riskLabel}</span>
          <span className="text-[10px] uppercase tracking-wide text-neutral-500">
            Độ tin cậy: {result.confidence}
          </span>
        </div>
      </header>

      {/* Score and plain-language explanation */}
      <section className="space-y-1">
        <p className="text-xs text-neutral-600">
          Tổng điểm giáo dục (không dùng cho lâm sàng):{" "}
          <strong>
            {result.approximateScore != null
              ? result.approximateScore
              : "không thể tính toán"}
          </strong>
        </p>
        <p className="text-sm text-neutral-800">{result.summaryExplanation}</p>
      </section>

      {/* Why this result appeared */}
      {result.whyThisResult.length > 0 && (
        <section className="space-y-1">
          <p className="text-xs font-semibold text-neutral-700">
            Tại sao kết quả giáo dục này xuất hiện
          </p>
          <ul className="list-disc space-y-1 pl-5 text-xs text-neutral-700">
            {result.whyThisResult.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Interpretation and learning points (uses explainer helper) */}
      <section className="space-y-2 border-t border-dashed border-neutral-200 pt-2">
        <p className="text-xs font-semibold text-neutral-700">
          Giải thích &amp; điểm học tập
        </p>
        <Explainer interpretation={interpretation} />
      </section>

      {/* Missing data / warnings */}
      {(result.missingFields.length > 0 || result.warnings.length > 0) && (
        <section className="space-y-1 rounded-md border border-amber-100 bg-amber-50 p-2 text-xs text-amber-900">
          <p className="font-semibold">Giới hạn của ước tính này</p>
          {result.missingFields.length > 0 && (
            <p>
              Một số thông tin bị thiếu hoặc không rõ ràng:{" "}
              {result.missingFields
                .map((f) => {
                  const labels: Record<string, string> = {
                    weightKg: "cân nặng",
                    heightCm: "chiều cao",
                    ageYears: "tuổi",
                    recentWeightLossPercent: "phần trăm giảm cân gần đây",
                    intakeReductionPercent: "phần trăm giảm lượng ăn vào",
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

interface ExplainerProps {
  interpretation: InterpretationBlock;
}

// Neutral, educational explanation of what the pattern might prompt in practice.
function Explainer({ interpretation }: ExplainerProps) {
  return (
    <div className="space-y-3 text-xs text-neutral-700 sm:text-sm">
      <div>
        <p className="font-semibold">
          Điều này thường có nghĩa gì trong thực hành
        </p>
        <ul className="list-disc space-y-1 pl-5">
          {interpretation.whatItUsuallyMeans.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-semibold">
          Những gì các bác sĩ lâm sàng thường xem xét tiếp theo (không phải hướng dẫn)
        </p>
        <ul className="list-disc space-y-1 pl-5">
          {interpretation.whatCliniciansOftenConsiderNext.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-semibold">Cạm bẫy phổ biến và yếu tố gây nhiễu</p>
        <ul className="list-disc space-y-1 pl-5">
          {interpretation.commonPitfalls.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

